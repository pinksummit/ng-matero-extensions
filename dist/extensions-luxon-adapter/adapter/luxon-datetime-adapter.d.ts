import { DatetimeAdapter } from '@ng-matero/extensions/core';
import { DateTime } from 'luxon';
import * as i0 from "@angular/core";
export declare class LuxonDatetimeAdapter extends DatetimeAdapter<DateTime> {
    private _useUtc;
    /** Inserted by Angular inject() migration for backwards compatibility */
    constructor(...args: unknown[]);
    setLocale(locale: string): void;
    getHour(date: DateTime): number;
    getMinute(date: DateTime): number;
    getSecond(date: DateTime): number;
    isInNextMonth(startDate: DateTime, endDate: DateTime): boolean;
    getWeek(date: DateTime, firstDayOfWeek: number): number;
    createDatetime(year: number, month: number, day: number, hour: number, minute: number, second: number): DateTime;
    getFirstDateOfMonth(date: DateTime): DateTime;
    getHourNames(): string[];
    getMinuteNames(): string[];
    getSecondsNames(): string[];
    addCalendarHours(date: DateTime, hours: number): DateTime;
    addCalendarMinutes(date: DateTime, minutes: number): DateTime;
    addCalendarSeconds(date: DateTime, seconds: number): DateTime;
    deserialize(value: any): DateTime | null;
    private getDateInNextMonth;
    static ɵfac: i0.ɵɵFactoryDeclaration<LuxonDatetimeAdapter, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LuxonDatetimeAdapter>;
}
