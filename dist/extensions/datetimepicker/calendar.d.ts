import { ComponentType, Portal, TemplatePortal } from '@angular/cdk/portal';
import { AfterContentInit, AfterViewChecked, EventEmitter, OnDestroy } from '@angular/core';
import { MtxClockView } from './clock';
import { MtxDatetimepickerFilterType } from './datetimepicker-filtertype';
import { MtxAMPM, MtxCalendarView, MtxDatetimepickerType } from './datetimepicker-types';
import { MtxMonthView } from './month-view';
import { MtxMultiYearView } from './multi-year-view';
import { MtxTimeView } from './time-view';
import { MtxYearView } from './year-view';
import * as i0 from "@angular/core";
/**
 * A calendar that is used as part of the datetimepicker.
 * @docs-private
 */
export declare class MtxCalendar<D> implements AfterViewChecked, AfterContentInit, OnDestroy {
    private _intl;
    private _changeDetectorRef;
    private _ngZone;
    private _adapter;
    private _dateFormats;
    /** Whether to show multi-year view. */
    multiYearSelector: boolean;
    /** Whether the clock uses 12 hour format. */
    twelvehour: boolean;
    /** Whether to show week numbers in month view */
    showWeekNumbers: boolean;
    /** Whether the calendar should be started in month or year view. */
    startView: MtxCalendarView;
    /** Step over minutes. */
    timeInterval: number;
    /** A function used to filter which dates are selectable. */
    dateFilter: (date: D, type: MtxDatetimepickerFilterType) => boolean;
    /** Prevent user to select same date time */
    preventSameDateTimeSelection: boolean;
    /** Input for custom header component */
    headerComponent?: ComponentType<any>;
    /** Input for action buttons. */
    actionsPortal: TemplatePortal | null;
    /** Includes the option to enter seconds. */
    withSeconds: boolean;
    /** Emits when the currently selected date changes. */
    selectedChange: EventEmitter<D>;
    /** Emits when the view has been changed. */
    viewChanged: EventEmitter<MtxCalendarView>;
    _userSelection: EventEmitter<void>;
    /** Reference to the current month view component. */
    monthView: MtxMonthView<D>;
    /** Reference to the current year view component. */
    yearView: MtxYearView<D>;
    /** Reference to the current multi-year view component. */
    multiYearView: MtxMultiYearView<D>;
    /** Reference to the current time view component. */
    timeView: MtxTimeView<D>;
    _AMPM: MtxAMPM;
    _clockView: MtxClockView;
    /** A portal containing the header component. */
    _calendarHeaderPortal: Portal<any>;
    private _intlChanges;
    private _clampedActiveDate;
    /**
     * Used for scheduling that focus should be moved to the active cell on the next tick.
     * We need to schedule it, rather than do it immediately, because we have to wait
     * for Angular to re-evaluate the view children.
     */
    private _moveFocusOnNextTick;
    /** Inserted by Angular inject() migration for backwards compatibility */
    constructor(...args: unknown[]);
    /** The display type of datetimepicker. */
    get type(): MtxDatetimepickerType;
    set type(value: MtxDatetimepickerType);
    private _type;
    /** A date representing the period (month or year) to start the calendar in. */
    get startAt(): D | null;
    set startAt(value: D | null);
    private _startAt;
    /**
     * Whether the calendar is in time mode. In time mode the calendar clock gets time input
     * elements rather then just clock. When `touchUi` is enabled this will be disabled.
     */
    timeInput: boolean;
    /** Whether the time input should be auto-focused after view init.  */
    timeInputAutoFocus: boolean;
    /** The currently selected date. */
    get selected(): D | null;
    set selected(value: D | null);
    private _selected;
    /** The minimum selectable date. */
    get minDate(): D | null;
    set minDate(value: D | null);
    private _minDate;
    /** The maximum selectable date. */
    get maxDate(): D | null;
    set maxDate(value: D | null);
    private _maxDate;
    /**
     * The current active date. This determines which time period is shown and which date is
     * highlighted when using keyboard navigation.
     */
    get _activeDate(): D;
    set _activeDate(value: D);
    /** Whether the calendar is in month view. */
    get currentView(): MtxCalendarView;
    set currentView(value: MtxCalendarView);
    private _currentView;
    get _yearPeriodText(): string;
    get _yearButtonText(): string;
    get _yearButtonLabel(): string;
    get _dateButtonText(): string;
    get _dateButtonLabel(): string;
    get _hoursButtonText(): string;
    get _hourButtonLabel(): string;
    get _minutesButtonText(): string;
    get _minuteButtonLabel(): string;
    get _secondsButtonText(): string;
    get _secondButtonLabel(): string;
    get _prevButtonLabel(): string;
    get _nextButtonLabel(): string;
    /** Date filter for the month and year views. */
    _dateFilterForViews: (date: D) => boolean;
    _userSelected(): void;
    ngAfterContentInit(): void;
    ngAfterViewChecked(): void;
    ngOnDestroy(): void;
    /** Handles date selection in the month view. */
    _dateSelected(date: D): void;
    /** Handles month selection in the year view. */
    _monthSelected(month: D): void;
    /** Handles year selection in the multi year view. */
    _yearSelected(year: D): void;
    _timeSelected(date: D): void;
    _onActiveDateChange(date: D): void;
    _selectAMPM(date: D): void;
    _ampmClicked(source: MtxAMPM): void;
    _yearClicked(): void;
    _dateClicked(): void;
    _hoursClicked(): void;
    _minutesClicked(): void;
    _secondsClicked(): void;
    /** Handles user clicks on the previous button. */
    _previousClicked(): void;
    /** Handles user clicks on the next button. */
    _nextClicked(): void;
    /** Whether the previous period button is enabled. */
    _previousEnabled(): boolean;
    /** Whether the next period button is enabled. */
    _nextEnabled(): boolean;
    /** Whether the two dates represent the same view in the current view mode (month or year). */
    private _isSameView;
    /** Handles keydown events on the calendar body when calendar is in month view. */
    /** Handles keydown events on the calendar body when calendar is in year view. */
    /**
     * Determine the date for the month that comes before the given month in the same column in the
     * calendar table.
     */
    private _prevMonthInSameCol;
    /**
     * Determine the date for the month that comes after the given month in the same column in the
     * calendar table.
     */
    private _nextMonthInSameCol;
    private _2digit;
    /** Returns the component instance that corresponds to the current calendar view. */
    private _getCurrentViewComponent;
    /** Focuses the active date. */
    focusActiveCell(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MtxCalendar<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MtxCalendar<any>, "mtx-calendar", ["mtxCalendar"], { "multiYearSelector": { "alias": "multiYearSelector"; "required": false; }; "twelvehour": { "alias": "twelvehour"; "required": false; }; "showWeekNumbers": { "alias": "showWeekNumbers"; "required": false; }; "startView": { "alias": "startView"; "required": false; }; "timeInterval": { "alias": "timeInterval"; "required": false; }; "dateFilter": { "alias": "dateFilter"; "required": false; }; "preventSameDateTimeSelection": { "alias": "preventSameDateTimeSelection"; "required": false; }; "headerComponent": { "alias": "headerComponent"; "required": false; }; "actionsPortal": { "alias": "actionsPortal"; "required": false; }; "withSeconds": { "alias": "withSeconds"; "required": false; }; "type": { "alias": "type"; "required": false; }; "startAt": { "alias": "startAt"; "required": false; }; "timeInput": { "alias": "timeInput"; "required": false; }; "timeInputAutoFocus": { "alias": "timeInputAutoFocus"; "required": false; }; "selected": { "alias": "selected"; "required": false; }; "minDate": { "alias": "minDate"; "required": false; }; "maxDate": { "alias": "maxDate"; "required": false; }; }, { "selectedChange": "selectedChange"; "viewChanged": "viewChanged"; "_userSelection": "_userSelection"; }, never, never, true, never>;
    static ngAcceptInputType_multiYearSelector: unknown;
    static ngAcceptInputType_twelvehour: unknown;
    static ngAcceptInputType_showWeekNumbers: unknown;
    static ngAcceptInputType_preventSameDateTimeSelection: unknown;
    static ngAcceptInputType_timeInput: unknown;
    static ngAcceptInputType_timeInputAutoFocus: unknown;
}
