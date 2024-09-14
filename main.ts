 const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement= document.getElementById('resume-display') as HTMLDivElement;
const usernameElement =document.getElementById('username')as HTMLInputElement;

form.addEventListener('submit',(event:Event)=>{
    event.preventDefault();
    {
usernameElement;
    }{
    const NAME=(document.getElementById('name')as HTMLInputElement).value
    const lastname=(document.getElementById('lastname')as HTMLInputElement).value
    const phone=(document.getElementById('phone')as HTMLInputElement).value
    const email=(document.getElementById('email')as HTMLInputElement).value
    const Education=(document.getElementById('education')as HTMLInputElement).value
    const Experience=(document.getElementById('experience')as HTMLInputElement).value
    const SKills=(document.getElementById('skills')as HTMLInputElement).value
    const WorkExperience=(document.getElementById('work')as HTMLInputElement).value
    ///*///
    const username=usernameElement.value
const uniquePath=`resumes/${username.replace(/\s+/g, '_')}_cv.html`
   const resumeHTML =`
    <h1><b> Editable Resume</b></h1>
    <h3>Personal information</h3>
    <p><b>Name:</b><span contentientable="true"></span>${NAME}</p>
    <p><b>lastname:</b><span contentientable="true"></span>${lastname}</p>
    <p><b>email:</b><span contentientable="true"></span>${email}</p>
    <p><b>Education:</b><span contentientable="true"></span>${Education}</p>
    <p><b>phone:</b><span contentientable="true"></span>${phone}</p>
    <p><b>Experience:</b><span contentientable="true"></span>${Experience}
    <p><b>SKills:</b><span contentientable="true"></span>${SKills}
    <p><b>WorkExperience:</b><span contentientable="true"></span>${WorkExperience}


    `


    if(resumeDisplayElement){
       resumeDisplayElement.innerHTML =resumeHTML;
    

    /*** */
  resumeDisplayElement.style.display="block"
    }else{
        console.error('missing element')
    }
});