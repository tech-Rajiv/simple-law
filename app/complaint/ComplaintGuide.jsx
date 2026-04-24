'use client'

import Image from 'next/image'
import { useId, useState } from 'react'

const EMERGENCY_CONTACTS = [
  {
    title: 'Emergency response',
    dial: '112',
    detail: 'ERSS — police, fire, and medical emergency (pan-India).',
  },
  {
    title: 'Police',
    dial: '100',
    detail: 'Local police control room for immediate danger or crime.',
  },
  {
    title: 'Cyber fraud & online financial scams',
    dial: '1930',
    detail: 'National cybercrime helpline — call as soon as you suspect fraud; also report on the National Cyber Crime Reporting Portal.',
  },
  {
    title: 'Women — national helpline',
    dial: '1091',
    detail: 'Women in distress; operators can guide you to police / legal support.',
  },
  {
    title: 'NCW (National Commission for Women)',
    dial: '7827170170',
    detail: 'Complaints related to women’s rights; you can also use the NCW online complaint form.',
  },
  {
    title: 'Childline',
    dial: '1098',
    detail: 'For children in distress or abuse situations.',
  },
]

const LINKS = {
  cyberPortal: 'https://www.cybercrime.gov.in/',
  ncw: 'https://ncw.nic.in/',
}

/**
 * image: string path under /public, or null for “image coming soon”
 */
const CATEGORIES = [
  {
    id: 'employer',
    label: 'Employer / workplace',
    intro:
      'Wrongful termination, unpaid wages, harassment at work, or unsafe conditions. Start with internal channels where they exist; escalate to labour authorities or police if laws are broken.',
    steps: [
      {
        title: 'Stay safe and note facts calmly',
        body: 'Write down dates, names, emails, and witnesses. Keep copies of your ID card, offer letter, payslips, and appraisals off the employer’s systems if you still have access.',
        image: '/complaint/issues/workplace-harasement.jpg',
        caption: 'Workplace-related concerns: document what happened and who was involved.',
      },
      {
        title: 'Use internal grievance / HR (if safe)',
        body: 'Many companies have a grievance process. If it is sexual harassment at the workplace, the POSH Act requires an Internal Committee (IC). You can approach the IC in writing; they must follow timelines under law.',
        image: '/complaint/hr.jpg',
        caption: 'Start with HR / grievance channels when it’s safe — keep written records and acknowledgements.',
      },
      {
        title: 'Labour office / industrial relations',
        body: 'For wages, wrongful termination (where labour law applies), or contractual disputes, the local labour office or the appropriate labour court / tribunal may apply. A labour lawyer or legal aid clinic can help you pick the right forum.',
        image: '/complaint/district-labour-office.webp',
        caption: 'For wages and labour disputes, your local labour office or legal aid can guide the right forum.',
      },
      {
        title: 'Police / criminal complaints',
        body: 'If there is assault, threats, fraud, or serious criminal conduct, you may file an FIR at the police station with jurisdiction. For immediate danger, call 112 or 100.',
        image: '/complaint/police-station.webp',
        caption: 'For serious criminal conduct, visit the police station with a written summary and supporting proof.',
      },
    ],
  },
  {
    id: 'women-harassment',
    label: 'Harassment (women)',
    intro:
      'Sexual harassment at work, in public, or online is illegal. You can seek help from police, women’s commissions, and workplace committees. You are not required to tolerate it.',
    steps: [
      {
        title: 'Prioritise your safety',
        body: 'If you are in danger now, call 112 or 100. For counselling and referral, 1091 and NCW (7827170170) can guide next steps.',
        image: '/complaint/police.jpg',
        caption: 'If you feel unsafe right now, call 112 / 100 and move to a safer place.',
      },
      {
        title: 'At the workplace: Internal Committee (POSH)',
        body: 'If harassment is connected to work, file a written complaint to your employer’s Internal Committee. The IC must inquire as per the POSH Act. If there is no IC, the law provides for a Local Committee in your district.',
        image: '/complaint/posh.jpg',
        caption: 'For workplace sexual harassment, the POSH Act provides an Internal Committee route with timelines.',
      },
      {
        title: 'Police complaint (FIR)',
        body: 'For offences under the IPC and related laws, you can register an FIR. You may take a trusted person with you. If registration is delayed, note the refusal and seek legal help or approach senior police / magistrate as advised.',
        image: '/complaint/fir.webp',
        caption: 'For criminal offences, you can file an FIR. Carry identity proof and a clear written summary.',
      },
      {
        title: 'National / state women’s commissions',
        body: 'NCW and state commissions accept complaints and can forward them for action. See ncw.nic.in for online complaint options.',
        image: '/complaint/National-Commission-of-Women-1024x576.jpg',
        caption: 'NCW and state commissions can accept complaints and coordinate referrals for action.',
      },
    ],
  },
  {
    id: 'cyber-fraud',
    label: 'Cyber fraud',
    intro:
      'Banking fraud, UPI scams, phishing, and investment scams should be reported quickly. Call 1930 and use the National Cyber Crime Reporting Portal to improve the chance of tracing funds.',
    steps: [
      {
        title: 'Act in the first few hours',
        body: 'Call 1930 immediately with transaction IDs, bank names, amounts, and timestamps. Contact your bank’s fraud / customer care and ask for an account freeze or “lien” where possible.',
        image: '/complaint/issues/cyber-fraud.jpg',
        caption: 'Report financial cybercrime on 1930 and preserve every transaction detail.',
      },
      {
        title: 'Gather proof',
        body: 'Screenshots of chats, SMS, emails, app screens, and full bank statements for the period. Note phone numbers, UPI IDs, and wallet handles used by the scammer.',
        image: '/complaint/issues/take-screenshot.jpg',
        caption: 'Save screenshots before accounts or messages disappear.',
      },
      {
        title: 'Transaction trail',
        body: 'Export or screenshot transaction references (UTR / RRNs), beneficiary names, and any “payment successful” screens. These help police and banks trace money movement.',
        image: '/complaint/issues/transaction-details.jpg',
        caption: 'Reference numbers are critical for investigators.',
      },
      {
        title: 'Official reporting',
        body: 'File a complaint on cybercrime.gov.in under the relevant category and keep the acknowledgement. Follow up with the police station if they register an FIR or complaint as per local process.',
        image: '/complaint/issues/cyber-fraud2.jpg',
        caption: 'The national portal structures your report for cyber police.',
      },
      {
        title: 'Do not delete evidence',
        body: 'Keep originals on your device or cloud backup. Avoid “cleaning up” chat history until authorities or your bank advise.',
        image: '/complaint/issues/cyber-fraud3.jpg',
        caption: 'More visuals for cyber awareness will be added here over time.',
      },
    ],
  },
  {
    id: 'abusive-messages',
    label: 'Abusive / threatening messages',
    intro:
      'Threats, hate, stalking, or repeated abusive messages may be criminal. Preserve evidence and report to cyber cell or police with jurisdiction.',
    steps: [
      {
        title: 'Do not engage or retaliate',
        body: 'Block only after you have preserved evidence (blocking can hide history on some apps — screenshot first). Do not pay money or share more personal data.',
        image: '/complaint/take-scrrenshot.png',
        caption: 'Capture full screens including time, date, and sender ID.',
      },
      {
        title: 'Preserve metadata where possible',
        body: 'On email, avoid forwarding in a way that strips headers; your provider may help with logs if police request. For SMS, screenshot and note the sender number.',
        image: '/complaint/preserve-messages.png',
        caption: 'Preserve messages and identifiers (links, usernames, numbers) before blocking or deleting.',
      },
      {
        title: 'Report to platform',
        body: 'Use in-app reporting for harassment, impersonation, or threats. Save the report acknowledgement or ticket ID.',
        image: '/complaint/report-to-platform.png',
        caption: 'Report inside the app/platform and keep a screenshot or acknowledgement for follow-up.',
      },
      {
        title: 'Police / cyber cell',
        body: 'Visit the police station or cyber cell with identity proof and a written summary. For women-targeted abuse, you can also seek guidance from 1091 or NCW.',
        image: '/complaint/police-station.webp',
        caption: 'For repeated threats or stalking, report to police / cyber cell with your evidence kit.',
      },
    ],
  },
  {
    id: 'deepfake-blackmail',
    label: 'Fake video / morph / blackmail',
    intro:
      'Deepfakes, morphed images, and “sextortion” are serious crimes. Do not pay; preserve proof and report urgently. Police cyber units and 1930 (if money is demanded) apply.',
    steps: [
      {
        title: 'Do not pay or share more media',
        body: 'Paying rarely stops blackmail and can fund further crime. Stop sending photos or videos. Tell a trusted adult or friend if you can — isolation helps the offender.',
        image: '/complaint/dont-share.png',
        caption: 'Do not pay or share more media. Pause, get support, and move to documentation + reporting.',
      },
      {
        title: 'Secure your accounts',
        body: 'Change passwords, enable two-factor authentication, and check for unknown devices logged into email and social accounts.',
        image: '/complaint/secure-your-account.jpg',
        caption: 'Secure accounts first: change passwords and enable 2FA to stop further access.',
      },
      {
        title: 'Evidence kit',
        body: 'Screenshot demands, profile links, payment requests, and any fake video URLs (do not download illegal material — note links and show police). If money was sent, call 1930 and your bank.',
        image: '/complaint/issues/take-screenshot.jpg',
        caption: 'Document threats and handles; avoid deleting until police advise.',
      },
      {
        title: 'Police & cybercrime portal',
        body: 'File with the cyber cell and on cybercrime.gov.in under the relevant category (e.g. morphing / sexual abuse content). Women may additionally contact NCW for coordination support.',
        image: '/complaint/police-station.webp',
        caption: 'Report to cyber cell / police and file on the national portal. Keep acknowledgement numbers.',
      },
    ],
  },
]

function ImageSlot({ src, alt, caption }) {
  const widthShell = 'mt-4 w-full md:max-w-[50%]'

  if (src) {
    return (
      <figure
        className={`${widthShell} overflow-hidden rounded-xl border border-[color:var(--border-light)] bg-[color:var(--bg-card)] shadow-[var(--shadow-soft)]`}
      >
        <div className="relative aspect-[16/10] w-full bg-[color:var(--hover-bg)]">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1500px) 50vw, 650px"
          />
        </div>
        {caption ? (
          <figcaption className="border-t border-[color:var(--border-light)] px-4 py-3 text-sm text-[color:var(--text-secondary)]">
            {caption}
          </figcaption>
        ) : null}
      </figure>
    )
  }

  return (
    <div
      className={`${widthShell} flex min-h-[220px] flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-[color:var(--border-light)] bg-[color:var(--bg-topic-serious)] px-6 py-10 text-center`}
      role="img"
      aria-label="Image placeholder"
    >
      <span className="text-sm font-medium text-[color:var(--text-secondary)]">Image coming soon</span>
      <span className="max-w-sm text-xs text-[color:var(--text-muted)]">
        We’ll add a visual guide here when the asset is ready. The steps above still apply.
      </span>
    </div>
  )
}

export default function ComplaintGuide() {
  const tabId = useId()
  const [activeId, setActiveId] = useState(CATEGORIES[0].id)
  const active = CATEGORIES.find((c) => c.id === activeId) ?? CATEGORIES[0]

  return (
    <div className="space-y-10 pb-10">
      <header className="space-y-4">
        <div className="relative overflow-hidden rounded-2xl border border-[color:var(--border-light)] bg-[color:var(--bg-card)] shadow-[var(--shadow-soft)]">
          <div className="relative aspect-[5/4] min-h-[200px] w-full bg-[color:var(--hover-bg)] sm:aspect-[16/9] sm:min-h-0 md:aspect-[3/1] md:max-h-[280px]">
            <Image
              src="/complaint/complaint-image1.jpg"
              alt="Complaint guide"
              fill
              className="object-cover opacity-90"
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <h1 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
                Complaint guide (India)
              </h1>
              <p className="mt-2 max-w-2xl text-sm text-white/90 md:text-base">
                Step-by-step, plain-language paths to document, report, and seek help. Not legal advice — verify deadlines and forums with a qualified lawyer or legal aid where needed.
              </p>
            </div>
          </div>
        </div>
      </header>

      <section
        aria-labelledby="emergency-heading"
        className="rounded-2xl border border-[color:var(--border-light)] bg-[color:var(--bg-card)] p-6 shadow-[var(--shadow-soft)] md:p-8"
      >
        <h2 id="emergency-heading" className="text-lg font-semibold text-[color:var(--text-primary)]">
          Emergency &amp; helpline numbers (India)
        </h2>
        <p className="mt-2 text-sm text-[color:var(--text-secondary)]">
          Save these on your phone. For life-threatening situations, call{' '}
          <strong className="text-[color:var(--text-primary)]">112</strong> or{' '}
          <strong className="text-[color:var(--text-primary)]">100</strong> first.
        </p>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {EMERGENCY_CONTACTS.map((row) => (
            <li
              key={row.dial}
              className="rounded-xl border border-[color:var(--border-light)] bg-[color:var(--bg-page)] p-4"
            >
              <p className="text-sm font-medium text-[color:var(--text-primary)]">{row.title}</p>
              <p className="mt-2 font-mono text-xl font-semibold tracking-wide text-[color:var(--color-primary)]">
                {row.dial}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-[color:var(--text-secondary)]">{row.detail}</p>
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap gap-3 text-sm">
          <a
            href={LINKS.cyberPortal}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-lg border border-[color:var(--border-light)] bg-[color:var(--bg-card)] px-4 py-2 font-medium text-[color:var(--color-primary)] hover:bg-[color:var(--hover-bg)]"
          >
            National Cyber Crime Reporting Portal
          </a>
          <a
            href={LINKS.ncw}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-lg border border-[color:var(--border-light)] bg-[color:var(--bg-card)] px-4 py-2 font-medium text-[color:var(--color-primary)] hover:bg-[color:var(--hover-bg)]"
          >
            NCW website
          </a>
        </div>
      </section>

      <section aria-labelledby="categories-heading" className="space-y-6">
        <h2 id="categories-heading" className="text-lg font-semibold text-[color:var(--text-primary)]">
          Choose a topic
        </h2>

        {/* Full-width scroll on small screens; wrap on xl when everything fits */}
        <div
          className={[
            '-mx-1 min-w-0 pb-1',
            'overflow-x-auto overflow-y-hidden',
            '[-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
            'lg:mx-0 lg:overflow-x-visible',
          ].join(' ')}
        >
          <div
            role="tablist"
            aria-label="Complaint categories"
            className="flex w-max max-w-none flex-nowrap gap-2 px-1 lg:w-full lg:max-w-full lg:flex-wrap"
          >
            {CATEGORIES.map((cat) => {
              const selected = cat.id === activeId
              return (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  id={`${tabId}-${cat.id}-tab`}
                  aria-selected={selected}
                  aria-controls={`${tabId}-${cat.id}-panel`}
                  tabIndex={selected ? 0 : -1}
                  onClick={(e) => {
                    setActiveId(cat.id)
                    e.currentTarget.scrollIntoView({
                      behavior: 'smooth',
                      inline: 'center',
                      block: 'nearest',
                    })
                  }}
                  className={[
                    'shrink-0 whitespace-nowrap rounded-full border px-4 py-2.5 text-left text-sm font-medium transition-colors',
                    selected
                      ? 'border-[color:var(--color-primary)] bg-[color:var(--active-bg)] text-[color:var(--color-primary)]'
                      : 'border-[color:var(--border-light)] bg-[color:var(--bg-card)] text-[color:var(--text-primary)] hover:bg-[color:var(--hover-bg)]',
                  ].join(' ')}
                >
                  {cat.label}
                </button>
              )
            })}
          </div>
        </div>

        <div
          role="tabpanel"
          id={`${tabId}-${active.id}-panel`}
          aria-labelledby={`${tabId}-${active.id}-tab`}
          className="rounded-2xl border border-[color:var(--border-light)] bg-[color:var(--bg-card)] p-6 shadow-[var(--shadow-soft)] md:p-8"
        >
          <h3 className="text-xl font-semibold text-[color:var(--text-primary)]">{active.label}</h3>
          <p className="mt-3 text-sm leading-relaxed text-[color:var(--text-secondary)]">{active.intro}</p>

          <ol className="mt-8 space-y-10">
            {active.steps.map((step, index) => (
              <li key={step.title} className="border-t border-[color:var(--border-light)] pt-8 first:border-t-0 first:pt-0">
                <div className="flex flex-wrap items-baseline gap-2">
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[color:var(--color-primary)] text-sm font-semibold text-[color:var(--text-inverse)]"
                    aria-hidden="true"
                  >
                    {index + 1}
                  </span>
                  <h4 className="text-base font-semibold text-[color:var(--text-primary)]">{step.title}</h4>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[color:var(--text-secondary)] md:pl-10">{step.body}</p>
                <div className="md:pl-10">
                  <ImageSlot
                    src={step.image}
                    alt={step.image ? step.title : ''}
                    caption={step.caption}
                  />
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <p className="text-center text-xs text-[color:var(--text-muted)]">
        Information is for general awareness in India. Laws and procedures change; confirm with official sources, police, or a lawyer for your situation.
      </p>
    </div>
  )
}
