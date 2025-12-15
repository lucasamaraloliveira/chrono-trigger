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

const questions: Question[] = [
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
    }
];

const Quiz: React.FC = () => {
    const [currentQ, setCurrentQ] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [isAnswered, setIsAnswered] = useState(false);

    const handleAnswer = (index: number) => {
        if (isAnswered) return;
        setSelectedOption(index);
        setIsAnswered(true);

        if (index === questions[currentQ].correct) {
            setScore(score + 1);
        }
    };

    const nextQuestion = () => {
        if (currentQ < questions.length - 1) {
            setCurrentQ(currentQ + 1);
            setSelectedOption(null);
            setIsAnswered(false);
        } else {
            setShowResult(true);
        }
    };

    const resetQuiz = () => {
        setCurrentQ(0);
        setScore(0);
        setShowResult(false);
        setSelectedOption(null);
        setIsAnswered(false);
    };

    if (showResult) {
        return (
            <div className="p-6 max-w-2xl mx-auto text-center">
                <div className="bg-white dark:bg-chrono-card rounded-3xl p-12 shadow-2xl border-4 border-chrono-blue">
                    <Trophy size={64} className="mx-auto text-yellow-500 mb-6 animate-bounce" />
                    <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-2">Quiz Completado!</h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                        Você acertou <span className="font-bold text-chrono-blue text-2xl">{score}</span> de {questions.length}
                    </p>

                    <button
                        onClick={resetQuiz}
                        className="flex items-center gap-2 mx-auto bg-chrono-blue hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-transform hover:scale-105"
                    >
                        <RotateCcw size={20} /> Tentar Novamente
                    </button>
                </div>
            </div>
        );
    }

    const question = questions[currentQ];

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
                        style={{ width: `${((currentQ + 1) / questions.length) * 100}%` }}
                    />
                </div>

                <div className="p-8">
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 block">
                        Pergunta {currentQ + 1} de {questions.length}
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
                                    {currentQ < questions.length - 1 ? "Próxima Pergunta" : "Ver Resultado"}
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
