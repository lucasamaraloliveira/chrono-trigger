import React, { useState } from 'react';
import { HelpCircle, CheckCircle, XCircle, RotateCcw, Trophy } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type Question = {
    id: number;
    question: string;
    options: string[];
    correct: number;
    fact: string;
};

const questionsPool: Question[] = [
    {
        id: 1,
        question: "Qual é o nome verdadeiro do personagem Frog?",
        options: ["Cyrus", "Glenn", "Tata", "Kino"],
        correct: 1,
        fact: "Glenn era o escudeiro de Cyrus antes de ser transformado por Magus."
    },
    {
        id: 2,
        question: "Qual é o elemento mágico de Ayla?",
        options: ["Fogo", "Terra", "Vento", "Nenhum"],
        correct: 3,
        fact: "Ayla nasceu antes da magia ser dada aos humanos por Spekkio/Lavos, então ela usa força física pura."
    },
    {
        id: 3,
        question: "Quem criou a máquina do tempo Epoch?",
        options: ["Lucca", "Gaspar", "Belthasar", "Queen Zeal"],
        correct: 2,
        fact: "Belthasar, o Guru da Razão, construiu a Epoch no futuro (2300 AD) enquanto enlouquecia."
    },
    {
        id: 4,
        question: "O que você precisa para salvar a mãe de Lucca?",
        options: ["Senha L-A-R-A", "Um Elixir", "Derrotar Gato", "Viajar para 600 AD"],
        correct: 0,
        fact: "Você deve digitar L-A-R-A (L1, X, R1, X no PS) para parar a máquina."
    },
    {
        id: 5,
        question: "Qual item é necessário para contratar o exército de fantasmas em 600 A.D.?",
        options: ["Nenhum, isso não existe", "Ghost Medal", "Hero Medal", "Masamune"],
        correct: 0,
        fact: "Isso é uma pegadinha! Não existe exército de fantasmas recrutável."
    },
    {
        id: 6,
        question: "Qual é o nome do robô que Robo deixa para replantar a floresta?",
        options: ["Atropos", "Prometheus", "Johnny", "Não tem nome"],
        correct: 1,
        fact: "Robo (codinome Prometheus) fica ele mesmo para replantar a floresta por 400 anos."
    },
    {
        id: 7,
        question: "Onde Crono e Marle se encontram pela primeira vez?",
        options: ["Guardia Castle", "Millennial Fair", "Truce Inn", "Fiona's Forest"],
        correct: 1,
        fact: "Eles se trombam literalmente na Millennial Fair, derrubando o pingente de Marle."
    },
    {
        id: 8,
        question: "Quem é o verdadeiro pai de Janus?",
        options: ["King Zeal", "Dalton", "Belthasar", "King Guardia"],
        correct: 0,
        fact: "Embora King Zeal não apareça no jogo, ele é o pai de Janus (Magus) e Schala."
    },
    {
        id: 9,
        question: "Qual Tech dupla combina o poder de Crono e Frog?",
        options: ["X-Strike", "Antipode", "Spire", "Ice Sword"],
        correct: 0,
        fact: "X-Strike é a técnica icônica onde ambos cortam o inimigo formando um X."
    },
    {
        id: 10,
        question: "O que acontece se você derrotar Lavos no Ocean Palace?",
        options: ["Ending: The Dream Project", "Game Over", "O jogo trava", "Você libera o New Game+"],
        correct: 0,
        fact: "Derrotar Lavos nessa luta super difícil libera o 'Dream Project', o final dos desenvolvedores."
    },
    {
        id: 11,
        question: "Qual o nome da espada definitiva de Crono?",
        options: ["Rainbow", "Masamune", "Swallow", "Kali Blade"],
        correct: 0,
        fact: "A Rainbow é forjada por Melchior usando a Rainbow Shell e a Sun Stone."
    },
    {
        id: 12,
        question: "Em qual era vive a tribo Ioka?",
        options: ["12000 B.C.", "65000000 B.C.", "600 A.D.", "2300 A.D."],
        correct: 1,
        fact: "Eles vivem na pré-história, lutando contra os Reptites."
    },
    {
        id: 13,
        question: "Qual personagem NÃO pode usar magia inicialmente?",
        options: ["Robo", "Lucca", "Marle", "Magus"],
        correct: 0,
        fact: "Robo não tem afinidade mágica natural, mas seu laser causa dano de Sombra (Shadow) em algumas versões."
    },
    {
        id: 14,
        question: "Quem é Spekkio?",
        options: ["O Deus da Guerra", "Um Nu disfarçado", "Mestre da Magia", "Filho de Lavos"],
        correct: 2,
        fact: "Spekkio é o Mestre da Guerra que ensina magia ao grupo no End of Time."
    },
    {
        id: 15,
        question: "O que Gato canta na Millennial Fair?",
        options: ["I am Gato, I have metal joints...", "Look at me, look at me...", "Crono is strong...", "Welcome to the Fair..."],
        correct: 0,
        fact: "A música icônica: 'I am Gato, I have metal joints, beat me up and earn 15 Silver Points!'"
    },
    {
        id: 16,
        question: "Qual o nome da nave de Dalton?",
        options: ["The Blackbird", "Epoch", "Wings of Time", "Dalton's Plane"],
        correct: 0,
        fact: "O Blackbird é a fortaleza voadora onde você perde seus equipamentos e itens."
    },
    {
        id: 17,
        question: "O que é o 'Time Bastard'?",
        options: ["Uma teoria sobre paradoxos", "Um insulto de Magus", "Uma arma secreta", "Um inimigo"],
        correct: 0,
        fact: "É a teoria (explicada em Chrono Cross) de que uma versão alternativa sua é enviada para o Darkness Beyond Time."
    },
    {
        id: 18,
        question: "Quem guarda o túmulo de Cyrus?",
        options: ["Frog", "Um fantasma", "Cyrus", "Masa e Mune"],
        correct: 1,
        fact: "O fantasma do próprio Cyrus assombra as ruínas até que Frog restaure sua honra."
    },
    {
        id: 19,
        question: "Qual item permite trocar de membros do grupo em qualquer lugar?",
        options: ["Time Egg", "Gate Key", "Sight Scope", "Não existe esse item"],
        correct: 3,
        fact: "Você só pode trocar membros no End of Time ou no mapa mundi, não existe item para isso em dungeons."
    },
    {
        id: 20,
        question: "Qual a cor do cabelo de Crono?",
        options: ["Azul", "Vermelho", "Loiro", "Preto"],
        correct: 1,
        fact: "O cabelo espetado vermelho de Crono é sua marca registrada desenhada por Toriyama."
    },
    {
        id: 21,
        question: "Quem é Alfador?",
        options: ["O gato de Magus", "O irmão de Schala", "O pai de Crono", "Um Guru"],
        correct: 0,
        fact: "Alfador é o gato roxo de Janus (Magus) que o segue em Zeal e depois no castelo."
    },
    {
        id: 22,
        question: "O que a Masamune representa?",
        options: ["Poder e Força", "Coragem e Sabedoria", "Vento e Trovão", "Bem e Mal"],
        correct: 1,
        fact: "Masa representa o Intelecto/Sabedoria e Mune representa a Coragem/Vontade? Na verdade, eles testam a Bravura do herói."
    },
    {
        id: 23,
        question: "Qual o nome da irmã de Lucca?",
        options: ["Lara", "Não tem irmã", "Schala", "Leene"],
        correct: 1,
        fact: "Lucca é filha única. Lara é o nome de sua mãe."
    },
    {
        id: 24,
        question: "O que o Nu pede para coçar?",
        options: ["A cabeça", "As costas", "O pé", "A barriga"],
        correct: 1,
        fact: "Em Zeal, um Nu pede para você coçar as costas dele, revelando um ponto secreto."
    },
    {
        id: 25,
        question: "Qual o prêmio máximo da corrida de Jetbike?",
        options: ["Power Tab", "Mid-Tonic", "1500 G", "Cat Food"],
        correct: 0,
        fact: "Vencer Johnny na corrida pode te dar Tabs ou Ethers."
    }
];

const Quiz: React.FC = () => {
    const [activeQuestions, setActiveQuestions] = useState<Question[]>([]);
    const [currentQ, setCurrentQ] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [isAnswered, setIsAnswered] = useState(false);

    // Shuffle and pick 5 questions on mount
    React.useEffect(() => {
        startNewQuiz();
    }, []);

    const startNewQuiz = () => {
        const shuffled = [...questionsPool].sort(() => 0.5 - Math.random());
        setActiveQuestions(shuffled.slice(0, 5));
        setCurrentQ(0);
        setScore(0);
        setShowResult(false);
        setSelectedOption(null);
        setIsAnswered(false);
    }

    const handleAnswer = (index: number) => {
        if (isAnswered) return;
        setSelectedOption(index);
        setIsAnswered(true);

        if (index === activeQuestions[currentQ].correct) {
            setScore(score + 1);
        }
    };

    const nextQuestion = () => {
        if (currentQ < activeQuestions.length - 1) {
            setCurrentQ(currentQ + 1);
            setSelectedOption(null);
            setIsAnswered(false);
        } else {
            setShowResult(true);
        }
    };

    if (activeQuestions.length === 0) return <div>Carregando...</div>;

    if (showResult) {
        return (
            <div className="p-6 max-w-2xl mx-auto text-center">
                <div className="bg-white dark:bg-chrono-card rounded-3xl p-12 shadow-2xl border-4 border-chrono-blue">
                    <Trophy size={64} className="mx-auto text-yellow-500 mb-6 animate-bounce" />
                    <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-2">Quiz Completado!</h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                        Você acertou <span className="font-bold text-chrono-blue text-2xl">{score}</span> de {activeQuestions.length}
                    </p>

                    <p className="mb-8 text-sm text-gray-500">
                        Que tal tentar de novo? Novas perguntas serão sorteadas!
                    </p>

                    <button
                        onClick={startNewQuiz}
                        className="flex items-center gap-2 mx-auto bg-chrono-blue hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-transform hover:scale-105"
                    >
                        <RotateCcw size={20} /> Tentar Novamente
                    </button>
                </div>
            </div>
        );
    }

    const question = activeQuestions[currentQ];

    return (
        <div className="p-6 max-w-3xl mx-auto">
            <h1 className="text-3xl font-black text-gray-900 dark:text-chrono-gold mb-8 flex items-center gap-3">
                <HelpCircle className="text-green-500" size={32} />
                Quiz do Guardião
            </h1>

            <div className="bg-white dark:bg-chrono-card rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                {/* Progress Bar */}
                <div className="w-full bg-gray-200 dark:bg-gray-700 h-2">
                    <div
                        className="bg-chrono-blue h-2 transition-all duration-300"
                        style={{ width: `${((currentQ + 1) / activeQuestions.length) * 100}%` }}
                    />
                </div>

                <div className="p-8">
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 block">
                        Pergunta {currentQ + 1} de {activeQuestions.length}
                    </span>
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-8 leading-tight">
                        {question.question}
                    </h2>

                    <div className="space-y-3">
                        {question.options.map((opt, idx) => {
                            let btnClass = "border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700";

                            if (isAnswered) {
                                if (idx === question.correct) btnClass = "bg-green-100 border-green-500 text-green-800 dark:bg-green-900/30 dark:text-green-300";
                                else if (idx === selectedOption) btnClass = "bg-red-100 border-red-500 text-red-800 dark:bg-red-900/30 dark:text-red-300";
                                else btnClass = "opacity-50 grayscale";
                            }

                            return (
                                <button
                                    key={idx}
                                    onClick={() => handleAnswer(idx)}
                                    disabled={isAnswered}
                                    className={`w-full text-left p-4 rounded-xl border-2 font-medium transition-all duration-200 flex justify-between items-center ${btnClass}`}
                                >
                                    {opt}
                                    {isAnswered && idx === question.correct && <CheckCircle size={20} className="text-green-600" />}
                                    {isAnswered && idx === selectedOption && idx !== question.correct && <XCircle size={20} className="text-red-600" />}
                                </button>
                            );
                        })}
                    </div>

                    <AnimatePresence>
                        {isAnswered && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-700"
                            >
                                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-4">
                                    <strong className="text-blue-800 dark:text-blue-300 block mb-1">Fato Curioso:</strong>
                                    <p className="text-sm text-blue-700 dark:text-blue-200">{question.fact}</p>
                                </div>
                                <button
                                    onClick={nextQuestion}
                                    className="w-full bg-chrono-blue hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition-colors shadow-lg shadow-blue-500/30"
                                >
                                    {currentQ < activeQuestions.length - 1 ? "Próxima Pergunta" : "Ver Resultado"}
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default Quiz;
