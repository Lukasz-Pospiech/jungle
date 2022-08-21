//WHEN USER ROTATES PHONE SCREEN TO HORIZONTAL, HE GETS A WARNING

const verticalView = window.matchMedia("(orientation: portrait)");
const horizontalView = window.matchMedia("(orientation: landscape)");

function checkOrientation() {
    if (horizontalView.matches) {
        document.getElementById("wrongOrientationWarningDIV").style.display = "block";
        setTimeout(changeOpacities, 5000);
        function changeOpacities() {
            document.getElementById("morpheus").style.opacity = "0";
            document.getElementById("phoneRotate").style.opacity = "1"; 
        } 
        horizontalView.onchange = (e) => {
            if (!e.matches) {
                document.getElementById("wrongOrientationWarningDIV").style.display = "none";
            } 
        }
    }
    else if (verticalView.matches) {
        document.getElementById("wrongOrientationWarningDIV").style.display = "none";
        verticalView.onchange = (e) => {
            if (!e.matches) {
                document.getElementById("wrongOrientationWarningDIV").style.display = "block";
                setTimeout(changeOpacities, 5000);
                function changeOpacities() {
                    document.getElementById("morpheus").style.opacity = "0";
                    document.getElementById("phoneRotate").style.opacity = "1"; 
                } 
            } 
        }
    }
}

verticalView.onchange = (e) => {
    if (!e.matches) {
        document.getElementById("wrongOrientationWarningDIV").style.display = "block";
        setTimeout(changeOpacities, 5000);
        function changeOpacities() {
            document.getElementById("morpheus").style.opacity = "0";
            document.getElementById("phoneRotate").style.opacity = "1"; 
        }
    } 
}

horizontalView.onchange = (e) => {
    if (!e.matches) {
        document.getElementById("wrongOrientationWarningDIV").style.display = "none";
    } 
}


//Dealing with viewport height issue (when browser address bar hides the viewport gets higher - we don't want that)
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

//MENU BIG FACE JAW DROP
function dropBigFace() {
    const container = document.getElementById("facesContainer");
    const containerOpacity = window.getComputedStyle(container).opacity;
    const bigFace = document.getElementById("bigFace");

    if (containerOpacity === "0") {
        container.style.visibility = "visible";
        container.style.opacity = 1;
        bigFace.className = "bigFaceAnimation";
    }
    else {
        container.style.opacity = "0";
        setTimeout(reset, 600);
        function reset() {
            container.style.visibility = "hidden";
            bigFace.className = "";
            resetGIF("bigFace");
        }
    }

    function resetGIF(id) {
        const gif = document.getElementById(id);
        const imageURL = gif.src;
        gif.src = "";
        gif.src = imageURL;
    }
}

//LAPTOP TYPING EFFECT
function typeWriterEffect() {
    const text1 = "Hello World! My name is Lukasz and I created this website. From scratch. Using only raw HTML/CSS/JS (no libraries nor frameworks).";
    const text2 = "This webpage doesn\’t serve any particular purpose. I created it for fun! Improving my coding skills by the way.";
    const text3 = "As you have surely noticed by now, this page contains some bugs… Well I\’m still learning the very basics of web development.";
    const text4 = "Bugs are bugging me in Thailand where I currently live. I have to deal with bugs in my bungalow and bugs in my code.";
    const text5 = "Fortunately, I can control all the creatures on my page. I\’m the puppet master here, they will do as I say!";
    const text6 = "Don\’t you believe me? Check this out…"; 
    const text7 = "The cockroach walking on the left - I will make it stop with my magic code-spell: !COCKROACH FREEZE!"; 
    const text8 = "OK, now let's delete the cockroach and wash down the chameleon to free up some space in the jungle."; 
    const text9 = "I will remove my laptop. Cheetah will be here to keep an eye on you. I will let you populate the jungle."; 
 

    function changeSentence(text) {
        let lapContainer = document.getElementById("laptopContainer");
        let gif = `<img id="laptopGif" src="typing.gif" alt="typing">`;
        let pic = `<img id="laptopPic" src="laptopPic.jpg" alt="laptop">`;
        let empty = `<div id="laptopScreenEmpty"></div>`;
        lapContainer.innerHTML = gif + empty; 
        let lapScreenEmpty = document.getElementById("laptopScreenEmpty");
        let i = 0; 
        (function typeWriter() {
            if (i < text.length) {
              lapScreenEmpty.innerHTML += text.charAt(i);
              i++;
              setTimeout(typeWriter, 100);
            } 
        })();
        setTimeout(freezeHands, (text.length*100 + 1000));
        function freezeHands() {
            lapContainer.innerHTML = pic + `<div id="laptopScreen">${text}</div>`;
        }
    }
    setTimeout(changeSentence, 200, text1);
    setTimeout(changeSentence, text1.length*100 + 1000 + 5000, text2);
    setTimeout(changeSentence, text1.length*100 + 1000 + 5000 + text2.length*100 + 1000 + 5000, text3);
    setTimeout(changeSentence, text1.length*100 + 1000 + 5000 + text2.length*100 + 1000 + 5000 + text3.length*100 + 1000 + 5000, text4);
    setTimeout(mosquitoFly, text1.length*100 + 1000 + 5000 + text2.length*100 + 1000 + 5000 + text3.length*100 + 1000 + 1000);
    setTimeout(changeSentence, text1.length*100 + 1000 + 5000 + text2.length*100 + 1000 + 5000 + text3.length*100 + 1000 + 5000 + text4.length*100 + 1000 + 5000, text5);
    setTimeout(changeSentence, text1.length*100 + 1000 + 5000 + text2.length*100 + 1000 + 5000 + text3.length*100 + 1000 + 5000 + text4.length*100 + 1000 + 5000 + text5.length*100 + 1000 + 5000, text6);
    setTimeout(changeSentence, text1.length*100 + 1000 + 5000 + text2.length*100 + 1000 + 5000 + text3.length*100 + 1000 + 5000 + text4.length*100 + 1000 + 5000 + text5.length*100 + 1000 + 5000 + text6.length*100 + 1000 + 2000, text7);
    setTimeout(freezeCockroach, text1.length*100 + 1000 + 5000 + text2.length*100 + 1000 + 5000 + text3.length*100 + 1000 + 5000 + text4.length*100 + 1000 + 5000 + text5.length*100 + 1000 + 5000 + text6.length*100 + 1000 + 3000);
    setTimeout(changeSentence, text1.length*100 + 1000 + 5000 + text2.length*100 + 1000 + 5000 + text3.length*100 + 1000 + 5000 + text4.length*100 + 1000 + 5000 + text5.length*100 + 1000 + 5000 + text6.length*100 + 1000 + 2000 + text7.length*100 + 1000 + 8000, text8);
    setTimeout(deleteCockRoachWashDownChameleon, text1.length*100 + 1000 + 5000 + text2.length*100 + 1000 + 5000 + text3.length*100 + 1000 + 5000 + text4.length*100 + 1000 + 5000 + text5.length*100 + 1000 + 5000 + text6.length*100 + 1000 + 2000 + text7.length*100 + 1000 + 19000);
    setTimeout(changeSentence, text1.length*100 + 1000 + 5000 + text2.length*100 + 1000 + 5000 + text3.length*100 + 1000 + 5000 + text4.length*100 + 1000 + 5000 + text5.length*100 + 1000 + 5000 + text6.length*100 + 1000 + 2000 + text7.length*100 + 1000 + 8000 + text8.length*100 + 1000 + 5000, text9);
    setTimeout(hideLaptopShowCheetah, text1.length*100 + 1000 + 5000 + text2.length*100 + 1000 + 5000 + text3.length*100 + 1000 + 5000 + text4.length*100 + 1000 + 5000 + text5.length*100 + 1000 + 5000 + text6.length*100 + 1000 + 2000 + text7.length*100 + 1000 + 8000 + text8.length*100 + 1000 + 5000 + text9.length*100 + 2000);
    setTimeout(showBoards, text1.length*100 + 1000 + 5000 + text2.length*100 + 1000 + 5000 + text3.length*100 + 1000 + 5000 + text4.length*100 + 1000 + 5000 + text5.length*100 + 1000 + 5000 + text6.length*100 + 1000 + 2000 + text7.length*100 + 1000 + 8000 + text8.length*100 + 1000 + 5000 + text9.length*100 + 6000);

    function mosquitoFly() {
        document.getElementById("mosquitoGIF").className = "mosquitoAnimation";
    }

    function freezeCockroach() {
        let cockroach = document.getElementById("cockroachGIF");
        cockroach.addEventListener("animationiteration", bringFrozenCockroach);
        cockroach.addEventListener("webkitAnimationIteration", bringFrozenCockroach);
        function bringFrozenCockroach() {
            cockroach.className = "cockroachFrozen"; 
        }
    }

    function deleteCockRoachWashDownChameleon() {
        document.getElementById("cockroachGIF").style.opacity = "0";
        document.getElementById("chameleon").style.top = "200vh";
        setTimeout(deleteCockroach, 3200);
        function deleteCockroach() {
            document.getElementById("cockroachGIF").style.display = "none";
        }
    }

    function hideLaptopShowCheetah() {
        document.getElementById("laptopContainer").style.display = "none";
        document.getElementById("cheetahGIF").className = "cheetahAnimation";
    }

}

function showBoards() {
    document.getElementById("radioContainer").style.display = "block";
    document.getElementById("woodenLogDIV").style.display = "block";
    document.getElementById("radioContainer").className = "radioContainerAnimation";
    document.getElementById("woodenLogDIV").className = "woodenLogDIVAnimation";
}

function showBoardsHideRepopulate() {
    document.getElementById("radioContainer").style.display = "block";
    document.getElementById("woodenLogDIV").style.display = "block";
    document.getElementById("radioContainer").className = "radioContainerAnimation";
    document.getElementById("woodenLogDIV").className = "woodenLogDIVAnimation";
    document.getElementById("repopulateLogDIV").style.display = "none";
    depopulate(); 
    function depopulate() {
        document.getElementById("bird").style.display = "none";
        document.getElementById("bird").className = "";
        
        document.getElementById("butterfly").style.display = "none";
        document.getElementById("butterfly").className = "";

        document.getElementById("winnie").style.display = "none";
        document.getElementById("winnie").className = "";

        document.getElementById("lizard").style.display = "none";
        document.getElementById("lizard").className = "";

        document.getElementById("crockodile").style.display = "none";
        document.getElementById("crockodile").className = "";

        document.getElementById("snake").style.display = "none";
        document.getElementById("snake").className = "";

        document.getElementById("tiger").style.display = "none";
        document.getElementById("tiger").className = "";

        document.getElementById("monkey").style.display = "none";
        document.getElementById("monkey").className = "";

        document.getElementById("elephant").style.display = "none";
        document.getElementById("elephant").className = "";
    }
}

function populateJungle() {
    document.getElementById("radioContainer").style.display = "none";
    document.getElementById("woodenLogDIV").style.display = "none";
    document.getElementById("repopulateLogDIV").style.display = "block";

    if (document.getElementById("birdRADIO").checked) {
        document.getElementById("bird").style.display = "block";
        document.getElementById("bird").className = "birdAnimation";
    }
    if (document.getElementById("butterflyRADIO").checked) {
        document.getElementById("butterfly").style.display = "block";
        document.getElementById("butterfly").className = "butterflyAnimation";
    }
    if (document.getElementById("winnieRADIO").checked) {
        document.getElementById("winnie").style.display = "block";
        document.getElementById("winnie").className = "winnieAnimation";
    }
    if (document.getElementById("lizardRADIO").checked) {
        document.getElementById("lizard").style.display = "block";
    }
    if (document.getElementById("crockodileRADIO").checked) {
        document.getElementById("crockodile").style.display = "block";
    }
    if (document.getElementById("snakeRADIO").checked) {
        document.getElementById("snake").style.display = "block";
    }
    if (document.getElementById("tigerRADIO").checked) {
        document.getElementById("tiger").style.display = "block";
        document.getElementById("tiger").className = "tigerAnimation";
    }
    if (document.getElementById("monkeyRADIO").checked) {
        document.getElementById("monkey").style.display = "block";
        document.getElementById("monkey").className = "monkeyAnimation";
    }
    if (document.getElementById("elephantRADIO").checked) {
        document.getElementById("elephant").style.display = "block";
        document.getElementById("elephant").className = "elephantAnimation";
    }
}


