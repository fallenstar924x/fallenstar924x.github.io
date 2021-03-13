
//import express package (a framework of Node.js that'll allow us to serve everything in the public directory)
var express = require('express');
var app = express();

//fs - file system module that allows you to work with file systems on your computer
const fs = require('fs')

//how to define a web server in Node JS. 
var server = app.listen(3000, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
})

//This will be public and serve when users accesss localhost:3000 (images, css, js files)
app.use(express.static('Front_end'))


//app.get() to handle GET request. Direct and serve clients the survey.html page. 
app.get('', function (req, res) {
    res.writeHead(200, { 'content-type': 'text/html' })
    fs.createReadStream('Front_end/Survey.html').pipe(res)
})

// open the connection to the database. 
const { Pool } = require('pg')
const pool = new Pool(
    {
        user: 'postgres',
        password: '',
        host: 'Localhost',
        port: 5432,
        database: 'final_project'
    })


//to recognize and convert incoming request object as json object.
app.use(express.json());



// --------------------DEFINING GET/POST API ---------------------------------------------------

//POST API named "add-survey" which add data to the surveyData table
app.post('/add-survey', function (req, respond) {

    console.log(req.body);

    //req.body allows you to access data in a JSON object from the client side.

    let fullname = req.body.fullname;
    let emplid = req.body.emplid;
    let semester = req.body.semester;
    let subject = req.body.subject;
    let courseid = req.body.courseid;
    let rating = req.body.rating

    pool.query(`INSERT into surveyData VALUES ('${fullname}', '${emplid}', '${semester}', '${subject}', '${courseid}', ${rating})`, (err, res) => {

        respond.send(err);
        console.log(err);
        console.log(res);
    })

    console.log(`INSERT into surveyData VALUES ('${fullname}', '${emplid}', '${semester}', '${subject}', '${courseid}', ${rating})`);
})


//GET API - definining "getSurveyData" api to return all information in the surveyData table
app.get('/getSurveyData', function (req, respond) {

    pool.query('SELECT * from surveyData order by semester', (err, res) => {
        respond.send(res["rows"]);
        console.log(res);
    })
})


//GET API - defining "getAvgRatingBySubject" api 
app.get('/getAvgRatingBySubject', function (req, respond) {

    pool.query(`SELECT subject, courseid, round(avg(rating)::numeric,2) as average_rating from surveyData
	group by subject, courseid;`, (err, res) => {
        respond.send(res["rows"]);

        console.log(res);
        console.log(err);

    })
})

//GET API - defining "getTotalNumOfSurveys" api to return # of surveys submitted
app.get('/getTotalNumOfSurveys', function (req, respond) {

    pool.query('SELECT count(*) from surveyData', (err, res) => {
        respond.send(res["rows"]);
    })

})