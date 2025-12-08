import React from 'react';

const doubleTechs = [
  { chars: "Crono + Marle", name: "Aura Whirl", effect: "Cura todos os aliados" },
  { chars: "Crono + Marle", name: "Ice Sword", effect: "Dano massivo de gelo" },
  { chars: "Crono + Lucca", name: "Fire Whirl", effect: "Dano de fogo em área" },
  { chars: "Crono + Frog", name: "X-Strike", effect: "Dano físico alto em cruz" },
  { chars: "Crono + Robo", name: "Max Cyclone", effect: "Dano físico ao redor" },
  { chars: "Crono + Ayla", name: "Falcon Hit", effect: "Dano físico em linha" },
  { chars: "Marle + Lucca", name: "Antipode", effect: "Dano Sombra/Fogo/Gelo misto" },
  { chars: "Frog + Robo", name: "Blade Toss", effect: "Dano físico (Frog é arremessado)" },
  { chars: "Frog + Ayla", name: "Slurp Kiss", effect: "Cura todos e remove status" },
];

const tripleTechs = [
  { chars: "Crono + Marle + Lucca", name: "Delta Force", effect: "Dano elemental triplo (Sombra/Fogo/Gelo)" },
  { chars: "Crono + Marle + Frog", name: "Arc Impulse", effect: "Dano massivo de gelo em um inimigo" },
  { chars: "Crono + Robo + Frog", name: "Triple Raid", effect: "Dano físico extremo em um inimigo" },
  { chars: "Crono + Ayla + Robo", name: "Twister", effect: "Dano de vento/sombra em todos" },
  { chars: "Magus + Lucca + Marle", name: "Dark Eternal", effect: "Dano Sombra Supremo (Requer Black Rock)" },
  { chars: "Magus + Lucca + Robo", name: "Omega Flare", effect: "Dano Fogo/Sombra Supremo (Requer Blue Rock)" },
];

const Techs: React.FC = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-chrono-gold mb-8">Techs Combinadas</h1>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">Double Techs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {doubleTechs.map((tech, idx) => (
            <div key={idx} className="bg-white dark:bg-chrono-card p-4 rounded-lg border border-gray-200 dark:border-gray-700 flex flex-col shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-chrono-blue text-lg">{tech.name}</h3>
                <span className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-gray-500 dark:text-gray-400 font-medium">{tech.chars}</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">{tech.effect}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">Triple Techs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {tripleTechs.map((tech, idx) => (
            <div key={idx} className="bg-gradient-to-br from-blue-50 to-white dark:from-chrono-card dark:to-gray-800 p-4 rounded-lg border border-blue-100 dark:border-gray-600 shadow-md flex flex-col relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-16 h-16 bg-yellow-400/10 dark:bg-chrono-gold/10 rounded-bl-full -mr-8 -mt-8 group-hover:scale-110 transition-transform"></div>
              <div className="flex justify-between items-start mb-2 relative z-10">
                <h3 className="font-bold text-yellow-600 dark:text-chrono-gold text-lg">{tech.name}</h3>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wide font-bold">{tech.chars}</p>
              <p className="text-sm text-gray-700 dark:text-gray-200">{tech.effect}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Techs;