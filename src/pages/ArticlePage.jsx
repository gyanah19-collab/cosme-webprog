import Button from '../components/Button'
import letterboxdImage from '../assets/letterboxd.png'
import spotifyImage from '../assets/spotify.png'
import soundcloudImage from '../assets/soundcloud.png'

function ArticlePage() {
  const links = [
    {
      title: 'My SoundCloud',
      text: 'A place for music, audio ideas, and creative expression through sound, whether I’m listening, exploring, or sharing.',
      image: soundcloudImage,
      url: 'https://soundcloud.com/giagiagiaig',
      buttonText: 'Open SoundCloud',
    },
    {
      title: 'My Spotify',
      text: 'A collection of the music I love, the sounds that shape my mood, and the playlists that reflect my creativity and personality.',
      image: spotifyImage,
      url: 'https://open.spotify.com/user/216huz4h4ts47oc23kl3kcm5y?si=35444ab2efdd43e8',
      buttonText: 'Open Spotify',
    },
    {
      title: 'My Letterboxd',
      text: 'A space where I track the movies I watch, explore new films, and share the stories and visuals that inspire me.',
      image: letterboxdImage,
      url: 'https://boxd.it/8sls5',
      buttonText: 'Open Letterboxd',
    },
  ]

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6">
      <section className="rounded-3xl border-2 border-zinc-200 bg-white p-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
          My Links
        </p>

        <h1 className="mt-2 text-4xl font-bold text-zinc-900">
          Platforms that reflect my interests and personality.
        </h1>

        <p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-600">
          This page brings together some of the platforms that connect to who I am.
          From movies, to music, to audio-based creativity, these links reflect the things
          I enjoy and the spaces where I explore inspiration and self-expression.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {links.map((item) => (
          <article
            key={item.title}
            className="rounded-3xl border-2 border-zinc-200 bg-white p-5"
          >
            <img
              src={item.image}
              alt={item.title}
              className="mb-4 h-48 w-full rounded-2xl object-cover"
            />

            <h2 className="text-lg font-semibold text-zinc-900">{item.title}</h2>
            <p className="mt-2 text-sm leading-7 text-zinc-600">{item.text}</p>

            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center rounded-full border-2 border-zinc-900 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] transition hover:bg-zinc-900 hover:text-zinc-50"
            >
              {item.buttonText}
            </a>
          </article>
        ))}
      </section>
    </div>
  )
}

export default ArticlePage