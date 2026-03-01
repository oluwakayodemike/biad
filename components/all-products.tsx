"use client"

import { useState } from "react"
import Image from "next/image"
import { Plus, SlidersHorizontal } from "lucide-react"

const allProducts = [
  {
    id: 1,
    name: "Biad x Eternal",
    price: "10,000.00",
    image: "/images/product-1.jpg",
    category: "tops",
  },
  {
    id: 2,
    name: "8ball Signature Polo",
    price: "25,000.00",
    image: "/images/product-2.jpg",
    category: "tops",
  },
  {
    id: 3,
    name: "Dragon Hood",
    price: "15,000.00",
    image: "/images/product-3.jpg",
    category: "hoodies",
  },
  {
    id: 4,
    name: "Biad x Eternal II",
    price: "10,000.00",
    image: "/images/product-4.jpg",
    category: "tops",
  },
  {
    id: 5,
    name: "8ball Cargo Pants",
    price: "25,000.00",
    image: "/images/product-5.jpg",
    category: "bottoms",
  },
  {
    id: 6,
    name: "Dragon Windbreaker",
    price: "15,000.00",
    image: "/images/product-6.jpg",
    category: "outerwear",
  },
  {
    id: 7,
    name: "Biad Bomber",
    price: "30,000.00",
    image: "/images/product-7.jpg",
    category: "outerwear",
  },
  {
    id: 8,
    name: "Mesh Jersey Tank",
    price: "12,000.00",
    image: "/images/product-8.jpg",
    category: "tops",
  },
  {
    id: 9,
    name: "Split Hood",
    price: "18,000.00",
    image: "/images/product-9.jpg",
    category: "hoodies",
  },
  {
    id: 10,
    name: "Distressed Denim",
    price: "22,000.00",
    image: "/images/product-10.jpg",
    category: "bottoms",
  }
]

const filters = ["ALL", "TOPS", "HOODIES", "BOTTOMS"]

export function AllProducts() {
  const [activeFilter, setActiveFilter] = useState("ALL")
  const [showFilters, setShowFilters] = useState(false)

  const filteredProducts =
    activeFilter === "ALL"
      ? allProducts
      : allProducts.filter((p) => p.category === activeFilter.toLowerCase())

  return (
    <section className="px-4 pt-24 pb-16 md:px-8 md:pt-32 md:pb-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* page header */}
        <div className="mb-10 flex flex-col md:mb-16">
          <h1 className="animate-text-reveal font-serif text-5xl tracking-[0.08em] text-foreground md:text-7xl lg:text-8xl">
            ALL DROPS
          </h1>
          <div className="mt-4 flex items-center justify-between md:mt-6">
            <p
              className="animate-fade-in font-sans text-sm tracking-wide text-muted-foreground md:text-base"
              style={{ animationDelay: "0.3s", animationFillMode: "backwards" }}
            >
              {filteredProducts.length} PRODUCT{filteredProducts.length !== 1 ? "S" : ""}
            </p>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="animate-fade-in flex items-center font-sans text-sm tracking-wide text-muted-foreground transition-colors hover:text-foreground md:hidden"
              style={{ animationDelay: "0.3s", animationFillMode: "backwards" }}
              aria-label="Toggle filters"
            >
              <SlidersHorizontal className="mr-2 size-4" strokeWidth={1.5} />
              FILTER
            </button>
          </div>
        </div>

        {/* filter bar */}
        <nav
          className={`mb-8 overflow-x-auto border-b border-border md:mb-12 ${
            showFilters ? "block" : "hidden md:block"
          }`}
        >
          <div className="flex min-w-max">
            {filters.map((filter, i) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`relative px-4 py-3 font-serif text-sm tracking-[0.2em] transition-colors md:px-6 md:py-4 md:text-base ${
                  activeFilter === filter
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                style={{ animationDelay: `${i * 50}ms` }}
              >
                {filter}
                {activeFilter === filter && (
                  <span className="absolute bottom-0 left-0 h-0.5 w-full bg-foreground" />
                )}
              </button>
            ))}
          </div>
        </nav>

        {/* prroduct grid - 2 cols mobile, 3 cols tablet, 4 cols desktop */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
          {filteredProducts.map((product, index) => (
            <a
              key={product.id}
              href="#"
              className="animate-slide-up group block"
              style={{
                animationDelay: `${0.4 + index * 0.06}s`,
                animationFillMode: "backwards",
              }}
            >
              <div className="relative aspect-square overflow-hidden border border-border bg-card transition-all duration-300 group-hover:border-foreground">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                {/* quick add */}
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
      </div>
    </section>
  )
}
