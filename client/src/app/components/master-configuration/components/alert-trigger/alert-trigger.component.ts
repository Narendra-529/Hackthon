import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from "@angular/core";
import { COMMA, ENTER } from "@angular/cdk/keycodes";

import {
  MatAutocomplete,
  MatAutocompleteSelectedEvent,
  MatAutocompleteTrigger,
} from "@angular/material/autocomplete";
import { MatChipInputEvent } from "@angular/material/chips";

import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import {
  debounceTime,
  map,
  Observable,
  pairwise,
  startWith,
  Subject,
  take,
  takeUntil,
  tap,
} from "rxjs";
import { getFormErrors, numberValidator, rangeValidator } from "../../utils";
import { forLongerThan, units, userGroups, users } from "../../constants";
import { ValidationError } from "@app/interfaces";
import { AlertService } from "../../services/alert.service";

@Component({
  selector: "app-alert-trigger",
  templateUrl: "./alert-trigger.component.html",
  styleUrl: "./alert-trigger.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertTriggerComponent {
  @ViewChild(MatAutocompleteTrigger) auto: MatAutocompleteTrigger;
  @ViewChild("tagsInput", { static: false })
  tagsInput: ElementRef<HTMLInputElement>;

  @Input() initialData
 


  @Output() dataEvent = new EventEmitter<any>();

  tempUserslist = {
    1:[],
    2:[]
  }

  parameters = [
    "Co2 Emission level",
    "So2 Emission level",
    "No2 Emission level",
    "CO Emission level",
    "CH4 Emission level",
    "VOCs(Volatile Organic Compounds) Emission level",
    "Particulate Matter (PM) level",
  ];

  users = users;
  userGroups = userGroups;
  units = units;
  forLongerThan = forLongerThan;

  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  matrixHeaderTagsCtrl: FormControl = new FormControl();
  matrixHeaderFilteredTags: Observable<string[]>;
  matrixHeadertags: string[] = [];
  matrixHeaderNewTags: string[] = [];
  matrixHeaderAllTags: string[] = [];
  errors: ValidationError = {};

  triggersForm: FormGroup = this.fb.group({
    parameter: [null, [Validators.required]],
    alertTriggerType: [null, [Validators.required]],
    aboveRange: [null, []],
    belowRange: [null, []],
    units: [null, [Validators.required]],
    alertType: [null, [Validators.required]],

    forLongerThan: ["", [Validators.required]],
    sendTo: [null, [Validators.required]],
    userInfo: [[], [Validators.required]],
  });

  @Output() riskMatrixFormErrorEvent = new EventEmitter<any>();

  unsubscribe$ = new Subject<void>();

  plants = [
    // this is just a dummy data will be fetched from the server later
    {
      plantId: "1231asd1",
      plantName: "Plant 1",
    },
    {
      plantId: "sdfsdfsasd2",
      plantName: "Plant 2",
    },
    {
      plantId: "12sdfdfsdfsf3",
      plantName: "Plant 3",
    },
  ];

  onForLongerThanChange(event: any) {
    this.triggersForm.get("forLongerThan").setValue(event);
  }
  onUnitChange(event: any) {
    this.triggersForm.get("units").setValue(event);
  }

  constructor(private fb: FormBuilder, private cdr: ChangeDetectorRef,
    private alertSer:AlertService
  ) {
    this.triggersForm.get("userInfo").disable();

    const check = this.checkFormValidity();
    if (check) {
      this.emitErrorEvent({});
    } else {
      this.emitErrorEvent({ text: "12" });

      // this.emitErrorEvent(headerFormErrors);
    }
  }

  ngOnInit() {

    if(this.initialData){
      
    }

    this.alertSer.Changeddata.pipe(take(1)).subscribe((data)=>{
      this.triggersForm.patchValue(data.trigger)
      const check = this.checkFormValidity();
      if (check) {
        this.emitErrorEvent({});
      } else {
        this.emitErrorEvent({ text: "12" });

      }
    })

    // this.riskMatrixFormErrorEvent.emit({
    //   status: "INVALID",
    //   message: `Please fill all the required fields`,
    // });
    this.triggersForm.valueChanges
      .pipe(debounceTime(500), takeUntil(this.unsubscribe$))
      .subscribe((data) => {
        const headerFormErrors = getFormErrors(this.triggersForm);
        this.dataEvent.emit(data);
        const check = this.checkFormValidity();
        if (check) {
          this.emitErrorEvent({});
        } else {
          this.emitErrorEvent({ text: "12" });

          // this.emitErrorEvent(headerFormErrors);
        }
      });

    this.triggersForm
      .get("alertTriggerType")
      .valueChanges.subscribe((value) => {
        const aboveRange = this.triggersForm.get("aboveRange");
        const belowRange = this.triggersForm.get("belowRange");
        aboveRange.setValue(null);
        belowRange.setValue(null);
        aboveRange.markAsUntouched();
        belowRange.markAsUntouched();
        if (value === "1") {
          // this.triggersForm.removeValidators(rangeValidator());
          this.triggersForm.removeValidators([rangeValidator()]);
          aboveRange.setValidators([Validators.required, numberValidator()]);
          belowRange.removeValidators([Validators.required, numberValidator()]);
        }
        if (value === "2") {
          // this.triggersForm.removeValidators(rangeValidator());
          this.triggersForm.removeValidators([rangeValidator()]);
          aboveRange.removeValidators([Validators.required, numberValidator()]);
          belowRange.setValidators([Validators.required, numberValidator()]);
        }
        if (value === "3") {
          aboveRange.setValidators([Validators.required, numberValidator()]);
          belowRange.setValidators([Validators.required, numberValidator()]);

          this.triggersForm.setValidators([rangeValidator()]);
          // this.triggersForm.get('aboveRange').setValidators([Validators.required,numberValidator()]);
          // this.triggersForm.get('belowRange').setValidators([Validators.required,numberValidator()]);
          // this.triggersForm.get('aboveRange').setValue(null);
          // this.triggersForm.get('belowRange').setValue(null);
        }
      });

    this.triggersForm
      .get("sendTo")
      .valueChanges.pipe(
        startWith(0),
        pairwise(),
        tap(([prev, current]) => {
          if (prev !== current) {
          //  this.tempUserslist[prev] = [...this.matrixHeadertags];
          //  if(this.tempUserslist[current].length){
          //   this.matrixHeadertags = this.tempUserslist[current];
          //  }
            this.matrixHeadertags = [];
            if(this.tagsInput)
              {

                this.tagsInput.nativeElement.value = "";
              }
            this.matrixHeaderTagsCtrl.patchValue("");
            this.triggersForm.get("userInfo").enable();
            this.triggersForm
              .get("userInfo")
              .setValue([], { emitEvent: false });
          }

          if (current === "1") {
            this.matrixHeaderAllTags = this.userGroups;
            this.matrixHeaderTagsCtrl.patchValue("");
          }
          if (current === "2") {
            this.matrixHeaderAllTags = this.users;
            this.cdr.detectChanges();
            this.matrixHeaderTagsCtrl.patchValue("");
          }
        })
      )
      .subscribe((value) => {
        // console.log('value', value);
        // if (value === '1'){
        //   this.matrixHeaderAllTags = this.userGroups;
        // }
        // if (value === '2'){
        //   this.matrixHeaderAllTags = this.users;
        // }
      });

    this.matrixHeaderFilteredTags = this.matrixHeaderTagsCtrl.valueChanges.pipe(
      map((tag: string | null) =>
        tag ? this.filterTags(tag) : this.matrixHeaderAllTags.slice()
      )
    );


    if(this.initialData){
      const va = this.initialData;
    this.triggersForm.patchValue({
            parameter: va.triggers[0].element,
            alertTriggerType: `${va.triggers[0].type}`,
            aboveRange: va.triggers[0].value,
            belowRange: va.triggers[0].value,
            units: va.triggers[0].unit,
            alertType: `${va.triggers[0].alertType}`,
            forLongerThan: va.triggers[0].longerThan,
            sendTo: `${va.triggers[0].sendTo}`,
            userInfo: va.triggers[0].users,
          })
          if(va.triggers[0].type === '3' ){
            this.triggersForm.setValidators([rangeValidator()]);
            // this.triggersForm.get('alertTriggerType').setValue(`${va.triggers[0].type}`,{emitEvent:true});
          }
          else {
            this.triggersForm.removeValidators([rangeValidator()]);
            // this.triggersForm.get('alertTriggerType').setValue(`${va.triggers[0].type}`,{emitEvent:true});
          }

          this.matrixHeadertags = va.triggers[0].users || []
          //     console.log('sendTo', va.triggers[0].users);
              this.matrixHeaderAllTags = va.triggers[0].sendTo === '1' ? this.users : this.userGroups;
        

        }

  }

  removeAdditionalDetailsTag(tag: string): void {
    tag = tag.trim();
    const idx = this.matrixHeaderAllTags.indexOf(tag);
    if (idx < 0) this.matrixHeaderAllTags.push(tag);
    const index = this.matrixHeadertags.indexOf(tag);
    const isNewTag = this.matrixHeaderNewTags.indexOf(tag);
    if (isNewTag !== -1) {
      // dont push to db list if it is a new tag
      this.matrixHeaderNewTags.splice(isNewTag, 1);
    }

    if (index >= 0) {
      this.matrixHeadertags = [
        ...this.matrixHeadertags.slice(0, index),
        ...this.matrixHeadertags.slice(index + 1),
      ];
      this.tagsInput.nativeElement.value = "";
      this.matrixHeaderTagsCtrl.patchValue("");
      this.triggersForm.patchValue({
        ...this.triggersForm.value,
        userInfo: this.matrixHeadertags,
      });
    }
  }

  emitErrorEvent(formErrors): void {
    if (Object.keys(formErrors).length > 0) {
      this.riskMatrixFormErrorEvent.emit({
        status: "INVALID",
        message: `Please fill all the required fields`,
      });
    } else {
      this.riskMatrixFormErrorEvent.emit({
        status: "VALID",
        message: `Form is valid`,
      });
    }
  }

  addMatrixHeaderTag(event: MatChipInputEvent): void {
    // if (!this.processValidationErrorTags()) {
    //   const input = event.input;
    //   const value = event.value || '';
    //   if (value.trim()) {
    //     this.matrixHeadertags = [...this.matrixHeadertags, value.trim()];
    //     const index = this.matrixHeaderAllTags.indexOf(value.trim());
    //     if (index === -1) {
    //       this.matrixHeaderNewTags.push(value.trim()); // only add if not present in the list
    //       this.matrixHeaderAllTags.push(value.trim());
    //     }
    //   }
    //   if (input) {
    //     input.value = '';
    //   }
    //   this.matrixHeaderTagsCtrl.patchValue('');
    //   this.triggersForm.patchValue({
    //     ...this.triggersForm.value,
    //     userInfo: this.matrixHeadertags
    //   });
    // }
  }
  processValidationErrorTags(): boolean {
    const errors = this.matrixHeaderTagsCtrl.errors;

    this.errors["matrixHeaderTagsCtrl"] = null;
    if (errors) {
      Object.keys(errors).forEach((messageKey) => {
        this.errors["matrixHeaderTagsCtrl"] = {
          name: messageKey,
          length: errors[messageKey]?.requiredLength,
        };
      });
    }
    return this.errors["matrixHeaderTagsCtrl"] === null ? false : true;
  }

  openAutoComplete() {
    if (this.auto && !this.auto.panelOpen) {
      this.auto.openPanel();
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    // this.tempUserslist = []
    const value = event.option.viewValue.trim();
    const index = this.matrixHeadertags.indexOf(value);
    // console.log("index", index,this.matrixHeadertags);
    if (index === -1) {
      this.matrixHeadertags = [...this.matrixHeadertags, value];
    }
    // cson
    // console.log("index", index,this.matrixHeadertags);

    this.tagsInput.nativeElement.value = "";
    this.triggersForm.patchValue({
      ...this.triggersForm.value,
      userInfo: this.matrixHeadertags,
    });
    // console.log("index", index,this.matrixHeadertags);
    
    this.matrixHeaderTagsCtrl.patchValue("");
  }

  filterTags(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.matrixHeaderAllTags.filter((tag) =>
      tag.toLowerCase().includes(filterValue)
    );
  }

  checkFormValidity(): boolean {

    const form = this.triggersForm.getRawValue();
    if (form.parameter && form.alertTriggerType && form.units && form.alertType && form.forLongerThan && form.sendTo && form.userInfo.length) {
      if (form.alertTriggerType === "1") {
        return form.aboveRange;
      } else if (form.alertTriggerType === "2") {
        return form.belowRange;
      } else if (form.alertTriggerType === "3") {
        return form.aboveRange && form.belowRange;
      }

    }
    return false;

    // return 
//     const form = this.triggersForm;
//     const alertTriggerType = form.get("alertTriggerType").value;

//     // Check if all required fields are filled
//     console.log('form.valid', form.errors, form.valid);
//     const isFormComplete = form.valid;
// console.log('isFormComplete', isFormComplete);
//     // Perform additional checks based on alertTriggerType
//     if (alertTriggerType === "1") {

//       return isFormComplete && form.get("aboveRange").valid;
//     } else if (alertTriggerType === "2") {
//       return isFormComplete && form.get("belowRange").valid;
//     } else if (alertTriggerType === "3") {
//       return (
//         isFormComplete &&
//         form.get("aboveRange").valid &&
//         form.get("belowRange").valid
//       );
//     } else {
//       // If alertTriggerType is not valid or missing
//       return false;
//     }
  }


  onParameterChange(event: any) {
    this.triggersForm.get("parameter").setValue(event);
  }
}
