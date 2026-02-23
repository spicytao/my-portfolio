// app/projects/ProjectShell.jsx
import Image from "next/image";

export default function ProjectShell({
  title,
  year,
  location,
  tag,
  hero,
  children
}) {
  return (
    <main className="min-h-screen bg-white text-black px-6 py-10 md:py-14">
      <article className="max-w-5xl mx-auto space-y-10">
        <header className="space-y-4">
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
            Project
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
            {title}
          </h1>

          <div className="flex flex-wrap gap-3 text-xs text-zinc-500">
            {year && (
              <span className="px-2 py-1 border border-zinc-200 rounded-full">
                {year}
              </span>
            )}
            {location && (
              <span className="px-2 py-1 border border-zinc-200 rounded-full">
                {location}
              </span>
            )}
            {tag && (
              <span className="px-2 py-1 border border-zinc-200 rounded-full">
                {tag}
              </span>
            )}
          </div>
        </header>

        {hero && (
          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl bg-black">
            <Image
              src={hero}
              alt={title}
              fill
              className="object-cover"
            />
          </div>
        )}

        <section className="space-y-4 text-sm md:text-base leading-relaxed text-zinc-700">
          {children}
        </section>
      </article>
    </main>
  );
}
