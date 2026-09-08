"use client";

import { useRef } from "react";
import Image, { ImageProps } from "next/image";
import { gsap, useGSAP } from "@/lib/gsap-config";
import { cn } from "@/lib/utils";

interface ParallaxImageProps extends Omit<ImageProps, "className"> {
  containerClassName?: string;
  imageClassName?: string;
  speed?: number;
}

export function ParallaxImage({
  containerClassName,
  imageClassName,
  speed = 1.2,
  alt,
  ...props
}: ParallaxImageProps) {
  const container = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useGSAP(
    () => {
      if (!imageRef.current) return;
      if (window.innerWidth < 768) return; // Disable parallax scroll effect on mobile viewports
      
      gsap.to(imageRef.current, {
        y: () => (window.innerHeight - imageRef.current!.getBoundingClientRect().top) * (speed - 1),
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: container }
  );

  return (
    <div
      ref={container}
      className={cn("relative overflow-hidden w-full h-full", containerClassName)}
    >
      <div className="absolute inset-[-15%] w-[130%] h-[130%]">
        <Image
          ref={imageRef}
          alt={alt}
          fill
          className={cn("object-cover", imageClassName)}
          {...props}
        />
      </div>
    </div>
  );
}
