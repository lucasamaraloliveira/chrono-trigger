import React from 'react';
import { DualTech } from '../types';
import { Zap, Target, Layers, Sword } from 'lucide-react';

const dualTechsData: DualTech[] = [
  {
    name: "X Strike",
    characters: "Crono (Cyclone) + Frog (Slurp Cut)",
    element: "Físico",
    effect: "Alto dano físico concentrado em um único alvo.",
    strategy: "Excelente contra bosses, combina o dano crítico de Crono com a força de Frog."
  },
  {
    name: "Falcon Hit",
    characters: "Crono (Spincut) + Ayla (Rock Throw)",
    element: "Físico",
    effect: "Ataque físico horizontal (Linha).",
    strategy: "Ignora defesa de muitos inimigos. Devastador contra formações lineares."
  },
  {
    name: "Glacier",
    characters: "Marle (Ice 2) + Frog (Water 2)",
    element: "Gelo (Water/Ice)",
    effect: "Dano Ice massivo concentrado (Drop gigante de gelo).",
    strategy: "Letal contra inimigos sensíveis a Gelo/Água. Dano massivo."
  },
  {
    name: "Antipode 3",
    characters: "Marle (Ice 2) + Lucca (Flare)",
    element: "Sombra (Shadow)",
    effect: "Maior dano de Sombra em área máxima.",
    strategy: "A Tech mais poderosa deste par. Cobre a tela inteira."
  },
  {
    name: "Super Volt",
    characters: "Crono (Lightning 2) + Robo (Shock)",
    element: "Trovão (Lightning)",
    effect: "Alto dano elétrico em todos os oponentes.",
    strategy: "Ideal para limpar grupos de inimigos (mob clearing)."
  }
];

const Techs: React.FC = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto space-y-12">

      {/* Introduction */}
      <section>
        <h1 className="text-4xl font-black text-gray-900 dark:text-chrono-gold mb-6 drop-shadow-sm">Mecânicas de Combate</h1>
        <div className="bg-white dark:bg-chrono-card p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-chrono-blue mb-4 flex items-center gap-2"><Layers size={24} /> Sistema de Techs Combinadas</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            O sistema de batalha de Chrono Trigger enfatiza a sinergia entre os membros do grupo através das Techs Combinadas (Dual Techs e Triple Techs). A principal fonte de dano do grupo provém dessas combinações.
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-chrono-blue">
            <p className="font-semibold text-blue-800 dark:text-blue-300 text-sm">
              Fórmula de Sucesso: Dano Combinado {'>'} Dano Individual
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-xs mt-1">
              O dano é calculado somando o dano de cada Tech componente e multiplicando o resultado por um fator superior a 1. Isso garante maior eficiência de MP e Potência.
            </p>
          </div>
        </div>
      </section>

      {/* Target Geometry */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2"><Target size={24} className="text-red-500" /> Geometria de Alvo</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
            <h3 className="font-bold text-lg mb-2 text-gray-800 dark:text-gray-200">Single Enemy</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Atinge apenas um alvo escolhido. Ideal para focar dano em chefes ou inimigos perigosos.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
            <h3 className="font-bold text-lg mb-2 text-gray-800 dark:text-gray-200">Area (Circle)</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Atinge o alvo e inimigos próximos dentro de um raio circular. Requer agrupamento dos inimigos.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
            <h3 className="font-bold text-lg mb-2 text-gray-800 dark:text-gray-200">All Enemies</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Atinge todos os inimigos na tela, independentemente da posição. As Techs mais poderosas geralmente são deste tipo.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
            <h3 className="font-bold text-lg mb-2 text-gray-800 dark:text-gray-200">Horizontal (Line)</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Atinge todos os inimigos em uma linha reta horizontal. Devastador com Falcon Hit.</p>
          </div>
        </div>
      </section>

      {/* Dual Techs Table */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2"><Sword size={24} className="text-purple-500" /> Dual Techs de Alto Impacto</h2>
        <div className="overflow-x-auto rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700">
          <table className="w-full text-left bg-white dark:bg-chrono-card">
            <thead className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 uppercase text-xs font-bold tracking-wider">
              <tr>
                <th className="px-6 py-4">Nome da Tech</th>
                <th className="px-6 py-4">Personagens (Requeridos)</th>
                <th className="px-6 py-4">Elemento</th>
                <th className="px-6 py-4">Vantagem Estratégica</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {dualTechsData.map((tech, idx) => (
                <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                  <td className="px-6 py-4 font-bold text-chrono-blue">{tech.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">{tech.characters}</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
                      <Zap size={12} /> {tech.element}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">{tech.strategy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Triple Techs Table */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2"><Layers size={24} className="text-orange-500" /> Triple Techs Supremas</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          As Triple Techs exigem que três personagens específicos estejam no grupo e tenham suas techs individuais aprendidas. Algumas exigem Pedras Mágicas (Rocks).
        </p>
        <div className="overflow-x-auto rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700">
          <table className="w-full text-left bg-white dark:bg-chrono-card">
            <thead className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 uppercase text-xs font-bold tracking-wider">
              <tr>
                <th className="px-6 py-4">Nome da Tech</th>
                <th className="px-6 py-4">Personagens / Rock Exigida</th>
                <th className="px-6 py-4">Elemento</th>
                <th className="px-6 py-4">Efeito</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4 font-bold text-chrono-blue">Delta Force</td>
                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Crono + Marle + Lucca</td>
                <td className="px-6 py-4"><span className="text-purple-600 dark:text-purple-400 font-bold">Sombra (Shadow)</span></td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Dano elemental misto em todos os inimigos.</td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4 font-bold text-chrono-blue">Arc Impulse</td>
                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Crono + Marle + Frog</td>
                <td className="px-6 py-4"><span className="text-blue-500 font-bold">Gelo (Ice)</span></td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Dano massivo de gelo em um único inimigo.</td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4 font-bold text-chrono-blue">Dark Eternal</td>
                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                  Marle + Lucca + Magus <br />
                  <span className="text-xs text-orange-600 dark:text-orange-400 italic">(Requer BlackRock)</span>
                </td>
                <td className="px-6 py-4"><span className="text-indigo-900 dark:text-indigo-400 font-bold">Sombra (Shadow)</span></td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">A versão suprema do Antipode. Destruição total.</td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4 font-bold text-chrono-blue">Omega Flare</td>
                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                  Robo + Lucca + Magus <br />
                  <span className="text-xs text-blue-600 dark:text-blue-400 italic">(Requer BlueRock)</span>
                </td>
                <td className="px-6 py-4"><span className="text-red-500 font-bold">Fogo (Fire)</span></td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Laser de poder máximo. Dano absurdo.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

    </div>
  );
};

export default Techs;