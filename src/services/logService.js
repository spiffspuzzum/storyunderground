import * as Sentry from '@sentry/browser';

function init() {
    Sentry.init({
    dsn: "https://9b4591e38fcd452bac1920a7b60ab0cf@sentry.io/1365035"
    });
}
function log(error) {
    Sentry.captureException(error);
}

export default { init, log };