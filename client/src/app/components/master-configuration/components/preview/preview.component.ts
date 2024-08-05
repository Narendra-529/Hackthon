import { Component, Inject, OnInit } from "@angular/core";
import { AlertService } from "../../services/alert.service";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
    selector: "app-preview",
    templateUrl: "./preview.component.html",
    styleUrls: ["./preview.component.scss"],
    })
export class PreviewComponent implements OnInit {
    constructor(
        private alertService:AlertService,
        @Inject(MAT_DIALOG_DATA) public data: any,
    ) {
    }


    recorsInserted = [];


    forLongerThan =[
        '5 Seconds',
        '10 Seconds', 
        '20 Seconds',
        '1 Minute',
        '2 Minutes',
        '5 Minutes',
        '10 Minutes',
        '30 Minutes',
        '60 Minutes',
        '2 Hours',
        '6 Hours',
        '12 Hours',
        '24 Hours'
      ]

      mapLongerThan = {
        '5 Seconds' : 5,
        '10 Seconds' : 10,
        '20 Seconds' : 30,
        '1 Minute' : 60,
        '2 Minutes' : 120,
        '5 Minutes' : 300,
        '10 Minutes' : 600,
        '30 Minutes' : 1800,
        '60 Minutes' : 3600,
        '2 Hours' : 7200,
        '6 Hours' : 21600,
        '12 Hours' : 43200,
        '24 Hours' : 86400
      }


      ngOnInit(): void {
        this.alertService.insertedData.subscribe((data) => {
            console.log("Inserted data",data)
            this.recorsInserted.push(data);
            });
        
      }
      

    onSimulateBtn() {
        console.log("Simulate button clicked",this.data)
        const trigger = this.data.formData.triggers[0];

        console.log('time',this.mapLongerThan[trigger.longerThan])
        this.alertService.startInsertingRecords(trigger.value, this.mapLongerThan[trigger.longerThan],trigger.type,trigger.element,this.data.formData.asset.assetId)

    }
}
