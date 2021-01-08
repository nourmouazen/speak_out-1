const db = require("../Models/database");
const doctorModel = require("../Models/doctors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = {
  AuthDoctor: (req, res) => {
    // console.log("jjjjjjjjjjjjjjj")

    const token = req.body.accessToken;

    if (!token) res.status(400).send("we need a token");
    else {
      console.log("auth", token);
      jwt.verify(token, `${process.env.JWT_KEY}`, (err, user) => {
        if (err) res.status(400).send("you failed to authenticate")

        req.userId = user;
        res.send(token);

      })
    }


  },

  verifyDoctor: async (req, res) => {
    var params = [req.body.userName, req.body.password];
    var password = req.body.password;
    var doctorName = req.body.userName;

    // console.log(password, doctorName, " verifyyyyyyyyyyyyyyyyyyy")

    doctorModel.verifyDoctorModel(params, async function (err, results) {
      if (results.length > 0) {
        // console.log(results[0].password, "comparrrrrrrrrrrrre",password)

        var id = results[0].doctorId;

        const validpassword = await bcrypt.compare(
          password,
          results[0].password
        );
        // console.log(validpassword, "vaaaaaaaaaaaaaaaaaaaaaaaaaalid");
        if (!validpassword) return res.status(400).send("Password not correct");
        const accessToken = jwt.sign(
          { doctorName: doctorName },
          `${process.env.JWT_KEY}`
        );
        // console.log("toooooooooooooooooooooooken..........", accessToken);

        res.json({
          doctorId: id,
          doctorName: doctorName,
          accessToken: accessToken,
        });
      } else {
        res.send("User doesn't exist");
      }
    });
  },


  postOneDoctorImage: (req, res) => {
    console.log(" post om]ne imaaaaje from controller")
    var params = [req.body.firstUrl, req.params.id];
    console.log(params, "imaaaaage from controler")
    doctorModel.postOneDoctorImage(params, function (err, result) {
      if (err) {
        console.log(`you have an error in doctor controller ${err}`);
      }

      res.json(result);
    });



  },

  getAllDoctors: (req, res) => {
    doctorModel.getAllDoctors(function (err, results) {
      if (err) {
        console.log(`you have an error in doctor controller ${err}`);
      }
      res.json(results);
    });
  },

  getOneDoctor: (req, res) => {
    var params = [req.params.id];
    doctorModel.getOneDoctor(params, function (err, result) {
      if (err) {
        console.log(`you have an error in doctor controller ${err}`);
      }
      res.json(result);
    });
  },

  updateDoctor: async (req, res) => {
    console.log(req.body.cpassword, "Current password", req.body.password);
    var hashed = "";
    const validpassword = await bcrypt.compare(
      req.body.cpassword,
      req.body.password
    );
    // console.log(validpassword, "vaaaaaaaaaaaaaaaaaaaaaaalllidddd");
    if (validpassword) {
      hashed = await bcrypt.hash(req.body.cpassword, 10);
    } else {
      hashed = await bcrypt.hash(req.body.password, 10);
    }

    var params = [
      req.body.doctorName,
      req.body.doctorSpeciality,
      req.body.bio,
      req.body.email,
      hashed,
      req.body.image,
      req.params.id,
    ];
    doctorModel.updateDoctor(params, function (err, result) {
      if (err) {
        console.log(`you have an error in doctor controller ${err}`);
      }
      res.sendStatus(200);
    });
  },

  deleteDoctor: (req, res) => {
    var params = [req.params.id];
    doctorModel.deleteDoctor(params, function (err, result) {
      if (err) {
        console.log(`you have an error in doctor controller ${err}`);
      }
      res.sendStatus(200);
    });
  },

  //rating controller
  //post rating values to database
  postRating: (req, res) => {
    console.log(params,req.body.doctor_Id)
    var params = [req.body.doctor_Id,req.body.rate,req.params.id];
    console.log(req.body.doctor_Id)

    // console.log(req.body.doctor_Id,req.body.rate,req.params.id,"Helloooo there")
    doctorModel.postRating(params, function (err, result) {
      if (err) {
        console.log(`you have an error in postRating controller ${err}`);
      }
      res.sendStatus(200);
    });
  },
  getRating :(req,res)=>{
    var params =[req.params.id]
    console.log(params)
    
    doctorModel.getRating(params,function(err,result){
      if(err){
        console.log("you are have an error in your controller " + err)
      }
      res.json(result)
    })
  }
};
