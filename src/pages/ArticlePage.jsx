import { useParams } from 'react-router-dom'
import articles from '../assets/article-content'

function ArticlePage() {
  const { name } = useParams()
  const article = articles.find((a) => a.name === name)

  if (!article) {
    return <h1>Article Not Found</h1>
  }

  return (
    <div className="mx-auto max-w-4xl px-6 py-10">
      <h1 className="mb-4 text-3xl font-bold text-zinc-900">
        {article.title}
      </h1>

      {article.content.map((paragraph, index) => (
        <p key={index} className="mb-3 text-sm leading-7 text-zinc-600">
          {paragraph}
        </p>
      ))}
    </div>
  )
}

export default ArticlePage