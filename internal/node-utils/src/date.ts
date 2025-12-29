import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);
dayjs.extend(timezone);

// 项目统一使用 UTC 时区
dayjs.tz.setDefault('UTC');

const dateUtil = dayjs;

export { dateUtil };
