const db = require("./database")

module.exports = {

postOneDoctorImage: (params, callback)=>{
    console.log("i am a doctor modellllllllllllllllllllllll")
    var queryStr = `UPDATE doctors SET image = ? WHERE doctorId = ? `;
    db.query(queryStr , params, function(err , result){
        console.log("it entered" ,result)
        callback(err,result)
    })
},


    verifyDoctorModel :(params, callback)=>{
        console.log("i am a doctor modellllllllllllllllllllllll")
        var queryStr = `SELECT * FROM doctors WHERE doctorName = ? `;
        db.query(queryStr , params, function(err , result){
            console.log("it entered" ,result)
            callback(err,result)
        })
    },



    getAllDoctors:(callback)=>{
         var queryStr ="SELECT * From doctors";
         db.query(queryStr , function(err , results){
             callback(err,results);
         })

    },
    getOneDoctor:(params , callback) =>{
        var queryStr = "SELECT * FROM doctors where doctorId = ?";
        db.query(queryStr ,params , function(err , result ){
            callback(err,result)
        })
    },

    updateDoctor:(params , callback)=>{
        var queryStr=`UPDATE doctors SET  doctorName = ?, doctorSpeciality = ? , bio = ?,email=? , password = ? , image = ? WHERE doctorId = ?`;
        db.query(queryStr , params , function(err , result){
            callback(err , result)
        })
    },

    deleteDoctor:(params , callback)=>{
        var queryStr=`DELETE FROM doctors WHERE doctorId = ?`;
        db.query(queryStr , params , function(err , result){
            callback(err , result)
        })
    }, 
    
    
    //rating
    postRating: (params,callback)=>{
        // var queryStr="INSERT INTO rating (doctor_Id , rate , user_Id) VALUES (?,?,?); UPDATE doctors  ,( SELECT (SUM(rate)  /  COUNT(*))  as mysum FROM rating ) as s SET doctors.ratingSum = s.mysum WHERE doctors.doctorId = ? ";

        var queryStr="INSERT INTO rating (doctor_Id , rate , user_Id) VALUES (?,?,?);";
        console.log("hellllo from models")
        db.query(queryStr,params,function(err,result){
            callback(err,result)
        })
    },
    getRating:(params , callback)=>{
        var queryStr = "SELECT (SUM(rate)  /  COUNT(*)) as doctorRate  FROM rating where doctor_Id = ?";
        // var queryStr1 = " ";
        db.query(queryStr ,params , function(err,result){
            callback(err , result)
        })

    }

    


}