import React, { useState } from 'react';
import WalkthroughCard from '../components/WalkthroughCard';
import { Eras, WalkthroughStep } from '../types';
import { Filter, Map, Compass, Star } from 'lucide-react';

// Using a simplified data structure for demonstration, normally this would be massive
const walkthroughData: WalkthroughStep[] = [
  // 1000 A.D.
  {
    title: "O Início: Feira do Milênio",
    era: Eras.PRESENT,
    content: "A aventura começa em Truce. Vá à Feira Milenar. Trombe com Marle, pegue o pingente. Use o Telepod de Lucca. Assista Marle desaparecer. Crono a segue.",
    items: ["Pendant", "200 G"],
  },
  {
    title: "Fuga da Prisão & O Julgamento",
    era: Eras.PRESENT,
    content: "Após salvar a rainha em 600 A.D., Crono é preso. No julgamento, responda com honestidade (ou não). Na prisão, espere 3 dias ou fuja nocauteando o guarda. Lute contra o Dragon Tank na ponte.",
    boss: { name: "Dragon Tank", difficulty: "**", strategy: "Cabeça (Cura) -> Rodas -> Corpo." }
  },

  // 600 A.D.
  {
    title: "A Catedral e Frog",
    era: Eras.MIDDLE_AGES,
    content: "Em 600 A.D., encontre a Rainha (Marle) na Catedral. Descubra o segredo das freiras (Naga-ettes). Frog se junta a você. Toque o órgão para abrir passagem secreta.",
    boss: { name: "Yakra", difficulty: "**", strategy: "X-Strike (Crono+Frog) é essencial. Mantenha HP alto." }
  },
  {
    title: "Batalha na Ponte Zenan",
    era: Eras.MIDDLE_AGES,
    content: "Ajude o exército de Guardia. Consiga carne seca (Jerky) para o rei (opcional). Na ponte, derrote Zombor. Ele tem duas partes.",
    boss: { name: "Zombor", difficulty: "***", strategy: "Topo absorve Magia/Luz, Baixo absorve Físico/Sombra. Ataque com elemento oposto." }
  },
  {
    title: "A Lenda da Masamune",
    era: Eras.MIDDLE_AGES,
    content: "Suba a Denadoro Mts para pegar a lâmina quebrada. Masa e Mune testam você. Pegue o cabo com Frog. Melchior precisa da Dreamstone.",
  },
  {
    title: "O Castelo de Magus",
    era: Eras.MIDDLE_AGES,
    content: "Com a Masamune, Frog abre a caverna. Lute contra Slash, Flea e Ozzie. Enfrente Magus para impedir a invocação de Lavos.",
    boss: { name: "Magus", difficulty: "****", strategy: "Ele muda fraqueza. Use Masamune para cortar MDef. Ataque com elemento correspondente ou cura." }
  },

  // 2300 A.D.
  {
    title: "O Futuro Desolado",
    era: Eras.FUTURE,
    content: "Primeira visita a 2300 A.D. Descubra o vídeo do Dia de Lavos (1999 A.D.) em Arris Dome. Capture o Rato para pegar o código L+R+A. Atravesse os esgotos.",
    items: ["Seed"]
  },
  {
    title: "A Fábrica e Robo",
    era: Eras.FUTURE,
    content: "Invada a fábrica para religar a energia. Robo se junta ao grupo. Desative os sistemas de segurança. Lute contra R-Series.",
  },

  // 65M B.C.
  {
    title: "Era Pré-Histórica e Ayla",
    era: Eras.PREHISTORIC,
    content: "Participe da festa da tribo Ioka. Vença Ayla bebendo soda. Ganhe a Dreamstone. No dia seguinte, siga as pegadas dos Reptites para recuperar a Gate Key.",
    boss: { name: "Nizbel", difficulty: "***", strategy: "Choque-o com Lightning para baixar defesa, depois ataque físico." }
  },
  {
    title: "Tyranno Lair",
    era: Eras.PREHISTORIC,
    content: "Invasão à base dos Reptites. Liberte os prisioneiros. Lute contra Azala e Black Tyranno. Assista a queda de Lavos.",
    boss: { name: "Black Tyranno", difficulty: "****", strategy: "Espere ele baixar a defesa para contar 5 segundos. Ataque com tudo nesse intervalo." }
  },

  // 12000 B.C.
  {
    title: "Reino Mágico de Zeal",
    era: Eras.DARK_AGES,
    content: "Visite a civilização mágica. Raspe a Mammon Machine para carregar o pingente. Veja Schala abrir as portas seladas. Conheça o Profeta.",
  },
  {
    title: "Ocean Palace e a Tragédia",
    era: Eras.DARK_AGES,
    content: "Desça ao Ocean Palace. Lute contra Golems. Lavos desperta. Crono se sacrifica. O reino cai.",
    boss: { name: "Lavos (Scripted)", difficulty: "*****", strategy: "Você vai perder." }
  },

  // SIDE QUESTS
  {
    title: "Side Quest: A Honra de Frog",
    era: Eras.MIDDLE_AGES,
    content: "Vá para Northern Ruins (600 A.D.). Encontre o fantasma de Cyrus. Contrate o carpinteiro em 1000 A.D. Resolva o dilema. Masamune atinge poder total.",
    items: ["Masamune Powered", "Hero's Badge"],
    boss: { name: "Cyrus (Ghost)", difficulty: "*", strategy: "Apenas deixe Frog falar." }
  },
  {
    title: "Side Quest: Rainbow Shell",
    era: Eras.VARIOUS,
    content: "Vá para 600 A.D., Giant's Claw. Pegue o Rainbow Shell (pesado). Peça ajuda no castelo. Avance para 1000 A.D. Prove a inocência do Rei no julgamento. Ganhe prism materials.",
    items: ["Prismatic Dress", "Rainbow Sword"]
  },
  {
    title: "Side Quest: A Origem das Máquinas",
    era: Eras.FUTURE,
    content: "Leve Robo para Geno Dome (2300 A.D.). Enfrente Atropos. Destrua Mother Brain. Robo ganha humanidade e força.",
    items: ["Crisis Arm", "Terra Arm"],
    boss: { name: "Mother Brain", difficulty: "***", strategy: "Destrua os displays que a curam (deixe um se quiser farmar)." }
  },
  {
    title: "Side Quest: A Floresta de Fiona",
    era: Eras.MIDDLE_AGES,
    content: "Deixe Robo ajudar Fiona a replantar a floresta em 600 A.D. Volte em 1000 A.D. para ver o resultado. Salve Lucca do passado no acampamento.",
    items: ["Green Dream"]
  },
  {
    title: "Confronto Final",
    era: Eras.END_OF_TIME,
    content: "Use o Epoch ou o Balde para ir a 1999 A.D. Enfrente Lavos em suas 3 formas.",
    boss: { name: "Lavos Core", difficulty: "*****", strategy: "Destrua o Bit da Esquerda. Espere o da Direita baixar defesa. Ataque." }
  }
];

const eraColors: Record<string, string> = {
  'ALL': 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 border-gray-200 dark:border-gray-600',
  [Eras.PREHISTORIC]: 'bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-200 border-orange-200 dark:border-orange-800/50',
  [Eras.DARK_AGES]: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-200 border-indigo-200 dark:border-indigo-800/50',
  [Eras.MIDDLE_AGES]: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-200 border-blue-200 dark:border-blue-800/50',
  [Eras.PRESENT]: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200 border-emerald-200 dark:border-emerald-800/50',
  [Eras.FUTURE]: 'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300 border-slate-200 dark:border-slate-600',
  [Eras.END_OF_TIME]: 'bg-zinc-800 text-white dark:bg-black dark:text-gray-300 border-zinc-700 dark:border-gray-800',
  [Eras.VARIOUS]: 'bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-200 border-purple-200 dark:border-purple-800/50',
};

const Walkthrough: React.FC = () => {
  const [filterEra, setFilterEra] = useState<string>('ALL');

  const filteredSteps = filterEra === 'ALL'
    ? walkthroughData
    : walkthroughData.filter(step => step.era === filterEra);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-chrono-gold flex items-center gap-2">
            <Compass className="text-chrono-blue" size={32} />
            Guia da Jornada
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">Siga a linha do tempo e não perca nenhum evento.</p>
        </div>

        <div className="relative group">
          <div className="flex items-center gap-2">
            <Filter size={18} className="text-gray-400" />
            <div className="relative">
              <select
                value={filterEra}
                onChange={(e) => setFilterEra(e.target.value)}
                className="appearance-none bg-white dark:bg-chrono-card border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 py-2 pl-4 pr-10 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-chrono-blue focus:border-transparent font-bold cursor-pointer transition-all hover:border-chrono-blue"
              >
                {Object.entries(eraColors).map(([era]) => {
                  const label = era === Eras.PREHISTORIC ? '65,000,000 B.C. (Prehistoric)' :
                    era === Eras.DARK_AGES ? '12,000 B.C. (Dark Ages)' :
                      era === Eras.MIDDLE_AGES ? '600 A.D. (Middle Ages)' :
                        era === Eras.PRESENT ? '1000 A.D. (Present)' :
                          era === Eras.FUTURE ? '2300 A.D. (Future)' :
                            era === Eras.END_OF_TIME ? 'End of Time' :
                              era === Eras.VARIOUS ? 'Side Quests (Various)' : 'Todas as Eras';

                  return (
                    <option key={era} value={era} className="font-bold">
                      {label}
                    </option>
                  );
                })}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {filteredSteps.map((step, index) => (
          <div key={index} className="relative">
            {/* Timeline connector line */}
            <div className={`absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 -z-10 ${index === filteredSteps.length - 1 ? 'h-1/2' : ''}`} />

            <WalkthroughCard step={step} />
          </div>
        ))}
        {filteredSteps.length === 0 && (
          <div className="text-center py-10 text-gray-400">
            Nenhum evento encontrado nesta Era.
          </div>
        )}
      </div>
    </div>
  );
};

export default Walkthrough;