"use strict";

module.exports = {
  facebookConfig: {
    clientId: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: process.env.FACEBOOK_CALLBACK,
    sessionSecret: process.env.SESSION_KEY,
  },
};
