function createResume() {
    const fullName = document.getElementById("fullName").value;
    const fullAddress = document.getElementById("fullAddress").value;
    const phone = document.getElementById("telePhone").value;
    const email = document.getElementById("email").value;
    const social = document.getElementById("social");
    const career = document.getElementById("careerSkills").value;
    const personal = document.getElementById("personalInfo").value;
    const education = document.getElementById("educationDets").value;

    let startDate = document.getElementById("startDate").value;
    let endDate = document.getElementById("endDate").value;
    let employment = document.getElementById("employment").value;

    var re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/igm;
    if (re.test(email)) {

    let myText =
        `<html>
          <head>
            <title>My Resume</title>
              <link rel='stylesheet' type='text/css' href='resume.css' />
              </head>
         <body>
         `;
    
    myText += ` 
              <div class='name'>
                ${ fullName }
               </div> `;
    myText += `<div> 
                ${ fullAddress }   /  ${ phone } 
               </div> `;
    myText += `<div> 
                  ${ email } 
               </div>`;
    myText += `<div>
                 ${ social } 
                </div>
                <br>
                <hr>`;
    
    myText +=
        `<div>
            <div class='left'> Technical Skills </div>
            <div class='right'> ${ career }</div>
          </div>
              <br> `;
    myText +=
          `<div>
            <div class='left'> Personal Skills </div>
            <div class='right'> ${ personal } </div>
          </div>
             <br>`;
  myText +=
       `<div>
          <div class='left'> Education </div>
          <div class='right'> ${ education } </div>
        </div>
          <br>`;

  if (startDate )
    {
    myText += `<div>
          <div class='left'> Employment History </div>
          </div>
          <br>`;
  
    myText += `<div>
            <div class= 'left'> ${ startDate }  - ${ endDate } </div>
            <div class='right'> ${ employment }  </div>
            </div> 
            <br>`
  }
 
  myText +=
          `<div class='right'>
            <br>
            <input type='button' id='download' name='download' value='Download' onclick='window.print()' />
            </div>
          </body>
          </html>`;


let flyWindow = window.open(
    "about:blank",
    "myResume",
    "width=800,height=800,left=200,top=200"
  );
  flyWindow.document.write(myText);
}
else {
  alert("Invalid Email Address")
} 

}
