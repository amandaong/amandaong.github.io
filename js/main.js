/*****------------------------------FOR JSLINT ERRORS------------------------------*****/
/*jslint browser: true*/
/*global $, jQuery*/
/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global define */

/*****------------------------------SLIDE SHOW------------------------------*****/
//Slide show variables
var index = 0;

//Change image
function change_image(slide) {
    "use strict";
    var pictures, displayed_image;

    //Change pictures array & displayed image depending on slide show
    if (slide === 1) {
        pictures = ["photoeditor1.png", "photoeditor2.png", "photoeditor3.png"];
        displayed_image = document.getElementsByClassName('image')[0]; /*returns 1st element of array of elements w/ class name image*/
    } else if (slide === 2) {
        pictures = ["focus1.png", "focus2.png", "focus3.png", "focus4.png", "focus5.png"];
        displayed_image = document.getElementsByClassName('image')[1];
    } else {
        pictures = ["applefest1.png", "applefest2.png", "applefest3.png", "applefest4.png", "applefest5.png", "applefest6.png"];
        displayed_image = document.getElementsByClassName('image')[2];
    }
    
    //If currently on first image & back btn pressed, wrap around to last image
    if (index < 0) {
        index = pictures.length - 1;
        displayed_image.src = 'images/' + pictures[index];
    } else if (index >= pictures.length) { //If slideshow currently on last image & forwad btn pressed, wrap around to first image
        index = 0;
        displayed_image.src = 'images/' + pictures[index];
    } else { //Else, display image based on index value (i.e. if (index < pictures.length))
        displayed_image.src = 'images/' + pictures[index];
    }
}

// Change image when next/back button is pressed
function nextBtnPressed(slide, n) {
    "use strict";
    index += n;
    change_image(slide);
}


$(document).ready(function () {
    "use strict";
    $('#fullpage').fullpage({
        anchors: ['firstPage', 'secondPage', '3rdPage', '4thPage'],
        animateAnchor: true,
        
        autoScrolling: true /*If set to false, gets rid of cool scrolling features*/
    });
    
    /*If hover over image or title, both image & title light up*/
    /*****------------------------------ABOUT: LinkedIn Icon------------------------------*****/
    $(".about .iconImage.linkedIn").hover(
        function () {
            $(".about .iconImage.linkedIn").css('background-image', 'url(../PersonalWebsite/images/linkedinhover.png)');
            $(".about .iconTitle.linkedIn").css('color', 'rgb(130,130,130)');
        },
        function () {
            $(".iconImage.linkedIn").css('background-image', 'url(../PersonalWebsite/images/linkedin.png)');
            $(".iconTitle.linkedIn").css('color', 'rgb(90,90,90)');
        }
    );
    $(".about .iconTitle.linkedIn").hover(
        function () {
            $(".about .iconImage.linkedIn").css('background-image', 'url(../PersonalWebsite/images/linkedinhover.png)');
            $(".about .iconTitle.linkedIn").css('color', 'rgb(130,130,130)');
        },
        function () {
            $(".about .iconImage.linkedIn").css('background-image', 'url(../PersonalWebsite/images/linkedin.png)');
            $(".about .iconTitle.linkedIn").css('color', 'rgb(90,90,90)');
        }
    );
    
    /*****------------------------------ABOUT: GitHub Icon------------------------------*****/
    $(".about .iconImage.gitHub").hover(
        function () {
            $(".about .iconImage.gitHub").css('background-image', 'url(../PersonalWebsite/images/githubhover.png)');
            $(".about .iconTitle.gitHub").css('color', 'rgb(130,130,130)');
        },
        function () {
            $(".about .iconImage.gitHub").css('background-image', 'url(../PersonalWebsite/images/github.png)');
            $(".about .iconTitle.gitHub").css('color', 'rgb(90,90,90)');
        }
    );
    $(".about .iconTitle.gitHub").hover(
        function () {
            $(".about .iconImage.gitHub").css('background-image', 'url(../PersonalWebsite/images/githubhover.png)');
            $(".about .iconTitle.gitHub").css('color', 'rgb(130,130,130)');
        },
        function () {
            $(".about .iconImage.gitHub").css('background-image', 'url(../PersonalWebsite/images/github.png)');
            $(".about .iconTitle.gitHub").css('color', 'rgb(90,90,90)');
        }
    );
    
    /*****------------------------------ABOUT: Resume Icon------------------------------*****/
    $(".about .iconImage.resume").hover(
        function () {
            $(".about .iconImage.resume").css('background-image', 'url(../PersonalWebsite/images/resumehover.png)');
            $(".about .iconTitle.resume").css('color', 'rgb(130,130,130)');
        },
        function () {
            $(".about .iconImage.resume").css('background-image', 'url(../PersonalWebsite/images/resume.png)');
            $(".about .iconTitle.resume").css('color', 'rgb(90,90,90)');
        }
    );
    $(".about .iconTitle.resume").hover(
        function () {
            $(".about .iconImage.resume").css('background-image', 'url(../PersonalWebsite/images/resumehover.png)');
            $(".about .iconTitle.resume").css('color', 'rgb(130,130,130)');
        },
        function () {
            $(".about .iconImage.resume").css('background-image', 'url(../PersonalWebsite/images/resume.png)');
            $(".about .iconTitle.resume").css('color', 'rgb(90,90,90)');
        }
    );
    
    /*****------------------------------PROJECTS: GitHub Icon------------------------------*****/
    $(".projects .iconImage.gitHub").hover(
        function () {
            $(".projects .iconImage.gitHub").css('background-image', 'url(../PersonalWebsite/images/githubprojectshover.png)');
            $(".projects .iconTitle.gitHub").css('color', 'rgb(199,230,245)');
        },
        function () {
            $(".projects .iconImage.gitHub").css('background-image', 'url(../PersonalWebsite/images/githubprojects.png)');
            $(".projects .iconTitle.gitHub").css('color', 'white');
        }
    );
    $(".projects .iconTitle.gitHub").hover(
        function () {
            $(".projects .iconImage.gitHub").css('background-image', 'url(../PersonalWebsite/images/githubprojectshover.png)');
            $(".projects .iconTitle.gitHub").css('color', 'rgb(199,230,245)');
        },
        function () {
            $(".projects .iconImage.gitHub").css('background-image', 'url(../PersonalWebsite/images/githubprojects.png)');
            $(".projects .iconTitle.gitHub").css('color', 'white');
        }
    );
   
    /*****------------------------------CONTACT ME: Resume Icon------------------------------*****/
    $(".contact li.resume").hover( /*affects li of resume class*/
        function () {
            $(".contactImage.resume").css('background-image', 'url(../PersonalWebsite/images/resumehover.png)');
        },
        function () {
            $(".contactImage.resume").css('background-image', 'url(../PersonalWebsite/images/resume.png)');
        }
    );
    
    /*****------------------------------CONTACT ME: GitHub Icon------------------------------*****/
    $(".contact li.gitHub").hover(
        function () {
            $(".contactImage.gitHub").css('background-image', 'url(../PersonalWebsite/images/githubhover.png)');
        },
        function () {
            $(".contactImage.gitHub").css('background-image', 'url(../PersonalWebsite/images/github.png)');
        }
    );
    
    /*****------------------------------CONTACT ME: LinkedIn Icon------------------------------*****/
    $(".contact li.linkedIn").hover(
        function () {
            $(".contactImage.linkedIn").css('background-image', 'url(../PersonalWebsite/images/linkedinhover.png)');
        },
        function () {
            $(".contactImage.linkedIn").css('background-image', 'url(../PersonalWebsite/images/linkedin.png)');
        }
    );
   
   
});