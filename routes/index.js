var express = require('express');
var router = express.Router();
var user = require('../controller/usercontroller')

router.post('/insert',user.insert)
router.get('/view-data',user.get_data)
router.post('/update/:id',user.Updatedate)
router.post('/delete/:id',user.Deletedata)
router.post('/product/:id',user.Getsingledata)

module.exports = router;
        
// 