// marks.js — link this in marks_entry.html
const form = document.getElementById("marksForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("studentName").value;
    const marks = Number(document.getElementById("studentMarks").value);
    let feedback = "";

    if (marks >= 80) {
        feedback = "Excellent";
    } else if (marks >= 60) {
        feedback = "Good";
    } else if (marks >= 40) {
        feedback = "Pass";
    } else {
        feedback = "Fail";
    }

    document.getElementById("feedback").innerHTML =
        name + ": " + feedback;
});