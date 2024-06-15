export const isEasterEggTime = () => {
    const now = new Date();

    const easternOffset = -4 * 60 * 60 * 1000;
    let easternTime = new Date(now.getTime() + easternOffset);

    const isDST = now.getTimezoneOffset() < easternTime.getTimezoneOffset();
    if (isDST) {
        easternTime = new Date(easternTime.getTime() - 60 * 60 * 1000);
    }

    const easternDay = easternTime.getDay();
    const easternHour = easternTime.getHours();

    const isWeekday = easternDay >= 2 && easternDay <= 4;
    const isMorningTime = easternHour === 11;
    const isAfternoonTime = easternHour >= 16 && easternHour < 18;

    return isWeekday && (isMorningTime || isAfternoonTime);
};
