!function(){var e=document.querySelector(".slider"),t=e.querySelector(".slider-list"),n=e.querySelector(".slider-track"),s=e.querySelectorAll(".slide"),r=e.querySelector(".slider-arrows"),i=r.children[0],o=r.children[1],a=s[0].offsetWidth,c=0,d=0,l=0,u=0,v=0,m=0,f=0,L=!1,h=!1,p=!0,g=!0,x=0,y=0,E=--s.length*a,b=.35*s[0].offsetWidth,q=/([-0-9.]+(?=px))/,S=function(){return-1!==event.type.search("touch")?event.touches[0]:event},X=function(){g&&(n.style.transition="transform .5s"),n.style.transform="translate3d(-".concat(c*a,"px, 0px, 0px)"),i.classList.toggle("disabled",0===c),o.classList.toggle("disabled",c===--s.length)},Y=function(){var e=S();p&&(g=!0,x=(c+1)*-a,y=(c-1)*-a,d=l=e.clientX,v=e.clientY,n.style.transition="",document.addEventListener("touchmove",k),document.addEventListener("mousemove",k),document.addEventListener("touchend",w),document.addEventListener("mouseup",w),t.classList.remove("grab"),t.classList.add("grabbing"))},k=function(){var e=S(),t=+n.style.transform.match(q)[0];if(u=l-e.clientX,l=e.clientX,m=v-e.clientY,v=e.clientY,!L&&!h){var r=Math.abs(m);r>7||0===u?(h=!0,p=!1):r<7&&(L=!0)}if(L){if(0===c){if(d<l)return void M(t,0);p=!0}if(c===--s.length){if(d>l)return void M(t,E);p=!0}if(d>l&&t<x||d<l&&t>y)return void W();n.style.transform="translate3d(".concat(t-u,"px, 0px, 0px)")}},w=function(){f=d-l,h=!1,L=!1,document.removeEventListener("touchmove",k),document.removeEventListener("mousemove",k),document.removeEventListener("touchend",w),document.removeEventListener("mouseup",w),t.classList.add("grab"),t.classList.remove("grabbing"),p?(Math.abs(f)>b&&(d<l?c--:d>l&&c++),d!==l?(p=!1,X()):p=!0):p=!0},M=function(e,t){e>=t&&e>t&&(n.style.transform="translate3d(".concat(t,"px, 0px, 0px)")),p=!1},W=function(){g=!1,w(),p=!0};n.style.transform="translate3d(0px, 0px, 0px)",t.classList.add("grab"),n.addEventListener("transitionend",(function(){return p=!0})),e.addEventListener("touchstart",Y),e.addEventListener("mousedown",Y),r.addEventListener("click",(function(){var e=event.target;if(e.classList.contains("next"))c++;else{if(!e.classList.contains("prev"))return;c--}X()}))}();
//# sourceMappingURL=index.f48816ce.js.map