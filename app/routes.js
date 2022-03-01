const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

/*
router.post('/v1/enter-the-6-digit-code-and-your-date-of-birth', function(req, res) {
  res.redirect('https://bing.com')
});
*/


// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/v1/enter-the-6-digit-code-and-your-date-of-birth', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var claimantEmail = req.session.data['claimant-email']

  // Check whether the variable matches a condition
  if (claimantEmail == ""){
    // Send user to next page
    res.redirect('/v1/sign-in-to-continue-your-claim-error')
  } else {
    // Send user to ineligible page
    res.redirect('/v1/enter-the-6-digit-code-and-your-date-of-birth')
  }

})






module.exports = router
