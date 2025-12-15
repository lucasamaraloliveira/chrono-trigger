
import React, { useState } from 'react';
import { Music, PlayCircle, PauseCircle, Mic2, Disc } from 'lucide-react';

const tracks = [
    { id: 1, title: "Chrono Trigger (Theme)", videoId: "S0Q0YQ1X9k0", desc: "O tema de abertura heroico. Versão da OST completa (SNES Classic).", mood: "Épico / Aventura" },
    { id: 2, title: "Peaceful Days", videoId: "Jc7h8B1QvF0", desc: "Toca na cidade de Truce. Versão Guitar Cover oficial da Square Enix Music.", mood: "Calmo / Nostálgico" },
    { id: 3, title: "Wind Scene", videoId: "sU14zIqFpqc", desc: "Mapa do mundo de 600 A.D. Uma das melodias mais amadas da história dos RPGs.", mood: "Melancólico" },
    { id: 4, title: "Frog's Theme", videoId: "9Z-HqWWxOgw", desc: "O tema de Glenn. Versão Jazz Arrangement oficial da Square Enix Music.", mood: "Heroico / Jazz" },
    { id: 5, title: "Magus Confronted", videoId: "1e5Qv62b-9o", desc: "A batalha contra Magus. Versão oficial Guitar Cover da Square Enix Music.", mood: "Tenso / Rock" },
    { id: 6, title: "Corridors of Time", videoId: "8n30_H15gN0", desc: "Tema de Zeal. Versão Piano Cover oficial por Yui Morishita.", mood: "Místico / Piano" },
    { id: 7, title: "To Far Away Times", videoId: "oH2uX-Z-oA4", desc: "O tema de encerramento. Versão Accordion & Irish Harp oficial.", mood: "Emocionante / Folk" }
];

const Jukebox: React.FC = () => {
    const [currentTrack, setCurrentTrack] = useState<number | null>(null);

    const activeTrack = tracks.find(t => t.id === currentTrack);

    return (
        <div className="p-6 max-w-5xl mx-auto">
            <h1 className="text-3xl font-black text-gray-900 dark:text-chrono-gold mb-8 flex items-center gap-3">
                <Music className="text-pink-500" size={32} />
                Jukebox (Guia Musical)
            </h1>

            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-3xl">
                A trilha sonora de Yasunori Mitsuda é um personagem à parte. Aqui estão as faixas essenciais que definem a alma do jogo.
            </p>

            <div className="grid lg:grid-cols-3 gap-8">

                {/* Playlist */}
                <div className="lg:col-span-2 space-y-4">
                    {tracks.map((track) => {
                        const isPlaying = currentTrack === track.id;
                        return (
                            <div
                                key={track.id}
                                onClick={() => setCurrentTrack(track.id)}
                                className={`cursor - pointer group p - 4 rounded - xl shadow - sm border transition - all flex gap - 4 items - start
                  ${isPlaying
                                        ? 'bg-purple-50 dark:bg-purple-900/20 border-purple-500 dark:border-purple-500 ring-1 ring-purple-500'
                                        : 'bg-white dark:bg-chrono-card border-gray-100 dark:border-gray-700 hover:border-chrono-blue dark:hover:border-chrono-blue'
                                    } `}
                            >
                                <div className={`p - 3 rounded - full transition - colors shrink - 0
                  ${isPlaying ? 'bg-purple-500 text-white' : 'bg-gray-100 dark:bg-gray-800 group-hover:bg-chrono-blue group-hover:text-white'}
`}>
                                    {isPlaying ? <PauseCircle size={24} /> : <PlayCircle size={24} />}
                                </div>
                                <div>
                                    <h3 className={`font - bold transition - colors ${isPlaying ? 'text-purple-700 dark:text-purple-300' : 'text-gray-900 dark:text-white group-hover:text-chrono-blue'} `}>
                                        {track.title}
                                    </h3>
                                    <span className="text-xs font-bold uppercase text-pink-500 dark:text-pink-400 mb-2 block">{track.mood}</span>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        {track.desc}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Player Sticky/Fixed Area */}
                <div className="lg:col-span-1">
                    <div className="sticky top-6 bg-white dark:bg-chrono-card p-6 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700">
                        <div className="flex items-center gap-3 mb-6 border-b border-gray-100 dark:border-gray-700 pb-4">
                            <Disc className={`text - chrono - blue ${currentTrack ? 'animate-spin-slow' : ''} `} size={32} />
                            <div>
                                <h3 className="font-bold text-gray-900 dark:text-white">Tocando Agora</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    {activeTrack ? activeTrack.title : 'Selecione uma faixa'}
                                </p>
                            </div>
                        </div>

                        {activeTrack ? (
                            <div className="aspect-video w-full rounded-lg overflow-hidden bg-black shadow-inner">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src={`https://www.youtube.com/embed/${activeTrack.videoId}?autoplay=1`}
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe >
                            </div >
                        ) : (
                            <div className="aspect-video w-full rounded-lg bg-gray-100 dark:bg-gray-800 flex flex-col items-center justify-center text-gray-400">
                                <Music size={48} className="mb-2 opacity-50" />
                                <span className="text-xs font-medium">Aguardando Seleção</span>
                            </div>
                        )}

                        <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl">
                            <h4 className="text-sm font-bold text-blue-800 dark:text-blue-300 mb-1 flex items-center gap-2">
                                <Mic2 size={14} /> Curiosidade
                            </h4>
                            <p className="text-xs text-blue-700 dark:text-blue-200 leading-relaxed">
                                {activeTrack
                                    ? "Mitsuda queria criar música que não soasse como 'música de jogo', mas sim como uma extensão do mundo."
                                    : "Yasunori Mitsuda trabalhou tanto na trilha que teve úlceras estomacais. Nobuo Uematsu ajudou a finalizar."}
                            </p>
                        </div>
                    </div >
                </div >

            </div >
        </div >
    );
};

export default Jukebox;
