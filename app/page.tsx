
"use client";

import { useState } from "react";
import {
  Mail,
  PawPrint,
  BookText,
  Send,
  Code2,
  AppWindow,
  History,
  MonitorSmartphone,
  ExternalLink,
} from "lucide-react";
import Image from "next/image";
import { GitHubProfileCard } from "./components/GithubProfileCard";

const projects = [
  {
    name: "Abea Project",
    repository: "gabyg0832/abea...",
    website: "abea-vite-project.vercel.app",
    repository_url: "https://github.com/gaby0832/abea-vite-project",
    image: "/abea.png",
    icon: "/abeaicon.png",
    description: (
      <>
        Um site de ONG fictícia que ajuda animais de rua. O projeto é
        construído com <strong>React + Vite</strong> e possui um site público
        e um painel administrativo para gerenciar adoções, eventos e doações.
      </>
    ),
    color: "#0D0B00",
    colorSec: "#352D00",
  },
  {
    name: "Vanne Filmes",
    repository: "gabyg0832/vanne-mov...",
    website: "https://vannefilmes.online/",
    repository_url: "https://github.com/gaby0832/vanne-movies-website",
    image: "/vannefilmes.png",
    icon: "/vannefilmesico.png",
    description: (
      <>
        Este projeto é um site desenvolvido com <strong>Next.js</strong> que
        funciona como um portal de filmes e séries, com a proposta futura de
        atuar como um gateway de pagamento para doações, similar ao Livepix.
      </>
    ),
    color: "#0D0000",
    colorSec: "#350000",
  },
  {
    name: "Gab Dot Dev",
    repository: "gabyg0832/gab-dot-dev",
    website: "https://github.com/gaby0832",
    repository_url: "https://github.com/gaby0832",
    image: "/gabportifolio.png",
    icon: "/gabportifolioicon.png",
    description: (
      <>
        Um <strong>portfólio interativo</strong> altamente personalizável,
        projetado para desenvolvedores, designers e criativos que desejam
        exibir seus trabalhos de forma dinâmica e única.
      </>
    ),
    color: "#3C3000",
    colorSec: "#705900"
  },
];

function GitHubLogo({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.29-1.24-1.63-1.24-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 .1.75 2.06 3.62 1.57.1-.72.39-1.21.71-1.49-2.47-.28-5.07-1.24-5.07-5.5 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.54.23 2.68.11 2.96.72.78 1.15 1.77 1.15 2.99 0 4.27-2.6 5.22-5.08 5.5.4.35.76 1.02.76 2.06v3.04c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
    </svg>
  );
}

function LinkedInLogo({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.73H4.96V9.17h2.97v9.56ZM6.45 7.86a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44Zm12.28 10.87h-2.97v-4.65c0-1.11-.02-2.54-1.55-2.54-1.55 0-1.79 1.21-1.79 2.46v4.73H9.45V9.17h2.85v1.31h.04c.4-.75 1.37-1.55 2.81-1.55 3 0 3.58 1.97 3.58 4.53v5.27Z" />
    </svg>
  );
}

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [newsletter, setNewsletter] = useState("");
  const [sending, setSending] = useState(false);





  function handleContact(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);

    const subject = encodeURIComponent(`Contato pelo portfólio - ${name}`);
    const body = encodeURIComponent(
      `Nome: ${name}\nE-mail: ${email}\n\nMensagem:\n${message}`
    );

    window.location.href =
      `mailto:devgabygoodman@gmail.com?subject=${subject}&body=${body}`;

    setSending(false);
  }

  function handleNewsletter(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const subject = encodeURIComponent("Contato pelo portfólio");
    const body = encodeURIComponent(
      `Olá! Meu e-mail é ${newsletter}. Gostaria de entrar em contato.`
    );

    window.location.href =
      `mailto:devgabygoodman@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <main className="min-h-screen bg-[#fff9e2] text-[#11100b]">
      {/* Cabeçalho */}
      <header className="mx-auto flex max-w-[1500px] flex-col justify-between gap-8 px-6 pb-8 pt-12 sm:px-10 lg:flex-row lg:px-11 lg:pt-14">
        <div className="min-w-0 flex-1">
          <h1 className="font-mono text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl lg:text-[76px]">
            Gaby.Dev
          </h1>

          <p className="mt-1 font-mono text-lg sm:text-xl">
            Desenvolvedor Front-end &amp; Back-end
          </p>

          <div className="mt-3 h-px w-full max-w-[780px] bg-black/75" />

          <p className="mt-4 max-w-[700px] text-sm leading-[1.2] sm:text-[14px]">
            Venho estudando programação desde muito novo, comecei alguns
            trabalhos como Freelancer nos últimos anos, aprimorando meus
            conhecimentos. Minha especialidade inclui{" "}
            <strong>
              React Native, Nextjs, WordPress, Bootstrap, Tailwindcss
            </strong>{" "}
            e Consumo/Integração de <strong>APIs.</strong>
          </p>

          <a
            href=""
            download
            className="mt-4 opacity-50  inline-flex items-center gap-2 rounded-xl border border-dotted border-black px-3 py-2 text-xs transition hover:bg-[#f5e8bc]"
          >
            <BookText size={15} />
            Baixar currículo
          </a>
        </div>

        <nav className="flex flex-col gap-3 text-sm lg:min-w-[260px] lg:items-end lg:pt-1">
          <a
            href=""
            className="flex items-center gap-3 transition cursor-default"
          >
            <Mail size={17} />
            <span>devgabygoodman@gmail.com</span>
          </a>

          <a
            href=""
            target="_blank"
            rel="noreferrer"
            className="flex opacity-50 cursor-default items-center gap-3 transition hover:opacity-50"
          >
            <LinkedInLogo size={17} />
            <span>linkedin.com/gaby</span>
          </a>

         <a
            href="https://github.com/gaby0832"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 transition hover:opacity-60"
          >
            <GitHubLogo size={18} />
            <span>github.com/gaby0832</span>
          </a>
        </nav>
      </header>

      {/* Projetos */}
      <section
        id="projetos"
        className="mx-auto max-w-[1500px] px-6 pb-12 sm:px-10 lg:px-11"
      >
        <h2 className="w-fit border-b border-black pb-1 font-mono text-2xl sm:text-[28px]">
          Projetos
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-x-9 gap-y-12 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article key={project.name} className="min-w-0">
              {/* Preview do projeto */}
              <div className="flex flex-col">
                 <Image
                      src={project.image}
                      alt={`Preview do projeto ${project.name}`}
                      className="h-full w-full block"
                      width="1080"
                      height="1080"
                    />
              
                {/* Base ilustrativa do monitor */}
              </div>

              {/* Informações */}
              <div className="mt-6 flex items-center gap-2">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                >
                  <Image src={project.icon} width="50" height="50" alt=""/>
                </div>

                <div className="min-w-0 flex-1">



                  <h3 className="truncate text-xs font-medium">
                    {project.name}
                  </h3>
                  <p className="truncate text-[10px] text-black/70">
                    {project.repository}
                  </p>
                </div>

                <a
                  href={project.repository_url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Código de ${project.name}`}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#17130b] text-[#fff9e2] transition hover:bg-[#625222]"
                     style={{ backgroundColor: project.color }}

                >
                  <Code2 size={19} />
                </a>

                {project.name !== "Gab Dot Dev" ? (
                  <a
                  href={project.website}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Abrir ${project.name}`}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#17130b] text-[#fff9e2] transition hover:bg-[#625222]"
                     style={{ backgroundColor: project.color }}

                >
                  <ExternalLink size={17} />
                </a>): ""}
              </div>

              <p className="mt-6 text-sm leading-[1.2]">{project.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Contato */}
      <section
        id="contato"
        className="mx-auto max-w-[1500px] px-6 pb-16 pt-1 sm:px-10 lg:px-11"
      >
        <h2 className="w-fit border-b border-black pb-1 font-mono text-2xl sm:text-[28px]">
          Contato
        </h2>

        <h3 className="mt-4 font-mono text-xl sm:text-2xl">
          Entre em contato!
        </h3>

        <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <form onSubmit={handleContact} className="space-y-2">
            <label htmlFor="name" className="block text-sm">
              Nome
            </label>
            <input
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Digite seu nome aqui..."
              required
              className="h-10 w-full rounded-md border border-transparent bg-white/80 px-4 text-sm outline-none transition placeholder:text-gray-400 focus:border-black/40"
            />

            <label htmlFor="email" className="block pt-1 text-sm">
              E-mail
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite seu e-mail aqui..."
              required
              className="h-10 w-full rounded-md border border-transparent bg-white/80 px-4 text-sm outline-none transition placeholder:text-gray-400 focus:border-black/40"
            />

            <label htmlFor="message" className="block pt-1 text-sm">
              Mensagem
            </label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Digite sua mensagem aqui..."
              required
              rows={4}
              className="w-full resize-y rounded-md border border-transparent bg-white/80 px-4 py-4 text-sm outline-none transition placeholder:text-gray-400 focus:border-black/40"
            />

           <button
                type="submit"
                className="inline-flex p-5 py-3 cursor-pointer shrink-0 items-center gap-2 rounded-lg bg-[#11100b] px-3 text-xs text-white transition hover:bg-[#51451d]"
              >
                <Send size={15} />
                Enviar
              </button>
          </form>

          {/* Perfil */}

            <GitHubProfileCard/>

           {/* <div className="relative -mt-14 px-0">
              <img
                src="/profile.jpg"
                alt="Foto de perfil de Gabriel"
                className="h-[108px] w-[108px] rounded-full border-4 border-[#fff9e2] object-cover"
              />

              <h3 className="mt-2 text-sm font-semibold">Gabriel</h3>
              <p className="mt-0.5 text-xs text-black/50">gaby0832 on github</p>

              <p className="mt-2 max-w-md text-xs leading-[1.35]">
                Cursando Análise e Desenvolvimento de Sistemas na Unicesumar
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-2 text-xs">
                <BookText size={19} />
                <span>Repositórios</span>
                <span className="rounded-full bg-[#f9edcc] px-2 py-0.5">
                  13
                </span>
                <span>•</span>
                <History size={18} />
                <span>Commits no total</span>
                <span className="rounded-full bg-[#f9edcc] px-2 py-0.5">
                  51
                </span>
              </div>
            </div> */}
          </div>
      </section>

      {/* Rodapé */}
      <footer className="bg-[#ffe68e]">
        <div className="mx-auto flex max-w-[1500px] flex-col items-start justify-between gap-6 px-6 py-7 sm:px-10 md:flex-row md:items-center lg:px-11">
          <p className="text-sm">Todos os direitos reservados ©</p>

          <form
            onSubmit={handleNewsletter}
            className="w-full max-w-[510px]"
          >
            <label
              htmlFor="newsletter"
              className="mb-2 block text-sm font-medium"
            >
              Quer deixar apenas o e-mail?
            </label>

            <div className="flex gap-2">
              <input
                id="newsletter"
                type="email"
                value={newsletter}
                onChange={(e) => setNewsletter(e.target.value)}
                placeholder="Digite seu e-mail aqui..."
                required
                className="h-9 min-w-0 flex-1 rounded-md bg-white/90 px-4 text-sm outline-none placeholder:text-gray-400 focus:ring-1 focus:ring-black/30"
              />

              <button
                type="submit"
                className="inline-flex cursor-pointer shrink-0 items-center gap-2 rounded-lg bg-[#11100b] px-3 text-xs text-white transition hover:bg-[#51451d]"
              >
                <Send size={15} />
                Enviar
              </button>
            </div>
          </form>
        </div>
      </footer>
    </main>
  );
}
