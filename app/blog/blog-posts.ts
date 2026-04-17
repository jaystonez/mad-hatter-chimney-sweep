export type BlogSection = {
  heading: string
  paragraphs: string[]
  bullets?: string[]
}

export type BlogPost = {
  slug: string
  title: string
  metaTitle: string
  metaDescription: string
  excerpt: string
  publishedTime: string
  modifiedTime: string
  heroKicker: string
  sections: BlogSection[]
  internalLinks: Array<{ href: string; label: string }>
}

export const phaseOneBlogPosts: BlogPost[] = [
  {
    slug: "chimney-inspection-levels-explained",
    title: "Chimney Inspection Levels Explained: Level 1, 2, and 3 in Seattle",
    metaTitle: "Chimney Inspection Levels Explained (Level 1, 2, 3) | Seattle Guide",
    metaDescription:
      "Learn the difference between Level 1, Level 2, and Level 3 chimney inspections in Seattle, when each is required, and how to prepare your home.",
    excerpt:
      "A homeowner-friendly explanation of NFPA Level 1, 2, and 3 chimney inspections and when Seattle homes typically need each one.",
    publishedTime: "2026-04-17T00:00:00.000Z",
    modifiedTime: "2026-04-17T00:00:00.000Z",
    heroKicker: "Seattle Safety Guide",
    sections: [
      {
        heading: "Why inspection levels matter",
        paragraphs: [
          "If you own a fireplace or wood stove in Seattle, understanding chimney inspection levels helps you make safer and more cost-effective decisions. Most homeowners hear the terms Level 1, Level 2, and Level 3 only after a real estate transaction, a chimney fire, or smoke problems start. By that point, the inspection can feel urgent and confusing. Knowing what each level means ahead of time helps you authorize the right scope of work instead of guessing.",
          "The inspection framework comes from nationally recognized standards and gives technicians a consistent way to evaluate risk. It also protects homeowners from both under-inspection and over-scoping. A basic annual check might be enough for a system that has not changed, while a different event may justify camera scanning of flue interiors or selective access behind walls. The goal is to match the level to the condition and usage history of your chimney system.",
        ],
      },
      {
        heading: "What a Level 1 chimney inspection includes",
        paragraphs: [
          "A Level 1 inspection is the standard annual inspection for a chimney that is operating normally and has not been changed. The technician evaluates all readily accessible portions of the chimney exterior, interior firebox area, and visible flue components. They check for basic structural soundness, creosote accumulation, obstructions, and obvious defects that could affect safe drafting or cause heat transfer to combustible materials.",
          "In practical terms, a Level 1 works well for homeowners who use the same appliance, burn similar fuel, and have had no recent incidents. In Seattle, this is common for households that schedule routine maintenance every year before the heating season. Even though Level 1 is the least invasive option, it still provides meaningful safety information and often catches early deterioration before expensive repairs are necessary.",
        ],
        bullets: [
          "Visual review of readily accessible chimney and venting components",
          "Assessment for blockage, glazing, and visible liner damage",
          "Recommendation for cleaning or repair when needed",
        ],
      },
      {
        heading: "When a Level 2 inspection is required",
        paragraphs: [
          "A Level 2 inspection is more detailed and is typically required when a property is sold, when an appliance is changed, after a malfunction, or after an external event that could affect chimney integrity. This level includes everything in Level 1, plus examination of accessible attic, crawlspace, and basement portions and internal flue scanning with a specialized camera. It helps document conditions that cannot be verified by a standard visual-only approach.",
          "For Seattle homes, Level 2 is especially common during real estate transactions and after severe weather exposure. Heavy rain, freeze-thaw cycling, and long-term moisture intrusion can accelerate masonry and liner wear. A camera scan can identify cracked tiles, open mortar joints, or hidden offset deterioration that is not visible from the firebox. That information helps buyers and sellers negotiate repairs based on documented findings rather than assumptions.",
        ],
        bullets: [
          "Includes camera scanning of flue interior",
          "Often used for home sales and system changes",
          "Provides stronger documentation for repair planning",
        ],
      },
      {
        heading: "What Level 3 means and why it is rare",
        paragraphs: [
          "A Level 3 inspection is the most invasive level and is only performed when serious hazards are suspected and cannot be confirmed otherwise. It can require selective opening of concealed areas, such as portions of walls, ceilings, or chimney chase structures, to verify safety concerns. Level 3 is not a routine upgrade from Level 2. It is a targeted diagnostic step when there is credible evidence that concealed damage may present an immediate risk.",
          "Because Level 3 can involve opening finished surfaces, reputable contractors explain exactly why it is needed, what areas will be accessed, and how findings will be documented. Homeowners should receive a clear scope before work begins. In most homes, Level 1 or Level 2 provides enough information. Level 3 is reserved for situations such as suspected heat damage to adjacent framing, unresolved smoke leakage pathways, or structural concerns after a chimney fire.",
        ],
      },
      {
        heading: "How Seattle climate changes inspection priorities",
        paragraphs: [
          "Seattle moisture is a long-term stressor for masonry chimneys and metal components. Persistent wet conditions can widen existing cracks, weaken crown surfaces, and promote rust around dampers and caps. Even if your fireplace appears to draft normally, hidden moisture pathways can cause progressive damage over multiple seasons. This is one reason local homeowners benefit from regular inspections timed before heavy winter use.",
          "If your home has older brickwork, limited attic ventilation, or a history of water staining around the chimney breast, discuss those details during scheduling. Technicians can prioritize areas where water intrusion is most likely. A properly scoped inspection reduces surprise repairs and helps you plan preventative upgrades such as crown sealing, flashing correction, or cap replacement before conditions worsen.",
        ],
      },
      {
        heading: "Questions to ask before booking",
        paragraphs: [
          "Before you authorize any inspection level, ask what triggered that recommendation and what documentation you will receive. A professional answer should reference your usage history, recent events, and visible site conditions. You should also ask whether camera imaging is included, how findings are categorized by severity, and whether follow-up cleaning or repair estimates are itemized separately.",
          "This approach keeps the process transparent and helps you compare bids fairly. It also prevents the common problem of receiving a vague recommendation without context. Good inspection reports should help you decide what needs immediate action, what can be monitored, and what preventative work can be scheduled in phases.",
        ],
      },
      {
        heading: "Bottom line for homeowners",
        paragraphs: [
          "Most Seattle homeowners need an annual Level 1 inspection and periodic Level 2 inspections when major events occur. Level 3 is uncommon and should be tied to specific unresolved hazards. The right level protects your household, supports code-conscious maintenance decisions, and can lower long-term ownership cost by identifying deterioration before it becomes structural.",
          "If you are unsure where to start, schedule an inspection with your home history and usage details ready. A clear recommendation based on your actual system is always better than defaulting to either the cheapest or most invasive option. In chimney safety, the best inspection is the one that is correctly matched to risk.",
        ],
      },
    ],
    internalLinks: [
      { href: "/chimney-inspection", label: "Chimney Inspection Services" },
      { href: "/chimney-cleaning", label: "Chimney Cleaning" },
      { href: "/chimney-repair", label: "Chimney Repair" },
    ],
  },
  {
    slug: "chimney-sweep-cost-seattle",
    title: "How Much Does a Chimney Sweep Cost in Seattle?",
    metaTitle: "Chimney Sweep Cost Seattle: Pricing Guide for 2026",
    metaDescription:
      "Understand typical chimney sweep pricing in Seattle, what affects cost, and how to compare quotes without sacrificing safety or quality.",
    excerpt:
      "A practical Seattle pricing guide for chimney sweeping, including typical ranges, cost factors, and ways to avoid low-price surprises.",
    publishedTime: "2026-04-17T00:00:00.000Z",
    modifiedTime: "2026-04-17T00:00:00.000Z",
    heroKicker: "Seattle Cost Guide",
    sections: [
      {
        heading: "Typical chimney sweep pricing in Seattle",
        paragraphs: [
          "Homeowners in Seattle usually see standard chimney sweeping prices fall in a moderate range, with total cost influenced by system condition, access, and whether inspection is bundled. A straightforward cleaning for a regularly maintained open fireplace can be less expensive than a heavily used system with thick creosote, restricted roof access, or multiple connected appliances. This is why online one-size estimates are often misleading.",
          "Rather than chasing the lowest advertised number, focus on scope clarity. Ask whether the quote includes setup, dust control, debris removal, basic inspection findings, and a written condition summary. A lower headline price may exclude key steps and create add-on charges after arrival. Transparent Seattle contractors typically provide clear line items so you can compare proposals based on real deliverables instead of marketing language.",
        ],
      },
      {
        heading: "What drives chimney cleaning cost up or down",
        paragraphs: [
          "Creosote level is one of the biggest price drivers. Light soot from routine use is faster to remove than stage-three glazed buildup that may require specialized tooling and extra labor time. Appliance type also matters. Inserts and wood stoves can require different access points and additional disassembly compared with open fireplaces.",
          "Home layout can also affect pricing. Steep roofs, multi-story access, and limited working clearance all increase setup complexity and safety requirements. In older Seattle homes, technicians may need extra time for careful handling around aging masonry and brittle components. When estimates differ, these logistical details often explain the gap more than simple hourly rates.",
        ],
        bullets: [
          "Buildup severity and flue condition",
          "Roof pitch, height, and technician access",
          "Appliance type and number of flues serviced",
          "Whether inspection/reporting is included",
        ],
      },
      {
        heading: "Sweep only vs sweep plus inspection",
        paragraphs: [
          "Many Seattle homeowners save money long-term by combining sweeping with a documented inspection. Cleaning restores draft performance and reduces combustible deposits, while inspection identifies liner defects, crown cracking, moisture intrusion, and cap issues that can lead to bigger repairs if ignored. Bundled service may cost more up front, but it often prevents expensive reactive work later.",
          "If you are buying or selling a home, ask about Level 2 inspection requirements because those are usually separate from routine maintenance cleaning. For annual upkeep, a sweep plus visual safety review is typically enough unless there has been a major event such as chimney fire, appliance change, or structural movement. Matching service level to your scenario keeps spending efficient.",
        ],
      },
      {
        heading: "How often should Seattle homes be cleaned?",
        paragraphs: [
          "Frequency depends on fuel type, burn habits, and moisture exposure. Homes using fireplaces heavily through wet winters may need annual cleaning, while occasional-use systems can sometimes follow a longer cycle if inspections confirm low accumulation. The key is evidence-based scheduling, not arbitrary timing. Creosote and blockage risk vary dramatically between households.",
          "The safest strategy is to inspect every year and clean whenever measurable buildup, draft problems, or odor issues appear. This avoids both overspending on unnecessary visits and under-maintaining a high-use system. If you burn unseasoned wood, operate with restricted airflow, or frequently run overnight fires, expect cleaning needs to increase.",
        ],
      },
      {
        heading: "Red flags in cheap chimney sweep offers",
        paragraphs: [
          "Extremely low advertised prices can signal incomplete service scopes, aggressive upselling, or nonlocal lead-generation operations. Some homeowners report being quoted one amount over the phone and pressured into significantly higher repairs without clear documentation onsite. Cost transparency is as important as technical quality in chimney work.",
          "Ask for written findings with photos, licensing details, and itemized recommendations. If major repairs are recommended during a cleaning visit, it is reasonable to request documentation and, when needed, a second opinion before authorizing large costs. Reputable providers welcome informed comparisons and do not rely on same-day pressure tactics.",
        ],
      },
      {
        heading: "Budgeting tips for Seattle homeowners",
        paragraphs: [
          "Plan chimney maintenance before peak cold-season demand. Scheduling in late summer or early fall often gives you better appointment flexibility and time to address repairs before first use. Combining chimney and fireplace services in one visit can also reduce repeated setup charges.",
          "Keep records from each service call, including photo reports and measurements where available. Historical documentation helps technicians track progression and prevents duplicate diagnostic costs. Over several years, this maintenance-first approach usually costs less than emergency visits caused by deferred cleaning, water damage, or sudden draft failures.",
        ],
      },
      {
        heading: "Bottom line on cost",
        paragraphs: [
          "In Seattle, chimney sweep cost should be evaluated as safety maintenance, not just a transactional cleaning fee. A fair quote clearly explains scope, access assumptions, and what happens if hidden conditions are found. Price matters, but documented quality and trustworthy recommendations matter more.",
          "If you want an accurate estimate, provide photos, appliance details, and service history when you call. Better inputs produce better pricing and fewer surprises. The best value usually comes from preventive maintenance completed on schedule, with inspection findings guiding next steps.",
        ],
      },
    ],
    internalLinks: [
      { href: "/chimney-cleaning", label: "Chimney Cleaning Services" },
      { href: "/chimney-inspection", label: "Chimney Inspections" },
      { href: "/chimney-cleaning-seattle", label: "Seattle Chimney Cleaning" },
    ],
  },
  {
    slug: "when-to-clean-chimney-seattle",
    title: "When Should You Get Your Chimney Cleaned in Seattle?",
    metaTitle: "When to Clean Your Chimney in Seattle | Seasonal Guide",
    metaDescription:
      "Find the best time to schedule chimney cleaning in Seattle based on weather, fireplace usage, and safety risk indicators.",
    excerpt:
      "A seasonal Seattle guide to chimney cleaning timing, warning signs, and how to plan service before winter demand spikes.",
    publishedTime: "2026-04-17T00:00:00.000Z",
    modifiedTime: "2026-04-17T00:00:00.000Z",
    heroKicker: "Seasonal Planning",
    sections: [
      {
        heading: "Best season to schedule chimney cleaning",
        paragraphs: [
          "For most Seattle homeowners, late summer through early fall is the ideal window for chimney cleaning. You avoid the first cold-weather rush, have time for follow-up repairs, and start burning season with a safer system. Waiting until temperatures drop often means tighter schedules and reduced flexibility when you may need a quick turnaround.",
          "That said, timing is not only about calendar season. Usage patterns matter just as much. Homes that burn frequently through winter can accumulate enough creosote to justify annual cleaning regardless of month. If your fireplace is a primary comfort source, proactive scheduling before first fire is usually the best practice.",
        ],
      },
      {
        heading: "How Seattle weather affects chimney systems",
        paragraphs: [
          "Seattle's long wet season creates conditions that can worsen chimney performance even between heavy-use periods. Moisture can combine with soot residues to form acidic compounds that degrade metal and masonry surfaces over time. Water entry through damaged crowns, flashing, or missing caps may also contribute to odor and draft complaints.",
          "Because of this climate pattern, annual cleaning and inspection offer more than fire prevention. They also help detect moisture-related deterioration before it becomes structural. A clean, dry, and unobstructed flue system drafts more predictably and reduces unpleasant indoor smell during humid periods.",
        ],
      },
      {
        heading: "Signs your chimney should be cleaned now",
        paragraphs: [
          "Do not rely solely on calendar reminders if warning signs appear. Persistent smoky odor, poor draft, visible black buildup in the firebox throat, and smoke spillage into the room can indicate accumulation or obstruction. Animal nesting and debris after storm events can also block airflow and require immediate service.",
          "If you notice these symptoms, schedule cleaning promptly rather than waiting for your usual maintenance month. Delayed service can increase soot migration indoors, reduce appliance efficiency, and elevate fire risk in severe buildup conditions. A quick response often prevents a small maintenance issue from becoming a larger repair event.",
        ],
        bullets: [
          "Strong smoky smell when fireplace is not in use",
          "Sluggish fire startup or smoke rolling back indoors",
          "Dark flaky or glazed deposits visible near flue entry",
          "No service record from the last heating season",
        ],
      },
      {
        heading: "Usage-based cleaning frequency",
        paragraphs: [
          "Homes that burn occasional weekend fires may require less frequent cleaning than homes running nightly winter fires. Fuel quality also matters. Burning damp or unseasoned wood typically produces more smoke and residue, accelerating accumulation. Airflow habits such as prolonged low-oxygen burning can further increase creosote formation.",
          "The safest approach is annual professional inspection with cleaning based on measured buildup and operational symptoms. This avoids both over-servicing and unsafe delays. If your household has changed burn behavior recently, mention that during scheduling so the technician can tailor recommendations to current usage rather than old assumptions.",
        ],
      },
      {
        heading: "Move-in, remodel, and sale scenarios",
        paragraphs: [
          "If you recently purchased a Seattle home and cannot verify maintenance history, schedule chimney service before first use. Unknown flue conditions are common in older properties, and basic visual checks do not always reveal hidden liner damage or obstructions. New ownership is a good reset point for establishing safe records.",
          "Similarly, if you have changed appliances, completed roof work near the chimney, or had seismic or storm events, an updated inspection is wise even if you cleaned recently. Real estate transactions may also require more detailed inspection documentation. In these transitions, timing should be event-driven, not strictly seasonal.",
        ],
      },
      {
        heading: "How to plan the appointment",
        paragraphs: [
          "When booking, share fireplace type, last service date, and any draft or odor symptoms. Helpful details let the technician plan the right equipment and appointment window. Ask whether inspection findings are documented with photos and whether minor corrective work can be handled in the same visit.",
          "Preparing the area also speeds service. Clear décor near the hearth, avoid running active fires for at least a day before arrival, and provide access to attic or roof hatches if requested. Small preparation steps improve both safety and efficiency on appointment day.",
        ],
      },
      {
        heading: "Bottom line on timing",
        paragraphs: [
          "For Seattle, clean early, inspect annually, and respond quickly to warning signs. That strategy balances cost control with safety and keeps your fireplace ready when temperatures drop. Seasonal scheduling works best when paired with condition-based decisions informed by real inspection findings.",
          "If you are unsure whether now is the right time, schedule an inspection-first visit. You will get a clear picture of buildup, moisture risk, and any needed repairs so you can plan confidently instead of guessing.",
        ],
      },
    ],
    internalLinks: [
      { href: "/chimney-cleaning", label: "Schedule Chimney Cleaning" },
      { href: "/chimney-inspection", label: "Annual Chimney Inspection" },
      { href: "/chimney-cleaning-seattle", label: "Seattle Chimney Cleaning Service" },
    ],
  },
  {
    slug: "carbon-monoxide-chimney-safety",
    title: "Carbon Monoxide and Chimney Safety: What Seattle Homeowners Need to Know",
    metaTitle: "Carbon Monoxide Chimney Safety Guide for Seattle Homes",
    metaDescription:
      "Learn how chimney and venting problems can contribute to carbon monoxide risk, warning signs to watch for, and practical prevention steps.",
    excerpt:
      "A practical carbon monoxide safety guide focused on chimney draft failures, venting risks, detector placement, and prevention.",
    publishedTime: "2026-04-17T00:00:00.000Z",
    modifiedTime: "2026-04-17T00:00:00.000Z",
    heroKicker: "Home Safety",
    sections: [
      {
        heading: "Why carbon monoxide is a chimney issue",
        paragraphs: [
          "Carbon monoxide (CO) is an odorless, colorless gas produced during incomplete combustion. Fireplaces, wood stoves, and gas appliances are all potential sources when venting is restricted or drafting is poor. Chimney systems play a critical role in moving combustion byproducts safely outside. If that pathway is compromised by blockage, liner damage, or pressure imbalances, CO can accumulate indoors without obvious warning signs.",
          "Because CO cannot be seen or smelled, homeowners sometimes mistake early symptoms for fatigue or seasonal illness. Headache, dizziness, nausea, and confusion can escalate quickly in high concentrations. Treat chimney maintenance as part of your household CO prevention plan, not as a cosmetic service. Safe venting is a life-safety requirement.",
        ],
      },
      {
        heading: "Common chimney-related CO risk factors",
        paragraphs: [
          "Blocked flues are a leading risk factor. Nesting material, debris, and heavy soot accumulation can reduce airflow and cause backdrafting. Damaged liners can also leak combustion gases into wall or attic cavities and then into occupied spaces. In older Seattle homes, long-term moisture can accelerate liner and masonry deterioration, increasing the likelihood of hidden venting defects.",
          "Another risk appears when appliance and exhaust systems compete for indoor air. Tight building envelopes, kitchen hoods, bathroom fans, and dryers can create negative pressure that disrupts normal draft. If your fireplace smokes into the room when other fans run, that is a serious signal to evaluate venting and pressure conditions before continued use.",
        ],
        bullets: [
          "Flue obstruction from nests, debris, or heavy soot",
          "Cracked or disconnected chimney liner sections",
          "Downdrafts or negative pressure from household exhaust",
          "Improperly sized or incompatible venting components",
        ],
      },
      {
        heading: "Warning signs homeowners should not ignore",
        paragraphs: [
          "CO events can occur without obvious fireplace smoke, but there are operational clues worth taking seriously. These include frequent headaches during appliance use, pilot lights that go out unexpectedly, staining around vent joints, and persistent stale combustion odors. While none of these signs confirms CO on its own, they indicate a venting problem that requires immediate professional evaluation.",
          "If a CO alarm activates, move everyone to fresh air, call emergency services, and do not re-enter until authorities say it is safe. After the immediate emergency is resolved, schedule a full venting and chimney assessment before using fuel-burning appliances again. Resetting alarms without fixing root causes is dangerous.",
        ],
      },
      {
        heading: "Detector placement and maintenance basics",
        paragraphs: [
          "Every home with fuel-burning equipment should have CO alarms installed according to manufacturer and local code guidance. A practical baseline is to place detectors outside sleeping areas and on each occupied level. Test monthly, replace batteries as recommended, and replace the detector unit at end-of-life. Expired alarms may fail silently when you need them most.",
          "Avoid placing detectors directly next to fireplaces or cooking appliances where nuisance alarms may encourage disabling the device. Follow spacing guidance and keep records of installation dates. Good detector coverage does not replace chimney maintenance, but it provides critical early warning if venting conditions change unexpectedly.",
        ],
      },
      {
        heading: "How routine chimney service reduces CO risk",
        paragraphs: [
          "Routine inspection and cleaning reduce blockage risk and catch developing defects before they become dangerous. Camera-assisted inspection can identify cracks, offset joints, and deterioration hidden from casual view. Cleaning removes combustible and restrictive buildup, helping restore stable draft. Combined, these services address common pathways that allow combustion gases to re-enter the home.",
          "For Seattle households using fireplaces throughout winter, annual maintenance is a practical standard. If you have gas inserts, wood stoves, or mixed systems, ensure each venting path is evaluated for compatibility and condition. A maintenance plan matched to your appliance mix is safer than generic assumptions.",
        ],
      },
      {
        heading: "Special considerations for older Seattle homes",
        paragraphs: [
          "Many older homes have undergone partial remodels that changed airflow behavior without fully updating combustion venting. New windows, added insulation, and stronger exhaust fans can alter pressure dynamics. A chimney that drafted adequately decades ago may now require correction to operate safely in a tighter building envelope.",
          "If your home has had major envelope upgrades, include combustion safety testing in your maintenance planning. Identifying pressure-related backdraft conditions early can prevent recurring alarm events and reduce health risk for everyone in the household.",
        ],
      },
      {
        heading: "Bottom line on CO safety",
        paragraphs: [
          "Carbon monoxide safety depends on both detection and prevention. Detectors provide critical alerts, while proper chimney and venting maintenance reduces the chance that dangerous gases enter your living space in the first place. Treat unexplained symptoms and alarm activations as urgent events.",
          "With annual inspections, timely cleaning, and properly placed alarms, Seattle homeowners can significantly reduce CO risk. If you have any doubt about draft performance or venting condition, pause appliance use and schedule professional evaluation before the next fire.",
        ],
      },
    ],
    internalLinks: [
      { href: "/chimney-inspection", label: "Schedule a Chimney Safety Inspection" },
      { href: "/chimney-cleaning", label: "Book Chimney Cleaning" },
      { href: "/chimney-repair", label: "Chimney Repair Services" },
    ],
  },
  {
    slug: "creosote-buildup-dangers",
    title: "What Is Creosote and Why Is It Dangerous?",
    metaTitle: "Creosote Buildup Dangers: Seattle Chimney Safety Guide",
    metaDescription:
      "Understand what creosote is, how it builds up in chimneys, and why Seattle homeowners should remove it before it causes fire or venting hazards.",
    excerpt:
      "Learn how creosote forms, why glazed buildup is hazardous, and what Seattle homeowners can do to reduce chimney fire risk.",
    publishedTime: "2026-04-17T00:00:00.000Z",
    modifiedTime: "2026-04-17T00:00:00.000Z",
    heroKicker: "Fire Prevention",
    sections: [
      {
        heading: "What creosote is",
        paragraphs: [
          "Creosote is a residue created when wood smoke cools and condenses on chimney surfaces. It starts as a light soot-like deposit but can harden into thick, tar-like, or glazed layers over time. The more smoke particles and moisture in the flue, the faster accumulation occurs. Because Seattle weather is damp for long stretches, flue conditions can favor condensation when systems are underperforming or frequently run at low burn temperatures.",
          "Not all residue looks dramatic from the firebox, which is why homeowners sometimes underestimate risk. Significant accumulation may develop higher in the flue where visibility is limited. Professional inspection is the reliable way to measure buildup stage and determine whether standard brushing is sufficient or specialized removal methods are needed.",
        ],
      },
      {
        heading: "Why creosote is dangerous",
        paragraphs: [
          "The primary danger is chimney fire. Creosote is combustible, and heavy deposits can ignite when flue temperatures rise. Chimney fires may be loud and obvious, or they may burn slower and go unnoticed while still causing severe liner and masonry damage. Either scenario can create pathways for heat transfer to nearby framing materials.",
          "Creosote also narrows flue passageways, reducing draft performance and increasing smoke or gas spillage risk. As airflow declines, combustion quality often worsens, which can accelerate additional accumulation. This feedback loop makes delayed cleaning progressively more risky and expensive.",
        ],
        bullets: [
          "Increases risk of chimney fire",
          "Reduces draft and appliance performance",
          "Can contribute to smoke or gas backflow indoors",
          "Accelerates long-term chimney deterioration",
        ],
      },
      {
        heading: "The three common stages of buildup",
        paragraphs: [
          "Stage 1 is light, flaky soot that is generally easier to remove during routine sweeping. Stage 2 appears denser and may look crunchy or tarry, requiring more effort and specialized tools. Stage 3 is glazed creosote, a hard, shiny coating that can be difficult to remove and may require intensive mechanical or chemical treatment depending on system condition.",
          "As stages advance, both cleaning complexity and hazard level increase. This is why annual inspection is so important. Catching accumulation in early stages is safer for your home and more economical over time than waiting until heavily glazed deposits form.",
        ],
      },
      {
        heading: "What causes faster creosote accumulation",
        paragraphs: [
          "Burning unseasoned wood is one of the most common causes. Wet fuel releases more water vapor and smoke particulates, which encourages condensation in the chimney. Smoldering fires with restricted airflow have a similar effect because cooler combustion creates dirtier exhaust. Oversized flues, cold chimney walls, and short burn cycles can also contribute.",
          "In Seattle homes, moisture exposure and intermittent use patterns can make these issues more pronounced. If you often start short fires for ambiance, use mixed fuel quality, or run appliances with limited air intake, your chimney may accumulate residues faster than expected even with moderate annual burn hours.",
        ],
      },
      {
        heading: "How to reduce creosote risk",
        paragraphs: [
          "Use properly seasoned firewood, maintain hot enough fires for cleaner combustion, and avoid prolonged smoldering burns. Ensure your appliance and flue are correctly matched and in good condition. Basic operation habits make a measurable difference in deposit formation over a heating season.",
          "Schedule annual inspection and cleaning based on measured buildup, not guesswork. If you have had draft issues, odors, or visible dark deposits near the flue opening, schedule sooner. Preventive maintenance is far more affordable than post-fire repair and significantly lowers risk to your home and household.",
        ],
      },
      {
        heading: "What to do after a suspected chimney fire",
        paragraphs: [
          "Even if your fireplace appears to work afterward, discontinue use until a full chimney inspection is completed. Chimney fires can crack liners, damage mortar joints, and compromise components hidden from view. Continued operation without assessment can expose the home to repeat fire events or heat damage to surrounding materials.",
          "Document what happened, including unusual noises, odors, or smoke patterns, and share those details with your technician. Post-incident inspection should evaluate both immediate hazards and the repair scope needed for safe return to service.",
        ],
      },
      {
        heading: "Bottom line on creosote",
        paragraphs: [
          "Creosote is normal byproduct, but heavy buildup is not a normal condition. Left unchecked, it can trigger chimney fires, draft failures, and avoidable repair costs. Understanding how it forms helps homeowners choose safer operating habits and maintenance intervals.",
          "For Seattle households, consistent annual care is the most reliable way to keep buildup under control. If you are unsure about your current condition, schedule an inspection before your next burn cycle and let measured findings guide the plan.",
        ],
      },
    ],
    internalLinks: [
      { href: "/chimney-cleaning", label: "Professional Chimney Cleaning" },
      { href: "/chimney-inspection", label: "Chimney Inspection" },
      { href: "/chimney-repair", label: "Chimney Repair and Restoration" },
    ],
  },
]

export const legacyBlogPosts = [
  {
    slug: "fake-chimney-sweep-companies-seattle",
    title: "How to Spot Fake Chimney Sweep Companies in Seattle",
    excerpt: "Learn how to verify licensing, avoid scams, and hire a legitimate Seattle chimney contractor.",
    publishedTime: "2026-01-01T00:00:00.000Z",
  },
]

export const allBlogIndexPosts = [
  ...phaseOneBlogPosts.map((post) => ({
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    publishedTime: post.publishedTime,
  })),
  ...legacyBlogPosts,
].sort((a, b) => (a.publishedTime > b.publishedTime ? -1 : 1))

export function getPhaseOnePostBySlug(slug: string) {
  return phaseOneBlogPosts.find((post) => post.slug === slug)
}
