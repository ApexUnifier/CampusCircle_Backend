import express from 'express';
import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';
// let User = require('../models/user.modal');

const router = express();

const imageStorage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'images/');
    },
    filename: function(req, file, cb) {   
        cb(null, uuidv4() + '-' + Date.now() + path.extname(file.originalname));
    }
});
const docStorage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'docs/');
    },
    filename: function(req, file, cb) {   
        cb(null, uuidv4() + '-' + Date.now() + path.extname(file.originalname));
    }
});

const imagefileFilter = (req, file, cb) => {
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if(allowedFileTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
}
const docfileFilter = (req, file, cb) => {
    const allowedFileTypes = ['application/pdf', 'application/vnd.ms-powerpoint', 'application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if(allowedFileTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
}


const docUpload = multer({ docStorage, docfileFilter });
const imageUpload = multer({imageStorage, imagefileFilter});

const obj = {docUpload,imageUpload}
export default obj;

// router.route('/add').post(upload.single('photo'), (req, res) => {
//     const name = req.body.name;
//     const birthdate = req.body.birthdate;
//     const photo = req.file.filename;

//     const newUserData = {
//         name,
//         birthdate,
//         photo
//     }

//     const newUser = new User(newUserData);

//     newUser.save()
//            .then(() => res.json('User Added'))
//            .catch(err => res.status(400).json('Error: ' + err));
// });

// module.exports = router;