import { useParams } from 'react-router-dom'
import Button from '../components/Button'
import articles from '../assets/article-content'

function ArticlePage() {
  const { name } = useParams()
  const article = articles.find((a) => a.name === name)

  if (!article) {
    return (
      <div className="mx-auto max-w-4xl px-6 py-10">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
          <h1 className="mb-4 text-3xl font-bold text-white">
            Article Not Found
          </h1>
          <Button to="/articles">Back to Articles</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-4xl px-6 py-10">
      <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
        <img
          src={article.image}
          alt={article.title}
          className="mb-6 h-72 w-full rounded-[1.5rem] object-cover"
        />

        <h1 className="mb-4 text-3xl font-bold text-white">
          {article.title}
        </h1>

        <p className="mb-6 text-base leading-8 text-white/65">
          {article.description}
        </p>

        <div className="flex gap-3">
          <Button to="/articles">Back to Articles</Button>
          {article.url.startsWith('http') ? (
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-black transition hover:bg-zinc-200"
            >
              Visit Link
            </a>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default ArticlePage