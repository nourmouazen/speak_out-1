const express = require("express");
const router = require("express").Router();

const doctorsController = require("../controller/doctors");

router.post('/authDoc',doctorsController.AuthDoctor);
router.post('/verifyDoc',doctorsController.verifyDoctor);
router.get("/getAllDoctors", doctorsController.getAllDoctors);
router.get("/getOneDoctor/:id", doctorsController.getOneDoctor);
router.post("/postOneDoctorImage/:id", doctorsController.postOneDoctorImage);
router.put("/updateDoctor/:id", doctorsController.updateDoctor);
router.delete("/deleteDoctor/:id",doctorsController.deleteDoctor);


//rating routes
router.post("/postRating/:id", doctorsController.postRating);
router.get("/getRating/:id", doctorsController.getRating);

module.exports = router;
