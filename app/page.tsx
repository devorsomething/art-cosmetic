'use client'

import { useState } from 'react'

const treatments = [
  {
    title: 'Anti-Aging Behandlungen',
    desc: 'Faltenglättung & Hautstraffung mit modernsten Techniken für ein jugendliches Erscheinungsbild.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
      </svg>
    ),
  },
  {
    title: 'Chemical Peeling',
    desc: 'Medizinisches Peeling für tiefe Hauterneuerung, Verfeinerung des Hautbildes und strahlenden Teint.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      </svg>
    ),
  },
  {
    title: 'Mikrodermabrasion',
    desc: 'Tiefenreinigung und Hautglättung durch sanfte Diamant-Mikrodermabrasion für seidige Haut.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
      </svg>
    ),
  },
  {
    title: 'Permanent Make-up',
    desc: 'Augenbrauen, Lippen & Lidstrich — natürlich und perfekt definiert den ganzen Tag.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
      </svg>
    ),
  },
  {
    title: 'Filler & Injektionen',
    desc: 'Hyaluronsäure & Botox-Behandlungen nach ärztlicher Beratung — für natürliche Ergebnisse.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
    ),
  },
  {
    title: 'Hautverjüngung',
    desc: 'Laser, IPL & Radiofrequenz — modernste Technologie für straffe, youthful Haut.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
      </svg>
    ),
  },
  {
    title: 'HydraFacial',
    desc: 'Die Premium-Gesichtsbehandlung: Reinigung, Peeling, Extraktion & Hydratation in einem.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9-3-3m0 0 3 3m-3-3h-12" />
      </svg>
    ),
  },
  {
    title: 'Wimpern & Augenbrauen',
    desc: 'Lifting, Extensions & Microblading — für den perfekten Blick.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
      </svg>
    ),
  },
]

const qualityFeatures = [
  {
    title: 'Zertifizierte Produkte',
    desc: 'Wir verwenden ausschließlich hochwertige, zertifizierte Produkte von führenden Herstellern.',
  },
  {
    title: 'Hygienestandard',
    desc: 'Höchste Hygienestandards nach medizinischen Richtlinien — für Ihre Sicherheit.',
  },
  {
    title: 'Erfahrene Fachkosmetikerinnen',
    desc: 'Unser Team besteht aus qualifizierten Fachkosmetikerinnen mit langjähriger Erfahrung.',
  },
]

export default function HomePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, this would send to a backend or email service
    alert('Vielen Dank für Ihre Nachricht! Wir melden uns innerhalb von 24 Stunden bei Ihnen.')
    setFormData({ name: '', email: '', phone: '', message: '', service: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blush-200/70 via-blush-100/60 to-white/80" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="font-sans text-sm md:text-base tracking-[0.3em] text-charcoal-800/60 uppercase mb-6">
            Ästhetische Kosmetik · Bregenz
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-charcoal-800 mb-6 leading-tight">
            Art Cosmetic
          </h1>
          <p className="font-sans text-lg md:text-xl text-charcoal-800/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            Schönheit mit Kunst und Wissenschaft — für sichtbare Ergebnisse, 
            die Sie begeistern werden.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#kontakt" className="btn-primary">
              Behandlung buchen
            </a>
            <a href="tel:+436642363851" className="btn-outline">
              <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
              +43 664 236 3851
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-charcoal-800/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </section>

      {/* Info Strip */}
      <section className="bg-charcoal-800 py-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-white/80 text-sm">
            <a href="tel:+436642363851" className="flex items-center gap-2 hover:text-white transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
              +43 664 236 3851
            </a>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
              Bregenz · Vorarlberg
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              Mo – Fr: nach Vereinbarung
            </span>
          </div>
        </div>
      </section>

      {/* Willkommen Section */}
      <section className="py-20 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=80"
                  alt="Professionelle kosmetische Behandlung"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blush-200 rounded-2xl -z-10" />
            </div>
            <div>
              <p className="font-sans text-sm tracking-[0.2em] text-roseGold uppercase mb-4">
                Willkommen
              </p>
              <h2 className="section-heading mb-6">
                Ihr Studio für ästhetische Kosmetik in Bregenz
              </h2>
              <p className="font-sans text-lg text-charcoal-800/70 leading-relaxed mb-6">
                Art Cosmetic ist Ihr Fachstudio für ästhetische Kosmetik und professionelle Hautpflege 
                in Vorarlberg. Wir kombinieren modernste Techniken mit hochwertigen Produkten für 
                sichtbare Ergebnisse, die Ihre natürliche Schönheit unterstreichen.
              </p>
              <p className="font-sans text-base text-charcoal-800/60 leading-relaxed mb-8">
                Von Anti-Aging Behandlungen über Permanent Make-up bis hin zu medizinischen 
                Peelings — wir bieten Ihnen ein umfassendes Spektrum an ästhetischen 
                Behandlungen, individuell abgestimmt auf Ihre Bedürfnisse.
              </p>
              <div className="flex flex-wrap gap-6">
                <div>
                  <p className="font-serif text-4xl text-charcoal-800 mb-1">8+</p>
                  <p className="font-sans text-sm text-charcoal-800/60">Behandlungen</p>
                </div>
                <div>
                  <p className="font-serif text-4xl text-charcoal-800 mb-1">€€€</p>
                  <p className="font-sans text-sm text-charcoal-800/60">Preis-Leistung</p>
                </div>
                <div>
                  <p className="font-serif text-4xl text-charcoal-800 mb-1">100%</p>
                  <p className="font-sans text-sm text-charcoal-800/60">Zufriedenheit</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Behandlungen Section */}
      <section className="py-20 md:py-32 px-6 bg-blush-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-sans text-sm tracking-[0.2em] text-roseGold uppercase mb-4">
              Unsere Leistungen
            </p>
            <h2 className="section-heading mb-6">
              Behandlungen für Ihre Schönheit
            </h2>
            <p className="section-subheading mx-auto">
              Entdecken Sie unser umfassendes Spektrum an ästhetischen Behandlungen — 
              jede einzeln abgestimmt auf Ihre persönlichen Bedürfnisse.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {treatments.map((treatment, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm card-hover border border-blush-100"
              >
                <div className="w-14 h-14 rounded-xl bg-blush-100 text-charcoal-800 mb-6 flex items-center justify-center">
                  {treatment.icon}
                </div>
                <h3 className="font-serif text-xl text-charcoal-800 mb-3">
                  {treatment.title}
                </h3>
                <p className="font-sans text-sm text-charcoal-800/60 leading-relaxed">
                  {treatment.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="order-2 md:order-1">
              <p className="font-sans text-sm tracking-[0.2em] text-roseGold uppercase mb-4">
                Ergebnisse
              </p>
              <h2 className="section-heading mb-6">
                Beeindruckende Ergebnisse, die für sich sprechen
              </h2>
              <p className="font-sans text-lg text-charcoal-800/70 leading-relaxed mb-6">
                Unsere Kundinnen und Kunden vertrauen uns wegen der sichtbaren Ergebnisse, 
                die wir erzielen. Jede Behandlung wird individuell geplant und durchgeführt, 
                um optimale Resultate zu garantieren.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-blush-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-charcoal-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <p className="font-sans text-charcoal-800/70">
                    Individuelle Beratung vor jeder Behandlung
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-blush-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-charcoal-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <p className="font-sans text-charcoal-800/70">
                    Modernste Geräte und zertifizierte Produkte
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-blush-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-charcoal-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <p className="font-sans text-charcoal-800/70">
                    Natürliche Ergebnisse, die Ihre Schönheit unterstreichen
                  </p>
                </div>
              </div>
              <a href="#kontakt" className="btn-primary">
                Kostenlose Beratung anfragen
              </a>
            </div>
            <div className="order-1 md:order-2 relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1598524374912-6e92af34e484?w=800&q=80"
                  alt="Kosmetische Behandlungsergebnisse"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-roseGoldLight rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Qualität & Sicherheit - Dark Section */}
      <section className="bg-charcoal-800 py-20 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-sans text-sm tracking-[0.2em] text-roseGold uppercase mb-4">
              Qualität & Sicherheit
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
              Warum unsere Kunden uns vertrauen
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {qualityFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-charcoal-700 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-roseGold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl text-white mb-3">
                  {feature.title}
                </h3>
                <p className="font-sans text-white/60 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beratung CTA */}
      <section className="py-20 md:py-32 px-6 bg-gradient-to-b from-blush-100 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-sans text-sm tracking-[0.2em] text-roseGold uppercase mb-4">
            Erstberatung
          </p>
          <h2 className="section-heading mb-6">
            Kostenlose Erstberatung
          </h2>
          <p className="font-sans text-lg text-charcoal-800/70 leading-relaxed mb-10 max-w-2xl mx-auto">
            Sie sind sich nicht sicher, welche Behandlung die richtige für Sie ist? 
            Wir beraten Sie gerne unverbindlich und erstellen einen individuellen 
            Behandlungsplan für Ihre Bedürfnisse.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#kontakt" className="btn-primary">
              Beratungstermin vereinbaren
            </a>
            <a href="tel:+436642363851" className="btn-outline">
              Jetzt anrufen
            </a>
          </div>
        </div>
      </section>

      {/* Kontakt & Lage */}
      <section id="kontakt" className="py-20 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-sans text-sm tracking-[0.2em] text-roseGold uppercase mb-4">
              Kontakt
            </p>
            <h2 className="section-heading mb-6">
              Sprechen Sie mit uns
            </h2>
            <p className="section-subheading mx-auto">
              Wir freuen uns auf Ihre Nachricht und melden uns innerhalb von 24 Stunden bei Ihnen.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 md:gap-20">
            {/* Contact Form */}
            <div className="bg-blush-50/50 rounded-2xl p-8 md:p-10">
              <h3 className="font-serif text-2xl text-charcoal-800 mb-6">
                Nachricht senden
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block font-sans text-sm text-charcoal-800/70 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-blush-200 bg-white font-sans text-charcoal-800 focus:outline-none focus:ring-2 focus:ring-roseGoldLight focus:border-transparent transition-all"
                    placeholder="Ihr vollständiger Name"
                  />
                </div>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block font-sans text-sm text-charcoal-800/70 mb-2">
                      E-Mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-blush-200 bg-white font-sans text-charcoal-800 focus:outline-none focus:ring-2 focus:ring-roseGoldLight focus:border-transparent transition-all"
                      placeholder="ihre@email.at"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block font-sans text-sm text-charcoal-800/70 mb-2">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-blush-200 bg-white font-sans text-charcoal-800 focus:outline-none focus:ring-2 focus:ring-roseGoldLight focus:border-transparent transition-all"
                      placeholder="+43 ..."
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="service" className="block font-sans text-sm text-charcoal-800/70 mb-2">
                    Gewünschte Behandlung
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-blush-200 bg-white font-sans text-charcoal-800 focus:outline-none focus:ring-2 focus:ring-roseGoldLight focus:border-transparent transition-all"
                  >
                    <option value="">Bitte wählen...</option>
                    <option value="anti-aging">Anti-Aging Behandlungen</option>
                    <option value="peeling">Chemical Peeling</option>
                    <option value="mikrodermabrasion">Mikrodermabrasion</option>
                    <option value="pmu">Permanent Make-up</option>
                    <option value="filler">Filler & Injektionen</option>
                    <option value="hautverjuengung">Hautverjüngung</option>
                    <option value="hydrafacial">HydraFacial</option>
                    <option value="wimpern">Wimpern & Augenbrauen</option>
                    <option value="beratung">Allgemeine Beratung</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block font-sans text-sm text-charcoal-800/70 mb-2">
                    Nachricht *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-blush-200 bg-white font-sans text-charcoal-800 focus:outline-none focus:ring-2 focus:ring-roseGoldLight focus:border-transparent transition-all resize-none"
                    placeholder="Ihre Nachricht an uns..."
                  />
                </div>
                <button type="submit" className="w-full btn-primary">
                  Nachricht senden
                </button>
                <p className="font-sans text-xs text-charcoal-800/50 text-center">
                  Mit dem Absenden stimmen Sie unserer Datenschutzerklärung zu.
                </p>
              </form>
            </div>

            {/* Contact Info & Map */}
            <div>
              <div className="mb-8">
                <h3 className="font-serif text-2xl text-charcoal-800 mb-6">
                  Kontaktdaten
                </h3>
                <div className="space-y-4">
                  <a href="tel:+436642363851" className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-blush-100 flex items-center justify-center group-hover:bg-blush-200 transition-colors">
                      <svg className="w-5 h-5 text-charcoal-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-sans text-sm text-charcoal-800/60">Telefon</p>
                      <p className="font-sans text-charcoal-800 font-medium">+43 664 236 3851</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blush-100 flex items-center justify-center">
                      <svg className="w-5 h-5 text-charcoal-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-sans text-sm text-charcoal-800/60">Standort</p>
                      <p className="font-sans text-charcoal-800 font-medium">Bregenz, Vorarlberg</p>
                      <p className="font-sans text-sm text-charcoal-800/60">Österreich</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blush-100 flex items-center justify-center">
                      <svg className="w-5 h-5 text-charcoal-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-sans text-sm text-charcoal-800/60">Öffnungszeiten</p>
                      <p className="font-sans text-charcoal-800 font-medium">Mo – Fr: nach Vereinbarung</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Google Maps Embed */}
              <div className="rounded-2xl overflow-hidden shadow-lg h-72">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10748.637008158!2d9.747!3d47.516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479b6b3b8b8b8b8b%3A0x479b6b3b8b8b8b8b!2sBregenz%2C%20Austria!5e0!3m2!1sen!2sat!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Art Cosmetic Standort Bregenz"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal-800 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="font-serif text-2xl text-white mb-4">Art Cosmetic</h3>
              <p className="font-sans text-white/60 leading-relaxed">
                Schönheit mit Kunst und Wissenschaft. 
                Ihr Studio für ästhetische Kosmetik in Bregenz.
              </p>
            </div>
            <div>
              <h4 className="font-serif text-lg text-white mb-4">Behandlungen</h4>
              <ul className="space-y-2">
                {treatments.slice(0, 4).map((t, i) => (
                  <li key={i}>
                    <span className="font-sans text-sm text-white/60 hover:text-white transition-colors cursor-pointer">
                      {t.title}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-serif text-lg text-white mb-4">Kontakt</h4>
              <div className="space-y-3">
                <a href="tel:+436642363851" className="block font-sans text-sm text-white/60 hover:text-white transition-colors">
                  +43 664 236 3851
                </a>
                <p className="font-sans text-sm text-white/60">
                  Bregenz, Vorarlberg
                </p>
                <p className="font-sans text-sm text-white/60">
                  Österreich
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-sans text-sm text-white/40">
              © {new Date().getFullYear()} Art Cosmetic Bregenz. Alle Rechte vorbehalten.
            </p>
            <div className="flex gap-6">
              <span className="font-sans text-sm text-white/40 cursor-pointer hover:text-white/60 transition-colors">
                Impressum
              </span>
              <span className="font-sans text-sm text-white/40 cursor-pointer hover:text-white/60 transition-colors">
                Datenschutz
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
