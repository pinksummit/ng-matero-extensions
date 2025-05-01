import { CdkDialogContainer } from '@angular/cdk/dialog';
import { CdkPortalOutlet } from '@angular/cdk/portal';
import { EventEmitter, OnDestroy } from '@angular/core';
import { MtxDrawerConfig } from './drawer-config';
import * as i0 from "@angular/core";
/**
 * Internal component that wraps user-provided drawer content.
 * @docs-private
 */
export declare class MtxDrawerContainer extends CdkDialogContainer<MtxDrawerConfig> implements OnDestroy {
    /** The portal outlet inside of this container into which the content will be loaded. */
    _portalOutlet: CdkPortalOutlet;
    protected _animationsDisabled: boolean;
    /** The state of the drawer animations. */
    _animationState: 'void' | 'visible' | 'hidden';
    /** Emits whenever the state of the animation changes. */
    _animationStateChanged: EventEmitter<{
        toState: "visible" | "hidden";
        phase: "start" | "done";
    }>;
    /** Whether the component has been destroyed. */
    private _destroyed;
    get _drawerPosition(): string;
    protected _contentAttached(): void;
    /** Begin animation of bottom sheet entrance into view. */
    enter(): void;
    /** Begin animation of the bottom sheet exiting from view. */
    exit(): void;
    ngOnDestroy(): void;
    private _simulateAnimation;
    protected _handleAnimationEvent(isStart: boolean, animationName: string): void;
    protected _captureInitialFocus(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MtxDrawerContainer, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MtxDrawerContainer, "mtx-drawer-container", never, {}, {}, never, never, true, never>;
}
