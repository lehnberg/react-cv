import { DateTime } from 'luxon';

// remove the http(s)://(www) from URLs
export function formatUrl(url?: string) {
  if (url) {
    let regex = /http(s)?:\/\/(www.)?/;
    return url.replace(regex, '');
  }
}

// date formatter
export function dateDisplay(start: string, end?: string) {
  start = DateTime.fromISO(start)
    .toFormat('yyyy')
    .toString();
  if (!end) {
    end = 'present';
  } else {
    end = DateTime.fromISO(end)
      .toFormat('yyyy')
      .toString();
  }
  if (start === end) {
    return start;
  } else {
    return start + '-' + end;
  }
}
