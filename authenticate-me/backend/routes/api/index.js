// backend/routes/api/index.js

// backend/routes/api/index.js
// ...
const router = require('express').Router();

router.post('/test', function(req, res) {
    console.log(req.body)
    res.json({ requestBody: req.body });
  });
  
  // ...

module.exports = router;