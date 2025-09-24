import React from 'react'

export default function PricingFaqSection() {
  const faqs = [
    {
      q: 'Puis-je changer de plan à tout moment ?',
      a: 'Oui, vous pouvez passer à un plan supérieur/inférieur quand vous le souhaitez. Les changements s’appliquent immédiatement.'
    },
    {
      q: 'Proposez-vous un essai gratuit ?',
      a: 'Oui, vous pouvez commencer gratuitement et ajouter des apps selon vos besoins. Aucune carte requise.'
    },
    {
      q: 'Comment fonctionne la facturation annuelle ?',
      a: 'Le prix affiché par mois correspond à une facturation unique annuelle (un paiement en une fois).' 
    }
  ]

  return (
    <section className="px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">FAQ</h2>
        <div className="space-y-4">
          {faqs.map((f) => (
            <details key={f.q} className="rounded-xl border p-4" style={{ borderColor: 'rgba(var(--color-foreground-rgb),0.1)' }}>
              <summary className="cursor-pointer text-foreground font-semibold">{f.q}</summary>
              <p className="mt-2 text-foreground-80">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}


