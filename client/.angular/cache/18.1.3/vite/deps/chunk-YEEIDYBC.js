import {
  BreakpointObserver,
  Breakpoints
} from "./chunk-ECGZNS2P.js";
import {
  Overlay,
  OverlayModule
} from "./chunk-4K3AGWNP.js";
import {
  ComponentPortal
} from "./chunk-EKOM3EJZ.js";
import {
  CdkScrollableModule,
  ScrollDispatcher
} from "./chunk-VQZTIQC5.js";
import {
  MatCommonModule
} from "./chunk-SWJFBV3K.js";
import {
  animate,
  keyframes,
  state,
  style,
  transition,
  trigger
} from "./chunk-IEMAKXBJ.js";
import {
  A11yModule,
  AriaDescriber,
  FocusMonitor
} from "./chunk-JTKXKKJK.js";
import {
  ESCAPE,
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
  AsyncPipe,
  CommonModule,
  DOCUMENT,
  NgClass
} from "./chunk-SJMBSDCY.js";
import {
  ANIMATION_MODULE_TYPE,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Directive,
  ElementRef,
  Inject,
  InjectionToken,
  Input,
  NgModule,
  NgZone,
  Optional,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation$1,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinvalidFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
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

// node_modules/@angular/material/fesm2020/tooltip.mjs
var _c0 = ["tooltip"];
var SCROLL_THROTTLE_MS = 20;
var TOOLTIP_PANEL_CLASS = "mat-tooltip-panel";
var PANEL_CLASS = "tooltip-panel";
var passiveListenerOptions = normalizePassiveListenerOptions({
  passive: true
});
var LONGPRESS_DELAY = 500;
function getMatTooltipInvalidPositionError(position) {
  return Error(`Tooltip position "${position}" is invalid.`);
}
var MAT_TOOLTIP_SCROLL_STRATEGY = new InjectionToken("mat-tooltip-scroll-strategy");
function MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY(overlay) {
  return () => overlay.scrollStrategies.reposition({
    scrollThrottle: SCROLL_THROTTLE_MS
  });
}
var MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER = {
  provide: MAT_TOOLTIP_SCROLL_STRATEGY,
  deps: [Overlay],
  useFactory: MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY
};
var MAT_TOOLTIP_DEFAULT_OPTIONS = new InjectionToken("mat-tooltip-default-options", {
  providedIn: "root",
  factory: MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY
});
function MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY() {
  return {
    showDelay: 0,
    hideDelay: 0,
    touchendHideDelay: 1500
  };
}
var _MatTooltipBase = class {
  constructor(_overlay, _elementRef, _scrollDispatcher, _viewContainerRef, _ngZone, _platform, _ariaDescriber, _focusMonitor, scrollStrategy, _dir, _defaultOptions, _document) {
    this._overlay = _overlay;
    this._elementRef = _elementRef;
    this._scrollDispatcher = _scrollDispatcher;
    this._viewContainerRef = _viewContainerRef;
    this._ngZone = _ngZone;
    this._platform = _platform;
    this._ariaDescriber = _ariaDescriber;
    this._focusMonitor = _focusMonitor;
    this._dir = _dir;
    this._defaultOptions = _defaultOptions;
    this._position = "below";
    this._disabled = false;
    this._viewInitialized = false;
    this._pointerExitEventsInitialized = false;
    this._viewportMargin = 8;
    this._cssClassPrefix = "mat";
    this._showDelay = this._defaultOptions.showDelay;
    this._hideDelay = this._defaultOptions.hideDelay;
    this.touchGestures = "auto";
    this._message = "";
    this._passiveListeners = [];
    this._destroyed = new Subject();
    this._scrollStrategy = scrollStrategy;
    this._document = _document;
    if (_defaultOptions) {
      if (_defaultOptions.position) {
        this.position = _defaultOptions.position;
      }
      if (_defaultOptions.touchGestures) {
        this.touchGestures = _defaultOptions.touchGestures;
      }
    }
    _dir.change.pipe(takeUntil(this._destroyed)).subscribe(() => {
      if (this._overlayRef) {
        this._updatePosition(this._overlayRef);
      }
    });
  }
  /** Allows the user to define the position of the tooltip relative to the parent element */
  get position() {
    return this._position;
  }
  set position(value) {
    if (value !== this._position) {
      this._position = value;
      if (this._overlayRef) {
        this._updatePosition(this._overlayRef);
        this._tooltipInstance?.show(0);
        this._overlayRef.updatePosition();
      }
    }
  }
  /** Disables the display of the tooltip. */
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = coerceBooleanProperty(value);
    if (this._disabled) {
      this.hide(0);
    } else {
      this._setupPointerEnterEventsIfNeeded();
    }
  }
  /** The default delay in ms before showing the tooltip after show is called */
  get showDelay() {
    return this._showDelay;
  }
  set showDelay(value) {
    this._showDelay = coerceNumberProperty(value);
  }
  /** The default delay in ms before hiding the tooltip after hide is called */
  get hideDelay() {
    return this._hideDelay;
  }
  set hideDelay(value) {
    this._hideDelay = coerceNumberProperty(value);
    if (this._tooltipInstance) {
      this._tooltipInstance._mouseLeaveHideDelay = this._hideDelay;
    }
  }
  /** The message to be displayed in the tooltip */
  get message() {
    return this._message;
  }
  set message(value) {
    this._ariaDescriber.removeDescription(this._elementRef.nativeElement, this._message, "tooltip");
    this._message = value != null ? String(value).trim() : "";
    if (!this._message && this._isTooltipVisible()) {
      this.hide(0);
    } else {
      this._setupPointerEnterEventsIfNeeded();
      this._updateTooltipMessage();
      this._ngZone.runOutsideAngular(() => {
        Promise.resolve().then(() => {
          this._ariaDescriber.describe(this._elementRef.nativeElement, this.message, "tooltip");
        });
      });
    }
  }
  /** Classes to be passed to the tooltip. Supports the same syntax as `ngClass`. */
  get tooltipClass() {
    return this._tooltipClass;
  }
  set tooltipClass(value) {
    this._tooltipClass = value;
    if (this._tooltipInstance) {
      this._setTooltipClass(this._tooltipClass);
    }
  }
  ngAfterViewInit() {
    this._viewInitialized = true;
    this._setupPointerEnterEventsIfNeeded();
    this._focusMonitor.monitor(this._elementRef).pipe(takeUntil(this._destroyed)).subscribe((origin) => {
      if (!origin) {
        this._ngZone.run(() => this.hide(0));
      } else if (origin === "keyboard") {
        this._ngZone.run(() => this.show());
      }
    });
  }
  /**
   * Dispose the tooltip when destroyed.
   */
  ngOnDestroy() {
    const nativeElement = this._elementRef.nativeElement;
    clearTimeout(this._touchstartTimeout);
    if (this._overlayRef) {
      this._overlayRef.dispose();
      this._tooltipInstance = null;
    }
    this._passiveListeners.forEach(([event, listener]) => {
      nativeElement.removeEventListener(event, listener, passiveListenerOptions);
    });
    this._passiveListeners.length = 0;
    this._destroyed.next();
    this._destroyed.complete();
    this._ariaDescriber.removeDescription(nativeElement, this.message, "tooltip");
    this._focusMonitor.stopMonitoring(nativeElement);
  }
  /** Shows the tooltip after the delay in ms, defaults to tooltip-delay-show or 0ms if no input */
  show(delay = this.showDelay) {
    if (this.disabled || !this.message || this._isTooltipVisible() && !this._tooltipInstance._showTimeoutId && !this._tooltipInstance._hideTimeoutId) {
      return;
    }
    const overlayRef = this._createOverlay();
    this._detach();
    this._portal = this._portal || new ComponentPortal(this._tooltipComponent, this._viewContainerRef);
    const instance = this._tooltipInstance = overlayRef.attach(this._portal).instance;
    instance._triggerElement = this._elementRef.nativeElement;
    instance._mouseLeaveHideDelay = this._hideDelay;
    instance.afterHidden().pipe(takeUntil(this._destroyed)).subscribe(() => this._detach());
    this._setTooltipClass(this._tooltipClass);
    this._updateTooltipMessage();
    instance.show(delay);
  }
  /** Hides the tooltip after the delay in ms, defaults to tooltip-delay-hide or 0ms if no input */
  hide(delay = this.hideDelay) {
    if (this._tooltipInstance) {
      this._tooltipInstance.hide(delay);
    }
  }
  /** Shows/hides the tooltip */
  toggle() {
    this._isTooltipVisible() ? this.hide() : this.show();
  }
  /** Returns true if the tooltip is currently visible to the user */
  _isTooltipVisible() {
    return !!this._tooltipInstance && this._tooltipInstance.isVisible();
  }
  /** Create the overlay config and position strategy */
  _createOverlay() {
    if (this._overlayRef) {
      return this._overlayRef;
    }
    const scrollableAncestors = this._scrollDispatcher.getAncestorScrollContainers(this._elementRef);
    const strategy = this._overlay.position().flexibleConnectedTo(this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(false).withViewportMargin(this._viewportMargin).withScrollableContainers(scrollableAncestors);
    strategy.positionChanges.pipe(takeUntil(this._destroyed)).subscribe((change) => {
      this._updateCurrentPositionClass(change.connectionPair);
      if (this._tooltipInstance) {
        if (change.scrollableViewProperties.isOverlayClipped && this._tooltipInstance.isVisible()) {
          this._ngZone.run(() => this.hide(0));
        }
      }
    });
    this._overlayRef = this._overlay.create({
      direction: this._dir,
      positionStrategy: strategy,
      panelClass: `${this._cssClassPrefix}-${PANEL_CLASS}`,
      scrollStrategy: this._scrollStrategy()
    });
    this._updatePosition(this._overlayRef);
    this._overlayRef.detachments().pipe(takeUntil(this._destroyed)).subscribe(() => this._detach());
    this._overlayRef.outsidePointerEvents().pipe(takeUntil(this._destroyed)).subscribe(() => this._tooltipInstance?._handleBodyInteraction());
    this._overlayRef.keydownEvents().pipe(takeUntil(this._destroyed)).subscribe((event) => {
      if (this._isTooltipVisible() && event.keyCode === ESCAPE && !hasModifierKey(event)) {
        event.preventDefault();
        event.stopPropagation();
        this._ngZone.run(() => this.hide(0));
      }
    });
    if (this._defaultOptions?.disableTooltipInteractivity) {
      this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`);
    }
    return this._overlayRef;
  }
  /** Detaches the currently-attached tooltip. */
  _detach() {
    if (this._overlayRef && this._overlayRef.hasAttached()) {
      this._overlayRef.detach();
    }
    this._tooltipInstance = null;
  }
  /** Updates the position of the current tooltip. */
  _updatePosition(overlayRef) {
    const position = overlayRef.getConfig().positionStrategy;
    const origin = this._getOrigin();
    const overlay = this._getOverlayPosition();
    position.withPositions([this._addOffset(__spreadValues(__spreadValues({}, origin.main), overlay.main)), this._addOffset(__spreadValues(__spreadValues({}, origin.fallback), overlay.fallback))]);
  }
  /** Adds the configured offset to a position. Used as a hook for child classes. */
  _addOffset(position) {
    return position;
  }
  /**
   * Returns the origin position and a fallback position based on the user's position preference.
   * The fallback position is the inverse of the origin (e.g. `'below' -> 'above'`).
   */
  _getOrigin() {
    const isLtr = !this._dir || this._dir.value == "ltr";
    const position = this.position;
    let originPosition;
    if (position == "above" || position == "below") {
      originPosition = {
        originX: "center",
        originY: position == "above" ? "top" : "bottom"
      };
    } else if (position == "before" || position == "left" && isLtr || position == "right" && !isLtr) {
      originPosition = {
        originX: "start",
        originY: "center"
      };
    } else if (position == "after" || position == "right" && isLtr || position == "left" && !isLtr) {
      originPosition = {
        originX: "end",
        originY: "center"
      };
    } else if (typeof ngDevMode === "undefined" || ngDevMode) {
      throw getMatTooltipInvalidPositionError(position);
    }
    const {
      x,
      y
    } = this._invertPosition(originPosition.originX, originPosition.originY);
    return {
      main: originPosition,
      fallback: {
        originX: x,
        originY: y
      }
    };
  }
  /** Returns the overlay position and a fallback position based on the user's preference */
  _getOverlayPosition() {
    const isLtr = !this._dir || this._dir.value == "ltr";
    const position = this.position;
    let overlayPosition;
    if (position == "above") {
      overlayPosition = {
        overlayX: "center",
        overlayY: "bottom"
      };
    } else if (position == "below") {
      overlayPosition = {
        overlayX: "center",
        overlayY: "top"
      };
    } else if (position == "before" || position == "left" && isLtr || position == "right" && !isLtr) {
      overlayPosition = {
        overlayX: "end",
        overlayY: "center"
      };
    } else if (position == "after" || position == "right" && isLtr || position == "left" && !isLtr) {
      overlayPosition = {
        overlayX: "start",
        overlayY: "center"
      };
    } else if (typeof ngDevMode === "undefined" || ngDevMode) {
      throw getMatTooltipInvalidPositionError(position);
    }
    const {
      x,
      y
    } = this._invertPosition(overlayPosition.overlayX, overlayPosition.overlayY);
    return {
      main: overlayPosition,
      fallback: {
        overlayX: x,
        overlayY: y
      }
    };
  }
  /** Updates the tooltip message and repositions the overlay according to the new message length */
  _updateTooltipMessage() {
    if (this._tooltipInstance) {
      this._tooltipInstance.message = this.message;
      this._tooltipInstance._markForCheck();
      this._ngZone.onMicrotaskEmpty.pipe(take(1), takeUntil(this._destroyed)).subscribe(() => {
        if (this._tooltipInstance) {
          this._overlayRef.updatePosition();
        }
      });
    }
  }
  /** Updates the tooltip class */
  _setTooltipClass(tooltipClass) {
    if (this._tooltipInstance) {
      this._tooltipInstance.tooltipClass = tooltipClass;
      this._tooltipInstance._markForCheck();
    }
  }
  /** Inverts an overlay position. */
  _invertPosition(x, y) {
    if (this.position === "above" || this.position === "below") {
      if (y === "top") {
        y = "bottom";
      } else if (y === "bottom") {
        y = "top";
      }
    } else {
      if (x === "end") {
        x = "start";
      } else if (x === "start") {
        x = "end";
      }
    }
    return {
      x,
      y
    };
  }
  /** Updates the class on the overlay panel based on the current position of the tooltip. */
  _updateCurrentPositionClass(connectionPair) {
    const {
      overlayY,
      originX,
      originY
    } = connectionPair;
    let newPosition;
    if (overlayY === "center") {
      if (this._dir && this._dir.value === "rtl") {
        newPosition = originX === "end" ? "left" : "right";
      } else {
        newPosition = originX === "start" ? "left" : "right";
      }
    } else {
      newPosition = overlayY === "bottom" && originY === "top" ? "above" : "below";
    }
    if (newPosition !== this._currentPosition) {
      const overlayRef = this._overlayRef;
      if (overlayRef) {
        const classPrefix = `${this._cssClassPrefix}-${PANEL_CLASS}-`;
        overlayRef.removePanelClass(classPrefix + this._currentPosition);
        overlayRef.addPanelClass(classPrefix + newPosition);
      }
      this._currentPosition = newPosition;
    }
  }
  /** Binds the pointer events to the tooltip trigger. */
  _setupPointerEnterEventsIfNeeded() {
    if (this._disabled || !this.message || !this._viewInitialized || this._passiveListeners.length) {
      return;
    }
    if (this._platformSupportsMouseEvents()) {
      this._passiveListeners.push(["mouseenter", () => {
        this._setupPointerExitEventsIfNeeded();
        this.show();
      }]);
    } else if (this.touchGestures !== "off") {
      this._disableNativeGesturesIfNecessary();
      this._passiveListeners.push(["touchstart", () => {
        this._setupPointerExitEventsIfNeeded();
        clearTimeout(this._touchstartTimeout);
        this._touchstartTimeout = setTimeout(() => this.show(), LONGPRESS_DELAY);
      }]);
    }
    this._addListeners(this._passiveListeners);
  }
  _setupPointerExitEventsIfNeeded() {
    if (this._pointerExitEventsInitialized) {
      return;
    }
    this._pointerExitEventsInitialized = true;
    const exitListeners = [];
    if (this._platformSupportsMouseEvents()) {
      exitListeners.push(["mouseleave", (event) => {
        const newTarget = event.relatedTarget;
        if (!newTarget || !this._overlayRef?.overlayElement.contains(newTarget)) {
          this.hide();
        }
      }], ["wheel", (event) => this._wheelListener(event)]);
    } else if (this.touchGestures !== "off") {
      this._disableNativeGesturesIfNecessary();
      const touchendListener = () => {
        clearTimeout(this._touchstartTimeout);
        this.hide(this._defaultOptions.touchendHideDelay);
      };
      exitListeners.push(["touchend", touchendListener], ["touchcancel", touchendListener]);
    }
    this._addListeners(exitListeners);
    this._passiveListeners.push(...exitListeners);
  }
  _addListeners(listeners) {
    listeners.forEach(([event, listener]) => {
      this._elementRef.nativeElement.addEventListener(event, listener, passiveListenerOptions);
    });
  }
  _platformSupportsMouseEvents() {
    return !this._platform.IOS && !this._platform.ANDROID;
  }
  /** Listener for the `wheel` event on the element. */
  _wheelListener(event) {
    if (this._isTooltipVisible()) {
      const elementUnderPointer = this._document.elementFromPoint(event.clientX, event.clientY);
      const element = this._elementRef.nativeElement;
      if (elementUnderPointer !== element && !element.contains(elementUnderPointer)) {
        this.hide();
      }
    }
  }
  /** Disables the native browser gestures, based on how the tooltip has been configured. */
  _disableNativeGesturesIfNecessary() {
    const gestures = this.touchGestures;
    if (gestures !== "off") {
      const element = this._elementRef.nativeElement;
      const style2 = element.style;
      if (gestures === "on" || element.nodeName !== "INPUT" && element.nodeName !== "TEXTAREA") {
        style2.userSelect = style2.msUserSelect = style2.webkitUserSelect = style2.MozUserSelect = "none";
      }
      if (gestures === "on" || !element.draggable) {
        style2.webkitUserDrag = "none";
      }
      style2.touchAction = "none";
      style2.webkitTapHighlightColor = "transparent";
    }
  }
};
_MatTooltipBase.ɵfac = function _MatTooltipBase_Factory(ɵt) {
  ɵɵinvalidFactory();
};
_MatTooltipBase.ɵdir = ɵɵdefineDirective({
  type: _MatTooltipBase,
  inputs: {
    position: [0, "matTooltipPosition", "position"],
    disabled: [0, "matTooltipDisabled", "disabled"],
    showDelay: [0, "matTooltipShowDelay", "showDelay"],
    hideDelay: [0, "matTooltipHideDelay", "hideDelay"],
    touchGestures: [0, "matTooltipTouchGestures", "touchGestures"],
    message: [0, "matTooltip", "message"],
    tooltipClass: [0, "matTooltipClass", "tooltipClass"]
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(_MatTooltipBase, [{
    type: Directive
  }], function() {
    return [{
      type: Overlay
    }, {
      type: ElementRef
    }, {
      type: ScrollDispatcher
    }, {
      type: ViewContainerRef
    }, {
      type: NgZone
    }, {
      type: Platform
    }, {
      type: AriaDescriber
    }, {
      type: FocusMonitor
    }, {
      type: void 0
    }, {
      type: Directionality
    }, {
      type: void 0
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [DOCUMENT]
      }]
    }];
  }, {
    position: [{
      type: Input,
      args: ["matTooltipPosition"]
    }],
    disabled: [{
      type: Input,
      args: ["matTooltipDisabled"]
    }],
    showDelay: [{
      type: Input,
      args: ["matTooltipShowDelay"]
    }],
    hideDelay: [{
      type: Input,
      args: ["matTooltipHideDelay"]
    }],
    touchGestures: [{
      type: Input,
      args: ["matTooltipTouchGestures"]
    }],
    message: [{
      type: Input,
      args: ["matTooltip"]
    }],
    tooltipClass: [{
      type: Input,
      args: ["matTooltipClass"]
    }]
  });
})();
var MatTooltip = class extends _MatTooltipBase {
  constructor(overlay, elementRef, scrollDispatcher, viewContainerRef, ngZone, platform, ariaDescriber, focusMonitor, scrollStrategy, dir, defaultOptions, _document) {
    super(overlay, elementRef, scrollDispatcher, viewContainerRef, ngZone, platform, ariaDescriber, focusMonitor, scrollStrategy, dir, defaultOptions, _document);
    this._tooltipComponent = TooltipComponent;
  }
};
MatTooltip.ɵfac = function MatTooltip_Factory(ɵt) {
  return new (ɵt || MatTooltip)(ɵɵdirectiveInject(Overlay), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ScrollDispatcher), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Platform), ɵɵdirectiveInject(AriaDescriber), ɵɵdirectiveInject(FocusMonitor), ɵɵdirectiveInject(MAT_TOOLTIP_SCROLL_STRATEGY), ɵɵdirectiveInject(Directionality, 8), ɵɵdirectiveInject(MAT_TOOLTIP_DEFAULT_OPTIONS, 8), ɵɵdirectiveInject(DOCUMENT));
};
MatTooltip.ɵdir = ɵɵdefineDirective({
  type: MatTooltip,
  selectors: [["", "matTooltip", ""]],
  hostAttrs: [1, "mat-tooltip-trigger"],
  exportAs: ["matTooltip"],
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTooltip, [{
    type: Directive,
    args: [{
      selector: "[matTooltip]",
      exportAs: "matTooltip",
      host: {
        "class": "mat-tooltip-trigger"
      }
    }]
  }], function() {
    return [{
      type: Overlay
    }, {
      type: ElementRef
    }, {
      type: ScrollDispatcher
    }, {
      type: ViewContainerRef
    }, {
      type: NgZone
    }, {
      type: Platform
    }, {
      type: AriaDescriber
    }, {
      type: FocusMonitor
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [MAT_TOOLTIP_SCROLL_STRATEGY]
      }]
    }, {
      type: Directionality,
      decorators: [{
        type: Optional
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Optional
      }, {
        type: Inject,
        args: [MAT_TOOLTIP_DEFAULT_OPTIONS]
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
var _TooltipComponentBase = class {
  constructor(_changeDetectorRef, animationMode) {
    this._changeDetectorRef = _changeDetectorRef;
    this._visibility = "initial";
    this._closeOnInteraction = false;
    this._isVisible = false;
    this._onHide = new Subject();
    this._animationsDisabled = animationMode === "NoopAnimations";
  }
  /**
   * Shows the tooltip with an animation originating from the provided origin
   * @param delay Amount of milliseconds to the delay showing the tooltip.
   */
  show(delay) {
    clearTimeout(this._hideTimeoutId);
    this._showTimeoutId = setTimeout(() => {
      this._toggleVisibility(true);
      this._showTimeoutId = void 0;
    }, delay);
  }
  /**
   * Begins the animation to hide the tooltip after the provided delay in ms.
   * @param delay Amount of milliseconds to delay showing the tooltip.
   */
  hide(delay) {
    clearTimeout(this._showTimeoutId);
    this._hideTimeoutId = setTimeout(() => {
      this._toggleVisibility(false);
      this._hideTimeoutId = void 0;
    }, delay);
  }
  /** Returns an observable that notifies when the tooltip has been hidden from view. */
  afterHidden() {
    return this._onHide;
  }
  /** Whether the tooltip is being displayed. */
  isVisible() {
    return this._isVisible;
  }
  ngOnDestroy() {
    clearTimeout(this._showTimeoutId);
    clearTimeout(this._hideTimeoutId);
    this._onHide.complete();
    this._triggerElement = null;
  }
  /**
   * Interactions on the HTML body should close the tooltip immediately as defined in the
   * material design spec.
   * https://material.io/design/components/tooltips.html#behavior
   */
  _handleBodyInteraction() {
    if (this._closeOnInteraction) {
      this.hide(0);
    }
  }
  /**
   * Marks that the tooltip needs to be checked in the next change detection run.
   * Mainly used for rendering the initial text before positioning a tooltip, which
   * can be problematic in components with OnPush change detection.
   */
  _markForCheck() {
    this._changeDetectorRef.markForCheck();
  }
  _handleMouseLeave({
    relatedTarget
  }) {
    if (!relatedTarget || !this._triggerElement.contains(relatedTarget)) {
      this.hide(this._mouseLeaveHideDelay);
    }
  }
  /**
   * Callback for when the timeout in this.show() gets completed.
   * This method is only needed by the mdc-tooltip, and so it is only implemented
   * in the mdc-tooltip, not here.
   */
  _onShow() {
  }
  /** Event listener dispatched when an animation on the tooltip finishes. */
  _handleAnimationEnd({
    animationName
  }) {
    if (animationName === this._showAnimation || animationName === this._hideAnimation) {
      this._finalizeAnimation(animationName === this._showAnimation);
    }
  }
  /** Handles the cleanup after an animation has finished. */
  _finalizeAnimation(toVisible) {
    if (toVisible) {
      this._closeOnInteraction = true;
    } else if (!this.isVisible()) {
      this._onHide.next();
    }
  }
  /** Toggles the visibility of the tooltip element. */
  _toggleVisibility(isVisible) {
    const tooltip = this._tooltip.nativeElement;
    const showClass = this._showAnimation;
    const hideClass = this._hideAnimation;
    tooltip.classList.remove(isVisible ? hideClass : showClass);
    tooltip.classList.add(isVisible ? showClass : hideClass);
    this._isVisible = isVisible;
    if (isVisible && !this._animationsDisabled && typeof getComputedStyle === "function") {
      const styles = getComputedStyle(tooltip);
      if (styles.getPropertyValue("animation-duration") === "0s" || styles.getPropertyValue("animation-name") === "none") {
        this._animationsDisabled = true;
      }
    }
    if (isVisible) {
      this._onShow();
    }
    if (this._animationsDisabled) {
      tooltip.classList.add("_mat-animation-noopable");
      this._finalizeAnimation(isVisible);
    }
  }
};
_TooltipComponentBase.ɵfac = function _TooltipComponentBase_Factory(ɵt) {
  return new (ɵt || _TooltipComponentBase)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ANIMATION_MODULE_TYPE, 8));
};
_TooltipComponentBase.ɵdir = ɵɵdefineDirective({
  type: _TooltipComponentBase
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(_TooltipComponentBase, [{
    type: Directive
  }], function() {
    return [{
      type: ChangeDetectorRef
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
var TooltipComponent = class extends _TooltipComponentBase {
  constructor(changeDetectorRef, _breakpointObserver, animationMode) {
    super(changeDetectorRef, animationMode);
    this._breakpointObserver = _breakpointObserver;
    this._isHandset = this._breakpointObserver.observe(Breakpoints.Handset);
    this._showAnimation = "mat-tooltip-show";
    this._hideAnimation = "mat-tooltip-hide";
  }
};
TooltipComponent.ɵfac = function TooltipComponent_Factory(ɵt) {
  return new (ɵt || TooltipComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(BreakpointObserver), ɵɵdirectiveInject(ANIMATION_MODULE_TYPE, 8));
};
TooltipComponent.ɵcmp = ɵɵdefineComponent({
  type: TooltipComponent,
  selectors: [["mat-tooltip-component"]],
  viewQuery: function TooltipComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c0, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._tooltip = _t.first);
    }
  },
  hostAttrs: ["aria-hidden", "true"],
  hostVars: 2,
  hostBindings: function TooltipComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("mouseleave", function TooltipComponent_mouseleave_HostBindingHandler($event) {
        return ctx._handleMouseLeave($event);
      });
    }
    if (rf & 2) {
      ɵɵstyleProp("zoom", ctx.isVisible() ? 1 : null);
    }
  },
  features: [ɵɵInheritDefinitionFeature],
  decls: 4,
  vars: 6,
  consts: [["tooltip", ""], [1, "mat-tooltip", 3, "animationend", "ngClass"]],
  template: function TooltipComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵelementStart(0, "div", 1, 0);
      ɵɵpipe(2, "async");
      ɵɵlistener("animationend", function TooltipComponent_Template_div_animationend_0_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx._handleAnimationEnd($event));
      });
      ɵɵtext(3);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      let tmp_1_0;
      ɵɵclassProp("mat-tooltip-handset", (tmp_1_0 = ɵɵpipeBind1(2, 4, ctx._isHandset)) == null ? null : tmp_1_0.matches);
      ɵɵproperty("ngClass", ctx.tooltipClass);
      ɵɵadvance(3);
      ɵɵtextInterpolate(ctx.message);
    }
  },
  dependencies: [NgClass, AsyncPipe],
  styles: [".mat-tooltip{color:#fff;border-radius:4px;margin:14px;max-width:250px;padding-left:8px;padding-right:8px;overflow:hidden;text-overflow:ellipsis;transform:scale(0)}.mat-tooltip._mat-animation-noopable{animation:none;transform:scale(1)}.cdk-high-contrast-active .mat-tooltip{outline:solid 1px}.mat-tooltip-handset{margin:24px;padding-left:16px;padding-right:16px}.mat-tooltip-panel-non-interactive{pointer-events:none}@keyframes mat-tooltip-show{0%{opacity:0;transform:scale(0)}50%{opacity:.5;transform:scale(0.99)}100%{opacity:1;transform:scale(1)}}@keyframes mat-tooltip-hide{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(1)}}.mat-tooltip-show{animation:mat-tooltip-show 200ms cubic-bezier(0, 0, 0.2, 1) forwards}.mat-tooltip-hide{animation:mat-tooltip-hide 100ms cubic-bezier(0, 0, 0.2, 1) forwards}\n"],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TooltipComponent, [{
    type: Component,
    args: [{
      selector: "mat-tooltip-component",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        // Forces the element to have a layout in IE and Edge. This fixes issues where the element
        // won't be rendered if the animations are disabled or there is no web animations polyfill.
        "[style.zoom]": "isVisible() ? 1 : null",
        "(mouseleave)": "_handleMouseLeave($event)",
        "aria-hidden": "true"
      },
      template: '<div #tooltip\n     class="mat-tooltip"\n     (animationend)="_handleAnimationEnd($event)"\n     [ngClass]="tooltipClass"\n     [class.mat-tooltip-handset]="(_isHandset | async)?.matches">{{message}}</div>\n',
      styles: [".mat-tooltip{color:#fff;border-radius:4px;margin:14px;max-width:250px;padding-left:8px;padding-right:8px;overflow:hidden;text-overflow:ellipsis;transform:scale(0)}.mat-tooltip._mat-animation-noopable{animation:none;transform:scale(1)}.cdk-high-contrast-active .mat-tooltip{outline:solid 1px}.mat-tooltip-handset{margin:24px;padding-left:16px;padding-right:16px}.mat-tooltip-panel-non-interactive{pointer-events:none}@keyframes mat-tooltip-show{0%{opacity:0;transform:scale(0)}50%{opacity:.5;transform:scale(0.99)}100%{opacity:1;transform:scale(1)}}@keyframes mat-tooltip-hide{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(1)}}.mat-tooltip-show{animation:mat-tooltip-show 200ms cubic-bezier(0, 0, 0.2, 1) forwards}.mat-tooltip-hide{animation:mat-tooltip-hide 100ms cubic-bezier(0, 0, 0.2, 1) forwards}\n"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: BreakpointObserver
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
    _tooltip: [{
      type: ViewChild,
      args: ["tooltip", {
        // Use a static query here since we interact directly with
        // the DOM which can happen before `ngAfterViewInit`.
        static: true
      }]
    }]
  });
})();
var MatTooltipModule = class {
};
MatTooltipModule.ɵfac = function MatTooltipModule_Factory(ɵt) {
  return new (ɵt || MatTooltipModule)();
};
MatTooltipModule.ɵmod = ɵɵdefineNgModule({
  type: MatTooltipModule,
  declarations: [MatTooltip, TooltipComponent],
  imports: [A11yModule, CommonModule, OverlayModule, MatCommonModule],
  exports: [MatTooltip, TooltipComponent, MatCommonModule, CdkScrollableModule]
});
MatTooltipModule.ɵinj = ɵɵdefineInjector({
  providers: [MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER],
  imports: [[A11yModule, CommonModule, OverlayModule, MatCommonModule], MatCommonModule, CdkScrollableModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTooltipModule, [{
    type: NgModule,
    args: [{
      imports: [A11yModule, CommonModule, OverlayModule, MatCommonModule],
      exports: [MatTooltip, TooltipComponent, MatCommonModule, CdkScrollableModule],
      declarations: [MatTooltip, TooltipComponent],
      providers: [MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER]
    }]
  }], null, null);
})();
var matTooltipAnimations = {
  /** Animation that transitions a tooltip in and out. */
  tooltipState: trigger("state", [state("initial, void, hidden", style({
    opacity: 0,
    transform: "scale(0)"
  })), state("visible", style({
    transform: "scale(1)"
  })), transition("* => visible", animate("200ms cubic-bezier(0, 0, 0.2, 1)", keyframes([style({
    opacity: 0,
    transform: "scale(0)",
    offset: 0
  }), style({
    opacity: 0.5,
    transform: "scale(0.99)",
    offset: 0.5
  }), style({
    opacity: 1,
    transform: "scale(1)",
    offset: 1
  })]))), transition("* => hidden", animate("100ms cubic-bezier(0, 0, 0.2, 1)", style({
    opacity: 0
  })))])
};

export {
  SCROLL_THROTTLE_MS,
  TOOLTIP_PANEL_CLASS,
  getMatTooltipInvalidPositionError,
  MAT_TOOLTIP_SCROLL_STRATEGY,
  MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY,
  MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER,
  MAT_TOOLTIP_DEFAULT_OPTIONS,
  MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY,
  _MatTooltipBase,
  MatTooltip,
  _TooltipComponentBase,
  TooltipComponent,
  MatTooltipModule,
  matTooltipAnimations
};
/*! Bundled license information:

@angular/material/fesm2020/tooltip.mjs:
  (**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   *)
*/
//# sourceMappingURL=chunk-YEEIDYBC.js.map
