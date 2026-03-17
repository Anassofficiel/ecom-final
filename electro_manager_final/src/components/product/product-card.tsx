"use client"

import * as React from "react"
import Link from "next/link"
import { ShoppingCart, Star, Tag } from "lucide-react"
import { useCart } from "@/lib/store"
import type { Product } from "@/lib/data"
import { cn } from "@/lib/utils"

interface ProductCardProps {
    product: Product
    className?: string
    showPromoBadge?: boolean
}

const stockConfig = {
    "in-stock": { label: "En Stock", className: "bg-emerald-100 text-emerald-700" },
    "low-stock": { label: "Stock Limité", className: "bg-amber-100 text-amber-700" },
    "out-of-stock": { label: "Rupture", className: "bg-red-100 text-red-600" },
}

export function ProductCard({ product, className, showPromoBadge = false }: ProductCardProps) {
    const addItem = useCart((state) => state.addItem)
    const [added, setAdded] = React.useState(false)

    const stock = stockConfig[product.stockStatus] ?? stockConfig["in-stock"]
    const isPromo = showPromoBadge && !!product.discount

    const handleAddToCart = (e: React.MouseEvent) => {
        e.preventDefault()
        if (!product.inStock) return
        addItem({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1,
            category: product.category,
        })
        setAdded(true)
        setTimeout(() => setAdded(false), 1500)
    }

    return (
        <div
            className={cn(
                "group flex flex-col bg-white border rounded-xl overflow-hidden transition-all duration-200",
                isPromo
                    ? "border-red-200 hover:shadow-[0_4px_20px_rgba(220,38,38,0.18)] hover:border-red-400"
                    : "border-gray-200 hover:shadow-md",
                className
            )}
        >
            {/* Image */}
            <Link href={`/product/${product.id}`} className="block relative aspect-square overflow-hidden bg-gray-50">
                {/* PROMO badge — Now Pink & 30% OFF */}
                {isPromo && (
                    <span
                        className="absolute top-2 left-2 z-20 flex items-center gap-1 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm"
                        style={{ backgroundColor: "#ff4d6d" }}
                    >
                        <Tag className="h-2.5 w-2.5" />
                        30% OFF
                    </span>
                )}
                {/* Discount % badge (non-promo) — Keep current logic or specific style if needed */}
                {product.discount && !isPromo && (
                    <span className="absolute top-2 left-2 z-10 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm">
                        -{product.discount}%
                    </span>
                )}
                {/* Secondary badge for promo (if we want to keep both or just one) — The user said "ALL discount labels to 30% OFF" */}
                {isPromo && (
                    <span
                        className="absolute top-2 right-2 z-20 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm"
                        style={{ backgroundColor: "#ff4d6d" }}
                    >
                        OFFRE SPÉCIALE
                    </span>
                )}
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain p-3 group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                />
            </Link>

            {/* Info */}
            <div className="flex flex-col flex-1 p-3 gap-2">
                {/* Stock badge */}
                <span className={cn("self-start text-[10px] font-semibold px-2 py-0.5 rounded-full", stock.className)}>
                    {stock.label}
                </span>

                {/* Name */}
                <Link
                    href={`/product/${product.id}`}
                    className="text-xs font-semibold text-gray-800 line-clamp-2 hover:text-red-600 transition-colors leading-snug"
                >
                    {product.name}
                </Link>

                {/* Rating */}
                <div className="flex items-center gap-1">
                    <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                    <span className="text-[10px] text-gray-500">{product.rating} ({product.reviews})</span>
                </div>

                {/* Price — current price normal, old price RED + strikethrough */}
                <div className="flex items-baseline gap-2 mt-auto">
                    <span className={cn("text-sm font-bold", isPromo ? "text-red-600" : "text-gray-900")}>
                        {product.price.toLocaleString()} DH
                    </span>
                    {product.originalPrice && (
                        <span className="text-[11px] font-semibold text-gray-900 line-through opacity-70">
                            {product.originalPrice.toLocaleString()} DH
                        </span>
                    )}
                </div>

                {/* Add to Cart */}
                <button
                    onClick={handleAddToCart}
                    disabled={!product.inStock || added}
                    className={cn(
                        "w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-semibold transition-colors duration-150",
                        product.inStock
                            ? added
                                ? "bg-emerald-600 text-white"
                                : "bg-red-600 hover:bg-red-700 text-white"
                            : "bg-gray-100 text-gray-400 cursor-not-allowed"
                    )}
                >
                    <ShoppingCart className="h-3.5 w-3.5" />
                    {!product.inStock ? "Rupture" : added ? "Ajouté ✓" : "Ajouter"}
                </button>
            </div>
        </div>
    )
}
