
document.getElementById("submitSurveyBtn").addEventListener("click", function () {

    //FormData is a class. Allows you to use xmlhttprequest to send form data. 
    var form = new FormData(document.getElementById("formData"));

    //Using JSON to populate with data from form and send to the server.
    var body = {};

    body["fullname"] = form.get("fullname");
    body["emplid"] = form.get("emplid");
    body["semester"] = form.get("semester");
    body["subject"] = form.get("subject");
    body["courseid"] = form.get("courseid");
    body["rating"] = form.get("rating");

    //Using AJAX to make a POST request to add data from form to database. 
    const Http = new XMLHttpRequest();
    const url = '/add-survey';
    Http.open("POST", url);
    Http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    Http.send(JSON.stringify(body));

    Http.onreadystatechange = (e) => {
    }

});

document.getElementById("pastSurveyBtn").addEventListener("click", function () {

    //using AJAX to make a get request to the "getSurveyData" API. 
    const Http = new XMLHttpRequest();
    const url = '/getSurveyData';
    Http.open("GET", url);
    Http.send();

    //once the get request is completed, to display data in elememt
    Http.onreadystatechange = (e) => {
        let apiResponse = Http.responseText;
        let apiResponseJson = JSON.parse(apiResponse);

        let tableheader = '<br><br><table class="table"><thead><tr><th scope="col">Full Name</th><th scope="col">Students ID#</th><th scope="col">Semester</th><th scope="col">Subject</th><th scope="col">Course ID#</th><th scope="col">Rating</th></tr></thead>';
        let tablemiddle = '';
        let tableend = '</table>';

        for (i in apiResponseJson) {
            tablemiddle += `<tr>
            <td>${apiResponseJson[i].fullname}</td>
            <td>${apiResponseJson[i].emplid}</td>
            <td>${apiResponseJson[i].semester}</td>
            <td>${apiResponseJson[i].subject}</td>
            <td>${apiResponseJson[i].courseid}</td>
            <td>${apiResponseJson[i].rating}</td>
            
            </tr>`;
        }
        document.getElementById("databaseData").innerHTML = tableheader + tablemiddle + tableend;
    }
});


document.getElementById("avgRatingBySubject").addEventListener("click", function () {

    //using AJAX to make a get request to the "avgRatingBySubject" API. 
    const Http = new XMLHttpRequest();
    const url = '/getAvgRatingBySubject';
    Http.open("GET", url);
    Http.send();

    //once the get request is completed, to display data in elememt
    Http.onreadystatechange = (e) => {
        let apiResponse = Http.responseText;
        let apiResponseJson = JSON.parse(apiResponse);

        let tableheader = '<br><br><table class="table"><thead><tr><th scope="col">Subject</th><th scope="col">Course ID#</th><th scope="col">Average Rating</th></tr></thead>';

        let tablemiddle = '';
        let tableend = '</table>';

        for (i in apiResponseJson) {
            tablemiddle += `
             <tr>
             <td>${apiResponseJson[i].subject}</td>
             <td>${apiResponseJson[i].courseid}</td>
             <td>${apiResponseJson[i].average_rating}</td>           
             </tr>`;
        }

        document.getElementById("databaseData").innerHTML = tableheader + tablemiddle + tableend;
    }
});

document.getElementById("totalNumOfSurveyBtn").addEventListener("click", function () {

    //using AJAX to make a get request to the "getTotalNumOfSurveys" API. 

    const Http = new XMLHttpRequest();
    const url = '/getTotalNumOfSurveys';
    Http.open("GET", url);
    Http.send();

    //once the get request is completed, to display data in elememt
    Http.onreadystatechange = (e) => {
        let apiResponse = Http.responseText;
        let apiResponseJson = JSON.parse(apiResponse);

        document.getElementById("databaseData").innerHTML = `<br><br>There are  ${apiResponseJson[0].count} surveys submitted!`;

        document.getElementById("surveyCounter").innerHTML = `${apiResponseJson[0].count}`;
    }
});