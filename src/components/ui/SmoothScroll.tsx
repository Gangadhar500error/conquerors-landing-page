import { useEffect } from "react";

const SmoothScroll = () => {
  useEffect(() => {
    const container = document.querySelector(".no-scrollbar");
    if (!container) return;

    const handleWheel = (e) => {
      if (container.scrollWidth <= container.clientWidth) return;

      e.preventDefault();
      container.scrollBy({
        left: e.deltaY > 0 ? 15 : -15,  // smaller steps
        behavior: "smooth",
      });
    };

    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return null;
};

export default SmoothScroll;
