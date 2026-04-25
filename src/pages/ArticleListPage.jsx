import ArticleList from '../components/ArticleList'
import articles from '../assets/article-content'

function ArticleListPage() {
  return (
    <div className="mx-auto max-w-6xl">

      <section className="mb-8 rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-[0_20px_80px_rgba(0,0,0,0.45)]">

        <p className="text-[11px] uppercase tracking-[0.28em] text-white/45">
          Collection
        </p>

        <h1 className="mt-3 text-5xl font-bold">
          My Creative Platforms
        </h1>

        <p className="mt-4 text-sm text-white/65 max-w-2xl leading-8">
          Music, visuals, film, social identity, and expression.
        </p>

      </section>

      <ArticleList articles={articles} />

    </div>
  )
}

export default ArticleListPage