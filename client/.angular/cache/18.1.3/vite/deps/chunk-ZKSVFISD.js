import {
  CdkPortal,
  CdkPortalOutlet,
  PortalModule,
  TemplatePortal
} from "./chunk-EKOM3EJZ.js";
import {
  ViewportRuler
} from "./chunk-VQZTIQC5.js";
import {
  MAT_RIPPLE_GLOBAL_OPTIONS,
  MatCommonModule,
  MatRipple,
  MatRippleModule,
  RippleRenderer,
  mixinColor,
  mixinDisableRipple,
  mixinDisabled,
  mixinTabIndex
} from "./chunk-SWJFBV3K.js";
import {
  animate,
  state,
  style,
  transition,
  trigger
} from "./chunk-IEMAKXBJ.js";
import {
  A11yModule,
  CdkMonitorFocus,
  CdkObserveContent,
  FocusKeyManager,
  FocusMonitor,
  ObserversModule
} from "./chunk-JTKXKKJK.js";
import {
  ENTER,
  SPACE,
  hasModifierKey
} from "./chunk-PX3VSZ3I.js";
import {
  Directionality,
  Platform,
  coerceBooleanProperty,
  coerceNumberProperty,
  normalizePassiveListenerOptions
} from "./chunk-CPTXJDSR.js";
import {
  CommonModule,
  DOCUMENT,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-SJMBSDCY.js";
import {
  ANIMATION_MODULE_TYPE,
  Attribute,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver$1,
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
  QueryList,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation$1,
  forwardRef,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinjectAttribute,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuery
} from "./chunk-GMUXDIJ2.js";
import {
  fromEvent,
  merge
} from "./chunk-TQO6VFQJ.js";
import {
  EMPTY,
  Observable,
  Subject,
  Subscription,
  distinctUntilChanged,
  of,
  skip,
  startWith,
  switchMap,
  take,
  takeUntil,
  timer
} from "./chunk-ODTHBFDQ.js";

// node_modules/@angular/material/fesm2020/tabs.mjs
var _c0 = ["*"];
function MatTab_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0);
  }
}
var _c1 = (a0) => ({
  animationDuration: a0
});
var _c2 = (a0, a1) => ({
  value: a0,
  params: a1
});
function MatTabBody_ng_template_2_Template(rf, ctx) {
}
var _c3 = ["tabListContainer"];
var _c4 = ["tabList"];
var _c5 = ["tabListInner"];
var _c6 = ["nextPaginator"];
var _c7 = ["previousPaginator"];
var _c8 = ["tabBodyWrapper"];
var _c9 = ["tabHeader"];
function MatTabGroup_div_2_ng_template_2_ng_template_0_Template(rf, ctx) {
}
function MatTabGroup_div_2_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, MatTabGroup_div_2_ng_template_2_ng_template_0_Template, 0, 0, "ng-template", 10);
  }
  if (rf & 2) {
    const tab_r4 = ɵɵnextContext().$implicit;
    ɵɵproperty("cdkPortalOutlet", tab_r4.templateLabel);
  }
}
function MatTabGroup_div_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const tab_r4 = ɵɵnextContext().$implicit;
    ɵɵtextInterpolate(tab_r4.textLabel);
  }
}
function MatTabGroup_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 7);
    ɵɵlistener("click", function MatTabGroup_div_2_Template_div_click_0_listener() {
      const ctx_r2 = ɵɵrestoreView(_r2);
      const tab_r4 = ctx_r2.$implicit;
      const i_r5 = ctx_r2.index;
      const ctx_r5 = ɵɵnextContext();
      const tabHeader_r7 = ɵɵreference(1);
      return ɵɵresetView(ctx_r5._handleClick(tab_r4, tabHeader_r7, i_r5));
    })("cdkFocusChange", function MatTabGroup_div_2_Template_div_cdkFocusChange_0_listener($event) {
      const i_r5 = ɵɵrestoreView(_r2).index;
      const ctx_r5 = ɵɵnextContext();
      return ɵɵresetView(ctx_r5._tabFocusChanged($event, i_r5));
    });
    ɵɵelementStart(1, "div", 8);
    ɵɵtemplate(2, MatTabGroup_div_2_ng_template_2_Template, 1, 1, "ng-template", 9)(3, MatTabGroup_div_2_ng_template_3_Template, 1, 1, "ng-template", null, 2, ɵɵtemplateRefExtractor);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const tab_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const tabTextLabel_r8 = ɵɵreference(4);
    const ctx_r5 = ɵɵnextContext();
    ɵɵclassProp("mat-tab-label-active", ctx_r5.selectedIndex === i_r5);
    ɵɵproperty("id", ctx_r5._getTabLabelId(i_r5))("ngClass", tab_r4.labelClass)("disabled", tab_r4.disabled)("matRippleDisabled", tab_r4.disabled || ctx_r5.disableRipple);
    ɵɵattribute("tabIndex", ctx_r5._getTabIndex(tab_r4, i_r5))("aria-posinset", i_r5 + 1)("aria-setsize", ctx_r5._tabs.length)("aria-controls", ctx_r5._getTabContentId(i_r5))("aria-selected", ctx_r5.selectedIndex === i_r5)("aria-label", tab_r4.ariaLabel || null)("aria-labelledby", !tab_r4.ariaLabel && tab_r4.ariaLabelledby ? tab_r4.ariaLabelledby : null);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", tab_r4.templateLabel)("ngIfElse", tabTextLabel_r8);
  }
}
function MatTabGroup_mat_tab_body_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-tab-body", 11);
    ɵɵlistener("_onCentered", function MatTabGroup_mat_tab_body_5_Template_mat_tab_body__onCentered_0_listener() {
      ɵɵrestoreView(_r9);
      const ctx_r5 = ɵɵnextContext();
      return ɵɵresetView(ctx_r5._removeTabBodyWrapperHeight());
    })("_onCentering", function MatTabGroup_mat_tab_body_5_Template_mat_tab_body__onCentering_0_listener($event) {
      ɵɵrestoreView(_r9);
      const ctx_r5 = ɵɵnextContext();
      return ɵɵresetView(ctx_r5._setTabBodyWrapperHeight($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const tab_r10 = ctx.$implicit;
    const i_r11 = ctx.index;
    const ctx_r5 = ɵɵnextContext();
    ɵɵclassProp("mat-tab-body-active", ctx_r5.selectedIndex === i_r11);
    ɵɵproperty("id", ctx_r5._getTabContentId(i_r11))("ngClass", tab_r10.bodyClass)("content", tab_r10.content)("position", tab_r10.position)("origin", tab_r10.origin)("animationDuration", ctx_r5.animationDuration);
    ɵɵattribute("tabindex", ctx_r5.contentTabIndex != null && ctx_r5.selectedIndex === i_r11 ? ctx_r5.contentTabIndex : null)("aria-labelledby", ctx_r5._getTabLabelId(i_r11));
  }
}
var _c10 = ["mat-tab-nav-bar", ""];
var _MAT_INK_BAR_POSITIONER = new InjectionToken("MatInkBarPositioner", {
  providedIn: "root",
  factory: _MAT_INK_BAR_POSITIONER_FACTORY
});
function _MAT_INK_BAR_POSITIONER_FACTORY() {
  const method = (element) => ({
    left: element ? (element.offsetLeft || 0) + "px" : "0",
    width: element ? (element.offsetWidth || 0) + "px" : "0"
  });
  return method;
}
var MatInkBar = class {
  constructor(_elementRef, _ngZone, _inkBarPositioner, _animationMode) {
    this._elementRef = _elementRef;
    this._ngZone = _ngZone;
    this._inkBarPositioner = _inkBarPositioner;
    this._animationMode = _animationMode;
  }
  /**
   * Calculates the styles from the provided element in order to align the ink-bar to that element.
   * Shows the ink bar if previously set as hidden.
   * @param element
   */
  alignToElement(element) {
    this.show();
    this._ngZone.onStable.pipe(take(1)).subscribe(() => {
      const positions = this._inkBarPositioner(element);
      const inkBar = this._elementRef.nativeElement;
      inkBar.style.left = positions.left;
      inkBar.style.width = positions.width;
    });
  }
  /** Shows the ink bar. */
  show() {
    this._elementRef.nativeElement.style.visibility = "visible";
  }
  /** Hides the ink bar. */
  hide() {
    this._elementRef.nativeElement.style.visibility = "hidden";
  }
};
MatInkBar.ɵfac = function MatInkBar_Factory(ɵt) {
  return new (ɵt || MatInkBar)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(_MAT_INK_BAR_POSITIONER), ɵɵdirectiveInject(ANIMATION_MODULE_TYPE, 8));
};
MatInkBar.ɵdir = ɵɵdefineDirective({
  type: MatInkBar,
  selectors: [["mat-ink-bar"]],
  hostAttrs: [1, "mat-ink-bar"],
  hostVars: 2,
  hostBindings: function MatInkBar_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
    }
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatInkBar, [{
    type: Directive,
    args: [{
      selector: "mat-ink-bar",
      host: {
        "class": "mat-ink-bar",
        "[class._mat-animation-noopable]": `_animationMode === 'NoopAnimations'`
      }
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: NgZone
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [_MAT_INK_BAR_POSITIONER]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Optional
      }, {
        type: Inject,
        args: [ANIMATION_MODULE_TYPE]
      }]
    }];
  }, null);
})();
var MAT_TAB_CONTENT = new InjectionToken("MatTabContent");
var MatTabContent = class {
  constructor(template) {
    this.template = template;
  }
};
MatTabContent.ɵfac = function MatTabContent_Factory(ɵt) {
  return new (ɵt || MatTabContent)(ɵɵdirectiveInject(TemplateRef));
};
MatTabContent.ɵdir = ɵɵdefineDirective({
  type: MatTabContent,
  selectors: [["", "matTabContent", ""]],
  features: [ɵɵProvidersFeature([{
    provide: MAT_TAB_CONTENT,
    useExisting: MatTabContent
  }])]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTabContent, [{
    type: Directive,
    args: [{
      selector: "[matTabContent]",
      providers: [{
        provide: MAT_TAB_CONTENT,
        useExisting: MatTabContent
      }]
    }]
  }], function() {
    return [{
      type: TemplateRef
    }];
  }, null);
})();
var MAT_TAB_LABEL = new InjectionToken("MatTabLabel");
var MAT_TAB = new InjectionToken("MAT_TAB");
var MatTabLabel = class extends CdkPortal {
  constructor(templateRef, viewContainerRef, _closestTab) {
    super(templateRef, viewContainerRef);
    this._closestTab = _closestTab;
  }
};
MatTabLabel.ɵfac = function MatTabLabel_Factory(ɵt) {
  return new (ɵt || MatTabLabel)(ɵɵdirectiveInject(TemplateRef), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(MAT_TAB, 8));
};
MatTabLabel.ɵdir = ɵɵdefineDirective({
  type: MatTabLabel,
  selectors: [["", "mat-tab-label", ""], ["", "matTabLabel", ""]],
  features: [ɵɵProvidersFeature([{
    provide: MAT_TAB_LABEL,
    useExisting: MatTabLabel
  }]), ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTabLabel, [{
    type: Directive,
    args: [{
      selector: "[mat-tab-label], [matTabLabel]",
      providers: [{
        provide: MAT_TAB_LABEL,
        useExisting: MatTabLabel
      }]
    }]
  }], function() {
    return [{
      type: TemplateRef
    }, {
      type: ViewContainerRef
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [MAT_TAB]
      }, {
        type: Optional
      }]
    }];
  }, null);
})();
var _MatTabBase = mixinDisabled(class {
});
var MAT_TAB_GROUP = new InjectionToken("MAT_TAB_GROUP");
var MatTab = class extends _MatTabBase {
  constructor(_viewContainerRef, _closestTabGroup) {
    super();
    this._viewContainerRef = _viewContainerRef;
    this._closestTabGroup = _closestTabGroup;
    this.textLabel = "";
    this._contentPortal = null;
    this._stateChanges = new Subject();
    this.position = null;
    this.origin = null;
    this.isActive = false;
  }
  /** Content for the tab label given by `<ng-template mat-tab-label>`. */
  get templateLabel() {
    return this._templateLabel;
  }
  set templateLabel(value) {
    this._setTemplateLabelInput(value);
  }
  /** @docs-private */
  get content() {
    return this._contentPortal;
  }
  ngOnChanges(changes) {
    if (changes.hasOwnProperty("textLabel") || changes.hasOwnProperty("disabled")) {
      this._stateChanges.next();
    }
  }
  ngOnDestroy() {
    this._stateChanges.complete();
  }
  ngOnInit() {
    this._contentPortal = new TemplatePortal(this._explicitContent || this._implicitContent, this._viewContainerRef);
  }
  /**
   * This has been extracted to a util because of TS 4 and VE.
   * View Engine doesn't support property rename inheritance.
   * TS 4.0 doesn't allow properties to override accessors or vice-versa.
   * @docs-private
   */
  _setTemplateLabelInput(value) {
    if (value && value._closestTab === this) {
      this._templateLabel = value;
    }
  }
};
MatTab.ɵfac = function MatTab_Factory(ɵt) {
  return new (ɵt || MatTab)(ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(MAT_TAB_GROUP, 8));
};
MatTab.ɵcmp = ɵɵdefineComponent({
  type: MatTab,
  selectors: [["mat-tab"]],
  contentQueries: function MatTab_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, MAT_TAB_LABEL, 5);
      ɵɵcontentQuery(dirIndex, MAT_TAB_CONTENT, 7, TemplateRef);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templateLabel = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._explicitContent = _t.first);
    }
  },
  viewQuery: function MatTab_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(TemplateRef, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._implicitContent = _t.first);
    }
  },
  inputs: {
    disabled: "disabled",
    textLabel: [0, "label", "textLabel"],
    ariaLabel: [0, "aria-label", "ariaLabel"],
    ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
    labelClass: "labelClass",
    bodyClass: "bodyClass"
  },
  exportAs: ["matTab"],
  features: [ɵɵProvidersFeature([{
    provide: MAT_TAB,
    useExisting: MatTab
  }]), ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function MatTab_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, MatTab_ng_template_0_Template, 1, 0, "ng-template");
    }
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTab, [{
    type: Component,
    args: [{
      selector: "mat-tab",
      inputs: ["disabled"],
      changeDetection: ChangeDetectionStrategy.Default,
      encapsulation: ViewEncapsulation$1.None,
      exportAs: "matTab",
      providers: [{
        provide: MAT_TAB,
        useExisting: MatTab
      }],
      template: "<!-- Create a template for the content of the <mat-tab> so that we can grab a reference to this\n    TemplateRef and use it in a Portal to render the tab content in the appropriate place in the\n    tab-group. -->\n<ng-template><ng-content></ng-content></ng-template>\n"
    }]
  }], function() {
    return [{
      type: ViewContainerRef
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [MAT_TAB_GROUP]
      }, {
        type: Optional
      }]
    }];
  }, {
    templateLabel: [{
      type: ContentChild,
      args: [MAT_TAB_LABEL]
    }],
    _explicitContent: [{
      type: ContentChild,
      args: [MAT_TAB_CONTENT, {
        read: TemplateRef,
        static: true
      }]
    }],
    _implicitContent: [{
      type: ViewChild,
      args: [TemplateRef, {
        static: true
      }]
    }],
    textLabel: [{
      type: Input,
      args: ["label"]
    }],
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    ariaLabelledby: [{
      type: Input,
      args: ["aria-labelledby"]
    }],
    labelClass: [{
      type: Input
    }],
    bodyClass: [{
      type: Input
    }]
  });
})();
var matTabsAnimations = {
  /** Animation translates a tab along the X axis. */
  translateTab: trigger("translateTab", [
    // Note: transitions to `none` instead of 0, because some browsers might blur the content.
    state("center, void, left-origin-center, right-origin-center", style({
      transform: "none"
    })),
    // If the tab is either on the left or right, we additionally add a `min-height` of 1px
    // in order to ensure that the element has a height before its state changes. This is
    // necessary because Chrome does seem to skip the transition in RTL mode if the element does
    // not have a static height and is not rendered. See related issue: #9465
    state("left", style({
      transform: "translate3d(-100%, 0, 0)",
      minHeight: "1px"
    })),
    state("right", style({
      transform: "translate3d(100%, 0, 0)",
      minHeight: "1px"
    })),
    transition("* => left, * => right, left => center, right => center", animate("{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)")),
    transition("void => left-origin-center", [style({
      transform: "translate3d(-100%, 0, 0)"
    }), animate("{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)")]),
    transition("void => right-origin-center", [style({
      transform: "translate3d(100%, 0, 0)"
    }), animate("{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)")])
  ])
};
var MatTabBodyPortal = class extends CdkPortalOutlet {
  constructor(componentFactoryResolver, viewContainerRef, _host, _document) {
    super(componentFactoryResolver, viewContainerRef, _document);
    this._host = _host;
    this._centeringSub = Subscription.EMPTY;
    this._leavingSub = Subscription.EMPTY;
  }
  /** Set initial visibility or set up subscription for changing visibility. */
  ngOnInit() {
    super.ngOnInit();
    this._centeringSub = this._host._beforeCentering.pipe(startWith(this._host._isCenterPosition(this._host._position))).subscribe((isCentering) => {
      if (isCentering && !this.hasAttached()) {
        this.attach(this._host._content);
      }
    });
    this._leavingSub = this._host._afterLeavingCenter.subscribe(() => {
      this.detach();
    });
  }
  /** Clean up centering subscription. */
  ngOnDestroy() {
    super.ngOnDestroy();
    this._centeringSub.unsubscribe();
    this._leavingSub.unsubscribe();
  }
};
MatTabBodyPortal.ɵfac = function MatTabBodyPortal_Factory(ɵt) {
  return new (ɵt || MatTabBodyPortal)(ɵɵdirectiveInject(ComponentFactoryResolver$1), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(forwardRef(() => MatTabBody)), ɵɵdirectiveInject(DOCUMENT));
};
MatTabBodyPortal.ɵdir = ɵɵdefineDirective({
  type: MatTabBodyPortal,
  selectors: [["", "matTabBodyHost", ""]],
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTabBodyPortal, [{
    type: Directive,
    args: [{
      selector: "[matTabBodyHost]"
    }]
  }], function() {
    return [{
      type: ComponentFactoryResolver$1
    }, {
      type: ViewContainerRef
    }, {
      type: MatTabBody,
      decorators: [{
        type: Inject,
        args: [forwardRef(() => MatTabBody)]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [DOCUMENT]
      }]
    }];
  }, null);
})();
var _MatTabBodyBase = class {
  constructor(_elementRef, _dir, changeDetectorRef) {
    this._elementRef = _elementRef;
    this._dir = _dir;
    this._dirChangeSubscription = Subscription.EMPTY;
    this._translateTabComplete = new Subject();
    this._onCentering = new EventEmitter();
    this._beforeCentering = new EventEmitter();
    this._afterLeavingCenter = new EventEmitter();
    this._onCentered = new EventEmitter(true);
    this.animationDuration = "500ms";
    if (_dir) {
      this._dirChangeSubscription = _dir.change.subscribe((dir) => {
        this._computePositionAnimationState(dir);
        changeDetectorRef.markForCheck();
      });
    }
    this._translateTabComplete.pipe(distinctUntilChanged((x, y) => {
      return x.fromState === y.fromState && x.toState === y.toState;
    })).subscribe((event) => {
      if (this._isCenterPosition(event.toState) && this._isCenterPosition(this._position)) {
        this._onCentered.emit();
      }
      if (this._isCenterPosition(event.fromState) && !this._isCenterPosition(this._position)) {
        this._afterLeavingCenter.emit();
      }
    });
  }
  /** The shifted index position of the tab body, where zero represents the active center tab. */
  set position(position) {
    this._positionIndex = position;
    this._computePositionAnimationState();
  }
  /**
   * After initialized, check if the content is centered and has an origin. If so, set the
   * special position states that transition the tab from the left or right before centering.
   */
  ngOnInit() {
    if (this._position == "center" && this.origin != null) {
      this._position = this._computePositionFromOrigin(this.origin);
    }
  }
  ngOnDestroy() {
    this._dirChangeSubscription.unsubscribe();
    this._translateTabComplete.complete();
  }
  _onTranslateTabStarted(event) {
    const isCentering = this._isCenterPosition(event.toState);
    this._beforeCentering.emit(isCentering);
    if (isCentering) {
      this._onCentering.emit(this._elementRef.nativeElement.clientHeight);
    }
  }
  /** The text direction of the containing app. */
  _getLayoutDirection() {
    return this._dir && this._dir.value === "rtl" ? "rtl" : "ltr";
  }
  /** Whether the provided position state is considered center, regardless of origin. */
  _isCenterPosition(position) {
    return position == "center" || position == "left-origin-center" || position == "right-origin-center";
  }
  /** Computes the position state that will be used for the tab-body animation trigger. */
  _computePositionAnimationState(dir = this._getLayoutDirection()) {
    if (this._positionIndex < 0) {
      this._position = dir == "ltr" ? "left" : "right";
    } else if (this._positionIndex > 0) {
      this._position = dir == "ltr" ? "right" : "left";
    } else {
      this._position = "center";
    }
  }
  /**
   * Computes the position state based on the specified origin position. This is used if the
   * tab is becoming visible immediately after creation.
   */
  _computePositionFromOrigin(origin) {
    const dir = this._getLayoutDirection();
    if (dir == "ltr" && origin <= 0 || dir == "rtl" && origin > 0) {
      return "left-origin-center";
    }
    return "right-origin-center";
  }
};
_MatTabBodyBase.ɵfac = function _MatTabBodyBase_Factory(ɵt) {
  return new (ɵt || _MatTabBodyBase)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Directionality, 8), ɵɵdirectiveInject(ChangeDetectorRef));
};
_MatTabBodyBase.ɵdir = ɵɵdefineDirective({
  type: _MatTabBodyBase,
  inputs: {
    _content: [0, "content", "_content"],
    origin: "origin",
    animationDuration: "animationDuration",
    position: "position"
  },
  outputs: {
    _onCentering: "_onCentering",
    _beforeCentering: "_beforeCentering",
    _afterLeavingCenter: "_afterLeavingCenter",
    _onCentered: "_onCentered"
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(_MatTabBodyBase, [{
    type: Directive
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: Directionality,
      decorators: [{
        type: Optional
      }]
    }, {
      type: ChangeDetectorRef
    }];
  }, {
    _onCentering: [{
      type: Output
    }],
    _beforeCentering: [{
      type: Output
    }],
    _afterLeavingCenter: [{
      type: Output
    }],
    _onCentered: [{
      type: Output
    }],
    _content: [{
      type: Input,
      args: ["content"]
    }],
    origin: [{
      type: Input
    }],
    animationDuration: [{
      type: Input
    }],
    position: [{
      type: Input
    }]
  });
})();
var MatTabBody = class extends _MatTabBodyBase {
  constructor(elementRef, dir, changeDetectorRef) {
    super(elementRef, dir, changeDetectorRef);
  }
};
MatTabBody.ɵfac = function MatTabBody_Factory(ɵt) {
  return new (ɵt || MatTabBody)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Directionality, 8), ɵɵdirectiveInject(ChangeDetectorRef));
};
MatTabBody.ɵcmp = ɵɵdefineComponent({
  type: MatTabBody,
  selectors: [["mat-tab-body"]],
  viewQuery: function MatTabBody_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(CdkPortalOutlet, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._portalHost = _t.first);
    }
  },
  hostAttrs: [1, "mat-tab-body"],
  features: [ɵɵInheritDefinitionFeature],
  decls: 3,
  vars: 6,
  consts: [["content", ""], ["cdkScrollable", "", 1, "mat-tab-body-content"], ["matTabBodyHost", ""]],
  template: function MatTabBody_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵelementStart(0, "div", 1, 0);
      ɵɵlistener("@translateTab.start", function MatTabBody_Template_div_animation_translateTab_start_0_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx._onTranslateTabStarted($event));
      })("@translateTab.done", function MatTabBody_Template_div_animation_translateTab_done_0_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx._translateTabComplete.next($event));
      });
      ɵɵtemplate(2, MatTabBody_ng_template_2_Template, 0, 0, "ng-template", 2);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵproperty("@translateTab", ɵɵpureFunction2(3, _c2, ctx._position, ɵɵpureFunction1(1, _c1, ctx.animationDuration)));
    }
  },
  dependencies: [MatTabBodyPortal],
  styles: ['.mat-tab-body-content{height:100%;overflow:auto}.mat-tab-group-dynamic-height .mat-tab-body-content{overflow:hidden}.mat-tab-body-content[style*="visibility: hidden"]{display:none}\n'],
  encapsulation: 2,
  data: {
    animation: [matTabsAnimations.translateTab]
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTabBody, [{
    type: Component,
    args: [{
      selector: "mat-tab-body",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.Default,
      animations: [matTabsAnimations.translateTab],
      host: {
        "class": "mat-tab-body"
      },
      template: '<div class="mat-tab-body-content" #content\n     [@translateTab]="{\n        value: _position,\n        params: {animationDuration: animationDuration}\n     }"\n     (@translateTab.start)="_onTranslateTabStarted($event)"\n     (@translateTab.done)="_translateTabComplete.next($event)"\n     cdkScrollable>\n  <ng-template matTabBodyHost></ng-template>\n</div>\n',
      styles: ['.mat-tab-body-content{height:100%;overflow:auto}.mat-tab-group-dynamic-height .mat-tab-body-content{overflow:hidden}.mat-tab-body-content[style*="visibility: hidden"]{display:none}\n']
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: Directionality,
      decorators: [{
        type: Optional
      }]
    }, {
      type: ChangeDetectorRef
    }];
  }, {
    _portalHost: [{
      type: ViewChild,
      args: [CdkPortalOutlet]
    }]
  });
})();
var MAT_TABS_CONFIG = new InjectionToken("MAT_TABS_CONFIG");
var _MatTabLabelWrapperBase = mixinDisabled(class {
});
var MatTabLabelWrapper = class extends _MatTabLabelWrapperBase {
  constructor(elementRef) {
    super();
    this.elementRef = elementRef;
  }
  /** Sets focus on the wrapper element */
  focus() {
    this.elementRef.nativeElement.focus();
  }
  getOffsetLeft() {
    return this.elementRef.nativeElement.offsetLeft;
  }
  getOffsetWidth() {
    return this.elementRef.nativeElement.offsetWidth;
  }
};
MatTabLabelWrapper.ɵfac = function MatTabLabelWrapper_Factory(ɵt) {
  return new (ɵt || MatTabLabelWrapper)(ɵɵdirectiveInject(ElementRef));
};
MatTabLabelWrapper.ɵdir = ɵɵdefineDirective({
  type: MatTabLabelWrapper,
  selectors: [["", "matTabLabelWrapper", ""]],
  hostVars: 3,
  hostBindings: function MatTabLabelWrapper_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("aria-disabled", !!ctx.disabled);
      ɵɵclassProp("mat-tab-disabled", ctx.disabled);
    }
  },
  inputs: {
    disabled: "disabled"
  },
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTabLabelWrapper, [{
    type: Directive,
    args: [{
      selector: "[matTabLabelWrapper]",
      inputs: ["disabled"],
      host: {
        "[class.mat-tab-disabled]": "disabled",
        "[attr.aria-disabled]": "!!disabled"
      }
    }]
  }], function() {
    return [{
      type: ElementRef
    }];
  }, null);
})();
var passiveEventListenerOptions = normalizePassiveListenerOptions({
  passive: true
});
var EXAGGERATED_OVERSCROLL = 60;
var HEADER_SCROLL_DELAY = 650;
var HEADER_SCROLL_INTERVAL = 100;
var MatPaginatedTabHeader = class {
  constructor(_elementRef, _changeDetectorRef, _viewportRuler, _dir, _ngZone, _platform, _animationMode) {
    this._elementRef = _elementRef;
    this._changeDetectorRef = _changeDetectorRef;
    this._viewportRuler = _viewportRuler;
    this._dir = _dir;
    this._ngZone = _ngZone;
    this._platform = _platform;
    this._animationMode = _animationMode;
    this._scrollDistance = 0;
    this._selectedIndexChanged = false;
    this._destroyed = new Subject();
    this._showPaginationControls = false;
    this._disableScrollAfter = true;
    this._disableScrollBefore = true;
    this._stopScrolling = new Subject();
    this.disablePagination = false;
    this._selectedIndex = 0;
    this.selectFocusedIndex = new EventEmitter();
    this.indexFocused = new EventEmitter();
    _ngZone.runOutsideAngular(() => {
      fromEvent(_elementRef.nativeElement, "mouseleave").pipe(takeUntil(this._destroyed)).subscribe(() => {
        this._stopInterval();
      });
    });
  }
  /** The index of the active tab. */
  get selectedIndex() {
    return this._selectedIndex;
  }
  set selectedIndex(value) {
    value = coerceNumberProperty(value);
    if (this._selectedIndex != value) {
      this._selectedIndexChanged = true;
      this._selectedIndex = value;
      if (this._keyManager) {
        this._keyManager.updateActiveItem(value);
      }
    }
  }
  ngAfterViewInit() {
    fromEvent(this._previousPaginator.nativeElement, "touchstart", passiveEventListenerOptions).pipe(takeUntil(this._destroyed)).subscribe(() => {
      this._handlePaginatorPress("before");
    });
    fromEvent(this._nextPaginator.nativeElement, "touchstart", passiveEventListenerOptions).pipe(takeUntil(this._destroyed)).subscribe(() => {
      this._handlePaginatorPress("after");
    });
  }
  ngAfterContentInit() {
    const dirChange = this._dir ? this._dir.change : of("ltr");
    const resize = this._viewportRuler.change(150);
    const realign = () => {
      this.updatePagination();
      this._alignInkBarToSelectedTab();
    };
    this._keyManager = new FocusKeyManager(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap();
    this._keyManager.updateActiveItem(this._selectedIndex);
    this._ngZone.onStable.pipe(take(1)).subscribe(realign);
    merge(dirChange, resize, this._items.changes, this._itemsResized()).pipe(takeUntil(this._destroyed)).subscribe(() => {
      this._ngZone.run(() => {
        Promise.resolve().then(() => {
          this._scrollDistance = Math.max(0, Math.min(this._getMaxScrollDistance(), this._scrollDistance));
          realign();
        });
      });
      this._keyManager.withHorizontalOrientation(this._getLayoutDirection());
    });
    this._keyManager.change.pipe(takeUntil(this._destroyed)).subscribe((newFocusIndex) => {
      this.indexFocused.emit(newFocusIndex);
      this._setTabFocus(newFocusIndex);
    });
  }
  /** Sends any changes that could affect the layout of the items. */
  _itemsResized() {
    if (typeof ResizeObserver !== "function") {
      return EMPTY;
    }
    return this._items.changes.pipe(
      startWith(this._items),
      switchMap((tabItems) => new Observable((observer) => this._ngZone.runOutsideAngular(() => {
        const resizeObserver = new ResizeObserver(() => {
          observer.next();
        });
        tabItems.forEach((item) => {
          resizeObserver.observe(item.elementRef.nativeElement);
        });
        return () => {
          resizeObserver.disconnect();
        };
      }))),
      // Skip the first emit since the resize observer emits when an item
      // is observed for new items when the tab is already inserted
      skip(1)
    );
  }
  ngAfterContentChecked() {
    if (this._tabLabelCount != this._items.length) {
      this.updatePagination();
      this._tabLabelCount = this._items.length;
      this._changeDetectorRef.markForCheck();
    }
    if (this._selectedIndexChanged) {
      this._scrollToLabel(this._selectedIndex);
      this._checkScrollingControls();
      this._alignInkBarToSelectedTab();
      this._selectedIndexChanged = false;
      this._changeDetectorRef.markForCheck();
    }
    if (this._scrollDistanceChanged) {
      this._updateTabScrollPosition();
      this._scrollDistanceChanged = false;
      this._changeDetectorRef.markForCheck();
    }
  }
  ngOnDestroy() {
    this._destroyed.next();
    this._destroyed.complete();
    this._stopScrolling.complete();
  }
  /** Handles keyboard events on the header. */
  _handleKeydown(event) {
    if (hasModifierKey(event)) {
      return;
    }
    switch (event.keyCode) {
      case ENTER:
      case SPACE:
        if (this.focusIndex !== this.selectedIndex) {
          this.selectFocusedIndex.emit(this.focusIndex);
          this._itemSelected(event);
        }
        break;
      default:
        this._keyManager.onKeydown(event);
    }
  }
  /**
   * Callback for when the MutationObserver detects that the content has changed.
   */
  _onContentChanges() {
    const textContent = this._elementRef.nativeElement.textContent;
    if (textContent !== this._currentTextContent) {
      this._currentTextContent = textContent || "";
      this._ngZone.run(() => {
        this.updatePagination();
        this._alignInkBarToSelectedTab();
        this._changeDetectorRef.markForCheck();
      });
    }
  }
  /**
   * Updates the view whether pagination should be enabled or not.
   *
   * WARNING: Calling this method can be very costly in terms of performance. It should be called
   * as infrequently as possible from outside of the Tabs component as it causes a reflow of the
   * page.
   */
  updatePagination() {
    this._checkPaginationEnabled();
    this._checkScrollingControls();
    this._updateTabScrollPosition();
  }
  /** Tracks which element has focus; used for keyboard navigation */
  get focusIndex() {
    return this._keyManager ? this._keyManager.activeItemIndex : 0;
  }
  /** When the focus index is set, we must manually send focus to the correct label */
  set focusIndex(value) {
    if (!this._isValidIndex(value) || this.focusIndex === value || !this._keyManager) {
      return;
    }
    this._keyManager.setActiveItem(value);
  }
  /**
   * Determines if an index is valid.  If the tabs are not ready yet, we assume that the user is
   * providing a valid index and return true.
   */
  _isValidIndex(index) {
    if (!this._items) {
      return true;
    }
    const tab = this._items ? this._items.toArray()[index] : null;
    return !!tab && !tab.disabled;
  }
  /**
   * Sets focus on the HTML element for the label wrapper and scrolls it into the view if
   * scrolling is enabled.
   */
  _setTabFocus(tabIndex) {
    if (this._showPaginationControls) {
      this._scrollToLabel(tabIndex);
    }
    if (this._items && this._items.length) {
      this._items.toArray()[tabIndex].focus();
      const containerEl = this._tabListContainer.nativeElement;
      const dir = this._getLayoutDirection();
      if (dir == "ltr") {
        containerEl.scrollLeft = 0;
      } else {
        containerEl.scrollLeft = containerEl.scrollWidth - containerEl.offsetWidth;
      }
    }
  }
  /** The layout direction of the containing app. */
  _getLayoutDirection() {
    return this._dir && this._dir.value === "rtl" ? "rtl" : "ltr";
  }
  /** Performs the CSS transformation on the tab list that will cause the list to scroll. */
  _updateTabScrollPosition() {
    if (this.disablePagination) {
      return;
    }
    const scrollDistance = this.scrollDistance;
    const translateX = this._getLayoutDirection() === "ltr" ? -scrollDistance : scrollDistance;
    this._tabList.nativeElement.style.transform = `translateX(${Math.round(translateX)}px)`;
    if (this._platform.TRIDENT || this._platform.EDGE) {
      this._tabListContainer.nativeElement.scrollLeft = 0;
    }
  }
  /** Sets the distance in pixels that the tab header should be transformed in the X-axis. */
  get scrollDistance() {
    return this._scrollDistance;
  }
  set scrollDistance(value) {
    this._scrollTo(value);
  }
  /**
   * Moves the tab list in the 'before' or 'after' direction (towards the beginning of the list or
   * the end of the list, respectively). The distance to scroll is computed to be a third of the
   * length of the tab list view window.
   *
   * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
   * should be called sparingly.
   */
  _scrollHeader(direction) {
    const viewLength = this._tabListContainer.nativeElement.offsetWidth;
    const scrollAmount = (direction == "before" ? -1 : 1) * viewLength / 3;
    return this._scrollTo(this._scrollDistance + scrollAmount);
  }
  /** Handles click events on the pagination arrows. */
  _handlePaginatorClick(direction) {
    this._stopInterval();
    this._scrollHeader(direction);
  }
  /**
   * Moves the tab list such that the desired tab label (marked by index) is moved into view.
   *
   * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
   * should be called sparingly.
   */
  _scrollToLabel(labelIndex) {
    if (this.disablePagination) {
      return;
    }
    const selectedLabel = this._items ? this._items.toArray()[labelIndex] : null;
    if (!selectedLabel) {
      return;
    }
    const viewLength = this._tabListContainer.nativeElement.offsetWidth;
    const {
      offsetLeft,
      offsetWidth
    } = selectedLabel.elementRef.nativeElement;
    let labelBeforePos, labelAfterPos;
    if (this._getLayoutDirection() == "ltr") {
      labelBeforePos = offsetLeft;
      labelAfterPos = labelBeforePos + offsetWidth;
    } else {
      labelAfterPos = this._tabListInner.nativeElement.offsetWidth - offsetLeft;
      labelBeforePos = labelAfterPos - offsetWidth;
    }
    const beforeVisiblePos = this.scrollDistance;
    const afterVisiblePos = this.scrollDistance + viewLength;
    if (labelBeforePos < beforeVisiblePos) {
      this.scrollDistance -= beforeVisiblePos - labelBeforePos + EXAGGERATED_OVERSCROLL;
    } else if (labelAfterPos > afterVisiblePos) {
      this.scrollDistance += labelAfterPos - afterVisiblePos + EXAGGERATED_OVERSCROLL;
    }
  }
  /**
   * Evaluate whether the pagination controls should be displayed. If the scroll width of the
   * tab list is wider than the size of the header container, then the pagination controls should
   * be shown.
   *
   * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
   * should be called sparingly.
   */
  _checkPaginationEnabled() {
    if (this.disablePagination) {
      this._showPaginationControls = false;
    } else {
      const isEnabled = this._tabListInner.nativeElement.scrollWidth > this._elementRef.nativeElement.offsetWidth;
      if (!isEnabled) {
        this.scrollDistance = 0;
      }
      if (isEnabled !== this._showPaginationControls) {
        this._changeDetectorRef.markForCheck();
      }
      this._showPaginationControls = isEnabled;
    }
  }
  /**
   * Evaluate whether the before and after controls should be enabled or disabled.
   * If the header is at the beginning of the list (scroll distance is equal to 0) then disable the
   * before button. If the header is at the end of the list (scroll distance is equal to the
   * maximum distance we can scroll), then disable the after button.
   *
   * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
   * should be called sparingly.
   */
  _checkScrollingControls() {
    if (this.disablePagination) {
      this._disableScrollAfter = this._disableScrollBefore = true;
    } else {
      this._disableScrollBefore = this.scrollDistance == 0;
      this._disableScrollAfter = this.scrollDistance == this._getMaxScrollDistance();
      this._changeDetectorRef.markForCheck();
    }
  }
  /**
   * Determines what is the maximum length in pixels that can be set for the scroll distance. This
   * is equal to the difference in width between the tab list container and tab header container.
   *
   * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
   * should be called sparingly.
   */
  _getMaxScrollDistance() {
    const lengthOfTabList = this._tabListInner.nativeElement.scrollWidth;
    const viewLength = this._tabListContainer.nativeElement.offsetWidth;
    return lengthOfTabList - viewLength || 0;
  }
  /** Tells the ink-bar to align itself to the current label wrapper */
  _alignInkBarToSelectedTab() {
    const selectedItem = this._items && this._items.length ? this._items.toArray()[this.selectedIndex] : null;
    const selectedLabelWrapper = selectedItem ? selectedItem.elementRef.nativeElement : null;
    if (selectedLabelWrapper) {
      this._inkBar.alignToElement(selectedLabelWrapper);
    } else {
      this._inkBar.hide();
    }
  }
  /** Stops the currently-running paginator interval.  */
  _stopInterval() {
    this._stopScrolling.next();
  }
  /**
   * Handles the user pressing down on one of the paginators.
   * Starts scrolling the header after a certain amount of time.
   * @param direction In which direction the paginator should be scrolled.
   */
  _handlePaginatorPress(direction, mouseEvent) {
    if (mouseEvent && mouseEvent.button != null && mouseEvent.button !== 0) {
      return;
    }
    this._stopInterval();
    timer(HEADER_SCROLL_DELAY, HEADER_SCROLL_INTERVAL).pipe(takeUntil(merge(this._stopScrolling, this._destroyed))).subscribe(() => {
      const {
        maxScrollDistance,
        distance
      } = this._scrollHeader(direction);
      if (distance === 0 || distance >= maxScrollDistance) {
        this._stopInterval();
      }
    });
  }
  /**
   * Scrolls the header to a given position.
   * @param position Position to which to scroll.
   * @returns Information on the current scroll distance and the maximum.
   */
  _scrollTo(position) {
    if (this.disablePagination) {
      return {
        maxScrollDistance: 0,
        distance: 0
      };
    }
    const maxScrollDistance = this._getMaxScrollDistance();
    this._scrollDistance = Math.max(0, Math.min(maxScrollDistance, position));
    this._scrollDistanceChanged = true;
    this._checkScrollingControls();
    return {
      maxScrollDistance,
      distance: this._scrollDistance
    };
  }
};
MatPaginatedTabHeader.ɵfac = function MatPaginatedTabHeader_Factory(ɵt) {
  return new (ɵt || MatPaginatedTabHeader)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ViewportRuler), ɵɵdirectiveInject(Directionality, 8), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Platform), ɵɵdirectiveInject(ANIMATION_MODULE_TYPE, 8));
};
MatPaginatedTabHeader.ɵdir = ɵɵdefineDirective({
  type: MatPaginatedTabHeader,
  inputs: {
    disablePagination: "disablePagination"
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatPaginatedTabHeader, [{
    type: Directive
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: ChangeDetectorRef
    }, {
      type: ViewportRuler
    }, {
      type: Directionality,
      decorators: [{
        type: Optional
      }]
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
        args: [ANIMATION_MODULE_TYPE]
      }]
    }];
  }, {
    disablePagination: [{
      type: Input
    }]
  });
})();
var _MatTabHeaderBase = class extends MatPaginatedTabHeader {
  constructor(elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, animationMode) {
    super(elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, animationMode);
    this._disableRipple = false;
  }
  /** Whether the ripple effect is disabled or not. */
  get disableRipple() {
    return this._disableRipple;
  }
  set disableRipple(value) {
    this._disableRipple = coerceBooleanProperty(value);
  }
  _itemSelected(event) {
    event.preventDefault();
  }
};
_MatTabHeaderBase.ɵfac = function _MatTabHeaderBase_Factory(ɵt) {
  return new (ɵt || _MatTabHeaderBase)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ViewportRuler), ɵɵdirectiveInject(Directionality, 8), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Platform), ɵɵdirectiveInject(ANIMATION_MODULE_TYPE, 8));
};
_MatTabHeaderBase.ɵdir = ɵɵdefineDirective({
  type: _MatTabHeaderBase,
  inputs: {
    disableRipple: "disableRipple"
  },
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(_MatTabHeaderBase, [{
    type: Directive
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: ChangeDetectorRef
    }, {
      type: ViewportRuler
    }, {
      type: Directionality,
      decorators: [{
        type: Optional
      }]
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
        args: [ANIMATION_MODULE_TYPE]
      }]
    }];
  }, {
    disableRipple: [{
      type: Input
    }]
  });
})();
var MatTabHeader = class extends _MatTabHeaderBase {
  constructor(elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, animationMode) {
    super(elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, animationMode);
  }
};
MatTabHeader.ɵfac = function MatTabHeader_Factory(ɵt) {
  return new (ɵt || MatTabHeader)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ViewportRuler), ɵɵdirectiveInject(Directionality, 8), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Platform), ɵɵdirectiveInject(ANIMATION_MODULE_TYPE, 8));
};
MatTabHeader.ɵcmp = ɵɵdefineComponent({
  type: MatTabHeader,
  selectors: [["mat-tab-header"]],
  contentQueries: function MatTabHeader_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, MatTabLabelWrapper, 4);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._items = _t);
    }
  },
  viewQuery: function MatTabHeader_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(MatInkBar, 7);
      ɵɵviewQuery(_c3, 7);
      ɵɵviewQuery(_c4, 7);
      ɵɵviewQuery(_c5, 7);
      ɵɵviewQuery(_c6, 5);
      ɵɵviewQuery(_c7, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._inkBar = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._tabListContainer = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._tabList = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._tabListInner = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._nextPaginator = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._previousPaginator = _t.first);
    }
  },
  hostAttrs: [1, "mat-tab-header"],
  hostVars: 4,
  hostBindings: function MatTabHeader_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("mat-tab-header-pagination-controls-enabled", ctx._showPaginationControls)("mat-tab-header-rtl", ctx._getLayoutDirection() == "rtl");
    }
  },
  inputs: {
    selectedIndex: "selectedIndex"
  },
  outputs: {
    selectFocusedIndex: "selectFocusedIndex",
    indexFocused: "indexFocused"
  },
  features: [ɵɵInheritDefinitionFeature],
  ngContentSelectors: _c0,
  decls: 14,
  vars: 10,
  consts: [["previousPaginator", ""], ["tabListContainer", ""], ["tabList", ""], ["tabListInner", ""], ["nextPaginator", ""], ["aria-hidden", "true", "type", "button", "mat-ripple", "", "tabindex", "-1", 1, "mat-tab-header-pagination", "mat-tab-header-pagination-before", "mat-elevation-z4", 3, "click", "mousedown", "touchend", "matRippleDisabled", "disabled"], [1, "mat-tab-header-pagination-chevron"], [1, "mat-tab-label-container", 3, "keydown"], ["role", "tablist", 1, "mat-tab-list", 3, "cdkObserveContent"], [1, "mat-tab-labels"], ["aria-hidden", "true", "type", "button", "mat-ripple", "", "tabindex", "-1", 1, "mat-tab-header-pagination", "mat-tab-header-pagination-after", "mat-elevation-z4", 3, "mousedown", "click", "touchend", "matRippleDisabled", "disabled"]],
  template: function MatTabHeader_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵprojectionDef();
      ɵɵelementStart(0, "button", 5, 0);
      ɵɵlistener("click", function MatTabHeader_Template_button_click_0_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx._handlePaginatorClick("before"));
      })("mousedown", function MatTabHeader_Template_button_mousedown_0_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx._handlePaginatorPress("before", $event));
      })("touchend", function MatTabHeader_Template_button_touchend_0_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx._stopInterval());
      });
      ɵɵelement(2, "div", 6);
      ɵɵelementEnd();
      ɵɵelementStart(3, "div", 7, 1);
      ɵɵlistener("keydown", function MatTabHeader_Template_div_keydown_3_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx._handleKeydown($event));
      });
      ɵɵelementStart(5, "div", 8, 2);
      ɵɵlistener("cdkObserveContent", function MatTabHeader_Template_div_cdkObserveContent_5_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx._onContentChanges());
      });
      ɵɵelementStart(7, "div", 9, 3);
      ɵɵprojection(9);
      ɵɵelementEnd();
      ɵɵelement(10, "mat-ink-bar");
      ɵɵelementEnd()();
      ɵɵelementStart(11, "button", 10, 4);
      ɵɵlistener("mousedown", function MatTabHeader_Template_button_mousedown_11_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx._handlePaginatorPress("after", $event));
      })("click", function MatTabHeader_Template_button_click_11_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx._handlePaginatorClick("after"));
      })("touchend", function MatTabHeader_Template_button_touchend_11_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx._stopInterval());
      });
      ɵɵelement(13, "div", 6);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵclassProp("mat-tab-header-pagination-disabled", ctx._disableScrollBefore);
      ɵɵproperty("matRippleDisabled", ctx._disableScrollBefore || ctx.disableRipple)("disabled", ctx._disableScrollBefore || null);
      ɵɵadvance(5);
      ɵɵclassProp("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
      ɵɵadvance(6);
      ɵɵclassProp("mat-tab-header-pagination-disabled", ctx._disableScrollAfter);
      ɵɵproperty("matRippleDisabled", ctx._disableScrollAfter || ctx.disableRipple)("disabled", ctx._disableScrollAfter || null);
    }
  },
  dependencies: [MatRipple, CdkObserveContent, MatInkBar],
  styles: [".mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mat-tab-header-pagination{-webkit-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:transparent;touch-action:none;box-sizing:content-box;background:none;border:none;outline:0;padding:0}.mat-tab-header-pagination::-moz-focus-inner{border:0}.mat-tab-header-pagination-controls-enabled .mat-tab-header-pagination{display:flex}.mat-tab-header-pagination-before,.mat-tab-header-rtl .mat-tab-header-pagination-after{padding-left:4px}.mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-rtl .mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-tab-header-rtl .mat-tab-header-pagination-before,.mat-tab-header-pagination-after{padding-right:4px}.mat-tab-header-rtl .mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;height:8px;width:8px}.mat-tab-header-pagination-disabled{box-shadow:none;cursor:default}.mat-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-ink-bar{position:absolute;bottom:0;height:2px;transition:500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable.mat-ink-bar{transition:none;animation:none}.mat-tab-group-inverted-header .mat-ink-bar{bottom:auto;top:0}.cdk-high-contrast-active .mat-ink-bar{outline:solid 2px;height:0}.mat-tab-labels{display:flex}[mat-align-tabs=center]>.mat-tab-header .mat-tab-labels{justify-content:center}[mat-align-tabs=end]>.mat-tab-header .mat-tab-labels{justify-content:flex-end}.mat-tab-label-container{display:flex;flex-grow:1;overflow:hidden;z-index:1}._mat-animation-noopable.mat-tab-list{transition:none;animation:none}.mat-tab-label{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;position:relative}.mat-tab-label:focus{outline:none}.mat-tab-label:focus:not(.mat-tab-disabled){opacity:1}.cdk-high-contrast-active .mat-tab-label:focus{outline:dotted 2px;outline-offset:-2px}.mat-tab-label.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-label.mat-tab-disabled{opacity:.5}.mat-tab-label .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-label{opacity:1}@media(max-width: 599px){.mat-tab-label{min-width:72px}}\n"],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTabHeader, [{
    type: Component,
    args: [{
      selector: "mat-tab-header",
      inputs: ["selectedIndex"],
      outputs: ["selectFocusedIndex", "indexFocused"],
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.Default,
      host: {
        "class": "mat-tab-header",
        "[class.mat-tab-header-pagination-controls-enabled]": "_showPaginationControls",
        "[class.mat-tab-header-rtl]": "_getLayoutDirection() == 'rtl'"
      },
      template: `<button class="mat-tab-header-pagination mat-tab-header-pagination-before mat-elevation-z4"
     #previousPaginator
     aria-hidden="true"
     type="button"
     mat-ripple
     tabindex="-1"
     [matRippleDisabled]="_disableScrollBefore || disableRipple"
     [class.mat-tab-header-pagination-disabled]="_disableScrollBefore"
     [disabled]="_disableScrollBefore || null"
     (click)="_handlePaginatorClick('before')"
     (mousedown)="_handlePaginatorPress('before', $event)"
     (touchend)="_stopInterval()">
  <div class="mat-tab-header-pagination-chevron"></div>
</button>

<div class="mat-tab-label-container" #tabListContainer (keydown)="_handleKeydown($event)">
  <div
    #tabList
    class="mat-tab-list"
    [class._mat-animation-noopable]="_animationMode === 'NoopAnimations'"
    role="tablist"
    (cdkObserveContent)="_onContentChanges()">
    <div class="mat-tab-labels" #tabListInner>
      <ng-content></ng-content>
    </div>
    <mat-ink-bar></mat-ink-bar>
  </div>
</div>

<button class="mat-tab-header-pagination mat-tab-header-pagination-after mat-elevation-z4"
     #nextPaginator
     aria-hidden="true"
     type="button"
     mat-ripple
     [matRippleDisabled]="_disableScrollAfter || disableRipple"
     [class.mat-tab-header-pagination-disabled]="_disableScrollAfter"
     [disabled]="_disableScrollAfter || null"
     tabindex="-1"
     (mousedown)="_handlePaginatorPress('after', $event)"
     (click)="_handlePaginatorClick('after')"
     (touchend)="_stopInterval()">
  <div class="mat-tab-header-pagination-chevron"></div>
</button>
`,
      styles: [".mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mat-tab-header-pagination{-webkit-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:transparent;touch-action:none;box-sizing:content-box;background:none;border:none;outline:0;padding:0}.mat-tab-header-pagination::-moz-focus-inner{border:0}.mat-tab-header-pagination-controls-enabled .mat-tab-header-pagination{display:flex}.mat-tab-header-pagination-before,.mat-tab-header-rtl .mat-tab-header-pagination-after{padding-left:4px}.mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-rtl .mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-tab-header-rtl .mat-tab-header-pagination-before,.mat-tab-header-pagination-after{padding-right:4px}.mat-tab-header-rtl .mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;height:8px;width:8px}.mat-tab-header-pagination-disabled{box-shadow:none;cursor:default}.mat-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-ink-bar{position:absolute;bottom:0;height:2px;transition:500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable.mat-ink-bar{transition:none;animation:none}.mat-tab-group-inverted-header .mat-ink-bar{bottom:auto;top:0}.cdk-high-contrast-active .mat-ink-bar{outline:solid 2px;height:0}.mat-tab-labels{display:flex}[mat-align-tabs=center]>.mat-tab-header .mat-tab-labels{justify-content:center}[mat-align-tabs=end]>.mat-tab-header .mat-tab-labels{justify-content:flex-end}.mat-tab-label-container{display:flex;flex-grow:1;overflow:hidden;z-index:1}._mat-animation-noopable.mat-tab-list{transition:none;animation:none}.mat-tab-label{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;position:relative}.mat-tab-label:focus{outline:none}.mat-tab-label:focus:not(.mat-tab-disabled){opacity:1}.cdk-high-contrast-active .mat-tab-label:focus{outline:dotted 2px;outline-offset:-2px}.mat-tab-label.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-label.mat-tab-disabled{opacity:.5}.mat-tab-label .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-label{opacity:1}@media(max-width: 599px){.mat-tab-label{min-width:72px}}\n"]
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: ChangeDetectorRef
    }, {
      type: ViewportRuler
    }, {
      type: Directionality,
      decorators: [{
        type: Optional
      }]
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
        args: [ANIMATION_MODULE_TYPE]
      }]
    }];
  }, {
    _items: [{
      type: ContentChildren,
      args: [MatTabLabelWrapper, {
        descendants: false
      }]
    }],
    _inkBar: [{
      type: ViewChild,
      args: [MatInkBar, {
        static: true
      }]
    }],
    _tabListContainer: [{
      type: ViewChild,
      args: ["tabListContainer", {
        static: true
      }]
    }],
    _tabList: [{
      type: ViewChild,
      args: ["tabList", {
        static: true
      }]
    }],
    _tabListInner: [{
      type: ViewChild,
      args: ["tabListInner", {
        static: true
      }]
    }],
    _nextPaginator: [{
      type: ViewChild,
      args: ["nextPaginator"]
    }],
    _previousPaginator: [{
      type: ViewChild,
      args: ["previousPaginator"]
    }]
  });
})();
var nextId = 0;
var MatTabChangeEvent = class {
};
var _MatTabGroupMixinBase = mixinColor(mixinDisableRipple(class {
  constructor(_elementRef) {
    this._elementRef = _elementRef;
  }
}), "primary");
var _MatTabGroupBase = class extends _MatTabGroupMixinBase {
  constructor(elementRef, _changeDetectorRef, defaultConfig, _animationMode) {
    super(elementRef);
    this._changeDetectorRef = _changeDetectorRef;
    this._animationMode = _animationMode;
    this._tabs = new QueryList();
    this._indexToSelect = 0;
    this._lastFocusedTabIndex = null;
    this._tabBodyWrapperHeight = 0;
    this._tabsSubscription = Subscription.EMPTY;
    this._tabLabelSubscription = Subscription.EMPTY;
    this._selectedIndex = null;
    this.headerPosition = "above";
    this.selectedIndexChange = new EventEmitter();
    this.focusChange = new EventEmitter();
    this.animationDone = new EventEmitter();
    this.selectedTabChange = new EventEmitter(true);
    this._groupId = nextId++;
    this.animationDuration = defaultConfig && defaultConfig.animationDuration ? defaultConfig.animationDuration : "500ms";
    this.disablePagination = defaultConfig && defaultConfig.disablePagination != null ? defaultConfig.disablePagination : false;
    this.dynamicHeight = defaultConfig && defaultConfig.dynamicHeight != null ? defaultConfig.dynamicHeight : false;
    this.contentTabIndex = defaultConfig?.contentTabIndex ?? null;
  }
  /** Whether the tab group should grow to the size of the active tab. */
  get dynamicHeight() {
    return this._dynamicHeight;
  }
  set dynamicHeight(value) {
    this._dynamicHeight = coerceBooleanProperty(value);
  }
  /** The index of the active tab. */
  get selectedIndex() {
    return this._selectedIndex;
  }
  set selectedIndex(value) {
    this._indexToSelect = coerceNumberProperty(value, null);
  }
  /** Duration for the tab animation. Will be normalized to milliseconds if no units are set. */
  get animationDuration() {
    return this._animationDuration;
  }
  set animationDuration(value) {
    this._animationDuration = /^\d+$/.test(value + "") ? value + "ms" : value;
  }
  /**
   * `tabindex` to be set on the inner element that wraps the tab content. Can be used for improved
   * accessibility when the tab does not have focusable elements or if it has scrollable content.
   * The `tabindex` will be removed automatically for inactive tabs.
   * Read more at https://www.w3.org/TR/wai-aria-practices/examples/tabs/tabs-2/tabs.html
   */
  get contentTabIndex() {
    return this._contentTabIndex;
  }
  set contentTabIndex(value) {
    this._contentTabIndex = coerceNumberProperty(value, null);
  }
  /** Background color of the tab group. */
  get backgroundColor() {
    return this._backgroundColor;
  }
  set backgroundColor(value) {
    const nativeElement = this._elementRef.nativeElement;
    nativeElement.classList.remove(`mat-background-${this.backgroundColor}`);
    if (value) {
      nativeElement.classList.add(`mat-background-${value}`);
    }
    this._backgroundColor = value;
  }
  /**
   * After the content is checked, this component knows what tabs have been defined
   * and what the selected index should be. This is where we can know exactly what position
   * each tab should be in according to the new selected index, and additionally we know how
   * a new selected tab should transition in (from the left or right).
   */
  ngAfterContentChecked() {
    const indexToSelect = this._indexToSelect = this._clampTabIndex(this._indexToSelect);
    if (this._selectedIndex != indexToSelect) {
      const isFirstRun = this._selectedIndex == null;
      if (!isFirstRun) {
        this.selectedTabChange.emit(this._createChangeEvent(indexToSelect));
        const wrapper = this._tabBodyWrapper.nativeElement;
        wrapper.style.minHeight = wrapper.clientHeight + "px";
      }
      Promise.resolve().then(() => {
        this._tabs.forEach((tab, index) => tab.isActive = index === indexToSelect);
        if (!isFirstRun) {
          this.selectedIndexChange.emit(indexToSelect);
          this._tabBodyWrapper.nativeElement.style.minHeight = "";
        }
      });
    }
    this._tabs.forEach((tab, index) => {
      tab.position = index - indexToSelect;
      if (this._selectedIndex != null && tab.position == 0 && !tab.origin) {
        tab.origin = indexToSelect - this._selectedIndex;
      }
    });
    if (this._selectedIndex !== indexToSelect) {
      this._selectedIndex = indexToSelect;
      this._lastFocusedTabIndex = null;
      this._changeDetectorRef.markForCheck();
    }
  }
  ngAfterContentInit() {
    this._subscribeToAllTabChanges();
    this._subscribeToTabLabels();
    this._tabsSubscription = this._tabs.changes.subscribe(() => {
      const indexToSelect = this._clampTabIndex(this._indexToSelect);
      if (indexToSelect === this._selectedIndex) {
        const tabs = this._tabs.toArray();
        let selectedTab;
        for (let i = 0; i < tabs.length; i++) {
          if (tabs[i].isActive) {
            this._indexToSelect = this._selectedIndex = i;
            this._lastFocusedTabIndex = null;
            selectedTab = tabs[i];
            break;
          }
        }
        if (!selectedTab && tabs[indexToSelect]) {
          Promise.resolve().then(() => {
            tabs[indexToSelect].isActive = true;
            this.selectedTabChange.emit(this._createChangeEvent(indexToSelect));
          });
        }
      }
      this._changeDetectorRef.markForCheck();
    });
  }
  /** Listens to changes in all of the tabs. */
  _subscribeToAllTabChanges() {
    this._allTabs.changes.pipe(startWith(this._allTabs)).subscribe((tabs) => {
      this._tabs.reset(tabs.filter((tab) => {
        return tab._closestTabGroup === this || !tab._closestTabGroup;
      }));
      this._tabs.notifyOnChanges();
    });
  }
  ngOnDestroy() {
    this._tabs.destroy();
    this._tabsSubscription.unsubscribe();
    this._tabLabelSubscription.unsubscribe();
  }
  /** Re-aligns the ink bar to the selected tab element. */
  realignInkBar() {
    if (this._tabHeader) {
      this._tabHeader._alignInkBarToSelectedTab();
    }
  }
  /**
   * Recalculates the tab group's pagination dimensions.
   *
   * WARNING: Calling this method can be very costly in terms of performance. It should be called
   * as infrequently as possible from outside of the Tabs component as it causes a reflow of the
   * page.
   */
  updatePagination() {
    if (this._tabHeader) {
      this._tabHeader.updatePagination();
    }
  }
  /**
   * Sets focus to a particular tab.
   * @param index Index of the tab to be focused.
   */
  focusTab(index) {
    const header = this._tabHeader;
    if (header) {
      header.focusIndex = index;
    }
  }
  _focusChanged(index) {
    this._lastFocusedTabIndex = index;
    this.focusChange.emit(this._createChangeEvent(index));
  }
  _createChangeEvent(index) {
    const event = new MatTabChangeEvent();
    event.index = index;
    if (this._tabs && this._tabs.length) {
      event.tab = this._tabs.toArray()[index];
    }
    return event;
  }
  /**
   * Subscribes to changes in the tab labels. This is needed, because the @Input for the label is
   * on the MatTab component, whereas the data binding is inside the MatTabGroup. In order for the
   * binding to be updated, we need to subscribe to changes in it and trigger change detection
   * manually.
   */
  _subscribeToTabLabels() {
    if (this._tabLabelSubscription) {
      this._tabLabelSubscription.unsubscribe();
    }
    this._tabLabelSubscription = merge(...this._tabs.map((tab) => tab._stateChanges)).subscribe(() => this._changeDetectorRef.markForCheck());
  }
  /** Clamps the given index to the bounds of 0 and the tabs length. */
  _clampTabIndex(index) {
    return Math.min(this._tabs.length - 1, Math.max(index || 0, 0));
  }
  /** Returns a unique id for each tab label element */
  _getTabLabelId(i) {
    return `mat-tab-label-${this._groupId}-${i}`;
  }
  /** Returns a unique id for each tab content element */
  _getTabContentId(i) {
    return `mat-tab-content-${this._groupId}-${i}`;
  }
  /**
   * Sets the height of the body wrapper to the height of the activating tab if dynamic
   * height property is true.
   */
  _setTabBodyWrapperHeight(tabHeight) {
    if (!this._dynamicHeight || !this._tabBodyWrapperHeight) {
      return;
    }
    const wrapper = this._tabBodyWrapper.nativeElement;
    wrapper.style.height = this._tabBodyWrapperHeight + "px";
    if (this._tabBodyWrapper.nativeElement.offsetHeight) {
      wrapper.style.height = tabHeight + "px";
    }
  }
  /** Removes the height of the tab body wrapper. */
  _removeTabBodyWrapperHeight() {
    const wrapper = this._tabBodyWrapper.nativeElement;
    this._tabBodyWrapperHeight = wrapper.clientHeight;
    wrapper.style.height = "";
    this.animationDone.emit();
  }
  /** Handle click events, setting new selected index if appropriate. */
  _handleClick(tab, tabHeader, index) {
    if (!tab.disabled) {
      this.selectedIndex = tabHeader.focusIndex = index;
    }
  }
  /** Retrieves the tabindex for the tab. */
  _getTabIndex(tab, index) {
    if (tab.disabled) {
      return null;
    }
    const targetIndex = this._lastFocusedTabIndex ?? this.selectedIndex;
    return index === targetIndex ? 0 : -1;
  }
  /** Callback for when the focused state of a tab has changed. */
  _tabFocusChanged(focusOrigin, index) {
    if (focusOrigin && focusOrigin !== "mouse" && focusOrigin !== "touch") {
      this._tabHeader.focusIndex = index;
    }
  }
};
_MatTabGroupBase.ɵfac = function _MatTabGroupBase_Factory(ɵt) {
  return new (ɵt || _MatTabGroupBase)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(MAT_TABS_CONFIG, 8), ɵɵdirectiveInject(ANIMATION_MODULE_TYPE, 8));
};
_MatTabGroupBase.ɵdir = ɵɵdefineDirective({
  type: _MatTabGroupBase,
  inputs: {
    dynamicHeight: "dynamicHeight",
    selectedIndex: "selectedIndex",
    headerPosition: "headerPosition",
    animationDuration: "animationDuration",
    contentTabIndex: "contentTabIndex",
    disablePagination: "disablePagination",
    backgroundColor: "backgroundColor"
  },
  outputs: {
    selectedIndexChange: "selectedIndexChange",
    focusChange: "focusChange",
    animationDone: "animationDone",
    selectedTabChange: "selectedTabChange"
  },
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(_MatTabGroupBase, [{
    type: Directive
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: ChangeDetectorRef
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [MAT_TABS_CONFIG]
      }, {
        type: Optional
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Optional
      }, {
        type: Inject,
        args: [ANIMATION_MODULE_TYPE]
      }]
    }];
  }, {
    dynamicHeight: [{
      type: Input
    }],
    selectedIndex: [{
      type: Input
    }],
    headerPosition: [{
      type: Input
    }],
    animationDuration: [{
      type: Input
    }],
    contentTabIndex: [{
      type: Input
    }],
    disablePagination: [{
      type: Input
    }],
    backgroundColor: [{
      type: Input
    }],
    selectedIndexChange: [{
      type: Output
    }],
    focusChange: [{
      type: Output
    }],
    animationDone: [{
      type: Output
    }],
    selectedTabChange: [{
      type: Output
    }]
  });
})();
var MatTabGroup = class extends _MatTabGroupBase {
  constructor(elementRef, changeDetectorRef, defaultConfig, animationMode) {
    super(elementRef, changeDetectorRef, defaultConfig, animationMode);
  }
};
MatTabGroup.ɵfac = function MatTabGroup_Factory(ɵt) {
  return new (ɵt || MatTabGroup)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(MAT_TABS_CONFIG, 8), ɵɵdirectiveInject(ANIMATION_MODULE_TYPE, 8));
};
MatTabGroup.ɵcmp = ɵɵdefineComponent({
  type: MatTabGroup,
  selectors: [["mat-tab-group"]],
  contentQueries: function MatTabGroup_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, MatTab, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._allTabs = _t);
    }
  },
  viewQuery: function MatTabGroup_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c8, 5);
      ɵɵviewQuery(_c9, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._tabBodyWrapper = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._tabHeader = _t.first);
    }
  },
  hostAttrs: [1, "mat-tab-group"],
  hostVars: 4,
  hostBindings: function MatTabGroup_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("mat-tab-group-dynamic-height", ctx.dynamicHeight)("mat-tab-group-inverted-header", ctx.headerPosition === "below");
    }
  },
  inputs: {
    color: "color",
    disableRipple: "disableRipple"
  },
  exportAs: ["matTabGroup"],
  features: [ɵɵProvidersFeature([{
    provide: MAT_TAB_GROUP,
    useExisting: MatTabGroup
  }]), ɵɵInheritDefinitionFeature],
  decls: 6,
  vars: 7,
  consts: [["tabHeader", ""], ["tabBodyWrapper", ""], ["tabTextLabel", ""], [3, "indexFocused", "selectFocusedIndex", "selectedIndex", "disableRipple", "disablePagination"], ["class", "mat-tab-label mat-focus-indicator", "role", "tab", "matTabLabelWrapper", "", "mat-ripple", "", "cdkMonitorElementFocus", "", 3, "id", "mat-tab-label-active", "ngClass", "disabled", "matRippleDisabled", "click", "cdkFocusChange", 4, "ngFor", "ngForOf"], [1, "mat-tab-body-wrapper"], ["role", "tabpanel", 3, "id", "mat-tab-body-active", "ngClass", "content", "position", "origin", "animationDuration", "_onCentered", "_onCentering", 4, "ngFor", "ngForOf"], ["role", "tab", "matTabLabelWrapper", "", "mat-ripple", "", "cdkMonitorElementFocus", "", 1, "mat-tab-label", "mat-focus-indicator", 3, "click", "cdkFocusChange", "id", "ngClass", "disabled", "matRippleDisabled"], [1, "mat-tab-label-content"], [3, "ngIf", "ngIfElse"], [3, "cdkPortalOutlet"], ["role", "tabpanel", 3, "_onCentered", "_onCentering", "id", "ngClass", "content", "position", "origin", "animationDuration"]],
  template: function MatTabGroup_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵelementStart(0, "mat-tab-header", 3, 0);
      ɵɵlistener("indexFocused", function MatTabGroup_Template_mat_tab_header_indexFocused_0_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx._focusChanged($event));
      })("selectFocusedIndex", function MatTabGroup_Template_mat_tab_header_selectFocusedIndex_0_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.selectedIndex = $event);
      });
      ɵɵtemplate(2, MatTabGroup_div_2_Template, 5, 15, "div", 4);
      ɵɵelementEnd();
      ɵɵelementStart(3, "div", 5, 1);
      ɵɵtemplate(5, MatTabGroup_mat_tab_body_5_Template, 1, 10, "mat-tab-body", 6);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵproperty("selectedIndex", ctx.selectedIndex || 0)("disableRipple", ctx.disableRipple)("disablePagination", ctx.disablePagination);
      ɵɵadvance(2);
      ɵɵproperty("ngForOf", ctx._tabs);
      ɵɵadvance();
      ɵɵclassProp("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
      ɵɵadvance(2);
      ɵɵproperty("ngForOf", ctx._tabs);
    }
  },
  dependencies: [MatTabHeader, MatTabBody, NgForOf, MatTabLabelWrapper, MatRipple, CdkMonitorFocus, NgClass, NgIf, CdkPortalOutlet],
  styles: [".mat-tab-group{display:flex;flex-direction:column;max-width:100%}.mat-tab-group.mat-tab-group-inverted-header{flex-direction:column-reverse}.mat-tab-label{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;position:relative}.mat-tab-label:focus{outline:none}.mat-tab-label:focus:not(.mat-tab-disabled){opacity:1}.cdk-high-contrast-active .mat-tab-label:focus{outline:dotted 2px;outline-offset:-2px}.mat-tab-label.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-label.mat-tab-disabled{opacity:.5}.mat-tab-label .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-label{opacity:1}@media(max-width: 599px){.mat-tab-label{padding:0 12px}}@media(max-width: 959px){.mat-tab-label{padding:0 12px}}.mat-tab-group[mat-stretch-tabs]>.mat-tab-header .mat-tab-label{flex-basis:0;flex-grow:1}.mat-tab-body-wrapper{position:relative;overflow:hidden;display:flex;transition:height 500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable.mat-tab-body-wrapper{transition:none;animation:none}.mat-tab-body{top:0;left:0;right:0;bottom:0;position:absolute;display:block;overflow:hidden;outline:0;flex-basis:100%}.mat-tab-body.mat-tab-body-active{position:relative;overflow-x:hidden;overflow-y:auto;z-index:1;flex-grow:1}.mat-tab-group.mat-tab-group-dynamic-height .mat-tab-body.mat-tab-body-active{overflow-y:hidden}\n"],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTabGroup, [{
    type: Component,
    args: [{
      selector: "mat-tab-group",
      exportAs: "matTabGroup",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.Default,
      inputs: ["color", "disableRipple"],
      providers: [{
        provide: MAT_TAB_GROUP,
        useExisting: MatTabGroup
      }],
      host: {
        "class": "mat-tab-group",
        "[class.mat-tab-group-dynamic-height]": "dynamicHeight",
        "[class.mat-tab-group-inverted-header]": 'headerPosition === "below"'
      },
      template: `<mat-tab-header #tabHeader
               [selectedIndex]="selectedIndex || 0"
               [disableRipple]="disableRipple"
               [disablePagination]="disablePagination"
               (indexFocused)="_focusChanged($event)"
               (selectFocusedIndex)="selectedIndex = $event">
  <div class="mat-tab-label mat-focus-indicator" role="tab" matTabLabelWrapper mat-ripple
       cdkMonitorElementFocus
       *ngFor="let tab of _tabs; let i = index"
       [id]="_getTabLabelId(i)"
       [attr.tabIndex]="_getTabIndex(tab, i)"
       [attr.aria-posinset]="i + 1"
       [attr.aria-setsize]="_tabs.length"
       [attr.aria-controls]="_getTabContentId(i)"
       [attr.aria-selected]="selectedIndex === i"
       [attr.aria-label]="tab.ariaLabel || null"
       [attr.aria-labelledby]="(!tab.ariaLabel && tab.ariaLabelledby) ? tab.ariaLabelledby : null"
       [class.mat-tab-label-active]="selectedIndex === i"
       [ngClass]="tab.labelClass"
       [disabled]="tab.disabled"
       [matRippleDisabled]="tab.disabled || disableRipple"
       (click)="_handleClick(tab, tabHeader, i)"
       (cdkFocusChange)="_tabFocusChanged($event, i)">


    <div class="mat-tab-label-content">
      <!-- If there is a label template, use it. -->
      <ng-template [ngIf]="tab.templateLabel" [ngIfElse]="tabTextLabel">
        <ng-template [cdkPortalOutlet]="tab.templateLabel"></ng-template>
      </ng-template>

      <!-- If there is not a label template, fall back to the text label. -->
      <ng-template #tabTextLabel>{{tab.textLabel}}</ng-template>
    </div>
  </div>
</mat-tab-header>

<div
  class="mat-tab-body-wrapper"
  [class._mat-animation-noopable]="_animationMode === 'NoopAnimations'"
  #tabBodyWrapper>
  <mat-tab-body role="tabpanel"
               *ngFor="let tab of _tabs; let i = index"
               [id]="_getTabContentId(i)"
               [attr.tabindex]="(contentTabIndex != null && selectedIndex === i) ? contentTabIndex : null"
               [attr.aria-labelledby]="_getTabLabelId(i)"
               [class.mat-tab-body-active]="selectedIndex === i"
               [ngClass]="tab.bodyClass"
               [content]="tab.content!"
               [position]="tab.position!"
               [origin]="tab.origin"
               [animationDuration]="animationDuration"
               (_onCentered)="_removeTabBodyWrapperHeight()"
               (_onCentering)="_setTabBodyWrapperHeight($event)">
  </mat-tab-body>
</div>
`,
      styles: [".mat-tab-group{display:flex;flex-direction:column;max-width:100%}.mat-tab-group.mat-tab-group-inverted-header{flex-direction:column-reverse}.mat-tab-label{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;position:relative}.mat-tab-label:focus{outline:none}.mat-tab-label:focus:not(.mat-tab-disabled){opacity:1}.cdk-high-contrast-active .mat-tab-label:focus{outline:dotted 2px;outline-offset:-2px}.mat-tab-label.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-label.mat-tab-disabled{opacity:.5}.mat-tab-label .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-label{opacity:1}@media(max-width: 599px){.mat-tab-label{padding:0 12px}}@media(max-width: 959px){.mat-tab-label{padding:0 12px}}.mat-tab-group[mat-stretch-tabs]>.mat-tab-header .mat-tab-label{flex-basis:0;flex-grow:1}.mat-tab-body-wrapper{position:relative;overflow:hidden;display:flex;transition:height 500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable.mat-tab-body-wrapper{transition:none;animation:none}.mat-tab-body{top:0;left:0;right:0;bottom:0;position:absolute;display:block;overflow:hidden;outline:0;flex-basis:100%}.mat-tab-body.mat-tab-body-active{position:relative;overflow-x:hidden;overflow-y:auto;z-index:1;flex-grow:1}.mat-tab-group.mat-tab-group-dynamic-height .mat-tab-body.mat-tab-body-active{overflow-y:hidden}\n"]
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: ChangeDetectorRef
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [MAT_TABS_CONFIG]
      }, {
        type: Optional
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Optional
      }, {
        type: Inject,
        args: [ANIMATION_MODULE_TYPE]
      }]
    }];
  }, {
    _allTabs: [{
      type: ContentChildren,
      args: [MatTab, {
        descendants: true
      }]
    }],
    _tabBodyWrapper: [{
      type: ViewChild,
      args: ["tabBodyWrapper"]
    }],
    _tabHeader: [{
      type: ViewChild,
      args: ["tabHeader"]
    }]
  });
})();
var nextUniqueId = 0;
var _MatTabNavBase = class extends MatPaginatedTabHeader {
  constructor(elementRef, dir, ngZone, changeDetectorRef, viewportRuler, platform, animationMode) {
    super(elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, animationMode);
    this._disableRipple = false;
    this.color = "primary";
  }
  /** Background color of the tab nav. */
  get backgroundColor() {
    return this._backgroundColor;
  }
  set backgroundColor(value) {
    const classList = this._elementRef.nativeElement.classList;
    classList.remove(`mat-background-${this.backgroundColor}`);
    if (value) {
      classList.add(`mat-background-${value}`);
    }
    this._backgroundColor = value;
  }
  /** Whether the ripple effect is disabled or not. */
  get disableRipple() {
    return this._disableRipple;
  }
  set disableRipple(value) {
    this._disableRipple = coerceBooleanProperty(value);
  }
  _itemSelected() {
  }
  ngAfterContentInit() {
    this._items.changes.pipe(startWith(null), takeUntil(this._destroyed)).subscribe(() => {
      this.updateActiveLink();
    });
    super.ngAfterContentInit();
  }
  /** Notifies the component that the active link has been changed. */
  updateActiveLink() {
    if (!this._items) {
      return;
    }
    const items = this._items.toArray();
    for (let i = 0; i < items.length; i++) {
      if (items[i].active) {
        this.selectedIndex = i;
        this._changeDetectorRef.markForCheck();
        if (this.tabPanel) {
          this.tabPanel._activeTabId = items[i].id;
        }
        return;
      }
    }
    this.selectedIndex = -1;
    this._inkBar.hide();
  }
  _getRole() {
    return this.tabPanel ? "tablist" : this._elementRef.nativeElement.getAttribute("role");
  }
};
_MatTabNavBase.ɵfac = function _MatTabNavBase_Factory(ɵt) {
  return new (ɵt || _MatTabNavBase)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Directionality, 8), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ViewportRuler), ɵɵdirectiveInject(Platform), ɵɵdirectiveInject(ANIMATION_MODULE_TYPE, 8));
};
_MatTabNavBase.ɵdir = ɵɵdefineDirective({
  type: _MatTabNavBase,
  inputs: {
    backgroundColor: "backgroundColor",
    disableRipple: "disableRipple",
    color: "color",
    tabPanel: "tabPanel"
  },
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(_MatTabNavBase, [{
    type: Directive
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: Directionality,
      decorators: [{
        type: Optional
      }]
    }, {
      type: NgZone
    }, {
      type: ChangeDetectorRef
    }, {
      type: ViewportRuler
    }, {
      type: Platform
    }, {
      type: void 0,
      decorators: [{
        type: Optional
      }, {
        type: Inject,
        args: [ANIMATION_MODULE_TYPE]
      }]
    }];
  }, {
    backgroundColor: [{
      type: Input
    }],
    disableRipple: [{
      type: Input
    }],
    color: [{
      type: Input
    }],
    tabPanel: [{
      type: Input
    }]
  });
})();
var MatTabNav = class extends _MatTabNavBase {
  constructor(elementRef, dir, ngZone, changeDetectorRef, viewportRuler, platform, animationMode) {
    super(elementRef, dir, ngZone, changeDetectorRef, viewportRuler, platform, animationMode);
  }
};
MatTabNav.ɵfac = function MatTabNav_Factory(ɵt) {
  return new (ɵt || MatTabNav)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Directionality, 8), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ViewportRuler), ɵɵdirectiveInject(Platform), ɵɵdirectiveInject(ANIMATION_MODULE_TYPE, 8));
};
MatTabNav.ɵcmp = ɵɵdefineComponent({
  type: MatTabNav,
  selectors: [["", "mat-tab-nav-bar", ""]],
  contentQueries: function MatTabNav_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, MatTabLink, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._items = _t);
    }
  },
  viewQuery: function MatTabNav_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(MatInkBar, 7);
      ɵɵviewQuery(_c3, 7);
      ɵɵviewQuery(_c4, 7);
      ɵɵviewQuery(_c5, 7);
      ɵɵviewQuery(_c6, 5);
      ɵɵviewQuery(_c7, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._inkBar = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._tabListContainer = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._tabList = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._tabListInner = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._nextPaginator = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._previousPaginator = _t.first);
    }
  },
  hostAttrs: [1, "mat-tab-nav-bar", "mat-tab-header"],
  hostVars: 11,
  hostBindings: function MatTabNav_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("role", ctx._getRole());
      ɵɵclassProp("mat-tab-header-pagination-controls-enabled", ctx._showPaginationControls)("mat-tab-header-rtl", ctx._getLayoutDirection() == "rtl")("mat-primary", ctx.color !== "warn" && ctx.color !== "accent")("mat-accent", ctx.color === "accent")("mat-warn", ctx.color === "warn");
    }
  },
  inputs: {
    color: "color"
  },
  exportAs: ["matTabNavBar", "matTabNav"],
  features: [ɵɵInheritDefinitionFeature],
  attrs: _c10,
  ngContentSelectors: _c0,
  decls: 14,
  vars: 10,
  consts: [["previousPaginator", ""], ["tabListContainer", ""], ["tabList", ""], ["tabListInner", ""], ["nextPaginator", ""], ["aria-hidden", "true", "type", "button", "mat-ripple", "", "tabindex", "-1", 1, "mat-tab-header-pagination", "mat-tab-header-pagination-before", "mat-elevation-z4", 3, "click", "mousedown", "touchend", "matRippleDisabled", "disabled"], [1, "mat-tab-header-pagination-chevron"], [1, "mat-tab-link-container", 3, "keydown"], [1, "mat-tab-list", 3, "cdkObserveContent"], [1, "mat-tab-links"], ["aria-hidden", "true", "type", "button", "mat-ripple", "", "tabindex", "-1", 1, "mat-tab-header-pagination", "mat-tab-header-pagination-after", "mat-elevation-z4", 3, "mousedown", "click", "touchend", "matRippleDisabled", "disabled"]],
  template: function MatTabNav_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵprojectionDef();
      ɵɵelementStart(0, "button", 5, 0);
      ɵɵlistener("click", function MatTabNav_Template_button_click_0_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx._handlePaginatorClick("before"));
      })("mousedown", function MatTabNav_Template_button_mousedown_0_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx._handlePaginatorPress("before", $event));
      })("touchend", function MatTabNav_Template_button_touchend_0_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx._stopInterval());
      });
      ɵɵelement(2, "div", 6);
      ɵɵelementEnd();
      ɵɵelementStart(3, "div", 7, 1);
      ɵɵlistener("keydown", function MatTabNav_Template_div_keydown_3_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx._handleKeydown($event));
      });
      ɵɵelementStart(5, "div", 8, 2);
      ɵɵlistener("cdkObserveContent", function MatTabNav_Template_div_cdkObserveContent_5_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx._onContentChanges());
      });
      ɵɵelementStart(7, "div", 9, 3);
      ɵɵprojection(9);
      ɵɵelementEnd();
      ɵɵelement(10, "mat-ink-bar");
      ɵɵelementEnd()();
      ɵɵelementStart(11, "button", 10, 4);
      ɵɵlistener("mousedown", function MatTabNav_Template_button_mousedown_11_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx._handlePaginatorPress("after", $event));
      })("click", function MatTabNav_Template_button_click_11_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx._handlePaginatorClick("after"));
      })("touchend", function MatTabNav_Template_button_touchend_11_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx._stopInterval());
      });
      ɵɵelement(13, "div", 6);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵclassProp("mat-tab-header-pagination-disabled", ctx._disableScrollBefore);
      ɵɵproperty("matRippleDisabled", ctx._disableScrollBefore || ctx.disableRipple)("disabled", ctx._disableScrollBefore || null);
      ɵɵadvance(5);
      ɵɵclassProp("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
      ɵɵadvance(6);
      ɵɵclassProp("mat-tab-header-pagination-disabled", ctx._disableScrollAfter);
      ɵɵproperty("matRippleDisabled", ctx._disableScrollAfter || ctx.disableRipple)("disabled", ctx._disableScrollAfter || null);
    }
  },
  dependencies: [MatRipple, CdkObserveContent, MatInkBar],
  styles: [".mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mat-tab-header-pagination{-webkit-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:transparent;touch-action:none;box-sizing:content-box;background:none;border:none;outline:0;padding:0}.mat-tab-header-pagination::-moz-focus-inner{border:0}.mat-tab-header-pagination-controls-enabled .mat-tab-header-pagination{display:flex}.mat-tab-header-pagination-before,.mat-tab-header-rtl .mat-tab-header-pagination-after{padding-left:4px}.mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-rtl .mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-tab-header-rtl .mat-tab-header-pagination-before,.mat-tab-header-pagination-after{padding-right:4px}.mat-tab-header-rtl .mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;height:8px;width:8px}.mat-tab-header-pagination-disabled{box-shadow:none;cursor:default}.mat-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-tab-links{display:flex}[mat-align-tabs=center]>.mat-tab-link-container .mat-tab-links{justify-content:center}[mat-align-tabs=end]>.mat-tab-link-container .mat-tab-links{justify-content:flex-end}.mat-ink-bar{position:absolute;bottom:0;height:2px;transition:500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable.mat-ink-bar{transition:none;animation:none}.mat-tab-group-inverted-header .mat-ink-bar{bottom:auto;top:0}.cdk-high-contrast-active .mat-ink-bar{outline:solid 2px;height:0}.mat-tab-link-container{display:flex;flex-grow:1;overflow:hidden;z-index:1}.mat-tab-link{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;vertical-align:top;text-decoration:none;position:relative;overflow:hidden;-webkit-tap-highlight-color:transparent}.mat-tab-link:focus{outline:none}.mat-tab-link:focus:not(.mat-tab-disabled){opacity:1}.cdk-high-contrast-active .mat-tab-link:focus{outline:dotted 2px;outline-offset:-2px}.mat-tab-link.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-link.mat-tab-disabled{opacity:.5}.mat-tab-link .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-link{opacity:1}[mat-stretch-tabs] .mat-tab-link{flex-basis:0;flex-grow:1}.mat-tab-link.mat-tab-disabled{pointer-events:none}@media(max-width: 599px){.mat-tab-link{min-width:72px}}\n"],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTabNav, [{
    type: Component,
    args: [{
      selector: "[mat-tab-nav-bar]",
      exportAs: "matTabNavBar, matTabNav",
      inputs: ["color"],
      host: {
        "[attr.role]": "_getRole()",
        "class": "mat-tab-nav-bar mat-tab-header",
        "[class.mat-tab-header-pagination-controls-enabled]": "_showPaginationControls",
        "[class.mat-tab-header-rtl]": "_getLayoutDirection() == 'rtl'",
        "[class.mat-primary]": 'color !== "warn" && color !== "accent"',
        "[class.mat-accent]": 'color === "accent"',
        "[class.mat-warn]": 'color === "warn"'
      },
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.Default,
      template: `<button class="mat-tab-header-pagination mat-tab-header-pagination-before mat-elevation-z4"
     #previousPaginator
     aria-hidden="true"
     type="button"
     mat-ripple
     tabindex="-1"
     [matRippleDisabled]="_disableScrollBefore || disableRipple"
     [class.mat-tab-header-pagination-disabled]="_disableScrollBefore"
     [disabled]="_disableScrollBefore || null"
     (click)="_handlePaginatorClick('before')"
     (mousedown)="_handlePaginatorPress('before', $event)"
     (touchend)="_stopInterval()">
  <div class="mat-tab-header-pagination-chevron"></div>
</button>

<div class="mat-tab-link-container" #tabListContainer (keydown)="_handleKeydown($event)">
  <div
    class="mat-tab-list"
    [class._mat-animation-noopable]="_animationMode === 'NoopAnimations'"
    #tabList
    (cdkObserveContent)="_onContentChanges()">
    <div class="mat-tab-links" #tabListInner>
      <ng-content></ng-content>
    </div>
    <mat-ink-bar></mat-ink-bar>
  </div>
</div>

<button class="mat-tab-header-pagination mat-tab-header-pagination-after mat-elevation-z4"
     #nextPaginator
     aria-hidden="true"
     type="button"
     mat-ripple
     [matRippleDisabled]="_disableScrollAfter || disableRipple"
     [class.mat-tab-header-pagination-disabled]="_disableScrollAfter"
     [disabled]="_disableScrollAfter || null"
     tabindex="-1"
     (mousedown)="_handlePaginatorPress('after', $event)"
     (click)="_handlePaginatorClick('after')"
     (touchend)="_stopInterval()">
  <div class="mat-tab-header-pagination-chevron"></div>
</button>
`,
      styles: [".mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mat-tab-header-pagination{-webkit-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:transparent;touch-action:none;box-sizing:content-box;background:none;border:none;outline:0;padding:0}.mat-tab-header-pagination::-moz-focus-inner{border:0}.mat-tab-header-pagination-controls-enabled .mat-tab-header-pagination{display:flex}.mat-tab-header-pagination-before,.mat-tab-header-rtl .mat-tab-header-pagination-after{padding-left:4px}.mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-rtl .mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-tab-header-rtl .mat-tab-header-pagination-before,.mat-tab-header-pagination-after{padding-right:4px}.mat-tab-header-rtl .mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;height:8px;width:8px}.mat-tab-header-pagination-disabled{box-shadow:none;cursor:default}.mat-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-tab-links{display:flex}[mat-align-tabs=center]>.mat-tab-link-container .mat-tab-links{justify-content:center}[mat-align-tabs=end]>.mat-tab-link-container .mat-tab-links{justify-content:flex-end}.mat-ink-bar{position:absolute;bottom:0;height:2px;transition:500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable.mat-ink-bar{transition:none;animation:none}.mat-tab-group-inverted-header .mat-ink-bar{bottom:auto;top:0}.cdk-high-contrast-active .mat-ink-bar{outline:solid 2px;height:0}.mat-tab-link-container{display:flex;flex-grow:1;overflow:hidden;z-index:1}.mat-tab-link{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;vertical-align:top;text-decoration:none;position:relative;overflow:hidden;-webkit-tap-highlight-color:transparent}.mat-tab-link:focus{outline:none}.mat-tab-link:focus:not(.mat-tab-disabled){opacity:1}.cdk-high-contrast-active .mat-tab-link:focus{outline:dotted 2px;outline-offset:-2px}.mat-tab-link.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-link.mat-tab-disabled{opacity:.5}.mat-tab-link .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-link{opacity:1}[mat-stretch-tabs] .mat-tab-link{flex-basis:0;flex-grow:1}.mat-tab-link.mat-tab-disabled{pointer-events:none}@media(max-width: 599px){.mat-tab-link{min-width:72px}}\n"]
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: Directionality,
      decorators: [{
        type: Optional
      }]
    }, {
      type: NgZone
    }, {
      type: ChangeDetectorRef
    }, {
      type: ViewportRuler
    }, {
      type: Platform
    }, {
      type: void 0,
      decorators: [{
        type: Optional
      }, {
        type: Inject,
        args: [ANIMATION_MODULE_TYPE]
      }]
    }];
  }, {
    _items: [{
      type: ContentChildren,
      args: [forwardRef(() => MatTabLink), {
        descendants: true
      }]
    }],
    _inkBar: [{
      type: ViewChild,
      args: [MatInkBar, {
        static: true
      }]
    }],
    _tabListContainer: [{
      type: ViewChild,
      args: ["tabListContainer", {
        static: true
      }]
    }],
    _tabList: [{
      type: ViewChild,
      args: ["tabList", {
        static: true
      }]
    }],
    _tabListInner: [{
      type: ViewChild,
      args: ["tabListInner", {
        static: true
      }]
    }],
    _nextPaginator: [{
      type: ViewChild,
      args: ["nextPaginator"]
    }],
    _previousPaginator: [{
      type: ViewChild,
      args: ["previousPaginator"]
    }]
  });
})();
var _MatTabLinkMixinBase = mixinTabIndex(mixinDisableRipple(mixinDisabled(class {
})));
var _MatTabLinkBase = class extends _MatTabLinkMixinBase {
  constructor(_tabNavBar, elementRef, globalRippleOptions, tabIndex, _focusMonitor, animationMode) {
    super();
    this._tabNavBar = _tabNavBar;
    this.elementRef = elementRef;
    this._focusMonitor = _focusMonitor;
    this._isActive = false;
    this.id = `mat-tab-link-${nextUniqueId++}`;
    this.rippleConfig = globalRippleOptions || {};
    this.tabIndex = parseInt(tabIndex) || 0;
    if (animationMode === "NoopAnimations") {
      this.rippleConfig.animation = {
        enterDuration: 0,
        exitDuration: 0
      };
    }
  }
  /** Whether the link is active. */
  get active() {
    return this._isActive;
  }
  set active(value) {
    const newValue = coerceBooleanProperty(value);
    if (newValue !== this._isActive) {
      this._isActive = newValue;
      this._tabNavBar.updateActiveLink();
    }
  }
  /**
   * Whether ripples are disabled on interaction.
   * @docs-private
   */
  get rippleDisabled() {
    return this.disabled || this.disableRipple || this._tabNavBar.disableRipple || !!this.rippleConfig.disabled;
  }
  /** Focuses the tab link. */
  focus() {
    this.elementRef.nativeElement.focus();
  }
  ngAfterViewInit() {
    this._focusMonitor.monitor(this.elementRef);
  }
  ngOnDestroy() {
    this._focusMonitor.stopMonitoring(this.elementRef);
  }
  _handleFocus() {
    this._tabNavBar.focusIndex = this._tabNavBar._items.toArray().indexOf(this);
  }
  _handleKeydown(event) {
    if (this._tabNavBar.tabPanel && event.keyCode === SPACE) {
      this.elementRef.nativeElement.click();
    }
  }
  _getAriaControls() {
    return this._tabNavBar.tabPanel ? this._tabNavBar.tabPanel?.id : this.elementRef.nativeElement.getAttribute("aria-controls");
  }
  _getAriaSelected() {
    if (this._tabNavBar.tabPanel) {
      return this.active ? "true" : "false";
    } else {
      return this.elementRef.nativeElement.getAttribute("aria-selected");
    }
  }
  _getAriaCurrent() {
    return this.active && !this._tabNavBar.tabPanel ? "page" : null;
  }
  _getRole() {
    return this._tabNavBar.tabPanel ? "tab" : this.elementRef.nativeElement.getAttribute("role");
  }
  _getTabIndex() {
    if (this._tabNavBar.tabPanel) {
      return this._isActive ? 0 : -1;
    } else {
      return this.tabIndex;
    }
  }
};
_MatTabLinkBase.ɵfac = function _MatTabLinkBase_Factory(ɵt) {
  return new (ɵt || _MatTabLinkBase)(ɵɵdirectiveInject(_MatTabNavBase), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(MAT_RIPPLE_GLOBAL_OPTIONS, 8), ɵɵinjectAttribute("tabindex"), ɵɵdirectiveInject(FocusMonitor), ɵɵdirectiveInject(ANIMATION_MODULE_TYPE, 8));
};
_MatTabLinkBase.ɵdir = ɵɵdefineDirective({
  type: _MatTabLinkBase,
  inputs: {
    active: "active",
    id: "id"
  },
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(_MatTabLinkBase, [{
    type: Directive
  }], function() {
    return [{
      type: _MatTabNavBase
    }, {
      type: ElementRef
    }, {
      type: void 0,
      decorators: [{
        type: Optional
      }, {
        type: Inject,
        args: [MAT_RIPPLE_GLOBAL_OPTIONS]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Attribute,
        args: ["tabindex"]
      }]
    }, {
      type: FocusMonitor
    }, {
      type: void 0,
      decorators: [{
        type: Optional
      }, {
        type: Inject,
        args: [ANIMATION_MODULE_TYPE]
      }]
    }];
  }, {
    active: [{
      type: Input
    }],
    id: [{
      type: Input
    }]
  });
})();
var MatTabLink = class extends _MatTabLinkBase {
  constructor(tabNavBar, elementRef, ngZone, platform, globalRippleOptions, tabIndex, focusMonitor, animationMode) {
    super(tabNavBar, elementRef, globalRippleOptions, tabIndex, focusMonitor, animationMode);
    this._tabLinkRipple = new RippleRenderer(this, ngZone, elementRef, platform);
    this._tabLinkRipple.setupTriggerEvents(elementRef.nativeElement);
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    this._tabLinkRipple._removeTriggerEvents();
  }
};
MatTabLink.ɵfac = function MatTabLink_Factory(ɵt) {
  return new (ɵt || MatTabLink)(ɵɵdirectiveInject(MatTabNav), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Platform), ɵɵdirectiveInject(MAT_RIPPLE_GLOBAL_OPTIONS, 8), ɵɵinjectAttribute("tabindex"), ɵɵdirectiveInject(FocusMonitor), ɵɵdirectiveInject(ANIMATION_MODULE_TYPE, 8));
};
MatTabLink.ɵdir = ɵɵdefineDirective({
  type: MatTabLink,
  selectors: [["", "mat-tab-link", ""], ["", "matTabLink", ""]],
  hostAttrs: [1, "mat-tab-link", "mat-focus-indicator"],
  hostVars: 11,
  hostBindings: function MatTabLink_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("focus", function MatTabLink_focus_HostBindingHandler() {
        return ctx._handleFocus();
      })("keydown", function MatTabLink_keydown_HostBindingHandler($event) {
        return ctx._handleKeydown($event);
      });
    }
    if (rf & 2) {
      ɵɵattribute("aria-controls", ctx._getAriaControls())("aria-current", ctx._getAriaCurrent())("aria-disabled", ctx.disabled)("aria-selected", ctx._getAriaSelected())("id", ctx.id)("tabIndex", ctx._getTabIndex())("role", ctx._getRole());
      ɵɵclassProp("mat-tab-disabled", ctx.disabled)("mat-tab-label-active", ctx.active);
    }
  },
  inputs: {
    disabled: "disabled",
    disableRipple: "disableRipple",
    tabIndex: "tabIndex"
  },
  exportAs: ["matTabLink"],
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTabLink, [{
    type: Directive,
    args: [{
      selector: "[mat-tab-link], [matTabLink]",
      exportAs: "matTabLink",
      inputs: ["disabled", "disableRipple", "tabIndex"],
      host: {
        "class": "mat-tab-link mat-focus-indicator",
        "[attr.aria-controls]": "_getAriaControls()",
        "[attr.aria-current]": "_getAriaCurrent()",
        "[attr.aria-disabled]": "disabled",
        "[attr.aria-selected]": "_getAriaSelected()",
        "[attr.id]": "id",
        "[attr.tabIndex]": "_getTabIndex()",
        "[attr.role]": "_getRole()",
        "[class.mat-tab-disabled]": "disabled",
        "[class.mat-tab-label-active]": "active",
        "(focus)": "_handleFocus()",
        "(keydown)": "_handleKeydown($event)"
      }
    }]
  }], function() {
    return [{
      type: MatTabNav
    }, {
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
      type: void 0,
      decorators: [{
        type: Attribute,
        args: ["tabindex"]
      }]
    }, {
      type: FocusMonitor
    }, {
      type: void 0,
      decorators: [{
        type: Optional
      }, {
        type: Inject,
        args: [ANIMATION_MODULE_TYPE]
      }]
    }];
  }, null);
})();
var MatTabNavPanel = class {
  constructor() {
    this.id = `mat-tab-nav-panel-${nextUniqueId++}`;
  }
};
MatTabNavPanel.ɵfac = function MatTabNavPanel_Factory(ɵt) {
  return new (ɵt || MatTabNavPanel)();
};
MatTabNavPanel.ɵcmp = ɵɵdefineComponent({
  type: MatTabNavPanel,
  selectors: [["mat-tab-nav-panel"]],
  hostAttrs: ["role", "tabpanel", 1, "mat-tab-nav-panel"],
  hostVars: 2,
  hostBindings: function MatTabNavPanel_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("aria-labelledby", ctx._activeTabId)("id", ctx.id);
    }
  },
  inputs: {
    id: "id"
  },
  exportAs: ["matTabNavPanel"],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function MatTabNavPanel_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTabNavPanel, [{
    type: Component,
    args: [{
      selector: "mat-tab-nav-panel",
      exportAs: "matTabNavPanel",
      template: "<ng-content></ng-content>",
      host: {
        "[attr.aria-labelledby]": "_activeTabId",
        "[attr.id]": "id",
        "class": "mat-tab-nav-panel",
        "role": "tabpanel"
      },
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, {
    id: [{
      type: Input
    }]
  });
})();
var MatTabsModule = class {
};
MatTabsModule.ɵfac = function MatTabsModule_Factory(ɵt) {
  return new (ɵt || MatTabsModule)();
};
MatTabsModule.ɵmod = ɵɵdefineNgModule({
  type: MatTabsModule,
  declarations: [MatTabGroup, MatTabLabel, MatTab, MatInkBar, MatTabLabelWrapper, MatTabNav, MatTabNavPanel, MatTabLink, MatTabBody, MatTabBodyPortal, MatTabHeader, MatTabContent],
  imports: [CommonModule, MatCommonModule, PortalModule, MatRippleModule, ObserversModule, A11yModule],
  exports: [MatCommonModule, MatTabGroup, MatTabLabel, MatTab, MatTabNav, MatTabNavPanel, MatTabLink, MatTabContent]
});
MatTabsModule.ɵinj = ɵɵdefineInjector({
  imports: [[CommonModule, MatCommonModule, PortalModule, MatRippleModule, ObserversModule, A11yModule], MatCommonModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTabsModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, MatCommonModule, PortalModule, MatRippleModule, ObserversModule, A11yModule],
      // Don't export all components because some are only to be used internally.
      exports: [MatCommonModule, MatTabGroup, MatTabLabel, MatTab, MatTabNav, MatTabNavPanel, MatTabLink, MatTabContent],
      declarations: [MatTabGroup, MatTabLabel, MatTab, MatInkBar, MatTabLabelWrapper, MatTabNav, MatTabNavPanel, MatTabLink, MatTabBody, MatTabBodyPortal, MatTabHeader, MatTabContent]
    }]
  }], null, null);
})();

export {
  _MAT_INK_BAR_POSITIONER,
  MatInkBar,
  MatTabContent,
  MAT_TAB,
  MatTabLabel,
  MAT_TAB_GROUP,
  MatTab,
  matTabsAnimations,
  MatTabBodyPortal,
  _MatTabBodyBase,
  MatTabBody,
  MAT_TABS_CONFIG,
  MatTabLabelWrapper,
  _MatTabHeaderBase,
  MatTabHeader,
  MatTabChangeEvent,
  _MatTabGroupBase,
  MatTabGroup,
  _MatTabNavBase,
  MatTabNav,
  _MatTabLinkBase,
  MatTabLink,
  MatTabNavPanel,
  MatTabsModule
};
/*! Bundled license information:

@angular/material/fesm2020/tabs.mjs:
  (**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   *)
*/
//# sourceMappingURL=chunk-ZKSVFISD.js.map
