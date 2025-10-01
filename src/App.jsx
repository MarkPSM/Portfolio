import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Download,
  X,
  Github,
  ExternalLink,
  Gamepad2,
  Monitor,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import portfolioPDF from "./assets/Portfolio.pdf";

const sampleProjects = [
  {
    id: 1,
    title: "Deep Pression",
    description:
      "Protótipo de jogo RPG com o objetivo de conscientizar sobre saúde mental.",
    tags: ["GameDev", "Unity", "C#"],
    // link: "#",
    repo: "https://github.com/MarkPSM/DeepPression",
    tech: ["Unity", "C#"],
  },
  {
    id: 2,
    title: "Landing Page para Game Studio",
    description:
      "Site promocional para estúdio de jogos indie, com design moderno e interativo.",
    tags: ["HTML", "JavaScript"],
    link: "https://markpsm.github.io/AmphibiaWebsite/",
    repo: "https://github.com/MarkPSM/AmphibiaWebsite",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 3,
    title: "SICA - Sistema de InterCurso Acessível",
    description:
      "Website para melhorar e facilitar a comunicação e organização de eventos esportivos.",
    tags: ["React", "Tailwind"],
    // link: "#",
    repo: "https://github.com/SICA-OFC/site",
    tech: ["React", "Tailwind", "Node.js"],
  },
  {
    id: 4,
    title: "Jogo publicitário para estudio de jogos indie",
    description:
      "Jogo clicker feito em React para promover um estúdio de jogos.",
    tags: ["React", "GameDev", "TypeScript"],
    link: "https://amphibia-studio-game.vercel.app/",
    repo: "https://github.com/MarkPSM/AmphibiaStudioGame",
    tech: ["React", "TypeScript", "Tailwind"],
  },
  {
    id: 5,
    title: "Portfolio Pessoal",
    description: "Meu portfolio pessoal, feito com React e TailwindCSS.",
    tags: ["React", "Tailwind"],
    link: "#",
    repo: "#",
    tech: ["React", "Tailwind"],
  },
  {
    id: 6,
    title: "Personagens em Realidade Aumentada",
    description:
      "Aplicativo mobile que usa AR para exibir personagens 3D interativos no ambiente real.",
    tags: ["GameDev", "Unity", "AR"],
    // link: "#",
    repo: "https://github.com/MarkPSM/3DCharAR",
    tech: ["Unity", "C#"],
  },
];

const skillsData = [
  { name: "Unity", value: 80 },
  { name: "Git", value: 75 },
  { name: "Design de Jogos", value: 65 },
  { name: "React", value: 50 },
  { name: "Node.js", value: 50 },
];

export default function GameDevPortfolio() {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState("All");
  const [selected, setSelected] = useState(null);
  const [dark, setDark] = useState(false);
  const [projects, setProjects] = useState(sampleProjects);

  const tags = [
    "All",
    ...Array.from(new Set(sampleProjects.flatMap((p) => p.tags))),
  ];

  const filtered = projects.filter((p) => {
    const matchesTag = activeTag === "All" || p.tags.includes(activeTag);
    const matchesQuery =
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.description.toLowerCase().includes(query.toLowerCase());
    return matchesTag && matchesQuery;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black text-gray-900 dark:text-gray-100 transition-colors">
      <header className="w-full p-6 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <Gamepad2 className="text-green-500" /> Marcos Paulo — Dev de Jogos,
            Sites e aplicativos
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Criando experiências digitais imersivas
          </p>
        </motion.div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-2 text-gray-400" size={16} />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-9 pr-3 py-2 rounded-lg border dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none"
              placeholder="Buscar projetos..."
            />
          </div>
        </div>
      </header>

      <main className="w-full p-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Sobre + Skills */}
        <section className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="p-6 rounded-2xl bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-md"
          >
            <h2 className="text-xl font-semibold">Olá — eu sou Marcos Paulo</h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
              Desenvolvedor apaixonado por jogos e experiências web. Curto
              transformar ideias em mundos digitais jogáveis e sites
              interativos.
            </p>
            <div className="mt-4 flex gap-3">
              <a
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900 text-white"
                href={portfolioPDF}
                download
              >
                Baixar CV <Download size={16} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="p-6 rounded-2xl bg-white dark:bg-gray-800 border dark:border-gray-700"
          >
            <h3 className="font-semibold mb-4">Skills</h3>
            <div style={{ height: 200 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={skillsData}
                  layout="vertical"
                  margin={{ left: 0, right: 0 }}
                >
                  <XAxis type="number" hide />
                  <YAxis dataKey="name" type="category" width={100} />
                  <Tooltip />
                  <Bar dataKey="value" barSize={12} radius={6} fill="#31C521" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="p-6 rounded-2xl bg-white dark:bg-gray-800 border dark:border-gray-700"
          >
            <h3 className="font-semibold mb-3">Stack</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "React",
                "Unity",
                "TypeScript",
                "Node",
                "Tailwind",
                "Photoshop",
                "Figma",
                "Git",
              ].map((s) => (
                <span
                  key={s}
                  className="px-3 py-1 rounded-full border dark:border-gray-700 text-sm"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Projetos */}
        <section className="lg:col-span-2 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-6 rounded-2xl bg-white dark:bg-gray-800 border dark:border-gray-700"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold flex items-center gap-2 mr-2">
                <Monitor /> Projetos
              </h2>
              <div className="flex gap-2 items-center flex-wrap">
                {tags.map((t) => (
                  <button
                    key={t}
                    onClick={() => setActiveTag(t)}
                    className={`px-3 py-1 rounded-full text-sm border ${
                      activeTag === t
                        ? "bg-green-600 text-white"
                        : "bg-transparent"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <AnimatePresence>
                {filtered.map((p) => (
                  <motion.article
                    key={p.id}
                    layout
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    whileHover={{ scale: 1.02 }}
                    className="p-4 rounded-xl border dark:border-gray-700 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold">{p.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                          {p.description}
                        </p>
                        <div className="mt-3 flex gap-2 flex-wrap">
                          {p.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-0.5 text-xs rounded-full border"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex gap-2 items-center">
                        <a
                          href={p.repo}
                          aria-label="Repo"
                          className="p-2 rounded-md border inline-flex items-center"
                        >
                          <Github size={16} />
                        </a>
                        <a
                          href={p.link}
                          aria-label="Live"
                          className="p-2 rounded-md border inline-flex items-center"
                        >
                          <ExternalLink size={16} />
                        </a>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </div>

            {filtered.length === 0 && (
              <div className="text-center py-10 text-sm text-gray-500">
                Nenhum projeto encontrado para esses filtros.
              </div>
            )}
          </motion.div>

          {/* Contato */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="p-6 rounded-2xl bg-white dark:bg-gray-800 border dark:border-gray-700 flex flex-col md:flex-row gap-6 items-center justify-between"
          >
            <div>
              <h3 className="font-semibold">Vamos conversar?</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Aberto a novos projetos, colaborações e oportunidades.
              </p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <a href="https://discord.gg/bGrKFmtgCE" target="_blank">
                <img
                  src="https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white"
                  target="_blank"
                />
              </a>
              <a href="mailto:markins.psm@gmail.com">
                <img
                  src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white"
                  target="_blank"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/marcos-paulo-santana-macedo-4825632bb/"
                target="_blank"
              >
                <img
                  src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white"
                  target="_blank"
                />
              </a>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Modal de Detalhes */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="max-w-2xl w-full p-6 rounded-2xl bg-white dark:bg-gray-900"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold">{selected.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                    {selected.description}
                  </p>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="p-2 rounded-md"
                >
                  <X />
                </button>
              </div>
              <div className="mt-6 flex justify-end gap-2">
                <a
                  href={selected.repo}
                  className="px-4 py-2 rounded-lg border inline-flex items-center gap-2"
                >
                  Repo <Github size={14} />
                </a>
                <a
                  href={selected.link}
                  className="px-4 py-2 rounded-lg bg-green-600 text-white inline-flex items-center gap-2"
                >
                  Ver ao vivo <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="w-full p-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Marcos Paulo - Criando jogos, sites e
        aplicações 🎮💻
      </footer>
    </div>
  );
}
