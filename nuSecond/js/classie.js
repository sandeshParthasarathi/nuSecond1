$(function () { // Same as document.addEventListener("DOMContentLoaded"...

  // Same as document.querySelector("#navbarToggle").addEventListener("blur",...
  $("#navbarToggle").blur(function (event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      $("#navbar").collapse('hide');
    }
  });
});

// Validate 
$(function() {
  var all = $('ul li');

  all.on('click', function() {
    //clear
    all.removeClass('active');
    //set only this
    $(this).addClass('active');
  });

});

function validateName() {

  var name = document.getElementById('contact-name').value;

  if(name.length == 0) {

    producePrompt('Name is required', 'name-error' , 'red')
    return false;

  }

  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {

    producePrompt('First and last name, please.','name-error', 'red');
    return false;

  }

  producePrompt('Valid', 'name-error', 'green');
  return true;

}

function validatePhone() {

  var phone = document.getElementById('contact-phone').value;

    if(phone.length == 0) {
      producePrompt('Phone number is required.', 'phone-error', 'red');
      return false;
    }

    if(phone.length != 10) {
      producePrompt('Include area code.', 'phone-error', 'red');
      return false;
    }

    if(!phone.match(/^[0-9]{10}$/)) {
      producePrompt('Only digits, please.' ,'phone-error', 'red');
      return false;
    }

    producePrompt('Valid', 'phone-error', 'green');
    return true;

}

function validateEmail () {

  var email = document.getElementById('contact-email').value;

  if(email.length == 0) {

    producePrompt('Email Invalid','email-error', 'red');
    return false;

  }

  if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {

    producePrompt('Email Invalid', 'email-error', 'red');
    return false;

  }

  producePrompt('Valid', 'email-error', 'green');
  return true;

}

function validateMessage() {
  var message = document.getElementById('contact-message').value;
  var required = 1;
  var left = required - message.length;

  if (left > 0) {
    producePrompt(left + ' more characters required','message-error','red');
    return false;
  }

  producePrompt('Valid', 'message-error', 'green');
  return true;

}

function validateForm() {
    if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage()) {
        jsShow('submit-error');
        producePrompt('Please fix errors to submit.', 'submit-error', 'red');
        setTimeout(function(){jsHide('submit-error');}, 2000);
        return false;
    }
}

function jsShow(id) {
  document.getElementById(id).style.display = 'block';
}

function jsHide(id) {
  document.getElementById(id).style.display = 'none';
}




function producePrompt(message, promptLocation, color) {

  document.getElementById(promptLocation).innerHTML = message;
  document.getElementById(promptLocation).style.color = color;


}

// ( function( window ) {

// 'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

// function classReg( className ) {
//   return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
// }

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once


// var hasClass, addClass, removeClass;

// if ( 'classList' in document.documentElement ) {
//   hasClass = function( elem, c ) {
//     return elem.classList.contains( c );
//   };
//   addClass = function( elem, c ) {
//     elem.classList.add( c );
//   };
//   removeClass = function( elem, c ) {
//     elem.classList.remove( c );
//   };
// }
// else {
//   hasClass = function( elem, c ) {
//     return classReg( c ).test( elem.className );
//   };
//   addClass = function( elem, c ) {
//     if ( !hasClass( elem, c ) ) {
//       elem.className = elem.className + ' ' + c;
//     }
//   };
//   removeClass = function( elem, c ) {
//     elem.className = elem.className.replace( classReg( c ), ' ' );
//   };
// }

// function toggleClass( elem, c ) {
//   var fn = hasClass( elem, c ) ? removeClass : addClass;
//   fn( elem, c );
// }

// var classie = {
  // full names

  // hasClass: hasClass,
  // addClass: addClass,
  // removeClass: removeClass,
  // toggleClass: toggleClass,

  // short names
  
//   has: hasClass,
//   add: addClass,
//   remove: removeClass,
//   toggle: toggleClass
// };

// transport
// if ( typeof define === 'function' && define.amd ) {
//   // AMD
//   define( classie );
// } else {
  // browser global
//   window.classie = classie;
// }

// })( window );
