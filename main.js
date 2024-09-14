var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
var usernameElement = document.getElementById('username');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    {
        usernameElement;
    }
    {
        var NAME = document.getElementById('name').value;
        var lastname = document.getElementById('lastname').value;
        var phone = document.getElementById('phone').value;
        var email = document.getElementById('email').value;
        var Education = document.getElementById('education').value;
        var Experience = document.getElementById('experience').value;
        var SKills = document.getElementById('skills').value;
        var WorkExperience = document.getElementById('work').value;
        ///*///
        var username = usernameElement.value;
        var uniquePath = "resumes/".concat(username.replace(/\s+/g, '_'), "_cv.html");
        var resumeHTML = "\n    <h1><b> Editable Resume</b></h1>\n    <h3>Personal information</h3>\n    <p><b>Name:</b><span contentientable=\"true\"></span>".concat(NAME, "</p>\n    <p><b>lastname:</b><span contentientable=\"true\"></span>").concat(lastname, "</p>\n    <p><b>email:</b><span contentientable=\"true\"></span>").concat(email, "</p>\n    <p><b>Education:</b><span contentientable=\"true\"></span>").concat(Education, "</p>\n    <p><b>phone:</b><span contentientable=\"true\"></span>").concat(phone, "</p>\n    <p><b>Experience:</b><span contentientable=\"true\"></span>").concat(Experience, "\n    <p><b>SKills:</b><span contentientable=\"true\"></span>").concat(SKills, "\n    <p><b>WorkExperience:</b><span contentientable=\"true\"></span>").concat(WorkExperience, "\n\n\n    ");
        if (resumeDisplayElement) {
            resumeDisplayElement.innerHTML = resumeHTML;
        }
        var opt = {
            margin: 1,
            filename: "".concat(username, "_resume.pdf"),
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };
        html2pdf().from(resumeDisplayElement).set(opt).save();
    }
    {
        console.error("The resume display element is missing.");
    }
});
