"use strict";
const passport = require("passport");
const FacebookStrategy = require("passport-facebook").Strategy;
const { facebookConfig } = require("../configs/social-connection.config");

passport.use(
  new FacebookStrategy(
    {
      clientID: facebookConfig.clientId,
      clientSecret: facebookConfig.clientSecret,
      callbackURL: facebookConfig.callbackURL,
      profileFields: ['id', 'emails', 'name'] // Request specific fields
    },
    function (accessToken, refreshToken, profile, done) {
      console.log("profile", profile);
      return done(null, profile);
    }
  )
);

passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});

module.exports = passport;
