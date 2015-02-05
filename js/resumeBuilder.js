function inName(){
	var str = bio.name;
	var fname = str.slice(0, str.indexOf(" ") );
	var lname = (str.slice(str.indexOf(" ")+1)).toUpperCase();
	console.log(fname+" "+lname);
	return fname+" "+lname;
}

var bio = {
	"name" : "Victor Moreno",
	"role" : "Software and Web Developer",
	"contacts" : {
		"mobile" : "(786) 252 7355",
		"email" : "vic574m@gmail.com",
		"github" : "Swolebrain",
		"twitter" : "vic574m",
		"location" : "7270 SW 15th St, Miami, FL"},
	"welcomeMessage" : "A developer with true passion for software engineering and programming.",
	"skills" : ["Java Programming", "Python Programming", "JS/JQuery", "Google App Engine", "Responsive Web Design", 
				"Unity Game Development", "Photoshop image editing", "Photoshop texture and icon creation", "Maya Modeling", "After Effects"],
	//"biopic" : "http://columbushs.com/image/vmoreno.jpg",
	"biopic" : "https://media.licdn.com/mpr/mpr/shrink_200_200/p/8/000/1c2/299/0e1d7de.jpg",
	"display" : function(){
		$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
		$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
		$("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
		$("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
		$("#topContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
		$("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
		$("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
		$("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
		$("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
		$("#footerContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
		$("#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
		$("#footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
		
		$("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
		$("#header").append(HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage));
		$("#header").append(HTMLskillsStart);
		for (index in bio.skills){
			$("#skills").append(HTMLskills.replace("%data%", bio.skills[index]));
		}
	}
};

var education = {
	"schools" : [
		{"name" : "FLorida International University",
		"location" : "Miami, FL",
		"degree" : "BS",
		"city" : "Miami, FL",
		"majors" : ["Computer Science"],
		"dates" : 2006,
		"url" : "http://www.fiu.edu"},
		{"name" : "FLorida International University",
		"location" : "Miami, FL",
		"degree" : "MS",
		"city" : "Miami, FL",
		"majors" : ["Finance"],
		"dates" : 2008,
		"url" : "http://www.fiu.edu"}
		],
	"onlineCourses" : [
		{"title": "Front End Web Developer Nanodegree",
		"school" : "Udacity",
		"date" : 2015,
		"url": "https://www.udacity.com/course/nd001"},
		{"title" : "Intermediate Photoshop",
		"school" : "Miami Dade College",
		"date" : 2014,
		"url": "https://sisvsr.mdc.edu/ce/showclass.aspx?ref=858746&chkW=on&chkVC=on"},
		{"title" : "Intro to Dreamweaver",
		"school" : "Miami Dade College",
		"date" : 2014,
		"url": "https://sisvsr.mdc.edu/ce/showclass.aspx?ref=858693&chkW=on"
		},
		{"title" : "Intro to AJAX programming",
		"school" : "Miami Dade College",
		"date" : 2014,
		"url" : "https://sisvsr.mdc.edu/ce/showclass.aspx?ref=858710&chkW=on&chkVC=on"
		},
		{"title": "Python Programming",
		"school" : "Udacity",
		"date" : 2014,
		"url": "http://www.udacity.org"},
		{"title" : "Intro to Ruby",
		"school" : "CodeSchool",
		"date" : 2014,
		"url": "https://www.codeschool.com/courses/try-ruby"} 
		],
	"display" :function(){
		if (!education.schools) return;
		for (i in education.schools){
			$("#education").append(HTMLschoolStart);
			var nameAndDegree = HTMLschoolName.replace("%data%", education.schools[i].name) +
								HTMLschoolDegree.replace("%data%", education.schools[i].degree);
			nameAndDegree = nameAndDegree.replace('#',education.schools[i].url);
			$(".education-entry:last").append(nameAndDegree);
			$(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[i].dates));
			$(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[i].location));
			$(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[i].majors));
		}
		$("#education").append(HTMLonlineClasses);
		for (x in education.onlineCourses){
			$("#education").append(HTMLschoolStart);
			var titleAndSchool = HTMLonlineTitle.replace("%data%", education.onlineCourses[x].title)+
								HTMLonlineSchool.replace("%data%", education.onlineCourses[x].school);
			titleAndSchool = titleAndSchool.replace('#', education.onlineCourses[x].url);
			$(".education-entry:last").append(titleAndSchool);
			$(".education-entry:last").append(HTMLonlineDates.replace("%data%",education.onlineCourses[x].date));
			//$(".education-entry:last").append(HTMLonlineURL.replace("%data%", education.onlineCourses[x].url));
			
		}
	}
};

var work = {
	"jobs" : [
		{"employer" : "Christopher Columbus High School",
		"title" : "IT and Software Specialist",
		"location" : "3000 sw 87th ave, Miami, FL",
		"dates" : "10/2013 - Present",
		"description" : "I specialize in developing automated solutions for processes, enhancements for workflow of the school, maintaining the website, and integrating datasets across multiple platforms. I also maintain group policies and ensure that all software and systems run smoothly. I integrate databases across different information systems and I roll out new systems - I led the implementation of a new learning management system and new web-based workflows for enrollment and application to the school."},
		{"employer" : "Titan Risk Management",
		"title" : "Financial Advisor",
		"location" : "1250 S Miami ave, Miami, FL",
		"dates" : "02/2013 - 01/2014",
		"description" : "Designed strategic financial solutions for tax-efficient wealth accumulation and protection. Grew a financial services practice through the use of various marketing devices, from cold calling to SEO."},
		{"employer" : "Belltrade",
		"title" : "Finance Manager",
		"location" : "175 sw 7th St, Miami, FL",
		"dates" : "09/2008 - 01/2013",
		"description" : "Designed systems based on modern technology to enhance and interface with an AS/400 legacy system. These systems included web-based reports which pulled data directly from the AS/400 database, data import interfaces, and enhancements to risk analysis processes."}
	],
	"display" : function(){
		if (work.jobs){
			for (i in work.jobs){
				$("#workExperience").append(HTMLworkStart);
				$(".work-entry:last").append(HTMLworkEmployer.replace("%data%", work.jobs[i].employer));
				$(".work-entry:last").append(HTMLworkTitle.replace("%data%", work.jobs[i].title));
				$(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[i].dates));
				$(".work-entry:last").append(HTMLworkLocation.replace("%data%", work.jobs[i].location));
				$(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[i].description));
			}
		}
	}
};

var projects = {
	"projects" : [	
	{"title" : "Columbus High School website",
	"dates" : "ongoing",
	"description" : "I maintain the school website",
	"images" : []},
	{"title" : "Google Group Management",
	"dates" : "01/2015",
	"description" : "Simplified, quick interface for Google App Super Admins to add/remove users to Google groups. Highly customized.",
	"images" : []},
	{"title" : "Swolebrain Website",
	"dates" : "ongoing",
	"description" : "Showcase of my portfolios in several disciplines",
	"images" : []},
	{"title" : "Miami Mensa Website",
	"dates" : "December 2014",
	"description" : "Website built for local organization",
	"images" : []},
	{"title" : "Titan Risk Management Website",
	"dates" : "January 2013",
	"description" : "Website built for own business",
	"images" : []},
	{"title" : "PowerPoint Conversion App",
	"dates" : "12/2014",
	"description" : "Automatically converts all PPT and PPTX files in a user-input folder structure to pdf",
	"images" : []},
	{"title" : "Mass e-mailer",
	"dates" : "10/2013",
	"description" : "Sends mass marketing emails based on mixing multiple templates to give the impression that emails are user-written",
	"images" : []},
	{"title" : "UDP Chat Server",
	"dates" : "06/2013",
	"description" : "Fully featured and fully functional Java AWT-based network chat client. Uses UDP transfer protocol.",
	"images" : []}
	],
	"display" : function(){
	if (!projects.projects) return;
		for (i = 0; i < projects.projects.length; i++){
			$("#projects").append(HTMLprojectStart);
			$(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[i].title));
			$(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projects[i].dates));
			$(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projects[i].description));
		}
	}
};


bio.display();
work.display();
education.display();
projects.display();
$("#mapDiv").append(googleMap);