// Initialize Firebase
var config = {
    apiKey: "AIzaSyBi-_SqAjDrf2W5KSmZXzsgV-cpojFy-_g",
    authDomain: "marco-project-5661.firebaseapp.com",
    databaseURL: "https://marco-project-5661.firebaseio.com",
    projectId: "marco-project-5661",
    storageBucket: "marco-project-5661.appspot.com",
    messagingSenderId: "664814060661"
};
firebase.initializeApp(config);

var database = firebase.database();

$(document).ready(function () {

    var employee = {
        name:"",
        role:"",
        date:"",
        totalBilled:0
    };

    $("#soonToBeNsmedButton").on("click", function (event) {
        employee.name = $("#employeeNameInput").val().trim();
        employee.role = $("#employeeRoleInput").val().trim();
        employee.date = $("#employeeDateInput").val().trim();
        employee.totalBilled = $("#employeeTotalBilledInput").val().trim();

        database.ref().push({
            employeeName:employee.name,
            employeeRole:employee.role,
            employeeStartDate: firebase.database.ServerValue.Timestamp
        });


        var tableRow = $("<tr>");
        var tableColumn = $("<td>");
        var employeeNameColumn = tableColumn.text($("#employeeNameInput").val());

        tableRow.append(employeeNameColumn);
        $("#tableID > tbody").append(tableRow);

    });

});