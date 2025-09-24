"use client";
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    common: {
      navbar: {
        home: 'Home',
        applications: 'Applications',
        pricing: 'Pricing',
        contact: 'Contact',
        login: 'Login',
        signup: 'Sign Up'
      },
      pricing: {
        heroTitleA: 'Transparent',
        heroTitleB: 'Pricing',
        heroTitleC: 'for Every Stage',
        heroSubtitle: 'Start free and scale as you grow. Switch plans anytime.',
        plansHeading: 'Choose your plan',
        plansSub: 'Start free. Upgrade as you add more apps.'
      },
      chips: {
        noCard: 'No credit card',
        cancelAnytime: 'Cancel anytime',
        gdpr: 'GDPR compliant'
      }
    }
  },
  fr: {
    common: {
      navbar: {
        home: 'Accueil',
        applications: 'Applications',
        pricing: 'Tarifs',
        contact: 'Contact',
        login: 'Connexion',
        signup: "S'inscrire"
      },
      pricing: {
        heroTitleA: 'Tarification',
        heroTitleB: 'transparente',
        heroTitleC: 'pour chaque étape',
        heroSubtitle: 'Commencez gratuitement et évoluez à votre rythme. Changez d’offre à tout moment.',
        plansHeading: 'Choisissez votre offre',
        plansSub: 'Commencez gratuitement. Passez à une offre supérieure selon vos besoins.'
      },
      chips: {
        noCard: 'Sans carte requise',
        cancelAnytime: 'Annulation à tout moment',
        gdpr: 'Conforme RGPD'
      }
    }
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    defaultNS: 'common',
    interpolation: {
      escapeValue: false
    }
  })

export default i18n


