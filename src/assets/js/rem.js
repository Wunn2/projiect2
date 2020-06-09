(function (doc, win) {

  var docEl = doc.documentElement,

    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',

    recalc = function () {

var clientWidth = docEl.clientWidth;

if (!clientWidth) return;
if(clientWidth>1300){
  docEl.style.fontSize = 50 * (clientWidth /1920) + 'px';
}else if(clientWidth>600&&clientWidth<=1300){
   docEl.style.fontSize = '42px'
}else{
  docEl.style.fontSize = 50 * (clientWidth /600) + 'px';
}
    };

if (!doc.addEventListener) return;

win.addEventListener(resizeEvt, recalc, false);

doc.addEventListener('DOMContentLoaded', recalc, false);

})(document, window);
