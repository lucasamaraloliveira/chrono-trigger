import React, { useState } from 'react';
import { Character } from '../types';
import { Sword, Zap, User, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Images
import cronoImg from '../assets/images/crono.jpg';
import marleImg from '../assets/images/marle.jpg';
import luccaImg from '../assets/images/lucca.jpg';
import frogImg from '../assets/images/frog.jpg';
import roboImg from '../assets/images/robo.jpg';
import aylaImg from '../assets/images/ayla.jpg';
import magusImg from '../assets/images/magus.jpg';

const charactersData: Character[] = [
  {
    id: "crono",
    name: "Crono",
    bio: "Protagonista silencioso, catalisador da aventura temporal. Sua jornada começa na Feira do Milênio e se expande para salvar o futuro.",
    role: "Protagonista silencioso, catalisador da aventura temporal.",
    element: "Luz/Trovão (Light/Lightning)",
    weapon: "Katana (Espada)",
    color: "from-yellow-500 to-yellow-700",
    image: cronoImg,
    techs: [
      { name: "Cyclone", mp: 2, effect: "Dano físico em área próxima" },
      { name: "Slash", mp: 2, effect: "Dano físico em linha" },
      { name: "Lightning", mp: 2, effect: "Dano de trovão (Magic)" },
      { name: "Spincut", mp: 4, effect: "Dano físico alto (Single)" },
      { name: "Lightning 2", mp: 8, effect: "Dano de trovão em todos" },
      { name: "Life", mp: 10, effect: "Ressuscita aliado" },
      { name: "Confuse", mp: 12, effect: "Dano físico (4 hits)" },
      { name: "Luminaire", mp: 20, effect: "Dano supremo de Luz em todos" }
    ]
  },
  {
    id: "marle",
    name: "Marle",
    fullName: "Princesa Nadia",
    bio: "Princesa de Guardia, sua linhagem e seu desaparecimento iniciam o conflito temporal. Possui forte sinergia com Frog em techs de Gelo.",
    role: "Princesa de Guardia, iniciadora do conflito temporal via Paradox.",
    element: "Água/Gelo (Water/Ice)",
    weapon: "Besta (Arco)",
    color: "from-blue-400 to-cyan-600",
    image: marleImg,
    techs: [
      { name: "Aura", mp: 1, effect: "Cura um aliado" },
      { name: "Provoke", mp: 1, effect: "Causa Confuse no inimigo" },
      { name: "Ice", mp: 2, effect: "Dano de gelo (Single)" },
      { name: "Cure", mp: 2, effect: "Cura média em aliado" },
      { name: "Haste", mp: 6, effect: "Aumenta velocidade do aliado" },
      { name: "Ice 2", mp: 8, effect: "Dano de gelo em todos" },
      { name: "Cure 2", mp: 5, effect: "Cura total em aliado" },
      { name: "Life 2", mp: 15, effect: "Ressuscita e cura total" }
    ]
  },
  {
    id: "lucca",
    name: "Lucca",
    bio: "Gênio inventora, responsável pela tecnologia de teletransporte e de portais. Amiga de infância de Crono e cérebro da equipe.",
    role: "Inventora, responsável pela tecnologia de Gate e Telepod.",
    element: "Fogo (Fire)",
    weapon: "Arma (Pistola/Martelo)",
    color: "from-orange-500 to-red-600",
    image: luccaImg,
    techs: [
      { name: "Flame Toss", mp: 1, effect: "Dano de fogo em linha" },
      { name: "Hypno Wave", mp: 1, effect: "Sono em inimigos" },
      { name: "Fire", mp: 2, effect: "Dano de fogo (Single)" },
      { name: "Napalm", mp: 3, effect: "Dano de fogo em área" },
      { name: "Protect", mp: 6, effect: "Aumenta defesa física" },
      { name: "Fire 2", mp: 8, effect: "Dano de fogo em todos" },
      { name: "Mega Bomb", mp: 15, effect: "Dano de fogo alto em área" },
      { name: "Flare", mp: 20, effect: "Dano supremo de fogo em todos" }
    ]
  },
  {
    id: "frog",
    name: "Frog",
    fullName: "Glenn",
    bio: "Cavaleiro amaldiçoado, cuja jornada é guiada pela honra e pela vingança contra Magus. Empunha a lendária Masamune.",
    role: "Cavaleiro amaldiçoado, busca vingança contra Magus.",
    element: "Água/Gelo (Water/Ice)",
    weapon: "Espada (Broadsword)",
    color: "from-green-500 to-emerald-700",
    image: frogImg,
    techs: [
      { name: "Slurp", mp: 1, effect: "Cura um aliado" },
      { name: "Slurp Cut", mp: 2, effect: "Puxa e ataca inimigo" },
      { name: "Water", mp: 2, effect: "Dano de água (Single)" },
      { name: "Heal", mp: 2, effect: "Cura todos os aliados" },
      { name: "Leap Slash", mp: 4, effect: "Dano físico crítico" },
      { name: "Water 2", mp: 8, effect: "Dano de água em todos" },
      { name: "Cure 2", mp: 5, effect: "Cura total em aliado" },
      { name: "Frog Squash", mp: 15, effect: "Dano massivo (menor HP = maior dano)" }
    ]
  },
  {
    id: "robo",
    name: "Robo",
    fullName: "Prometheus (R-66Y)",
    bio: "Androide do futuro (2300 A.D.) que busca a redenção da humanidade e da tecnologia. Restaurado por Lucca.",
    role: "Androide de 2300 A.D., busca redenção da humanidade.",
    element: "Sombra (Shadow) / Físico",
    weapon: "Braço Mecânico",
    color: "from-gray-400 to-zinc-600",
    image: roboImg,
    techs: [
      { name: "Rocket Punch", mp: 1, effect: "Dano físico" },
      { name: "Cure Beam", mp: 2, effect: "Cura um aliado" },
      { name: "Laser Spin", mp: 3, effect: "Dano Sombra em todos" },
      { name: "Robo Tackle", mp: 4, effect: "Dano físico" },
      { name: "Heal Beam", mp: 3, effect: "Cura todos os aliados" },
      { name: "Uzzi Punch", mp: 12, effect: "Dano físico alto" },
      { name: "Area Bomb", mp: 14, effect: "Dano de fogo em área" },
      { name: "Shock", mp: 17, effect: "Dano supremo em todos" }
    ]
  },
  {
    id: "ayla",
    name: "Ayla",
    bio: "Líder da aldeia pré-histórica, focada em pura força e na técnica de Charm. Aliada vital na luta contra os Reptites.",
    role: "Líder da tribo Ioka, força bruta e resistência.",
    element: "Físico (Nenhum)",
    weapon: "Punhos (Fists)",
    color: "from-yellow-400 to-orange-500",
    image: aylaImg,
    techs: [
      { name: "Kiss", mp: 1, effect: "Cura e remove status" },
      { name: "Rollo Kick", mp: 2, effect: "Dano físico" },
      { name: "Cat Attack", mp: 3, effect: "Dano físico" },
      { name: "Rock Throw", mp: 4, effect: "Dano físico" },
      { name: "Charm", mp: 4, effect: "Rouba item do inimigo" },
      { name: "Tail Spin", mp: 10, effect: "Dano em área" },
      { name: "Dino Tail", mp: 15, effect: "Dano (menor HP = maior dano)" },
      { name: "Triple Kick", mp: 20, effect: "3 hits de dano alto" }
    ]
  },
  {
    id: "magus",
    name: "Magus",
    fullName: "Janus",
    bio: "Antagonista inicial (o Profeta) cujo objetivo final é eliminar Lavos e encontrar sua irmã, Schala. Mestre da magia Sombra.",
    role: "Antagonista inicial, busca Schala e vingança contra Lavos.",
    element: "Sombra (Shadow)",
    weapon: "Foice (Scythe)",
    color: "from-purple-600 to-indigo-900",
    image: magusImg,
    techs: [
      { name: "Lightning 2", mp: 8, effect: "Dano Trovão em todos" },
      { name: "Ice 2", mp: 8, effect: "Dano Gelo em todos" },
      { name: "Fire 2", mp: 8, effect: "Dano Fogo em todos" },
      { name: "Dark Bomb", mp: 8, effect: "Dano Sombra em área" },
      { name: "Magic Barrier", mp: 8, effect: "Aumenta defesa mágica" },
      { name: "Dark Mist", mp: 10, effect: "Dano Sombra em todos" },
      { name: "Black Hole", mp: 15, effect: "Chance de Morte Instantânea" },
      { name: "Dark Matter", mp: 20, effect: "Dano supremo Sombra em todos" }
    ]
  }
];

const Characters: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedChar = charactersData.find(c => c.id === selectedId);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-chrono-gold mb-6">Personagens</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {charactersData.map((char) => (
          <motion.div
            key={char.id}
            layoutId={`card-${char.id}`}
            onClick={() => setSelectedId(char.id)}
            className={`cursor-pointer rounded-2xl overflow-hidden shadow-lg relative h-64 hover:scale-105 transition-transform duration-300`}
          >
            {/* Character Image */}
            {char.image && (
              <img
                src={char.image}
                alt={char.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
            )}
            {/* Fallback gradient if no image */}
            {!char.image && (
              <div className={`absolute inset-0 bg-gradient-to-br ${char.color}`} />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 w-full">
              <h2 className="text-2xl font-black text-white uppercase tracking-wider drop-shadow-md">{char.name}</h2>
              <div className="flex items-center gap-2 text-sm text-gray-200">
                <Zap size={14} /> {char.element}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedId && selectedChar && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedId(null)}>
            <motion.div
              layoutId={`card-${selectedId}`}
              className="bg-white dark:bg-chrono-card w-full max-w-2xl rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-600 shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={() => setSelectedId(null)} className="absolute top-4 right-4 z-10 bg-black/20 hover:bg-black/40 text-white rounded-full p-2 transition-colors">
                <X size={20} />
              </button>

              <div className={`h-40 relative overflow-hidden`}>
                {/* Character Image as background */}
                {selectedChar.image && (
                  <img
                    src={selectedChar.image}
                    alt={selectedChar.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                )}
                {/* Fallback gradient if no image */}
                {!selectedChar.image && (
                  <div className={`absolute inset-0 bg-gradient-to-r ${selectedChar.color}`} />
                )}
                {/* Overlay gradient for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h2 className="text-4xl font-black text-white drop-shadow-md">{selectedChar.name}</h2>
                  {selectedChar.fullName && <p className="text-white/90 text-sm font-medium">{selectedChar.fullName}</p>}
                </div>
              </div>

              <div className="p-6 max-h-[60vh] overflow-y-auto">
                <div className="mb-6">
                  <h3 className="text-chrono-blue font-bold mb-2 flex items-center gap-2"><User size={18} /> Biografia</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm mb-4">{selectedChar.bio}</p>

                  {selectedChar.role && (
                    <div className="bg-chrono-blue/10 p-3 rounded-lg border border-chrono-blue/20 mb-4">
                      <span className="text-xs text-chrono-blue font-bold uppercase block mb-1">Papel na História</span>
                      <p className="text-gray-800 dark:text-gray-200 text-sm font-medium">{selectedChar.role}</p>
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg border border-gray-200 dark:border-gray-700">
                    <span className="text-xs text-gray-500 uppercase font-bold">Elemento</span>
                    <p className="font-semibold text-gray-900 dark:text-white">{selectedChar.element}</p>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg border border-gray-200 dark:border-gray-700">
                    <span className="text-xs text-gray-500 uppercase font-bold">Arma</span>
                    <p className="font-semibold text-gray-900 dark:text-white">{selectedChar.weapon}</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-yellow-600 dark:text-chrono-gold font-bold mb-3 flex items-center gap-2"><Sword size={18} /> Techs</h3>
                  <div className="space-y-2">
                    {selectedChar.techs.map((tech, idx) => (
                      <div key={idx} className="flex justify-between items-center bg-gray-50 dark:bg-gray-900/50 p-3 rounded border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors">
                        <div>
                          <span className="font-bold text-gray-800 dark:text-gray-200 block">{tech.name}</span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">{tech.effect}</span>
                        </div>
                        <span className="text-xs font-mono bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-1 rounded font-bold">
                          {tech.mp} MP
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Characters;