import React from 'react';
import { Clock, AlertTriangle, ArrowRight, GitBranch } from 'lucide-react';

const eras = [
    { year: "65,000,000 B.C.", name: "Prehistoric", events: "Queda de Lavos, Primeiros Humanos vs Reptites, Dreamstone." },
    { year: "12,000 B.C.", name: "Dark Ages", events: "Reino de Zeal, Magia, Queda de Ocean Palace, Morte de Crono." },
    { year: "600 A.D.", name: "Middle Ages", events: "Guerra Magus vs Guardia, Cyrus & Glenn, Masamune." },
    { year: "1000 A.D.", name: "Present", events: "Feira do Milênio, Crono encontra Marle, Julgamento." },
    { year: "1999 A.D.", name: "Apocalypse", events: "Dia de Lavos. Destruição do mundo." },
    { year: "2300 A.D.", name: "Future", events: "Mundo Pós-Apocalíptico, Robo, Belthasar, Epoch." },
    { year: "End of Time", name: "Infinity", events: "Ponto de convergência, Spekkio, Gaspar." },
];

const paradoxes = [
    {
        title: "The Grandfather Paradox",
        desc: "O desaparecimento de Marle.",
        explanation: "Ao salvar a Rainha Leene (ancestral de Marle) em 600 A.D., a história deveria fluir normalmente. Porém, se Marle morre ou deixa de existir no passado (por ser confundida com a rainha e a busca pela real rainha ser cancelada), ela não nasce no futuro. O jogo trata isso fazendo Marle desaparecer fisicamente até que a linha do tempo seja restaurada."
    },
    {
        title: "Time Bastard Theory",
        desc: "A conservação da massa temporal.",
        explanation: "Por que não existem dois Cronos quando você volta para um momento onde já esteve? O jogo (e a sequência Chrono Cross) sugere que uma versão é 'anulada' ou enviada para o Darkness Beyond Time para evitar paradoxos catastróficos, exceto em momentos cruciais como a ressurreição no Death Peak (onde usamos um Clone)."
    }
];

const Timeline: React.FC = () => {
    return (
        <div className="p-6 max-w-5xl mx-auto">
            <h1 className="text-3xl font-black text-gray-900 dark:text-chrono-gold mb-8 flex items-center gap-3">
                <GitBranch className="text-chrono-blue" size={32} />
                Linha do Tempo
            </h1>

            <div className="relative border-l-4 border-chrono-blue/30 ml-6 md:ml-10 space-y-12 mb-16">
                {eras.map((era, idx) => (
                    <div key={idx} className="relative pl-8">
                        <div className="absolute -left-[11px] top-1 bg-chrono-blue w-5 h-5 rounded-full border-4 border-white dark:border-gray-900 shadow-sm" />
                        <div className="bg-white dark:bg-chrono-card p-5 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700">
                            <span className="text-chrono-blue font-black text-xl block mb-1">{era.year}</span>
                            <h3 className="font-bold text-gray-800 dark:text-gray-200 uppercase tracking-widest text-sm mb-2">{era.name}</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">{era.events}</p>
                        </div>
                    </div>
                ))}
                {/* End of Time special node */}
                <div className="relative pl-8">
                    <div className="absolute -left-[15px] top-0 bg-gray-800 dark:bg-gray-200 w-7 h-7 rounded-full flex items-center justify-center shadow-lg">
                        <Clock size={16} className="text-white dark:text-black" />
                    </div>
                    <div className="bg-gray-800 dark:bg-gray-200 p-5 rounded-2xl shadow-xl">
                        <h3 className="font-bold text-white dark:text-gray-900 uppercase tracking-widest">O Fim do Tempo</h3>
                        <p className="text-gray-400 dark:text-gray-700 text-sm mt-1">Onde todas as linhas convergem. O lar de Gaspar e Spekkio.</p>
                    </div>
                </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2"><AlertTriangle className="text-yellow-500" /> Paradoxos Temporais</h2>
            <div className="grid md:grid-cols-2 gap-6">
                {paradoxes.map((p, idx) => (
                    <div key={idx} className="bg-yellow-50 dark:bg-yellow-900/10 p-6 rounded-xl border border-yellow-100 dark:border-yellow-900/30">
                        <h3 className="font-bold text-yellow-800 dark:text-yellow-200 mb-2">{p.title}</h3>
                        <p className="text-sm font-semibold text-yellow-700 dark:text-yellow-300 mb-4">{p.desc}</p>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            {p.explanation}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Timeline;
