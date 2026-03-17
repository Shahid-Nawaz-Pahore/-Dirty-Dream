import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Counter = ({ value = 1000, duration = 1 , point }) => {
  const countRef = useRef(null);

  useGSAP(() => {
    const obj = { val: 0 };

  gsap.to(obj, {
    val: value,
    duration: duration,
    ease: "power2.out",
    scrollTrigger: {
      trigger: countRef.current,
      start: "top 80%",
    },
    onUpdate: () => {
        if(point){
            countRef.current.innerText = obj.val.toFixed(1);
        }else{
            countRef.current.innerText = Math.floor(obj.val).toLocaleString();
        }
    }
  });
  }, []);

  return <span ref={countRef}>0</span>;
};

export default Counter;