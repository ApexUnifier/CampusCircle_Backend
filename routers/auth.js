import express from "express";
import passport from "passport";
const CLIENT_URL = "http://localhost:4001/";
const router = express();
router.get("/login/success", (req,res) => {
      if(req.user) {
    res.status(200).json({
        success:true,
        message: "successful",
        user: req.user,
        // cookies: req.cookies
    });
  }
});
router.get("/login/failed", (req,res) => {
    res.status(401).json({
        success:false,
        message: "failure",
    });
});

router.get("/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      // Handle error
      console.error(err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    // Redirect or perform other tasks after logout
    res.redirect('/');
  });
});



router.get("/google", passport.authenticate("google", { scope: ["profile"] }));
router.get(
    "/google/callback", 
    passport.authenticate("google",{
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);
export default router;