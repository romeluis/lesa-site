export const monthShortForms = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'June', 'July', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec.'];
export const monthFullForms = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
export const monthSectionShortForms = ['Early\nJan.', 'Late\nJan.', 'Early\nFeb.', 'Late\nFeb.', 'Early\nMar.', 'Late\nMar.', 'Early\nApr.', 'Late\nApr.', 'Early\nMay', 'Late\nMay', 'Early\nJune', 'Late\nJune', 'Early\nJuly', 'Late\nJuly', 'Early\nAug.', 'Late\nAug.', 'Early\nSept.', 'Late\nSept.', 'Early\nOct.', 'Late\nOct.', 'Early\nNov.', 'Late\nNov.', 'Early\nDec.', 'Late\nDec.'];

export function isDateSet(eventInfo) { //true if the date is set
    return eventInfo.day !== 0;
}

export function isUpcoming(eventInfo, currentDay, currentMonth, currentYear) { //true if event has not occured yet (does not check time)
    let workingDay = 31;
    if (isDateSet(eventInfo)) {
        workingDay = eventInfo.day;
    }

    if (eventInfo.year === currentYear) {
        if (eventInfo.month === currentMonth) {
            if (workingDay > currentDay) {
                return true;
            } else {
                return false
            }
        } else if (eventInfo.month > currentMonth) {
            return true;
        } else {
            return false;
        }
    } else if (eventInfo.year > currentYear) {
        return true;
    } else {
        return false;
    }
}

export function isUpcomingGeneral(day, month, year, currentDay, currentMonth, currentYear) { //true if event has not occured yet (does not check time)
    let workingDay = day;

    if (year === currentYear) {
        if (month === currentMonth) {
            if (workingDay > currentDay) {
                return true;
            } else {
                return false
            }
        } else if (month > currentMonth) {
            return true;
        } else {
            return false;
        }
    } else if (year > currentYear) {
        return true;
    } else {
        return false;
    }
}

export function formatTime(startHour, startMinute) {
    return (startHour > 12 ? (startHour - 12).toString() : (startHour === 0 ? "12" : startHour.toString())) + ":" + (startMinute < 10 ? ("0" + startMinute.toString()) : startMinute.toString()) + (startHour > 12 ? "PM" : "AM");
}

export function formatEventPrice(eventPrice) {
    let price = "Free";
    if (eventPrice != "0") {
        price = "$" + eventPrice.toString();
    }
    return price
}

export function formatEventRegistration(eventLink) {
    let registration = "Registration not required";
        if (eventLink !== "0") {
            if (eventLink === "1") {
                registration = "Registration TBA";
            } else {
                registration = "Register now!";
            }
        }
    return registration;
}   