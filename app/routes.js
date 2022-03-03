const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

/*
router.post('/v1/enter-the-6-digit-code-and-your-date-of-birth', function(req, res) {
  res.redirect('https://bing.com')
});
*/





router.post('/v1/enter-the-6-digit-code-and-your-date-of-birth', function (req, res) {

  var claimantEmail = req.session.data['claimant-email']

  if (claimantEmail == ""){
    res.redirect('/v1/sign-in-to-continue-your-claim-error')
  } else {
    res.redirect('/v1/enter-the-6-digit-code-and-your-date-of-birth')
  }

})





router.post('/v2/new-confirm-your-details', function (req, res) {

  var claimantAddressLine2 = req.session.data['claimant-address-line-2']
  var claimantAddressLine3 = req.session.data['claimant-address-line-3']
  var claimantAddressCounty = req.session.data['claimant-address-county']  

  res.redirect('/v2/new-confirm-your-details')

})






module.exports = router
