import * as i0 from '@angular/core';
import { inject, Injectable, NgModule } from '@angular/core';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateModule, MomentDateAdapter } from '@angular/material-moment-adapter';
import { MAT_DATE_LOCALE, DateAdapter } from '@angular/material/core';
import { DatetimeAdapter, MTX_DATETIME_FORMATS } from '@ng-matero/extensions/core';
import * as _moment from 'moment';

const moment = 'default' in _moment ? _moment.default : _moment;
function range(length, valueFunction) {
    const valuesArray = Array(length);
    for (let i = 0; i < length; i++) {
        valuesArray[i] = valueFunction(i);
    }
    return valuesArray;
}
class MomentDatetimeAdapter extends DatetimeAdapter {
    constructor() {
        super();
        this._useUtc = false;
        const matDateLocale = inject(MAT_DATE_LOCALE, { optional: true });
        const matMomentAdapterOptions = inject(MAT_MOMENT_DATE_ADAPTER_OPTIONS, { optional: true });
        this.setLocale(matDateLocale || moment.locale());
        this._useUtc = matMomentAdapterOptions?.useUtc || false;
    }
    setLocale(locale) {
        super.setLocale(locale);
        const momentLocaleData = moment.localeData(locale);
        this._localeData = {
            firstDayOfWeek: momentLocaleData.firstDayOfWeek(),
            longMonths: momentLocaleData.months(),
            shortMonths: momentLocaleData.monthsShort(),
            dates: range(31, i => super.createDate(2017, 0, i + 1).format('D')),
            hours: range(24, i => this.createDatetime(2017, 0, 1, i, 0, 0).format('H')),
            minutes: range(60, i => this.createDatetime(2017, 0, 1, 1, i, 0).format('m')),
            seconds: range(60, i => this.createDatetime(2017, 0, 1, 0, 0, i).format('s')),
            longDaysOfWeek: momentLocaleData.weekdays(),
            shortDaysOfWeek: momentLocaleData.weekdaysShort(),
            narrowDaysOfWeek: momentLocaleData.weekdaysMin(),
        };
    }
    getHour(date) {
        return super.clone(date).hour();
    }
    getMinute(date) {
        return super.clone(date).minute();
    }
    getSecond(date) {
        return super.clone(date).second();
    }
    isInNextMonth(startDate, endDate) {
        const nextMonth = this.getDateInNextMonth(startDate);
        return super.sameMonthAndYear(nextMonth, endDate);
    }
    getWeek(date, firstDayOfWeek) {
        return super.clone(date).week();
    }
    createDatetime(year, month, date, hour, minute, second) {
        // Check for invalid month and date (except upper bound on date which we have to check after
        // creating the Date).
        if (month < 0 || month > 11) {
            throw Error(`Invalid month index "${month}". Month index has to be between 0 and 11.`);
        }
        if (date < 1) {
            throw Error(`Invalid date "${date}". Date has to be greater than 0.`);
        }
        if (hour < 0 || hour > 23) {
            throw Error(`Invalid hour "${hour}". Hour has to be between 0 and 23.`);
        }
        if (minute < 0 || minute > 59) {
            throw Error(`Invalid minute "${minute}". Minute has to be between 0 and 59.`);
        }
        if (second < 0 || second > 59) {
            throw Error(`Invalid second "${second}". Second has to be between 0 and 59.`);
        }
        let result;
        if (this._useUtc) {
            result = moment.utc({ year, month, date, hour, minute, second });
        }
        else {
            result = moment({ year, month, date, hour, minute, second });
        }
        // If the result isn't valid, the date must have been out of bounds for this month.
        if (!result.isValid()) {
            throw Error(`Invalid date "${date}" for month with index "${month}".`);
        }
        return result.locale(this.locale);
    }
    getFirstDateOfMonth(date) {
        return super.clone(date).startOf('month');
    }
    getHourNames() {
        return this._localeData.hours;
    }
    getMinuteNames() {
        return this._localeData.minutes;
    }
    getSecondsNames() {
        return this._localeData.seconds;
    }
    addCalendarHours(date, hours) {
        return super.clone(date).add({ hours });
    }
    addCalendarMinutes(date, minutes) {
        return super.clone(date).add({ minutes });
    }
    addCalendarSeconds(date, seconds) {
        return super.clone(date).add({ seconds });
    }
    deserialize(value) {
        return this._delegate.deserialize(value);
    }
    getDateInNextMonth(date) {
        return super.clone(date).date(1).add({ month: 1 });
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.2", ngImport: i0, type: MomentDatetimeAdapter, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    /** @nocollapse */ static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.2.2", ngImport: i0, type: MomentDatetimeAdapter }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.2", ngImport: i0, type: MomentDatetimeAdapter, decorators: [{
            type: Injectable
        }], ctorParameters: () => [] });

const MTX_MOMENT_DATETIME_FORMATS = {
    parse: {
        dateInput: 'L',
        monthInput: 'MMMM',
        yearInput: 'YYYY',
        datetimeInput: 'L LT',
        timeInput: 'LT',
    },
    display: {
        dateInput: 'L',
        monthInput: 'MMMM',
        yearInput: 'YYYY',
        datetimeInput: 'L LT',
        timeInput: 'LT',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
        popupHeaderDateLabel: 'ddd, DD MMM',
    },
};

class MomentDatetimeModule {
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.2", ngImport: i0, type: MomentDatetimeModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    /** @nocollapse */ static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "19.2.2", ngImport: i0, type: MomentDatetimeModule, imports: [MomentDateModule] }); }
    /** @nocollapse */ static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "19.2.2", ngImport: i0, type: MomentDatetimeModule, providers: [{ provide: DatetimeAdapter, useClass: MomentDatetimeAdapter }], imports: [MomentDateModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.2", ngImport: i0, type: MomentDatetimeModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [MomentDateModule],
                    providers: [{ provide: DatetimeAdapter, useClass: MomentDatetimeAdapter }],
                }]
        }] });
function provideMomentDatetimeAdapter(formats = MTX_MOMENT_DATETIME_FORMATS, options) {
    const providers = [
        {
            provide: DateAdapter,
            useClass: MomentDateAdapter,
            deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
        },
        { provide: DatetimeAdapter, useClass: MomentDatetimeAdapter },
        { provide: MTX_DATETIME_FORMATS, useValue: formats },
    ];
    if (options) {
        providers.push({ provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: options });
    }
    return providers;
}
class MtxMomentDatetimeModule {
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.2", ngImport: i0, type: MtxMomentDatetimeModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    /** @nocollapse */ static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "19.2.2", ngImport: i0, type: MtxMomentDatetimeModule }); }
    /** @nocollapse */ static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "19.2.2", ngImport: i0, type: MtxMomentDatetimeModule, providers: [provideMomentDatetimeAdapter()] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.2", ngImport: i0, type: MtxMomentDatetimeModule, decorators: [{
            type: NgModule,
            args: [{
                    providers: [provideMomentDatetimeAdapter()],
                }]
        }] });
/**
 * @deprecated Use `MtxMomentDatetimeModule` instead.
 */
const MatMomentDatetimeModule = MtxMomentDatetimeModule;

/**
 * Generated bundle index. Do not edit.
 */

export { MTX_MOMENT_DATETIME_FORMATS, MatMomentDatetimeModule, MomentDatetimeAdapter, MomentDatetimeModule, MtxMomentDatetimeModule, provideMomentDatetimeAdapter };
//# sourceMappingURL=extensions-moment-adapter.mjs.map
