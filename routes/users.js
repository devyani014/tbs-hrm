const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');

// Register
router.post('/register', (req, res, next) => {
  let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
    status: req.body.status
    
    
  });

  User.addUser(newUser, (err, user) => {
    if(err){
      res.json({success: false, msg:'Failed to register user'});
    } else {
      res.json({success: true, msg:'User registered'});
    }
  });
});
//register get
/*router.get('/register',(req,res,next) => {
  console.log('not yooo welcome');
  User.find((err,User) => {
    console.log('not welcome');
     if (!err) {res.json(User);}
     
     else { console.log('Error in employees save:'+ JSON.stringify(err,undefined,2));}
       

  });
}); */
 

// Authenticate
router.post('/authenticate', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  User.getUserByUsername(username, (err, user) => {
    if(err) throw err;
    if(!user){
      return res.json({success: false, msg: 'User not found'});
    }

    User.comparePassword(password, user.password, (err, isMatch) => {
      if(err) throw err;
      if(isMatch){
        const token = jwt.sign(user.toJSON(), config.secret, {
          expiresIn: 604800 // 1 week
        });

        res.json({
          success: true,
          token: 'JWT '+token,
          user: {
            id: user._id,
            name: user.name,
            username: user.username,
            email: user.email,
            
          }
        });
      } else {
        return res.json({success: false, msg: 'Wrong password'});
      }
    });
  });
});

/*router.get('/profile',(req, res, next) => {
 
  console.log('i m here');
  res.json('i m bro');
}); */

router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
  console.log('yo');
  res.json({user: req.user});
  console.log('not welcome');
}); 

module.exports = router;
