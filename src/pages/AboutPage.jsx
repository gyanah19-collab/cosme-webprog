import Button from '../components/Button'
import designImage from '../assets/creative.jpg'
import contentImage from '../assets/content.jpg'
import processImage from '../assets/process.jpg'

function AboutPage() {
  const aboutCards = [
    {
      title: 'Design',
      text: 'My approach to design is shaped by creativity, self-expression, and emotion. I like making projects that feel personal, visually engaging, and connected to the things I enjoy, especially music, art, and digital creativity.',
      image: designImage,
    },
    {
      title: 'Content',
      text: 'The content I create is inspired by my interests in music, movies, video games, and technology. I enjoy sharing ideas that reflect who I am, while also exploring creative ways to communicate through visuals, writing, and digital projects.',
      image: contentImage,
    },
    {
      title: 'Process',
      text: 'My creative process usually begins with inspiration from the things I love, then turns into planning, experimenting, and building. I enjoy combining imagination with technology to turn simple ideas into something meaningful and expressive.',
      image: processImage,
    },
  ]

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6">
      <section className="rounded-3xl border-2 border-zinc-200 bg-white p-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
          About Me
        </p>

        <h1 className="mt-2 text-4xl font-bold text-zinc-900">
          Creativity, self-expression, and personal storytelling.
        </h1>

        <p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-600">
          When I was younger, I dreamed of becoming an artist, someone who could create things that inspire others. Whether it was through drawing, designing, or music, I was always drawn to anything that allowed me to express ideas and emotions in a creative way.
          I’ve always loved my creativity because it feels like a part of who I am, something I naturally turn to when I want to communicate or make something meaningful.
        </p>

        <p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-600">
          As I grew older, that passion didn’t fade—it evolved. I became more interested in combining creativity with technology, using it to build projects that are not only functional but also visually engaging and expressive. 
          Music, especially, continues to influence how I think and create, shaping my style and the way I approach my work. In everything I do, I aim to create something that resonates with people, even in the smallest way.
        </p>

        <div className="mt-5">
          <Button variant="primary" to="/articles">Open Articles</Button>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {aboutCards.map((card) => (
          <article
            key={card.title}
            className="rounded-3xl border-2 border-zinc-200 bg-white p-5"
          >
            <img
              src={card.image}
              alt={card.title}
              className="mb-4 h-48 w-full rounded-2xl object-cover"
            />

            <h2 className="text-lg font-semibold text-zinc-900">{card.title}</h2>
            <p className="mt-2 text-sm leading-7 text-zinc-600">{card.text}</p>
          </article>
        ))}
      </section>
    </div>
  )
}

export default AboutPage