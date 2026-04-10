import Button from '../components/Button'
import ArticleList from '../components/ArticleList'
import articles from '../assets/article-content'

function ArticleListPage() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6">
      <section className="rounded-3xl border-2 border-zinc-200 bg-white p-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
          My Creative World
        </p>

        <h1 className="mt-2 max-w-3xl text-4xl font-bold text-zinc-900">
          The platforms and passions that shape who I am
        </h1>

        <p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-600">
          From music and movies to creativity and self-expression, these spaces reflect my interests, inspirations, and the way I connect with the world.
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