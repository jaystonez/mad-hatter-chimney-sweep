'use client';

import { useState, useEffect, useCallback } from 'react';

// ─── Types ─────────────────────────────────────────────────────────────────

type Tab = 'customer' | 'services' | 'inspection' | 'documents' | 'settings';
type DocView = 'report' | 'estimate' | 'invoice' | 'combined';
type InspectionStatus = 'pass' | 'monitor' | 'repair' | '';

interface CustomerInfo {
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  email: string;
  date: string;
  techName: string;
  jobNumber: string;
  notes: string;
}

interface Service {
  id: string;
  label: string;
  price: number;
  selected: boolean;
}

interface InspectionPoint {
  id: string;
  area: string;
  item: string;
  status: InspectionStatus;
  photoLabel: string;
  notes: string;
}

interface RepairItem {
  id: string;
  description: string;
  price: number;
  area: string;
}

interface CompanySettings {
  name: string;
  phone: string;
  email: string;
  address: string;
  license: string;
  taxRate: number;
}

// ─── Defaults ─────────────────────────────────────────────────────────────

const DEFAULT_CUSTOMER: CustomerInfo = {
  name: '', address: '', city: '', state: 'WA', zip: '', phone: '', email: '',
  date: new Date().toISOString().split('T')[0],
  techName: '', jobNumber: '', notes: '',
};

const DEFAULT_SERVICES: Service[] = [
  { id: 'sweep',  label: 'Chimney Sweep / Cleaning',         price: 199, selected: false },
  { id: 'l1',     label: 'Level 1 Inspection',               price: 0,   selected: false },
  { id: 'l2',     label: 'Level 2 Inspection (Video Scan)',   price: 149, selected: false },
  { id: 'l3',     label: 'Level 3 Inspection',               price: 349, selected: false },
  { id: 'dryer',  label: 'Dryer Vent Cleaning',              price: 129, selected: false },
  { id: 'fp',     label: 'Fireplace Service / Tune-up',      price: 89,  selected: false },
];

const DEFAULT_INSPECTION: InspectionPoint[] = [
  { id: '1',  area: 'Exterior',  item: 'Chimney cap condition',              status: '', photoLabel: '', notes: '' },
  { id: '2',  area: 'Exterior',  item: 'Crown / wash condition',             status: '', photoLabel: '', notes: '' },
  { id: '3',  area: 'Exterior',  item: 'Flashing condition',                 status: '', photoLabel: '', notes: '' },
  { id: '4',  area: 'Exterior',  item: 'Masonry / brick exterior',           status: '', photoLabel: '', notes: '' },
  { id: '5',  area: 'Exterior',  item: 'Chimney height & clearances',        status: '', photoLabel: '', notes: '' },
  { id: '6',  area: 'Exterior',  item: 'Spark arrestor / screen',            status: '', photoLabel: '', notes: '' },
  { id: '7',  area: 'Exterior',  item: 'Waterproofing / efflorescence',      status: '', photoLabel: '', notes: '' },
  { id: '8',  area: 'Firebox',   item: 'Damper operation',                   status: '', photoLabel: '', notes: '' },
  { id: '9',  area: 'Firebox',   item: 'Smoke chamber condition',            status: '', photoLabel: '', notes: '' },
  { id: '10', area: 'Firebox',   item: 'Firebox floor & hearth',             status: '', photoLabel: '', notes: '' },
  { id: '11', area: 'Firebox',   item: 'Firebox walls (L / R / back)',       status: '', photoLabel: '', notes: '' },
  { id: '12', area: 'Firebox',   item: 'Lintel / throat area',               status: '', photoLabel: '', notes: '' },
  { id: '13', area: 'Firebox',   item: 'Cleanout door',                      status: '', photoLabel: '', notes: '' },
  { id: '14', area: 'Flue',      item: 'Flue liner (visible portion)',       status: '', photoLabel: '', notes: '' },
  { id: '15', area: 'Flue',      item: 'Liner integrity (cracks / gaps)',    status: '', photoLabel: '', notes: '' },
  { id: '16', area: 'Flue',      item: 'Creosote level & classification',    status: '', photoLabel: '', notes: '' },
  { id: '17', area: 'Flue',      item: 'Animal / debris blockage',           status: '', photoLabel: '', notes: '' },
  { id: '18', area: 'Appliance', item: 'Draft / draw test',                  status: '', photoLabel: '', notes: '' },
  { id: '19', area: 'Appliance', item: 'Combustibles clearance',             status: '', photoLabel: '', notes: '' },
  { id: '20', area: 'Appliance', item: 'Connector pipe / stovepipe',         status: '', photoLabel: '', notes: '' },
  { id: '21', area: 'Safety',    item: 'CO detector present & functional',   status: '', photoLabel: '', notes: '' },
];

const DEFAULT_SETTINGS: CompanySettings = {
  name: 'Mad Hatter Chimney Sweep',
  phone: '(206) 555-0100',
  email: 'info@madhatterchimney.com',
  address: 'Seattle, WA',
  license: '',
  taxRate: 0,
};

const STORAGE_KEY = 'mh_inspect_v1';

// ─── Helpers ──────────────────────────────────────────────────────────────

function statusColor(s: InspectionStatus) {
  if (s === 'pass')    return 'bg-green-600 text-white';
  if (s === 'monitor') return 'bg-amber-500 text-stone-900';
  if (s === 'repair')  return 'bg-red-600 text-white';
  return 'bg-stone-700 text-stone-400';
}

function formatMoney(n: number) {
  return n === 0 ? 'Included' : `$${n.toFixed(2)}`;
}

// ─── Main Component ───────────────────────────────────────────────────────

export default function InspectPage() {
  const [tab, setTab] = useState<Tab>('customer');
  const [docView, setDocView] = useState<DocView>('report');
  const [customer, setCustomer] = useState<CustomerInfo>(DEFAULT_CUSTOMER);
  const [services, setServices] = useState<Service[]>(DEFAULT_SERVICES);
  const [inspection, setInspection] = useState<InspectionPoint[]>(DEFAULT_INSPECTION);
  const [recommendedRepairs, setRecommendedRepairs] = useState<RepairItem[]>([]);
  const [approvedRepairs, setApprovedRepairs] = useState<RepairItem[]>([]);
  const [settings, setSettings] = useState<CompanySettings>(DEFAULT_SETTINGS);
  const [newRepair, setNewRepair] = useState({ description: '', price: '', area: '' });
  const [saved, setSaved] = useState(false);

  // Load from localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const d = JSON.parse(raw);
        if (d.customer)           setCustomer(d.customer);
        if (d.services)           setServices(d.services);
        if (d.inspection)         setInspection(d.inspection);
        if (d.recommendedRepairs) setRecommendedRepairs(d.recommendedRepairs);
        if (d.approvedRepairs)    setApprovedRepairs(d.approvedRepairs);
        if (d.settings)           setSettings(d.settings);
      }
    } catch { /* ignore */ }
  }, []);

  const save = useCallback(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      customer, services, inspection, recommendedRepairs, approvedRepairs, settings,
    }));
    setSaved(true);
    setTimeout(() => setSaved(false), 1500);
  }, [customer, services, inspection, recommendedRepairs, approvedRepairs, settings]);

  // ── Derived arrays ──────────────────────────────────────────────────────

  const servicesPerformed: Service[] = services.filter(s => s.selected);

  // ── Service helpers ─────────────────────────────────────────────────────

  function toggleService(id: string) {
    setServices(prev => prev.map(s => s.id === id ? { ...s, selected: !s.selected } : s));
  }

  function updateServicePrice(id: string, price: number) {
    setServices(prev => prev.map(s => s.id === id ? { ...s, price } : s));
  }

  // ── Inspection helpers ──────────────────────────────────────────────────

  function updateInspection(id: string, field: keyof InspectionPoint, value: string) {
    setInspection(prev => prev.map(p => {
      if (p.id !== id) return p;
      const updated = { ...p, [field]: value };
      // When status changes away from 'repair', remove from recommendedRepairs
      if (field === 'status' && value !== 'repair') {
        setRecommendedRepairs(rr => rr.filter(r => r.id !== `insp-${id}`));
        setApprovedRepairs(ar => ar.filter(r => r.id !== `insp-${id}`));
      }
      return updated;
    }));
  }

  function addInspectionRepair(point: InspectionPoint) {
    const repairId = `insp-${point.id}`;
    if (recommendedRepairs.find(r => r.id === repairId)) return;
    setRecommendedRepairs(prev => [...prev, {
      id: repairId,
      description: `${point.area} — ${point.item}${point.notes ? ': ' + point.notes : ''}`,
      price: 0,
      area: point.area,
    }]);
  }

  function updateRepairPrice(id: string, price: number) {
    setRecommendedRepairs(prev => prev.map(r => r.id === id ? { ...r, price } : r));
    setApprovedRepairs(prev => prev.map(r => r.id === id ? { ...r, price } : r));
  }

  function updateRepairDesc(id: string, description: string) {
    setRecommendedRepairs(prev => prev.map(r => r.id === id ? { ...r, description } : r));
    setApprovedRepairs(prev => prev.map(r => r.id === id ? { ...r, description } : r));
  }

  function removeRecommended(id: string) {
    setRecommendedRepairs(prev => prev.filter(r => r.id !== id));
    setApprovedRepairs(prev => prev.filter(r => r.id !== id));
    // Clear the inspection status if it was auto-added
    if (id.startsWith('insp-')) {
      const inspId = id.replace('insp-', '');
      setInspection(prev => prev.map(p => p.id === inspId ? { ...p, status: 'monitor' as InspectionStatus } : p));
    }
  }

  function toggleApproved(repair: RepairItem) {
    const isApproved = approvedRepairs.find(r => r.id === repair.id);
    if (isApproved) {
      setApprovedRepairs(prev => prev.filter(r => r.id !== repair.id));
    } else {
      setApprovedRepairs(prev => [...prev, repair]);
    }
  }

  function addManualRepair() {
    if (!newRepair.description.trim()) return;
    const item: RepairItem = {
      id: `manual-${Date.now()}`,
      description: newRepair.description.trim(),
      price: parseFloat(newRepair.price) || 0,
      area: newRepair.area || 'General',
    };
    setRecommendedRepairs(prev => [...prev, item]);
    setNewRepair({ description: '', price: '', area: '' });
  }

  // ── Totals ──────────────────────────────────────────────────────────────

  const servicesTotal = servicesPerformed.reduce((a, s) => a + s.price, 0);
  const repairsEstimateTotal = recommendedRepairs.reduce((a, r) => a + r.price, 0);
  const repairsInvoiceTotal = approvedRepairs.reduce((a, r) => a + r.price, 0);
  const taxMultiplier = 1 + (settings.taxRate / 100);
  const invoiceSubtotal = servicesTotal + repairsInvoiceTotal;
  const invoiceTax = invoiceSubtotal * (settings.taxRate / 100);
  const invoiceTotal = invoiceSubtotal * taxMultiplier;

  // ── Inspection by area ──────────────────────────────────────────────────

  const areas = [...new Set(inspection.map(p => p.area))];

  // ─── Render ────────────────────────────────────────────────────────────

  const tabs: { id: Tab; label: string }[] = [
    { id: 'customer',   label: '1 · Customer' },
    { id: 'services',   label: '2 · Services' },
    { id: 'inspection', label: '3 · Inspection' },
    { id: 'documents',  label: '4 · Documents' },
    { id: 'settings',   label: '⚙ Settings' },
  ];

  return (
    <div className="min-h-screen bg-stone-900 text-white">

      {/* Header */}
      <header className="bg-stone-800 border-b border-stone-700 px-4 py-3 sticky top-0 z-10">
        <div className="max-w-3xl mx-auto flex items-center justify-between gap-2">
          <div>
            <h1 className="font-bold text-amber-400 text-base leading-tight">Mad Hatter Inspection</h1>
            <p className="text-stone-400 text-xs">
              {customer.name ? customer.name : 'No customer yet'}{customer.date ? ` · ${customer.date}` : ''}
            </p>
          </div>
          <button
            onClick={save}
            className={`text-xs font-semibold px-4 py-2 rounded-lg transition-colors ${
              saved ? 'bg-green-600 text-white' : 'bg-amber-500 hover:bg-amber-400 text-stone-900'
            }`}
          >
            {saved ? 'Saved ✓' : 'Save'}
          </button>
        </div>
      </header>

      {/* Tabs */}
      <div className="bg-stone-800 border-b border-stone-700 overflow-x-auto">
        <div className="max-w-3xl mx-auto flex">
          {tabs.map(t => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`flex-shrink-0 px-4 py-3 text-xs font-semibold border-b-2 transition-colors ${
                tab === t.id
                  ? 'border-amber-400 text-amber-400'
                  : 'border-transparent text-stone-400 hover:text-stone-200'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <main className="max-w-3xl mx-auto px-4 py-6 space-y-6">

        {/* ── CUSTOMER TAB ─────────────────────────────────────────────── */}
        {tab === 'customer' && (
          <div className="space-y-5">
            <SectionHeading>Customer Information</SectionHeading>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Customer Name" required>
                <input className={inputCls} value={customer.name}
                  onChange={e => setCustomer(p => ({ ...p, name: e.target.value }))}
                  placeholder="Full name" />
              </Field>
              <Field label="Phone">
                <input className={inputCls} value={customer.phone} type="tel"
                  onChange={e => setCustomer(p => ({ ...p, phone: e.target.value }))}
                  placeholder="(206) 555-0000" />
              </Field>
              <Field label="Email" extraClass="sm:col-span-2">
                <input className={inputCls} value={customer.email} type="email"
                  onChange={e => setCustomer(p => ({ ...p, email: e.target.value }))}
                  placeholder="customer@email.com" />
              </Field>
              <Field label="Street Address" extraClass="sm:col-span-2">
                <input className={inputCls} value={customer.address}
                  onChange={e => setCustomer(p => ({ ...p, address: e.target.value }))}
                  placeholder="123 Main St" />
              </Field>
              <Field label="City">
                <input className={inputCls} value={customer.city}
                  onChange={e => setCustomer(p => ({ ...p, city: e.target.value }))}
                  placeholder="Seattle" />
              </Field>
              <div className="grid grid-cols-2 gap-2">
                <Field label="State">
                  <input className={inputCls} value={customer.state} maxLength={2}
                    onChange={e => setCustomer(p => ({ ...p, state: e.target.value.toUpperCase() }))}
                    placeholder="WA" />
                </Field>
                <Field label="ZIP">
                  <input className={inputCls} value={customer.zip}
                    onChange={e => setCustomer(p => ({ ...p, zip: e.target.value }))}
                    placeholder="98101" />
                </Field>
              </div>
              <Field label="Service Date">
                <input className={inputCls} value={customer.date} type="date"
                  onChange={e => setCustomer(p => ({ ...p, date: e.target.value }))} />
              </Field>
              <Field label="Job Number">
                <input className={inputCls} value={customer.jobNumber}
                  onChange={e => setCustomer(p => ({ ...p, jobNumber: e.target.value }))}
                  placeholder="Auto or manual" />
              </Field>
              <Field label="Tech / Technician Name" extraClass="sm:col-span-2">
                <input className={inputCls} value={customer.techName}
                  onChange={e => setCustomer(p => ({ ...p, techName: e.target.value }))}
                  placeholder="Technician on site" />
              </Field>
              <Field label="Visit Notes" extraClass="sm:col-span-2">
                <textarea className={`${inputCls} h-24 resize-none`} value={customer.notes}
                  onChange={e => setCustomer(p => ({ ...p, notes: e.target.value }))}
                  placeholder="Access notes, dog, gate code, etc." />
              </Field>
            </div>
            <button onClick={() => setTab('services')} className={nextBtn}>
              Next: Services →
            </button>
          </div>
        )}

        {/* ── SERVICES TAB ─────────────────────────────────────────────── */}
        {tab === 'services' && (
          <div className="space-y-5">
            <SectionHeading>Services Performed Today</SectionHeading>
            <p className="text-stone-400 text-sm">Check all services completed. These appear on the invoice.</p>
            <div className="space-y-2">
              {services.map(svc => (
                <div key={svc.id}
                  className={`flex items-center gap-3 p-4 rounded-xl border transition-colors cursor-pointer ${
                    svc.selected
                      ? 'bg-amber-500/10 border-amber-500/50'
                      : 'bg-stone-800 border-stone-700 hover:border-stone-500'
                  }`}
                  onClick={() => toggleService(svc.id)}
                >
                  <div className={`w-5 h-5 rounded border-2 flex-shrink-0 flex items-center justify-center transition-colors ${
                    svc.selected ? 'bg-amber-500 border-amber-500' : 'border-stone-500'
                  }`}>
                    {svc.selected && <span className="text-stone-900 text-xs font-bold">✓</span>}
                  </div>
                  <span className="flex-1 text-sm font-medium">{svc.label}</span>
                  <div className="flex items-center gap-1" onClick={e => e.stopPropagation()}>
                    <span className="text-stone-400 text-xs">$</span>
                    <input
                      className="w-16 bg-stone-700 border border-stone-600 rounded px-2 py-1 text-white text-xs text-right focus:outline-none focus:border-amber-500"
                      value={svc.price}
                      type="number"
                      min={0}
                      onChange={e => updateServicePrice(svc.id, parseFloat(e.target.value) || 0)}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Services total */}
            <div className="bg-stone-800 border border-stone-700 rounded-xl p-4">
              <div className="flex justify-between items-center">
                <span className="text-stone-300 font-semibold">Services Subtotal</span>
                <span className="text-amber-400 font-bold text-lg">${servicesTotal.toFixed(2)}</span>
              </div>
              <div className="mt-2 space-y-1">
                {servicesPerformed.length === 0 && (
                  <p className="text-stone-500 text-xs">No services selected yet</p>
                )}
                {servicesPerformed.map(s => (
                  <div key={s.id} className="flex justify-between text-sm">
                    <span className="text-stone-300">{s.label}</span>
                    <span className="text-stone-400">{formatMoney(s.price)}</span>
                  </div>
                ))}
              </div>
            </div>

            <button onClick={() => setTab('inspection')} className={nextBtn}>
              Next: Inspection →
            </button>
          </div>
        )}

        {/* ── INSPECTION TAB ───────────────────────────────────────────── */}
        {tab === 'inspection' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <SectionHeading>21-Point Inspection</SectionHeading>
              <div className="flex gap-2 text-xs">
                <span className="px-2 py-0.5 rounded bg-green-600 text-white">Pass</span>
                <span className="px-2 py-0.5 rounded bg-amber-500 text-stone-900">Monitor</span>
                <span className="px-2 py-0.5 rounded bg-red-600 text-white">Repair</span>
              </div>
            </div>
            <p className="text-stone-400 text-sm -mt-3">
              Items marked <strong className="text-red-400">Repair</strong> are added to the Estimate automatically.
            </p>

            {areas.map(area => (
              <div key={area} className="bg-stone-800 border border-stone-700 rounded-xl overflow-hidden">
                <div className="bg-stone-700/60 px-4 py-2 border-b border-stone-700">
                  <h3 className="font-bold text-amber-300 text-sm uppercase tracking-wide">{area}</h3>
                </div>
                <div className="divide-y divide-stone-700/60">
                  {inspection.filter(p => p.area === area).map(point => (
                    <div key={point.id} className="p-4 space-y-3">
                      {/* Item header */}
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1">
                          <p className="text-sm font-medium text-white">
                            <span className="text-stone-500 text-xs mr-2">#{point.id}</span>
                            {point.item}
                          </p>
                        </div>
                        {/* Status buttons */}
                        <div className="flex gap-1 flex-shrink-0">
                          {(['pass', 'monitor', 'repair'] as InspectionStatus[]).map(s => (
                            <button
                              key={s}
                              onClick={() => {
                                updateInspection(point.id, 'status', s);
                                if (s === 'repair') {
                                  addInspectionRepair({ ...point, status: 'repair' });
                                }
                              }}
                              className={`px-2 py-1 rounded text-xs font-semibold capitalize transition-colors ${
                                point.status === s
                                  ? statusColor(s)
                                  : 'bg-stone-700 text-stone-400 hover:bg-stone-600'
                              }`}
                            >
                              {s === 'monitor' ? 'Mon.' : s.charAt(0).toUpperCase() + s.slice(1)}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Photo label & notes */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <input
                          className={`${inputSmCls}`}
                          value={point.photoLabel}
                          placeholder="Photo label / filename"
                          onChange={e => updateInspection(point.id, 'photoLabel', e.target.value)}
                        />
                        <input
                          className={`${inputSmCls}`}
                          value={point.notes}
                          placeholder="Notes"
                          onChange={e => {
                            updateInspection(point.id, 'notes', e.target.value);
                            // Update repair description if already added
                            if (point.status === 'repair') {
                              const repairId = `insp-${point.id}`;
                              setRecommendedRepairs(prev => prev.map(r =>
                                r.id === repairId
                                  ? { ...r, description: `${point.area} — ${point.item}${e.target.value ? ': ' + e.target.value : ''}` }
                                  : r
                              ));
                            }
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Inspection summary */}
            <div className="bg-stone-800 border border-stone-700 rounded-xl p-4">
              <h3 className="font-semibold text-sm text-stone-300 mb-3">Inspection Summary</h3>
              <div className="grid grid-cols-3 gap-3 text-center">
                {(['pass', 'monitor', 'repair'] as InspectionStatus[]).map(s => (
                  <div key={s} className={`rounded-lg p-3 ${
                    s === 'pass' ? 'bg-green-900/30 border border-green-700/50' :
                    s === 'monitor' ? 'bg-amber-900/30 border border-amber-700/50' :
                    'bg-red-900/30 border border-red-700/50'
                  }`}>
                    <div className={`text-2xl font-bold ${
                      s === 'pass' ? 'text-green-400' : s === 'monitor' ? 'text-amber-400' : 'text-red-400'
                    }`}>
                      {inspection.filter(p => p.status === s).length}
                    </div>
                    <div className="text-xs text-stone-400 capitalize mt-0.5">{s}</div>
                  </div>
                ))}
              </div>
              <div className="mt-3 flex justify-between items-center text-sm text-stone-400">
                <span>{inspection.filter(p => p.status === '').length} items not yet rated</span>
                <span>{inspection.filter(p => p.status !== '').length} / {inspection.length} complete</span>
              </div>
            </div>

            {/* Add manual repair */}
            <div className="bg-stone-800 border border-stone-700 rounded-xl p-4 space-y-3">
              <h3 className="font-semibold text-sm text-stone-300">Add Repair to Estimate</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <input
                  className={`${inputSmCls} sm:col-span-2`}
                  value={newRepair.description}
                  placeholder="Repair description"
                  onChange={e => setNewRepair(p => ({ ...p, description: e.target.value }))}
                />
                <input
                  className={inputSmCls}
                  value={newRepair.price}
                  type="number"
                  min={0}
                  placeholder="Price $"
                  onChange={e => setNewRepair(p => ({ ...p, price: e.target.value }))}
                />
              </div>
              <input
                className={inputSmCls}
                value={newRepair.area}
                placeholder="Area (e.g. Flue, Exterior)"
                onChange={e => setNewRepair(p => ({ ...p, area: e.target.value }))}
              />
              <button onClick={addManualRepair}
                className="bg-stone-700 hover:bg-stone-600 text-white text-sm px-4 py-2 rounded-lg transition-colors">
                + Add to Estimate
              </button>
            </div>

            <button onClick={() => setTab('documents')} className={nextBtn}>
              Next: Documents →
            </button>
          </div>
        )}

        {/* ── DOCUMENTS TAB ────────────────────────────────────────────── */}
        {tab === 'documents' && (
          <div className="space-y-5">
            <SectionHeading>Documents</SectionHeading>

            {/* Doc view toggle */}
            <div className="flex gap-1 bg-stone-800 border border-stone-700 rounded-xl p-1">
              {(['report', 'estimate', 'invoice', 'combined'] as DocView[]).map(v => (
                <button
                  key={v}
                  onClick={() => setDocView(v)}
                  className={`flex-1 py-2 rounded-lg text-xs font-semibold capitalize transition-colors ${
                    docView === v
                      ? 'bg-amber-500 text-stone-900'
                      : 'text-stone-400 hover:text-stone-200'
                  }`}
                >
                  {v === 'combined' ? 'All-in-One' : v}
                </button>
              ))}
            </div>

            {/* Approve repairs (shown for estimate and combined) */}
            {(docView === 'estimate' || docView === 'combined') && recommendedRepairs.length > 0 && (
              <div className="bg-stone-800 border border-amber-700/40 rounded-xl p-4 space-y-3">
                <h3 className="font-semibold text-sm text-amber-300">
                  Customer Approval — check items to move to Invoice
                </h3>
                <div className="space-y-2">
                  {recommendedRepairs.map(r => {
                    const isApproved = !!approvedRepairs.find(a => a.id === r.id);
                    return (
                      <div key={r.id}
                        className={`flex items-center gap-3 p-3 rounded-lg border transition-colors cursor-pointer ${
                          isApproved
                            ? 'bg-green-900/20 border-green-700/50'
                            : 'bg-stone-900/50 border-stone-700'
                        }`}
                        onClick={() => toggleApproved(r)}
                      >
                        <div className={`w-4 h-4 rounded border-2 flex-shrink-0 flex items-center justify-center ${
                          isApproved ? 'bg-green-500 border-green-500' : 'border-stone-500'
                        }`}>
                          {isApproved && <span className="text-white text-xs font-bold">✓</span>}
                        </div>
                        <span className="flex-1 text-sm text-stone-200">{r.description}</span>
                        <div className="flex items-center gap-1" onClick={e => e.stopPropagation()}>
                          <span className="text-stone-400 text-xs">$</span>
                          <input
                            className="w-20 bg-stone-700 border border-stone-600 rounded px-2 py-1 text-white text-xs text-right focus:outline-none focus:border-amber-500"
                            value={r.price}
                            type="number"
                            min={0}
                            onChange={e => updateRepairPrice(r.id, parseFloat(e.target.value) || 0)}
                          />
                        </div>
                        <button
                          onClick={e => { e.stopPropagation(); removeRecommended(r.id); }}
                          className="text-stone-600 hover:text-red-400 text-base leading-none transition-colors ml-1"
                        >
                          ×
                        </button>
                      </div>
                    );
                  })}
                </div>
                <div className="flex justify-between text-sm pt-1 border-t border-stone-700">
                  <span className="text-stone-400">Estimate Total</span>
                  <span className="text-amber-400 font-bold">${repairsEstimateTotal.toFixed(2)}</span>
                </div>
              </div>
            )}

            {/* Document preview */}
            <div className="bg-white text-stone-900 rounded-xl p-6 print:shadow-none space-y-5 text-sm">
              {/* Company header */}
              <div className="border-b border-stone-200 pb-4 flex items-start justify-between">
                <div>
                  <h2 className="text-xl font-bold text-stone-800">{settings.name}</h2>
                  <p className="text-stone-500 text-xs">{settings.address}</p>
                  <p className="text-stone-500 text-xs">{settings.phone} · {settings.email}</p>
                  {settings.license && (
                    <p className="text-stone-500 text-xs">License: {settings.license}</p>
                  )}
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold uppercase text-stone-600">
                    {docView === 'report' ? 'Inspection Report' :
                     docView === 'estimate' ? 'Estimate' :
                     docView === 'invoice' ? 'Invoice' : 'Service Report'}
                  </p>
                  <p className="text-stone-400 text-xs">{customer.date}</p>
                  {customer.jobNumber && <p className="text-stone-400 text-xs">Job #{customer.jobNumber}</p>}
                </div>
              </div>

              {/* Customer info */}
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <p className="font-semibold text-stone-600 uppercase tracking-wide mb-1">Bill To</p>
                  <p className="font-medium">{customer.name || '—'}</p>
                  {customer.address && <p className="text-stone-500">{customer.address}</p>}
                  {customer.city && <p className="text-stone-500">{customer.city}, {customer.state} {customer.zip}</p>}
                  {customer.phone && <p className="text-stone-500">{customer.phone}</p>}
                  {customer.email && <p className="text-stone-500">{customer.email}</p>}
                </div>
                <div>
                  <p className="font-semibold text-stone-600 uppercase tracking-wide mb-1">Technician</p>
                  <p>{customer.techName || '—'}</p>
                  {customer.notes && (
                    <>
                      <p className="font-semibold text-stone-600 uppercase tracking-wide mt-2 mb-1">Notes</p>
                      <p className="text-stone-500 whitespace-pre-wrap">{customer.notes}</p>
                    </>
                  )}
                </div>
              </div>

              {/* Services section */}
              {(docView === 'invoice' || docView === 'combined') && servicesPerformed.length > 0 && (
                <DocSection title="Services Performed">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="border-b border-stone-200">
                        <th className="text-left py-1 text-stone-500 font-medium">Service</th>
                        <th className="text-right py-1 text-stone-500 font-medium">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      {servicesPerformed.map(s => (
                        <tr key={s.id} className="border-b border-stone-100">
                          <td className="py-1.5">{s.label}</td>
                          <td className="py-1.5 text-right">{formatMoney(s.price)}</td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr>
                        <td className="py-1.5 font-semibold">Services Total</td>
                        <td className="py-1.5 text-right font-bold">${servicesTotal.toFixed(2)}</td>
                      </tr>
                    </tfoot>
                  </table>
                </DocSection>
              )}

              {/* Inspection report section */}
              {(docView === 'report' || docView === 'combined') && (
                <DocSection title="Inspection Report">
                  {areas.map(area => {
                    const areaPoints = inspection.filter(p => p.area === area && p.status !== '');
                    if (areaPoints.length === 0) return null;
                    return (
                      <div key={area} className="mb-3">
                        <p className="font-semibold text-stone-600 text-xs uppercase tracking-wide mb-1">{area}</p>
                        <table className="w-full text-xs">
                          <tbody>
                            {areaPoints.map(p => (
                              <tr key={p.id} className="border-b border-stone-100">
                                <td className="py-1.5 pr-2 text-stone-700">{p.item}</td>
                                <td className="py-1.5 pr-2 text-stone-500">{p.notes || '—'}</td>
                                <td className="py-1.5 text-right">
                                  <span className={`px-1.5 py-0.5 rounded text-xs font-semibold capitalize ${
                                    p.status === 'pass' ? 'bg-green-100 text-green-700' :
                                    p.status === 'monitor' ? 'bg-amber-100 text-amber-700' :
                                    'bg-red-100 text-red-700'
                                  }`}>{p.status}</span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    );
                  })}
                  {inspection.filter(p => p.status !== '').length === 0 && (
                    <p className="text-stone-400 text-xs">No inspection items rated yet.</p>
                  )}
                </DocSection>
              )}

              {/* Estimate section */}
              {(docView === 'estimate' || docView === 'combined') && (
                <DocSection title="Recommended Repairs — Estimate">
                  {recommendedRepairs.length === 0 ? (
                    <p className="text-stone-400 text-xs">No repairs recommended.</p>
                  ) : (
                    <table className="w-full text-xs">
                      <thead>
                        <tr className="border-b border-stone-200">
                          <th className="text-left py-1 text-stone-500 font-medium">Description</th>
                          <th className="text-left py-1 text-stone-500 font-medium">Area</th>
                          <th className="text-right py-1 text-stone-500 font-medium">Est. Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        {recommendedRepairs.map(r => (
                          <tr key={r.id} className="border-b border-stone-100">
                            <td className="py-1.5 pr-2">{r.description}</td>
                            <td className="py-1.5 pr-2 text-stone-500">{r.area}</td>
                            <td className="py-1.5 text-right">
                              {r.price > 0 ? `$${r.price.toFixed(2)}` : 'TBD'}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                      <tfoot>
                        <tr>
                          <td colSpan={2} className="py-1.5 font-semibold">Estimate Total</td>
                          <td className="py-1.5 text-right font-bold">
                            {repairsEstimateTotal > 0 ? `$${repairsEstimateTotal.toFixed(2)}` : 'TBD'}
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  )}
                </DocSection>
              )}

              {/* Invoice section */}
              {(docView === 'invoice' || docView === 'combined') && (
                <DocSection title={docView === 'invoice' ? 'Invoice' : 'Approved Repairs — Invoice'}>
                  {approvedRepairs.length > 0 && (
                    <table className="w-full text-xs mb-3">
                      <thead>
                        <tr className="border-b border-stone-200">
                          <th className="text-left py-1 text-stone-500 font-medium">Approved Repair</th>
                          <th className="text-right py-1 text-stone-500 font-medium">Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        {approvedRepairs.map(r => (
                          <tr key={r.id} className="border-b border-stone-100">
                            <td className="py-1.5 pr-2">{r.description}</td>
                            <td className="py-1.5 text-right">${r.price.toFixed(2)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                  {approvedRepairs.length === 0 && servicesPerformed.length === 0 && (
                    <p className="text-stone-400 text-xs">No items on invoice yet. Approve repairs or add services.</p>
                  )}
                  {/* Totals */}
                  <div className="border-t border-stone-200 pt-2 space-y-1 text-xs">
                    {servicesTotal > 0 && (
                      <div className="flex justify-between">
                        <span className="text-stone-500">Services</span>
                        <span>${servicesTotal.toFixed(2)}</span>
                      </div>
                    )}
                    {approvedRepairs.length > 0 && (
                      <div className="flex justify-between">
                        <span className="text-stone-500">Approved Repairs</span>
                        <span>${repairsInvoiceTotal.toFixed(2)}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="text-stone-500">Subtotal</span>
                      <span>${invoiceSubtotal.toFixed(2)}</span>
                    </div>
                    {settings.taxRate > 0 && (
                      <div className="flex justify-between">
                        <span className="text-stone-500">Tax ({settings.taxRate}%)</span>
                        <span>${invoiceTax.toFixed(2)}</span>
                      </div>
                    )}
                    <div className="flex justify-between font-bold text-sm border-t border-stone-300 pt-1 mt-1">
                      <span>Total Due</span>
                      <span>${invoiceTotal.toFixed(2)}</span>
                    </div>
                  </div>
                </DocSection>
              )}

              {/* Signature block */}
              {(docView === 'invoice' || docView === 'combined') && (
                <div className="border-t border-stone-200 pt-4 grid grid-cols-2 gap-8 text-xs">
                  <div>
                    <p className="text-stone-500 mb-6">Customer Signature</p>
                    <div className="border-b border-stone-400 h-6" />
                    <p className="text-stone-400 mt-1">Date: ____________________</p>
                  </div>
                  <div>
                    <p className="text-stone-500 mb-6">Technician Signature</p>
                    <div className="border-b border-stone-400 h-6" />
                    <p className="text-stone-400 mt-1">Date: ____________________</p>
                  </div>
                </div>
              )}
            </div>

            {/* Print button */}
            <button
              onClick={() => window.print()}
              className="w-full bg-stone-700 hover:bg-stone-600 text-white font-semibold py-3 rounded-xl transition-colors text-sm"
            >
              🖨 Print / Save as PDF
            </button>
          </div>
        )}

        {/* ── SETTINGS TAB ─────────────────────────────────────────────── */}
        {tab === 'settings' && (
          <div className="space-y-5">
            <SectionHeading>Company Settings</SectionHeading>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Company Name" extraClass="sm:col-span-2">
                <input className={inputCls} value={settings.name}
                  onChange={e => setSettings(p => ({ ...p, name: e.target.value }))} />
              </Field>
              <Field label="Phone">
                <input className={inputCls} value={settings.phone} type="tel"
                  onChange={e => setSettings(p => ({ ...p, phone: e.target.value }))} />
              </Field>
              <Field label="Email">
                <input className={inputCls} value={settings.email} type="email"
                  onChange={e => setSettings(p => ({ ...p, email: e.target.value }))} />
              </Field>
              <Field label="Address" extraClass="sm:col-span-2">
                <input className={inputCls} value={settings.address}
                  onChange={e => setSettings(p => ({ ...p, address: e.target.value }))} />
              </Field>
              <Field label="License Number">
                <input className={inputCls} value={settings.license}
                  onChange={e => setSettings(p => ({ ...p, license: e.target.value }))}
                  placeholder="WA contractor license" />
              </Field>
              <Field label="Tax Rate (%)">
                <input className={inputCls} value={settings.taxRate} type="number" min={0} max={30} step={0.1}
                  onChange={e => setSettings(p => ({ ...p, taxRate: parseFloat(e.target.value) || 0 }))} />
              </Field>
            </div>

            {/* New visit / reset */}
            <div className="bg-stone-800 border border-stone-700 rounded-xl p-4 space-y-3">
              <h3 className="font-semibold text-sm text-stone-300">Start New Visit</h3>
              <p className="text-stone-400 text-xs">
                Clears customer info, services, and inspection data. Settings are kept.
              </p>
              <button
                onClick={() => {
                  if (!window.confirm('Clear current visit and start fresh?')) return;
                  const freshDate = new Date().toISOString().split('T')[0];
                  const freshJob = `JOB-${Date.now().toString().slice(-6)}`;
                  setCustomer({ ...DEFAULT_CUSTOMER, date: freshDate, jobNumber: freshJob });
                  setServices(DEFAULT_SERVICES.map(s => ({ ...s, selected: false })));
                  setInspection(DEFAULT_INSPECTION.map(p => ({ ...p, status: '', photoLabel: '', notes: '' })));
                  setRecommendedRepairs([]);
                  setApprovedRepairs([]);
                  setTab('customer');
                  localStorage.removeItem(STORAGE_KEY);
                }}
                className="bg-red-700 hover:bg-red-600 text-white text-sm px-5 py-2 rounded-lg transition-colors"
              >
                Start New Visit
              </button>
            </div>

            <button onClick={save} className={nextBtn}>
              Save Settings ✓
            </button>
          </div>
        )}

      </main>

      {/* Bottom save bar */}
      <div className="fixed bottom-0 inset-x-0 bg-stone-900/95 border-t border-stone-700 px-4 py-3 flex items-center justify-between max-w-3xl mx-auto print:hidden">
        <span className="text-stone-400 text-xs">
          {servicesPerformed.length} service{servicesPerformed.length !== 1 ? 's' : ''} ·{' '}
          {recommendedRepairs.length} repair{recommendedRepairs.length !== 1 ? 's' : ''} ·{' '}
          {approvedRepairs.length} approved
        </span>
        <button onClick={save}
          className={`text-xs font-semibold px-4 py-2 rounded-lg transition-colors ${
            saved ? 'bg-green-600 text-white' : 'bg-amber-500 hover:bg-amber-400 text-stone-900'
          }`}>
          {saved ? 'Saved ✓' : 'Save All'}
        </button>
      </div>
    </div>
  );
}

// ─── Sub-components ────────────────────────────────────────────────────────

function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="text-lg font-bold text-white">{children}</h2>;
}

function Field({
  label, children, required, extraClass,
}: {
  label: string;
  children: React.ReactNode;
  required?: boolean;
  extraClass?: string;
}) {
  return (
    <div className={extraClass}>
      <label className="block text-xs font-medium text-stone-400 mb-1">
        {label}{required && <span className="text-red-400 ml-0.5">*</span>}
      </label>
      {children}
    </div>
  );
}

function DocSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="font-bold text-stone-700 text-sm uppercase tracking-wide border-b border-stone-200 pb-1 mb-3">
        {title}
      </h3>
      {children}
    </div>
  );
}

// ─── Shared class strings ──────────────────────────────────────────────────

const inputCls =
  'w-full bg-stone-900/60 border border-stone-700 rounded-lg px-3 py-2 text-white text-sm placeholder-stone-500 focus:outline-none focus:border-amber-500';

const inputSmCls =
  'w-full bg-stone-900/60 border border-stone-700 rounded-lg px-3 py-1.5 text-white text-xs placeholder-stone-500 focus:outline-none focus:border-amber-500';

const nextBtn =
  'w-full bg-amber-500 hover:bg-amber-400 text-stone-900 font-bold py-3 rounded-xl transition-colors text-sm';
