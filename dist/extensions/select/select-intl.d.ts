import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export declare class MtxSelectIntl {
    private _defaultOptions;
    /**
     * Stream to emit from when labels are changed. Use this to notify components when the labels have
     * changed after initialization.
     */
    readonly changes: Subject<void>;
    placeholder: string | undefined;
    notFoundText: string;
    typeToSearchText: string;
    addTagText: string;
    loadingText: string;
    clearAllText: string;
    static ɵfac: i0.ɵɵFactoryDeclaration<MtxSelectIntl, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MtxSelectIntl>;
}
