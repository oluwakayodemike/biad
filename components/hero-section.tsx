"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"

const heroImages = [
  { src: "/images/hero-1.jpg", alt: "BIAD Streetwear Campaign 1" },
  { src: "/images/hero-2.jpg", alt: "BIAD Streetwear Campaign 2" },
  { src: "/images/hero-3.jpg", alt: "BIAD Streetwear Campaign 3" },
]

const stackClasses = [
  "card-stack-1",
  "card-stack-2",
  "card-stack-3",
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 pt-24 pb-0 md:px-8 md:pt-28 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col md:flex-row md:items-center md:justify-between">
        {/* Rotating card stack -- on top for mobile, right for desktop */}
        <div className="flex justify-center md:order-2 md:w-1/2 md:justify-end">
          <div className="relative h-64 w-56 md:h-[380px] md:w-[300px] lg:h-[440px] lg:w-[360px]">
            {heroImages.map((img, i) => (
              <div
                key={img.src}
                className={`absolute inset-0 overflow-hidden border-2 border-foreground/20 ${stackClasses[i]}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 224px, (max-width: 1024px) 300px, 360px"
                  priority={i === 0}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Text content -- below cards on mobile, left on desktop */}
        <div className="mt-10 text-center md:order-1 md:mt-0 md:w-1/2 md:text-left">
          <h1 className="font-serif text-foreground">
            <span className="animate-text-reveal block text-4xl leading-[0.95] tracking-[0.04em] md:text-6xl lg:text-7xl">
              For the outsiders.
            </span>
            <span
              className="animate-text-reveal block text-4xl leading-[0.95] tracking-[0.04em] md:text-6xl lg:text-7xl"
              style={{ animationDelay: "0.2s" }}
            >
              The late-night creatives.
            </span>
            <span
              className="animate-text-reveal block text-4xl leading-[0.95] tracking-[0.04em] md:text-6xl lg:text-7xl"
              style={{ animationDelay: "0.4s" }}
            >
              The rule-breakers.
            </span>
          </h1>

          <a
            href="#"
            className="animate-fade-in group mt-8 inline-flex items-center border-2 border-foreground px-8 py-3 font-serif text-base tracking-[0.2em] text-foreground transition-colors hover:bg-foreground hover:text-background md:mt-10 md:px-10 md:py-4 md:text-lg"
            style={{ animationDelay: "0.6s", animationFillMode: "backwards" }}
          >
            SHOP DROP
            <ArrowRight
              className="ml-3 size-5 transition-transform group-hover:translate-x-2"
              strokeWidth={2}
            />
          </a>
        </div>
      </div>

      {/* Marquee ticker */}
      <div className="mt-14 overflow-hidden border-t border-b border-border py-4 md:mt-20 md:py-5">
        <div className="animate-marquee flex whitespace-nowrap items-center">
          {Array.from({ length: 10 }).map((_, i) => (
            <Image
              key={i}
              src="/images/eternalxbiad.svg"
              alt="ETERNALxBIAD"
              width={100}
              height={24}
              className="mx-8 invert opacity-50 point-events-none select-none md:mx-12"
            />
          ))}
          {Array.from({ length: 10 }).map((_, i) => (
            <Image
              key={`dup-${i}`}
              src="/images/eternalxbiad.svg"
              alt="ETERNALxBIAD"
              width={100}
              height={24}
              className="mx-8 invert opacity-50 point-events-none select-none md:mx-12"
            />
          ))}
        </div>
      </div>
    </section>
  )
}