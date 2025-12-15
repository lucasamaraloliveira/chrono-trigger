import React, { useState } from 'react';
import { Item } from '../types';
import { Shield, Sword, Sparkles, Gem, Package } from 'lucide-react';

const itemsData: Item[] = [
    // Consumables
    { name: "Elixir / Megalixir", category: "Consumable", effect: "Restaura HP/MP (Megalixir restaura Grupo)", strategy: "Guarde Megalixirs para a luta final contra Lavos. Elixires são vitais para recuperar MP." },
    { name: "Panacea (Heal)", category: "Consumable", effect: "Remove todos os status negativos", strategy: "Tenha sempre um estoque contra inimigos que causam Chaos ou Poison." },
    { name: "Athenian Water", category: "Consumable", effect: "Revive um aliado nocauteado", strategy: "Essencial." },
    { name: "Shelter", category: "Consumable", effect: "Restaura HP/MP em Save Points", strategy: "Única forma de cura total segura dentro de Dungeons longas." },
    { name: "Capsules (Tabs)", category: "Consumable", effect: "Aumento permanente de Atributo (+1)", strategy: "Magic -> Lucca/Magus/Marle. Power -> Crono/Ayla/Frog. Speed -> Crono (ATB)." },
    { name: "Barrier / Shield Sphere", category: "Consumable", effect: "Aplica Barrier (MDef) ou Shield (Def)", strategy: "Uso instantâneo, não gasta turno. Vital contra bosses com AOE forte." },

    // Weapons
    { name: "Rainbow", category: "Weapon", source: "Crono (Sidequest: Rainbow Shell)", effect: "Atk 220, 70% Crítico", strategy: "Arma definitiva de Crono. A taxa crítica massiva garante dano altíssimo constante." },
    { name: "Dreamseeker", category: "Weapon", source: "Crono (Dimensional Vortex - DS/PC)", effect: "Atk 240, 90% Crítico", strategy: "A arma mais poderosa do jogo (Versão DS+), praticamente sempre crita." },
    { name: "Masamune (Upgraded)", category: "Weapon", source: "Frog (Sidequest: Hero's Grave)", effect: "Atk 200, Dobra dano em Mágicos", strategy: "Dobra o dano contra Magus, Lavos e inimigos mágicos." },
    { name: "Wondershot", category: "Weapon", source: "Lucca (Sun Stone Quest)", effect: "Atk 250, Dano Aleatório", strategy: "Pode causar dano estelar ou mínimo. Arriscado mas potencialmente o maior dano." },
    { name: "Crisis Arm", category: "Weapon", source: "Robo (Geno Dome)", effect: "Atk 1, Dano baseado no último dígito do HP", strategy: "Se o HP terminar em 9, causa dano massivo (até 9999). Requer microgerenciamento de HP." },

    // Armors
    { name: "Prismatic Dress", category: "Armor", source: "Feminino (Rainbow Shell Quest)", effect: "Def 99, Auto-Barrier", strategy: "A melhor armadura do jogo. Reduz dano mágico em 1/3 permanentemente." },
    { name: "Nova Armor", category: "Armor", source: "Masculino", effect: "Def 82, Imunidade a Status", strategy: "Protege contra Stop, Chaos, etc. Essencial para Robo ou Frog." },
    { name: "Elemental Plates", category: "Armor", source: "Various (Sealed Chests)", effect: "Absorve Elemento correspondente", strategy: "Transforma dano do elemento em cura. Contra bosses elementais, torna você imortal." },
    { name: "Taban's Suit", category: "Armor", source: "Lucca (Lara Quest)", effect: "Speed +3, Halves Fire", strategy: "Combina ótima defesa com velocidade, crucial para Lucca que é lenta." },

    // Accessories
    { name: "Gold Stud / Silver Stud", category: "Accessory", effect: "Reduz custo de MP em 75% / 50%", strategy: "O melhor acessório para magos. Permite spammar Luminaire e Flare." },
    { name: "Prism Spectacles", category: "Accessory", effect: "Aumenta muito o dano (Físico/Mágico)", strategy: "O item de ataque definitivo. Dê para seu principal DPS (Crono ou Lucca)." },
    { name: "Green Dream", category: "Accessory", effect: "Auto-Raise (Ressuscita uma vez)", strategy: "Segurança garantida para o healer (Marle ou Frog)." },
    { name: "Schala's Amulet", category: "Accessory", effect: "Imunidade a Status", strategy: "Utilize em quem não possui Nova Armor para evitar paralisia/confusão." }
];

const Items: React.FC = () => {
    const [filter, setFilter] = useState<string>('ALL');

    const filteredItems = filter === 'ALL'
        ? itemsData
        : itemsData.filter(item => item.category === filter);

    const categories = [
        { id: 'ALL', label: 'Todos', icon: Package },
        { id: 'Consumable', label: 'Consumíveis', icon: Sparkles },
        { id: 'Weapon', label: 'Armas', icon: Sword },
        { id: 'Armor', label: 'Armaduras', icon: Shield },
        { id: 'Accessory', label: 'Acessórios', icon: Gem },
    ];

    return (
        <div className="p-6 max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-chrono-gold mb-2">Enciclopédia de Itens</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-8">Guia dos equipamentos definitivos e itens essenciais.</p>

            {/* Filters */}
            <div className="flex flex-wrap gap-2 mb-8">
                {categories.map(cat => (
                    <button
                        key={cat.id}
                        onClick={() => setFilter(cat.id)}
                        className={`
              flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200
              ${filter === cat.id
                                ? 'bg-chrono-blue text-white shadow-lg scale-105'
                                : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'}
            `}
                    >
                        <cat.icon size={16} />
                        {cat.label}
                    </button>
                ))}
            </div>

            {/* Items Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredItems.map((item, idx) => (
                    <div key={idx} className="bg-white dark:bg-chrono-card p-5 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 hover:scale-[1.02] transition-transform">
                        <div className="flex justify-between items-start mb-3">
                            <h3 className="font-bold text-lg text-gray-900 dark:text-white">{item.name}</h3>
                            <span className={`
                text-[10px] uppercase font-bold px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-gray-500
              `}>
                                {item.category}
                            </span>
                        </div>

                        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">{item.effect}</p>

                        <div className="mt-auto space-y-2">
                            {item.source && (
                                <div className="text-xs flex items-start gap-1 text-gray-500 dark:text-gray-400">
                                    <span className="font-bold">Origem:</span> {item.source}
                                </div>
                            )}
                            {item.strategy && (
                                <div className="bg-yellow-50 dark:bg-yellow-900/10 p-2 rounded text-xs text-yellow-800 dark:text-yellow-200 border border-yellow-100 dark:border-yellow-800/30">
                                    <span className="font-bold block mb-1">Estratégia:</span>
                                    {item.strategy}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Items;
