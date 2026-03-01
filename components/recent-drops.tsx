"use client"

import Image from "next/image"
import { Plus } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Biad x Eternal",
    price: "10,000.00",
    image: "/images/product-1.jpg",
  },
  {
    id: 2,
    name: "8ball Signature Polo",
    price: "25,000.00",
    image: "/images/product-2.jpg",
  },
  {
    id: 3,
    name: "Dragon Hood",
    price: "15,000.00",
    image: "/images/product-3.jpg",
  },
  {
    id: 4,
    name: "Biad x Eternal",
    price: "10,000.00",
    image: "/images/product-4.jpg",
  },
  {
    id: 5,
    name: "8ball Signature Polo",
    price: "25,000.00",
    image: "/images/product-5.jpg",
  },
  {
    id: 6,
    name: "Dragon Hood",
    price: "15,000.00",
    image: "/images/product-6.jpg",
  },
]

export function RecentDrops() {
  return (
    <section className="px-4 py-16 md:px-8 md:py-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <h2 className="mb-10 font-serif text-3xl tracking-[0.12em] text-foreground md:mb-14 md:text-5xl lg:text-6xl">
          RECENT DROPS
        </h2>

        {/* Product grid - 2 cols mobile, 3 cols desktop matching the sketch */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {products.map((product) => (
            <a
              key={product.id}
              href="#"
              className="group block"
            >
              <div className="relative aspect-square overflow-hidden border border-border bg-card transition-all duration-300 group-hover:border-foreground">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 350px"
                />
                {/* Quick add button - bottom left like the sketch */}
                <button
                  className="absolute bottom-3 left-3 flex size-9 items-center justify-center border border-foreground/40 bg-background/80 text-foreground opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100 hover:bg-foreground hover:text-background"
                  aria-label={`Add ${product.name} to cart`}
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                  }}
                >
                  <Plus className="size-4" strokeWidth={2} />
                </button>
              </div>
              <div className="mt-3">
                <h3 className="font-sans text-sm font-medium tracking-wide text-foreground md:text-base">
                  {product.name}
                </h3>
                <p className="mt-0.5 font-sans text-xs text-muted-foreground md:text-sm">
                  {"\u20A6"}{product.price} NGN
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* View all button */}
        <div className="mt-12 flex justify-center md:mt-16">
          <a
            href="/drops"
            className="group inline-flex items-center border-2 border-foreground px-10 py-3 font-serif text-base tracking-[0.2em] text-foreground transition-all hover:bg-foreground hover:text-background md:px-14 md:py-4 md:text-lg"
          >
            VIEW ALL
          </a>
        </div>
      </div>
    </section>
  )
}
