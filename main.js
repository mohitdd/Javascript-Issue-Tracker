let addButton = document.getElementsByClassName("btn-primary");
addButton[0].addEventListener("click", addIssue);
let newIssue = document.getElementsByClassName("isList");

var ID = function() {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return '_' + Math.random().toString(36);
};

function addIssue(event) {
    newChild = document.createElement("div");
    newChild.setAttribute("class", "jumbotron");
    newChild.innerHTML = "<h6 style = \"font-weight:600\">Issue ID : " + ID() + "</h6> <span class=\"label label-info\">open</span><h3>" + document.getElementById("issueDescInput").value + "</h3><i class=\"fa fa-clock-o\"></i>" + " " + document.getElementById("issueSeverityInput").value + "  " + "<i class=\"fa fa-user\"></i>" + " " + document.getElementById("issueAssignedToInput").value +
        "<br><br><button type=\"button\" class=\"btn btn-warning\">Close</button> <button type=\"button\" class=\"btn btn-danger\">Delete</button></div>";
    newIssue[0].appendChild(newChild);
    document.getElementById("issueInputForm").reset();
    event.preventDefault();
}

newIssue[0].addEventListener("click", function ModifyIssue(event) {
    if (event.target.classList.contains("btn-warning")) {
        var tar = event.target.parentElement.getElementsByClassName("label-info");
        tar[0].innerText = "Closed";
        event.target.remove();
    } else if (event.target.classList.contains("btn-danger")) {
        event.target.parentElement.remove();
    }
});
