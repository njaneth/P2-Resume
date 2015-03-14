
//Biography

var bio= {
    "name": "Nancy Janeth Montes Ledesma",
    "role": "Front-End Web Developer",
    
    "contacts": {
        "mobile": "205-415-08-30",
        "email": "nancy.j.montes@gmail.com",
        "github": "njaneth",
        "twitter": "@Njaneth82",
        "location": "Clanton,Alabama"
        },
    
    "welcomeMessage": "Hello, I'm Nancy. Welcome to my Resume!. I'm an Electronic Engeenier and Front-End Web Developer. Also I love photography and be creative.",
    "skills": ["Photography","Creative","Investigative","Critical Thinking","Coordination"],
    "bioPic":"images/yo.jpg"
    }

bio.display = function(){
    
var Role = "Front-End Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%",Role);
$("#header").prepend(formattedRole);

var formattedName = HTMLheaderName.replace("%data%","Nancy J.Montes L.");
$("#header").prepend(formattedName);

var formattedmobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
$("#topContacts").prepend(formattedmobile);
$("#footerContacts").prepend(formattedmobile);

var formattedemail = HTMLemail.replace("%data%",bio.contacts.email);
$("#topContacts").prepend(formattedemail);
$("#footerContacts").prepend(formattedemail);

var formattedgithub = HTMLgithub.replace("%data%",bio.contacts.github);
$("#topContacts").prepend(formattedgithub);
$("#footerContacts").prepend(formattedgithub);

var formattedtwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
$("#topContacts").prepend(formattedtwitter);
$("#footerContacts").prepend(formattedtwitter);

var formattedlocation = HTMLlocation.replace("%data%",bio.contacts.location);
$("#topContacts").prepend(formattedlocation);
$("#footerContacts").prepend(formattedlocation);

var formattedwelcomeMessage = HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage);
$("#topContacts").append(formattedwelcomeMessage);


// IF Skills

if(bio.skills.length>0){
    $("#header").append(HTMLskillsStart);

    var formattedskill = HTMLskills.replace("%data%",bio.skills[0]);
    $("#header").append(formattedskill);formattedskill=HTMLskills.replace("%data%",bio.skills[1]);
    $("#header").append(formattedskill);formattedskill=HTMLskills.replace("%data%",bio.skills[2]);
    $("#header").append(formattedskill);formattedskill=HTMLskills.replace("%data%",bio.skills[3]);
    $("#header").append(formattedskill);formattedskill=HTMLskills.replace("%data%",bio.skills[4]);
    $("#header").append(formattedskill);formattedskill=HTMLskills.replace("%data%",bio.skills[5]);
}

var formattedbioPic = HTMLbioPic.replace("%data%",bio.bioPic);
$("#header").prepend(formattedbioPic);

}
bio.display();

//Education:
// Objects dot and bracket notation and JSON

var education={
    "schools":[
    {
        "name":"Instituto Tecnologico de Matamoros",
        "location":"H.Matamoros,Tamaulipas,Mexico",
        "degree":"Bachelor's",
        "mayors":["Electronic Engeenier"],
        "dates":2007,
        "url":"http://www.itmatamoros.edu.mx/"
    }
    
    ],

    "onlineCourses":[
    {
        "title": "Front-End Web Developer Nanodegree",
        "school": "Udacity",
        "dates":2015,
        "url": "html//www.udacity.com/course"
    }
]
}

education.display=function(){

$("#header").append(HTMLschoolStart);
var formattededucationName = HTMLschoolName.replace("%data%",education.schools[0].name);
$("#education").append(formattededucationName);

var formattededucationDegree = HTMLschoolDegree.replace("%data%",education.schools[0].degree);
$("#education").append(formattededucationDegree);

var formattededucationDates = HTMLschoolDates.replace("%data%",education.schools[0].dates);
$("#education").append(formattededucationDates);

var formattededucationLocation = HTMLschoolLocation.replace("%data%",education.schools[0].location);
$("#education").append(formattededucationLocation);

var formattededucationMajor = HTMLschoolMajor.replace("%data%",education.schools[0].mayors);
$("#education").append(formattededucationMajor);

var formattededucationurl= HTMLonlineURL.replace("%data%",education.schools[0].url);
$("#education").append(formattededucationurl);

//Online classes

$("#education").append(HTMLonlineClasses);                           

var formattedOnlinetitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[0].title);
$("#education").append(formattedOnlinetitle);

var formattedOnlineschool = HTMLonlineSchool.replace("%data%",education.onlineCourses[0].school);
$("#education").append(formattedOnlineschool);

var formattedOnlinedates = HTMLonlineDates.replace("%data%",education.onlineCourses[0].dates);
$("#education").append(formattedOnlinedates);

var formattedOnlineurl = HTMLonlineURL.replace("%data%",education.onlineCourses[0].url);
$("#education").append(formattedOnlineurl);

//locationizer for shcool

function locationizer(education){
    var locationArray = [];

    for (school in education.schools){
        var newLocation = education.schools[school].location;
        locationArray.push(newLocation);
    }
    return locationArray;
}
}
education.display();

//WORK

var work = {
  "jobs": [
    {
      "employer": "Alltech Medical Systems America, Inc.",
      "title": "Electronic Design Engineer ",
      "location": "Cleveland, OH",
      "dates": "Feb 2014 - Current",
      "description": "Design system control electronics"
    },
    {
      "employer": "Computer/​IT Services",
      "title": "Business/Systems Analyst",
      "location": "Montgomery, AL",
      "dates": "May 2013 - Jan 2014",
      "description": "Engineering, Information Systems, and Technology fields"
    },
   {
      "employer": "Healthcare Services",
      "title": "Medical Photographer",
      "location": "Dallas, TX",
      "dates": "May 2012 - Jan 2013",
      "description": "Sets up and operates photographic equipment for moderately complex medical/scientific photography, utilizing photographic techniques, such as ultraviolet photography, bounce flash, photomicrography, macrophotography, etc."
    },
    {
      "employer": "Amsted Industries",
      "title": "Designer",
      "location": "Petersburg, VA",
      "dates": "May 2011 - Jan 2012",
      "description": "Provide design and drafting support for establishment of new products and improvements to existing products."
    }
  ]
};

work.display=function(){
//FOR-IN

for (job in work.jobs){
    //Create new div for work experience
    $("#workExperience").append(HTMLworkStart);
    //employer and title
    var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer+formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);

    var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
}

//Locationizer work

function locationizer(work){
    var locationArray = [];

    for (job in work.jobs){
        var newLocation = work.jobs[job].location;
        locationArray.push(newLocation);
    }
    return locationArray;
}


}
work.display();

// Proyects

var projects={
    "projects":[
    {
        "title":"Mockup to Web Site",
        "dates":"2015",
        "description":"With a provided design mockup as a PDF-file I had to replicate the design as closely as possible in HTML and CSS. Developing a responsive website for a single product overview page using the popular Twitter's Bootstrap framework to build the page.",
        "images":[
        "images/imgproject.png"
        ]
    }
    ] 
}

projects.display = function(){

    for (project in projects.projects){
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

        if (projects.projects[project].images.length>0){
            for (image in projects.projects[project].images){
                var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[0]);
                $(".project-entry:last").append(formattedImage);

            }
        }
    }
}

projects.display();


$("#mapDiv").append(googleMap);
