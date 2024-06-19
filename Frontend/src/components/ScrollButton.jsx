// import React, { useState, useEffect } from "react";
// import { FaAngleUp } from "react-icons/fa";
// import './ScrollButton.css';

// const ScrollButton = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const toggleVisibility = () => {
//       if (window.pageYOffset > 300) {
//         setIsVisible(true);
//       } else {
//         setIsVisible(false);
//       }
//     };

//     window.addEventListener("scroll", toggleVisibility);

//     return () => {
//       window.removeEventListener("scroll", toggleVisibility);
//     };
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <div
//       id="progress"
//       style={{ display: isVisible ? "block" : "none" }}
//       onClick={scrollToTop}
//     >
//       <span id="progress-value">
//         <FaAngleUp className="fa-solid fa-angles-up" />
//       </span>
//     </div>
//   );
// };

// export default ScrollButton;
import React, { useState, useEffect } from "react";
import { FaAngleUp } from "react-icons/fa";
import './ScrollButton.css';

const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const yOffset = window.pageYOffset || document.documentElement.scrollTop;
      if (yOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      id="progress"
      style={{ display: isVisible ? "block" : "none" }}
      onClick={scrollToTop}
    >
      <span id="progress-value">
        <FaAngleUp className="fa-solid fa-angles-up" />
      </span>
    </div>
  );
};

export default ScrollButton;
