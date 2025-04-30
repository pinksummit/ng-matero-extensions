import { Provider } from '@angular/core';
import { MtxDatetimeFormats } from '@ng-matero/extensions/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material-luxon-adapter";
export * from './luxon-datetime-adapter';
export * from './luxon-datetime-formats';
export declare class LuxonDatetimeModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<LuxonDatetimeModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<LuxonDatetimeModule, never, [typeof i1.LuxonDateModule], never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<LuxonDatetimeModule>;
}
export declare function provideLuxonDatetimeAdapter(formats?: MtxDatetimeFormats): Provider[];
export declare class MtxLuxonDatetimeModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<MtxLuxonDatetimeModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<MtxLuxonDatetimeModule, never, never, never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<MtxLuxonDatetimeModule>;
}
/**
 * @deprecated Use `MtxLuxonDatetimeModule` instead.
 */
export declare const MatLuxonDatetimeModule: typeof MtxLuxonDatetimeModule;
