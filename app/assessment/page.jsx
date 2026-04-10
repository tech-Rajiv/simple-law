import { allAssesments } from '../utils/allAssesments'
import AssessmentCategoryLists from '@/components/AssessmentCategoryLists'

export const metadata = {
  title: 'Assessments | SimpleLaw',
  description:
    'Take short knowledge checks across safety, emotional intelligence, women’s issues, social awareness, and fitness — see your score at the end.',
}

export default function AssessmentPage() {
  const categoryCount = Object.keys(allAssesments || {}).length
  const testCount = Object.values(allAssesments || {}).reduce(
    (n, arr) => n + (Array.isArray(arr) ? arr.length : 0),
    0
  )

  return (
    <div className="w-full pb-12 pt-2 md:pt-4">
      <header className="relative mb-10 overflow-hidden rounded-3xl border border-[color:var(--border-light)] bg-[color:var(--bg-card)] shadow-[0_8px_30px_rgba(0,0,0,0.06)] md:mb-12">
        <div
          className="pointer-events-none absolute -right-16 top-0 h-48 w-48 rounded-full bg-[color:var(--color-primary)]/[0.08] blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-20 left-10 h-40 w-40 rounded-full bg-[color:var(--color-secondary)]/25 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative px-6 py-10 sm:px-8 sm:py-12 md:px-10 md:py-14">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-primary)]">
            Knowledge checks
          </p>
          <h1 className="mt-3 text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-tight tracking-tight text-[color:var(--text-primary)]">
            Assessments
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[color:var(--text-secondary)] sm:text-lg">
            Pick a topic below, answer the questions at your pace, and get your score when you finish. Each test is short — use them to see what you already know and what to study next.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="inline-flex items-center rounded-full border border-[color:var(--border-light)] bg-[color:var(--bg-page)] px-4 py-2 text-sm font-medium text-[color:var(--text-primary)]">
              <span className="font-semibold text-[color:var(--color-primary)]">{testCount}</span>
              <span className="ml-1.5 text-[color:var(--text-secondary)]">tests</span>
            </span>
            <span className="inline-flex items-center rounded-full border border-[color:var(--border-light)] bg-[color:var(--bg-page)] px-4 py-2 text-sm font-medium text-[color:var(--text-primary)]">
              <span className="font-semibold text-[color:var(--color-primary)]">{categoryCount}</span>
              <span className="ml-1.5 text-[color:var(--text-secondary)]">categories</span>
            </span>
          </div>
        </div>
      </header>

      <AssessmentCategoryLists allAssesmentsData={allAssesments} />
    </div>
  )
}
