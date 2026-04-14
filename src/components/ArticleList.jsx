function ArticleList({ articles }) {
  return (
    <section className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
      <div className="mb-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/45">
          Featured Articles
        </p>
        <h2 className="mt-2 text-2xl font-bold text-white">
          Article Card Grid
        </h2>
      </div>

      <div className="grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article, index) => (
          <article
            key={article.name}
            className="flex flex-col justify-between rounded-[1.75rem] border border-white/10 bg-white/5 p-4"
          >
            <div>
              <img
                src={article.image}
                alt={article.title}
                className="mb-4 h-48 w-full rounded-[1.5rem] object-cover"
              />

              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/45">
                Article #{String(index + 1).padStart(2, '0')}
              </p>

              <h3 className="mt-2 text-lg font-semibold text-white">
                {article.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/65">
                {article.description}
              </p>
            </div>

            <div className="mt-4">
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-black transition hover:bg-zinc-200"
              >
                Visit Link
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ArticleList