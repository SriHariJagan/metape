import type { LucideIcon } from 'lucide-react'
import {
  Megaphone,
  BadgeCheck,
  Receipt,
  UserPlus,
  Workflow,
  Package,
  Wallet,
  CreditCard,
  HeartPulse,
  GraduationCap,
  Leaf,
  Navigation,
} from 'lucide-react'

export interface EcosystemProduct {
  id: string
  name: string
  subtitle: string
  description: string
  benefitForMetaPE: string
  icon: LucideIcon
  href: string
  accent: string // hex color
  external: boolean
}

const PRODUCT_ICONS: Record<string, LucideIcon> = {
  metahealth: HeartPulse,
  metaedu: GraduationCap,
  metagreen: Leaf,
  metaflow: Workflow,
  metahire: UserPlus,
  metacheck: BadgeCheck,
  metaads: Megaphone,
  metanav: Navigation,
  metaledger: Receipt,
  metacard: CreditCard,
  metaim: Package,
  metape: Wallet,
}

const ACCENTS: Record<string, string> = {
  metahealth: '#14B8A6',
  metaedu: '#285898',
  metagreen: '#10B981',
  metaflow: '#8B5CF6',
  metahire: '#285898',
  metacheck: '#F59E0B',
  metaads: '#6828A8',
  metanav: '#F97316',
  metaledger: '#0756F2',
  metacard: '#6366F1',
  metaim: '#06B6D4',
  metape: '#6828A8',
}

// All products — mirrors MetaDev constants/products.ts but includes benefit copy for MetaPE
export const ALL_ECOSYSTEM_PRODUCTS: EcosystemProduct[] = [
  {
    id: 'metahealth',
    name: 'MetaHealth',
    subtitle: 'Healthcare Platform',
    description: 'Hospital & clinic operating system.',
    benefitForMetaPE: 'Healthcare platforms process compliant patient billing through MetaPE while MetaHealth keeps records in sync.',
    icon: PRODUCT_ICONS.metahealth,
    href: 'https://metahealth.metadev.io',
    accent: ACCENTS.metahealth,
    external: true,
  },
  {
    id: 'metaedu',
    name: 'MetaEdu',
    subtitle: 'EdTech Platform',
    description: 'Learning management & live classrooms.',
    benefitForMetaPE: 'Collect course fees and installments globally — MetaEdu enrollments convert into paid orders automatically.',
    icon: PRODUCT_ICONS.metaedu,
    href: 'https://metaedu.metadev.io',
    accent: ACCENTS.metaedu,
    external: true,
  },
  {
    id: 'metagreen',
    name: 'MetaGreen',
    subtitle: 'Sustainability',
    description: 'Carbon & ESG tracking.',
    benefitForMetaPE: 'Offer carbon-neutral checkout — offset contributions from MetaGreen settle as normal transactions.',
    icon: PRODUCT_ICONS.metagreen,
    href: 'https://metagreen.metadev.io',
    accent: ACCENTS.metagreen,
    external: true,
  },
  {
    id: 'metaflow',
    name: 'MetaFlow',
    subtitle: 'Enterprise Workflow',
    description: 'Approvals & automation.',
    benefitForMetaPE: 'Route refunds, payouts and high-value payment approvals through MetaFlow before money moves.',
    icon: PRODUCT_ICONS.metaflow,
    href: 'https://metaflow.metadev.io',
    accent: ACCENTS.metaflow,
    external: true,
  },
  {
    id: 'metahire',
    name: 'MetaHire',
    subtitle: 'Hiring & Talent',
    description: 'Talent pipeline & interviews.',
    benefitForMetaPE: 'Pay global contractors and employees hired via MetaHire with localized payout rails.',
    icon: PRODUCT_ICONS.metahire,
    href: 'https://metahire.metadev.io',
    accent: ACCENTS.metahire,
    external: true,
  },
  {
    id: 'metacheck',
    name: 'MetaCheck',
    subtitle: 'Verification',
    description: 'Fraud & compliance shield.',
    benefitForMetaPE: 'Screen every transaction for fraud pre-authorization with MetaCheck risk scoring.',
    icon: PRODUCT_ICONS.metacheck,
    href: 'https://metacheck.metadev.io',
    accent: ACCENTS.metacheck,
    external: true,
  },
  {
    id: 'metaads',
    name: 'MetaAds',
    subtitle: 'AdTech & Marketing',
    description: 'Unified campaigns, attribution and AI optimization.',
    benefitForMetaPE: 'One-click checkout from MetaAds campaigns converts ad traffic straight into paid orders.',
    icon: PRODUCT_ICONS.metaads,
    href: 'https://metaads.metadev.io',
    accent: ACCENTS.metaads,
    external: true,
  },
  {
    id: 'metanav',
    name: 'MetaNav',
    subtitle: 'Fleet & Logistics',
    description: 'Route & fleet control.',
    benefitForMetaPE: 'Fuel, tolls and fleet expenses route through MetaPE virtual cards with live MetaNav controls.',
    icon: PRODUCT_ICONS.metanav,
    href: 'https://metanav.metadev.io',
    accent: ACCENTS.metanav,
    external: true,
  },
  {
    id: 'metaledger',
    name: 'MetaLedger',
    subtitle: 'Billing & Finance',
    description: 'Invoicing & revenue reconciliation.',
    benefitForMetaPE: 'Every MetaPE transaction lands auto-reconciled in MetaLedger — books stay closed daily.',
    icon: PRODUCT_ICONS.metaledger,
    href: 'https://metaledger.metadev.io',
    accent: ACCENTS.metaledger,
    external: true,
  },
  {
    id: 'metacard',
    name: 'MetaCard',
    subtitle: 'Digital ID',
    description: 'Verified identity cards.',
    benefitForMetaPE: 'Verify customers once with MetaCard for lower decline rates at checkout.',
    icon: PRODUCT_ICONS.metacard,
    href: 'https://metacard.metadev.io',
    accent: ACCENTS.metacard,
    external: true,
  },
  {
    id: 'metaim',
    name: 'MetaIM',
    subtitle: 'Inventory',
    description: 'Stock & catalog sync.',
    benefitForMetaPE: 'Sync stock with checkout — MetaIM prevents selling what inventory cannot fulfill.',
    icon: PRODUCT_ICONS.metaim,
    href: 'https://metaim.metadev.io',
    accent: ACCENTS.metaim,
    external: true,
  },
  {
    id: 'metape',
    name: 'MetaPE',
    subtitle: 'Payments Platform',
    description: 'Payment gateway, subscriptions and invoicing.',
    benefitForMetaPE: 'The core: accept payments, automate billing and move money with one integration.',
    icon: PRODUCT_ICONS.metape,
    href: '/',
    accent: ACCENTS.metape,
    external: false,
  },
]

// For MetaPE: only show useful companions (not every product). Curated for payments relevance.
export const METAPE_ECOSYSTEM_IDS = ['metacheck', 'metacard', 'metaledger', 'metaflow', 'metaads', 'metaim'] as const

export function getUsefulFor(productId: string): EcosystemProduct[] {
  if (productId === 'metape') {
    return ALL_ECOSYSTEM_PRODUCTS.filter((p) => (METAPE_ECOSYSTEM_IDS as readonly string[]).includes(p.id))
  }
  // Generic fallback: show 4 others that are most commonly useful (used when reusing section in other product pages)
  const priority: Record<string, string[]> = {
    metacheck: ['metape', 'metacard', 'metaledger', 'metaflow'],
    metaledger: ['metape', 'metacheck', 'metacard', 'metaflow'],
    metaedu: ['metape', 'metacheck', 'metacard', 'metaflow'],
    default: ['metape', 'metacheck', 'metacard', 'metaledger'],
  }
  const ids = priority[productId] || priority.default
  return ALL_ECOSYSTEM_PRODUCTS.filter((p) => ids.includes(p.id))
}

export function getProductById(id: string): EcosystemProduct | undefined {
  return ALL_ECOSYSTEM_PRODUCTS.find((p) => p.id === id)
}
