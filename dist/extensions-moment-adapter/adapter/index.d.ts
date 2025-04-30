import { Provider } from '@angular/core';
import { MatMomentDateAdapterOptions } from '@angular/material-moment-adapter';
import { MtxDatetimeFormats } from '@ng-matero/extensions/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material-moment-adapter";
export * from './moment-datetime-adapter';
export * from './moment-datetime-formats';
export declare class MomentDatetimeModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<MomentDatetimeModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<MomentDatetimeModule, never, [typeof i1.MomentDateModule], never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<MomentDatetimeModule>;
}
export declare function provideMomentDatetimeAdapter(formats?: MtxDatetimeFormats, options?: MatMomentDateAdapterOptions): Provider[];
export declare class MtxMomentDatetimeModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<MtxMomentDatetimeModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<MtxMomentDatetimeModule, never, never, never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<MtxMomentDatetimeModule>;
}
/**
 * @deprecated Use `MtxMomentDatetimeModule` instead.
 */
export declare const MatMomentDatetimeModule: typeof MtxMomentDatetimeModule;
