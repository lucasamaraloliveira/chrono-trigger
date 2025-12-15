import React from 'react';
import { Gamepad2, Monitor, Smartphone, Disc, Check, X, AlertTriangle } from 'lucide-react';

const versions = [
    {
        name: "SNES (Original)",
        year: "1995",
        icon: <Gamepad2 size={24} className="text-purple-500" />,
        pros: ["A experiência original pura.", "Áudio sem compressão.", "Sem tempos de carregamento (Loading)."],
        cons: ["Tradução original tem limitações (Woolseyism).", "Sem conteúdo extra (Lost Sanctum/Arena)."],
        verdict: "Clássico",
        color: "bg-gray-100 dark:bg-gray-800"
    },
    {
        name: "PlayStation 1 (Final Fantasy Chronicles)",
        year: "1999",
        icon: <Disc size={24} className="text-gray-500" />,
        pros: ["Adição das Cutscenes em Anime (Akira Toriyama).", "Menu Extras."],
        cons: ["Loading times terríveis (até 5s para abrir menu).", "Efeitos sonoros alterados."],
        verdict: "Evitar",
        color: "bg-gray-200 dark:bg-gray-700"
    },
    {
        name: "Nintendo DS (Definitive)",
        year: "2008",
        icon: <Gamepad2 size={24} className="text-blue-500" />,
        pros: ["Tradução revisada (mais fiel).", "Conteúdo Extra: Lost Sanctum, Vortex, Arena.", "Interface de tela dupla limpa.", "Cutscenes do PS1 inclusas (sem loading)."],
        cons: ["Áudio levemente comprimido devido ao hardware."],
        verdict: "Definitiva",
        color: "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800"
    },
    {
        name: "Steam / Mobile (PC/iOS/Android)",
        year: "2011/2018",
        icon: <Monitor size={24} className="text-indigo-500" />,
        pros: ["Baseada na versão DS (conteúdo extra incluso).", "Gráficos HD (após patches).", "Suporte a Widescreen e controle.", "Auto-save."],
        cons: ["Interface móvel adaptada (fontes podem desagradar).", "Filtro gráfico era ruim no lançamento (corrigido)."],
        verdict: "Ótima",
        color: "bg-indigo-50 dark:bg-indigo-900/20"
    }
];

const Versions: React.FC = () => {
    return (
        <div className="p-6 max-w-5xl mx-auto">
            <h1 className="text-3xl font-black text-gray-900 dark:text-chrono-gold mb-8 flex items-center gap-3">
                <Gamepad2 className="text-chrono-blue" size={32} />
                Guia de Versões
            </h1>

            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-3xl">
                Chrono Trigger foi relançado diversas vezes. Qual versão você deve jogar? Aqui está o comparativo definitivo.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
                {versions.map((ver, idx) => (
                    <div key={idx} className={`p-6 rounded-2xl shadow-sm border border-transparent hover:border-chrono-blue transition-all ${ver.color}`}>
                        <div className="flex justify-between items-start mb-4">
                            <div className="flex items-center gap-3">
                                <div className="p-3 bg-white dark:bg-black/20 rounded-full shadow-sm">
                                    {ver.icon}
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl text-gray-900 dark:text-white leading-tight">{ver.name}</h3>
                                    <span className="text-xs font-bold text-gray-500 uppercase">{ver.year}</span>
                                </div>
                            </div>
                            <span className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider
                 ${ver.verdict === 'Definitiva' ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' :
                                    ver.verdict === 'Evitar' ? 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300' :
                                        'bg-gray-200 text-gray-700 dark:bg-gray-600 dark:text-gray-300'}
               `}>
                                {ver.verdict}
                            </span>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <h4 className="text-sm font-bold text-green-600 dark:text-green-400 mb-2 flex items-center gap-1"><Check size={16} /> Prós</h4>
                                <ul className="space-y-1">
                                    {ver.pros.map((pro, i) => (
                                        <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                                            <span>•</span> {pro}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-sm font-bold text-red-600 dark:text-red-400 mb-2 flex items-center gap-1"><X size={16} /> Contras</h4>
                                <ul className="space-y-1">
                                    {ver.cons.map((con, i) => (
                                        <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                                            <span>•</span> {con}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-12 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 p-6 rounded-xl flex gap-4 items-start">
                <AlertTriangle className="text-yellow-600 shrink-0" size={24} />
                <div>
                    <h3 className="font-bold text-yellow-800 dark:text-yellow-200 mb-1">Nota sobre Emulação</h3>
                    <p className="text-sm text-yellow-800 dark:text-yellow-300">
                        Se optar pela versão SNES via emulação, procure por patches de tradução modernos (como a retradução do Kajar Laboratories) se quiser uma experiência de texto mais próxima do script japonês original, embora a tradução oficial do Woolsey tenha seu charme nostálgico.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Versions;
