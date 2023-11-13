import { Projects, Connect } from './components';

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-4 tracking-tighter">
        hey, I&apos;m umar 👋
      </h1>
      <p className="mb-8">
        I&apos;m a software engineer and community founder. I currently work as
        an engineer at NearForm (formerly Formidable), Where i help our clients
        build modern web applications and websites.
      </p>
      <h2 className="font-semibold text-2xl mb-4 tracking-tighter underline underline-offset-2">
        projects.
      </h2>
      <Projects />
      <h2 className="font-semibold text-2xl mb-4 tracking-tighter underline underline-offset-2">
        let&apos;s connect.
      </h2>
      <Connect />
    </section>
  );
}
