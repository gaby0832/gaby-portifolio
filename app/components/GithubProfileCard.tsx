"use client"



type GitHubProfile = {
  login: string;
  name: string | null;
  avatar_url: string;
  html_url: string;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
};

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
} from 'lucide-react'

import {useState, useEffect} from 'react'

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

export function GitHubProfileCard() {
  const [profile, setProfile] = useState<GitHubProfile | null>(null);
  const [bannerColor, setBannerColor] = useState("#f9edcc");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function loadProfile() {
      try {
        const response = await fetch("https://api.github.com/users/gaby0832");

        if (!response.ok) {
          throw new Error("Não foi possível carregar o perfil do GitHub.");
        }

        const data: GitHubProfile = await response.json();

        if (cancelled) return;

        setProfile(data);

        // Extrai uma cor média representativa da foto de perfil.
        const image = new Image();
        image.crossOrigin = "anonymous";

        image.onload = () => {
          if (cancelled) return;

          try {
            const canvas = document.createElement("canvas");
            const context = canvas.getContext("2d", {
              willReadFrequently: true,
            });

            if (!context) return;

            // Uma imagem pequena já é suficiente para analisar as cores.
            canvas.width = 32;
            canvas.height = 32;

            context.drawImage(image, 0, 0, 32, 32);

            const pixels = context.getImageData(
              0,
              0,
              32,
              32
            ).data;

            let red = 0;
            let green = 0;
            let blue = 0;
            let totalWeight = 0;

            for (let i = 0; i < pixels.length; i += 4) {
              const r = pixels[i];
              const g = pixels[i + 1];
              const b = pixels[i + 2];
              const alpha = pixels[i + 3] / 255;

              // Evita que áreas quase brancas ou muito escuras
              // dominem a cor do banner.
              const brightness = (r + g + b) / 3;

              if (brightness > 242 || brightness < 18 || alpha < 0.5) {
                continue;
              }

              red += r * alpha;
              green += g * alpha;
              blue += b * alpha;
              totalWeight += alpha;
            }

            if (totalWeight > 0) {
              const averageR = red / totalWeight;
              const averageG = green / totalWeight;
              const averageB = blue / totalWeight;

              // Mistura a cor extraída com branco para criar
              // um banner pastel que combina com o design.
              const mix = (channel: number) =>
                Math.round(channel * 0.28 + 255 * 0.72);

              const hex = (value: number) =>
                value.toString(16).padStart(2, "0");

              const color =
                "#" +
                hex(mix(averageR)) +
                hex(mix(averageG)) +
                hex(mix(averageB));

              if (!cancelled) {
                setBannerColor(color);
              }
            }
          } catch {
            // Se o navegador bloquear a leitura da imagem,
            // o banner continua usando a cor padrão.
          }
        };

        image.onerror = () => {
          if (!cancelled) setBannerColor("#f9edcc");
        };

        image.src = data.avatar_url;
      } catch {
        if (!cancelled) setError(true);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    loadProfile();

    return () => {
      cancelled = true;
    };
  }, []);

  if (error) {
    return (
      <div className="rounded-xl bg-[#f9edcc] p-6 text-sm">
        Não foi possível carregar o perfil do GitHub.
        <a
          href="https://github.com/gaby0832"
          target="_blank"
          rel="noreferrer"
          className="ml-1 underline"
        >
          Abrir perfil
        </a>
      </div>
    );
  }

  return (
    <aside className="min-w-0">
      {/* Banner com cor derivada do avatar */}
      <div
        className="h-28 rounded-t-xl transition-colors duration-700"
        style={{
          backgroundColor: bannerColor,
        }}
      />

      {/* Perfil */}
      <div className="relative -mt-14 px-0">
        {profile ? (
          <a
            href={profile.html_url}
            target="_blank"
            rel="noreferrer"
            aria-label="Abrir perfil do GitHub"
          >
            <img
              src={profile.avatar_url}
              alt={`Foto de perfil de ${profile.login}`}
              className="h-[108px] w-[108px] rounded-full border-4 border-[#fff9e2] object-cover"
            />
          </a>
        ) : (
          <div className="h-[108px] w-[108px] animate-pulse rounded-full border-4 border-[#fff9e2] bg-[#f1e5c4]" />
        )}

        <h3 className="mt-2 text-sm font-semibold">
          {loading ? "Carregando perfil..." : profile?.name || profile?.login}
        </h3>

        {profile && (
          <>
            <a
              href={profile.html_url}
              target="_blank"
              rel="noreferrer"
              className="mt-0.5 block w-fit text-xs text-black/50 hover:text-black hover:underline"
            >
              @{profile.login} no GitHub
            </a>

            <p className="mt-2 max-w-md text-xs leading-[1.4]">
              {profile.bio || "Desenvolvedor e criador de projetos."}
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-2 text-xs">
              <BookText size={19} />

              <a
                href={`${profile.html_url}?tab=repositories`}
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                Repositórios
              </a>

              <span className="rounded-full bg-[#f9edcc] px-2 py-0.5">
                {profile.public_repos}
              </span>

              <span>•</span>

              <GitHubLogo size={17} />

              <span>Seguidores</span>

              <span className="rounded-full bg-[#f9edcc] px-2 py-0.5">
                {profile.followers}
              </span>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}
