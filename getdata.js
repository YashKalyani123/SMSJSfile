var express = require('express');
var app = express();
var cors = require('cors');
var bodyparser = require('body-parser');
var mysql = require('mysql');
const { response } = require('express');
var con = mysql.createConnection({host:"localhost",user:"root",password:"rootrule34",database:"mysql"});

app.use(cors());
app.use(bodyparser.json());

app.listen(9898,function() {
    console.log("Server is running, access using http://localhost:9898/, to stop hit ctrl+c");
});

app.get("/StudentDetails",function(req,res){
        console.log(req.body);
        con.connect(function(err){
            if(err) throw error;
            var sql="select * from SMS";
            con.query(sql,function(error,result){
                if(error) throw error;
                console.log(result);
                res.send(result);
            });
        })
});