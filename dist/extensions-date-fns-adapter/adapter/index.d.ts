import { Provider } from '@angular/core';
import { MtxDatetimeFormats } from '@ng-matero/extensions/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material-date-fns-adapter";
export * from './date-fns-adapter';
export * from './date-fns-formats';
export declare class DateFnsDatetimeModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<DateFnsDatetimeModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<DateFnsDatetimeModule, never, [typeof i1.DateFnsModule], never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<DateFnsDatetimeModule>;
}
export declare function provideDateFnsDatetimeAdapter(formats?: MtxDatetimeFormats): Provider[];
export declare class MtxDateFnsDatetimeModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<MtxDateFnsDatetimeModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<MtxDateFnsDatetimeModule, never, never, never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<MtxDateFnsDatetimeModule>;
}
/**
 * @deprecated Use `MtxDateFnsDatetimeModule` instead.
 */
export declare const MatDateFnsDatetimeModule: typeof MtxDateFnsDatetimeModule;
