var gallery = document.querySelector('#gallery');
var getVal = function(elem, style) { return parseInt(window.getComputedStyle(elem).getPropertyValue(style)); };
var getHeight = function(item) { return item.querySelector('.content').getBoundingClientRect().height; };
var resizeAll = function() {
    var altura = getVal(gallery, 'grid-auto-rows');
    var gap = getVal(gallery, 'grid-row-gap');
    gallery.querySelectorAll('.gallery-item').forEach(function(item) {
        var el = item;
        el.style.gridRowEnd = "span " + Math.ceil((getHeight(item) + gap) / (altura + gap));
    });
};
gallery.querySelectorAll('img').forEach(function(item) {
    item.classList.add('byebye');
    if (item.complete) {
        console.log(item.src);
    } else {
        item.addEventListener('load', function() {
            var altura = getVal(gallery, 'grid-auto-rows');
            var gap = getVal(gallery, 'grid-row-gap');
            var gitem = item.parentElement.parentElement;
            gitem.style.gridRowEnd = "span " + Math.ceil((getHeight(gitem) + gap) / (altura + gap));
            item.classList.remove('byebye');
        });
    }
});
window.addEventListener('resize', resizeAll);
gallery.querySelectorAll('.gallery-item').forEach(function(item) {
    item.addEventListener('click', function() {
        item.classList.toggle('full');
    });
});

// function menu1() {
//     document.querySelector('#i1').style.display = "block";
//     document.querySelector('#i2').style.display = "none";
//     document.querySelector('#i3').style.display = "none";
//     document.querySelector('#i4').style.display = "none";
//     document.querySelector('#i5').style.display = "none";
//     document.querySelector('#i6').style.display = "none";
//     document.querySelector('#i7').style.display = "none";
// }

// function menu2() {
//     document.querySelector('#i1').style.display = "none";
//     document.querySelector('#i2').style.display = "block";
//     document.querySelector('#i3').style.display = "none";
//     document.querySelector('#i4').style.display = "none";
//     document.querySelector('#i5').style.display = "none";
//     document.querySelector('#i6').style.display = "none";
//     document.querySelector('#i7').style.display = "none";
// }

// function menu3() {
//     document.querySelector('#i1').style.display = "none";
//     document.querySelector('#i2').style.display = "none";
//     document.querySelector('#i3').style.display = "block";
//     document.querySelector('#i4').style.display = "none";
//     document.querySelector('#i5').style.display = "none";
//     document.querySelector('#i6').style.display = "none";
//     document.querySelector('#i7').style.display = "none";
// }

// function menu4() {
//     document.querySelector('#i1').style.display = "none";
//     document.querySelector('#i2').style.display = "none";
//     document.querySelector('#i3').style.display = "none";
//     document.querySelector('#i4').style.display = "block";
//     document.querySelector('#i5').style.display = "none";
//     document.querySelector('#i6').style.display = "none";
//     document.querySelector('#i7').style.display = "none";
// }

// function menu5() {
//     document.querySelector('#i1').style.display = "none";
//     document.querySelector('#i2').style.display = "none";
//     document.querySelector('#i3').style.display = "none";
//     document.querySelector('#i4').style.display = "none";
//     document.querySelector('#i5').style.display = "block";
//     document.querySelector('#i6').style.display = "none";
//     document.querySelector('#i7').style.display = "none";
// }

// function menu6() {
//     document.querySelector('#i1').style.display = "none";
//     document.querySelector('#i2').style.display = "none";
//     document.querySelector('#i3').style.display = "none";
//     document.querySelector('#i4').style.display = "none";
//     document.querySelector('#i5').style.display = "none";
//     document.querySelector('#i6').style.display = "block";
//     document.querySelector('#i7').style.display = "none";
// }

// function menu7() {
//     document.querySelector('#i1').style.display = "none";
//     document.querySelector('#i2').style.display = "none";
//     document.querySelector('#i3').style.display = "none";
//     document.querySelector('#i4').style.display = "none";
//     document.querySelector('#i5').style.display = "none";
//     document.querySelector('#i6').style.display = "none";
//     document.querySelector('#i7').style.display = "block";
// }