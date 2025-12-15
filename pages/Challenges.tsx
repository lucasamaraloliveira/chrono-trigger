import React from 'react';
import { Flame, ShieldAlert, ZapOff, Hourglass } from 'lucide-react';

const Challenges: React.FC = () => {
    return (
        <div className="p-6 max-w-5xl mx-auto">
            <h1 className="text-3xl font-black text-gray-900 dark:text-chrono-gold mb-8 flex items-center gap-3">
                <Flame className="text-orange-600" size={32} />
                Desafios Hardcore
            </h1>

            <p className="text-gray-600 dark:text-gray-400 mb-8 font-medium text-lg">
                Já terminou todos os finais? Tente zerar o jogo com estas condições insanas.
            </p>

            <div className="space-y-6">

                {/* Challenge 1 */}
                <div className="bg-white dark:bg-chrono-card rounded-2xl p-6 shadow-lg border-l-8 border-red-500 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <ShieldAlert size={120} />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Low Level Run (LLR)</h2>
                    <div className="flex gap-2 mb-4">
                        <span className="bg-red-100 text-red-800 text-xs font-bold px-2 py-1 rounded">Extremo</span>
                        <span className="bg-gray-100 text-gray-800 text-xs font-bold px-2 py-1 rounded">Estratégia Pura</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        O objetivo é terminar o jogo com o <strong>menor nível possível</strong>. Você deve fugir de TODAS as batalhas obrigatórias não-boss. O nível de Crono e cia deve permanecer minúsculo.
                    </p>
                    <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                        <strong className="block mb-1 text-gray-800 dark:text-gray-200">Dica Chave:</strong>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Robo e suas Techs de cura são essenciais. Itens de consumo são sua vida.</p>
                    </div>
                </div>

                {/* Challenge 2 */}
                <div className="bg-white dark:bg-chrono-card rounded-2xl p-6 shadow-lg border-l-8 border-blue-500 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <ZapOff size={120} />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">No Accessories / Initial Equip</h2>
                    <div className="flex gap-2 mb-4">
                        <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded">Difícil</span>
                        <span className="bg-gray-100 text-gray-800 text-xs font-bold px-2 py-1 rounded">Habilidade</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Sem Rage Bands, sem Gold Studs, sem Prism Spectacles. Ou pior: use apenas as armas de madeira iniciais até matar Lavos.
                    </p>
                </div>

                {/* Challenge 3 */}
                <div className="bg-white dark:bg-chrono-card rounded-2xl p-6 shadow-lg border-l-8 border-yellow-500 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <Hourglass size={120} />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Speedrun (Any%)</h2>
                    <div className="flex gap-2 mb-4">
                        <span className="bg-yellow-100 text-yellow-800 text-xs font-bold px-2 py-1 rounded">Tempo</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        O recorde mundial é abaixo de 3 horas. Quão rápido você consegue chegar aos créditos? Requer conhecimento profundo de glitches e manipulação de RNG.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Challenges;
