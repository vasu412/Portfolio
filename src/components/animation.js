import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

export const handleSectionChange = (
  setStateCallback,
  nextSectionId,
  val,
  isTransitioning,
  setIsTransitioning
) => {
  if (isTransitioning) return; // Prevent multiple clicks during transition
  setIsTransitioning(true);
  console.log(setIsTransitioning);
  const currentSection = document.querySelector(".bg"); // Get current active section
  const nextSection = document.getElementById(nextSectionId); // Get next section by ID

  if (!currentSection || !nextSection) {
    console.error("Target section(s) not found");
    setIsTransitioning(false);
    return; // Exit if sections are not found
  }

  // Animate the current section sliding out
  gsap.to(currentSection, {
    duration: 0.5,
    onComplete: () => {
      setStateCallback(val);
      gsap.fromTo(
        nextSection,
        { x: "100%" },
        {
          x: "0%",
          duration: 0.5,
          onComplete: () => {
            setIsTransitioning(false); // Allow transitions again
          },
        }
      );
    },
  });
};

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
