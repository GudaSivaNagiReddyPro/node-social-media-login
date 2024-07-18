const express = require("express");
const passport = require("passport");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("pages/index.ejs");
});

router.get(
  "/auth/facebook",
  passport.authenticate("facebook", { scope: ["email"] })
);
router.get("/auth/facebook/callback", function (req, res) {
  passport.authenticate("facebook", {
    successRedirect: "/profile",
    failureRedirect: "/error",
  });
});
router.get("/profile", function (req, res) {
  res.render("/pages/profile.ejs", {
    user: req.user,
  });
});
router.get("/error", function (req, res) {
  res.render("/pages/error.ejs", {
    user: req.user,
  });
});

// router.get("/logout", function (req, res) {
//   req.logout();
//   res.redirect("/");
// });
// function isLoggedIn(req, res, next) {
//   if (req.isAuthentication()) return next();
//   else res.redirect("/");
// }
module.exports = router;
