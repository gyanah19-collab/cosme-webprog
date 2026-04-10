import Button from '../components/Button'
import profileImage from '../assets/me.jpg'
import card1Image from '../assets/manila.jpg'
import card2Image from '../assets/NU.jpg'
import card3Image from '../assets/qc.jpg'

function HomePage() {
  const overviewBlocks = [
    { label: '01', title: 'Creative' },
    { label: '02', title: 'Music' },
    { label: '03', title: 'Tech' },
    { label: '04', title: 'Movies' },
  ]

  const featureCards = [
    {
      title: 'My Creative Side',
      text: 'I enjoy creating music, art, and digital projects that allow me to express myself and share my ideas with others. I find joy in turning creativity into something meaningful, whether it’s through design, coding, or songs that I’ve written.',
      image: card1Image,
    },
    {
      title: 'My Interests',
      text: 'I really love performing with my band, making music watching movies, playing video games, designing and exploring new technologies. These interests often inspire my creativity and influence how I approach projects and design.',
      image: card2Image,
    },
    {
      title: 'About Me',
      text: 'I am someone who likes self-expression, creative projects, and discovering new ways to bring ideas to life.',
      image: card3Image,
    },
  ]

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6">
      <section className="grid gap-6 rounded-3xl border-2 border-zinc-200 bg-white p-6 lg:grid-cols-[1.1fr,0.9fr]">
        <div>
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Gilianne Cosme
          </p>

          <h1 className="text-4xl font-bold text-zinc-900">
            My Creative Space
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-600">
            I’m someone who enjoys combining creativity with technology, especially when I can use it to build projects that feel personal and expressive. I’m very inclined toward music, and it often influences how I think, create, and design.
          </p>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-600">
            I’m interested in creativity, technology, self-expression, and building projects
            that feel both meaningful and visually engaging.
          </p>

          <div className="mt-5 flex gap-3">
            <Button variant="primary" to="/articles">View Articles</Button>
            <Button to="/about">More Info</Button>
          </div>
        </div>

        <div className="rounded-3xl border-2 border-zinc-200 bg-zinc-50 p-4">
          <img
            src={profileImage}
            alt="Profile"
            className="h-full min-h-[260px] w-full rounded-2xl object-cover"
          />
        </div>
      </section>

      <section className="rounded-3xl border-2 border-zinc-200 bg-white p-6">
        <h2 className="mb-4 text-[13px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
          Quick Overview Blocks
        </h2>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {overviewBlocks.map((block) => (
            <article
              key={block.title}
              className="rounded-3xl border-2 border-zinc-200 p-4"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
                {block.label}
              </p>
              <h3 className="mt-2 text-2xl font-bold text-zinc-900">
                {block.title}
              </h3>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border-2 border-zinc-200 bg-white p-6">
        <h2 className="mb-4 text-[13px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
          My Interests and Personality
        </h2>

        <div className="grid gap-4 md:grid-cols-3">
          {featureCards.map((card) => (
            <article
              key={card.title}
              className="rounded-3xl border-2 border-zinc-200 p-4"
            >
              <img
                src={card.image}
                alt={card.title}
                className="mb-4 h-48 w-full rounded-2xl object-cover"
              />

              <h3 className="text-lg font-semibold text-zinc-900">{card.title}</h3>
              <p className="mt-2 text-sm leading-7 text-zinc-600">{card.text}</p>
              <Button className="mt-4" variant="primary">View More</Button>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default HomePage