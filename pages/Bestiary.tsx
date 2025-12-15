import React, { useState } from 'react';
import { Skull, Heart, Shield, HelpCircle, Gift } from 'lucide-react';

interface Monster {
    name: string;
    hp: string;
    weakness: string;
    absorb: string;
    charm: string;
    notes: string;
}

const bestiaryData: Monster[] = [
    { name: "Yakra", hp: "920", weakness: "Nenhuma", absorb: "Nenhum", charm: "Nenhum", notes: "Contra-ataca se estiver longe. Mantenha o grupo próximo." },
    { name: "Dragon Tank", hp: "Cabeça (600), Roda (208), Corpo (266)", weakness: "Fogo (Corpo)", absorb: "Fogo/Raio (Cabeça)", charm: "Nenhum", notes: "Destrua a cabeça primeiro para parar a cura." },
    { name: "Guardian", hp: "1200 (Bit: 200)", weakness: "Fogo", absorb: "Nenhum", charm: "Nenhum", notes: "Só ataque o corpo quando os Bits estiverem destruídos." },
    { name: "Magus", hp: "6666", weakness: "Muda (Barreira)", absorb: "Todos exceto atual", charm: "Nenhum", notes: "Use a magia do mesmo elemento da barreira ou ataque físico (Masamune)." },
    { name: "Azala", hp: "2700", weakness: "Nenhuma", absorb: "Nenhum", charm: "Magic Tab", notes: "Roube a Magic Tab antes de matar!" },
    { name: "Black Tyranno", hp: "10500", weakness: "Nenhuma", absorb: "Nenhum", charm: "Power Tab", notes: "Espere a contagem regressiva acabar e a defesa cair." },
    { name: "Giga Gaia", hp: "9500", weakness: "Nenhuma", absorb: "Nenhum", charm: "Speed Tab", notes: "Destrua os braços primeiro." },
    { name: "Lavos Spawn", hp: "4000 (Casca) / 10000 (Boca)", weakness: "Nenhuma", absorb: "Nenhum", charm: "Elixir (Boca), Saftey Helm (Casca)", notes: "Não ataque a casca, ela contra-ataca com picos." },
    { name: "Queen Zeal", hp: "12000", weakness: "Nenhuma", absorb: "Nenhum", charm: "Prism Dress/Helm", notes: "Ataque com tudo. Reduza o HP para evitar o ataque Hallation (HP=1)." },
    { name: "Nu", hp: "1234", weakness: "Nenhuma", absorb: "Nenhum", charm: "Mop", notes: "Aparece na Floresta de Caça (65M BC). Reduz HP a 1 mas dá muita Exp/Tech." },
    { name: "Rubble", hp: "515", weakness: "Nenhuma", absorb: "Todos elementos", charm: "Nenhum", notes: "Use ataques físicos. Dá 100 Tech Points (Mt. Woe)." }
];

const Bestiary: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredMonsters = bestiaryData.filter(m =>
        m.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-6 max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                <div>
                    <h1 className="text-3xl font-black text-gray-900 dark:text-chrono-gold flex items-center gap-2">
                        <Skull className="text-red-600" size={32} />
                        Bestiário
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">Guia de combate para Inimigos e Chefes.</p>
                </div>

                <input
                    type="text"
                    placeholder="Buscar Inimigo..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-chrono-card text-gray-900 dark:text-white focus:ring-2 focus:ring-chrono-blue outline-none w-full md:w-64"
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {filteredMonsters.map((monster, idx) => (
                    <div key={idx} className="bg-white dark:bg-chrono-card rounded-xl shadow-md border border-gray-200 dark:border-gray-700 p-5 hover:shadow-lg transition-shadow">
                        <div className="flex justify-between items-start border-b border-gray-100 dark:border-gray-700/50 pb-3 mb-3">
                            <h3 className="font-bold text-xl text-gray-900 dark:text-white">{monster.name}</h3>
                            <div className="flex items-center gap-1 text-red-500 font-bold bg-red-50 dark:bg-red-900/20 px-2 py-1 rounded">
                                <Heart size={14} fill="currentColor" /> {monster.hp}
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-sm">
                            <div className="col-span-1">
                                <span className="text-xs font-bold text-gray-500 uppercase flex items-center gap-1"><Shield size={12} /> Fraqueza</span>
                                <p className="font-medium text-gray-800 dark:text-gray-200">{monster.weakness}</p>
                            </div>
                            <div className="col-span-1">
                                <span className="text-xs font-bold text-gray-500 uppercase flex items-center gap-1"><Shield size={12} className="text-blue-500" /> Absorve</span>
                                <p className="font-medium text-gray-800 dark:text-gray-200">{monster.absorb}</p>
                            </div>
                            <div className="col-span-1">
                                <span className="text-xs font-bold text-gray-500 uppercase flex items-center gap-1"><Gift size={12} className="text-yellow-500" /> Charm (Roubar)</span>
                                <p className="font-medium text-purple-600 dark:text-purple-400">{monster.charm}</p>
                            </div>
                        </div>

                        <div className="mt-4 bg-gray-50 dark:bg-gray-800 p-3 rounded-lg border border-gray-100 dark:border-gray-700">
                            <span className="text-xs font-bold text-gray-500 uppercase flex items-center gap-1 mb-1"><HelpCircle size={12} /> Dica Estratégica</span>
                            <p className="text-sm text-gray-600 dark:text-gray-300 italic">{monster.notes}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Bestiary;
