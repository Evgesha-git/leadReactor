import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

export const animateGsap = () => {
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
        // const lineR = gsap.utils.toArray(".green_line_r");
        // const lineL = gsap.utils.toArray(".green_line_l");
        const lines = gsap.utils.toArray(".green_line");
        const linesDL = gsap.utils.toArray(".green_line_dl");

        linesDL.forEach((line) => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: line,
                    start: "top center+=300",
                    end: "top center-=300",
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
                    start: "top center+=300",
                    end: "top center-=300",
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

        // lineR.forEach((item) => {
        //     gsap.fromTo(
        //         item,
        //         { rotate: 5, scaleX: 0 },
        //         {
        //             scaleX: 1,
        //             duration: 2,
        //             scrollTrigger: {
        //                 trigger: item,
        //                 start: "top center",
        //                 end: "top center-=100",

        //                 // scrub: true,
        //             },
        //         }
        //     );
        // });
        // lineL.forEach((item) => {
        //     gsap.fromTo(
        //         item,
        //         { rotate: -5, scaleX: 0 },
        //         {
        //             scaleX: 1,
        //             duration: 2,
        //             scrollTrigger: {
        //                 trigger: item,
        //                 start: "top center",
        //                 end: "top center-=100",

        //                 // scrub: true,
        //             },
        //         }
        //     );
        // });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".animate_tl_main",
                start: "top bottom",
                end: "bottom center",
                scrub: true,
            },
        });

        // itemsW.forEach(item => {
        //     tl.fromTo(item, {opacity: 0, xPercent: 100}, {opacity: 1, xPercent: 0});
        // });

        gsap.fromTo(
            itemsW[0],
            { opacity: 0, xPercent: -100 },
            {
                opacity: 1,
                xPercent: 0,
                scrollTrigger: {
                    trigger: ".animate_tl_main",
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
                    trigger: ".animate_tl_main",
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
                    trigger: ".animate_tl_main",
                    start: "top bottom",
                    end: "top center-=100",
                    scrub: true,
                },
            }
        );

        gsap.fromTo(
            ".center_animate",
            { opacity: 0, yPercent: 100 },
            {
                opacity: 1,
                yPercent: 0,
                scrollTrigger: {
                    trigger: ".center_animate",
                    start: "top bottom",
                    end: "bottom center",
                    scrub: true,
                },
            }
        );

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
                        start: "bottom bottom-=100",
                        end: "top center-=200",
                        scrub: true,
                    },
                }
            );
        });
    }
};
