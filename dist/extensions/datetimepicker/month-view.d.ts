import { AfterContentInit, EventEmitter } from '@angular/core';
import { DatetimeAdapter } from '@ng-matero/extensions/core';
import { MtxCalendarBody, MtxCalendarCell } from './calendar-body';
import { MtxDatetimepickerType } from './datetimepicker-types';
import * as i0 from "@angular/core";
/**
 * An internal component used to display a single month in the datetimepicker.
 * @docs-private
 */
export declare class MtxMonthView<D> implements AfterContentInit {
    _adapter: DatetimeAdapter<D>;
    private _dir;
    private _dateFormats;
    private _intl;
    type: MtxDatetimepickerType;
    /** A function used to filter which dates are selectable. */
    dateFilter: (date: D) => boolean;
    /** Whether to show week numbers */
    showWeekNumbers: boolean;
    /** Emits when a new date is selected. */
    selectedChange: EventEmitter<D>;
    /** Emits when any date is selected. */
    readonly _userSelection: EventEmitter<void>;
    /** Emits when any date is activated. */
    readonly activeDateChange: EventEmitter<D>;
    /** The body of calendar table */
    _mtxCalendarBody: MtxCalendarBody;
    /** Grid of calendar cells representing the dates of the month. */
    _weeks: MtxCalendarCell[][];
    /** The number of blank cells in the first row before the 1st of the month. */
    _firstWeekOffset: number;
    /**
     * The date of the month that the currently selected Date falls on.
     * Null if the currently selected Date is in another month.
     */
    _selectedDate: number | null;
    /** The date of the month that today falls on. Null if today is in another month. */
    _todayDate: number | null;
    /** The names of the weekdays. */
    _weekdays: {
        long: string;
        narrow: string;
        id: number;
    }[];
    /** Inserted by Angular inject() migration for backwards compatibility */
    constructor(...args: unknown[]);
    private _activeDate;
    /**
     * The date to display in this month view (everything other than the month and year is ignored).
     */
    get activeDate(): D;
    set activeDate(value: D);
    /** The currently selected date. */
    get selected(): D | null;
    set selected(value: D | null);
    private _selected;
    ngAfterContentInit(): void;
    /** Handles when a new date is selected. */
    _dateSelected(date: number): void;
    /** Initializes this month view. */
    private _init;
    /** Initializes the weekdays. */
    private _initWeekdays;
    /** Creates MdCalendarCells for the dates in this month. */
    private _createWeekCells;
    /**
     * Gets the date in this month that the given Date falls on.
     * Returns null if the given Date is in another month.
     */
    private _getDateInCurrentMonth;
    /** Handles keydown events on the calendar body when calendar is in month view. */
    _handleCalendarBodyKeydown(event: KeyboardEvent): void;
    /** Focuses the active cell after the microtask queue is empty. */
    _focusActiveCell(movePreview?: boolean): void;
    /** Determines whether the user has the RTL layout direction. */
    private _isRtl;
    static ɵfac: i0.ɵɵFactoryDeclaration<MtxMonthView<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MtxMonthView<any>, "mtx-month-view", ["mtxMonthView"], { "type": { "alias": "type"; "required": false; }; "dateFilter": { "alias": "dateFilter"; "required": false; }; "showWeekNumbers": { "alias": "showWeekNumbers"; "required": false; }; "activeDate": { "alias": "activeDate"; "required": false; }; "selected": { "alias": "selected"; "required": false; }; }, { "selectedChange": "selectedChange"; "_userSelection": "_userSelection"; "activeDateChange": "activeDateChange"; }, never, never, true, never>;
    static ngAcceptInputType_showWeekNumbers: unknown;
}
