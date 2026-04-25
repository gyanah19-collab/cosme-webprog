import Button from '../components/Button'
import profileImage from '../assets/me.jpg'

function HomePage() {
  return (
    <div className="mx-auto max-w-6xl">

      <section className="grid lg:grid-cols-2 gap-8 items-center rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-[0_20px_80px_rgba(0,0,0,0.45)]">

        <div>
          <p className="text-[11px] uppercase tracking-[0.28em] text-white/45">
            Welcome Back
          </p>

          <h1 className="mt-3 text-5xl font-bold leading-tight">
            My Creative Space
          </h1>

          <p className="mt-5 text-sm leading-8 text-white/65 max-w-xl">
            A personal digital world shaped by music, emotion,
            creativity, and self-expression through design.
          </p>

          <div className="mt-7 flex gap-3">
            <Button to="/home/articles" variant="primary">
              Explore Articles
            </Button>

            <Button to="/home/about">
              About Me
            </Button>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-4">
          <img
            src={profileImage}
            alt="profile"
            className="rounded-[1.5rem] h-[420px] w-full object-cover"
          />
        </div>

      </section>

    </div>
  )
}

export default HomePage
