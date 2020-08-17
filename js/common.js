/*  header
-------------------------------------------------------*/

var header = document.getElementById('header');
var submenu = document.getElementById('navi-submenu-head');
header.onclick = function() {
  this.classList.toggle("is-open");
  document.getElementById("navigation").classList.toggle("is-open");
  document.getElementById("toggle").classList.toggle("is-active");
};


/*  page top
-------------------------------------------------------*/

var px_change = 1;
window.addEventListener('scroll', function(e) {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if ( scrollTop > px_change ) {
    document.getElementById( "pagetop" ).classList.add( "is-show" );
  } else {
    document.getElementById( "pagetop" ).classList.remove( "is-show" );
  }
});


/*  MoveTo
-------------------------------------------------------*/

document.addEventListener('DOMContentLoaded', function(){
  const moveTo = new MoveTo();
  const triggers = document.getElementsByClassName('pagetop');
  for (var i = 0; i < triggers.length; i++) {
    moveTo.registerTrigger(triggers[i]);
  }
});


/*  login modal
-------------------------------------------------------*/
function login() {
  var modal = document.getElementById('login-modal');
  if(!modal) return;

  var overlay = document.getElementById('login-overlay');
  var closeBtn = document.getElementById('login-close');
  var showBtn01 = document.getElementById('login-open');
  var showBtn02 = document.getElementById('login-open02');
  var otherBtn = document.getElementById('signup-open02');

  closemodal(overlay);
  closemodal(closeBtn);
  closemodal(showBtn01);
  closemodal(showBtn02);
  closemodal(otherBtn);
  function closemodal(elem) {
    if(!elem) return;
    elem.addEventListener('click', function() {
      modal.classList.toggle('is-show');
    });
  }
}
login();


/*  signup modal
-------------------------------------------------------*/
function signup() {
  var modal = document.getElementById('signup-modal');
  if(!modal) return;

  var overlay = document.getElementById('signup-overlay');
  var closeBtn = document.getElementById('signup-close');
  var showBtn01 = document.getElementById('signup-open');
  var showBtn02 = document.getElementById('signup-open02');
  var otherBtn = document.getElementById('login-open02');

  closemodal(overlay);
  closemodal(closeBtn);
  closemodal(showBtn01);
  closemodal(showBtn02);
  closemodal(otherBtn);
  function closemodal(elem) {
    if(!elem) return;
    elem.addEventListener('click', function() {
      modal.classList.toggle('is-show');
    });
  }
}
signup();


/*  payment modal
-------------------------------------------------------*/
function payment() {
  var modal = document.getElementById('payment-modal');
  if(!modal) return;

  var overlay = document.getElementById('payment-overlay');
  var closeBtn = document.getElementById('payment-close');
  var showBtn01 = document.getElementById('payment-open');

  closemodal(overlay);
  closemodal(closeBtn);
  closemodal(showBtn01);
  function closemodal(elem) {
    if(!elem) return;
    elem.addEventListener('click', function() {
      modal.classList.toggle('is-show');
    });
  }
}
payment();
