"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Scrollbar from "smooth-scrollbar";

gsap.registerPlugin(ScrollTrigger);

export default function Scroll() {
  useEffect(() => {
  const mainContainer = document.querySelector(".main") as HTMLElement | null;
  if (!mainContainer) return;

  const scrollBar = Scrollbar.init(mainContainer, {
    damping: 0.06,
    alwaysShowTracks: false,
  });

  ScrollTrigger.scrollerProxy(mainContainer, {
    scrollTop(value) {
      if (arguments.length) scrollBar.scrollTop = value as number;
      return scrollBar.scrollTop;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
  });

  scrollBar.addListener(ScrollTrigger.update);
  ScrollTrigger.defaults({ scroller: mainContainer });

  setTimeout(() => {
    ScrollTrigger.refresh(); // ini penting buat update semua posisi!
  }, 100); // 100–300ms cukup

  const sectionColor = document.querySelectorAll("[data-bgcolor]") as NodeListOf<HTMLElement>;

  sectionColor.forEach((colorSection, i) => {
    const prevBgColor = i === 0 ? "#ffffff" : sectionColor[i - 1].dataset.bgcolor;
    const prevTextColor = i === 0 ? "#000000" : sectionColor[i - 1].dataset.textcolor;

    ScrollTrigger.create({
      trigger: colorSection,
      start: "top 50%",
      onEnter: () =>
        gsap.to(mainContainer, {
          backgroundColor: colorSection.dataset.bgcolor,
          color: colorSection.dataset.textcolor,
          duration: 0.5,
        }),
      onLeaveBack: () =>
        gsap.to(mainContainer, {
          backgroundColor: prevBgColor,
          color: prevTextColor,
          duration: 0.5,
        }),
    });
  });

  return () => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    scrollBar.destroy();
  };
}, []);


  return null;
}
