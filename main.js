
let _loadedImages = 0;
const _imageArray = new Array(
    'aloneShine.png',
    'blackground.png',
    'bodylessCharacter.png',
    'finalProduct.png',
    'orangeGradient.png',
    'orangeground.png',
    'orangeLine.png',
    'popCharacter.png',
    'productBox.png',
    'productShot.png',
    'shadelessTitle.png',
    'shadenessTitle.png',
    'shadePhrase.png',
    'shadePoke.png',
);

// Rect Values (0px: Top Value, 0px: Right Value, 0px: Bottom Value, 0px: Left Value).
// Arrays with starting values and ending values for transitions.
const headGone = ['rect(0px, 90px, 110px, -90px)', 'rect(110px, 90px, 110px, -90px)'];
const bodyGone = ['rect(0px, 129px, 240px, -129px)', 'rect(129px, 129px, 240px, -129px)'];

const appearCharact = ['rect(0px, 142px, 0px, -142px)','rect(0px, 142px, 180px, -142px)'];
const frontWrap = ['rect(0px, 114px, 0px, -114px)','rect(0px, 114px, 221px, -114px)'];
const backWrap = ['rect(-30px, 114px, 0px, -114px)','rect(0px, 114px, 30px, -114px)'];
const insideWrap = ['rect(-38px, 85px, 0px, -85px)','rect(0px, 85px, 38px, -85px)'];

this.addEventListener('DOMContentLoaded', preloadImages);

function preloadImages() {
    for (let i = 0; i < _imageArray.length; i++) {
        const _tempImage = new Image();
        _tempImage.addEventListener('load', trackProgress);
        _tempImage.src = _imageArray[i];
    }
}

function trackProgress(){
    _loadedImages++;
    if(_loadedImages == _imageArray.length) init();
}

function init(){
    const css = document.createElement( 'link' );
    css.setAttribute( 'rel', 'stylesheet' );
    css.setAttribute( 'type', 'text/css' );
    css.setAttribute( 'href', "style.css" );
    document.getElementsByTagName('head')[0].appendChild(css);
    css.addEventListener('load', initAnimations);
}

function initAnimations(){
    const _tlShowing = new TimelineMax();
    _tlShowing
    .set('.banner',{display: 'block'})

    // Title and show animation in and out.
    // /////////
    .from(['.main-title-position','.main-title-shade-position'], 1,{ top: ('-500')})
    .to(['.main-title-position','.main-title-shade-position','.juice-details-position'], 2,{ top: ('-500'), opacity: ('0')})
    // /////////

    // Border and Deer animation in.
    // //////////
    .from(['.border-line-width', '.deer-body-position', '.deer-head-position'], 0.5, { top: ('300')})
    // //////////

    // Deer moving Head animation.
    // ///////////
    .to('.deer-head-position', 1, {top: ('40'), left: ('76'), rotation: ('-21deg')}).delay(0.5)
    .to('.deer-head-position', 1, {top: ('38'), left: ('92'), rotation: ('1deg'),}).delay(0.5)
    // ///////////

    // Deer moving Head and Body animation.
    // ///////////
    .addLabel('movingWith')
    .to('.deer-body-position', 1, {top: ('126'), left: ('95'), rotation:('-4deg')}, 'movingWith')
    .to('.deer-head-position', 1, {top: ('40'), left: ('74'), rotation: ('-21deg'),}, 'movingWith')
    // ///////////

    // Falling product animation
    // ///////////////
    .addLabel('smashingTo')
    .from('.productbox-felt-position', 1,{
        ease: Bounce.easeOut,
        top: ('-1000'),
        height: ('160'),
        width: ('209'),
        top: ('-195'),
        bottom: ('0'),
        left: ('15'),
        rotation: ('4'),
        zIndex: ('4')      
    })
    // ///////////////

    // Smashing Head and Body animation.
    // /////////////
    .set('.deer-head-position', {clip: headGone[0]}, 'smashingTo')
    .to('.deer-head-position', 0.1, {clip: headGone[1], opacity: ('0')}, 'smashingTo')
    .set('.deer-body-position', {clip: bodyGone[0]}, 'smashingTo')
    .to('.deer-body-position', 0.1, {clip: bodyGone[1], opacity: ('0')}, 'smashingTo')
    // /////////////

    // Character jumping from product.
    // /////////////////
    .addLabel('showingDeer')
    .to('.charact-appear-position', 0.5, {clip: appearCharact[0]},'showingDeer')
    .to('.charact-appear-position', 0.5, {clip: appearCharact[1], opacity: ('1')},'showingDeer')

    .to('.wrapper-front-position', 0.5, {clip: frontWrap[0]},'showingDeer')
    .to('.wrapper-front-position', 0.5, {clip: frontWrap[1], opacity: ('1')},'showingDeer')

    .to('.wrapper-back-position', 0.5, {clip: backWrap[0]},'showingDeer')
    .to('.wrapper-back-position', 0.5, {clip: backWrap[1], opacity: ('1')},'showingDeer')

    .to('.wrapper-background-position', 0.5, {clip: insideWrap[0]},'showingDeer')
    .to('.wrapper-background-position', 0.5, {clip: insideWrap[1], opacity: ('1')},'showingDeer')

    .from('.charact-appear-position', 0.5, {ease: Back.easeOut.config(1), top: ('200')},'showingDeer')
    // /////////////////

    // Catchphrase appear animation.
    // ///////////
    .from('.catchphrase-text-position', 0.5, {opacity: ('0')}, 'smashingTo')
    .from('.catchphrase-shade-position', 0.5, {opacity: ('0')}, 'smashingTo')
    // ///////////

    .from('.final-productshot-position', 0.5, {left: ('350')})
}

function actionsButton(){
    _btnExit.addEventListener('mouseover', () => {
        TweenMax.to('.blue-cta-opacity', 1,{ease: Power1.easeOut, left: ('205'), opacity: ('0')})
        TweenMax.to('.yellow-cta-opacity', 1,{ease: Power1.easeOut, left: ('205'), opacity: ('1')})
        TweenMax.to('.blue-block-position', 1,{ease: Power1.easeOut, bottom: ('-103')})
        TweenMax.to('.first-text-opacity', 0.2,{ease: Power1.easeOut, opacity: ('0')})
        TweenMax.to('.second-text-opacity', 0.2,{ease: Power1.easeOut, opacity: ('0')})
        TweenMax.to('.third-text-magicappear', 0.2,{ease: Power1.easeOut, opacity: ('0')})
    });
    _btnExit.addEventListener('mouseout', () => {
        TweenMax.to('.blue-cta-opacity', 1,{ease: Power1.easeOut, left: ('140'), opacity: ('1')})
        TweenMax.to('.yellow-cta-opacity', 1,{ease: Power1.easeOut, left: ('140'), opacity: ('0')})
        TweenMax.to('.blue-block-position', 1,{ease: Back.easeOut.config(1), bottom: ('-5')})
        TweenMax.to('.first-text-opacity', 1.2,{ease: Power1.easeOut, opacity: ('1')})
        TweenMax.to('.second-text-opacity', 1.2,{ease: Power1.easeOut, opacity: ('1')})
        TweenMax.to('.third-text-magicappear', 1.2,{ease: Power1.easeOut, opacity: ('1')})
    });
    /*const looperBanner = function() {
        location.reload();
    }
    setTimeout(looperBanner, 5000);*/
}