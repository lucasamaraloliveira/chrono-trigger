import React, { useState } from 'react';
import WalkthroughCard from '../components/WalkthroughCard';
import { Eras, WalkthroughStep } from '../types';
import { Filter } from 'lucide-react';

const walkthroughData: WalkthroughStep[] = [
  {
    title: "A Feira do Milênio",
    era: Eras.PRESENT,
    content: "Após ser acordado por sua mãe, desça a escada e fale com ela. Lucca está te esperando na feira. Explore a cidade primeiro: no hotel, fale com as pessoas e pegue o item no segundo andar (baú preto selado). Na casa do prefeito, aprenda sobre o sistema de jogo.\n\nEm Leene Square, trombe com a garota (Marle). Pegue o pingente e devolva. Ela se junta ao grupo. Participe do mini-game de beber soda para ganhar Silver Points. Troque Silver Points por dinheiro na tenda do sino. Se falar com Melchior (vendedor de armas), ele pede para perguntar a Marle se ela quer vender o pingente (isso afeta o julgamento futuro).",
    items: ["200 G", "Potions", "Pendant"],
  },
  {
    title: "O Show de Lucca & O Acidente",
    era: Eras.PRESENT,
    content: "Vá para o norte da feira para ver a invenção de Lucca. Lucca apresenta a máquina de teletransporte. Crono testa com sucesso. Marle tenta, mas seu pingente reage e abre um portal. Ela some, deixando o pingente. Crono pega o pingente e vai atrás dela.",
    items: ["Pendant"]
  },
  {
    title: "A Rainha Desaparecida",
    era: Eras.MIDDLE_AGES,
    content: "Você chega em Truce Canyon. Vá para o Castelo Guardia. A Rainha Leene (que na verdade é Marle confundida) está lá. Fale com ela e ela desaparece (paradoxo temporal). Lucca chega e explica: Marle é a Princesa Nadia e deixou de existir porque a verdadeira Rainha Leene não foi salva.",
    items: ["Ether", "Tonic"]
  },
  {
    title: "A Catedral",
    era: Eras.MIDDLE_AGES,
    content: "Siga para a Catedral a oeste. Fale com as freiras e examine o item brilhante (prendedor de cabelo da Leene). As freiras viram monstros. Um sapo (Frog) aparece para ajudar. Entre na passagem secreta tocando o órgão.\n\nExplore a masmorra. Você encontrará o verdadeiro Chanceler (preso) e a Rainha Leene.",
    boss: {
      name: "Yakra",
      difficulty: "** (Fácil)",
      strategy: "Use X-Strike de Crono e Frog para dano massivo. Lucca deve curar. Ele contra-ataca quando está longe dos aliados, mantenha todos próximos ou foque no dano rápido."
    },
    items: ["Power Tab", "Iron Sword", "100G", "Ether"]
  },
  {
    title: "O Julgamento",
    era: Eras.PRESENT,
    content: "De volta a 1000 A.D., leve Marle ao castelo. Crono é preso acusado de sequestro. No julgamento, suas ações na feira determinam o veredito (inocente ou culpado), mas ele será preso de qualquer forma. Na prisão, espere 3 dias para execução ou fuja (bata na cela). Fuja e encontre Lucca. Lutem contra o Dragon Tank na saída.",
    boss: {
      name: "Dragon Tank",
      difficulty: "** (Médio)",
      strategy: "Destrua a Cabeça primeiro (ela cura). Depois a Roda (ataque alto), e por último o Corpo."
    },
    items: ["Shelter", "Lode Sword", "Bronze Mail"]
  },
  {
    title: "O Futuro Desolado",
    era: Eras.FUTURE,
    content: "Fugindo do castelo, vocês caem num portal para 2300 A.D. Tudo está destruído. Em Arris Dome, descubram que esse futuro foi causado por Lavos em 1999 A.D. O grupo decide salvar o mundo. Precisam pegar energia na fábrica ao norte para abrir o portal em Proto Dome.",
    boss: {
      name: "Guardian",
      difficulty: "** (Médio)",
      strategy: "Destrua os dois Bits primeiro (eles permitem o contra-ataque Delta Attack). Quando o Guardian estiver sozinho, ataque com tudo. Se ele reviver os bits, repita."
    },
    items: ["Seed"]
  },
  {
    title: "A Fábrica e Robo",
    era: Eras.FUTURE,
    content: "Na fábrica, evite os robôs ou lute. Encontre os códigos do guindaste (XA e BB - SNES). Ative o gerador. Robo (R-66Y) se junta ao grupo em Proto Dome. Leve-o para conserto com Lucca. Abram o portal.",
    boss: {
      name: "R-Series x 6",
      difficulty: "** (Fácil)",
      strategy: "Use Cyclone de Crono para atingir múltiplos inimigos. Eles têm pouco HP mas atacam em grupo."
    }
  },
  {
    title: "O Fim do Tempo",
    era: Eras.END_OF_TIME,
    content: "Ao viajar com 4 pessoas, vocês param no Fim do Tempo. Fale com Gaspar (o velho). Ele explica os portais. Fale com Spekkio para aprender Magia (exceto Robo). Dê 3 voltas na sala. Desafie Spekkio para ganhar itens.",
    items: ["Magic Tab", "Ethers"]
  },
  {
    title: "A Vila dos Místicos",
    era: Eras.MIDDLE_AGES,
    content: "Volte para 600 A.D. Medina Village. Os monstros odeiam humanos. Vá para a caverna de Heckran a oeste para descobrir que Magus criou Lavos (supostamente).",
    boss: {
      name: "Heckran",
      difficulty: "* (Fácil)",
      strategy: "Ele é resistente a físico. Use apenas MAGIA (Lightning, Fire, Ice/Water). Quando ele disser 'Go ahead, try and attack', NÃO ATAQUE ou levará um contra-ataque forte."
    }
  },
  {
    title: "A Espada Masamune",
    era: Eras.MIDDLE_AGES,
    content: "É preciso a Masamune para derrotar Magus. A espada está quebrada. Pegue uma parte na Denadoro Mountains (guardada por Masa e Mune) e a outra com Frog (cabo). Melchior (1000 A.D.) precisa de Dreamstone para consertar. Vá para a pré-história (65.000.000 B.C.) conseguir a pedra.",
    boss: {
      name: "Masa & Mune",
      difficulty: "*** (Médio)",
      strategy: "Foque em um dos irmãos primeiro. Quando se fundirem, use ataques poderosos. Cuidado com o tornado. Mantenha HP alto."
    }
  },
  {
    title: "Pré-História e Ayla",
    era: Eras.PREHISTORIC,
    content: "Conheça Ayla. Vença o concurso de beber sopa (aperte A rapidamente). Ganhe a Dreamstone. No dia seguinte, a Gate Key foi roubada pelos Reptites. Siga as pegadas até a Forest Maze e depois Reptite Lair. Derrote Azala e pegue a chave de volta.",
    boss: {
      name: "Nizbel",
      difficulty: "*** (Difícil)",
      strategy: "Use Lightning para diminuir a defesa dele (ele toma choque). Depois ataque com tudo. Quando ele liberar a eletricidade, use Lightning de novo."
    },
    items: ["Dreamstone", "Gate Key"]
  },
  {
    title: "O Castelo de Magus",
    era: Eras.MIDDLE_AGES,
    content: "Com a Masamune consertada, Frog abre a caverna para o castelo. Enfrente os generais: Slash, Flea e Ozzie. Magus está invocando Lavos.",
    boss: {
      name: "Magus",
      difficulty: "**** (Muito Difícil)",
      strategy: "Ele muda a fraqueza (Barreira). Só ataque com o elemento da magia que ele usou por último ou Masamune (que reduz a defesa mágica). Quando ele começar a carregar feitiço (sem barreira), ataque com tudo, mas cure-se para o Dark Matter."
    }
  },
  {
    title: "O Reino de Zeal",
    era: Eras.DARK_AGES,
    content: "Vocês são sugados para 12.000 B.C., o reino mágico flutuante. Conheça Schala e Janus. Vocês são expulsos e o portal selado. Use a Epoch (nave do futuro) para voltar. A Rainha Zeal está usando a Mammon Machine para drenar Lavos.",
    boss: {
      name: "Golem",
      difficulty: "*** (Médio)",
      strategy: "Ele copia o elemento do seu ataque. Evite ataques físicos se tiver pouca defesa física. Use Fire/Water para controlar o tipo de contra-ataque dele."
    }
  },
  {
    title: "A Morte de Crono",
    era: Eras.DARK_AGES,
    content: "No Ocean Palace, Lavos desperta. O grupo não consegue vencer. Crono se sacrifica para salvar os outros. O reino de Zeal cai.",
    boss: {
      name: "Lavos (Scripted)",
      difficulty: "***** (Impossível)",
      strategy: "Você vai perder (a menos que seja New Game+ ultra forte). Apenas assista à cena."
    }
  },
  {
    title: "O Retorno do Herói",
    era: Eras.VARIOUS,
    content: "Com Crono morto, Magus pode se juntar ao grupo (se você não lutar com ele no North Cape). Fale com Gaspar para pegar o 'Chrono Trigger' (ovo do tempo). Vá para o Death Peak (2300 A.D.), use os bonecos Clone, e viaje para o momento exato da morte de Crono para trocá-lo pelo boneco.",
    items: ["Crono's Clone", "Chrono Trigger"]
  },
  {
    title: "Batalha Final",
    era: Eras.END_OF_TIME,
    content: "Após reviver Crono (ou não), termine as sidequests (Fiona, Cyrus, Sun Stone, Rainbow Shell, Geno Dome) para obter os melhores equipamentos. Vá enfrentar Lavos via Black Omen ou pelo Balde no Fim do Tempo.",
    boss: {
      name: "Lavos Core",
      difficulty: "***** (Final)",
      strategy: "Forma Final: O Bit da Direita é o verdadeiro corpo. O do centro ataca forte. O da esquerda cura/protege. Destrua o da Esquerda -> Espere o da Direita baixar a defesa -> Ataque com tudo (Luminaire, Flare, Triple Techs)."
    }
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

import { ChevronDown } from 'lucide-react';

const EraDropdown = ({ selectedEra, onSelect }: { selectedEra: string, onSelect: (era: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  const options = ['ALL', ...Object.values(Eras)];

  const getLabel = (era: string) => era === 'ALL' ? 'Todas as Eras' : era;

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-200
          ${eraColors[selectedEra] || eraColors['ALL']}
          hover:opacity-90 active:scale-95 shadow-sm
        `}
      >
        <span className="font-semibold text-sm">{getLabel(selectedEra)}</span>
        <ChevronDown size={14} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />
          <div className="absolute right-0 top-full mt-2 w-56 max-h-96 overflow-y-auto bg-white dark:bg-chrono-card rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 z-20 p-2 space-y-1">
            {options.map((era) => (
              <button
                key={era}
                onClick={() => {
                  onSelect(era);
                  setIsOpen(false);
                }}
                className={`
                  w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors border
                  ${selectedEra === era
                    ? eraColors[era] + ' shadow-sm'
                    : 'bg-transparent border-transparent text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}
                `}
              >
                {getLabel(era)}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
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
          <h1 className="text-3xl font-bold text-gray-900 dark:text-chrono-gold">Guia Passo a Passo</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">Siga a jornada através do tempo.</p>
        </div>

        <div className="relative z-20">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400 mr-2 flex items-center gap-2">
              <Filter size={16} /> Filtrar por Era:
            </span>
            <EraDropdown selectedEra={filterEra} onSelect={setFilterEra} />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {filteredSteps.map((step, index) => (
          <WalkthroughCard key={index} step={step} />
        ))}
      </div>
    </div>
  );
};

export default Walkthrough;