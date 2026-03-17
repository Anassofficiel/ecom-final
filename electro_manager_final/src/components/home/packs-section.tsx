"use client"

import * as React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { packs } from "@/lib/data"

const WHATSAPP_NUMBER = "212608788782"

const badgeColors: Record<string, string> = {
    "Best Seller": "bg-blue-600",
    "Hot Deal": "bg-orange-500",
    "New": "bg-emerald-600",
    "Premium": "bg-purple-600",
    "Trending": "bg-pink-500",
    "Limited": "bg-rose-600",
    "VIP": "bg-yellow-500 text-gray-900",
}

// Short specs per product slot inside each pack (index = slot 0,1,2)
// Keyed by pack.id
const PACK_PRODUCT_SPECS: Record<string, Array<Record<string, string>>> = {
    pack1: [
        { Type: "Réfrigérateur 4 portes", Capacité: "648 L", Énergie: "A+" },
        { Type: "Four intégré", Capacité: "71 L", Fonctions: "4D HotAir" },
        { Type: "Lave-linge", Capacité: "10.5 kg", RPM: "1400" },
    ],
    pack2: [
        { Type: "Expresso automatique", Pression: "15 bar", Broyeur: "Intégré" },
        { Type: "Robot pâtissier", Capacité: "5.5 L", Vitesses: "10" },
        { Type: "Friteuse à air", Capacité: "6.2 L", Puissance: "1550 W" },
    ],
    pack3: [
        { Type: "TV OLED 4K", Taille: '55"', Hz: "120" },
        { Type: "Barre de son", Puissance: "400 W", Canaux: "3.1" },
        { Type: "Ampoules smart", Protocole: "Wi-Fi", Couleurs: "16 M" },
    ],
    pack4: [
        { Type: "Lave-linge", Capacité: "10 kg", RPM: "1400" },
        { Type: "Sèche-linge", Capacité: "9 kg", Énergie: "A++" },
        { Type: "Fer à vapeur", Puissance: "2400 W", Pression: "6.5 bar" },
    ],
    pack5: [
        { Type: "Robot pâtissier", Capacité: "5.5 L", Puissance: "325 W" },
        { Type: "Four intégré", Capacité: "71 L", Vapeur: "Oui" },
        { Type: "Cocotte fonte", Diamètre: "28 cm", Capacité: "6.3 L" },
    ],
    pack6: [
        { Type: "Réfrigérateur", Capacité: "635 L", "No Frost": "Oui" },
        { Type: "Lave-linge", Capacité: "9 kg", EcoBubble: "Oui" },
        { Type: "Lave-vaisselle", Couverts: "13", Énergie: "B" },
    ],
    pack7: [
        { Type: "Friteuse 11-en-1", Capacité: "7.5 L", Fonctions: "11" },
        { Type: "Friteuse Dual Blaze", Capacité: "6.4 L", Puissance: "1800 W" },
        { Type: "Friteuse Easy Fry", Capacité: "6.2 L", Programmes: "8" },
    ],
    pack8: [
        { Type: "Expresso La Specialista", Pression: "15 bar", Broyeur: "Oui" },
        { Type: "Nespresso Vertuo", Tailles: "5 formats", Réservoir: "1.1 L" },
        { Type: "Philips LatteGo", Variétés: "5", Mousse: "LatteGo" },
    ],
    pack9: [
        { Type: "Aspirateur sans fil", Autonomie: "60 min", Filtration: "HEPA" },
        { Type: "Purificateur d'air", Surface: "50 m²", Filtre: "HEPA H13" },
        { Type: "Fer vapeur", Puissance: "2400 W", Pression: "6.5 bar" },
    ],
    pack10: [
        { Type: "TV Neo QLED 8K", Taille: '65"', Hz: "120" },
        { Type: "TV OLED 4K", Taille: '55"', Hz: "120" },
        { Type: "TV Ambilight OLED", Taille: '65"', Ambilight: "4 côtés" },
    ],
}

export function PacksSection() {
    const router = useRouter()

    return (
        <section className="py-14 bg-white">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="mb-8 text-center">
                    <span className="inline-block bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-3">
                        Offres Groupées
                    </span>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Nos Packs Exclusifs 🎁</h2>
                    <p className="text-gray-500 text-sm">Achetez en pack et économisez jusqu'à 25%</p>
                </div>

                {/* Banner */}
                <div className="relative rounded-2xl overflow-hidden mb-10 bg-gradient-to-r from-gray-900 to-gray-700 min-h-[160px] flex items-center">
                    <div className="absolute inset-0">
                        <img
                            src="https://images.unsplash.com/photo-1556912167-f556f1f39fdf?q=80&w=1600&auto=format&fit=crop"
                            alt="Packs banner"
                            className="w-full h-full object-cover opacity-20"
                        />
                    </div>
                    <div className="relative z-10 px-8 py-8 text-white">
                        <h3 className="text-xl md:text-2xl font-bold mb-1">
                            🏷️ Économisez plus en achetant plus
                        </h3>
                        <p className="text-sm text-white/70">
                            Nos packs combinent les meilleurs appareils à des prix imbattables.
                        </p>
                    </div>
                </div>

                {/* Pack Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {packs.map((pack) => {
                        const specs = PACK_PRODUCT_SPECS[pack.id] ?? []

                        return (
                            <div
                                key={pack.id}
                                className="relative rounded-2xl bg-white overflow-hidden hover:shadow-xl transition-shadow"
                                style={{
                                    boxShadow: "0 0 0 2px #f59e0b, 0 0 20px 4px rgba(245, 158, 11, 0.15)",
                                }}
                            >
                                {/* Badge */}
                                {pack.badge && (
                                    <div className={`absolute top-3 left-3 z-10 text-[10px] font-bold px-2.5 py-1 rounded-full text-white ${badgeColors[pack.badge] ?? "bg-red-600"}`}>
                                        {pack.badge}
                                    </div>
                                )}
                                {/* Discount */}
                                <div className="absolute top-3 right-3 z-10 bg-red-600 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                                    -{pack.discount}%
                                </div>

                                {/* Product images with inline specs */}
                                <div className="grid grid-cols-3 bg-gray-50 border-b border-gray-100">
                                    {pack.images.slice(0, 3).map((img, i) => {
                                        const productSpecs = specs[i] ?? {}
                                        return (
                                            <div key={i} className="border-r border-gray-100 last:border-0 flex flex-col items-center p-2">
                                                {/* Image */}
                                                <div className="h-20 w-full flex items-center justify-center mb-1.5">
                                                    <img
                                                        src={img}
                                                        alt={pack.products[i] ?? "product"}
                                                        className="max-h-full max-w-full object-contain"
                                                        loading="lazy"
                                                    />
                                                </div>
                                                {/* Short specs */}
                                                <div className="w-full space-y-0.5">
                                                    {Object.entries(productSpecs).slice(0, 3).map(([key, val]) => (
                                                        <div key={key} className="text-[9px] text-gray-500 leading-tight">
                                                            <span className="font-semibold text-gray-700">{key}:</span>{" "}
                                                            <span>{val}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>

                                {/* Info */}
                                <div className="p-5">
                                    <h3 className="font-bold text-gray-900 text-base mb-1">{pack.name}</h3>
                                    <p className="text-xs text-gray-500 mb-3">{pack.description}</p>

                                    {/* Price */}
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="text-xl font-bold text-red-600">{pack.packPrice.toLocaleString()} DH</span>
                                        <span className="text-sm text-gray-400 line-through">{pack.originalPrice.toLocaleString()} DH</span>
                                    </div>

                                    <div className="flex gap-2">
                                        {/* WhatsApp */}
                                        <a
                                            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Bonjour, je suis intéressé par le pack: ${pack.name} (${pack.packPrice.toLocaleString()} DH)`)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 flex items-center justify-center gap-1.5 bg-green-600 hover:bg-green-700 text-white text-xs font-semibold py-2.5 rounded-lg transition-colors"
                                        >
                                            <svg className="h-4 w-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                            </svg>
                                            WhatsApp
                                        </a>

                                        {/* Passer à la caisse → Checkout */}
                                        <Link
                                            href="/checkout"
                                            className="flex-1 flex items-center justify-center bg-red-600 hover:bg-red-700 text-white text-xs font-semibold py-2.5 rounded-lg transition-colors"
                                        >
                                            Passer à la caisse →
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
