"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

import { steps } from "./work.data";

export default function Work() {
  const [currentStep, setCurrentStep] = useState(0);
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = document.querySelectorAll("[data-step]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-step"));
            setCurrentStep(index);
          }
        });
      },
      {
        threshold: 0.5,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!container.current) return;

    gsap.fromTo(
      container.current,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
      },
    );
  }, [currentStep]);

  return (
    <div
      className="flex-1 overflow-y-auto scroll-smooth"
      style={{ WebkitOverflowScrolling: "touch" }}
    >
      <div className="sticky top-0 h-screen p-5">
        <p className="text-2xl font-semibold">How it works</p>
        <div ref={container} className="mt-10">
          <p className="text-2xl font-bold">{steps[currentStep].id}</p>
          <p className="text-4xl font-semibold">{steps[currentStep].title}</p>
          <p className="text-muted-foreground">
            {steps[currentStep].description}
          </p>
        </div>
      </div>
      <div>
        {steps.map((_, index) => (
          <section key={index} data-step={index} className="h-screen" />
        ))}
      </div>
    </div>
  );
}
