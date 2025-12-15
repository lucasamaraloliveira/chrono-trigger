import React, { useState } from 'react';
import { Pill, Lock, Trophy, Sparkles, MapPin } from 'lucide-react';

const Extras: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'tabs' | 'chests' | 'arena' | 'secrets'>('tabs');

    return (
        <div className="p-6 max-w-6xl mx-auto">
            <h1 className="text-3xl font-black text-gray-900 dark:text-chrono-gold mb-8 flex items-center gap-3">
                <Sparkles className="text-purple-500" /> Extras & Segredos
            </h1>

            {/* Tabs Navigation */}
            <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-200 dark:border-gray-700 pb-1">
                <button
                    onClick={() => setActiveTab('tabs')}
                    className={`px-4 py-2 rounded-t-lg font-bold flex items-center gap-2 transition-all ${activeTab === 'tabs' ? 'bg-chrono-blue text-white' : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400'}`}
                >
                    <Pill size={18} /> Capsules (Tabs)
                </button>
                <button
                    onClick={() => setActiveTab('chests')}
                    className={`px-4 py-2 rounded-t-lg font-bold flex items-center gap-2 transition-all ${activeTab === 'chests' ? 'bg-chrono-blue text-white' : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400'}`}
                >
                    <Lock size={18} /> Baús Selados
                </button>
                <button
                    onClick={() => setActiveTab('arena')}
                    className={`px-4 py-2 rounded-t-lg font-bold flex items-center gap-2 transition-all ${activeTab === 'arena' ? 'bg-chrono-blue text-white' : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400'}`}
                >
                    <Trophy size={18} /> Arena of the Ages
                </button>
                <button
                    onClick={() => setActiveTab('secrets')}
                    className={`px-4 py-2 rounded-t-lg font-bold flex items-center gap-2 transition-all ${activeTab === 'secrets' ? 'bg-chrono-blue text-white' : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400'}`}
                >
                    <MapPin size={18} /> Segredos
                </button>
            </div>

            {/* Content Area */}
            <div className="bg-white dark:bg-chrono-card rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-6 min-h-[400px]">

                {/* TABS CONTENT */}
                {activeTab === 'tabs' && (
                    <div className="space-y-6 animate-fadeIn">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Localização das Capsules (Tabs)</h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">Capsules aumentam permanentemente os status. Use o Charm de Ayla para roubá-las de bosses!</p>

                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-red-50 dark:bg-red-900/10 p-4 rounded-xl border border-red-100 dark:border-red-900/30">
                                <h3 className="font-bold text-red-600 dark:text-red-400 mb-3 flex items-center gap-2"><Pill size={16} /> Power Tabs (Força)</h3>
                                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                                    <li>• Guardia Forest (1000 AD): Canto inferior direito (brilho).</li>
                                    <li>• Catedral (600 AD): Em um pote na sala de defesa.</li>
                                    <li>• Boss: Black Tyranno (Charm).</li>
                                    <li>• Boss: Golem (Charm).</li>
                                    <li>• Death Peak: Perto da primeira árvore cintilante.</li>
                                </ul>
                            </div>
                            <div className="bg-blue-50 dark:bg-blue-900/10 p-4 rounded-xl border border-blue-100 dark:border-blue-900/30">
                                <h3 className="font-bold text-blue-600 dark:text-blue-400 mb-3 flex items-center gap-2"><Pill size={16} /> Magic Tabs (Magia)</h3>
                                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                                    <li>• Medina Elder's House (1000 AD): Cozinha, brilho no balcão.</li>
                                    <li>• Boss: Azala (Charm).</li>
                                    <li>• Spekkio: Vença a forma Masamune Frog ou Nu.</li>
                                    <li>• Zembrovski (Alienígenas): Fale com eles várias vezes em Trann Dome.</li>
                                    <li>• Boss: Retenite (Charm).</li>
                                </ul>
                            </div>
                            <div className="bg-yellow-50 dark:bg-yellow-900/10 p-4 rounded-xl border border-yellow-100 dark:border-yellow-900/30">
                                <h3 className="font-bold text-yellow-600 dark:text-yellow-400 mb-3 flex items-center gap-2"><Pill size={16} /> Speed Tabs (Velocidade)</h3>
                                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                                    <li>• Kajar (12000 BC): Arranhe as costas do Nu (Secreto).</li>
                                    <li>• Denadoro Mts: Em um baú perto do rio, visão obstruída.</li>
                                    <li>• Bos: Giga Gaia (Charm).</li>
                                    <li>• Black Omen: Roube dos Painels.</li>
                                    <li>• West Cape: Atrás da lápide de Toma (Chrono Cross link).</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}

                {/* CHESTS CONTENT */}
                {activeTab === 'chests' && (
                    <div className="space-y-6 animate-fadeIn">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Guia dos Baús Selados (Sealed Chests)</h2>
                        <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border-l-4 border-orange-500 mb-6">
                            <strong className="block text-orange-800 dark:text-orange-200">Dica de Ouro: O Upgrade Temporal</strong>
                            <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                                Ao encontrar um baú selado em 600 A.D., <strong>NÃO O ABRA</strong>. Apenas 'toque' nele e escolha "Não" quando perguntar se quer abrir. Isso "ativa" o baú. Em seguida, vá para 1000 A.D. e abra o mesmo baú para uma versão aprimorada (Ex: Nova Armor vira Moon Armor). Depois, volte para 600 A.D. e pegue a versão original.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h3 className="font-bold text-lg mb-2 text-chrono-blue">600 A.D. (Ativar/Pegar Depois)</h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                                    <li><strong>Truce Inn:</strong> Blue Vest</li>
                                    <li><strong>Guardia Castle:</strong> Red Vest</li>
                                    <li><strong>Heckran Cave:</strong> Wall Ring / Dash Ring</li>
                                    <li><strong>Elder's House (Porre):</strong> White Vest / Black Vest</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-2 text-purple-600 dark:text-purple-400">12000 B.C. (Palácios)</h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                                    <li><strong>Zeal Palace:</strong> Encontre Schala para carregar o pingente.</li>
                                    <li><strong>Kajar/Enhasa:</strong> Abra livros na ordem certa (Água, Vento, Fogo) para abrir portas secretas. Contém Speed Tabs e Black Rock.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}

                {/* ARENA CONTENT */}
                {activeTab === 'arena' && (
                    <div className="space-y-6 animate-fadeIn">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Arena of the Ages</h2>
                        <p className="text-gray-600 dark:text-gray-300">Treine seu Smidge para lutar por você. Itens exclusivos como "Nu Arcana" são obtidos aqui.</p>

                        <table className="w-full text-left bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden">
                            <thead className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                                <tr>
                                    <th className="p-3">Tier</th>
                                    <th className="p-3">Recompensa Principal</th>
                                    <th className="p-3">Dica</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-gray-600 text-sm text-gray-600 dark:text-gray-400">
                                <tr>
                                    <td className="p-3 font-bold">Tier 1</td>
                                    <td className="p-3">Pochions, Ethers</td>
                                    <td className="p-3">Fácil. Apenas ataque.</td>
                                </tr>
                                <tr>
                                    <td className="p-3 font-bold">Tier 3</td>
                                    <td className="p-3">Mirrors (Trocáveis)</td>
                                    <td className="p-3">Use o item "Slops" para aumentar HP do seu monstro antes.</td>
                                </tr>
                                <tr>
                                    <td className="p-3 font-bold">Tier 6</td>
                                    <td className="p-3">Dreamstone, Old Rocks</td>
                                    <td className="p-3">Seu monstro precisa de Techs elementais (Flameclaw etc).</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )}

                {/* SECRETS CONTENT */}
                {activeTab === 'secrets' && (
                    <div className="space-y-6 animate-fadeIn">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Segredos & Easter Eggs</h2>

                        <div className="space-y-4">
                            <div className="flex gap-4 items-start">
                                <div className="bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300 p-2 rounded-lg shrink-0">
                                    <Sparkles size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 dark:text-white">Sala dos Desenvolvedores (The Dream Team)</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        Termine o jogo no "Dream Project Ending". Você poderá conversar com Hironobu Sakaguchi, Yuji Horii, Nobuo Uematsu e Akira Toriyama.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start">
                                <div className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 p-2 rounded-lg shrink-0">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 dark:text-white">O Nu da Floresta (Hunting Range - 65M BC)</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        Espere chover na Hunting Range. O Nu aparecerá em pontos específicos. Derrote-o para ganhar **30 TP** e **3000 G**. É a melhor fonte de Tech Points no início/meio do jogo.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start">
                                <div className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 p-2 rounded-lg shrink-0">
                                    <Sparkles size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 dark:text-white">Shiny Points (Pontos Cintilantes)</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        Em 12000 B.C., examine os livros sagrados em Enhasa e Kajar para desbloquear salas secretas. A sequência é: Água, Vento, Fogo.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
};

export default Extras;
