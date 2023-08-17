import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import anime from "animejs";

export const animateGsap = () => {
    const clientWidth = window.innerWidth;

    let textStart = "bottom bottom-=100";
    let textEnd = "top center-=200";
    let partnersStart = "bottom bottom-=100";
    let partnersEnd = "top center-=200";
    let followStart = "bottom bottom-=100";
    let followEnd = "top center-=200";

    const border = document.querySelectorAll(".item_rotate_animate");
    const deg = { agile: 0 };

    anime({
        targets: deg,
        agile: 360,
        loop: true,
        easing: "linear",
        duration: 8000,
        change: function () {
            border.forEach((item) => {
                item.style.background = `linear-gradient(${deg.agile}deg, rgba(2,255,121,1) 0%, rgba(2,255,121,0) 27%)`;
            });
        },
    });

    if (clientWidth <= 500) {
        textStart = "top bottom-=100";
        textEnd = "top center+=100";
        partnersStart = "top bottom+=400";
        partnersEnd = "top center+=300";
        followStart = "top bottom+=200";
        followEnd = "top center+=100";
    }

    console.log(clientWidth);
    if (ScrollTrigger.isTouch !== 1) {
        const container = document.querySelector(".payments");
        if (!container) return;
        const items = container.querySelectorAll(".animate");
        if (!items) return;
        const names = container.querySelectorAll(".name");

        gsap.registerPlugin(ScrollTrigger);

        const itemsA = gsap.utils.toArray(".payments .animate");
        const itemsT = gsap.utils.toArray(".animate_text");
        const itemsL = gsap.utils.toArray(".left_animate");
        const itemsR = gsap.utils.toArray(".right_animate");
        const itemsW = gsap.utils.toArray(".animate_tl");
        const lines = gsap.utils.toArray(".green_line");
        const linesDL = gsap.utils.toArray(".green_line_dl");
        const imgs = gsap.utils.toArray(".animate_img");
        const itemsHover = gsap.utils.toArray('.animate_hover');

        if (clientWidth <= 700) {
            itemsHover.forEach(item => {
                gsap.fromTo(
                    item,
                    {background: '#212225'},
                    {
                        background: '#4B4D53',
                        scrollTrigger: {
                            trigger: item,
                            start: 'top bottom-=200',
                            end: 'bottom center',
                            scrub: true,
                        }
                    }
                )
            })
        }

        gsap.fromTo(
            ".animate_partners",
            { opacity: 0, yPercent: 100 },
            {
                opacity: 1,
                yPercent: 0,
                scrollTrigger: {
                    trigger: ".animate_partners",
                    start: partnersStart,
                    end: partnersEnd,
                    scrub: true,
                },
            }
        );

        gsap.fromTo(
            ".animate_follow",
            { opacity: 0, yPercent: 100 },
            {
                opacity: 1,
                yPercent: 0,
                scrollTrigger: {
                    trigger: ".animate_follow",
                    start: followStart,
                    end: followEnd,
                    scrub: true,
                },
            }
        );

        linesDL.forEach((line) => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: line,
                    start: "top center+=500",
                    end: "top center-=700",
                    scrub: true,
                },
            });

            tl.fromTo(
                line,
                {
                    opacity: 0,
                    scaleX: 0,
                    transformOrigin: "right",
                },
                {
                    scaleX: 1,
                    opacity: 1,
                }
            );
            tl.fromTo(
                line,
                { scaleX: 1 },
                {
                    scaleX: 0,
                    transformOrigin: "left",
                    opacity: 0,
                }
            );
        });

        lines.forEach((line) => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: line,
                    start: "top center+=500",
                    end: "top center-=700",
                    scrub: true,
                },
            });

            tl.fromTo(
                line,
                {
                    opacity: 0,
                    scaleX: 0,
                    transformOrigin: "left",
                },
                { scaleX: 1, opacity: 1 }
            );
            tl.fromTo(
                line,
                { scaleX: 1 },
                {
                    scaleX: 0,
                    transformOrigin: "right",
                    opacity: 0,
                }
            );
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".animate_tl_main",
                start: "top bottom",
                end: "bottom center",
                scrub: true,
            },
        });

        gsap.fromTo(
            itemsW[0],
            { opacity: 0, xPercent: -100 },
            {
                opacity: 1,
                xPercent: 0,
                scrollTrigger: {
                    trigger: itemsW[0],
                    start: "top bottom",
                    end: "top center-=100",
                    scrub: true,
                },
            }
        );
        gsap.fromTo(
            itemsW[2],
            { opacity: 0, xPercent: 100 },
            {
                opacity: 1,
                xPercent: 0,
                scrollTrigger: {
                    trigger: itemsW[2],
                    start: "top bottom",
                    end: "top center-=100",
                    scrub: true,
                },
            }
        );
        gsap.fromTo(
            itemsW[1],
            { opacity: 0, yPercent: 100 },
            {
                opacity: 1,
                yPercent: 0,
                scrollTrigger: {
                    trigger: itemsW[1],
                    start: "top bottom+=400",
                    end: "top center+=300",
                    scrub: true,
                },
            }
        );

        if (clientWidth <= 1100) {
            gsap.fromTo(
                ".center_animate",
                { opacity: 0, rotate: 35 },
                {
                    opacity: 1,
                    rotate: 0,
                    scrollTrigger: {
                        trigger: ".center_animate",
                        start: "top bottom",
                        end: "top center",
                        scrub: true,
                    },
                }
            );
        } else {
            gsap.fromTo(
                ".center_animate",
                { opacity: 0, yPercent: 100 },
                {
                    opacity: 1,
                    yPercent: 0,
                    scrollTrigger: {
                        trigger: ".center_animate",
                        start: "top bottom+=200",
                        end: "top center+=200",
                        scrub: true,
                    },
                }
            );
        }

        itemsL.forEach((item) => {
            gsap.fromTo(
                item,
                { opacity: 0, rotate: 35 },
                {
                    opacity: 1,
                    rotate: 0,
                    scrollTrigger: {
                        trigger: item,
                        start: "top bottom",
                        end: "top center",
                        scrub: true,
                    },
                }
            );
        });

        itemsR.forEach((item) => {
            gsap.fromTo(
                item,
                { opacity: 0, rotate: -35 },
                {
                    opacity: 1,
                    rotate: 0,
                    scrollTrigger: {
                        trigger: item,
                        start: "top bottom",
                        end: "top center",
                        scrub: true,
                    },
                }
            );
        });

        itemsA.forEach((item) => {
            gsap.fromTo(
                item,
                { opacity: 0, rotate: 10 },
                {
                    opacity: 1,
                    rotate: 0,
                    scrollTrigger: {
                        trigger: ".payments",
                        start: "top bottom",
                        end: "bottom center",
                        scrub: true,
                    },
                }
            );
        });

        itemsT.forEach((item) => {
            gsap.fromTo(
                item,
                { opacity: 0, yPercent: 100 },
                {
                    opacity: 1,
                    yPercent: 0,
                    scrollTrigger: {
                        trigger: item,
                        start: textStart,
                        end: textEnd,
                        scrub: true,
                    },
                }
            );
        });

        imgs.forEach((item) => {
            gsap.fromTo(
                item,
                { opacity: 0, yPercent: 100 },
                {
                    opacity: 1,
                    yPercent: 0,
                    scrollTrigger: {
                        trigger: item,
                        start: "top bottom+=100",
                        end: "top center-=100",
                        scrub: true,
                    },
                }
            );
        });
    }
};
