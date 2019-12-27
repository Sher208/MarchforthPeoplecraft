const leftfootpath = {
    curviness: 1.25,
    values: [
        {x:0, y:-75}
    ]
};

const rightfootpath = {
    curviness: 1,
    values: [
        {x:0, y:-150},
    ]
};

const leftfootpath1 = {
    curviness: 1,
    values: [
        {x:0, y:-225}
    ]
};

const rightfootpath1 = {
    curviness: 1,
    values: [
        {x:0, y:-300},
    ]
};

const leftfootpath2 = {
    curviness: 1,
    values: [
        {x:0, y:-375},
    ]
};

const rightfootpath2 = {
    curviness: 1,
    values: [
        {x:0, y:-450},
    ]
};

const leftfootpath3 = {
    curviness: 1,
    values: [
        {x:0, y:-525},
    ]
};

const footLogo = document.querySelector('.footlogo');
const footLeft = document.querySelector('.footlogoleft');
const footRight = document.querySelector('.footlogoright');
const nameLogo = document.querySelector('.name');
const comingSoon = document.querySelector('.comingsoon');

const tween = new TimelineLite({immediateRender:false});
tween.fromTo(footLogo, 1, {
    opacity: 1,
    x: 0,
},{
    opacity: 0,
    x: -50,
}).fromTo(nameLogo, 1, {
    opacity: 1,
    x: 0,
},{
    opacity: 0,
    x: 50,
}, "-= 0.5").fromTo(comingSoon, 1, {
    opacity: 0,
},{
    opacity: 1,
}, '+=0.5')


.to(footLeft, 1, {
    bezier: leftfootpath,
    ease: Power1.easeInOut
}).to(footRight, 1, {
    bezier: rightfootpath,
    ease: Power1.easeInOut
}, "-=0.1")

.to(footLeft, 1, {
    bezier: leftfootpath1,
    ease: Power1.easeInOut
})

.to(footRight, 1, {
    bezier: rightfootpath1,
    ease: Power1.easeInOut
}, "-=0.1")

.to(footLeft, 1, {
    bezier: leftfootpath2,
    ease: Power1.easeInOut
})

.to(footRight, 1, {
    bezier: rightfootpath2,
    ease: Power1.easeInOut
}, "-=0.1").fromTo(footRight, 1, {
    opacity: 1,
    ease: Power2.easeOut
},{
    opacity:0
})

.to(footLeft, 1, {
    bezier: leftfootpath3,
    ease: Power1.easeInOut
}, "-= 0.5").fromTo(footLeft, 1, {
    opacity: 1,
    ease: Power2.easeOut
},{
    opacity:0
}, "-= 0.5")


.fromTo(comingSoon, 1, {
    opacity: 1,
    immediateRender: false
},{
    opacity: 0,
}, '-=0.5')



.fromTo(footLogo, 1, {
    opacity: 0,
    x: -50,
    immediateRender: false
},{
    opacity: 1,
    x: 0,
}, "-= 0.5").fromTo(nameLogo, 1, {
    opacity: 0,
    x: 50,
    immediateRender: false
},{
    opacity: 1,
    x: 0,
}, "-= 0.5")

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement: ".logo",
    duration: 4000,
    triggerHook: 0
})
.setTween(tween)
.setPin('.logo')
.addTo(controller)

$(window).scroll(function() {
    if($(window).scrollTop() + $(window).height() > $(document).height() - 1) {
        $(window).scrollTop(0);
    }
});