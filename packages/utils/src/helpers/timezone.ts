import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

// 扩展 dayjs 插件
dayjs.extend(utc);
dayjs.extend(timezone);

// Cookie 名称常量
const TIMEZONE_COOKIE_KEY = 'user_timezone';
// 默认时区
const DEFAULT_TIMEZONE = 'UTC';

/**
 * 从 Cookie 中获取用户时区
 */
function getTimezoneFromCookie(): string {
  if (typeof document === 'undefined') {
    return DEFAULT_TIMEZONE;
  }
  const cookies = document.cookie.split(';');
  for (const cookie of cookies) {
    const [key, value] = cookie.trim().split('=');
    if (key === TIMEZONE_COOKIE_KEY && value) {
      return decodeURIComponent(value);
    }
  }
  return DEFAULT_TIMEZONE;
}

/**
 * 将时区保存到 Cookie
 * @param timezone 时区字符串，如 'Asia/Shanghai'
 * @param days Cookie 有效天数，默认 365 天
 */
function setTimezoneToCookie(tz: string, days: number = 365): void {
  if (typeof document === 'undefined') {
    return;
  }
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${TIMEZONE_COOKIE_KEY}=${encodeURIComponent(tz)};expires=${expires.toUTCString()};path=/`;
}

/**
 * UTC 时间转换为用户时区时间
 * @param utcTime UTC 时间（字符串、Date 对象或时间戳）
 * @param format 输出格式，默认 'YYYY-MM-DD HH:mm:ss'
 * @returns 格式化后的用户时区时间字符串
 */
function utcToLocal(
  utcTime: Date | number | string,
  format: string = 'YYYY-MM-DD HH:mm:ss',
): string {
  const userTimezone = getTimezoneFromCookie();
  return dayjs.utc(utcTime).tz(userTimezone).format(format);
}

/**
 * UTC 时间转换为用户时区时间（返回 dayjs 对象）
 * @param utcTime UTC 时间（字符串、Date 对象或时间戳）
 * @returns dayjs 对象
 */
function utcToLocalDayjs(utcTime: Date | number | string): dayjs.Dayjs {
  const userTimezone = getTimezoneFromCookie();
  return dayjs.utc(utcTime).tz(userTimezone);
}

/**
 * 用户时区时间转换为 UTC 时间
 * @param localTime 用户时区时间（字符串、Date 对象或时间戳）
 * @param format 输出格式，默认 'YYYY-MM-DD HH:mm:ss'
 * @returns 格式化后的 UTC 时间字符串
 */
function localToUtc(
  localTime: Date | number | string,
  format: string = 'YYYY-MM-DD HH:mm:ss',
): string {
  const userTimezone = getTimezoneFromCookie();
  return dayjs.tz(localTime, userTimezone).utc().format(format);
}

/**
 * 用户时区时间转换为 UTC 时间（返回 dayjs 对象）
 * @param localTime 用户时区时间（字符串、Date 对象或时间戳）
 * @returns dayjs 对象
 */
function localToUtcDayjs(localTime: Date | number | string): dayjs.Dayjs {
  const userTimezone = getTimezoneFromCookie();
  return dayjs.tz(localTime, userTimezone).utc();
}

/**
 * 获取当前用户时区
 */
function getCurrentTimezone(): string {
  return getTimezoneFromCookie();
}

/**
 * 获取当前UTC时间并转换为用户时区时间
 * @param format 输出格式，默认 'YYYY-MM-DD HH:mm:ss'
 * @returns 格式化后的用户时区时间字符串
 */
function getCurrentLocalTime(format: string = 'YYYY-MM-DD HH:mm:ss'): string {
  const userTimezone = getTimezoneFromCookie();
  return dayjs.utc().tz(userTimezone).format(format);
}

/**
 * 设置用户时区（同时保存到 Cookie）
 * @param timezone 时区字符串
 */
function setTimezone(tz: string): void {
  setTimezoneToCookie(tz);
}

export {
  DEFAULT_TIMEZONE,
  getCurrentLocalTime,
  getCurrentTimezone,
  getTimezoneFromCookie,
  localToUtc,
  localToUtcDayjs,
  setTimezone,
  setTimezoneToCookie,
  TIMEZONE_COOKIE_KEY,
  utcToLocal,
  utcToLocalDayjs,
};
