import { AfterContentInit, EventEmitter } from '@angular/core';
import { DatetimeAdapter } from '@ng-matero/extensions/core';
import { MtxCalendarBody, MtxCalendarCell } from './calendar-body';
import { MtxDatetimepickerType } from './datetimepicker-types';
import * as i0 from "@angular/core";
/**
 * An internal component used to display a single year in the datetimepicker.
 * @docs-private
 */
export declare class MtxYearView<D> implements AfterContentInit {
    _adapter: DatetimeAdapter<D>;
    private _dir;
    private _dateFormats;
    type: MtxDatetimepickerType;
    /** A function used to filter which dates are selectable. */
    dateFilter: (date: D) => boolean;
    /** Emits when a new month is selected. */
    selectedChange: EventEmitter<D>;
    /** Emits when any date is selected. */
    readonly _userSelection: EventEmitter<void>;
    /** Emits when any date is activated. */
    readonly activeDateChange: EventEmitter<D>;
    /** The body of calendar table */
    _mtxCalendarBody: MtxCalendarBody;
    /** Grid of calendar cells representing the months of the year. */
    _months: MtxCalendarCell[][];
    /** The label for this year (e.g. "2017"). */
    _yearLabel: string;
    /** The month in this year that today falls on. Null if today is in a different year. */
    _todayMonth: number | null;
    /**
     * The month in this year that the selected Date falls on.
     * Null if the selected Date is in a different year.
     */
    _selectedMonth: number | null;
    /** Inserted by Angular inject() migration for backwards compatibility */
    constructor(...args: unknown[]);
    /** The date to display in this year view (everything other than the year is ignored). */
    get activeDate(): D;
    set activeDate(value: D);
    private _activeDate;
    /** The currently selected date. */
    get selected(): D | null;
    set selected(value: D | null);
    private _selected;
    ngAfterContentInit(): void;
    /** Handles when a new month is selected. */
    _monthSelected(month: number): void;
    /** Initializes this month view. */
    private _init;
    /**
     * Gets the month in this year that the given Date falls on.
     * Returns null if the given Date is in another year.
     */
    private _getMonthInCurrentYear;
    /** Creates an MdCalendarCell for the given month. */
    private _createCellForMonth;
    /** Whether the given month is enabled. */
    private _isMonthEnabled;
    /** Handles keydown events on the calendar body when calendar is in year view. */
    _handleCalendarBodyKeydown(event: KeyboardEvent): void;
    /** Focuses the active cell after the microtask queue is empty. */
    _focusActiveCell(): void;
    /** Determines whether the user has the RTL layout direction. */
    private _isRtl;
    static ɵfac: i0.ɵɵFactoryDeclaration<MtxYearView<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MtxYearView<any>, "mtx-year-view", ["mtxYearView"], { "type": { "alias": "type"; "required": false; }; "dateFilter": { "alias": "dateFilter"; "required": false; }; "activeDate": { "alias": "activeDate"; "required": false; }; "selected": { "alias": "selected"; "required": false; }; }, { "selectedChange": "selectedChange"; "_userSelection": "_userSelection"; "activeDateChange": "activeDateChange"; }, never, never, true, never>;
}
