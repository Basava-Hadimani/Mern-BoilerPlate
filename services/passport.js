const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
        clientID : "944588817691-k59uduecnfu2l11tfd05ad9v8hi7gpu8.apps.googleusercontent.com",
        clientSecret : "yourKey",
        callbackURL : '/auth/google/callback',
        proxy : true
    },
    async (accessToken, refreshToken, profile, done) =>{
        done(null, profile);
    }));

passport.serializeUser((profile, done) =>{
    done(null, profile.displayName);
})

passport.deserializeUser((id, done) => {
    done(null, id);
})
