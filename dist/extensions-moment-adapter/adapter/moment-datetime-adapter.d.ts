import { DatetimeAdapter } from '@ng-matero/extensions/core';
import { Moment } from 'moment';
import * as i0 from "@angular/core";
export declare class MomentDatetimeAdapter extends DatetimeAdapter<Moment> {
    private _localeData;
    private _useUtc;
    /** Inserted by Angular inject() migration for backwards compatibility */
    constructor(...args: unknown[]);
    setLocale(locale: string): void;
    getHour(date: Moment): number;
    getMinute(date: Moment): number;
    getSecond(date: Moment): number;
    isInNextMonth(startDate: Moment, endDate: Moment): boolean;
    getWeek(date: moment.Moment, firstDayOfWeek: number): number;
    createDatetime(year: number, month: number, date: number, hour: number, minute: number, second: number): Moment;
    getFirstDateOfMonth(date: Moment): Moment;
    getHourNames(): string[];
    getMinuteNames(): string[];
    getSecondsNames(): string[];
    addCalendarHours(date: Moment, hours: number): Moment;
    addCalendarMinutes(date: Moment, minutes: number): Moment;
    addCalendarSeconds(date: Moment, seconds: number): Moment;
    deserialize(value: any): Moment | null;
    private getDateInNextMonth;
    static ɵfac: i0.ɵɵFactoryDeclaration<MomentDatetimeAdapter, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MomentDatetimeAdapter>;
}
