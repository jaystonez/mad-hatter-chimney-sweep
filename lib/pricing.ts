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
    active: true,
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
  },

  businessLocation: {
    locality: 'Bothell',
    region: 'WA',
    postalCode: '98011',
    serviceAreaOnly: true,
  },

  phone: '(206) 274-6409',
  phoneE164: '+12062746409',
}

/**
 * Get the display price for chimney cleaning
 * Returns the promo price if active, otherwise the standard price
 */
export const getChimneySweepPrice = () => {
  return pricing.promo.active
    ? pricing.promo.chimneyCleaning
    : pricing.services.chimneyCleaning.standard
}

/**
 * Get formatted price display with context
 * Shows both promo and standard price if promo is active
 */
export const getDisplayPrice = () => {
  if (!pricing.promo.active) {
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

/**
 * Get pricing for metadata/schema
 * Always uses standard price as the baseline for search engines
 */
export const getSchemaPrice = () => {
  return pricing.services.chimneyCleaning.standard
}

/**
 * Check if promotional pricing is currently active
 */
export const isPromoActive = () => {
  return pricing.promo.active
}

/**
 * Get all pricing context for a page
 */
export const getPricingContext = () => {
  return {
    standard: pricing.services.chimneyCleaning.standard,
    promo: pricing.promo.active ? pricing.promo.chimneyCleaning : null,
    label: pricing.promo.active ? pricing.promo.label : null,
    phone: pricing.phone,
    phoneE164: pricing.phoneE164,
    license: pricing.contractorLicense.number,
  }
}
