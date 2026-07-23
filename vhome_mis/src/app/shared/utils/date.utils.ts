// src/app/shared/utils/date.utils.ts

/**
 * Converts a native Date object into an ISO 8601 string at local midnight,
 * preserving the local timezone offset.
 * @example Returns "2026-06-10T00:00:00+08:00"
 */
export function toLocalStartOfDayISO(date: Date): string {
    const localMidnight = new Date(date.setHours(0, 0, 0, 0));

    const offsetMinutes = localMidnight.getTimezoneOffset();
    const offsetSign = offsetMinutes <= 0 ? '+' : '-';
    const absOffsetHours = String(Math.abs(Math.floor(offsetMinutes / 60))).padStart(2, '0');
    const absOffsetMinutes = String(Math.abs(offsetMinutes % 60)).padStart(2, '0');

    const year = localMidnight.getFullYear();
    const month = String(localMidnight.getMonth() + 1).padStart(2, '0');
    const day = String(localMidnight.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}T00:00:00${offsetSign}${absOffsetHours}:${absOffsetMinutes}`;
}