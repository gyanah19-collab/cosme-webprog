import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function ArticleList({ articles }) {
  const [activeArticle, setActiveArticle] = useState(null)

  return (
    <>
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
            <motion.article
              key={article.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.08,
                duration: 0.45,
                ease: 'easeOut',
              }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.015 }}
              className="flex flex-col justify-between rounded-[1.75rem] border border-white/10 bg-white/5 p-4"
            >
              <div>
                <div className="overflow-hidden rounded-[1.5rem]">
                  <motion.img
                    src={article.image}
                    alt={article.title}
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.4 }}
                    className="mb-4 h-48 w-full object-cover"
                  />
                </div>

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
                <motion.button
                  onClick={() => setActiveArticle(article)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-black transition hover:bg-zinc-200"
                >
                  Open Article
                </motion.button>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {activeArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveArticle(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-6 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl rounded-[2rem] border border-white/10 bg-[#111] p-6 shadow-[0_25px_80px_rgba(0,0,0,0.6)]"
            >
              <img
                src={activeArticle.image}
                alt={activeArticle.title}
                className="h-72 w-full rounded-[1.5rem] object-cover"
              />

              <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/45">
                Featured Article
              </p>

              <h2 className="mt-2 text-3xl font-bold text-white">
                {activeArticle.title}
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/65">
                {activeArticle.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={activeArticle.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white px-5 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-black transition hover:bg-zinc-200"
                >
                  Visit Link
                </a>

                <button
                  onClick={() => setActiveArticle(null)}
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-white transition hover:bg-white/10"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ArticleList