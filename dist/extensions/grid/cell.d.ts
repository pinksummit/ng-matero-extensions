import { DoCheck, EventEmitter, KeyValueChangeRecord, OnInit } from '@angular/core';
import { MtxGridColumn, MtxGridColumnButton } from './interfaces';
import * as i0 from "@angular/core";
export declare class MtxGridCell implements OnInit, DoCheck {
    private _dialog;
    private _utils;
    private _differs;
    private _changeDetectorRef;
    /** Row data */
    rowData: Record<string, any>;
    /** Column definition */
    colDef: MtxGridColumn;
    /** Table data */
    data: any[];
    /** Whether show summary */
    summary: boolean;
    /** Placeholder for the empty value (`null`, `''`, `[]`) */
    placeholder: string;
    rowDataChange: EventEmitter<KeyValueChangeRecord<string, any>>;
    private rowDataDiffer?;
    rowChangeRecord?: KeyValueChangeRecord<string, any>;
    get _value(): string;
    ngOnInit(): void;
    ngDoCheck(): void;
    private _applyChanges;
    _getText(value: any): any;
    _getTooltip(value: any): any;
    _getFormatterTooltip(value: any): any;
    _onActionClick(event: MouseEvent, btn: MtxGridColumnButton, rowData: Record<string, any>): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MtxGridCell, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MtxGridCell, "mtx-grid-cell", ["mtxGridCell"], { "rowData": { "alias": "rowData"; "required": false; }; "colDef": { "alias": "colDef"; "required": false; }; "data": { "alias": "data"; "required": false; }; "summary": { "alias": "summary"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; }, { "rowDataChange": "rowDataChange"; }, never, never, true, never>;
}
