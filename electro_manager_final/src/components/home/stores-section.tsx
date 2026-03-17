"use client"

import { storeLocations } from "@/lib/data"
import { MapPin, Clock, Phone, ExternalLink } from "lucide-react"

export function StoresSection() {
    return (
        <section className="py-14 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="mb-8 text-center">
                    <span className="inline-block bg-gray-800 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-3">
                        Nos Magasins
                    </span>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Visitez Nos Showrooms</h2>
                    <p className="text-gray-500 text-sm">Venez essayer nos produits en personne.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {storeLocations.map((store) => (
                        <div key={store.id} className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                            {/* Map placeholder */}
                            <div className="h-44 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative">
                                <div className="text-center">
                                    <MapPin className="h-10 w-10 text-red-600 mx-auto mb-1" />
                                    <p className="text-sm font-semibold text-gray-600">Electro Manager — {store.city}</p>
                                    <p className="text-xs text-gray-400 mt-0.5">Carte non disponible en mode hors-ligne</p>
                                </div>
                                {/* Replace above div with an <iframe> for real Google Maps */}
                            </div>

                            {/* Details */}
                            <div className="p-5 space-y-3">
                                <h3 className="text-lg font-bold text-gray-900">Electro Manager — {store.city}</h3>

                                <div className="flex items-start gap-2.5 text-sm text-gray-600">
                                    <MapPin className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                                    <span>{store.address}</span>
                                </div>

                                <div className="flex items-start gap-2.5 text-sm text-gray-600">
                                    <Clock className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                                    <span>{store.hours}</span>
                                </div>

                                <div className="flex items-center gap-2.5 text-sm text-gray-600">
                                    <Phone className="h-4 w-4 text-red-600 flex-shrink-0" />
                                    <span className="font-medium">{store.phone}</span>
                                </div>

                                <a
                                    href={store.mapUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-2 flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold text-sm py-2.5 rounded-lg transition-colors"
                                >
                                    <ExternalLink className="h-4 w-4" />
                                    Voir sur la Carte
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
