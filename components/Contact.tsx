'use client'

import { useEffect, useRef, useState } from 'react'
import { Phone, Mail, Clock, MapPin, Send, CheckCircle2 } from 'lucide-react'

const nuisibleTypes = [
  'Punaises de lit',
  'Cafards & blattes',
  'Rongeurs',
  'Fourmis',
  'Guêpes & frelons',
  'Pigeons',
  'Dératisation',
  'Désinsectisation',
  'Désinfection',
  'Autre',
]

const contactInfo = [
  {
    icon: Phone,
    label: 'Téléphone',
    value: '07 68 07 72 19',
    sub: 'Appel gratuit, 7j/7 et 24h/24',
    href: 'tel:+33123456789',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'allonuisibleidf@gmail.com',
    sub: 'Réponse sous 2h',
    href: 'mailto:allonuisibleidf@gmail.com',
  },
  {
    icon: Clock,
    label: 'Horaires',
    value: '7j/7 — 24h/24',
    sub: 'Urgences incluses, sans majoration',
  },
  {
    icon: MapPin,
    label: 'Zone d\'intervention',
    value: 'Île-de-France',
    sub: 'Déplacement gratuit sur devis',
  },
]

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    prenom: '',
    nom: '',
    telephone: '',
    email: '',
    nuisible: '',
    ville: '',
    message: '',
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.animate-on-scroll').forEach((el) => el.classList.add('visible'))
          }
        })
      },
      { threshold: 0.05 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setTimeout(() => setSubmitted(true), 500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section id="contact" ref={sectionRef} className="bg-[#f8f8f8] py-20 lg:py-28 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14 animate-on-scroll">
          <p className="text-[#E8441A] font-semibold text-sm uppercase tracking-widest mb-3">Contactez-nous</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1a1a1a] leading-tight">
            Prendre rendez-vous
          </h2>
          <p className="text-gray-500 text-base mt-4 max-w-xl mx-auto">
            Décrivez votre problème, notre équipe vous rappelle sous 30 minutes.
          </p>
          <div className="w-16 h-1 bg-[#E8441A] mx-auto mt-5 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-start">
          {/* Form */}
          <div className="lg:col-span-3 animate-on-scroll">
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-7 lg:p-10">
              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center py-12 space-y-4">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-black text-[#1a1a1a]">Demande envoyée !</h3>
                  <p className="text-gray-500 max-w-sm">
                    Merci pour votre message. Notre équipe vous contactera dans les plus brefs délais.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 bg-[#E8441A] text-white font-semibold px-6 py-2.5 rounded-full hover:bg-[#d03a15] transition-colors"
                  >
                    Nouvelle demande
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name row */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-[#1a1a1a] mb-1.5">Prénom *</label>
                      <input
                        type="text"
                        name="prenom"
                        required
                        value={formData.prenom}
                        onChange={handleChange}
                        placeholder="Jean"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E8441A] focus:ring-2 focus:ring-[#E8441A]/20 outline-none transition-all duration-200 text-sm bg-gray-50 focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#1a1a1a] mb-1.5">Nom *</label>
                      <input
                        type="text"
                        name="nom"
                        required
                        value={formData.nom}
                        onChange={handleChange}
                        placeholder="Dupont"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E8441A] focus:ring-2 focus:ring-[#E8441A]/20 outline-none transition-all duration-200 text-sm bg-gray-50 focus:bg-white"
                      />
                    </div>
                  </div>

                  {/* Contact row */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-[#1a1a1a] mb-1.5">Téléphone *</label>
                      <input
                        type="tel"
                        name="telephone"
                        required
                        value={formData.telephone}
                        onChange={handleChange}
                        placeholder="06 12 34 56 78"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E8441A] focus:ring-2 focus:ring-[#E8441A]/20 outline-none transition-all duration-200 text-sm bg-gray-50 focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#1a1a1a] mb-1.5">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="jean@email.com"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E8441A] focus:ring-2 focus:ring-[#E8441A]/20 outline-none transition-all duration-200 text-sm bg-gray-50 focus:bg-white"
                      />
                    </div>
                  </div>

                  {/* Nuisible + Ville */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-[#1a1a1a] mb-1.5">Type de nuisible *</label>
                      <select
                        name="nuisible"
                        required
                        value={formData.nuisible}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E8441A] focus:ring-2 focus:ring-[#E8441A]/20 outline-none transition-all duration-200 text-sm bg-gray-50 focus:bg-white appearance-none cursor-pointer"
                      >
                        <option value="">Sélectionner...</option>
                        {nuisibleTypes.map((n) => (
                          <option key={n} value={n}>{n}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#1a1a1a] mb-1.5">Ville *</label>
                      <input
                        type="text"
                        name="ville"
                        required
                        value={formData.ville}
                        onChange={handleChange}
                        placeholder="Paris, Versailles, Créteil…"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E8441A] focus:ring-2 focus:ring-[#E8441A]/20 outline-none transition-all duration-200 text-sm bg-gray-50 focus:bg-white"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-[#1a1a1a] mb-1.5">Message</label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Décrivez votre situation (depuis quand, étendue, type de logement…)"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E8441A] focus:ring-2 focus:ring-[#E8441A]/20 outline-none transition-all duration-200 text-sm bg-gray-50 focus:bg-white resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group w-full bg-[#E8441A] hover:bg-[#d03a15] text-white font-bold py-4 rounded-xl uppercase tracking-wider transition-all duration-200 hover:shadow-xl hover:shadow-[#E8441A]/30 hover:scale-[1.02] flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    Envoyer ma demande
                  </button>

                  <p className="text-gray-400 text-xs text-center">
                    * Champs obligatoires — Vos données restent confidentielles
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* Contact info */}
          <div className="lg:col-span-2 space-y-4 animate-on-scroll animate-on-scroll-delay-2">
            <h3 className="text-xl font-black text-[#1a1a1a] mb-6">Nos coordonnées</h3>

            {contactInfo.map(({ icon: Icon, label, value, sub, href }) => (
              <div
                key={label}
                className="bg-white rounded-2xl p-5 border border-gray-100 hover:border-[#E8441A]/30 hover:shadow-lg transition-all duration-200 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-[#E8441A]/10 group-hover:bg-[#E8441A] rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-200">
                    <Icon className="w-5 h-5 text-[#E8441A] group-hover:text-white transition-colors duration-200" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-0.5">{label}</p>
                    {href ? (
                      <a href={href} className="font-bold text-[#1a1a1a] hover:text-[#E8441A] transition-colors text-sm">
                        {value}
                      </a>
                    ) : (
                      <p className="font-bold text-[#1a1a1a] text-sm">{value}</p>
                    )}
                    {sub && <p className="text-gray-500 text-xs mt-0.5">{sub}</p>}
                  </div>
                </div>
              </div>
            ))}

            {/* Emergency banner */}
            <div className="bg-[#E8441A] rounded-2xl p-5 text-white">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                <span className="font-black text-sm uppercase tracking-wider">Urgence nuisible</span>
              </div>
              <p className="text-sm text-white/80 mb-3">
                Une infestation ne peut pas attendre ? Appelez-nous maintenant.
              </p>
              <a
                href="tel:+33123456789"
                className="inline-flex items-center gap-2 bg-white text-[#E8441A] font-black text-sm px-4 py-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <Phone className="w-4 h-4" />
                07 68 07 72 19
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
