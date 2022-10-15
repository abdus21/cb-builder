const express = require('express');
const { userRegistration, userLogin, updateProfile, delteTask, updateTaskStatus, selectTaskStatus, countStatus, createCb } = require('../controllers/userController');
const authVerify = require('../middleware/authVerifyMiddleware');
const multer = require('multer');
const path = require('path')

const router = express.Router();

// multer configer
const storage = multer.diskStorage({
    filename : (req,file,cb)=>{
    cb(null, Date.now() +'_'+ file.originalname)
    },
    destination: (req,file,cb)=>{
        cb(null,path.join(__dirname,'../uploads/photo/'))
    }
})






const photo = multer({
    storage
}).single('photo')




router.post('/registration',userRegistration)
router.post('/login', userLogin)
router.patch('/updateProfile',authVerify,photo, updateProfile);




/* router.post('/createTask',authVerify, createCb)
router.get('/countStatus',authVerify, countStatus)
router.delete('/delteTask/:id',authVerify, delteTask)
router.patch('/updateTaskStatus/:id/:status',authVerify, updateTaskStatus)
router.get('/slectTaskStatus/:status',authVerify, selectTaskStatus) */

//router.get('/server',createUser)

module.exports = router