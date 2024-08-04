import {
  BreakpointObserver,
  Breakpoints
} from "./chunk-ECGZNS2P.js";
import {
  MatButton,
  MatButtonModule
} from "./chunk-G5CXV5FD.js";
import {
  Overlay,
  OverlayConfig,
  OverlayModule
} from "./chunk-TO3XXBCZ.js";
import {
  BasePortalOutlet,
  CdkPortalOutlet,
  ComponentPortal,
  PortalModule,
  TemplatePortal
} from "./chunk-VEHDF5JB.js";
import {
  MatCommonModule
} from "./chunk-Z5NEDFRQ.js";
import {
  animate,
  state,
  style,
  transition,
  trigger
} from "./chunk-JJ4ENG2O.js";
import {
  LiveAnnouncer
} from "./chunk-HNNK3L2Q.js";
import {
  Platform
} from "./chunk-CPTXJDSR.js";
import {
  CommonModule,
  NgIf
} from "./chunk-SJMBSDCY.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  NgModule,
  NgZone,
  Optional,
  SkipSelf,
  TemplateRef,
  ViewChild,
  ViewEncapsulation$1,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsyntheticHostListener,
  ɵɵsyntheticHostProperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuery
} from "./chunk-GMUXDIJ2.js";
import {
  Subject,
  take,
  takeUntil
} from "./chunk-ODTHBFDQ.js";
import {
  __spreadValues
} from "./chunk-3OV72XIM.js";

// node_modules/@angular/material/fesm2020/snack-bar.mjs
function SimpleSnackBar_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 2)(1, "button", 3);
    ɵɵlistener("click", function SimpleSnackBar_div_2_Template_button_click_1_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.action());
    });
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r1.data.action);
  }
}
function MatSnackBarContainer_ng_template_1_Template(rf, ctx) {
}
var MAT_SNACK_BAR_DATA = new InjectionToken("MatSnackBarData");
var MatSnackBarConfig = class {
  constructor() {
    this.politeness = "assertive";
    this.announcementMessage = "";
    this.duration = 0;
    this.data = null;
    this.horizontalPosition = "center";
    this.verticalPosition = "bottom";
  }
};
var MAX_TIMEOUT = Math.pow(2, 31) - 1;
var MatSnackBarRef = class {
  constructor(containerInstance, _overlayRef) {
    this._overlayRef = _overlayRef;
    this._afterDismissed = new Subject();
    this._afterOpened = new Subject();
    this._onAction = new Subject();
    this._dismissedByAction = false;
    this.containerInstance = containerInstance;
    containerInstance._onExit.subscribe(() => this._finishDismiss());
  }
  /** Dismisses the snack bar. */
  dismiss() {
    if (!this._afterDismissed.closed) {
      this.containerInstance.exit();
    }
    clearTimeout(this._durationTimeoutId);
  }
  /** Marks the snackbar action clicked. */
  dismissWithAction() {
    if (!this._onAction.closed) {
      this._dismissedByAction = true;
      this._onAction.next();
      this._onAction.complete();
      this.dismiss();
    }
    clearTimeout(this._durationTimeoutId);
  }
  /**
   * Marks the snackbar action clicked.
   * @deprecated Use `dismissWithAction` instead.
   * @breaking-change 8.0.0
   */
  closeWithAction() {
    this.dismissWithAction();
  }
  /** Dismisses the snack bar after some duration */
  _dismissAfter(duration) {
    this._durationTimeoutId = setTimeout(() => this.dismiss(), Math.min(duration, MAX_TIMEOUT));
  }
  /** Marks the snackbar as opened */
  _open() {
    if (!this._afterOpened.closed) {
      this._afterOpened.next();
      this._afterOpened.complete();
    }
  }
  /** Cleans up the DOM after closing. */
  _finishDismiss() {
    this._overlayRef.dispose();
    if (!this._onAction.closed) {
      this._onAction.complete();
    }
    this._afterDismissed.next({
      dismissedByAction: this._dismissedByAction
    });
    this._afterDismissed.complete();
    this._dismissedByAction = false;
  }
  /** Gets an observable that is notified when the snack bar is finished closing. */
  afterDismissed() {
    return this._afterDismissed;
  }
  /** Gets an observable that is notified when the snack bar has opened and appeared. */
  afterOpened() {
    return this.containerInstance._onEnter;
  }
  /** Gets an observable that is notified when the snack bar action is called. */
  onAction() {
    return this._onAction;
  }
};
var SimpleSnackBar = class {
  constructor(snackBarRef, data) {
    this.snackBarRef = snackBarRef;
    this.data = data;
  }
  /** Performs the action on the snack bar. */
  action() {
    this.snackBarRef.dismissWithAction();
  }
  /** If the action button should be shown. */
  get hasAction() {
    return !!this.data.action;
  }
};
SimpleSnackBar.ɵfac = function SimpleSnackBar_Factory(ɵt) {
  return new (ɵt || SimpleSnackBar)(ɵɵdirectiveInject(MatSnackBarRef), ɵɵdirectiveInject(MAT_SNACK_BAR_DATA));
};
SimpleSnackBar.ɵcmp = ɵɵdefineComponent({
  type: SimpleSnackBar,
  selectors: [["simple-snack-bar"]],
  hostAttrs: [1, "mat-simple-snackbar"],
  decls: 3,
  vars: 2,
  consts: [[1, "mat-simple-snack-bar-content"], ["class", "mat-simple-snackbar-action", 4, "ngIf"], [1, "mat-simple-snackbar-action"], ["mat-button", "", 3, "click"]],
  template: function SimpleSnackBar_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "span", 0);
      ɵɵtext(1);
      ɵɵelementEnd();
      ɵɵtemplate(2, SimpleSnackBar_div_2_Template, 3, 1, "div", 1);
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵtextInterpolate(ctx.data.message);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.hasAction);
    }
  },
  dependencies: [MatButton, NgIf],
  styles: [".mat-simple-snackbar{display:flex;justify-content:space-between;align-items:center;line-height:20px;opacity:1}.mat-simple-snackbar-action{flex-shrink:0;margin:-8px -8px -8px 8px}.mat-simple-snackbar-action button{max-height:36px;min-width:0}[dir=rtl] .mat-simple-snackbar-action{margin-left:-8px;margin-right:8px}.mat-simple-snack-bar-content{overflow:hidden;text-overflow:ellipsis}\n"],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SimpleSnackBar, [{
    type: Component,
    args: [{
      selector: "simple-snack-bar",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "class": "mat-simple-snackbar"
      },
      template: '<span class="mat-simple-snack-bar-content">{{data.message}}</span>\n<div class="mat-simple-snackbar-action"  *ngIf="hasAction">\n  <button mat-button (click)="action()">{{data.action}}</button>\n</div>\n',
      styles: [".mat-simple-snackbar{display:flex;justify-content:space-between;align-items:center;line-height:20px;opacity:1}.mat-simple-snackbar-action{flex-shrink:0;margin:-8px -8px -8px 8px}.mat-simple-snackbar-action button{max-height:36px;min-width:0}[dir=rtl] .mat-simple-snackbar-action{margin-left:-8px;margin-right:8px}.mat-simple-snack-bar-content{overflow:hidden;text-overflow:ellipsis}\n"]
    }]
  }], function() {
    return [{
      type: MatSnackBarRef
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [MAT_SNACK_BAR_DATA]
      }]
    }];
  }, null);
})();
var matSnackBarAnimations = {
  /** Animation that shows and hides a snack bar. */
  snackBarState: trigger("state", [state("void, hidden", style({
    transform: "scale(0.8)",
    opacity: 0
  })), state("visible", style({
    transform: "scale(1)",
    opacity: 1
  })), transition("* => visible", animate("150ms cubic-bezier(0, 0, 0.2, 1)")), transition("* => void, * => hidden", animate("75ms cubic-bezier(0.4, 0.0, 1, 1)", style({
    opacity: 0
  })))])
};
var MatSnackBarContainer = class extends BasePortalOutlet {
  constructor(_ngZone, _elementRef, _changeDetectorRef, _platform, snackBarConfig) {
    super();
    this._ngZone = _ngZone;
    this._elementRef = _elementRef;
    this._changeDetectorRef = _changeDetectorRef;
    this._platform = _platform;
    this.snackBarConfig = snackBarConfig;
    this._announceDelay = 150;
    this._destroyed = false;
    this._onAnnounce = new Subject();
    this._onExit = new Subject();
    this._onEnter = new Subject();
    this._animationState = "void";
    this.attachDomPortal = (portal) => {
      this._assertNotAttached();
      this._applySnackBarClasses();
      return this._portalOutlet.attachDomPortal(portal);
    };
    if (snackBarConfig.politeness === "assertive" && !snackBarConfig.announcementMessage) {
      this._live = "assertive";
    } else if (snackBarConfig.politeness === "off") {
      this._live = "off";
    } else {
      this._live = "polite";
    }
    if (this._platform.FIREFOX) {
      if (this._live === "polite") {
        this._role = "status";
      }
      if (this._live === "assertive") {
        this._role = "alert";
      }
    }
  }
  /** Attach a component portal as content to this snack bar container. */
  attachComponentPortal(portal) {
    this._assertNotAttached();
    this._applySnackBarClasses();
    return this._portalOutlet.attachComponentPortal(portal);
  }
  /** Attach a template portal as content to this snack bar container. */
  attachTemplatePortal(portal) {
    this._assertNotAttached();
    this._applySnackBarClasses();
    return this._portalOutlet.attachTemplatePortal(portal);
  }
  /** Handle end of animations, updating the state of the snackbar. */
  onAnimationEnd(event) {
    const {
      fromState,
      toState
    } = event;
    if (toState === "void" && fromState !== "void" || toState === "hidden") {
      this._completeExit();
    }
    if (toState === "visible") {
      const onEnter = this._onEnter;
      this._ngZone.run(() => {
        onEnter.next();
        onEnter.complete();
      });
    }
  }
  /** Begin animation of snack bar entrance into view. */
  enter() {
    if (!this._destroyed) {
      this._animationState = "visible";
      this._changeDetectorRef.detectChanges();
      this._screenReaderAnnounce();
    }
  }
  /** Begin animation of the snack bar exiting from view. */
  exit() {
    this._ngZone.run(() => {
      this._animationState = "hidden";
      this._elementRef.nativeElement.setAttribute("mat-exit", "");
      clearTimeout(this._announceTimeoutId);
    });
    return this._onExit;
  }
  /** Makes sure the exit callbacks have been invoked when the element is destroyed. */
  ngOnDestroy() {
    this._destroyed = true;
    this._completeExit();
  }
  /**
   * Waits for the zone to settle before removing the element. Helps prevent
   * errors where we end up removing an element which is in the middle of an animation.
   */
  _completeExit() {
    this._ngZone.onMicrotaskEmpty.pipe(take(1)).subscribe(() => {
      this._ngZone.run(() => {
        this._onExit.next();
        this._onExit.complete();
      });
    });
  }
  /** Applies the various positioning and user-configured CSS classes to the snack bar. */
  _applySnackBarClasses() {
    const element = this._elementRef.nativeElement;
    const panelClasses = this.snackBarConfig.panelClass;
    if (panelClasses) {
      if (Array.isArray(panelClasses)) {
        panelClasses.forEach((cssClass) => element.classList.add(cssClass));
      } else {
        element.classList.add(panelClasses);
      }
    }
    if (this.snackBarConfig.horizontalPosition === "center") {
      element.classList.add("mat-snack-bar-center");
    }
    if (this.snackBarConfig.verticalPosition === "top") {
      element.classList.add("mat-snack-bar-top");
    }
  }
  /** Asserts that no content is already attached to the container. */
  _assertNotAttached() {
    if (this._portalOutlet.hasAttached() && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error("Attempting to attach snack bar content after content is already attached");
    }
  }
  /**
   * Starts a timeout to move the snack bar content to the live region so screen readers will
   * announce it.
   */
  _screenReaderAnnounce() {
    if (!this._announceTimeoutId) {
      this._ngZone.runOutsideAngular(() => {
        this._announceTimeoutId = setTimeout(() => {
          const inertElement = this._elementRef.nativeElement.querySelector("[aria-hidden]");
          const liveElement = this._elementRef.nativeElement.querySelector("[aria-live]");
          if (inertElement && liveElement) {
            let focusedElement = null;
            if (this._platform.isBrowser && document.activeElement instanceof HTMLElement && inertElement.contains(document.activeElement)) {
              focusedElement = document.activeElement;
            }
            inertElement.removeAttribute("aria-hidden");
            liveElement.appendChild(inertElement);
            focusedElement?.focus();
            this._onAnnounce.next();
            this._onAnnounce.complete();
          }
        }, this._announceDelay);
      });
    }
  }
};
MatSnackBarContainer.ɵfac = function MatSnackBarContainer_Factory(ɵt) {
  return new (ɵt || MatSnackBarContainer)(ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Platform), ɵɵdirectiveInject(MatSnackBarConfig));
};
MatSnackBarContainer.ɵcmp = ɵɵdefineComponent({
  type: MatSnackBarContainer,
  selectors: [["snack-bar-container"]],
  viewQuery: function MatSnackBarContainer_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(CdkPortalOutlet, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._portalOutlet = _t.first);
    }
  },
  hostAttrs: [1, "mat-snack-bar-container"],
  hostVars: 1,
  hostBindings: function MatSnackBarContainer_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵsyntheticHostListener("@state.done", function MatSnackBarContainer_animation_state_done_HostBindingHandler($event) {
        return ctx.onAnimationEnd($event);
      });
    }
    if (rf & 2) {
      ɵɵsyntheticHostProperty("@state", ctx._animationState);
    }
  },
  features: [ɵɵInheritDefinitionFeature],
  decls: 3,
  vars: 2,
  consts: [["aria-hidden", "true"], ["cdkPortalOutlet", ""]],
  template: function MatSnackBarContainer_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0);
      ɵɵtemplate(1, MatSnackBarContainer_ng_template_1_Template, 0, 0, "ng-template", 1);
      ɵɵelementEnd();
      ɵɵelement(2, "div");
    }
    if (rf & 2) {
      ɵɵadvance(2);
      ɵɵattribute("aria-live", ctx._live)("role", ctx._role);
    }
  },
  dependencies: [CdkPortalOutlet],
  styles: [".mat-snack-bar-container{border-radius:4px;box-sizing:border-box;display:block;margin:24px;max-width:33vw;min-width:344px;padding:14px 16px;min-height:48px;transform-origin:center}.cdk-high-contrast-active .mat-snack-bar-container{border:solid 1px}.mat-snack-bar-handset{width:100%}.mat-snack-bar-handset .mat-snack-bar-container{margin:8px;max-width:100%;min-width:0;width:100%}\n"],
  encapsulation: 2,
  data: {
    animation: [matSnackBarAnimations.snackBarState]
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSnackBarContainer, [{
    type: Component,
    args: [{
      selector: "snack-bar-container",
      changeDetection: ChangeDetectionStrategy.Default,
      encapsulation: ViewEncapsulation$1.None,
      animations: [matSnackBarAnimations.snackBarState],
      host: {
        "class": "mat-snack-bar-container",
        "[@state]": "_animationState",
        "(@state.done)": "onAnimationEnd($event)"
      },
      template: '<!-- Initially holds the snack bar content, will be empty after announcing to screen readers. -->\n<div aria-hidden="true">\n  <ng-template cdkPortalOutlet></ng-template>\n</div>\n\n<!-- Will receive the snack bar content from the non-live div, move will happen a short delay after opening -->\n<div [attr.aria-live]="_live" [attr.role]="_role"></div>\n',
      styles: [".mat-snack-bar-container{border-radius:4px;box-sizing:border-box;display:block;margin:24px;max-width:33vw;min-width:344px;padding:14px 16px;min-height:48px;transform-origin:center}.cdk-high-contrast-active .mat-snack-bar-container{border:solid 1px}.mat-snack-bar-handset{width:100%}.mat-snack-bar-handset .mat-snack-bar-container{margin:8px;max-width:100%;min-width:0;width:100%}\n"]
    }]
  }], function() {
    return [{
      type: NgZone
    }, {
      type: ElementRef
    }, {
      type: ChangeDetectorRef
    }, {
      type: Platform
    }, {
      type: MatSnackBarConfig
    }];
  }, {
    _portalOutlet: [{
      type: ViewChild,
      args: [CdkPortalOutlet, {
        static: true
      }]
    }]
  });
})();
var MatSnackBarModule = class {
};
MatSnackBarModule.ɵfac = function MatSnackBarModule_Factory(ɵt) {
  return new (ɵt || MatSnackBarModule)();
};
MatSnackBarModule.ɵmod = ɵɵdefineNgModule({
  type: MatSnackBarModule,
  declarations: [MatSnackBarContainer, SimpleSnackBar],
  imports: [OverlayModule, PortalModule, CommonModule, MatButtonModule, MatCommonModule],
  exports: [MatSnackBarContainer, MatCommonModule]
});
MatSnackBarModule.ɵinj = ɵɵdefineInjector({
  imports: [[OverlayModule, PortalModule, CommonModule, MatButtonModule, MatCommonModule], MatCommonModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSnackBarModule, [{
    type: NgModule,
    args: [{
      imports: [OverlayModule, PortalModule, CommonModule, MatButtonModule, MatCommonModule],
      exports: [MatSnackBarContainer, MatCommonModule],
      declarations: [MatSnackBarContainer, SimpleSnackBar]
    }]
  }], null, null);
})();
var MAT_SNACK_BAR_DEFAULT_OPTIONS = new InjectionToken("mat-snack-bar-default-options", {
  providedIn: "root",
  factory: MAT_SNACK_BAR_DEFAULT_OPTIONS_FACTORY
});
function MAT_SNACK_BAR_DEFAULT_OPTIONS_FACTORY() {
  return new MatSnackBarConfig();
}
var _MatSnackBarBase = class {
  constructor(_overlay, _live, _injector, _breakpointObserver, _parentSnackBar, _defaultConfig) {
    this._overlay = _overlay;
    this._live = _live;
    this._injector = _injector;
    this._breakpointObserver = _breakpointObserver;
    this._parentSnackBar = _parentSnackBar;
    this._defaultConfig = _defaultConfig;
    this._snackBarRefAtThisLevel = null;
  }
  /** Reference to the currently opened snackbar at *any* level. */
  get _openedSnackBarRef() {
    const parent = this._parentSnackBar;
    return parent ? parent._openedSnackBarRef : this._snackBarRefAtThisLevel;
  }
  set _openedSnackBarRef(value) {
    if (this._parentSnackBar) {
      this._parentSnackBar._openedSnackBarRef = value;
    } else {
      this._snackBarRefAtThisLevel = value;
    }
  }
  /**
   * Creates and dispatches a snack bar with a custom component for the content, removing any
   * currently opened snack bars.
   *
   * @param component Component to be instantiated.
   * @param config Extra configuration for the snack bar.
   */
  openFromComponent(component, config) {
    return this._attach(component, config);
  }
  /**
   * Creates and dispatches a snack bar with a custom template for the content, removing any
   * currently opened snack bars.
   *
   * @param template Template to be instantiated.
   * @param config Extra configuration for the snack bar.
   */
  openFromTemplate(template, config) {
    return this._attach(template, config);
  }
  /**
   * Opens a snackbar with a message and an optional action.
   * @param message The message to show in the snackbar.
   * @param action The label for the snackbar action.
   * @param config Additional configuration options for the snackbar.
   */
  open(message, action = "", config) {
    const _config = __spreadValues(__spreadValues({}, this._defaultConfig), config);
    _config.data = {
      message,
      action
    };
    if (_config.announcementMessage === message) {
      _config.announcementMessage = void 0;
    }
    return this.openFromComponent(this.simpleSnackBarComponent, _config);
  }
  /**
   * Dismisses the currently-visible snack bar.
   */
  dismiss() {
    if (this._openedSnackBarRef) {
      this._openedSnackBarRef.dismiss();
    }
  }
  ngOnDestroy() {
    if (this._snackBarRefAtThisLevel) {
      this._snackBarRefAtThisLevel.dismiss();
    }
  }
  /**
   * Attaches the snack bar container component to the overlay.
   */
  _attachSnackBarContainer(overlayRef, config) {
    const userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
    const injector = Injector.create({
      parent: userInjector || this._injector,
      providers: [{
        provide: MatSnackBarConfig,
        useValue: config
      }]
    });
    const containerPortal = new ComponentPortal(this.snackBarContainerComponent, config.viewContainerRef, injector);
    const containerRef = overlayRef.attach(containerPortal);
    containerRef.instance.snackBarConfig = config;
    return containerRef.instance;
  }
  /**
   * Places a new component or a template as the content of the snack bar container.
   */
  _attach(content, userConfig) {
    const config = __spreadValues(__spreadValues(__spreadValues({}, new MatSnackBarConfig()), this._defaultConfig), userConfig);
    const overlayRef = this._createOverlay(config);
    const container = this._attachSnackBarContainer(overlayRef, config);
    const snackBarRef = new MatSnackBarRef(container, overlayRef);
    if (content instanceof TemplateRef) {
      const portal = new TemplatePortal(content, null, {
        $implicit: config.data,
        snackBarRef
      });
      snackBarRef.instance = container.attachTemplatePortal(portal);
    } else {
      const injector = this._createInjector(config, snackBarRef);
      const portal = new ComponentPortal(content, void 0, injector);
      const contentRef = container.attachComponentPortal(portal);
      snackBarRef.instance = contentRef.instance;
    }
    this._breakpointObserver.observe(Breakpoints.HandsetPortrait).pipe(takeUntil(overlayRef.detachments())).subscribe((state2) => {
      overlayRef.overlayElement.classList.toggle(this.handsetCssClass, state2.matches);
    });
    if (config.announcementMessage) {
      container._onAnnounce.subscribe(() => {
        this._live.announce(config.announcementMessage, config.politeness);
      });
    }
    this._animateSnackBar(snackBarRef, config);
    this._openedSnackBarRef = snackBarRef;
    return this._openedSnackBarRef;
  }
  /** Animates the old snack bar out and the new one in. */
  _animateSnackBar(snackBarRef, config) {
    snackBarRef.afterDismissed().subscribe(() => {
      if (this._openedSnackBarRef == snackBarRef) {
        this._openedSnackBarRef = null;
      }
      if (config.announcementMessage) {
        this._live.clear();
      }
    });
    if (this._openedSnackBarRef) {
      this._openedSnackBarRef.afterDismissed().subscribe(() => {
        snackBarRef.containerInstance.enter();
      });
      this._openedSnackBarRef.dismiss();
    } else {
      snackBarRef.containerInstance.enter();
    }
    if (config.duration && config.duration > 0) {
      snackBarRef.afterOpened().subscribe(() => snackBarRef._dismissAfter(config.duration));
    }
  }
  /**
   * Creates a new overlay and places it in the correct location.
   * @param config The user-specified snack bar config.
   */
  _createOverlay(config) {
    const overlayConfig = new OverlayConfig();
    overlayConfig.direction = config.direction;
    let positionStrategy = this._overlay.position().global();
    const isRtl = config.direction === "rtl";
    const isLeft = config.horizontalPosition === "left" || config.horizontalPosition === "start" && !isRtl || config.horizontalPosition === "end" && isRtl;
    const isRight = !isLeft && config.horizontalPosition !== "center";
    if (isLeft) {
      positionStrategy.left("0");
    } else if (isRight) {
      positionStrategy.right("0");
    } else {
      positionStrategy.centerHorizontally();
    }
    if (config.verticalPosition === "top") {
      positionStrategy.top("0");
    } else {
      positionStrategy.bottom("0");
    }
    overlayConfig.positionStrategy = positionStrategy;
    return this._overlay.create(overlayConfig);
  }
  /**
   * Creates an injector to be used inside of a snack bar component.
   * @param config Config that was used to create the snack bar.
   * @param snackBarRef Reference to the snack bar.
   */
  _createInjector(config, snackBarRef) {
    const userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
    return Injector.create({
      parent: userInjector || this._injector,
      providers: [{
        provide: MatSnackBarRef,
        useValue: snackBarRef
      }, {
        provide: MAT_SNACK_BAR_DATA,
        useValue: config.data
      }]
    });
  }
};
_MatSnackBarBase.ɵfac = function _MatSnackBarBase_Factory(ɵt) {
  return new (ɵt || _MatSnackBarBase)(ɵɵinject(Overlay), ɵɵinject(LiveAnnouncer), ɵɵinject(Injector), ɵɵinject(BreakpointObserver), ɵɵinject(_MatSnackBarBase, 12), ɵɵinject(MAT_SNACK_BAR_DEFAULT_OPTIONS));
};
_MatSnackBarBase.ɵprov = ɵɵdefineInjectable({
  token: _MatSnackBarBase,
  factory: _MatSnackBarBase.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(_MatSnackBarBase, [{
    type: Injectable
  }], function() {
    return [{
      type: Overlay
    }, {
      type: LiveAnnouncer
    }, {
      type: Injector
    }, {
      type: BreakpointObserver
    }, {
      type: _MatSnackBarBase,
      decorators: [{
        type: Optional
      }, {
        type: SkipSelf
      }]
    }, {
      type: MatSnackBarConfig,
      decorators: [{
        type: Inject,
        args: [MAT_SNACK_BAR_DEFAULT_OPTIONS]
      }]
    }];
  }, null);
})();
var MatSnackBar = class extends _MatSnackBarBase {
  constructor(overlay, live, injector, breakpointObserver, parentSnackBar, defaultConfig) {
    super(overlay, live, injector, breakpointObserver, parentSnackBar, defaultConfig);
    this.simpleSnackBarComponent = SimpleSnackBar;
    this.snackBarContainerComponent = MatSnackBarContainer;
    this.handsetCssClass = "mat-snack-bar-handset";
  }
};
MatSnackBar.ɵfac = function MatSnackBar_Factory(ɵt) {
  return new (ɵt || MatSnackBar)(ɵɵinject(Overlay), ɵɵinject(LiveAnnouncer), ɵɵinject(Injector), ɵɵinject(BreakpointObserver), ɵɵinject(MatSnackBar, 12), ɵɵinject(MAT_SNACK_BAR_DEFAULT_OPTIONS));
};
MatSnackBar.ɵprov = ɵɵdefineInjectable({
  token: MatSnackBar,
  factory: MatSnackBar.ɵfac,
  providedIn: MatSnackBarModule
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSnackBar, [{
    type: Injectable,
    args: [{
      providedIn: MatSnackBarModule
    }]
  }], function() {
    return [{
      type: Overlay
    }, {
      type: LiveAnnouncer
    }, {
      type: Injector
    }, {
      type: BreakpointObserver
    }, {
      type: MatSnackBar,
      decorators: [{
        type: Optional
      }, {
        type: SkipSelf
      }]
    }, {
      type: MatSnackBarConfig,
      decorators: [{
        type: Inject,
        args: [MAT_SNACK_BAR_DEFAULT_OPTIONS]
      }]
    }];
  }, null);
})();

export {
  MAT_SNACK_BAR_DATA,
  MatSnackBarConfig,
  MatSnackBarRef,
  SimpleSnackBar,
  matSnackBarAnimations,
  MatSnackBarContainer,
  MatSnackBarModule,
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
  MAT_SNACK_BAR_DEFAULT_OPTIONS_FACTORY,
  _MatSnackBarBase,
  MatSnackBar
};
/*! Bundled license information:

@angular/material/fesm2020/snack-bar.mjs:
  (**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   *)
*/
//# sourceMappingURL=chunk-BSZN5CIK.js.map
