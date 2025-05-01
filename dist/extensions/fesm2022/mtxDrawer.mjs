import { CdkDialogContainer, Dialog, DialogConfig, DialogModule } from '@angular/cdk/dialog';
import { CdkPortalOutlet, PortalModule } from '@angular/cdk/portal';
import * as i0 from '@angular/core';
import { inject, ANIMATION_MODULE_TYPE, EventEmitter, Component, ChangeDetectionStrategy, ViewEncapsulation, ViewChild, InjectionToken, Injectable, NgModule } from '@angular/core';
import { MatCommonModule } from '@angular/material/core';
import { coerceCssPixelValue } from '@angular/cdk/coercion';
import { Overlay } from '@angular/cdk/overlay';
import { Subject, merge, defer } from 'rxjs';
import { filter, take, startWith } from 'rxjs/operators';
import { ESCAPE, hasModifierKey } from '@angular/cdk/keycodes';

/**
 * Configuration used when opening a drawer.
 */
class MtxDrawerConfig {
    constructor() {
        /** Data being injected into the child component. */
        this.data = null;
        /** Whether the drawer has a backdrop. */
        this.hasBackdrop = true;
        /** Whether the user can use escape or clicking outside to close the drawer. */
        this.disableClose = false;
        /** Aria label to assign to the drawer element. */
        this.ariaLabel = null;
        /**
         * Whether the drawer should close when the user goes backwards/forwards in history.
         * Note that this usually doesn't include clicking on links (unless the user is using
         * the `HashLocationStrategy`).
         */
        this.closeOnNavigation = true;
        /**
         * Where the drawer should focus on open.
         * @breaking-change 14.0.0 Remove boolean option from autoFocus. Use string or
         * AutoFocusTarget instead.
         */
        this.autoFocus = 'first-tabbable';
        /**
         * Whether the drawer should restore focus to the
         * previously-focused element, after it's closed.
         */
        this.restoreFocus = true;
        /** Position of the drawer. */
        this.position = 'right';
    }
}

const ENTER_ANIMATION = '_mtx-drawer-enter';
const EXIT_ANIMATION = '_mtx-drawer-exit';
/**
 * Internal component that wraps user-provided drawer content.
 * @docs-private
 */
class MtxDrawerContainer extends CdkDialogContainer {
    constructor() {
        super(...arguments);
        this._animationsDisabled = inject(ANIMATION_MODULE_TYPE, { optional: true }) === 'NoopAnimations';
        /** The state of the drawer animations. */
        this._animationState = 'void';
        /** Emits whenever the state of the animation changes. */
        this._animationStateChanged = new EventEmitter();
        /** Whether the component has been destroyed. */
        this._destroyed = false;
    }
    get _drawerPosition() {
        return `mtx-drawer-${this._config.position}`;
    }
    _contentAttached() {
        // Delegate to the original dialog-container initialization (i.e. saving the
        // previous element, setting up the focus trap and moving focus to the container).
        super._contentAttached();
        this.enter();
    }
    /** Begin animation of bottom sheet entrance into view. */
    enter() {
        if (!this._destroyed) {
            this._animationState = 'visible';
            this._changeDetectorRef.markForCheck();
            this._changeDetectorRef.detectChanges();
            if (this._animationsDisabled) {
                this._simulateAnimation(ENTER_ANIMATION);
            }
        }
    }
    /** Begin animation of the bottom sheet exiting from view. */
    exit() {
        if (!this._destroyed) {
            this._animationState = 'hidden';
            this._changeDetectorRef.markForCheck();
            if (this._animationsDisabled) {
                this._simulateAnimation(EXIT_ANIMATION);
            }
        }
    }
    ngOnDestroy() {
        super.ngOnDestroy();
        this._destroyed = true;
    }
    _simulateAnimation(name) {
        this._ngZone.run(() => {
            this._handleAnimationEvent(true, name);
            setTimeout(() => this._handleAnimationEvent(false, name));
        });
    }
    _handleAnimationEvent(isStart, animationName) {
        const isEnter = animationName === ENTER_ANIMATION;
        const isExit = animationName === EXIT_ANIMATION;
        if (isEnter) {
            this._trapFocus();
        }
        if (isEnter || isExit) {
            this._animationStateChanged.emit({
                toState: isEnter ? 'visible' : 'hidden',
                phase: isStart ? 'start' : 'done',
            });
        }
    }
    _captureInitialFocus() { }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.2", ngImport: i0, type: MtxDrawerContainer, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.2", type: MtxDrawerContainer, isStandalone: true, selector: "mtx-drawer-container", host: { attributes: { "tabindex": "-1" }, listeners: { "animationstart": "_handleAnimationEvent(true, $event.animationName)", "animationend": "_handleAnimationEvent(false, $event.animationName)", "animationcancel": "_handleAnimationEvent(false, $event.animationName)" }, properties: { "class": "_drawerPosition", "class.mtx-drawer-container-animations-enabled": "!_animationsDisabled", "class.mtx-drawer-container-enter": "_animationState === \"visible\"", "class.mtx-drawer-container-exit": "_animationState === \"hidden\"", "id": "_config.id", "attr.role": "_config.role", "attr.aria-modal": "_config.isModal", "attr.aria-label": "_config.ariaLabel" }, classAttribute: "mtx-drawer-container" }, viewQueries: [{ propertyName: "_portalOutlet", first: true, predicate: CdkPortalOutlet, descendants: true, static: true }], usesInheritance: true, ngImport: i0, template: "<ng-template cdkPortalOutlet></ng-template>\n", styles: ["@keyframes _mtx-drawer-enter{0%{box-shadow:none;visibility:hidden}to{transform:none;visibility:visible}}@keyframes _mtx-drawer-exit{0%{transform:none;visibility:visible}to{box-shadow:none;visibility:hidden}}.mtx-drawer-container{display:block;width:100%;padding:8px 16px;overflow:auto;outline:0;box-sizing:border-box;position:relative;background-color:var(--mtx-drawer-container-background-color, var(--mat-sys-surface));color:var(--mtx-drawer-container-text-color, var(--mat-sys-on-surface-variant));box-shadow:var(--mtx-drawer-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, .2), 0px 2px 2px 0px rgba(0, 0, 0, .14), 0px 1px 5px 0px rgba(0, 0, 0, .12))}@media (forced-colors: active){.mtx-drawer-container{outline:1px solid}}.mtx-drawer-container-animations-enabled.mtx-drawer-container-enter{animation:_mtx-drawer-enter .15s cubic-bezier(0,0,.2,1) forwards}.mtx-drawer-container-animations-enabled.mtx-drawer-container-exit{animation:_mtx-drawer-exit .4s cubic-bezier(.25,.8,.25,1) backwards}.mtx-drawer-container-animations-enabled.mtx-drawer-right{transform:translate(100%)}.mtx-drawer-container-animations-enabled.mtx-drawer-left{transform:translate(-100%)}.mtx-drawer-container-animations-enabled.mtx-drawer-bottom{transform:translateY(100%)}.mtx-drawer-container-animations-enabled.mtx-drawer-top{transform:translateY(-100%)}.mtx-drawer-right{border-top-left-radius:var(--mtx-drawer-container-shape, var(--mat-sys-corner-large));border-bottom-left-radius:var(--mtx-drawer-container-shape, var(--mat-sys-corner-large))}.mtx-drawer-left{border-top-right-radius:var(--mtx-drawer-container-shape, var(--mat-sys-corner-large));border-bottom-right-radius:var(--mtx-drawer-container-shape, var(--mat-sys-corner-large))}.mtx-drawer-bottom{border-top-left-radius:var(--mtx-drawer-container-shape, var(--mat-sys-corner-large));border-top-right-radius:var(--mtx-drawer-container-shape, var(--mat-sys-corner-large))}.mtx-drawer-top{border-bottom-left-radius:var(--mtx-drawer-container-shape, var(--mat-sys-corner-large));border-bottom-right-radius:var(--mtx-drawer-container-shape, var(--mat-sys-corner-large))}\n"], dependencies: [{ kind: "directive", type: CdkPortalOutlet, selector: "[cdkPortalOutlet]", inputs: ["cdkPortalOutlet"], outputs: ["attached"], exportAs: ["cdkPortalOutlet"] }], changeDetection: i0.ChangeDetectionStrategy.Default, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.2", ngImport: i0, type: MtxDrawerContainer, decorators: [{
            type: Component,
            args: [{ selector: 'mtx-drawer-container', changeDetection: ChangeDetectionStrategy.Default, encapsulation: ViewEncapsulation.None, host: {
                        'class': 'mtx-drawer-container',
                        '[class]': '_drawerPosition',
                        '[class.mtx-drawer-container-animations-enabled]': '!_animationsDisabled',
                        '[class.mtx-drawer-container-enter]': '_animationState === "visible"',
                        '[class.mtx-drawer-container-exit]': '_animationState === "hidden"',
                        'tabindex': '-1',
                        '[id]': '_config.id',
                        '[attr.role]': '_config.role',
                        '[attr.aria-modal]': '_config.isModal',
                        '[attr.aria-label]': '_config.ariaLabel',
                        '(animationstart)': '_handleAnimationEvent(true, $event.animationName)',
                        '(animationend)': '_handleAnimationEvent(false, $event.animationName)',
                        '(animationcancel)': '_handleAnimationEvent(false, $event.animationName)',
                    }, imports: [CdkPortalOutlet], template: "<ng-template cdkPortalOutlet></ng-template>\n", styles: ["@keyframes _mtx-drawer-enter{0%{box-shadow:none;visibility:hidden}to{transform:none;visibility:visible}}@keyframes _mtx-drawer-exit{0%{transform:none;visibility:visible}to{box-shadow:none;visibility:hidden}}.mtx-drawer-container{display:block;width:100%;padding:8px 16px;overflow:auto;outline:0;box-sizing:border-box;position:relative;background-color:var(--mtx-drawer-container-background-color, var(--mat-sys-surface));color:var(--mtx-drawer-container-text-color, var(--mat-sys-on-surface-variant));box-shadow:var(--mtx-drawer-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, .2), 0px 2px 2px 0px rgba(0, 0, 0, .14), 0px 1px 5px 0px rgba(0, 0, 0, .12))}@media (forced-colors: active){.mtx-drawer-container{outline:1px solid}}.mtx-drawer-container-animations-enabled.mtx-drawer-container-enter{animation:_mtx-drawer-enter .15s cubic-bezier(0,0,.2,1) forwards}.mtx-drawer-container-animations-enabled.mtx-drawer-container-exit{animation:_mtx-drawer-exit .4s cubic-bezier(.25,.8,.25,1) backwards}.mtx-drawer-container-animations-enabled.mtx-drawer-right{transform:translate(100%)}.mtx-drawer-container-animations-enabled.mtx-drawer-left{transform:translate(-100%)}.mtx-drawer-container-animations-enabled.mtx-drawer-bottom{transform:translateY(100%)}.mtx-drawer-container-animations-enabled.mtx-drawer-top{transform:translateY(-100%)}.mtx-drawer-right{border-top-left-radius:var(--mtx-drawer-container-shape, var(--mat-sys-corner-large));border-bottom-left-radius:var(--mtx-drawer-container-shape, var(--mat-sys-corner-large))}.mtx-drawer-left{border-top-right-radius:var(--mtx-drawer-container-shape, var(--mat-sys-corner-large));border-bottom-right-radius:var(--mtx-drawer-container-shape, var(--mat-sys-corner-large))}.mtx-drawer-bottom{border-top-left-radius:var(--mtx-drawer-container-shape, var(--mat-sys-corner-large));border-top-right-radius:var(--mtx-drawer-container-shape, var(--mat-sys-corner-large))}.mtx-drawer-top{border-bottom-left-radius:var(--mtx-drawer-container-shape, var(--mat-sys-corner-large));border-bottom-right-radius:var(--mtx-drawer-container-shape, var(--mat-sys-corner-large))}\n"] }]
        }], propDecorators: { _portalOutlet: [{
                type: ViewChild,
                args: [CdkPortalOutlet, { static: true }]
            }] } });

/**
 * Reference to a drawer dispatched from the drawer service.
 */
class MtxDrawerRef {
    /** Instance of the component making up the content of the drawer. */
    get instance() {
        return this._ref.componentInstance;
    }
    /**
     * `ComponentRef` of the component opened into the drawer. Will be
     * null when the drawer is opened using a `TemplateRef`.
     */
    get componentRef() {
        return this._ref.componentRef;
    }
    constructor(_ref, config, containerInstance) {
        this._ref = _ref;
        /** Subject for notifying the user that the drawer has been dismissed. */
        this._afterDismissed = new Subject();
        /** Subject for notifying the user that the drawer has opened and appeared. */
        this._afterOpened = new Subject();
        this.containerInstance = containerInstance;
        this.disableClose = config.disableClose;
        this.id = _ref.id;
        // Emit when opening animation completes
        containerInstance._animationStateChanged
            .pipe(filter(event => event.phase === 'done' && event.toState === 'visible'), take(1))
            .subscribe(() => {
            this._afterOpened.next();
            this._afterOpened.complete();
        });
        // Dispose overlay when closing animation is complete
        containerInstance._animationStateChanged
            .pipe(filter(event => event.phase === 'done' && event.toState === 'hidden'), take(1))
            .subscribe(() => {
            clearTimeout(this._closeFallbackTimeout);
            this._ref.close(this._result);
        });
        _ref.overlayRef.detachments().subscribe(() => {
            this._ref.close(this._result);
        });
        merge(this.backdropClick(), this.keydownEvents().pipe(filter(event => event.keyCode === ESCAPE))).subscribe(event => {
            if (!this.disableClose &&
                (event.type !== 'keydown' || !hasModifierKey(event))) {
                event.preventDefault();
                this.dismiss();
            }
        });
    }
    /**
     * Dismisses the drawer.
     * @param result Data to be passed back to the drawer opener.
     */
    dismiss(result) {
        if (this.containerInstance && !this._afterDismissed.closed) {
            // Transition the backdrop in parallel to the drawer.
            this.containerInstance._animationStateChanged
                .pipe(filter(event => event.phase === 'start'), take(1))
                .subscribe(event => {
                // The logic that disposes of the overlay depends on the exit animation completing, however
                // it isn't guaranteed if the parent view is destroyed while it's running. Add a fallback
                // timeout which will clean everything up if the animation hasn't fired within the specified
                // amount of time plus 100ms. We don't need to run this outside the NgZone, because for the
                // vast majority of cases the timeout will have been cleared before it has fired.
                this._closeFallbackTimeout = setTimeout(() => this._ref.close(this._result), 500);
                this._ref.overlayRef.detachBackdrop();
            });
            this._result = result;
            this.containerInstance.exit();
            this.containerInstance = null;
        }
    }
    /** Gets an observable that is notified when the drawer is finished closing. */
    afterDismissed() {
        return this._ref.closed;
    }
    /** Gets an observable that is notified when the drawer has opened and appeared. */
    afterOpened() {
        return this._afterOpened;
    }
    /**
     * Gets an observable that emits when the overlay's backdrop has been clicked.
     */
    backdropClick() {
        return this._ref.backdropClick;
    }
    /**
     * Gets an observable that emits when keydown events are targeted on the overlay.
     */
    keydownEvents() {
        return this._ref.keydownEvents;
    }
}

/** Injection token that can be used to access the data that was passed in to a drawer. */
const MTX_DRAWER_DATA = new InjectionToken('MtxDrawerData');
/** Injection token that can be used to specify default drawer options. */
const MTX_DRAWER_DEFAULT_OPTIONS = new InjectionToken('mtx-drawer-default-options');
// Counter for unique drawer ids.
let uniqueId = 0;
/**
 * Service to trigger Material Design bottom sheets.
 */
class MtxDrawer {
    constructor() {
        this._overlay = inject(Overlay);
        this._parentDrawer = inject(MtxDrawer, { optional: true, skipSelf: true });
        this._defaultOptions = inject(MTX_DRAWER_DEFAULT_OPTIONS, { optional: true });
        this._openDrawersAtThisLevel = [];
        this._afterAllDismissedAtThisLevel = new Subject();
        this._afterOpenedAtThisLevel = new Subject();
        this._dialog = inject(Dialog);
        /**
         * Stream that emits when all open drawer have finished closing.
         * Will emit on subscribe if there are no open drawers to begin with.
         */
        this.afterAllDismissed = defer(() => this.openDrawers.length
            ? this._getAfterAllDismissed()
            : this._getAfterAllDismissed().pipe(startWith(undefined)));
    }
    /** Keeps track of the currently-open dialogs. */
    get openDrawers() {
        return this._parentDrawer ? this._parentDrawer.openDrawers : this._openDrawersAtThisLevel;
    }
    /** Stream that emits when a drawer has been opened. */
    get afterOpened() {
        return this._parentDrawer ? this._parentDrawer.afterOpened : this._afterOpenedAtThisLevel;
    }
    _getAfterAllDismissed() {
        const parent = this._parentDrawer;
        return parent ? parent._getAfterAllDismissed() : this._afterAllDismissedAtThisLevel;
    }
    open(componentOrTemplateRef, config) {
        let drawerRef;
        const _config = { ...(this._defaultOptions || new MtxDrawerConfig()), ...config };
        _config.id = _config.id || `mtx-drawer-${uniqueId++}`;
        _config.width =
            _config.position === 'left' || _config.position === 'right'
                ? coerceCssPixelValue(_config.width)
                : '100vw';
        _config.height =
            _config.position === 'top' || _config.position === 'bottom'
                ? coerceCssPixelValue(_config.height)
                : '100vh';
        this._dialog.open(componentOrTemplateRef, {
            ..._config,
            // Disable closing since we need to sync it up to the animation ourselves.
            disableClose: true,
            // Disable closing on detachments so that we can sync up the animation.
            closeOnOverlayDetachments: false,
            container: {
                type: MtxDrawerContainer,
                providers: () => [
                    // Provide our config as the CDK config as well since it has the same interface as the
                    // CDK one, but it contains the actual values passed in by the user for things like
                    // `disableClose` which we disable for the CDK dialog since we handle it ourselves.
                    { provide: MtxDrawerConfig, useValue: _config },
                    { provide: DialogConfig, useValue: _config },
                ],
            },
            scrollStrategy: _config.scrollStrategy || this._overlay.scrollStrategies.block(),
            positionStrategy: this._overlay.position().global()[_config.position]('0'),
            templateContext: () => ({ drawerRef }),
            providers: (cdkRef, _cdkConfig, container) => {
                drawerRef = new MtxDrawerRef(cdkRef, _config, container);
                return [
                    { provide: MtxDrawerRef, useValue: drawerRef },
                    { provide: MTX_DRAWER_DATA, useValue: _config.data },
                ];
            },
        });
        this.openDrawers.push(drawerRef);
        this.afterOpened.next(drawerRef);
        drawerRef.afterDismissed().subscribe(() => {
            const index = this.openDrawers.indexOf(drawerRef);
            if (index > -1) {
                this.openDrawers.splice(index, 1);
                if (!this.openDrawers.length) {
                    this._getAfterAllDismissed().next();
                }
            }
        });
        return drawerRef;
    }
    /**
     * Dismisses all of the currently-open drawers.
     */
    dismissAll() {
        this._dismissDrawers(this.openDrawers);
    }
    /**
     * Finds an open drawer by its id.
     * @param id ID to use when looking up the drawer.
     */
    getDrawerById(id) {
        return this.openDrawers.find(drawer => drawer.id === id);
    }
    ngOnDestroy() {
        // Only dismiss the drawers at this level on destroy
        // since the parent service may still be active.
        this._dismissDrawers(this._openDrawersAtThisLevel);
        this._afterAllDismissedAtThisLevel.complete();
        this._afterOpenedAtThisLevel.complete();
    }
    _dismissDrawers(drawers) {
        let i = drawers.length;
        while (i--) {
            drawers[i].dismiss();
        }
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.2", ngImport: i0, type: MtxDrawer, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    /** @nocollapse */ static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.2.2", ngImport: i0, type: MtxDrawer, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.2", ngImport: i0, type: MtxDrawer, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }] });

class MtxDrawerModule {
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.2", ngImport: i0, type: MtxDrawerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    /** @nocollapse */ static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "19.2.2", ngImport: i0, type: MtxDrawerModule, imports: [DialogModule, PortalModule, MatCommonModule, MtxDrawerContainer], exports: [MtxDrawerContainer, MatCommonModule] }); }
    /** @nocollapse */ static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "19.2.2", ngImport: i0, type: MtxDrawerModule, providers: [MtxDrawer], imports: [DialogModule, PortalModule, MatCommonModule, MatCommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.2", ngImport: i0, type: MtxDrawerModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [DialogModule, PortalModule, MatCommonModule, MtxDrawerContainer],
                    exports: [MtxDrawerContainer, MatCommonModule],
                    providers: [MtxDrawer],
                }]
        }] });

/**
 * Animations used by the drawer.
 * @deprecated No longer used. Will be removed.
 * @breaking-change 21.0.0
 */
const mtxDrawerAnimations = {
    // Represents:
    // drawerState: trigger('state', [
    //   state(
    //     'void, hidden',
    //     style({
    //       'box-shadow': 'none',
    //       'visibility': 'hidden',
    //     })
    //   ),
    //   state(
    //     'visible',
    //     style({
    //       transform: 'none',
    //       visibility: 'visible',
    //     })
    //   ),
    //   transition(
    //     'visible => void, visible => hidden',
    //     animate('400ms cubic-bezier(0.25, 0.8, 0.25, 1)')
    //   ),
    //   transition('void => visible', animate('150ms cubic-bezier(0, 0, 0.2, 1)')),
    // ]),
    /** Animation that shows and hides a drawer. */
    drawerState: {
        type: 7,
        name: 'state',
        definitions: [
            {
                type: 0,
                name: 'void, hidden',
                styles: { type: 6, styles: { 'box-shadow': 'none', 'visibility': 'hidden' }, offset: null },
                options: null,
            },
            {
                type: 0,
                name: 'visible',
                styles: { type: 6, styles: { transform: 'none', visibility: 'visible' }, offset: null },
                options: null,
            },
            {
                type: 1,
                expr: 'visible => void, visible => hidden',
                animation: {
                    type: 4,
                    styles: { type: 6, styles: {}, offset: null },
                    timings: '400ms cubic-bezier(0.25, 0.8, 0.25, 1)',
                },
                options: null,
            },
            {
                type: 1,
                expr: 'void => visible',
                animation: {
                    type: 4,
                    styles: { type: 6, styles: {}, offset: null },
                    timings: '150ms cubic-bezier(0, 0, 0.2, 1)',
                },
                options: null,
            },
        ],
        options: {},
    },
};

/**
 * Generated bundle index. Do not edit.
 */

export { MTX_DRAWER_DATA, MTX_DRAWER_DEFAULT_OPTIONS, MtxDrawer, MtxDrawerConfig, MtxDrawerContainer, MtxDrawerModule, MtxDrawerRef, mtxDrawerAnimations };
//# sourceMappingURL=mtxDrawer.mjs.map
