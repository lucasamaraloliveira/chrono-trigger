import React from 'react';
import { BookOpen, Gamepad, AlertCircle, Heart } from 'lucide-react';

const sequels = [
    {
        title: "Radical Dreamers (1996)",
        platform: "Satellaview (SNES)",
        desc: "Uma aventura de texto (Visual Novel) lançada apenas no Japão via satélite. Conta uma história alternativa onde Serge, Kid e Magil (Magus) infiltram a Viper Manor. Serve de protótipo para Chrono Cross.",
        status: "Oficial (Incluso na Chrono Cross: Radical Dreamers Edition)"
    },
    {
        title: "Chrono Cross (1999)",
        platform: "PlayStation 1",
        desc: "A sequência oficial. Polêmica por suas conexões complexas e às vezes trágicas com o elenco original. Apresenta 45 personagens jogáveis e um sistema de batalha focado em elementos (Field Effect).",
        status: "Oficial"
    },
    {
        title: "Chrono Break (Cancelado)",
        platform: "N/A",
        desc: "Marca registrada registrada pela Square em 2001. O projeto nunca viu a luz do dia, mas confirmou que havia planos para um terceiro jogo.",
        status: "Cancelado"
    }
];

const fanWorks = [
    {
        title: "Crimson Echoes (Romhack)",
        desc: "Talvez o projeto de fã mais famoso. Uma interquel que conecta Trigger e Cross, explicando o que aconteceu com o elenco original (e o destino de Magus). Recebeu uma carta de Cease & Desist da Square dias antes do lançamento, mas vazou na internet.",
        type: "Sequência Não-Oficial"
    },
    {
        title: "Flames of Eternity (Romhack)",
        desc: "Baseado no código vazado de Crimson Echoes, esta versão tentou polir e finalizar o jogo, embora tenha gerado controvérsias na comunidade sobre mudanças no script original do time CE.",
        type: "Fork de Crimson Echoes"
    },
    {
        title: "Prophet's Guile (Romhack)",
        desc: "Uma curta mas excelente aventura que mostra a ascensão de Magus em Zeal após ser sugado pelo portal no castelo de Ozzie. Foca na história e dificuldade elevada.",
        type: "Midquel"
    },
    {
        title: "Chrono Trigger+ (Romhack)",
        desc: "Uma hack focada em 'Quality of Life'. Adiciona conteúdo beta restaurado, novas áreas (como 1999 AD explorável) e balanceamento, mantendo a história original intacta.",
        type: "Enhancement"
    }
];

const Legacy: React.FC = () => {
    return (
        <div className="p-6 max-w-5xl mx-auto">
            <h1 className="text-3xl font-black text-gray-900 dark:text-chrono-gold mb-8 flex items-center gap-3">
                <BookOpen className="text-chrono-blue" size={32} />
                Legado & Universo Expandido
            </h1>

            <p className="text-gray-600 dark:text-gray-400 mb-10 max-w-3xl">
                A história não acabou na tela de fim. Explore as sequências oficiais, os projetos cancelados e as obras lendárias criadas pelos fãs.
            </p>

            {/* Official Sequels */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
                    <Gamepad className="text-purple-500" /> Sequências Oficiais
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {sequels.map((item, idx) => (
                        <div key={idx} className="bg-white dark:bg-chrono-card p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-chrono-gold mb-1">{item.title}</h3>
                            <span className="text-xs font-bold text-gray-500 uppercase block mb-3">{item.platform}</span>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{item.desc}</p>
                            <span className={`text-xs px-2 py-1 rounded font-bold 
                        ${item.status === 'Cancelado' ? 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400' : 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400'}`}>
                                {item.status}
                            </span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Fan Works */}
            <section>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
                    <Heart className="text-pink-500" /> Obras de Fãs (Romhacks)
                </h2>
                <div className="space-y-4">
                    {fanWorks.map((work, idx) => (
                        <div key={idx} className="group relative bg-gray-50 dark:bg-gray-800/50 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-chrono-blue dark:hover:border-chrono-blue transition-colors">
                            <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between mb-2">
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-chrono-blue transition-colors">
                                    {work.title}
                                </h3>
                                <span className="text-xs font-bold bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-3 py-1 rounded-full self-start md:self-auto">
                                    {work.type}
                                </span>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-4xl">
                                {work.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            <div className="mt-12 border-t border-gray-200 dark:border-gray-700 pt-6">
                <div className="flex gap-4 items-start text-gray-500 text-sm italic">
                    <AlertCircle size={20} className="shrink-0" />
                    <p>
                        Aviso: A Chrono Bible não hospeda e não fornece links para download de ROMs ou patches não-oficiais. Esta página serve apenas como documentação histórica e cultural do impacto duradouro de Chrono Trigger.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Legacy;
