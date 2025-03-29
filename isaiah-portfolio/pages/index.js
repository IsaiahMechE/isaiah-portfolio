import { Mail, Linkedin, FileText, Github } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black p-6 md:p-12">
      <header className="max-w-4xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Isaiah Smith</h1>
        <p className="text-xl md:text-2xl text-gray-700">
          Mechanical Engineering Student | Data-Driven Innovator | Future Systems Thinker
        </p>
        <div className="flex flex-wrap gap-4 mt-4">
          <a href="mailto:your.email@example.com" className="flex items-center gap-2 underline"><Mail /> Email</a>
          <a href="https://linkedin.com/in/isaiah-smith" target="_blank" className="flex items-center gap-2 underline"><Linkedin /> LinkedIn</a>
          <a href="https://github.com/Isaiah-meche" target="_blank" className="flex items-center gap-2 underline"><Github /> GitHub</a>
          <a href="/Isaiah_Resume.pdf" target="_blank" className="flex items-center gap-2 underline"><FileText /> Resume</a>
        </div>
      </header>
      <main className="max-w-4xl mx-auto">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="text-gray-800 leading-relaxed">
            I'm a Mechanical Engineering student with a multidisciplinary background in data analysis, lab work,
            and policy-oriented research. My internships at Lawrence Livermore National Lab, the U.S. Attorney’s Office,
            and the U.S. Fish and Wildlife Service have shaped me into a solution-driven thinker who values impact,
            accuracy, and cross-functional collaboration.
          </p>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <div className="mb-4">
            <h3 className="text-xl font-bold">AI Web Summarization Tool</h3>
            <p className="text-gray-700">
              A Python + HuggingFace tool that scrapes and summarizes web pages for easier reading.
              Built with Transformers, BeautifulSoup, and designed for real-world productivity.
            </p>
            <p className="text-sm mt-2 text-gray-500">Tools: Python, Transformers, BeautifulSoup</p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-bold">Water Drip Timer</h3>
            <p className="text-gray-700">
              Designed a low-tech timer that uses fluid flow dynamics to measure time intervals
              with ±1 second accuracy. Ideal for concept testing in basic mechanical systems.
            </p>
            <p className="text-sm mt-2 text-gray-500">Tools: CAD, Fluid Mechanics, Prototyping</p>
          </div>
        </section>
      </main>
    </div>
  );
}
