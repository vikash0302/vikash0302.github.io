window.onload = function populateTeamOptions() {

    var teamMaxSize = 10;
    var teamMinSize = 2;
    var teamDropDown = "";
    for (var teamSize = teamMinSize; teamSize <= teamMaxSize; teamSize++) {
        teamDropDown += "<option>" + teamSize + "</option>";
    }
    document.getElementById("teamSize").innerHTML = teamDropDown;


};

function registerParticipants(data, event) {
    event.preventDefault();
    var storedParticipants = JSON.parse(localStorage.getItem("infinityParticipants") || "[]");
    var teamName = "";
    var currentParticipants = [];
    for (var i = 0; i < data.length; i++) {
        var item = data[i];
        if (item.id != "") {
            var obj = {};
            obj["id"] = item.id;
            obj["value"] = item.value;
            currentParticipants.push(obj);
        }
    }
    storedParticipants.push(currentParticipants);
    localStorage.setItem("infinityParticipants", JSON.stringify(storedParticipants));

    document.getElementById("successMessage").innerHTML = "Registration success full..";
    document.getElementById("successMessage").focus();
    document.getElementById("registrationForm").reset();
}

function getFormData($form) {
    var unindexed_array = $form.serializeArray();
    var indexed_array = {};

    $.map(unindexed_array, function(n, i) {
        indexed_array[n['name']] = n['value'];
    });

    return indexed_array;
}