import { DatetimeAdapter } from '@ng-matero/extensions/core';
import * as i0 from "@angular/core";
export declare class DateFnsDateTimeAdapter extends DatetimeAdapter<Date> {
    /** Inserted by Angular inject() migration for backwards compatibility */
    constructor(...args: unknown[]);
    setLocale(locale: string): void;
    getHour(date: Date): number;
    getMinute(date: Date): number;
    getSecond(date: Date): number;
    isInNextMonth(startDate: Date, endDate: Date): boolean;
    getWeek(date: Date, weekStartsOn: number): number;
    createDatetime(year: number, month: number, day: number, hour: number, minute: number, second: number): Date;
    getFirstDateOfMonth(date: Date): Date;
    getHourNames(): string[];
    getMinuteNames(): string[];
    getSecondsNames(): string[];
    addCalendarHours(date: Date, hours: number): Date;
    addCalendarMinutes(date: Date, minutes: number): Date;
    addCalendarSeconds(date: Date, seconds: number): Date;
    deserialize(value: any): Date | null;
    private getDateInNextMonth;
    static ɵfac: i0.ɵɵFactoryDeclaration<DateFnsDateTimeAdapter, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DateFnsDateTimeAdapter>;
}
