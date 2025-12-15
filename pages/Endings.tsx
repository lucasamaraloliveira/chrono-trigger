import React from 'react';
import { Ending } from '../types';
import { Clock, AlertTriangle, Crown } from 'lucide-react';

const endingsData: Ending[] = [
  { id: 1, name: "Beyond Time", inflectionPoint: "Após reviver Crono", condition: "Derrotar Lavos após completar o Black Omen.", implication: "O final verdadeiro (True Ending). Lavos é derrotado e os personagens voltam para suas eras." },
  { id: 2, name: "Reunion", inflectionPoint: "Após a morte de Crono", condition: "Derrotar Lavos antes de reviver Crono (sem o Chrono Trigger).", implication: "Final agridoce onde os amigos se despedem." },
  { id: 3, name: "The Dream Project", inflectionPoint: "Início do Jogo (New Game+)", condition: "Derrotar Lavos pelo Telepod ou Balde assim que disponível, com apenas Crono/Marle.", implication: "A sala dos desenvolvedores (Dream Team). O final mais difícil." },
  { id: 4, name: "The Successor of Guardia", inflectionPoint: "Após salvar Leene", condition: "Derrotar Lavos após resgatar Leene e antes de Zombor.", implication: "Marle revela ser a princesa e o Rei fica furioso (Variações cômicas)." },
  { id: 5, name: "Good Night", inflectionPoint: "Após chegar em 600 A.D.", condition: "Derrotar Lavos logo após chegar em 600 AD e ver o mapa do mundo.", implication: "Um final bizarro e curto." },
  { id: 6, name: "The Legendary Hero", inflectionPoint: "Após chegar em 2300 A.D.", condition: "Derrotar Lavos logo após chegar no futuro.", implication: "Robo e Atropos vivem felizes; Tata é o herói." },
  { id: 7, name: "The Unknown Past", inflectionPoint: "Antes de Ayla", condition: "Derrotar Lavos após obter a Hero Medal mas antes da Gate Key ser roubada.", implication: "Cenas aleatórias de habitantes, sem muito contexto." },
  { id: 8, name: "People of the Times", inflectionPoint: "Após Gate Key", condition: "Derrotar Lavos após recuperar a Gate Key em 65M B.C.", implication: "Créditos rolam com personagens de várias eras interagindo." },
  { id: 9, name: "The Oath", inflectionPoint: "Após consertar Masamune", condition: "Derrotar Lavos logo após entregar a Masamune restaurada a Frog.", implication: "Frog invade o castelo de Magus sozinho para cumprir sua promessa." },
  { id: 10, name: "Dino Age", inflectionPoint: "Após Magus", condition: "Derrotar Lavos após derrotar Magus mas antes de enfrentar Azala.", implication: "Os Reptites vencem a evolução. Introdução mostra humanos-répteis." },
  { id: 11, name: "What the Prophet Seeks", inflectionPoint: "Após Azala", condition: "Derrotar Lavos após Azala, mas antes de Schala abrir a porta selada.", implication: "Cenas focadas em Magus (O Profeta) e Janus." },
  { id: 12, name: "Memory Lane", inflectionPoint: "Após Schala", condition: "Derrotar Lavos após Schala abrir a porta, mas antes de carregar o pingente.", implication: "Marle e Lucca comentam sobre os homens do jogo (Slide show)." },
  { id: 13, name: "Dream's Epilogue", inflectionPoint: "Conteúdo Extra (DS/PC)", condition: "Derrotar Dream Devourer após completar Dimensional Vortex.", implication: "Liga Crono Trigger a Chrono Cross. O destino final de Schala." }
];

const Endings: React.FC = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-black text-gray-900 dark:text-chrono-gold mb-4 flex justify-center items-center gap-3">
          <Clock className="animate-spin-slow" size={32} />
          Guia dos Finais
        </h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Chrono Trigger possui múltiplos finais que dependem de <strong>QUANDO</strong> você derrota Lavos. O New Game+ é essencial para ver todos.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {endingsData.map((ending) => (
          <div key={ending.id} className="bg-white dark:bg-chrono-card rounded-xl shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col md:flex-row">
            <div className="bg-gray-100 dark:bg-gray-800 p-6 flex flex-col justify-center items-center md:w-48 text-center shrink-0 border-r border-gray-200 dark:border-gray-700">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Final</span>
              <span className="text-4xl font-black text-chrono-blue">#{ending.id}</span>
              {ending.id === 13 && <span className="mt-2 text-[10px] bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full font-bold">DS / PC / Mobile</span>}
              {ending.id === 1 && <span className="mt-2 text-[10px] bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full font-bold flex items-center gap-1"><Crown size={10} /> True Ending</span>}
            </div>

            <div className="p-6 flex-1">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{ending.name}</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                <div className="bg-blue-50 dark:bg-blue-900/10 p-3 rounded-lg">
                  <span className="text-xs text-blue-800 dark:text-blue-300 font-bold uppercase block mb-1">Ponto de Inflexão</span>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{ending.inflectionPoint}</p>
                </div>
                <div className="bg-orange-50 dark:bg-orange-900/10 p-3 rounded-lg">
                  <span className="text-xs text-orange-800 dark:text-orange-300 font-bold uppercase block mb-1">Condição Chave</span>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{ending.condition}</p>
                </div>
              </div>

              <div className="text-sm text-gray-600 dark:text-gray-400 italic border-l-4 border-gray-300 dark:border-gray-600 pl-3">
                "{ending.implication}"
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Endings;