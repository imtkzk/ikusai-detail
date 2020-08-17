/*  detail accordion
-------------------------------------------------------*/

const title = document.querySelectorAll('.detail-acod-title');

function toggle(){
  const content = this.nextElementSibling;
  this.classList.toggle('is-active');
  content.classList.toggle('is-open');
}

for (let i = 0; i < title.length; i ++){
  title[i].addEventListener('click', toggle)
}


/*  floathing
-------------------------------------------------------*/
var fadeConts = document.querySelectorAll('.detail-apply-prices');
var fadeContsRect = [];
var fadeContsTop = [];
var windowY = window.pageYOffset;
var windowH = window.innerHeight;
var remainder = 300;
for (var i = 0; i < fadeConts.length; i++) {
  fadeContsRect.push(fadeConts[i].getBoundingClientRect());
}
for (var i = 0; i < fadeContsRect.length; i++) {
  fadeContsTop.push(fadeContsRect[i].top + windowY);
}
window.addEventListener('resize', function () {
  windowH = window.innerHeight;
});
window.addEventListener('scroll', function () {
  windowY = window.pageYOffset;

  for (var i = 0; i < fadeConts.length; i++) {
    if(windowY > fadeContsTop[i] - windowH + remainder) {
      fadeConts[i].classList.add('is-fixed');
    } else {
      fadeConts[i].classList.remove('is-fixed');
    }
  }
});
