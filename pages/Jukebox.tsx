import React from 'react';
import { Music, PlayCircle, Mic2 } from 'lucide-react';

const tracks = [
    { title: "Chrono Trigger (Theme)", desc: "O tema de abertura heroico. Define o tom de aventura épica.", mood: "Épico / Aventura" },
    { title: "Peaceful Days", desc: "Toca na cidade de Truce e na Casa de Crono. A calma antes da tempestade.", mood: "Calmo / Nostálgico" },
    { title: "Wind Scene", desc: "Mapa do mundo de 600 A.D. Melancólica e nostálgica, evoca a saudade de uma era de cavaleiros.", mood: "Melancólico" },
    { title: "Frog's Theme", desc: "O tema de Glenn. Considerado por muitos o melhor tema de herói já feito.", mood: "Heroico / Determinado" },
    { title: "Magus Confronted", desc: "A batalha contra Magus. Uma das poucas músicas de boss que não é puro caos, mas sim uma dança mortal.", mood: "Tenso / Sombrio" },
    { title: "Corridors of Time", desc: "Tema do Reino de Zeal (12000 B.C.). Mística, exótica e etérea.", mood: "Místico" },
    { title: "To Far Away Times", desc: "O tema de encerramento. A despedida perfeita.", mood: "Emocionante" }
];

const Jukebox: React.FC = () => {
    return (
        <div className="p-6 max-w-5xl mx-auto">
            <h1 className="text-3xl font-black text-gray-900 dark:text-chrono-gold mb-8 flex items-center gap-3">
                <Music className="text-pink-500" size={32} />
                Jukebox (Guia Musical)
            </h1>

            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-3xl">
                A trilha sonora de Yasunori Mitsuda é um personagem à parte. Aqui estão as faixas essenciais que definem a alma do jogo.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
                {tracks.map((track, idx) => (
                    <div key={idx} className="group bg-white dark:bg-chrono-card p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:border-chrono-blue dark:hover:border-chrono-blue transition-all flex gap-4 items-start">
                        <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full group-hover:bg-chrono-blue group-hover:text-white transition-colors">
                            <PlayCircle size={24} />
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-chrono-blue transition-colors">{track.title}</h3>
                            <span className="text-xs font-bold uppercase text-pink-500 dark:text-pink-400 mb-2 block">{track.mood}</span>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                {track.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-12 bg-gradient-to-r from-purple-900 to-indigo-900 rounded-2xl p-8 text-white text-center">
                <Mic2 size={48} className="mx-auto mb-4 opacity-50" />
                <h3 className="text-2xl font-bold mb-2">Curiosidade</h3>
                <p className="opacity-90 max-w-2xl mx-auto">
                    Yasunori Mitsuda trabalhou tanto na trilha que teve úlceras estomacais e Nobuo Uematsu (Final Fantasy) teve que terminar algumas faixas para ele. É uma obra de puro esforço e paixão.
                </p>
            </div>
        </div>
    );
};

export default Jukebox;
