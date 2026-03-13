export type RiskLevel = 'high' | 'medium' | 'low';

export interface RiskFactor {
  icon: 'critical' | 'warning' | 'info';
  title: string;
  desc: string;
  tag?: 'critical' | 'warning' | 'info';
  tagLabel?: string;
}

export interface Intervention {
  title: string;
  desc: string;
  priority: 'urgent' | 'recommended' | 'optional';
}

export interface TimelineEvent {
  time: string;
  status: 'done' | 'pending' | 'blocked';
  text: string;
}

export interface DailySnapshot {
  day:            number;
  dateLabel:      string;
  headline:       string;
  risk:           RiskLevel;
  riskFactors:    RiskFactor[];
  interventions:  Intervention[];
  events:         TimelineEvent[];
}

export interface Patient {
  id: number;
  name: string;
  nhs: string;
  age: number;
  sex: 'M' | 'F';
  bed: string;
  los: number;
  drd: 'Set' | 'Predicted';
  drdDate: string;
  risk: RiskLevel;
  pathway: number;
  forecast: string;
  forecastConf: string;
  diagnosis: string;
  consultant: string;
  riskFactors: RiskFactor[];
  interventions: Intervention[];
  timeline: TimelineEvent[];
  dailySnapshots?: DailySnapshot[];
}

export const patients: Patient[] = [
  {
    id: 1, name: "Margaret Thompson", nhs: "943 221 8847", age: 82, sex: "F", bed: "7A-01",
    los: 9, drd: "Set", drdDate: "2026-03-08", risk: "high", pathway: 1,
    forecast: "14 Mar", forecastConf: "62%",
    diagnosis: "Community-acquired pneumonia, COPD exacerbation",
    consultant: "Dr R. Patel",
    riskFactors: [
      { icon: "critical", title: "Discharge summary not started", desc: "Junior Doctor unavailable tomorrow, no draft started.", tag: "critical", tagLabel: "Bottleneck" },
      { icon: "critical", title: "Pharmacy understaffed today", desc: "3 of 5 absent, medication queue 6+ hr wait.", tag: "critical", tagLabel: "Capacity" },
      { icon: "warning", title: "Care home bed availability limited", desc: "Only 2 beds available, unlikely before Thursday.", tag: "warning", tagLabel: "External" },
      { icon: "info", title: "Family not yet informed of discharge plan", desc: "No contact since 6 Mar, discharge datenot shared." }
    ],
    interventions: [
      { title: "Assign discharge summary to Dr B. Lewis (Junior Doctor)", desc: "Day shift today and tomorrow, complete by 17:00.", priority: "urgent" },
      { title: "Escalate discharge medications to pharmacy lead", desc: "Pre-prescribe now to jump medication queue.", priority: "urgent" },
      { title: "Contact care transfer hub re: Pathway 1 beds", desc: "Broaden search to neighbouring borough homes.", priority: "recommended" },
      { title: "Call daughter (Mrs K. Thompson)", desc: "Update on discharge dateand care home placement status.", priority: "recommended" }
    ],
    timeline: [
      { time: "Day 1", status: "done", text: "Admitted via A&E with acute breathlessness" },
      { time: "Day 3", status: "done", text: "IV antibiotics stepped down to oral" },
      { time: "Day 6", status: "done", text: "Medically fit declared by Dr Patel" },
      { time: "Day 8", status: "done", text: "Discharge date: 8 Mar. OT assessment completed" },
      { time: "Day 9", status: "blocked", text: "Today: Awaiting summary, discharge meds, placement" },
      { time: "Day 11", status: "pending", text: "AI forecast: likely discharge 14 Mar" }
    ]
  },
  {
    id: 2, name: "James Okonkwo", nhs: "487 339 2105", age: 74, sex: "M", bed: "7A-03",
    los: 12, drd: "Set", drdDate: "2026-03-06", risk: "high", pathway: 2,
    forecast: "15 Mar", forecastConf: "55%",
    diagnosis: "Heart failure exacerbation, Type 2 diabetes",
    consultant: "Dr L. Chen",
    riskFactors: [
      { icon: "critical", title: "Nursing home placement blocked", desc: "No cardiac-capable beds within 15-mile radius.", tag: "critical", tagLabel: "Capacity" },
      { icon: "critical", title: "Social worker assessment overdue", desc: "Referral Day 8, visit not scheduled, 72hr backlog.", tag: "critical", tagLabel: "Bottleneck" },
      { icon: "warning", title: "Complex medication regime", desc: "12 meds including warfarin, discharge meds take 90+ min to prepare." }
    ],
    interventions: [
      { title: "Escalate to care transfer hub manager", desc: "6 days past discharge date, invoke 48hr council commitment.", priority: "urgent" },
      { title: "Pre-prescribe discharge medications early", desc: "Prescribe now to save 3+ hrs on discharge day.", priority: "urgent" },
      { title: "Arrange pharmacist counselling slot", desc: "Book Wed/Thu to avoid discharge-day delays.", priority: "recommended" }
    ],
    timeline: [
      { time: "Day 1", status: "done", text: "Admitted with acute decompensated HF" },
      { time: "Day 5", status: "done", text: "Diuresis complete, weight target achieved" },
      { time: "Day 6", status: "done", text: "Discharge date: 6 Mar" },
      { time: "Day 8", status: "done", text: "Social work referral sent" },
      { time: "Day 12", status: "blocked", text: "Today: 4 days past discharge date. No placement." }
    ]
  },
  {
    id: 3, name: "Patricia Williams", nhs: "612 884 5590", age: 68, sex: "F", bed: "7A-05",
    los: 7, drd: "Set", drdDate: "2026-03-09", risk: "high", pathway: 0,
    forecast: "11 Mar", forecastConf: "78%",
    diagnosis: "Elective knee replacement (post-op day 5)",
    consultant: "Mr A. Shah",
    riskFactors: [
      { icon: "critical", title: "Transport not booked", desc: "Wheelchair transport fully booked, no alternative arranged.", tag: "critical", tagLabel: "Bottleneck" },
      { icon: "warning", title: "Home equipment not delivered", desc: "Delivery 12 Mar, one day after forecast discharge.", tag: "warning", tagLabel: "Logistics" }
    ],
    interventions: [
      { title: "Book transport for 11 Mar (AM slot)", desc: "Try external provider, hospital waitlist position 7.", priority: "urgent" },
      { title: "Expedite equipment delivery to 10 Mar", desc: "Flag urgent to avoid bed-day loss.", priority: "urgent" },
      { title: "Confirm home readiness with patient", desc: "Confirm heating, food, and neighbour support.", priority: "optional" }
    ],
    timeline: [
      { time: "Day 1", status: "done", text: "Admitted for elective L knee replacement" },
      { time: "Day 2", status: "done", text: "Surgery completed. Physio commenced." },
      { time: "Day 5", status: "done", text: "Discharge date: 9 Mar. Mobilising with frame." },
      { time: "Day 7", status: "pending", text: "Today: Awaiting transport + equipment" }
    ]
  },
  {
    id: 4, name: "Robert Singh", nhs: "773 156 4423", age: 58, sex: "M", bed: "7A-07",
    los: 5, drd: "Set", drdDate: "2026-03-10", risk: "high", pathway: 0,
    forecast: "11 Mar", forecastConf: "71%",
    diagnosis: "Acute pancreatitis (resolving), alcohol use disorder",
    consultant: "Dr R. Patel",
    riskFactors: [
      { icon: "critical", title: "Consultant review not yet completed today", desc: "Ward round 2hrs late, decision awaits review.", tag: "critical", tagLabel: "Bottleneck" },
      { icon: "warning", title: "Community alcohol service referral pending", desc: "Referral Day 3, no appointment allocated yet.", tag: "warning", tagLabel: "External" },
      { icon: "info", title: "Discharge summary partially drafted", desc: "60% complete, awaiting consultant medication review." }
    ],
    interventions: [
      { title: "Request registrar to confirm discharge", desc: "Senior Doctor can authorise if Dr Patel delegates.", priority: "urgent" },
      { title: "Chase alcohol service appointment", desc: "Patient willing, appointment needed for safe discharge.", priority: "recommended" },
      { title: "Complete discharge summary medication section", desc: "Pharmacist reconciles now, doctor adds narrative after.", priority: "recommended" }
    ],
    timeline: [
      { time: "Day 1", status: "done", text: "Admitted with epigastric pain, raised lipase" },
      { time: "Day 3", status: "done", text: "Pain controlled, tolerating oral diet" },
      { time: "Day 4", status: "done", text: "Medically fit. Discharge date: 10 Mar" },
      { time: "Day 5", status: "pending", text: "Today: Awaiting consultant review" }
    ]
  },
  {
    id: 5, name: "Dorothy Evans", nhs: "255 017 8831", age: 91, sex: "F", bed: "7A-02",
    los: 14, drd: "Set", drdDate: "2026-03-04", risk: "medium", pathway: 3,
    forecast: "16 Mar", forecastConf: "45%",
    diagnosis: "Fall with hip fracture (post surgery), dementia",
    consultant: "Mr A. Shah",
    riskFactors: [
      { icon: "warning", title: "Permanent care home placement in progress", desc: "Family visit to shortlisted homes on 12 Mar.", tag: "warning", tagLabel: "Patient choice" },
      { icon: "info", title: "Capacity of Medicines Management adequate", desc: "Discharge meds ready within standard 4-hour window." }
    ],
    interventions: [
      { title: "Facilitate family care home visit", desc: "Offer virtual tour to speed family decision.", priority: "recommended" },
      { title: "Pre-prepare discharge documentation", desc: "Complete now, execute on placement confirmation.", priority: "optional" }
    ],
    timeline: [
      { time: "Day 1", status: "done", text: "Admitted following mechanical fall at home" },
      { time: "Day 2", status: "done", text: "Hip surgery completed" },
      { time: "Day 7", status: "done", text: "Discharge date: 4 Mar. Mobilising with physio." },
      { time: "Day 14", status: "pending", text: "Today: 6 days past discharge date. Awaiting placement." }
    ]
  },
  {
    id: 6, name: "Ahmed Hassan", nhs: "891 445 2267", age: 45, sex: "M", bed: "7A-08",
    los: 3, drd: "Predicted", drdDate: "", risk: "medium", pathway: 0,
    forecast: "12 Mar", forecastConf: "84%",
    diagnosis: "Cellulitis (right lower leg), Type 2 diabetes",
    consultant: "Dr L. Chen",
    riskFactors: [
      { icon: "warning", title: "IV-to-oral antibiotic switch pending", desc: "CRP falling (142→87→54), switch expected tomorrow.", tag: "warning", tagLabel: "Clinical" },
      { icon: "info", title: "District nurse follow-up required", desc: "Wound changes needed, Community Nurse needs 48hr lead time." }
    ],
    interventions: [
      { title: "Pre-book district nurse for 12 or 13 Mar", desc: "Submit now to meet 48hr lead time.", priority: "recommended" },
      { title: "Pre-prescribe oral antibiotics", desc: "Can pre-prescribe pending consultant confirmation.", priority: "optional" }
    ],
    timeline: [
      { time: "Day 1", status: "done", text: "Admitted with spreading cellulitis" },
      { time: "Day 3", status: "pending", text: "Today: CRP improving. AI predicts discharge 12 Mar" }
    ]
  },
  {
    id: 7, name: "Susan Clarke", nhs: "334 778 9910", age: 77, sex: "F", bed: "7A-04",
    los: 6, drd: "Set", drdDate: "2026-03-10", risk: "medium", pathway: 1,
    forecast: "12 Mar", forecastConf: "68%",
    diagnosis: "UTI with delirium (resolving), underlying vascular dementia",
    consultant: "Dr R. Patel",
    riskFactors: [
      { icon: "warning", title: "Short-term care bed search in progress", desc: "3 beds identified, awaiting provider response (24h).", tag: "warning", tagLabel: "External" },
      { icon: "info", title: "Delirium screening score improving", desc: "Delirium score 4→2→1, near cognitive baseline." }
    ],
    interventions: [
      { title: "Chase care home providers (3 pending)", desc: "Escalate if no response by 14:00.", priority: "recommended" },
      { title: "Prepare discharge medications and summary", desc: "Clinically stable, complete documentation today.", priority: "optional" }
    ],
    timeline: [
      { time: "Day 1", status: "done", text: "Admitted with confusion, positive urine culture" },
      { time: "Day 4", status: "done", text: "Delirium resolving. Discharge date: 10 Mar" },
      { time: "Day 6", status: "pending", text: "Today: Awaiting care bed placement" }
    ]
  },
  {
    id: 8, name: "Michael Brown", nhs: "567 203 1148", age: 52, sex: "M", bed: "7A-09",
    los: 2, drd: "Predicted", drdDate: "", risk: "low", pathway: 0,
    forecast: "11 Mar", forecastConf: "91%",
    diagnosis: "Chest pain (troponin negative x2), anxiety disorder",
    consultant: "Dr L. Chen",
    riskFactors: [
      { icon: "info", title: "Awaiting final troponin at 18:00", desc: "Negative triggers auto-discharge, GP letter pre-loaded." }
    ],
    interventions: [
      { title: "Pre-prepare discharge pack", desc: "Prep leaflet, GP letter, cardiology referral now.", priority: "optional" }
    ],
    timeline: [
      { time: "Day 1", status: "done", text: "Admitted with central chest pain via A&E" },
      { time: "Day 2", status: "pending", text: "Today: Awaiting 18:00 troponin. Discharge likely." }
    ]
  },
  {
    id: 9, name: "Elizabeth Kowalski", nhs: "128 664 3357", age: 63, sex: "F", bed: "7A-06",
    los: 4, drd: "Set", drdDate: "2026-03-10", risk: "low", pathway: 0,
    forecast: "10 Mar", forecastConf: "88%",
    diagnosis: "Asthma exacerbation (resolving)",
    consultant: "Dr R. Patel",
    riskFactors: [
      { icon: "info", title: "All discharge tasks on track", desc: "Discharge meds in queue (pos. 3), transport booked 14:00." }
    ],
    interventions: [
      { title: "Monitor medication queue position", desc: "Expected ready 12:30, act only if past 13:00.", priority: "optional" }
    ],
    timeline: [
      { time: "Day 1", status: "done", text: "Admitted with acute wheeze, SpO2 88%" },
      { time: "Day 3", status: "done", text: "Weaned to inhalers. Discharge date: 10 Mar" },
      { time: "Day 4", status: "done", text: "Today: On track for 14:00 discharge" }
    ]
  },
  {
    id: 10, name: "George Taylor", nhs: "445 891 7723", age: 70, sex: "M", bed: "7A-10",
    los: 3, drd: "Predicted", drdDate: "", risk: "low", pathway: 0,
    forecast: "11 Mar", forecastConf: "86%",
    diagnosis: "COPD exacerbation (mild), community-acquired pneumonia",
    consultant: "Dr R. Patel",
    riskFactors: [
      { icon: "info", title: "Clinically improving — discharge tomorrow likely", desc: "CRP 28 (from 95), sats 94%, home support ready." }
    ],
    interventions: [
      { title: "Prepare discharge medications and summary tomorrow AM", desc: "Schedule morning round, discharge by noon if stable.", priority: "optional" }
    ],
    timeline: [
      { time: "Day 1", status: "done", text: "Admitted with productive cough, CRP 95" },
      { time: "Day 3", status: "pending", text: "Today: Improving. AI predicts discharge 11 Mar" }
    ]
  }
];

// ─── Daily Snapshot Generation ────────────────────────────────────────────────

function seeded(seed: number) {
  let s = seed;
  return () => { s = (s * 1664525 + 1013904223) & 0xffffffff; return (s >>> 0) / 0x100000000; };
}

const FIRST_NAMES = ['James','Mary','Robert','Patricia','John','Jennifer','Michael','Linda','David','Barbara','Richard','Susan','Joseph','Dorothy','Thomas','Jessica','Charles','Sarah','Christopher','Karen','Daniel','Nancy','Matthew','Betty','Anthony','Margaret','Mark','Sandra','Donald','Ashley','Steven','Emily','Paul','Donna','Andrew','Carol','Kenneth','Ruth','Joshua','Sharon','Kevin','Michelle','Brian','Laura','George','Sarah','Timothy','Kimberly','Ronald','Deborah'];
const LAST_NAMES  = ['Smith','Johnson','Williams','Brown','Jones','Garcia','Miller','Davis','Wilson','Taylor','Anderson','Thomas','Jackson','White','Harris','Martin','Thompson','Moore','Young','Allen','King','Wright','Scott','Torres','Hill','Adams','Baker','Nelson','Carter','Mitchell','Perez','Roberts','Turner','Phillips','Campbell','Parker','Evans','Edwards','Collins','Stewart','Morris','Morgan','Reed','Cook','Bell','Bailey','Cooper','Richardson','Cox','Ward'];
const CONSULTANTS = ['Dr R. Patel','Dr S. Ahmed','Dr L. Chen','Dr M. Okafor','Dr F. Walsh','Dr A. Singh','Dr C. Nkosi','Dr H. Brennan','Dr T. Yamamoto','Dr E. Kowalski'];

const DIAGNOSES: Record<string, string[]> = {
  Medical:              ['Community-acquired pneumonia','Heart failure exacerbation','Acute kidney injury','Pulmonary embolism','Diabetic ketoacidosis','Sepsis — urinary source','COPD exacerbation','Hypertensive crisis','Anaemia — iron deficiency','Cellulitis, left leg'],
  Surgical:             ['Laparoscopic appendicectomy','Open cholecystectomy','Inguinal hernia repair','Bowel obstruction','Perforated diverticulitis','Colorectal resection','Mastectomy — breast cancer','Thyroidectomy','AAA repair — elective','Pilonidal abscess drainage'],
  Cardiology:           ['NSTEMI — medically managed','Atrial fibrillation — rate control','Heart failure — decompensated','Complete heart block — pacemaker','Hypertrophic cardiomyopathy','Pericarditis','Aortic stenosis — TAVI planned','Ventricular tachycardia','Cardiac tamponade — drained','Pulmonary hypertension'],
  Gastroenterology:     ['Upper GI bleed — peptic ulcer','Crohn\'s disease flare','Ulcerative colitis — acute severe','Acute pancreatitis','Liver cirrhosis — decompensated','Oesophageal stricture — dilatation','Coeliac disease — newly diagnosed','Hepatitis B — acute','Ischaemic colitis','Barrett\'s oesophagus surveillance'],
  AMU:                  ['Acute confusion — UTI','Syncope — vasovagal','Chest pain — query ACS','Shortness of breath — PE excluded','Hypoglycaemia — insulin error','Fall with head injury — no bleed','Acute back pain — cauda equina excluded','Dizziness — labyrinthitis','Epistaxis — uncontrolled','Rash — query meningitis'],
  'Elective Specialty': ['Total knee replacement','Total hip replacement','Spinal decompression','Cataract surgery','Varicose vein stripping','Tonsillectomy','Laparoscopic fundoplication','Carpal tunnel release','Arthroscopic meniscectomy','Rhinoplasty — functional'],
  'Non-Elective Specialty': ['Acute stroke — ischaemic','Seizure — new onset epilepsy','Subarachnoid haemorrhage','Subdural haematoma','Meningitis — bacterial','Guillain-Barré syndrome','Multiple sclerosis relapse','Transient ischaemic attack','Parkinson\'s disease — falls','Peripheral neuropathy'],
  DCC:                  ['Post-cardiac arrest — ROSC achieved','Respiratory failure — ventilated','Septic shock — multi-organ support','Major trauma — polytrauma','Post-operative HDU — cardiac surgery','Acute liver failure','DKA — severe, ICU-level care','Intracranial haemorrhage — ITU','Burns — >20% TBSA','Anaphylaxis — refractory'],
  GPAU:                 ['Acute abdominal pain — query appendicitis','Fever of unknown origin','Acute confusion — dementia background','Shortness of breath — query pneumonia','Palpitations — query arrhythmia','Haematuria — query bladder cancer','Chest pain — atypical','Nausea and vomiting — uncontrolled','Haemoptysis — query TB','Leg swelling — bilateral'],
};

const RISK_FACTOR_POOL: RiskFactor[] = [
  { icon:'critical', title:'Discharge summary not started',      desc:'Junior Doctor on leave, no cover, discharge meds blocked.', tag:'critical', tagLabel:'BOTTLENECK' },
  { icon:'critical', title:'Social care assessment outstanding', desc:'Full care package needed, Speech Therapist and referral pending.', tag:'critical', tagLabel:'BOTTLENECK' },
  { icon:'critical', title:'Consultant sign-off pending',        desc:'Consultant agreement not obtained, round tomorrow AM.', tag:'critical', tagLabel:'BOTTLENECK' },
  { icon:'warning',  title:'Pharmacy medication queue backlog',         desc:'medication queue 12 patients, 5+ hr wait.', tag:'warning', tagLabel:'CAPACITY' },
  { icon:'warning',  title:'Transport not yet arranged',         desc:'Patient Transport booking not confirmed, 3–4hr lead time.', tag:'warning', tagLabel:'EXTERNAL' },
  { icon:'warning',  title:'Family not informed of discharge',   desc:'Next of kin not contacted, no confirmation received.', tag:'warning', tagLabel:'EXTERNAL' },
  { icon:'warning',  title:'Care home bed availability limited', desc:'Only 1 local bed available, coordinator contacted.', tag:'warning', tagLabel:'EXTERNAL' },
  { icon:'info',     title:'Discharge summary partially drafted',desc:'75% complete, med reconciliation and results awaited.', tag:'info', tagLabel:'IN PROGRESS' },
  { icon:'info',     title:'Outpatient follow-up not booked',    desc:'Referral sent, appointment slot not yet confirmed.', tag:'info', tagLabel:'IN PROGRESS' },
  { icon:'info',     title:'Equipment order placed',             desc:'Ordered, delivery tomorrow, discharge contingent on receipt.', tag:'info', tagLabel:'IN PROGRESS' },
];

const INTERVENTION_POOL: Intervention[] = [
  { title:'Complete discharge summary today',          desc:'Assign Junior Doctor on day shift, review by 17:00.',             priority:'urgent' },
  { title:'Chase pharmacy for discharge medications',                   desc:'Escalate to pharmacist, fast-track if before 15:00.',   priority:'urgent' },
  { title:'Submit social care referral',               desc:'Contact Discharge Team, continuing care checklist, allow 48hrs.',   priority:'urgent' },
  { title:'Book patient transport',                    desc:'Call Patient Transport, confirm address and mobility needs.',        priority:'recommended' },
  { title:'Notify family of discharge plan',           desc:'Call carer, confirm discharge dateand equipment needs.',          priority:'recommended' },
  { title:'Arrange outpatient follow-up',              desc:'Refer to clinic, GP letter sent simultaneously.',       priority:'recommended' },
  { title:'Confirm care home placement',               desc:'Two homes available, confirm suitability with family.', priority:'recommended' },
  { title:'Request equipment delivery confirmation',   desc:'Chase community OT, equipment needed before discharge.',priority:'recommended' },
  { title:'Update digital discharge record',                 desc:'Ensure GP letter reviewed before patient leaves.',      priority:'optional' },
  { title:'Confirm medication counselling done',       desc:'Confirm patient understands new meds before discharge.',priority:'optional' },
];

const TIMELINE_TEMPLATES = [
  (d: number) => ({ time:`Day 1`, status:'done'    as const, text:`Admitted via ${d%2===0?'ED':'GP referral'}. Bloods and imaging requested.` }),
  (d: number) => ({ time:`Day 2`, status:'done'    as const, text:`Diagnosis confirmed. Treatment plan initiated. Patient stable.` }),
  (d: number) => ({ time:`Day ${Math.min(d-1,3)}`, status:'done' as const, text:`Consultant reviewed. Discharge planning discussion documented.` }),
  (d: number) => ({ time:`Day ${d}`, status:'pending' as const, text:`Today: ${d>5?'Extended stay — barriers identified.':'Progressing. Discharge anticipated tomorrow.'}` }),
  (d: number) => ({ time:'Target', status:'pending' as const, text:`Discharge date set. Awaiting ${d>7?'social care and pharmacy clearance':'pharmacy and family confirmation'}.` }),
];

// ─── Daily Snapshot Generation ────────────────────────────────────────────────

const CLINICAL_RF_POOL: RiskFactor[] = [
  { icon:'critical', title:'IV access and monitoring required',    desc:'Patient on IV therapy. Cannula patent. Daily review needed. Fluid balance chart commenced.',             tag:'critical', tagLabel:'CLINICAL' },
  { icon:'critical', title:'Investigations awaited',              desc:'Chest X-ray, full blood count and renal profile outstanding. Diagnosis cannot yet be confirmed.',          tag:'critical', tagLabel:'CLINICAL' },
  { icon:'critical', title:'Haemodynamically unstable',           desc:'BP fluctuating. HDU review requested. Escalation criteria documented and in place.',                       tag:'critical', tagLabel:'CLINICAL' },
  { icon:'warning',  title:'Infection markers elevated',          desc:'CRP > 200. Temperature 38.4 °C. IV antibiotics commenced as per local empirical guidelines.',              tag:'warning',  tagLabel:'CLINICAL' },
  { icon:'warning',  title:'Specialist review requested',         desc:'Referral submitted to relevant specialty. Awaiting review within 24 hours.',                               tag:'warning',  tagLabel:'CLINICAL' },
  { icon:'warning',  title:'Pain management ongoing',             desc:'Patient requiring regular analgesia. Pain score 6/10. PRN medications reviewed.',                          tag:'warning',  tagLabel:'CLINICAL' },
  { icon:'info',     title:'Imaging ordered',                     desc:'CT scan / chest X-ray requested. Radiology appointment pending scheduling.',                               tag:'info',     tagLabel:'PENDING'  },
  { icon:'info',     title:'Treatment response monitored',        desc:'Daily bloods and observations tracking response. Trending in the right direction.',                         tag:'info',     tagLabel:'MONITORING'},
  { icon:'info',     title:'Step-down to oral therapy commenced', desc:'IV therapy complete. Switch to oral equivalent where appropriate. Tolerating well.',                       tag:'info',     tagLabel:'PROGRESS' },
  { icon:'warning',  title:'Discharge planning not yet started',  desc:'Clinical focus during Days 1–3. Pathway assessment and social care referral deferred to Day 4+.',          tag:'warning',  tagLabel:'PENDING'  },
];

const CLINICAL_IV_POOL: Intervention[] = [
  { title:'Order baseline investigations',          desc:'FBC, U+E, CRP, CXR, ECG. Results expected within 4 hours. Review with consultant at next round.',   priority:'urgent'      },
  { title:'Commence IV antibiotics',                desc:'As per local empirical guidelines. IV access established. Review clinical response at 48 hours.',    priority:'urgent'      },
  { title:'Establish IV access and monitoring',     desc:'IV cannula inserted. Fluid balance chart commenced. Observations 4-hourly minimum.',                 priority:'urgent'      },
  { title:'Request specialist review',              desc:'Referral submitted to relevant specialty. Expected response within 24 hours.',                       priority:'recommended' },
  { title:'Review imaging and investigation results',desc:'Radiologist / lab report expected. Consultant to review findings and update management plan.',      priority:'recommended' },
  { title:'Reassess pain management',               desc:'Current analgesia reviewed. Consider step-up if pain score persistently > 5.',                      priority:'recommended' },
  { title:'Step down to oral medications',          desc:'IV therapy course complete. Switch to oral equivalent where appropriate.',                           priority:'optional'    },
];

const PHASE1_HEADLINES = [
  'Day 1 — results reviewed, treatment commenced',
  'Day 2 — treatment under way, monitoring closely',
  'Day 3 — initial clinical response assessed',
];
const PHASE2_HEADLINES = [
  'Day 4 — clinically stabilising, discharge pathway identified',
  'Day 5 — discharge planning in progress, pathway confirmed',
  'Day 6 — medically optimised, logistic barriers emerging',
];
const PHASE1_EVENTS = [
  'Diagnosis confirmed. Treatment plan initiated. Patient stable.',
  'IV therapy commenced. Specialist review attended.',
  'Clinical response assessed. Step-down considered.',
];
const PHASE2_EVENTS = [
  'Medically fit declared. Discharge planning meeting held.',
  'Social care referral submitted. OT assessment requested.',
  'All clinical criteria met. Awaiting pathway clearance.',
];

function formatDayLabel(admitDate: Date, dayOffset: number): string {
  const d = new Date(admitDate.getTime() + dayOffset * 86400000);
  const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  return `${days[d.getDay()]} ${d.getDate()} ${months[d.getMonth()]}`;
}

function buildDailySnapshots(
  los: number,
  finalRisk: RiskLevel,
  finalRiskFactors: RiskFactor[],
  finalInterventions: Intervention[],
  finalTimeline: TimelineEvent[],
  rng: () => number
): DailySnapshot[] {
  const admitDate = new Date(Date.now() - los * 86400000);
  const snapshots: DailySnapshot[] = [];

  for (let day = 0; day <= los; day++) {
    const dateLabel = formatDayLabel(admitDate, day);

    // Final day: exact copy of static patient state
    if (day === los) {
      snapshots.push({
        day, dateLabel,
        headline: 'Current state (live)',
        risk: finalRisk,
        riskFactors: finalRiskFactors,
        interventions: finalInterventions,
        events: finalTimeline,
      });
      continue;
    }

    let risk: RiskLevel;
    let headline: string;
    let riskFactors: RiskFactor[];
    let interventions: Intervention[];
    let events: TimelineEvent[];

    if (day === 0) {
      // Phase 0 — Admission
      risk = 'high';
      headline = 'Admission — assessment and investigations commenced';
      riskFactors = [CLINICAL_RF_POOL[0], CLINICAL_RF_POOL[1]];
      interventions = [CLINICAL_IV_POOL[0], CLINICAL_IV_POOL[2]];
      events = [{ time: 'Day 0', status: 'pending', text: 'Admitted. Baseline investigations ordered. Patient assessed.' }];

    } else if (day <= 3) {
      // Phase 1 — Treatment
      risk = day <= 1 ? 'high' : (rng() > 0.5 ? 'high' : 'medium');
      headline = PHASE1_HEADLINES[day - 1];
      const rfIdx = Math.floor(rng() * 3) + (day % 2 === 0 ? 1 : 0);
      riskFactors = [CLINICAL_RF_POOL[rfIdx % 4], CLINICAL_RF_POOL[(rfIdx + 2) % 6]];
      if (day === 3) riskFactors.push(CLINICAL_RF_POOL[9]); // discharge planning not started
      interventions = [CLINICAL_IV_POOL[Math.floor(rng() * 3)], CLINICAL_IV_POOL[3 + Math.floor(rng() * 2)]];
      events = [{ time: `Day ${day}`, status: 'done', text: PHASE1_EVENTS[day - 1] }];

    } else if (day <= 6) {
      // Phase 2 — Stabilisation + discharge planning
      risk = 'medium';
      headline = PHASE2_HEADLINES[day - 4];
      const clinRf = CLINICAL_RF_POOL[7 + ((day - 4) % 2)];
      const logRf  = RISK_FACTOR_POOL[Math.floor(rng() * 5)];
      riskFactors = [clinRf, logRf];
      interventions = [CLINICAL_IV_POOL[6], INTERVENTION_POOL[Math.floor(rng() * 5)]];
      events = [{ time: `Day ${day}`, status: 'done', text: PHASE2_EVENTS[day - 4] }];

    } else {
      // Phase 3 — Bottlenecks dominate
      risk = finalRisk;
      headline = `Day ${day} — medically fit, discharge held by systemic barriers`;
      const sliceEnd = Math.min(day - 6, finalRiskFactors.length);
      riskFactors = finalRiskFactors.slice(0, Math.max(1, sliceEnd));
      interventions = finalInterventions.slice(0, Math.max(1, Math.min(day - 6, finalInterventions.length)));
      // Include timeline events whose day label is <= current day
      events = finalTimeline.filter(t => {
        const m = t.time.match(/Day\s*(\d+)/i);
        return m ? parseInt(m[1]) <= day : false;
      });
      if (events.length === 0) {
        events = [{ time: `Day ${day}`, status: 'pending', text: 'Medically fit. Discharge barriers under active management.' }];
      }
    }

    snapshots.push({ day, dateLabel, headline, risk, riskFactors, interventions, events });
  }

  return snapshots;
}

// Populate dailySnapshots for the hardcoded Ward 7A patients
patients.forEach(p => {
  p.dailySnapshots = buildDailySnapshots(
    p.los, p.risk, p.riskFactors, p.interventions, p.timeline,
    seeded(parseInt(p.nhs.replace(/ /g, '')) % 999983)
  );
});

// ─── Ward Patient Generator ───────────────────────────────────────────────────

export function generateWardPatients(wardName: string, wardType: string, bedPrefix: string): Patient[] {
  const seed = wardName.split('').reduce((a, c) => a + c.charCodeAt(0), 0);
  const r = seeded(seed);
  const count = 8 + Math.floor(r() * 3); // 8–10 patients
  const diagPool = DIAGNOSES[wardType] ?? DIAGNOSES['AMU'];
  const risks: RiskLevel[] = ['high','high','medium','medium','medium','low','low','low','low','high'];

  return Array.from({ length: count }, (_, i) => {
    const pr   = seeded(seed + i * 97);
    const firstName = FIRST_NAMES[Math.floor(pr() * FIRST_NAMES.length)];
    const lastName  = LAST_NAMES [Math.floor(pr() * LAST_NAMES.length)];
    const sex: 'M'|'F' = pr() > 0.5 ? 'M' : 'F';
    const age  = 40 + Math.floor(pr() * 50);
    const los  = 1  + Math.floor(pr() * 13);
    const risk = risks[Math.floor(pr() * risks.length)];
    const nhs  = `${100+Math.floor(pr()*900)} ${100+Math.floor(pr()*900)} ${1000+Math.floor(pr()*9000)}`;
    const diag = diagPool[Math.floor(pr() * diagPool.length)];
    const cons = CONSULTANTS[Math.floor(pr() * CONSULTANTS.length)];
    const bed  = `${bedPrefix}-${String(i+1).padStart(2,'0')}`;
    const pathway = 1 + Math.floor(pr() * 3);

    // Pick risk factors based on risk level
    const rfCount = risk==='high' ? 3+Math.floor(pr()*2) : risk==='medium' ? 2 : 1;
    const rfStartIdx = Math.floor(pr() * (RISK_FACTOR_POOL.length - rfCount));
    const riskFactors = RISK_FACTOR_POOL.slice(rfStartIdx, rfStartIdx + rfCount);

    // Pick interventions
    const ivCount = risk==='high' ? 3 : risk==='medium' ? 2 : 1;
    const ivStartIdx = Math.floor(pr() * (INTERVENTION_POOL.length - ivCount));
    const interventions = INTERVENTION_POOL.slice(ivStartIdx, ivStartIdx + ivCount);

    // Build timeline
    const tlCount = Math.min(los, 3) + (risk==='high' ? 2 : 1);
    const timeline = TIMELINE_TEMPLATES.slice(0, tlCount).map(fn => fn(los));

    const drdOffset = los + 1 + Math.floor(pr() * 4);
    const drdDate = new Date(Date.now() + drdOffset * 86400000).toISOString().split('T')[0];
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const drdD = new Date(drdDate);
    const forecast = `${drdD.getDate()} ${months[drdD.getMonth()]}`;

    const snapshotRng = seeded(seed + i * 97 + 7919);
    return {
      id: seed * 100 + i,
      name: `${firstName} ${lastName}`,
      nhs, age, sex, bed, los,
      drd: pr() > 0.4 ? 'Set' : 'Predicted',
      drdDate, risk, pathway, forecast,
      forecastConf: `${55 + Math.floor(pr() * 40)}%`,
      diagnosis: diag,
      consultant: cons,
      riskFactors,
      interventions,
      timeline,
      dailySnapshots: buildDailySnapshots(los, risk, riskFactors, interventions, timeline, snapshotRng),
    };
  });
}
