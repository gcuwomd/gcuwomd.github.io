window.addEventListener('load', adaptation);

window.addEventListener('resize', adaptation);

function adaptation () {undefined

var w = document.body.clientWidth;

var h = document.body.clientHeight;

var nw = 1920;

nh = 1080;

var left, top, scale;

if (w/ h > nw/ nh) {undefined

scale = h/ nh;

top = 0;

left = (w - nw * scale)/ 2;

} else {undefined

scale = w/ nw;

left = 0;

top = (h - nh * scale)/ 2;

}

document.getElementById('main').setAttribute('style', 'transform: scale('+ scale +');left:'+left+'px;top:'+top+'px;');

}