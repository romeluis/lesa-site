//Helper structures
const monthShortForms = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'June', 'July', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec.'];
const monthSectionShortForms = ['Early\nJan.', 'Late\nJan.', 'Early\nFeb.', 'Late\nFeb.', 'Early\nMar.', 'Late\nMar.', 'Early\nApr.', 'Late\nApr.', 'Early\nMay', 'Late\nMay', 'Early\nJune', 'Late\nJune', 'Early\nJuly', 'Late\nJuly', 'Early\nAug.', 'Late\nAug.', 'Early\nSept.', 'Late\nSept.', 'Early\nOct.', 'Late\nOct.', 'Early\nNov.', 'Late\nNov.', 'Early\nDec.', 'Late\nDec.'];

//Boolean queries; returns True/False based on event info
export function isUpcoming(eventInfo, currentDay, currentMonth, currentYear) { //true if event has not occured year (does not check time)
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
export function isRegistrationRequired(eventInfo) { //true if the event requires registration
    return !(eventInfo.link === "0");
}
export function isRegistrationOpen(eventInfo) { //true if the registration link is available
    return !(eventInfo.link === "1");
}
export function isDateSet(eventInfo) { //true if the date is set
    return eventInfo.day !== "TBD";
}

//Formatting functions; return a string with the event info correctly formatted
export function getRegistrationString(eventInfo) {
    if (isRegistrationRequired(eventInfo)) {
        if (isRegistrationOpen(eventInfo)) {
            return 'Register now!';
        } else {
            return 'Registration opening soon';
        }
    } else {
        return 'No registration required';
    }
}
export function getShortDateString(eventInfo) {
    return monthShortForms[eventInfo.month].concat(" ", eventInfo.day);
}
export function getPriceString(eventInfo){
    if (eventInfo.price === '0') {
        return 'Free';
    } else {
        return '$'.concat(eventInfo.price);
    }
}
