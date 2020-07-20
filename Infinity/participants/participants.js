window.onload = function populateParticipants() {
    var storedParticipants = JSON.parse(localStorage.getItem("infinityParticipants") || "[]");

    var teamDropDown = "<thead><tr>" +
        "<th>S.No.</th>" +
        "<th>Registered By</th>" +
        "<th>Team Name</th>" +
        "<th>Team Size</th>" +
        "<th>Team Members</th>" +
        "<th>Project Title</th>" +
        "<th>What</th>" +
        "<th>How</th>" +
        "<th>Who</th>" +
        "</tr> </thead>";
    teamDropDown += "<tbody>";
    for (var index = 0; index < storedParticipants.length; index++) {
        var elementObj = storedParticipants[index];
        teamDropDown += "<tr>";
        teamDropDown += "<td>" + (index * 1 + 1) + "</td>";
        for (var elementIndex = 0; elementIndex < elementObj.length; elementIndex++) {
            var tdValue = elementObj[elementIndex].value;
            if (elementObj[elementIndex].id == "fname") {
                var fname = tdValue;
                elementIndex++;
                var lname = elementObj[elementIndex].value;
                elementIndex++;
                var employeeId = elementObj[elementIndex].value;
                elementIndex++;
                var location = elementObj[elementIndex].value;
                tdValue = employeeId + ", " + fname + " " + lname + ", " + location;
            }
            teamDropDown += "<td style = 'font-style: normal;''>" + tdValue + "</td>";

        }
        teamDropDown += "</tr>";
    }
    teamDropDown += "</tbody>"
    document.getElementById("participantsData").innerHTML = teamDropDown;

}

function backgroundColor() {
    return '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
}