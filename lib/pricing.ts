/**
 * Centralized pricing configuration
 * Single source of truth for all standard rates and seasonal promotions
 * Updates here automatically cascade to all pages, schema, and metadata
 */

export const pricing = {
  services: {
    chimneyCleaning: {
      standard: 289.95,
      description: 'Professional chimney cleaning with Level 1 inspection included',
    },
    inspection: {
      standard: 0, // Included free with cleaning
      description: 'Comprehensive 21-point chimney inspection',
    },
    repair: {
      standard: null, // Custom quote
      description: 'Expert chimney repairs and restoration',
    },
  },

  promo: {
    active: false,
    type: 'summer_special_2026',
    name: 'Summer Special',
    description: 'Limited-time summer promotion',
    chimneyCleaning: 99.95,
    label: 'Summer Special',
    subtitle: 'Limited-time offer | Includes Level 1 inspection',
    expiresAt: '2026-08-31',
    calloutText: 'Book $99.95 Summer Special',
    disclaimer: 'Limited availability. Call to confirm eligibility.',
  },

  contractorLicense: {
    number: 'MADHAHL790LW',
    state: 'WA',
    issuer: 'Washington State Department of Labor & Industries',
    lookupUrl: 'https://secure.lni.wa.gov/verify/',
  },

  businessLocation: {
    streetAddress: '1000 4th Ave',
    locality: 'Seattle',
    region: 'WA',
    postalCode: '98104',
    serviceAreaOnly: false,
    geo: {
      latitude: 47.60454,
      longitude: -122.33069,
    },
  },

  phone: '(206) 274-6409',
  phoneE164: '+12062746409',
}

export const getChimneySweepPrice = () => {
  return isPromoActive()
    ? pricing.promo.chimneyCleaning
    : pricing.services.chimneyCleaning.standard
}

export const getDisplayPrice = () => {
  if (!isPromoActive()) {
    return {
      primary: pricing.services.chimneyCleaning.standard,
      promo: null,
      label: null,
      standard: null,
    }
  }

  return {
    primary: pricing.promo.chimneyCleaning,
    standard: pricing.services.chimneyCleaning.standard,
    label: pricing.promo.label,
    subtitle: pricing.promo.subtitle,
  }
}

export const getSchemaPrice = () => {
  return pricing.services.chimneyCleaning.standard
}

export const isPromoActive = (now = new Date()) => {
  // The offer remains valid through its final business day in Seattle.
  const today = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'America/Los_Angeles', year: 'numeric', month: '2-digit', day: '2-digit',
  }).format(now)
  return pricing.promo.active && today <= pricing.promo.expiresAt
}

export const getPricingContext = () => {
  return {
    standard: pricing.services.chimneyCleaning.standard,
    promo: isPromoActive() ? pricing.promo.chimneyCleaning : null,
    label: isPromoActive() ? pricing.promo.label : null,
    phone: pricing.phone,
    phoneE164: pricing.phoneE164,
    license: pricing.contractorLicense.number,
  }
}
