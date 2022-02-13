import { useEffect, useRef, useState } from "react";

export const useNearScreen = ({
  distance = "100px",
  externalRef = null,
  once = true,
} = {}) => {
  const nearRef = useRef();
  const [isNearScreen, setIsNearScreen] = useState(false);

  useEffect(() => {
    let observer;
    const element = externalRef ? externalRef.current : nearRef.current;

    const onChange = (entries, observer) => {
      const el = entries[0];
      if (el.isIntersecting) {
        setIsNearScreen(true);
        once && observer.disconnect();
      } else {
        !once && setIsNearScreen(false);
      }
    };

    //Para los navegadores que no tienen el intersection observer
    Promise.resolve(
      typeof IntersectionObserver !== "undefined"
        ? IntersectionObserver
        : import("intersection-observer")
    ).then(() => {
      observer = new IntersectionObserver(onChange, {
        rootMargin: distance,
      });

      if (element) observer.observe(element);
    });

    return () => observer && observer.disconnect();
  });

  return { isNearScreen, nearRef };
};
