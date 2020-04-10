/*  N. R Yamasinghe  IT18233704 version - 01 */
import * as Sentry from "@sentry/browser";

function init() {
  Sentry.init({
    dsn: "https://a447e239b3684153b2e67c94fcf8a013@sentry.io/1871542",
  });
}

function log(error) {
  Sentry.captureException(error);
}

export default {
  init,
  log,
};
