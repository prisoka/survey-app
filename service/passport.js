const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

const User = mongoose.model("users"); //1 arg = fetch out of mongoose, 2 args = load something into it

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true, //relative path telling googleStrategy to handle the case when req runs into any proxy (heroku proxy)
    },
    async (accessToken, refreshToken, profile, done) => {
      const userFound = await User.findOne({ googleId: profile.id });
      if (userFound) {
        done(null, userFound);
      } else {
        const user = await new User({ googleId: profile.id }).save();
        done(null, user);
      }
    }
  )
);
