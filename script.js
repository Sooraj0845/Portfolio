function valueSetters() {
    gsap.set("#nav a", { y: "-100%", opacity: 0 });
    gsap.set("#home span .child", { y: "100%" });
    gsap.set("#home .row img", { opacity: 0 });

    document.querySelectorAll("#Visual>g").forEach(function (e) {
        var character = e.childNodes[1].childNodes[1];
        character.style.strokeDasharray = character.getTotalLength() + 'px';
        character.style.strokeDashoffset = character.getTotalLength() + 'px';

    })

}
function revealToSpan() {
    document.querySelectorAll(".reveal")
        .forEach(function (elem) {
            let spanParent = document.createElement("span");
            let spanChild = document.createElement("span");

            spanParent.classList.add("parent");
            spanChild.classList.add("child");

            spanChild.innerHTML = elem.innerHTML;
            spanParent.appendChild(spanChild);

            elem.innerHTML = "";
            elem.appendChild(spanParent);


        })
}
function loderAnimation() {
    var tl = gsap.timeline();
    tl
        .from("#loader .child span", {
            x: 100,
            duration: 1.5,

            stagger: 0.2,
            ease: Power3.easeInOut

        })
        .to("#loader .parent .child", {
            y: "-110%",
            duration: 1,

            ease: Circ.easeInOut

        })
        .to("#loader", {
            height: 0,
            duration: 1,
            ease: Circ.easeInOut

        })
        .to("#green", {
            height: "100%",
            top: 0,
            duration: .8,
            delay: -.4,
            ease: Circ.easeInOut

        })
        .to("#green", {
            height: "0%",
            duration: .8,
            delay: -.4,
            ease: Circ.easeInOut,
            onComplete: function () {
                animateHomepage();

            }

        })
}
function animateSvg() {

    gsap.to("#Visual>g>g>path, #Visual>g>g>polyline", {
        strokeDashoffset: 0,
        // strokeDasharray:0,
        duration: 1.5,
        ease: Expo.easeInOut,
        // delay:2
    })
}

function animateHomepage() {

    var tl = gsap.timeline();
    tl.to("#nav a", {
        y: 0,
        opacity: 1,
        stagger: .05,
        ease: Expo.easeInOut
    })
    tl.to("#home .parent .child", {
        y: 0,
        stagger: .1,
        duration: 2,
        ease: Expo.easeInOut
    })
    tl.to("#home .row img", {
        opacity: 1,
        ease: Expo.easeInOut,
        onComplete: function () {
            animateSvg();

        }
    })


}
function smoothScroll() {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });
}

function showCards() {
    document.querySelectorAll(".container")
        .forEach(function (cnt) {
            var showImg;
            cnt.addEventListener("mousemove", function (dets) {
                document.querySelector("#cursor").children[dets.target.dataset.index].style.opacity = 1;
                showImg = dets.target;
                document.querySelector("#cursor").children[showImg.dataset.index].style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
                console.log(dets.target)
                showImg.style.filter =" grayscale(1)";

                document.querySelector("#work").style.backgroundColor= "#" + dets.target.dataset.color;
            })
            cnt.addEventListener("mouseleave", function (dets) {
                document.querySelector("#cursor").children[showImg.dataset.index].style.opacity = 0;
                showImg.style.filter =" grayscale(0)";

                document.querySelector("#work").style.backgroundColor="#fff";


            })
        })
}
revealToSpan();
valueSetters();
smoothScroll();

loderAnimation();
showCards();



