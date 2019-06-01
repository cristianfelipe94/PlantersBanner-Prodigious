
let _loadedImages = 0;
const _imageArray = new Array(
    // Backgrounds
    // ///////////
    'background1.png',
    'background2.png',
    'bottomBluBanner.png',
    // ///////////

    // Character
    // /////////
    'armLess.png',
    'eyesCloseMrP.png',
    // /////////

    // Eyebrows
    // ////////
    'callAction.png',
    'catchPhrase1.png',
    'catchPhrase2.png',
    'catchPhrase3.png',
    'food1.png',
    'productShotFinal.png',
    // ////////

    // Bowls
    // /////
    'fullBowl.png',
    'leftBowlSmall.png',
    'emptyBigBowl.png',
    'bowlsShadow.png',
    // /////

    // Arms
    // ////
    'leftHandEmptyBowl.png',
    'leftHandFullBowl.png',

    'rightHand.png',
    'rightHandEmptyBowl.png',
    'rightHandWithFullBowl.png',
    // ////

    // Seeds
    // /////
    'leftSeed1.png',
    'leftSeed2.png',
    'leftSeed5.png',
    'leftSeed6.png',
    'leftSeed7.png',
    'leftSeed8.png',

    'rightSeed1.png',
    'rightSeed2.png',
    'rightSeed3.png',
    'rightSeed4.png',
    'rightSeed5.png',
    'rightSeed6.png',
    // /////
);

// Rect Values (0px: Top Value, 0px: Right Value, 0px: Bottom Value, 0px: Left Value).
// Arrays with starting values and ending values for transitions.
const x = ['rect(0px, 0px, 0px, 0px)', 'rect(0px, 0px, 0px, 0px)'];

const fillingBowl = ['rect(80px, 178px, 0px, -178px)', 'rect(0px, 178px, 500px, -178px)'];

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

    // Moving hands.
    // /////////////
    .addLabel('jugglingDown')
    .to('.left-hand-position', 1,{rotationZ: ('-12deg'), top: ('90')}, 'jugglingDown')
    .to('.right-hand-position', 1,{rotationZ: ('12deg'), top: ('80')}, 'jugglingDown')

    .addLabel('jugglingUp')
    .to('.right-hand-position', 1,{rotationZ: ('-12deg'), top: ('70')}, 'jugglingUp')
    .to('.left-hand-position', 1,{rotationZ: ('12deg'), top: ('80')}, 'jugglingUp')

    .addLabel('jugglingDownRepeat')
    .to('.left-hand-position', 0.5,{rotationZ: ('-12deg'), top: ('90')}, 'jugglingDownRepeat')
    .to('.right-hand-position', 0.5,{rotationZ: ('12deg'), top: ('80')}, 'jugglingDownRepeat')

    .addLabel('jugglingUpRepeat')
    .to('.right-hand-position', 0.5,{rotationZ: ('-12deg'), top: ('70')}, 'jugglingUpRepeat')
    .to('.left-hand-position', 0.5,{rotationZ: ('12deg'), top: ('80')}, 'jugglingUpRepeat')
    // /////////////

    // Closing Eyes.
    // /////////////
    .to('.character-normal-position', 0.7,{opacity: ('0')}, 'jugglingDown')
    .to('.character-closed-position', 0.1,{opacity: ('1')}, 'jugglingDown')
    
    .to('.character-normal-position', 0.1,{opacity: ('1')}, 'jugglingUp')
    .to('.character-closed-position', 0.7,{opacity: ('0')}, 'jugglingUp')

    .to('.character-closed-position', 0.1,{opacity: ('1')}, 'jugglingDownRepeat')
    .to('.character-normal-position', 0.7,{opacity: ('0')}, 'jugglingDownRepeat')

    .to('.character-closed-position', 0.7,{opacity: ('0')}, 'jugglingUpRepeat')
    .to('.character-normal-position', 0.1,{opacity: ('1')}, 'jugglingUpRepeat')
    // /////////////

    .addLabel('appearFood', '-=0.9')
    .to([
        '.peanut-1-position','.peanut-2-position','.peanut-3-position',
        '.peanut-4-position','.peanut-5-position','.peanut-6-position',
        '.peanut-7-position','.peanut-8-position','.peanut-9-position',
        '.peanut-10-position','.peanut-11-position'], 0.1, {zIndex: ('1')},'appearFood'
    )

    // Throwing food Left-hand.
    // ////////////
    .addLabel('throwingFood', '-=0.8')
    .to('.peanut-1-position', 1.5, {bezier: {curviness: 5, type: 'soft' ,values: [{x:('10'),y:('-10')},{x:('30'),y:('10')},{x:('40'),y:('50')}]}, ease:Power1.easeInOut, zIndex: ('1')},'throwingFood')
    .to('.peanut-2-position', 1.5, {bezier: {curviness: 5, type: 'soft' ,values: [{x:('25'),y:('-30')},{x:('60'),y:('20')},{x:('75'),y:('70')}]}, ease:Power1.easeInOut, zIndex: ('1')},'throwingFood')
    .to('.peanut-3-position', 1.5, {bezier: {curviness: 5, type: 'soft' ,values: [{x:('30'),y:('-20')},{x:('80'),y:('20')},{x:('100'),y:('60')}]}, ease:Power1.easeInOut, zIndex: ('1')},'throwingFood')
    .to('.peanut-4-position', 1.5, {bezier: {curviness: 5, type: 'soft' ,values: [{x:('10'),y:('-25')},{x:('60'),y:('40')},{x:('60'),y:('50')}]}, ease:Power1.easeInOut, zIndex: ('1')},'throwingFood')
    .to('.peanut-5-position', 1.5, {bezier: {curviness: 5, type: 'soft' ,values: [{x:('10'),y:('-40')},{x:('70'),y:('40')},{x:('80'),y:('50')}]}, ease:Power1.easeInOut, zIndex: ('1')},'throwingFood')
    // ////////////

    // Throwing food Right-hand.
    // ////////////
    .to('.peanut-6-position', 1.5, {bezier: {curviness: 5, type: 'soft' ,values: [{x:('-20'),y:('-10')},{x:('-30'),y:('10')},{x:('-60'),y:('65')}]}, ease:Power1.easeInOut, zIndex: ('1')},'throwingFood')
    .to('.peanut-7-position', 1.5, {bezier: {curviness: 5, type: 'soft' ,values: [{x:('-30'),y:('-20')},{x:('-40'),y:('10')},{x:('-50'),y:('65')}]}, ease:Power1.easeInOut, zIndex: ('1')},'throwingFood')
    .to('.peanut-8-position', 1.5, {bezier: {curviness: 5, type: 'soft' ,values: [{x:('-40'),y:('-30')},{x:('-100'),y:('10')},{x:('-110'),y:('60')}]}, ease:Power1.easeInOut, zIndex: ('1')},'throwingFood')
    .to('.peanut-9-position', 1.5, {bezier: {curviness: 5, type: 'soft' ,values: [{x:('-40'),y:('-40')},{x:('-60'),y:('10')},{x:('-70'),y:('60')}]}, ease:Power1.easeInOut, zIndex: ('1')},'throwingFood')
    .to('.peanut-10-position', 1.5, {bezier: {curviness: 5, type: 'soft' ,values: [{x:('-20'),y:('-20')},{x:('-70'),y:('10')},{x:('-80'),y:('50')}]}, ease:Power1.easeInOut, zIndex: ('1')},'throwingFood')
    .to('.peanut-11-position', 1.5, {bezier: {curviness: 5, type: 'soft' ,values: [{x:('-30'),y:('-20')},{x:('-90'),y:('40')},{x:('-80'),y:('50')}]}, ease:Power1.easeInOut, zIndex: ('1')},'throwingFood')
    // ////////////

    // Empty Bowls.
    // ////////////
    .addLabel('thowingBowls', '-=1.2')
    .to('.left-hand-position', 0.2,{opacity: ('0')}, 'thowingBowls')
    .to('.right-hand-position', 0.2,{opacity: ('0')}, 'thowingBowls')

    .to('.left-bowl-position', 0.1,{opacity: ('1')}, 'thowingBowls')
    .to('.right-bowl-position', 0.1,{opacity: ('1')}, 'thowingBowls')
    // ////////////

    .to('.bowl-full-position', 0.1, {clip: fillingBowl[0], zIndex: ('2')}, 'thowingBowls')
    .to('.bowl-full-position', 0.5, {clip: fillingBowl[1], zIndex: ('2')}, '-=' + 1)

    // Character goes away.
    // //////////////
    .addLabel('goodBye')
    .to('.character-normal-position', 0.7,{opacity: ('0')},'goodBye')
    .to('.character-closed-position', 0.1,{opacity: ('1')},'goodBye')
    
    .to('.character-normal-position', 0.1,{opacity: ('1')})
    .to('.character-closed-position', 0.7,{opacity: ('0')})
    .to('.catchPhrase-first-position', 0.1,{opacity: ('0')}, '-=0.5')
    .to('.catchPhrase-second-position', 1,{opacity: ('1'), ease:Power1.easeInOut}, '-=0.5')

    .addLabel('cleanFirstScene')
    .to([
        '.bigBowl-empty-position','.left-hand-position','.right-hand-position',
        '.character-normal-position','.character-closed-position','.peanut-1-position',
        '.peanut-2-position','.peanut-3-position','.peanut-4-position',
        '.peanut-5-position','.peanut-6-position','.peanut-7-position',
        '.peanut-8-position','.peanut-9-position','.peanut-10-position',
        '.peanut-11-position','.left-bowl-position','.right-bowl-position',
        '.bowl-full-position'], 0.8, {opacity: ('0')}, 'cleanFirstScene'
    )
    // //////////////

    // Second scene, product shot.
    // /////////////
    .to('.zoomIn-product-position', 2, {opacity: ('1')},'cleanFirstScene')
    .to('.catchPhrase-second-position', 0.5,{opacity: ('0')})
    .to('.catchPhrase-third-position', 1,{opacity: ('1')})

    .addLabel('zoomMovement')
    .to('.zoomIn-product-position', 1, {top: ('-19'), left: ('25'), zIndex: (2), scale: ('0.2'), opacity: ('1'), borderRadius: ('100% 100%')},'zoomMovement')
    .to('.zoomOut-product-position', 1, {zIndex: (1), scale: ('1'), opacity: ('1')},'zoomMovement')

    .to('.background-shadow-position', 1, {opacity: ('1')})
    .from('.call-action-position', 1, {left: ('-250'), ease: Power3.easeOut, onComplete: actionsButton})
    // /////////////
}

function actionsButton(){
    TweenMax.to(_btnExit, 0.1,{zIndex: ('100')})
    _btnExit.addEventListener('mouseover', () => {
        TweenMax.to('.background-shadow-position', 0.8,{top: ('-2')})
        TweenMax.to('.zoomOut-product-position', 0.8,{top: ('-10')})
        TweenMax.to('.zoomIn-product-position', 0.8,{top: ('-28')})
    });
    _btnExit.addEventListener('mouseout', () => {
        TweenMax.to('.background-shadow-position', 1,{top: ('-4')})
        TweenMax.to('.zoomOut-product-position', 1,{top: ('0')})
        TweenMax.to('.zoomIn-product-position', 1,{top: ('-19')})
    });
    const looperBanner = function() {
        location.reload();
    }
    setTimeout(looperBanner, 15000);
}