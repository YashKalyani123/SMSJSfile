var express = require('express');
var app = express();
var cors = require('cors');
var bodyparser = require('body-parser');
var mysql = require('mysql');
var con = mysql.createConnection({host:"localhost",user:"root",password:"rootrule34",database:"mysql"});

app.use(cors());
app.use(bodyparser.json());


app.listen(9898,function() {
    console.log("Server is running, access using http://localhost:9898/, to stop hit ctrl+c");
});

app.post("/formdata", function(request, response) {
    console.log(request.body);
    var fname=request.body.fname;
    var lname=request.body.lname;
    var grade=request.body.grade;
    var dob=request.body.dob;
    var gender=request.body.gender;
    var email=request.body.email;
    var mobno=request.body.MobNo;
    var Add=request.body.Address;
    con.connect(function(err){
        if(err) throw err;
        var sql = "Insert into SMS(fname,lname,grade,dob,gender,email,MobNo,Address) values(?,?,?,?,?,?,?,?)";
        con.query(sql,[fname,lname,grade,dob,gender,email,mobno,Add],function(err,rows,result){
        
            console.log("Data Inserted.....")
            console.log(result);
        });
});
    response.send("request.body");
})