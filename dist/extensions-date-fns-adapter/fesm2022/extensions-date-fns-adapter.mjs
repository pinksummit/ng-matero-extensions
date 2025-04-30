import * as i0 from '@angular/core';
import { inject, Injectable, NgModule } from '@angular/core';
import { DateFnsModule, DateFnsAdapter } from '@angular/material-date-fns-adapter';
import { MAT_DATE_LOCALE, DateAdapter } from '@angular/material/core';
import { DatetimeAdapter, MTX_DATETIME_FORMATS } from '@ng-matero/extensions/core';
import { getHours, getMinutes, getSeconds, getWeek, isValid, startOfMonth, addHours, addMinutes, addSeconds, addMonths } from 'date-fns';

function range(length, valueFunction) {
    const valuesArray = Array(length);
    for (let i = 0; i < length; i++) {
        valuesArray[i] = valueFunction(i);
    }
    return valuesArray;
}
class DateFnsDateTimeAdapter extends DatetimeAdapter {
    constructor() {
        super();
        const matDateLocale = inject(MAT_DATE_LOCALE, { optional: true });
        this.setLocale(matDateLocale);
    }
    setLocale(locale) {
        super.setLocale(locale);
    }
    getHour(date) {
        return getHours(date);
    }
    getMinute(date) {
        return getMinutes(date);
    }
    getSecond(date) {
        return getSeconds(date);
    }
    isInNextMonth(startDate, endDate) {
        const nextMonth = this.getDateInNextMonth(startDate);
        return super.sameMonthAndYear(nextMonth, endDate);
    }
    getWeek(date, weekStartsOn) {
        return getWeek(date, { weekStartsOn: weekStartsOn });
    }
    createDatetime(year, month, day, hour, minute, second) {
        if (month < 0 || month > 11) {
            throw Error(`Invalid month index "${month}". Month index has to be between 0 and 11.`);
        }
        if (day < 1) {
            throw Error(`Invalid date "${day}". Date has to be greater than 0.`);
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
        const result = new Date(year, month, day, hour, minute, second);
        if (!isValid(result)) {
            throw Error(`Invalid date "${day}" for month with index "${month}".`);
        }
        return result;
    }
    getFirstDateOfMonth(date) {
        return startOfMonth(date);
    }
    getHourNames() {
        return range(24, i => i.toLocaleString(this.locale));
    }
    getMinuteNames() {
        return range(60, i => i.toLocaleString(this.locale));
    }
    getSecondsNames() {
        return range(60, i => i.toLocaleString(this.locale));
    }
    addCalendarHours(date, hours) {
        return addHours(date, hours);
    }
    addCalendarMinutes(date, minutes) {
        return addMinutes(date, minutes);
    }
    addCalendarSeconds(date, seconds) {
        return addSeconds(date, seconds);
    }
    deserialize(value) {
        return this._delegate.deserialize(value);
    }
    getDateInNextMonth(date) {
        return addMonths(date, 1);
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.2", ngImport: i0, type: DateFnsDateTimeAdapter, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    /** @nocollapse */ static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.2.2", ngImport: i0, type: DateFnsDateTimeAdapter }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.2", ngImport: i0, type: DateFnsDateTimeAdapter, decorators: [{
            type: Injectable
        }], ctorParameters: () => [] });

const MTX_DATE_FNS_FORMATS = {
    parse: {
        dateInput: 'P',
        monthInput: 'LLLL',
        yearInput: 'yyyy',
        datetimeInput: 'P p',
        timeInput: 'p',
    },
    display: {
        dateInput: 'P',
        monthInput: 'LLLL',
        yearInput: 'yyyy',
        datetimeInput: 'P p',
        timeInput: 'p',
        monthYearLabel: 'yyyy',
        dateA11yLabel: 'LLLL dd, yyyy',
        monthYearA11yLabel: 'MMMM yyyy',
        popupHeaderDateLabel: 'ccc, dd LLL',
    },
};

class DateFnsDatetimeModule {
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.2", ngImport: i0, type: DateFnsDatetimeModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    /** @nocollapse */ static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "19.2.2", ngImport: i0, type: DateFnsDatetimeModule, imports: [DateFnsModule] }); }
    /** @nocollapse */ static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "19.2.2", ngImport: i0, type: DateFnsDatetimeModule, providers: [{ provide: DatetimeAdapter, useClass: DateFnsDateTimeAdapter }], imports: [DateFnsModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.2", ngImport: i0, type: DateFnsDatetimeModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [DateFnsModule],
                    providers: [{ provide: DatetimeAdapter, useClass: DateFnsDateTimeAdapter }],
                }]
        }] });
function provideDateFnsDatetimeAdapter(formats = MTX_DATE_FNS_FORMATS) {
    return [
        {
            provide: DateAdapter,
            useClass: DateFnsAdapter,
            deps: [MAT_DATE_LOCALE],
        },
        { provide: DatetimeAdapter, useClass: DateFnsDateTimeAdapter },
        { provide: MTX_DATETIME_FORMATS, useValue: formats },
    ];
}
class MtxDateFnsDatetimeModule {
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.2", ngImport: i0, type: MtxDateFnsDatetimeModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    /** @nocollapse */ static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "19.2.2", ngImport: i0, type: MtxDateFnsDatetimeModule }); }
    /** @nocollapse */ static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "19.2.2", ngImport: i0, type: MtxDateFnsDatetimeModule, providers: [provideDateFnsDatetimeAdapter()] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.2", ngImport: i0, type: MtxDateFnsDatetimeModule, decorators: [{
            type: NgModule,
            args: [{
                    providers: [provideDateFnsDatetimeAdapter()],
                }]
        }] });
/**
 * @deprecated Use `MtxDateFnsDatetimeModule` instead.
 */
const MatDateFnsDatetimeModule = MtxDateFnsDatetimeModule;

/**
 * Generated bundle index. Do not edit.
 */

export { DateFnsDateTimeAdapter, DateFnsDatetimeModule, MTX_DATE_FNS_FORMATS, MatDateFnsDatetimeModule, MtxDateFnsDatetimeModule, provideDateFnsDatetimeAdapter };
//# sourceMappingURL=extensions-date-fns-adapter.mjs.map
