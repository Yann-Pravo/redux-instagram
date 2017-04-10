import Raven from 'raven-js';

const sentry_key = '30d0318e3780496f804bcd6dda285b75';
const sentry_app = '156803';
export const sentry_url = `https://${sentry_key}@app.getsentry.com/${sentry_app}`;

export function logException(ex, context) {
  Raven.captureException(ex, {
    extra: context
  });
  /*eslint no-console:0*/
  window && window.console && console.error && console.error(ex);
}
