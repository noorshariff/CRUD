const express = require('express');
const router =  express.Router();
const adminController = require('../controllers/admin')

router.get('/getemployee',adminController.getDetails);

router.post('/employee',adminController.postDetails);

router.get('/:id',adminController.getById);

router.post('/editemployee',adminController.updateDetails)

router.delete('/deleteuser/:id', adminController.deleteDetails)




module.exports = router;