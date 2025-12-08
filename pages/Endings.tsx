import React from 'react';
import { Ending } from '../types';
import { Trophy } from 'lucide-react';

const endingsData: Ending[] = [
  { id: 1, title: "Beyond Time", condition: "Derrote Lavos após reviver Crono. O final varia dependendo se você salvou Lucca's Mom ou poupou Magus." },
  { id: 2, title: "Reunion", condition: "Derrote Lavos SEM reviver Crono. (Os amigos tentam trazê-lo de volta)." },
  { id: 3, title: "The Dream Project", condition: "Derrote Lavos no Ocean Palace ou logo no início do New Game+ (teletransporte da direita na Feira do Milênio). Encontre os desenvolvedores." },
  { id: 4, title: "The Successor of Guardia", condition: "Derrote Lavos após salvar Leene e Marle (600 AD), mas antes de ir para o Fim do Tempo." },
  { id: 5, title: "Good Night", condition: "Derrote Lavos assim que chegar no Fim do Tempo pela primeira vez." },
  { id: 6, title: "Legendary Hero", condition: "Derrote Lavos quando descobrir que Tata é o 'herói', mas antes de pegar a Hero Badge dele." },
  { id: 7, title: "The Unknown Past", condition: "Derrote Lavos após pegar a Hero Badge de Tata, mas antes de pegar a Gate Key na pré-história." },
  { id: 8, title: "People of the Times", condition: "Derrote Lavos após recuperar a Gate Key, mas antes de dar a Masamune para Frog." },
  { id: 9, title: "The Oath", condition: "Derrote Lavos após dar a Masamune para Frog, mas antes de lutar contra Magus." },
  { id: 10, title: "Dino Age", condition: "Derrote Lavos após derrotar Magus, mas antes de enfrentar Azala." },
  { id: 11, title: "What the Prophet Seeks", condition: "Derrote Lavos após derrotar Azala/Black Tyrano, mas antes de Schala abrir a porta selada em Zeal." },
  { id: 12, title: "Memory Lane", condition: "Derrote Lavos logo após Schala abrir a porta selada, mas antes de carregar o pingente na Mammon Machine." },
  { id: 13, title: "Apocalypse (Game Over)", condition: "Perca para Lavos na batalha final. Mostra o mundo sendo destruído em 1999." },
];

const Endings: React.FC = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-chrono-gold mb-2">Todos os Finais</h1>
        <p className="text-gray-600 dark:text-gray-400">Existem 13 finais principais. A maioria requer o New Game+.</p>
      </div>

      <div className="grid gap-4">
        {endingsData.map((ending) => (
          <div key={ending.id} className="bg-white dark:bg-chrono-card border border-gray-200 dark:border-gray-700 p-5 rounded-lg flex items-start gap-4 hover:border-chrono-blue hover:shadow-md dark:hover:shadow-none transition-all">
            <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full shrink-0 mt-1">
              <Trophy size={20} className={ending.id === 3 ? "text-yellow-600 dark:text-chrono-gold" : "text-gray-400 dark:text-gray-500"} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Final {ending.id}: {ending.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                <span className="text-chrono-blue font-semibold">Como obter: </span>
                {ending.condition}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Endings;