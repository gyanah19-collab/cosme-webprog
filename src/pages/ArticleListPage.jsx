import Button from '../components/Button'
import ArticleList from '../components/ArticleList'
import articles from '../assets/article-content'

function ArticleListPage() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6">
      <section className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/45">
          My Creative World
        </p>

        <h1 className="mt-2 max-w-3xl text-4xl font-bold text-white">
          The platforms that shape how I think and create
        </h1>

        <p className="mt-3 max-w-3xl text-sm leading-7 text-white/65">
          A clean wireframe section for article thumbnails, titles, short
          descriptions, and one clear action per card.
        </p>

        <div className="mt-5">
          <Button to="/">Back Home</Button>
        </div>
      </section>

      <ArticleList articles={articles} />
    </div>
  )
}

export default ArticleListPage