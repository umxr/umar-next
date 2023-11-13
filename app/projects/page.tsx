import { Projects, Connect } from '../components';

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-4 tracking-tighter underline underline-offset-2">
        projects.
      </h1>
      <Projects />
      <Connect />
    </section>
  );
}
