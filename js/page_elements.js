$(function(){
    $(".nav").load("header.html"); 
    $("footer").load("footer.html"); 
    });

function resizeIframe(obj) {
    obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px';
}