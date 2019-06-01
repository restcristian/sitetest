define(['gsap'], function (gsap) {
    var tl = new TimelineMax({ paused: false });

    tl
        .set('body', { autoAlpha: 1 })
        .staggerFrom('section', 2, { autoAlpha: 0, scale: .5, ease: Power2.easeOut }, .2)
        .staggerFrom('h1, h2', .5, { autoAlpha: 0, y: -40, ease: Power2.easeInOut }, 0.2, '-=2')
        .staggerFrom('.anim-panel', 1, { autoAlpha: 0, y: -40, ease: Power2.easeInOut }, 0.2, '-=1.5')


    return {
        playAnimation: function () {
            tl.play();
        }
    }
});