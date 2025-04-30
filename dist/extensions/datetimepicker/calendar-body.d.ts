import { EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * An internal class that represents the data corresponding to a single calendar cell.
 * @docs-private
 */
export declare class MtxCalendarCell {
    value: number;
    displayValue: string;
    ariaLabel: string;
    enabled: boolean;
    isWeekNumber?: boolean | undefined;
    readonly id: number;
    constructor(value: number, displayValue: string, ariaLabel: string, enabled: boolean, isWeekNumber?: boolean | undefined);
}
/**
 * An internal component used to display calendar data in a table.
 * @docs-private
 */
export declare class MtxCalendarBody implements OnChanges {
    private _elementRef;
    private _ngZone;
    private _injector;
    /** The label for the table. (e.g. "Jan 2017"). */
    label: string;
    /** The cells to display in the table. */
    rows: MtxCalendarCell[][];
    /**
     * The aspect ratio (width / height) to use for the cells in the table. This aspect ratio will be
     * maintained even as the table resizes.
     */
    cellAspectRatio: number;
    /** The value in the table that corresponds to today. */
    todayValue: number;
    /** The value in the table that is currently selected. */
    selectedValue: number;
    /** The minimum number of free cells needed to fit the label in the first row. */
    labelMinRequiredCells: number;
    /** The number of columns in the table. */
    numCols: number;
    /** Whether to allow selection of disabled cells. */
    allowDisabledSelection: boolean;
    /** The cell number of the active cell in the table. */
    activeCell: number;
    /** Emits when a new value is selected. */
    selectedValueChange: EventEmitter<number>;
    /** The number of blank cells to put at the beginning for the first row. */
    _firstRowOffset: number;
    /** Padding for the individual date cells. */
    _cellPadding: string;
    /** Width of an individual cell. */
    _cellWidth: string;
    _cellClicked(cell: MtxCalendarCell): void;
    _emitActiveDateChange(cell: MtxCalendarCell, event: FocusEvent): void;
    _isActiveCell(rowIndex: number, colIndex: number): boolean;
    /**
     * Tracking function for rows based on their identity. Ideally we would use some sort of
     * key on the row, but that would require a breaking change for the `rows` input. We don't
     * use the built-in identity tracking, because it logs warnings.
     */
    _trackRow: (row: MtxCalendarCell[]) => MtxCalendarCell[];
    ngOnChanges(changes: SimpleChanges): void;
    _focusActiveCell(movePreview?: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MtxCalendarBody, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MtxCalendarBody, "[mtx-calendar-body]", ["mtxCalendarBody"], { "label": { "alias": "label"; "required": false; }; "rows": { "alias": "rows"; "required": false; }; "cellAspectRatio": { "alias": "cellAspectRatio"; "required": false; }; "todayValue": { "alias": "todayValue"; "required": false; }; "selectedValue": { "alias": "selectedValue"; "required": false; }; "labelMinRequiredCells": { "alias": "labelMinRequiredCells"; "required": false; }; "numCols": { "alias": "numCols"; "required": false; }; "allowDisabledSelection": { "alias": "allowDisabledSelection"; "required": false; }; "activeCell": { "alias": "activeCell"; "required": false; }; }, { "selectedValueChange": "selectedValueChange"; }, never, never, true, never>;
}
