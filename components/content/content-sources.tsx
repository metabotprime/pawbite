import type { ContentSource } from '@/data/content-schema';

export function ContentSources({ sources }: { sources: ContentSource[] }) {
  if (!sources.length) return null;
  return (
    <section className="mt-12 rounded-2xl bg-offwhite p-6">
      <h2 className="fraunces-soft mb-4 text-xl font-bold text-forest">Sources.</h2>
      <ol className="space-y-3 text-sm leading-relaxed text-charcoal">
        {sources.map((s, i) => (
          <li key={i} className="font-mono">
            <span className="text-forest/60">[{i + 1}]</span>{' '}
            <span className="text-forest">{s.author}</span>, {s.year}.{' '}
            {s.url ? (
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="italic underline decoration-forest/30 underline-offset-2 hover:decoration-forest"
              >
                {s.title}
              </a>
            ) : (
              <em className="italic">{s.title}</em>
            )}
            {s.journal && (
              <>
                . <span className="text-forest/70">{s.journal}</span>
              </>
            )}
            .
          </li>
        ))}
      </ol>
    </section>
  );
}
