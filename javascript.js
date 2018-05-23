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
        startDate:"",
        monthlyRate:0
    };

    $("#soonToBeNsmedButton").on("click", function (event) {
        employee.name = $("#employeeNameInput").val().trim();
        employee.role = $("#employeeRoleInput").val().trim();
        employee.startDate = $("#employeeStartDateInput").val().trim();
        employee.monthlyRate = $("#employeeMonthlyRateInput").val().trim();

        database.ref().push({
            name:employee.name,
            role:employee.role,
            startDate: employee.startDate,
            monthlyRate: employee.monthlyRate
        });

            
        // var tableRow = $("<tr>");
        // var tableColumn = $("<td>");
        // var employeeNameColumn = tableColumn.text($("#employeeNameInput").val());

        // tableRow.append(employeeNameColumn);
        // $("#tableID > tbody").append(tableRow);

    });

});

database.ref().orderByChild("dateAdded").limitToLast(1).on("childAdded", function (snapshot){
    var snapshotValue = snapshot.val();
    console.log(snapshotValue);
});
function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  };