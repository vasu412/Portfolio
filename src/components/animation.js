import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
const animation = () => {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

  gsap.fromTo(
    "#heroVideo",
    { scale: 1.1 },
    {
      scale: 1,
      ease: "none",
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    }
  );

  gsap.utils.toArray("section").forEach((section, i) => {
    const bg = section.querySelector(".bg");

    if (!bg) return; // Ensure the bg exists before animating

    // Parallax effect for background images
    const getRatio = (el) =>
      window.innerHeight / (window.innerHeight + el.offsetHeight);

    gsap.fromTo(
      bg,
      {
        backgroundPosition: () =>
          i === 0
            ? "50% 0px"
            : `50% ${-window.innerHeight * getRatio(section)}px`,
      },
      {
        backgroundPosition: () =>
          `50% ${window.innerHeight * (1 - getRatio(section))}px`,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: i === 0 ? "top top" : "top bottom",
          end: "bottom top",
          scrub: true,
          invalidateOnRefresh: true,
        },
      }
    );
  });
};

export default animation;
