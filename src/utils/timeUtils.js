// export const isEasterEggTime = () => {
//     const now = new Date();
//     const day = now.getUTCDay();
//     const hour = now.getUTCHours();

//     // Convert to Eastern Time (UTC-4)
//     const easternOffset = -4 * 60 * 60 * 1000;
//     const easternTime = new Date(now.getTime() + easternOffset);

//     const easternDay = easternTime.getDay();
//     const easternHour = easternTime.getHours();

//     const isWeekday = easternDay >= 2 && easternDay <= 4; // Tuesday to Thursday
//     const isMorningTime = easternHour === 11;
//     const isAfternoonTime = easternHour >= 16 && easternHour < 18;

//     return isWeekday && (isMorningTime || isAfternoonTime);
// };

export const isEasterEggTime = () => {
    return true;
};
