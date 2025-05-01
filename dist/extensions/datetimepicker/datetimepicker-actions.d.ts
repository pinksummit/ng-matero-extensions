import { AfterViewInit, OnDestroy, TemplateRef } from '@angular/core';
import { MtxDatetimepicker } from './datetimepicker';
import * as i0 from "@angular/core";
export declare class MtxDatetimepickerApply<D> {
    _datetimepicker: MtxDatetimepicker<D>;
    /** Inserted by Angular inject() migration for backwards compatibility */
    constructor(...args: unknown[]);
    static ɵfac: i0.ɵɵFactoryDeclaration<MtxDatetimepickerApply<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<MtxDatetimepickerApply<any>, "[mtxDatetimepickerApply]", never, {}, {}, never, never, true, never>;
}
export declare class MtxDatetimepickerCancel<D> {
    _datetimepicker: MtxDatetimepicker<D>;
    /** Inserted by Angular inject() migration for backwards compatibility */
    constructor(...args: unknown[]);
    static ɵfac: i0.ɵɵFactoryDeclaration<MtxDatetimepickerCancel<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<MtxDatetimepickerCancel<any>, "[mtxDatetimepickerCancel]", never, {}, {}, never, never, true, never>;
}
export declare class MtxDatetimepickerClear<D> {
    _datetimepicker: MtxDatetimepicker<D>;
    /** Inserted by Angular inject() migration for backwards compatibility */
    constructor(...args: unknown[]);
    static ɵfac: i0.ɵɵFactoryDeclaration<MtxDatetimepickerClear<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<MtxDatetimepickerClear<any>, "[mtxDatetimepickerClear]", never, {}, {}, never, never, true, never>;
}
export declare class MtxDatetimepickerActions<D> implements AfterViewInit, OnDestroy {
    private _datetimepicker;
    private _viewContainerRef;
    _template: TemplateRef<unknown>;
    private _portal;
    /** Inserted by Angular inject() migration for backwards compatibility */
    constructor(...args: unknown[]);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MtxDatetimepickerActions<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MtxDatetimepickerActions<any>, "mtx-datetimepicker-actions", never, {}, {}, never, ["*"], true, never>;
}
