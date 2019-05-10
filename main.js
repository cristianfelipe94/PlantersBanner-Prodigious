
let _loadedImages = 0;
const _imageArray = new Array(
    'aloneShine.png',
    'blackground.png',
    'bodylessCharacter.png',
    'catchPhrase.png',
    'finalProduct.png',
    'headlessCharacter.png',
    'orangeGradient.png',
    'orangeground.png',
    'orangeLine.png',
    'pokeCharacter.png',
    'popCharacter.png',
    'productBox.png',
    'productShot.png',
    'shadelessTitle.png',
    'shadenessTitle.png',
    'shadePhrase.png',
    'shadePoke.png',
    'shadeProductBox.png',
    'shadeProductBox.png',
    'shadeTitle.png',
);

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
    initAnimations();
}

// Rect Values (0px: X Value, 0px: Y Value, 0px: H Value, 0px: W Value).
// Arrays with starting values and ending values for transitions.
const hitLineAnimOne = ['rect(0px, 0px, 28px, 0px)', 'rect(0px, 90px, 28px, 0px)' ];
const arrowAnimOne = ['rect(0px, 125px, 0px, 125px)', 'rect(0px, 126px, 29px, 0px)' ];

const hitLineAnimTwo = ['rect(0px, 0px, 28px, 0px)', 'rect(0px, 65px, 28px, 0px)' ];
const arrowAnimTwo = ['rect(46px, 0px, 0px, 0px)', 'rect(0px, 23px, 92px, 0px)' ];

const hitLineAnimThree = ['rect(0px, 0px, 24px, 0px)', 'rect(0px, 112px, 24px, 0px)' ];


function initAnimations(){
    const _tlShowing = new TimelineMax();
    _tlShowing
    .set('.banner',{display: 'block'})
    .to('.background-cheesecake-scale', 0.9,{ease: Circ.easeOut, scale: ('1')})
    .from('.blue-block-position', 0.9, {ease: Back.easeOut.config(1.2), bottom: ('-103')})
    .from(['.blue-cta-opacity','.first-text-opacity'], 0.9, {opacity: ('0')})

    .set('.first-hit-magicappear', {clip: hitLineAnimOne[0]})
    .to('.first-hit-magicappear', 1,{clip: hitLineAnimOne[1], ease: Power0.easeNone, opacity: ('1')})
    .set('.first-arrow-magicappear', {clip: arrowAnimOne[0]})
    .to('.first-arrow-magicappear', 1,{clip: arrowAnimOne[1], ease: Power0.easeNone, opacity: ('1')})

    .set('.second-hit-magicappear', {clip: hitLineAnimTwo[0]})
    .to('.second-hit-magicappear', 1,{clip: hitLineAnimTwo[1], ease: Power0.easeNone, opacity: ('1')})
    .set('.second-arrow-magicappear', {clip: arrowAnimTwo[0]})
    .to('.second-arrow-magicappear', 1,{clip: arrowAnimTwo[1], ease: Power0.easeNone, opacity: ('1'), onComplete: afterDelayAnimations})
}

function afterDelayAnimations() {
    const _clearAnimation = new TimelineMax();
    _clearAnimation
    .to(['.first-hit-magicappear','.first-arrow-magicappear','.second-hit-magicappear','.second-arrow-magicappear'], 1,{ease: Power0.easeNone, opacity: ('0')}).delay(1)
    
    .to('.first-text-opacity', 0.9, {ease: Power3.easeOut, bottom: ('64')})
    .to('.second-text-opacity', 0.9, {ease: Power3.easeOut, opacity: ('1')})
    
    .set('.third-text-magicappear', {clip: hitLineAnimThree[0]})
    .to('.third-text-magicappear', 1,{clip: hitLineAnimThree[1], ease: Power0.easeNone, opacity: ('1'), onComplete :actionsButton});
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