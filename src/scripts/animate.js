import anime from "animejs";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
// import { ScrollSmoother } from "gsap/all";

const easingAnimate = "easeInOutQuad";

export const animatePayounts = () => {
    const container = document.querySelector(".payments");
    if (!container) return;
    const items = container.querySelectorAll(".animate");
    if (!items) return;
    const names = container.querySelectorAll(".name");

    // const animateFunctions = [...items].map((item, i) => {
    //     return anime({
    //         targets: item,
    //         rotate: ["35deg", 0],
    //         opacity: [0, 1],
    //         delay: 250 + 100 * i,
    //         duration: 1000,
    //         easing: easingAnimate,
    //         begin: function () {
    //             anime({
    //                 targets: names[i],
    //                 translateY: ["100%", 0],
    //                 duration: 2000,
    //                 delay: 250,
    //                 easing: easingAnimate,
    //             });
    //         },
    //         autoplay: false,
    //     });
    // });

    const animateFunctions = [...names].map((name, i) => {
        return anime({
            targets: name,
            translateY: ["100%", 0],
            duration: 250,
            // delay: 250,
            easing: easingAnimate,

            autoplay: false,
        });
    });

    return animateFunctions;
};

export const mainScroll = () => {
    // const animate = animatePayounts();
    // const mainRoot = window.innerHeight;

    // const mainContainer = document.querySelector(".payments");
    // if (!mainContainer) return;
    // const items = mainContainer.querySelectorAll(".animate");
    // if (!items) return;
    // items.forEach((item) => {
    //     item.style.transform = "rotate(35deg)";
    //     item.style.opacity = 0;
    // });

    // const callbeck = async (entries, observer) => {
    //     if (entries[0].isIntersecting) {
    //         animate.forEach((anim) => anim.play());
    //         document.body.style.overflow = "hidden";
    //         setTimeout(() => {
    //             mainContainer.scrollIntoView({
    //                 behavior: "smooth",
    //                 block: "center",
    //             });
    //         }, 100);
    //     }
    // };

    // const options = {
    //     threshold: 0.5,
    // };

    // const min = 35,
    //     max = 0;

    // let lastScroll = window.pageYOffset;

    // const throttle = (func, limit) => {
    //     let lastFunc;
    //     let lastRan;
    //     return function () {
    //         const context = this;
    //         const args = arguments;
    //         if (!lastRan) {
    //             func.apply(context, args);
    //             lastRan = Date.now();
    //         } else {
    //             clearTimeout(lastFunc);
    //             lastFunc = setTimeout(function () {
    //                 if (Date.now() - lastRan >= limit) {
    //                     func.apply(context, args);
    //                     lastRan = Date.now();
    //                 }
    //             }, limit - (Date.now() - lastRan));
    //         }
    //     };
    // };

    // window.addEventListener(
    //     "scroll",
    //     throttle(async (e) => {
    //         const itemClient = mainContainer.getBoundingClientRect();
    //         let top = window.pageYOffset
    //         if (itemClient.y < mainRoot && itemClient.y > 0) {
    //             if (top > lastScroll) {
    //                 items.forEach((item, i) => {
    //                     let deg = item.style.transform || min.toString();
    //                     deg = parseInt(deg.replace("rotate(", ""));
    //                     let opac = item.style.opacity || 0;
    //                     opac = parseFloat(opac);
    //                     if (opac > 1) opac = 1;
    //                     if (opac < 0) opac = 0;
    //                     const a = deg - min / 3;
    //                     const b = opac + 1 / 3;
    //                     item.style.transform = `rotate(${a <= 0 || a > 35 ? 0 : a}deg)`;
    //                     item.style.opacity = b > 1 ? 1 : b;
    //                 });
    //             } else if (top < lastScroll) {
    //                 items.forEach((item, i) => {
    //                     let deg = item.style.transform || max.toString();
    //                     deg = parseInt(deg.replace("rotate(", ""));
    //                     let opac = item.style.opacity || 0;
    //                     opac = parseFloat(opac);
    //                     opac = parseFloat(opac);
    //                     if (opac > 1) opac = 1;
    //                     if (opac < 0) opac = 0;
    //                     const a = deg + min / 3;
    //                     const b = opac - 1 / 3;
    //                     item.style.transform = `rotate(${a >= 35 ? 35 : a}deg)`;
    //                     item.style.opacity = b < 0 ? 0 : b;
    //                     // }
    //                 });
    //             }
    //         }
    //         lastScroll = top;
    //     }, 50)
    // );

    // window.addEventListener("scroll", async (e) => {
    //     // console.log(mainContainer.getBoundingClientRect());
    //     console.log(mainRoot);
    //     const itemClient = mainContainer.getBoundingClientRect();
    //     if (itemClient.y < mainRoot && itemClient.y > 0) {
    //         if (e.deltaY > 0) {
    //             // console.log(itemClient.y);
    //             items.forEach((item, i) => {
    //                 let deg = item.style.transform || min.toString();
    //                 deg = parseInt(deg.replace("rotate(", ""));
    //                 let opac = item.style.opacity || 0;
    //                 opac = parseFloat(opac);
    //                 if (opac > 1) opac = 1;
    //                 if (opac < 0) opac = 0;
    //                 // if (deg <= 0 || deg > 35) {
    //                 //     item.style.transform = `rotate(${0}deg)`;
    //                 // animate[i].play();
    //                 // setTimeout(() => (document.body.style.overflow = ""), 250);
    //                 // } else {
    //                 // console.log(deg + itemClient.y / 100);
    //                 // const a = deg - itemClient.y / 100;
    //                 const a = deg - min / 3;
    //                 const b = opac + 1 / 3;
    //                 item.style.transform = `rotate(${a <= 0 || a > 35 ? 0 : a}deg)`;
    //                 // item.style.transform = `rotate(0deg)`;
    //                 item.style.opacity = b > 1 ? 1 : b;
    //                 // }
    //             });
    //         } else if (e.deltaY < 0) {
    //             // console.log(e.deltaY);
    //             items.forEach((item, i) => {
    //                 let deg = item.style.transform || max.toString();
    //                 deg = parseInt(deg.replace("rotate(", ""));
    //                 let opac = item.style.opacity || 0;
    //                 opac = parseFloat(opac);
    //                 opac = parseFloat(opac);
    //                 if (opac > 1) opac = 1;
    //                 if (opac < 0) opac = 0;
    //                 // if (deg >= 35) {
    //                 // item.style.transform = `rotate(${35}deg)`;
    //                 // animate[i].play();
    //                 // setTimeout(() => (document.body.style.overflow = ""), 250);
    //                 // } else {
    //                 // console.log(deg + itemClient.y / 100);
    //                 // const a = deg + itemClient.y / 100;
    //                 const a = deg + min / 3;
    //                 const b = opac - 1 / 3;
    //                 item.style.transform = `rotate(${a >= 35 ? 35 : a}deg)`;
    //                 // item.style.transform = `rotate(35deg)`;
    //                 item.style.opacity = b < 0 ? 0 : b;
    //                 // }
    //             });
    //         }
    //     }
    //     // if (document.body.style.overflow === "hidden") {
    //     //     if (e.deltaY > 0) {
    //     //         console.log(e.deltaY);
    //     //         items.forEach((item, i) => {
    //     //             let deg = item.style.transform || min.toString();
    //     //             deg = parseInt(deg.replace("rotate(", ""));
    //     //             let opac = item.style.opacity || 0;
    //     //             opac = parseFloat(opac);
    //     //             if (opac > 1) opac = 1;
    //     //             if (opac < 0) opac = 0;
    //     //             if (deg <= 0) {
    //     //                 item.style.transform = `rotate(${0}deg)`;
    //     //                 animate[i].play();
    //     //                 setTimeout(() => (document.body.style.overflow = ""), 250);
    //     //             } else {
    //     //                 item.style.transform = `rotate(${deg - e.deltaY / 100}deg)`;
    //     //                 item.style.opacity = opac + .1;
    //     //             }
    //     //         });
    //     //     } else if (e.deltaY < 0) {
    //     //         console.log(e.deltaY);
    //     //         items.forEach((item, i) => {
    //     //             let deg = item.style.transform || max.toString();
    //     //             deg = parseInt(deg.replace("rotate(", ""));
    //     //             let opac = item.style.opacity || 0;
    //     //             opac = parseFloat(opac);
    //     //             opac = parseFloat(opac);
    //     //             if (opac > 1) opac = 1;
    //     //             if (opac < 0) opac = 0;
    //     //             if (deg >= 35) {
    //     //                 item.style.transform = `rotate(${35}deg)`;
    //     //                 // animate[i].play();
    //     //                 setTimeout(() => (document.body.style.overflow = ""), 250);
    //     //             } else {
    //     //                 console.log(deg - e.deltaY / 100);
    //     //                 item.style.transform = `rotate(${deg - e.deltaY / 100}deg)`;
    //     //                 item.style.opacity = opac - .1;
    //     //             }
    //     //         });
    //     //     }
    //     // }
    // });

    // const observer = new IntersectionObserver(callbeck, options);
    // observer.observe(mainContainer);
};


export const animateGsap = () => {
    const container = document.querySelector(".payments");
    if (!container) return;
    const items = container.querySelectorAll(".animate");
    if (!items) return;
    const names = container.querySelectorAll(".name");

    gsap.registerPlugin(ScrollTrigger);

    const itemsA = gsap.utils.toArray('.payments .animate');
    console.log(itemsA);

    itemsA.forEach(item => {
        gsap.fromTo(item, {opacity: 0, rotate: 35}, {
            opacity: 1,
            rotate: 0,
            scrollTrigger: {
                trigger: '.payments',
                start: 'top bottom',
                end: 'bottom center',
                scrub: true,
            }
        })
    })
}