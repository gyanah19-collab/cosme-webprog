function ArticleList({ articles }) {
  return (
    <section className="rounded-3xl border-2 border-zinc-200 bg-white p-6">
      <div className="mb-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
          Featured Articles
        </p>
        <h2 className="mt-2 text-2xl font-bold text-zinc-900">
          Article Card Grid
        </h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article, index) => (
          <article
            key={article.name}
            className="rounded-3xl border-2 border-zinc-200 bg-white p-4"
          >
            <img
              src={article.image}
              alt={article.title}
              className="mb-4 h-48 w-full rounded-2xl object-cover"
            />

            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Article #{String(index + 1).padStart(2, '0')}
            </p>

            <h3 className="mt-2 text-lg font-semibold text-zinc-900">
              {article.title}
            </h3>

            <p className="mt-3 text-sm leading-6 text-zinc-600">
              {article.description}
            </p>

            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center rounded-full border-2 border-zinc-900 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] transition hover:bg-zinc-900 hover:text-zinc-50"
            >
              Visit Link
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ArticleList