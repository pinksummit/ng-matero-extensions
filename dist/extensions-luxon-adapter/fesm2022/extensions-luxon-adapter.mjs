import * as i0 from '@angular/core';
import { inject, Injectable, NgModule } from '@angular/core';
import { MAT_LUXON_DATE_ADAPTER_OPTIONS, LuxonDateModule, LuxonDateAdapter } from '@angular/material-luxon-adapter';
import { MAT_DATE_LOCALE, DateAdapter } from '@angular/material/core';
import { DatetimeAdapter, MTX_DATETIME_FORMATS } from '@ng-matero/extensions/core';
import { DateTime } from 'luxon';

function range(length, valueFunction) {
    const valuesArray = Array(length);
    for (let i = 0; i < length; i++) {
        valuesArray[i] = valueFunction(i);
    }
    return valuesArray;
}
class LuxonDatetimeAdapter extends DatetimeAdapter {
    constructor() {
        super();
        this._useUtc = false;
        const matDateLocale = inject(MAT_DATE_LOCALE, { optional: true });
        const matLuxonAdapterOptions = inject(MAT_LUXON_DATE_ADAPTER_OPTIONS, { optional: true });
        this.setLocale(matDateLocale || DateTime.now().locale);
        this._useUtc = matLuxonAdapterOptions?.useUtc || false;
    }
    setLocale(locale) {
        super.setLocale(locale);
    }
    getHour(date) {
        return date.hour;
    }
    getMinute(date) {
        return date.minute;
    }
    getSecond(date) {
        return date.second;
    }
    isInNextMonth(startDate, endDate) {
        const nextMonth = this.getDateInNextMonth(startDate);
        return super.sameMonthAndYear(nextMonth, endDate);
    }
    getWeek(date, firstDayOfWeek) {
        return date.localWeekNumber;
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
        // Luxon uses 1-indexed months so we need to add one to the month.
        let result;
        if (this._useUtc) {
            result = DateTime.utc(year, month + 1, day, hour, minute, second);
        }
        else {
            result = DateTime.local(year, month + 1, day, hour, minute, second);
        }
        if (!result.isValid) {
            throw Error(`Invalid date "${day}" for month with index "${month}".`);
        }
        return result.setLocale(this.locale);
    }
    getFirstDateOfMonth(date) {
        return super.clone(date).startOf('month');
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
        return date.plus({ hours });
    }
    addCalendarMinutes(date, minutes) {
        return date.plus({ minutes });
    }
    addCalendarSeconds(date, seconds) {
        return date.plus({ seconds });
    }
    deserialize(value) {
        return this._delegate.deserialize(value);
    }
    getDateInNextMonth(date) {
        return date.plus({ month: 1 });
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.2", ngImport: i0, type: LuxonDatetimeAdapter, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    /** @nocollapse */ static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.2.2", ngImport: i0, type: LuxonDatetimeAdapter }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.2", ngImport: i0, type: LuxonDatetimeAdapter, decorators: [{
            type: Injectable
        }], ctorParameters: () => [] });

const MTX_LUXON_DATETIME_FORMATS = {
    parse: {
        dateInput: 'D',
        monthInput: 'LLLL',
        yearInput: 'yyyy',
        datetimeInput: 'f',
        timeInput: 't',
    },
    display: {
        dateInput: 'D',
        monthInput: 'LLLL',
        yearInput: 'yyyy',
        datetimeInput: 'f',
        timeInput: 't',
        monthYearLabel: 'yyyy',
        dateA11yLabel: 'DDD',
        monthYearA11yLabel: 'LLLL yyyy',
        popupHeaderDateLabel: 'ccc, dd LLL',
    },
};

class LuxonDatetimeModule {
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.2", ngImport: i0, type: LuxonDatetimeModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    /** @nocollapse */ static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "19.2.2", ngImport: i0, type: LuxonDatetimeModule, imports: [LuxonDateModule] }); }
    /** @nocollapse */ static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "19.2.2", ngImport: i0, type: LuxonDatetimeModule, providers: [{ provide: DatetimeAdapter, useClass: LuxonDatetimeAdapter }], imports: [LuxonDateModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.2", ngImport: i0, type: LuxonDatetimeModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [LuxonDateModule],
                    providers: [{ provide: DatetimeAdapter, useClass: LuxonDatetimeAdapter }],
                }]
        }] });
function provideLuxonDatetimeAdapter(formats = MTX_LUXON_DATETIME_FORMATS) {
    return [
        {
            provide: DateAdapter,
            useClass: LuxonDateAdapter,
            deps: [MAT_DATE_LOCALE, MAT_LUXON_DATE_ADAPTER_OPTIONS],
        },
        { provide: DatetimeAdapter, useClass: LuxonDatetimeAdapter },
        { provide: MTX_DATETIME_FORMATS, useValue: formats },
    ];
}
class MtxLuxonDatetimeModule {
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.2", ngImport: i0, type: MtxLuxonDatetimeModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    /** @nocollapse */ static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "19.2.2", ngImport: i0, type: MtxLuxonDatetimeModule }); }
    /** @nocollapse */ static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "19.2.2", ngImport: i0, type: MtxLuxonDatetimeModule, providers: [provideLuxonDatetimeAdapter()] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.2", ngImport: i0, type: MtxLuxonDatetimeModule, decorators: [{
            type: NgModule,
            args: [{
                    providers: [provideLuxonDatetimeAdapter()],
                }]
        }] });
/**
 * @deprecated Use `MtxLuxonDatetimeModule` instead.
 */
const MatLuxonDatetimeModule = MtxLuxonDatetimeModule;

/**
 * Generated bundle index. Do not edit.
 */

export { LuxonDatetimeAdapter, LuxonDatetimeModule, MTX_LUXON_DATETIME_FORMATS, MatLuxonDatetimeModule, MtxLuxonDatetimeModule, provideLuxonDatetimeAdapter };
//# sourceMappingURL=extensions-luxon-adapter.mjs.map
