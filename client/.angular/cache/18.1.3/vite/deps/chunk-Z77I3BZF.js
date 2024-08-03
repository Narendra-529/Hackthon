import {
  MatFormFieldControl
} from "./chunk-CLWWIUDQ.js";
import {
  SelectionModel
} from "./chunk-2F4FYE72.js";
import {
  FormGroupDirective,
  NgControl,
  NgForm,
  Validators
} from "./chunk-6JOWPH3J.js";
import {
  ErrorStateMatcher,
  MAT_RIPPLE_GLOBAL_OPTIONS,
  MatCommonModule,
  RippleRenderer,
  mixinColor,
  mixinDisableRipple,
  mixinErrorState,
  mixinTabIndex
} from "./chunk-SWJFBV3K.js";
import {
  FocusKeyManager
} from "./chunk-JTKXKKJK.js";
import {
  BACKSPACE,
  DELETE,
  ENTER,
  SPACE,
  TAB,
  hasModifierKey
} from "./chunk-PX3VSZ3I.js";
import {
  Directionality,
  Platform,
  coerceBooleanProperty
} from "./chunk-CPTXJDSR.js";
import {
  DOCUMENT
} from "./chunk-SJMBSDCY.js";
import {
  ANIMATION_MODULE_TYPE,
  Attribute,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  Directive,
  ElementRef,
  EventEmitter,
  Inject,
  InjectionToken,
  Input,
  NgModule,
  NgZone,
  Optional,
  Output,
  Self,
  ViewEncapsulation$1,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵhostProperty,
  ɵɵinjectAttribute,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵqueryRefresh
} from "./chunk-GMUXDIJ2.js";
import {
  merge
} from "./chunk-TQO6VFQJ.js";
import {
  Subject,
  startWith,
  take,
  takeUntil
} from "./chunk-ODTHBFDQ.js";

// node_modules/@angular/material/fesm2020/chips.mjs
var _c0 = ["*"];
var MatChipSelectionChange = class {
  constructor(source, selected, isUserInput = false) {
    this.source = source;
    this.selected = selected;
    this.isUserInput = isUserInput;
  }
};
var MAT_CHIP_REMOVE = new InjectionToken("MatChipRemove");
var MAT_CHIP_AVATAR = new InjectionToken("MatChipAvatar");
var MAT_CHIP_TRAILING_ICON = new InjectionToken("MatChipTrailingIcon");
var MatChipBase = class {
  constructor(_elementRef) {
    this._elementRef = _elementRef;
  }
};
var _MatChipMixinBase = mixinTabIndex(mixinColor(mixinDisableRipple(MatChipBase), "primary"), -1);
var MatChipAvatar = class {
};
MatChipAvatar.ɵfac = function MatChipAvatar_Factory(ɵt) {
  return new (ɵt || MatChipAvatar)();
};
MatChipAvatar.ɵdir = ɵɵdefineDirective({
  type: MatChipAvatar,
  selectors: [["mat-chip-avatar"], ["", "matChipAvatar", ""]],
  hostAttrs: [1, "mat-chip-avatar"],
  features: [ɵɵProvidersFeature([{
    provide: MAT_CHIP_AVATAR,
    useExisting: MatChipAvatar
  }])]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatChipAvatar, [{
    type: Directive,
    args: [{
      selector: "mat-chip-avatar, [matChipAvatar]",
      host: {
        "class": "mat-chip-avatar"
      },
      providers: [{
        provide: MAT_CHIP_AVATAR,
        useExisting: MatChipAvatar
      }]
    }]
  }], null, null);
})();
var MatChipTrailingIcon = class {
};
MatChipTrailingIcon.ɵfac = function MatChipTrailingIcon_Factory(ɵt) {
  return new (ɵt || MatChipTrailingIcon)();
};
MatChipTrailingIcon.ɵdir = ɵɵdefineDirective({
  type: MatChipTrailingIcon,
  selectors: [["mat-chip-trailing-icon"], ["", "matChipTrailingIcon", ""]],
  hostAttrs: [1, "mat-chip-trailing-icon"],
  features: [ɵɵProvidersFeature([{
    provide: MAT_CHIP_TRAILING_ICON,
    useExisting: MatChipTrailingIcon
  }])]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatChipTrailingIcon, [{
    type: Directive,
    args: [{
      selector: "mat-chip-trailing-icon, [matChipTrailingIcon]",
      host: {
        "class": "mat-chip-trailing-icon"
      },
      providers: [{
        provide: MAT_CHIP_TRAILING_ICON,
        useExisting: MatChipTrailingIcon
      }]
    }]
  }], null, null);
})();
var MatChip = class extends _MatChipMixinBase {
  constructor(elementRef, _ngZone, platform, globalRippleOptions, _changeDetectorRef, _document, animationMode, tabIndex) {
    super(elementRef);
    this._ngZone = _ngZone;
    this._changeDetectorRef = _changeDetectorRef;
    this._hasFocus = false;
    this.chipListSelectable = true;
    this._chipListMultiple = false;
    this._chipListDisabled = false;
    this._selected = false;
    this._selectable = true;
    this._disabled = false;
    this._removable = true;
    this._onFocus = new Subject();
    this._onBlur = new Subject();
    this.selectionChange = new EventEmitter();
    this.destroyed = new EventEmitter();
    this.removed = new EventEmitter();
    this._addHostClassName();
    this._chipRippleTarget = _document.createElement("div");
    this._chipRippleTarget.classList.add("mat-chip-ripple");
    this._elementRef.nativeElement.appendChild(this._chipRippleTarget);
    this._chipRipple = new RippleRenderer(this, _ngZone, this._chipRippleTarget, platform);
    this._chipRipple.setupTriggerEvents(elementRef);
    this.rippleConfig = globalRippleOptions || {};
    this._animationsDisabled = animationMode === "NoopAnimations";
    this.tabIndex = tabIndex != null ? parseInt(tabIndex) || -1 : -1;
  }
  /**
   * Whether ripples are disabled on interaction
   * @docs-private
   */
  get rippleDisabled() {
    return this.disabled || this.disableRipple || this._animationsDisabled || !!this.rippleConfig.disabled;
  }
  /** Whether the chip is selected. */
  get selected() {
    return this._selected;
  }
  set selected(value) {
    const coercedValue = coerceBooleanProperty(value);
    if (coercedValue !== this._selected) {
      this._selected = coercedValue;
      this._dispatchSelectionChange();
    }
  }
  /** The value of the chip. Defaults to the content inside `<mat-chip>` tags. */
  get value() {
    return this._value !== void 0 ? this._value : this._elementRef.nativeElement.textContent;
  }
  set value(value) {
    this._value = value;
  }
  /**
   * Whether or not the chip is selectable. When a chip is not selectable,
   * changes to its selected state are always ignored. By default a chip is
   * selectable, and it becomes non-selectable if its parent chip list is
   * not selectable.
   */
  get selectable() {
    return this._selectable && this.chipListSelectable;
  }
  set selectable(value) {
    this._selectable = coerceBooleanProperty(value);
  }
  /** Whether the chip is disabled. */
  get disabled() {
    return this._chipListDisabled || this._disabled;
  }
  set disabled(value) {
    this._disabled = coerceBooleanProperty(value);
  }
  /**
   * Determines whether or not the chip displays the remove styling and emits (removed) events.
   */
  get removable() {
    return this._removable;
  }
  set removable(value) {
    this._removable = coerceBooleanProperty(value);
  }
  /** The ARIA selected applied to the chip. */
  get ariaSelected() {
    return this.selectable && (this._chipListMultiple || this.selected) ? this.selected.toString() : null;
  }
  _addHostClassName() {
    const basicChipAttrName = "mat-basic-chip";
    const element = this._elementRef.nativeElement;
    if (element.hasAttribute(basicChipAttrName) || element.tagName.toLowerCase() === basicChipAttrName) {
      element.classList.add(basicChipAttrName);
      return;
    } else {
      element.classList.add("mat-standard-chip");
    }
  }
  ngOnDestroy() {
    this.destroyed.emit({
      chip: this
    });
    this._chipRipple._removeTriggerEvents();
  }
  /** Selects the chip. */
  select() {
    if (!this._selected) {
      this._selected = true;
      this._dispatchSelectionChange();
      this._changeDetectorRef.markForCheck();
    }
  }
  /** Deselects the chip. */
  deselect() {
    if (this._selected) {
      this._selected = false;
      this._dispatchSelectionChange();
      this._changeDetectorRef.markForCheck();
    }
  }
  /** Select this chip and emit selected event */
  selectViaInteraction() {
    if (!this._selected) {
      this._selected = true;
      this._dispatchSelectionChange(true);
      this._changeDetectorRef.markForCheck();
    }
  }
  /** Toggles the current selected state of this chip. */
  toggleSelected(isUserInput = false) {
    this._selected = !this.selected;
    this._dispatchSelectionChange(isUserInput);
    this._changeDetectorRef.markForCheck();
    return this.selected;
  }
  /** Allows for programmatic focusing of the chip. */
  focus() {
    if (!this._hasFocus) {
      this._elementRef.nativeElement.focus();
      this._onFocus.next({
        chip: this
      });
    }
    this._hasFocus = true;
  }
  /**
   * Allows for programmatic removal of the chip. Called by the MatChipList when the DELETE or
   * BACKSPACE keys are pressed.
   *
   * Informs any listeners of the removal request. Does not remove the chip from the DOM.
   */
  remove() {
    if (this.removable) {
      this.removed.emit({
        chip: this
      });
    }
  }
  /** Handles click events on the chip. */
  _handleClick(event) {
    if (this.disabled) {
      event.preventDefault();
    }
  }
  /** Handle custom key presses. */
  _handleKeydown(event) {
    if (this.disabled) {
      return;
    }
    switch (event.keyCode) {
      case DELETE:
      case BACKSPACE:
        this.remove();
        event.preventDefault();
        break;
      case SPACE:
        if (this.selectable) {
          this.toggleSelected(true);
        }
        event.preventDefault();
        break;
    }
  }
  _blur() {
    this._ngZone.onStable.pipe(take(1)).subscribe(() => {
      this._ngZone.run(() => {
        this._hasFocus = false;
        this._onBlur.next({
          chip: this
        });
      });
    });
  }
  _dispatchSelectionChange(isUserInput = false) {
    this.selectionChange.emit({
      source: this,
      isUserInput,
      selected: this._selected
    });
  }
};
MatChip.ɵfac = function MatChip_Factory(ɵt) {
  return new (ɵt || MatChip)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Platform), ɵɵdirectiveInject(MAT_RIPPLE_GLOBAL_OPTIONS, 8), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(ANIMATION_MODULE_TYPE, 8), ɵɵinjectAttribute("tabindex"));
};
MatChip.ɵdir = ɵɵdefineDirective({
  type: MatChip,
  selectors: [["mat-basic-chip"], ["", "mat-basic-chip", ""], ["mat-chip"], ["", "mat-chip", ""]],
  contentQueries: function MatChip_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, MAT_CHIP_AVATAR, 5);
      ɵɵcontentQuery(dirIndex, MAT_CHIP_TRAILING_ICON, 5);
      ɵɵcontentQuery(dirIndex, MAT_CHIP_REMOVE, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.avatar = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.trailingIcon = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.removeIcon = _t.first);
    }
  },
  hostAttrs: ["role", "option", 1, "mat-chip", "mat-focus-indicator"],
  hostVars: 14,
  hostBindings: function MatChip_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function MatChip_click_HostBindingHandler($event) {
        return ctx._handleClick($event);
      })("keydown", function MatChip_keydown_HostBindingHandler($event) {
        return ctx._handleKeydown($event);
      })("focus", function MatChip_focus_HostBindingHandler() {
        return ctx.focus();
      })("blur", function MatChip_blur_HostBindingHandler() {
        return ctx._blur();
      });
    }
    if (rf & 2) {
      ɵɵattribute("tabindex", ctx.disabled ? null : ctx.tabIndex)("disabled", ctx.disabled || null)("aria-disabled", ctx.disabled.toString())("aria-selected", ctx.ariaSelected);
      ɵɵclassProp("mat-chip-selected", ctx.selected)("mat-chip-with-avatar", ctx.avatar)("mat-chip-with-trailing-icon", ctx.trailingIcon || ctx.removeIcon)("mat-chip-disabled", ctx.disabled)("_mat-animation-noopable", ctx._animationsDisabled);
    }
  },
  inputs: {
    color: "color",
    disableRipple: "disableRipple",
    tabIndex: "tabIndex",
    selected: "selected",
    value: "value",
    selectable: "selectable",
    disabled: "disabled",
    removable: "removable"
  },
  outputs: {
    selectionChange: "selectionChange",
    destroyed: "destroyed",
    removed: "removed"
  },
  exportAs: ["matChip"],
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatChip, [{
    type: Directive,
    args: [{
      selector: `mat-basic-chip, [mat-basic-chip], mat-chip, [mat-chip]`,
      inputs: ["color", "disableRipple", "tabIndex"],
      exportAs: "matChip",
      host: {
        "class": "mat-chip mat-focus-indicator",
        "[attr.tabindex]": "disabled ? null : tabIndex",
        "role": "option",
        "[class.mat-chip-selected]": "selected",
        "[class.mat-chip-with-avatar]": "avatar",
        "[class.mat-chip-with-trailing-icon]": "trailingIcon || removeIcon",
        "[class.mat-chip-disabled]": "disabled",
        "[class._mat-animation-noopable]": "_animationsDisabled",
        "[attr.disabled]": "disabled || null",
        "[attr.aria-disabled]": "disabled.toString()",
        "[attr.aria-selected]": "ariaSelected",
        "(click)": "_handleClick($event)",
        "(keydown)": "_handleKeydown($event)",
        "(focus)": "focus()",
        "(blur)": "_blur()"
      }
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: NgZone
    }, {
      type: Platform
    }, {
      type: void 0,
      decorators: [{
        type: Optional
      }, {
        type: Inject,
        args: [MAT_RIPPLE_GLOBAL_OPTIONS]
      }]
    }, {
      type: ChangeDetectorRef
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [DOCUMENT]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Optional
      }, {
        type: Inject,
        args: [ANIMATION_MODULE_TYPE]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Attribute,
        args: ["tabindex"]
      }]
    }];
  }, {
    avatar: [{
      type: ContentChild,
      args: [MAT_CHIP_AVATAR]
    }],
    trailingIcon: [{
      type: ContentChild,
      args: [MAT_CHIP_TRAILING_ICON]
    }],
    removeIcon: [{
      type: ContentChild,
      args: [MAT_CHIP_REMOVE]
    }],
    selected: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    selectable: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    removable: [{
      type: Input
    }],
    selectionChange: [{
      type: Output
    }],
    destroyed: [{
      type: Output
    }],
    removed: [{
      type: Output
    }]
  });
})();
var MatChipRemove = class {
  constructor(_parentChip, elementRef) {
    this._parentChip = _parentChip;
    if (elementRef.nativeElement.nodeName === "BUTTON") {
      elementRef.nativeElement.setAttribute("type", "button");
    }
  }
  /** Calls the parent chip's public `remove()` method if applicable. */
  _handleClick(event) {
    const parentChip = this._parentChip;
    if (parentChip.removable && !parentChip.disabled) {
      parentChip.remove();
    }
    event.stopPropagation();
    event.preventDefault();
  }
};
MatChipRemove.ɵfac = function MatChipRemove_Factory(ɵt) {
  return new (ɵt || MatChipRemove)(ɵɵdirectiveInject(MatChip), ɵɵdirectiveInject(ElementRef));
};
MatChipRemove.ɵdir = ɵɵdefineDirective({
  type: MatChipRemove,
  selectors: [["", "matChipRemove", ""]],
  hostAttrs: [1, "mat-chip-remove", "mat-chip-trailing-icon"],
  hostBindings: function MatChipRemove_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function MatChipRemove_click_HostBindingHandler($event) {
        return ctx._handleClick($event);
      });
    }
  },
  features: [ɵɵProvidersFeature([{
    provide: MAT_CHIP_REMOVE,
    useExisting: MatChipRemove
  }])]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatChipRemove, [{
    type: Directive,
    args: [{
      selector: "[matChipRemove]",
      host: {
        "class": "mat-chip-remove mat-chip-trailing-icon",
        "(click)": "_handleClick($event)"
      },
      providers: [{
        provide: MAT_CHIP_REMOVE,
        useExisting: MatChipRemove
      }]
    }]
  }], function() {
    return [{
      type: MatChip
    }, {
      type: ElementRef
    }];
  }, null);
})();
var MAT_CHIPS_DEFAULT_OPTIONS = new InjectionToken("mat-chips-default-options");
var _MatChipListBase = mixinErrorState(class {
  constructor(_defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl) {
    this._defaultErrorStateMatcher = _defaultErrorStateMatcher;
    this._parentForm = _parentForm;
    this._parentFormGroup = _parentFormGroup;
    this.ngControl = ngControl;
  }
});
var nextUniqueId$1 = 0;
var MatChipListChange = class {
  constructor(source, value) {
    this.source = source;
    this.value = value;
  }
};
var MatChipList = class extends _MatChipListBase {
  constructor(_elementRef, _changeDetectorRef, _dir, _parentForm, _parentFormGroup, _defaultErrorStateMatcher, ngControl) {
    super(_defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl);
    this._elementRef = _elementRef;
    this._changeDetectorRef = _changeDetectorRef;
    this._dir = _dir;
    this.controlType = "mat-chip-list";
    this._lastDestroyedChipIndex = null;
    this._destroyed = new Subject();
    this._uid = `mat-chip-list-${nextUniqueId$1++}`;
    this._tabIndex = 0;
    this._userTabIndex = null;
    this._onTouched = () => {
    };
    this._onChange = () => {
    };
    this._multiple = false;
    this._compareWith = (o1, o2) => o1 === o2;
    this._disabled = false;
    this.ariaOrientation = "horizontal";
    this._selectable = true;
    this.change = new EventEmitter();
    this.valueChange = new EventEmitter();
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }
  /** The array of selected chips inside chip list. */
  get selected() {
    return this.multiple ? this._selectionModel?.selected || [] : this._selectionModel?.selected[0];
  }
  /** The ARIA role applied to the chip list. */
  get role() {
    return this.empty ? null : "listbox";
  }
  /** Whether the user should be allowed to select multiple chips. */
  get multiple() {
    return this._multiple;
  }
  set multiple(value) {
    this._multiple = coerceBooleanProperty(value);
    this._syncChipsState();
  }
  /**
   * A function to compare the option values with the selected values. The first argument
   * is a value from an option. The second is a value from the selection. A boolean
   * should be returned.
   */
  get compareWith() {
    return this._compareWith;
  }
  set compareWith(fn) {
    this._compareWith = fn;
    if (this._selectionModel) {
      this._initializeSelection();
    }
  }
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  get value() {
    return this._value;
  }
  set value(value) {
    this.writeValue(value);
    this._value = value;
  }
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  get id() {
    return this._chipInput ? this._chipInput.id : this._uid;
  }
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  get required() {
    return this._required ?? this.ngControl?.control?.hasValidator(Validators.required) ?? false;
  }
  set required(value) {
    this._required = coerceBooleanProperty(value);
    this.stateChanges.next();
  }
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  get placeholder() {
    return this._chipInput ? this._chipInput.placeholder : this._placeholder;
  }
  set placeholder(value) {
    this._placeholder = value;
    this.stateChanges.next();
  }
  /** Whether any chips or the matChipInput inside of this chip-list has focus. */
  get focused() {
    return this._chipInput && this._chipInput.focused || this._hasFocusedChip();
  }
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  get empty() {
    return (!this._chipInput || this._chipInput.empty) && (!this.chips || this.chips.length === 0);
  }
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  get shouldLabelFloat() {
    return !this.empty || this.focused;
  }
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  get disabled() {
    return this.ngControl ? !!this.ngControl.disabled : this._disabled;
  }
  set disabled(value) {
    this._disabled = coerceBooleanProperty(value);
    this._syncChipsState();
  }
  /**
   * Whether or not this chip list is selectable. When a chip list is not selectable,
   * the selected states for all the chips inside the chip list are always ignored.
   */
  get selectable() {
    return this._selectable;
  }
  set selectable(value) {
    this._selectable = coerceBooleanProperty(value);
    if (this.chips) {
      this.chips.forEach((chip) => chip.chipListSelectable = this._selectable);
    }
  }
  set tabIndex(value) {
    this._userTabIndex = value;
    this._tabIndex = value;
  }
  /** Combined stream of all of the child chips' selection change events. */
  get chipSelectionChanges() {
    return merge(...this.chips.map((chip) => chip.selectionChange));
  }
  /** Combined stream of all of the child chips' focus change events. */
  get chipFocusChanges() {
    return merge(...this.chips.map((chip) => chip._onFocus));
  }
  /** Combined stream of all of the child chips' blur change events. */
  get chipBlurChanges() {
    return merge(...this.chips.map((chip) => chip._onBlur));
  }
  /** Combined stream of all of the child chips' remove change events. */
  get chipRemoveChanges() {
    return merge(...this.chips.map((chip) => chip.destroyed));
  }
  ngAfterContentInit() {
    this._keyManager = new FocusKeyManager(this.chips).withWrap().withVerticalOrientation().withHomeAndEnd().withHorizontalOrientation(this._dir ? this._dir.value : "ltr");
    if (this._dir) {
      this._dir.change.pipe(takeUntil(this._destroyed)).subscribe((dir) => this._keyManager.withHorizontalOrientation(dir));
    }
    this._keyManager.tabOut.pipe(takeUntil(this._destroyed)).subscribe(() => {
      this._allowFocusEscape();
    });
    this.chips.changes.pipe(startWith(null), takeUntil(this._destroyed)).subscribe(() => {
      if (this.disabled) {
        Promise.resolve().then(() => {
          this._syncChipsState();
        });
      }
      this._resetChips();
      this._initializeSelection();
      this._updateTabIndex();
      this._updateFocusForDestroyedChips();
      this.stateChanges.next();
    });
  }
  ngOnInit() {
    this._selectionModel = new SelectionModel(this.multiple, void 0, false);
    this.stateChanges.next();
  }
  ngDoCheck() {
    if (this.ngControl) {
      this.updateErrorState();
      if (this.ngControl.disabled !== this._disabled) {
        this.disabled = !!this.ngControl.disabled;
      }
    }
  }
  ngOnDestroy() {
    this._destroyed.next();
    this._destroyed.complete();
    this.stateChanges.complete();
    this._dropSubscriptions();
  }
  /** Associates an HTML input element with this chip list. */
  registerInput(inputElement) {
    this._chipInput = inputElement;
    this._elementRef.nativeElement.setAttribute("data-mat-chip-input", inputElement.id);
  }
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  setDescribedByIds(ids) {
    this._ariaDescribedby = ids.join(" ");
  }
  // Implemented as part of ControlValueAccessor.
  writeValue(value) {
    if (this.chips) {
      this._setSelectionByValue(value, false);
    }
  }
  // Implemented as part of ControlValueAccessor.
  registerOnChange(fn) {
    this._onChange = fn;
  }
  // Implemented as part of ControlValueAccessor.
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  // Implemented as part of ControlValueAccessor.
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
    this.stateChanges.next();
  }
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  onContainerClick(event) {
    if (!this._originatesFromChip(event)) {
      this.focus();
    }
  }
  /**
   * Focuses the first non-disabled chip in this chip list, or the associated input when there
   * are no eligible chips.
   */
  focus(options) {
    if (this.disabled) {
      return;
    }
    if (this._chipInput && this._chipInput.focused) {
    } else if (this.chips.length > 0) {
      this._keyManager.setFirstItemActive();
      this.stateChanges.next();
    } else {
      this._focusInput(options);
      this.stateChanges.next();
    }
  }
  /** Attempt to focus an input if we have one. */
  _focusInput(options) {
    if (this._chipInput) {
      this._chipInput.focus(options);
    }
  }
  /**
   * Pass events to the keyboard manager. Available here for tests.
   */
  _keydown(event) {
    const target = event.target;
    if (target && target.classList.contains("mat-chip")) {
      this._keyManager.onKeydown(event);
      this.stateChanges.next();
    }
  }
  /**
   * Check the tab index as you should not be allowed to focus an empty list.
   */
  _updateTabIndex() {
    this._tabIndex = this._userTabIndex || (this.chips.length === 0 ? -1 : 0);
  }
  /**
   * If the amount of chips changed, we need to update the
   * key manager state and focus the next closest chip.
   */
  _updateFocusForDestroyedChips() {
    if (this._lastDestroyedChipIndex != null) {
      if (this.chips.length) {
        const newChipIndex = Math.min(this._lastDestroyedChipIndex, this.chips.length - 1);
        this._keyManager.setActiveItem(newChipIndex);
      } else {
        this.focus();
      }
    }
    this._lastDestroyedChipIndex = null;
  }
  /**
   * Utility to ensure all indexes are valid.
   *
   * @param index The index to be checked.
   * @returns True if the index is valid for our list of chips.
   */
  _isValidIndex(index) {
    return index >= 0 && index < this.chips.length;
  }
  _setSelectionByValue(value, isUserInput = true) {
    this._clearSelection();
    this.chips.forEach((chip) => chip.deselect());
    if (Array.isArray(value)) {
      value.forEach((currentValue) => this._selectValue(currentValue, isUserInput));
      this._sortValues();
    } else {
      const correspondingChip = this._selectValue(value, isUserInput);
      if (correspondingChip) {
        if (isUserInput) {
          this._keyManager.setActiveItem(correspondingChip);
        }
      }
    }
  }
  /**
   * Finds and selects the chip based on its value.
   * @returns Chip that has the corresponding value.
   */
  _selectValue(value, isUserInput = true) {
    const correspondingChip = this.chips.find((chip) => {
      return chip.value != null && this._compareWith(chip.value, value);
    });
    if (correspondingChip) {
      isUserInput ? correspondingChip.selectViaInteraction() : correspondingChip.select();
      this._selectionModel.select(correspondingChip);
    }
    return correspondingChip;
  }
  _initializeSelection() {
    Promise.resolve().then(() => {
      if (this.ngControl || this._value) {
        this._setSelectionByValue(this.ngControl ? this.ngControl.value : this._value, false);
        this.stateChanges.next();
      }
    });
  }
  /**
   * Deselects every chip in the list.
   * @param skip Chip that should not be deselected.
   */
  _clearSelection(skip) {
    this._selectionModel.clear();
    this.chips.forEach((chip) => {
      if (chip !== skip) {
        chip.deselect();
      }
    });
    this.stateChanges.next();
  }
  /**
   * Sorts the model values, ensuring that they keep the same
   * order that they have in the panel.
   */
  _sortValues() {
    if (this._multiple) {
      this._selectionModel.clear();
      this.chips.forEach((chip) => {
        if (chip.selected) {
          this._selectionModel.select(chip);
        }
      });
      this.stateChanges.next();
    }
  }
  /** Emits change event to set the model value. */
  _propagateChanges(fallbackValue) {
    let valueToEmit = null;
    if (Array.isArray(this.selected)) {
      valueToEmit = this.selected.map((chip) => chip.value);
    } else {
      valueToEmit = this.selected ? this.selected.value : fallbackValue;
    }
    this._value = valueToEmit;
    this.change.emit(new MatChipListChange(this, valueToEmit));
    this.valueChange.emit(valueToEmit);
    this._onChange(valueToEmit);
    this._changeDetectorRef.markForCheck();
  }
  /** When blurred, mark the field as touched when focus moved outside the chip list. */
  _blur() {
    if (!this._hasFocusedChip()) {
      this._keyManager.setActiveItem(-1);
    }
    if (!this.disabled) {
      if (this._chipInput) {
        setTimeout(() => {
          if (!this.focused) {
            this._markAsTouched();
          }
        });
      } else {
        this._markAsTouched();
      }
    }
  }
  /** Mark the field as touched */
  _markAsTouched() {
    this._onTouched();
    this._changeDetectorRef.markForCheck();
    this.stateChanges.next();
  }
  /**
   * Removes the `tabindex` from the chip list and resets it back afterwards, allowing the
   * user to tab out of it. This prevents the list from capturing focus and redirecting
   * it back to the first chip, creating a focus trap, if it user tries to tab away.
   */
  _allowFocusEscape() {
    if (this._tabIndex !== -1) {
      this._tabIndex = -1;
      setTimeout(() => {
        this._tabIndex = this._userTabIndex || 0;
        this._changeDetectorRef.markForCheck();
      });
    }
  }
  _resetChips() {
    this._dropSubscriptions();
    this._listenToChipsFocus();
    this._listenToChipsSelection();
    this._listenToChipsRemoved();
  }
  _dropSubscriptions() {
    if (this._chipFocusSubscription) {
      this._chipFocusSubscription.unsubscribe();
      this._chipFocusSubscription = null;
    }
    if (this._chipBlurSubscription) {
      this._chipBlurSubscription.unsubscribe();
      this._chipBlurSubscription = null;
    }
    if (this._chipSelectionSubscription) {
      this._chipSelectionSubscription.unsubscribe();
      this._chipSelectionSubscription = null;
    }
    if (this._chipRemoveSubscription) {
      this._chipRemoveSubscription.unsubscribe();
      this._chipRemoveSubscription = null;
    }
  }
  /** Listens to user-generated selection events on each chip. */
  _listenToChipsSelection() {
    this._chipSelectionSubscription = this.chipSelectionChanges.subscribe((event) => {
      event.source.selected ? this._selectionModel.select(event.source) : this._selectionModel.deselect(event.source);
      if (!this.multiple) {
        this.chips.forEach((chip) => {
          if (!this._selectionModel.isSelected(chip) && chip.selected) {
            chip.deselect();
          }
        });
      }
      if (event.isUserInput) {
        this._propagateChanges();
      }
    });
  }
  /** Listens to user-generated selection events on each chip. */
  _listenToChipsFocus() {
    this._chipFocusSubscription = this.chipFocusChanges.subscribe((event) => {
      let chipIndex = this.chips.toArray().indexOf(event.chip);
      if (this._isValidIndex(chipIndex)) {
        this._keyManager.updateActiveItem(chipIndex);
      }
      this.stateChanges.next();
    });
    this._chipBlurSubscription = this.chipBlurChanges.subscribe(() => {
      this._blur();
      this.stateChanges.next();
    });
  }
  _listenToChipsRemoved() {
    this._chipRemoveSubscription = this.chipRemoveChanges.subscribe((event) => {
      const chip = event.chip;
      const chipIndex = this.chips.toArray().indexOf(event.chip);
      if (this._isValidIndex(chipIndex) && chip._hasFocus) {
        this._lastDestroyedChipIndex = chipIndex;
      }
    });
  }
  /** Checks whether an event comes from inside a chip element. */
  _originatesFromChip(event) {
    let currentElement = event.target;
    while (currentElement && currentElement !== this._elementRef.nativeElement) {
      if (currentElement.classList.contains("mat-chip")) {
        return true;
      }
      currentElement = currentElement.parentElement;
    }
    return false;
  }
  /** Checks whether any of the chips is focused. */
  _hasFocusedChip() {
    return this.chips && this.chips.some((chip) => chip._hasFocus);
  }
  /** Syncs the list's state with the individual chips. */
  _syncChipsState() {
    if (this.chips) {
      this.chips.forEach((chip) => {
        chip._chipListDisabled = this._disabled;
        chip._chipListMultiple = this.multiple;
      });
    }
  }
};
MatChipList.ɵfac = function MatChipList_Factory(ɵt) {
  return new (ɵt || MatChipList)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Directionality, 8), ɵɵdirectiveInject(NgForm, 8), ɵɵdirectiveInject(FormGroupDirective, 8), ɵɵdirectiveInject(ErrorStateMatcher), ɵɵdirectiveInject(NgControl, 10));
};
MatChipList.ɵcmp = ɵɵdefineComponent({
  type: MatChipList,
  selectors: [["mat-chip-list"]],
  contentQueries: function MatChipList_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, MatChip, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.chips = _t);
    }
  },
  hostAttrs: [1, "mat-chip-list"],
  hostVars: 15,
  hostBindings: function MatChipList_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("focus", function MatChipList_focus_HostBindingHandler() {
        return ctx.focus();
      })("blur", function MatChipList_blur_HostBindingHandler() {
        return ctx._blur();
      })("keydown", function MatChipList_keydown_HostBindingHandler($event) {
        return ctx._keydown($event);
      });
    }
    if (rf & 2) {
      ɵɵhostProperty("id", ctx._uid);
      ɵɵattribute("tabindex", ctx.disabled ? null : ctx._tabIndex)("aria-describedby", ctx._ariaDescribedby || null)("aria-required", ctx.role ? ctx.required : null)("aria-disabled", ctx.disabled.toString())("aria-invalid", ctx.errorState)("aria-multiselectable", ctx.multiple)("role", ctx.role)("aria-orientation", ctx.ariaOrientation);
      ɵɵclassProp("mat-chip-list-disabled", ctx.disabled)("mat-chip-list-invalid", ctx.errorState)("mat-chip-list-required", ctx.required);
    }
  },
  inputs: {
    errorStateMatcher: "errorStateMatcher",
    multiple: "multiple",
    compareWith: "compareWith",
    value: "value",
    required: "required",
    placeholder: "placeholder",
    disabled: "disabled",
    ariaOrientation: [0, "aria-orientation", "ariaOrientation"],
    selectable: "selectable",
    tabIndex: "tabIndex"
  },
  outputs: {
    change: "change",
    valueChange: "valueChange"
  },
  exportAs: ["matChipList"],
  features: [ɵɵProvidersFeature([{
    provide: MatFormFieldControl,
    useExisting: MatChipList
  }]), ɵɵInheritDefinitionFeature],
  ngContentSelectors: _c0,
  decls: 2,
  vars: 0,
  consts: [[1, "mat-chip-list-wrapper"]],
  template: function MatChipList_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "div", 0);
      ɵɵprojection(1);
      ɵɵelementEnd();
    }
  },
  styles: ['.mat-chip{position:relative;box-sizing:border-box;-webkit-tap-highlight-color:transparent;border:none;-webkit-appearance:none;-moz-appearance:none}.mat-standard-chip{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:inline-flex;padding:7px 12px;border-radius:16px;align-items:center;cursor:default;min-height:32px;height:1px}._mat-animation-noopable.mat-standard-chip{transition:none;animation:none}.mat-standard-chip .mat-chip-remove{border:none;-webkit-appearance:none;-moz-appearance:none;padding:0;background:none}.mat-standard-chip .mat-chip-remove.mat-icon,.mat-standard-chip .mat-chip-remove .mat-icon{width:18px;height:18px;font-size:18px}.mat-standard-chip::after{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:inherit;opacity:0;content:"";pointer-events:none;transition:opacity 200ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-standard-chip:hover::after{opacity:.12}.mat-standard-chip:focus{outline:none}.mat-standard-chip:focus::after{opacity:.16}.cdk-high-contrast-active .mat-standard-chip{outline:solid 1px}.cdk-high-contrast-active .mat-standard-chip:focus{outline:dotted 2px}.cdk-high-contrast-active .mat-standard-chip.mat-chip-selected{outline-width:3px}.mat-standard-chip.mat-chip-disabled::after{opacity:0}.mat-standard-chip.mat-chip-disabled .mat-chip-remove,.mat-standard-chip.mat-chip-disabled .mat-chip-trailing-icon{cursor:default}.mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar,.mat-standard-chip.mat-chip-with-avatar{padding-top:0;padding-bottom:0}.mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar{padding-right:8px;padding-left:0}[dir=rtl] .mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar{padding-left:8px;padding-right:0}.mat-standard-chip.mat-chip-with-trailing-icon{padding-top:7px;padding-bottom:7px;padding-right:8px;padding-left:12px}[dir=rtl] .mat-standard-chip.mat-chip-with-trailing-icon{padding-left:8px;padding-right:12px}.mat-standard-chip.mat-chip-with-avatar{padding-left:0;padding-right:12px}[dir=rtl] .mat-standard-chip.mat-chip-with-avatar{padding-right:0;padding-left:12px}.mat-standard-chip .mat-chip-avatar{width:24px;height:24px;margin-right:8px;margin-left:4px}[dir=rtl] .mat-standard-chip .mat-chip-avatar{margin-left:8px;margin-right:4px}.mat-standard-chip .mat-chip-remove,.mat-standard-chip .mat-chip-trailing-icon{width:18px;height:18px;cursor:pointer}.mat-standard-chip .mat-chip-remove,.mat-standard-chip .mat-chip-trailing-icon{margin-left:8px;margin-right:0}[dir=rtl] .mat-standard-chip .mat-chip-remove,[dir=rtl] .mat-standard-chip .mat-chip-trailing-icon{margin-right:8px;margin-left:0}.mat-chip-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit;overflow:hidden;transform:translateZ(0)}.mat-chip-list-wrapper{display:flex;flex-direction:row;flex-wrap:wrap;align-items:center;margin:-4px}.mat-chip-list-wrapper input.mat-input-element,.mat-chip-list-wrapper .mat-standard-chip{margin:4px}.mat-chip-list-stacked .mat-chip-list-wrapper{flex-direction:column;align-items:flex-start}.mat-chip-list-stacked .mat-chip-list-wrapper .mat-standard-chip{width:100%}.mat-chip-avatar{border-radius:50%;justify-content:center;align-items:center;display:flex;overflow:hidden;object-fit:cover}input.mat-chip-input{width:150px;margin:4px;flex:1 0 150px}\n'],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatChipList, [{
    type: Component,
    args: [{
      selector: "mat-chip-list",
      template: `<div class="mat-chip-list-wrapper"><ng-content></ng-content></div>`,
      exportAs: "matChipList",
      host: {
        "[attr.tabindex]": "disabled ? null : _tabIndex",
        "[attr.aria-describedby]": "_ariaDescribedby || null",
        "[attr.aria-required]": "role ? required : null",
        "[attr.aria-disabled]": "disabled.toString()",
        "[attr.aria-invalid]": "errorState",
        "[attr.aria-multiselectable]": "multiple",
        "[attr.role]": "role",
        "[class.mat-chip-list-disabled]": "disabled",
        "[class.mat-chip-list-invalid]": "errorState",
        "[class.mat-chip-list-required]": "required",
        "[attr.aria-orientation]": "ariaOrientation",
        "class": "mat-chip-list",
        "(focus)": "focus()",
        "(blur)": "_blur()",
        "(keydown)": "_keydown($event)",
        "[id]": "_uid"
      },
      providers: [{
        provide: MatFormFieldControl,
        useExisting: MatChipList
      }],
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      styles: ['.mat-chip{position:relative;box-sizing:border-box;-webkit-tap-highlight-color:transparent;border:none;-webkit-appearance:none;-moz-appearance:none}.mat-standard-chip{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:inline-flex;padding:7px 12px;border-radius:16px;align-items:center;cursor:default;min-height:32px;height:1px}._mat-animation-noopable.mat-standard-chip{transition:none;animation:none}.mat-standard-chip .mat-chip-remove{border:none;-webkit-appearance:none;-moz-appearance:none;padding:0;background:none}.mat-standard-chip .mat-chip-remove.mat-icon,.mat-standard-chip .mat-chip-remove .mat-icon{width:18px;height:18px;font-size:18px}.mat-standard-chip::after{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:inherit;opacity:0;content:"";pointer-events:none;transition:opacity 200ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-standard-chip:hover::after{opacity:.12}.mat-standard-chip:focus{outline:none}.mat-standard-chip:focus::after{opacity:.16}.cdk-high-contrast-active .mat-standard-chip{outline:solid 1px}.cdk-high-contrast-active .mat-standard-chip:focus{outline:dotted 2px}.cdk-high-contrast-active .mat-standard-chip.mat-chip-selected{outline-width:3px}.mat-standard-chip.mat-chip-disabled::after{opacity:0}.mat-standard-chip.mat-chip-disabled .mat-chip-remove,.mat-standard-chip.mat-chip-disabled .mat-chip-trailing-icon{cursor:default}.mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar,.mat-standard-chip.mat-chip-with-avatar{padding-top:0;padding-bottom:0}.mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar{padding-right:8px;padding-left:0}[dir=rtl] .mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar{padding-left:8px;padding-right:0}.mat-standard-chip.mat-chip-with-trailing-icon{padding-top:7px;padding-bottom:7px;padding-right:8px;padding-left:12px}[dir=rtl] .mat-standard-chip.mat-chip-with-trailing-icon{padding-left:8px;padding-right:12px}.mat-standard-chip.mat-chip-with-avatar{padding-left:0;padding-right:12px}[dir=rtl] .mat-standard-chip.mat-chip-with-avatar{padding-right:0;padding-left:12px}.mat-standard-chip .mat-chip-avatar{width:24px;height:24px;margin-right:8px;margin-left:4px}[dir=rtl] .mat-standard-chip .mat-chip-avatar{margin-left:8px;margin-right:4px}.mat-standard-chip .mat-chip-remove,.mat-standard-chip .mat-chip-trailing-icon{width:18px;height:18px;cursor:pointer}.mat-standard-chip .mat-chip-remove,.mat-standard-chip .mat-chip-trailing-icon{margin-left:8px;margin-right:0}[dir=rtl] .mat-standard-chip .mat-chip-remove,[dir=rtl] .mat-standard-chip .mat-chip-trailing-icon{margin-right:8px;margin-left:0}.mat-chip-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit;overflow:hidden;transform:translateZ(0)}.mat-chip-list-wrapper{display:flex;flex-direction:row;flex-wrap:wrap;align-items:center;margin:-4px}.mat-chip-list-wrapper input.mat-input-element,.mat-chip-list-wrapper .mat-standard-chip{margin:4px}.mat-chip-list-stacked .mat-chip-list-wrapper{flex-direction:column;align-items:flex-start}.mat-chip-list-stacked .mat-chip-list-wrapper .mat-standard-chip{width:100%}.mat-chip-avatar{border-radius:50%;justify-content:center;align-items:center;display:flex;overflow:hidden;object-fit:cover}input.mat-chip-input{width:150px;margin:4px;flex:1 0 150px}\n']
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: ChangeDetectorRef
    }, {
      type: Directionality,
      decorators: [{
        type: Optional
      }]
    }, {
      type: NgForm,
      decorators: [{
        type: Optional
      }]
    }, {
      type: FormGroupDirective,
      decorators: [{
        type: Optional
      }]
    }, {
      type: ErrorStateMatcher
    }, {
      type: NgControl,
      decorators: [{
        type: Optional
      }, {
        type: Self
      }]
    }];
  }, {
    errorStateMatcher: [{
      type: Input
    }],
    multiple: [{
      type: Input
    }],
    compareWith: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    required: [{
      type: Input
    }],
    placeholder: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    ariaOrientation: [{
      type: Input,
      args: ["aria-orientation"]
    }],
    selectable: [{
      type: Input
    }],
    tabIndex: [{
      type: Input
    }],
    change: [{
      type: Output
    }],
    valueChange: [{
      type: Output
    }],
    chips: [{
      type: ContentChildren,
      args: [MatChip, {
        // We need to use `descendants: true`, because Ivy will no longer match
        // indirect descendants if it's left as false.
        descendants: true
      }]
    }]
  });
})();
var nextUniqueId = 0;
var MatChipInput = class {
  constructor(_elementRef, _defaultOptions) {
    this._elementRef = _elementRef;
    this._defaultOptions = _defaultOptions;
    this.focused = false;
    this._addOnBlur = false;
    this.separatorKeyCodes = this._defaultOptions.separatorKeyCodes;
    this.chipEnd = new EventEmitter();
    this.placeholder = "";
    this.id = `mat-chip-list-input-${nextUniqueId++}`;
    this._disabled = false;
    this.inputElement = this._elementRef.nativeElement;
  }
  /** Register input for chip list */
  set chipList(value) {
    if (value) {
      this._chipList = value;
      this._chipList.registerInput(this);
    }
  }
  /**
   * Whether or not the chipEnd event will be emitted when the input is blurred.
   */
  get addOnBlur() {
    return this._addOnBlur;
  }
  set addOnBlur(value) {
    this._addOnBlur = coerceBooleanProperty(value);
  }
  /** Whether the input is disabled. */
  get disabled() {
    return this._disabled || this._chipList && this._chipList.disabled;
  }
  set disabled(value) {
    this._disabled = coerceBooleanProperty(value);
  }
  /** Whether the input is empty. */
  get empty() {
    return !this.inputElement.value;
  }
  ngOnChanges() {
    this._chipList.stateChanges.next();
  }
  ngOnDestroy() {
    this.chipEnd.complete();
  }
  ngAfterContentInit() {
    this._focusLastChipOnBackspace = this.empty;
  }
  /** Utility method to make host definition/tests more clear. */
  _keydown(event) {
    if (event) {
      if (event.keyCode === TAB && !hasModifierKey(event, "shiftKey")) {
        this._chipList._allowFocusEscape();
      }
      if (event.keyCode === BACKSPACE && this._focusLastChipOnBackspace) {
        this._chipList._keyManager.setLastItemActive();
        event.preventDefault();
        return;
      } else {
        this._focusLastChipOnBackspace = false;
      }
    }
    this._emitChipEnd(event);
  }
  /**
   * Pass events to the keyboard manager. Available here for tests.
   */
  _keyup(event) {
    if (!this._focusLastChipOnBackspace && event.keyCode === BACKSPACE && this.empty) {
      this._focusLastChipOnBackspace = true;
      event.preventDefault();
    }
  }
  /** Checks to see if the blur should emit the (chipEnd) event. */
  _blur() {
    if (this.addOnBlur) {
      this._emitChipEnd();
    }
    this.focused = false;
    if (!this._chipList.focused) {
      this._chipList._blur();
    }
    this._chipList.stateChanges.next();
  }
  _focus() {
    this.focused = true;
    this._focusLastChipOnBackspace = this.empty;
    this._chipList.stateChanges.next();
  }
  /** Checks to see if the (chipEnd) event needs to be emitted. */
  _emitChipEnd(event) {
    if (!this.inputElement.value && !!event) {
      this._chipList._keydown(event);
    }
    if (!event || this._isSeparatorKey(event)) {
      this.chipEnd.emit({
        input: this.inputElement,
        value: this.inputElement.value,
        chipInput: this
      });
      event?.preventDefault();
    }
  }
  _onInput() {
    this._chipList.stateChanges.next();
  }
  /** Focuses the input. */
  focus(options) {
    this.inputElement.focus(options);
  }
  /** Clears the input */
  clear() {
    this.inputElement.value = "";
    this._focusLastChipOnBackspace = true;
  }
  /** Checks whether a keycode is one of the configured separators. */
  _isSeparatorKey(event) {
    return !hasModifierKey(event) && new Set(this.separatorKeyCodes).has(event.keyCode);
  }
};
MatChipInput.ɵfac = function MatChipInput_Factory(ɵt) {
  return new (ɵt || MatChipInput)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(MAT_CHIPS_DEFAULT_OPTIONS));
};
MatChipInput.ɵdir = ɵɵdefineDirective({
  type: MatChipInput,
  selectors: [["input", "matChipInputFor", ""]],
  hostAttrs: [1, "mat-chip-input", "mat-input-element"],
  hostVars: 5,
  hostBindings: function MatChipInput_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("keydown", function MatChipInput_keydown_HostBindingHandler($event) {
        return ctx._keydown($event);
      })("keyup", function MatChipInput_keyup_HostBindingHandler($event) {
        return ctx._keyup($event);
      })("blur", function MatChipInput_blur_HostBindingHandler() {
        return ctx._blur();
      })("focus", function MatChipInput_focus_HostBindingHandler() {
        return ctx._focus();
      })("input", function MatChipInput_input_HostBindingHandler() {
        return ctx._onInput();
      });
    }
    if (rf & 2) {
      ɵɵhostProperty("id", ctx.id);
      ɵɵattribute("disabled", ctx.disabled || null)("placeholder", ctx.placeholder || null)("aria-invalid", ctx._chipList && ctx._chipList.ngControl ? ctx._chipList.ngControl.invalid : null)("aria-required", ctx._chipList && ctx._chipList.required || null);
    }
  },
  inputs: {
    chipList: [0, "matChipInputFor", "chipList"],
    addOnBlur: [0, "matChipInputAddOnBlur", "addOnBlur"],
    separatorKeyCodes: [0, "matChipInputSeparatorKeyCodes", "separatorKeyCodes"],
    placeholder: "placeholder",
    id: "id",
    disabled: "disabled"
  },
  outputs: {
    chipEnd: "matChipInputTokenEnd"
  },
  exportAs: ["matChipInput", "matChipInputFor"],
  features: [ɵɵNgOnChangesFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatChipInput, [{
    type: Directive,
    args: [{
      selector: "input[matChipInputFor]",
      exportAs: "matChipInput, matChipInputFor",
      host: {
        "class": "mat-chip-input mat-input-element",
        "(keydown)": "_keydown($event)",
        "(keyup)": "_keyup($event)",
        "(blur)": "_blur()",
        "(focus)": "_focus()",
        "(input)": "_onInput()",
        "[id]": "id",
        "[attr.disabled]": "disabled || null",
        "[attr.placeholder]": "placeholder || null",
        "[attr.aria-invalid]": "_chipList && _chipList.ngControl ? _chipList.ngControl.invalid : null",
        "[attr.aria-required]": "_chipList && _chipList.required || null"
      }
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [MAT_CHIPS_DEFAULT_OPTIONS]
      }]
    }];
  }, {
    chipList: [{
      type: Input,
      args: ["matChipInputFor"]
    }],
    addOnBlur: [{
      type: Input,
      args: ["matChipInputAddOnBlur"]
    }],
    separatorKeyCodes: [{
      type: Input,
      args: ["matChipInputSeparatorKeyCodes"]
    }],
    chipEnd: [{
      type: Output,
      args: ["matChipInputTokenEnd"]
    }],
    placeholder: [{
      type: Input
    }],
    id: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }]
  });
})();
var CHIP_DECLARATIONS = [MatChipList, MatChip, MatChipInput, MatChipRemove, MatChipAvatar, MatChipTrailingIcon];
var MatChipsModule = class {
};
MatChipsModule.ɵfac = function MatChipsModule_Factory(ɵt) {
  return new (ɵt || MatChipsModule)();
};
MatChipsModule.ɵmod = ɵɵdefineNgModule({
  type: MatChipsModule,
  declarations: [MatChipList, MatChip, MatChipInput, MatChipRemove, MatChipAvatar, MatChipTrailingIcon],
  imports: [MatCommonModule],
  exports: [MatChipList, MatChip, MatChipInput, MatChipRemove, MatChipAvatar, MatChipTrailingIcon]
});
MatChipsModule.ɵinj = ɵɵdefineInjector({
  providers: [ErrorStateMatcher, {
    provide: MAT_CHIPS_DEFAULT_OPTIONS,
    useValue: {
      separatorKeyCodes: [ENTER]
    }
  }],
  imports: [[MatCommonModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatChipsModule, [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule],
      exports: CHIP_DECLARATIONS,
      declarations: CHIP_DECLARATIONS,
      providers: [ErrorStateMatcher, {
        provide: MAT_CHIPS_DEFAULT_OPTIONS,
        useValue: {
          separatorKeyCodes: [ENTER]
        }
      }]
    }]
  }], null, null);
})();

export {
  MatChipSelectionChange,
  MAT_CHIP_REMOVE,
  MAT_CHIP_AVATAR,
  MAT_CHIP_TRAILING_ICON,
  MatChipAvatar,
  MatChipTrailingIcon,
  MatChip,
  MatChipRemove,
  MAT_CHIPS_DEFAULT_OPTIONS,
  MatChipListChange,
  MatChipList,
  MatChipInput,
  MatChipsModule
};
/*! Bundled license information:

@angular/material/fesm2020/chips.mjs:
  (**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   *)
*/
//# sourceMappingURL=chunk-Z77I3BZF.js.map
