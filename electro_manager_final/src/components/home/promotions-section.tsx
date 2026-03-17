"use client"

import * as React from "react"
import { getPromotionProducts } from "@/lib/data"
import type { Product } from "@/lib/data"
import { ProductCard } from "@/components/product/product-card"

// ─── Countdown ───────────────────────────────────────────────────────────────
function useCountdown(target: Date) {
    const [t, setT] = React.useState({ days: 0, hours: 0, mins: 0, secs: 0 })
    React.useEffect(() => {
        const tick = () => {
            const diff = target.getTime() - Date.now()
            if (diff <= 0) return
            setT({
                days: Math.floor(diff / 86400000),
                hours: Math.floor((diff % 86400000) / 3600000),
                mins: Math.floor((diff % 3600000) / 60000),
                secs: Math.floor((diff % 60000) / 1000),
            })
        }
        tick()
        const id = setInterval(tick, 1000)
        return () => clearInterval(id)
    }, [target])
    return t
}

// ─── Filter config ────────────────────────────────────────────────────────────
// Each tab has specific product IDs assigned so they show unique products
const PROMO_END = new Date("2026-04-01T00:00:00Z")

const FILTER_TABS = [
    { id: "all", label: "Voir Tout", emoji: "⭐" },
    { id: "kitchen", label: "Cuisine", emoji: "🍳" },
    { id: "laundry", label: "Lavage & Froid", emoji: "🧺" },
    { id: "tech", label: "TV & Tech", emoji: "📺" },
    { id: "coffee", label: "Café & Petits Élec.", emoji: "☕" },
]

// Product IDs per filter group (unique, non-overlapping for non-all tabs)
const FILTER_PRODUCT_IDS: Record<string, string[]> = {
    kitchen: ["r3", "r5", "r8", "k3", "k4", "k6", "ov2"],
    laundry: ["w2", "w4", "w5", "w7", "w8", "d2"],
    tech: ["t4", "t5", "t7", "sa1", "sa2"],
    coffee: ["c2", "c3", "c5", "af1", "af4", "af5", "cw2", "cw3"],
}

export function PromotionsSection() {
    const allPromo = getPromotionProducts()
    const timer = useCountdown(PROMO_END)
    const [activeTab, setActiveTab] = React.useState("all")
    const [page, setPage] = React.useState(1)
    const itemsPerPage = 5

    const displayed: Product[] = React.useMemo(() => {
        if (activeTab === "all") return allPromo
        const ids = FILTER_PRODUCT_IDS[activeTab] ?? []
        return allPromo.filter((p) => ids.includes(p.id))
    }, [activeTab, allPromo])

    // Pagination logic
    const totalPages = Math.ceil(displayed.length / itemsPerPage)
    const paginated = React.useMemo(() => {
        const start = (page - 1) * itemsPerPage
        return displayed.slice(start, start + itemsPerPage)
    }, [displayed, page, itemsPerPage])

    // Reset page when tab changes
    React.useEffect(() => {
        setPage(1)
    }, [activeTab])

    return (
        <section id="promotions" className="py-14 bg-gray-50">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="mb-8 text-center">
                    <span className="inline-block bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-3">
                        Offres Limitées
                    </span>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Promotions en Cours 🔥</h2>
                    <p className="text-gray-500 text-sm">Des prix exceptionnels pour une durée limitée.</p>
                </div>

                {/* Banner + Countdown */}
                <div className="relative rounded-2xl overflow-hidden mb-8 bg-gradient-to-r from-red-700 to-red-500 min-h-[200px] flex items-center">
                    <div className="absolute inset-0">
                        <img
                            src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=1600&auto=format&fit=crop"
                            alt="Promotions banner"
                            className="w-full h-full object-cover opacity-20"
                        />
                    </div>
                    <div className="relative z-10 px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6 w-full">
                        <div className="text-white text-center md:text-left">
                            <p className="text-sm font-semibold opacity-80 uppercase tracking-widest mb-1">Fin de la promotion dans :</p>
                            <h3 className="text-2xl md:text-3xl font-bold">
                                Jusqu'à <span className="text-yellow-300">40% de réduction !</span>
                            </h3>
                            <p className="text-sm opacity-70 mt-1">Sur une sélection d'appareils électroménagers premium</p>
                        </div>
                        {/* Countdown */}
                        <div className="flex items-center gap-3">
                            {[
                                { val: timer.days, label: "Jours" },
                                { val: timer.hours, label: "Heures" },
                                { val: timer.mins, label: "Min" },
                                { val: timer.secs, label: "Sec" },
                            ].map((t, i) => (
                                <React.Fragment key={t.label}>
                                    {i > 0 && <span className="text-white/50 text-2xl font-bold">:</span>}
                                    <div className="bg-white/15 backdrop-blur rounded-xl p-3 min-w-[60px] text-center">
                                        <span className="text-2xl font-black text-white tabular-nums">
                                            {String(t.val).padStart(2, "0")}
                                        </span>
                                        <p className="text-[10px] text-white/70 uppercase tracking-wider mt-0.5">{t.label}</p>
                                    </div>
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ── Filter Tabs ─────────────────────────────────────────────────── */}
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {FILTER_TABS.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-semibold border-2 transition-all duration-200 ${activeTab === tab.id
                                ? "bg-red-600 text-white border-red-600 shadow-md"
                                : "bg-white text-gray-700 border-gray-200 hover:border-red-400 hover:text-red-600"
                                }`}
                        >
                            <span>{tab.emoji}</span>
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* ── Product Grid ─────────────────────────────────────────────────── */}
                {displayed.length > 0 ? (
                    <>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 mb-10">
                            {paginated.map((product) => (
                                <ProductCard key={product.id} product={product} showPromoBadge />
                            ))}
                        </div>

                        {/* Pagination */}
                        {totalPages > 1 && (
                            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => {
                                            if (page > 1) {
                                                setPage(page - 1)
                                                document.getElementById("promotions")?.scrollIntoView({ behavior: "smooth" })
                                            }
                                        }}
                                        disabled={page === 1}
                                        className={`px-4 h-10 rounded-lg text-sm font-bold border transition-all ${page === 1
                                            ? "bg-gray-50 text-gray-300 border-gray-100 cursor-not-allowed"
                                            : "bg-white text-gray-600 border-gray-200 hover:border-red-400 hover:text-red-600"
                                            }`}
                                    >
                                        ← Précédent
                                    </button>

                                    {Array.from({ length: totalPages }).map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={() => {
                                                setPage(i + 1)
                                                document.getElementById("promotions")?.scrollIntoView({ behavior: "smooth" })
                                            }}
                                            className={`h-10 w-10 rounded-lg text-sm font-bold flex items-center justify-center transition-all ${page === i + 1
                                                ? "bg-red-600 text-white shadow-md scale-110"
                                                : "bg-white text-gray-600 border border-gray-200 hover:border-red-400 hover:text-red-600"
                                                }`}
                                        >
                                            {i + 1}
                                        </button>
                                    ))}

                                    <button
                                        onClick={() => {
                                            if (page < totalPages) {
                                                setPage(page + 1)
                                                document.getElementById("promotions")?.scrollIntoView({ behavior: "smooth" })
                                            }
                                        }}
                                        disabled={page === totalPages}
                                        className={`px-4 h-10 rounded-lg text-sm font-bold border transition-all ${page === totalPages
                                            ? "bg-gray-50 text-gray-300 border-gray-100 cursor-not-allowed"
                                            : "bg-white text-gray-600 border-gray-200 hover:border-red-400 hover:text-red-600"
                                            }`}
                                    >
                                        Suivant →
                                    </button>
                                </div>
                                <p className="text-xs text-gray-400 font-medium italic">
                                    Page {page} sur {totalPages}
                                </p>
                            </div>
                        )}
                    </>
                ) : (
                    <div className="text-center py-16 text-gray-400">
                        <p className="text-lg font-semibold mb-1">Aucun produit dans cette catégorie</p>
                        <button
                            onClick={() => setActiveTab("all")}
                            className="text-red-600 hover:underline text-sm font-medium"
                        >
                            Voir toutes les promotions
                        </button>
                    </div>
                )}
            </div>
        </section>
    )
}
