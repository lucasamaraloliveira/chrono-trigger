import React from 'react';
import { WalkthroughStep } from '../types';
import { Skull, MapPin, Package } from 'lucide-react';

interface Props {
  step: WalkthroughStep;
}

const WalkthroughCard: React.FC<Props> = ({ step }) => {
  return (
    <div className="bg-white dark:bg-chrono-card border border-gray-200 dark:border-gray-700 rounded-xl p-6 mb-6 shadow-sm hover:shadow-md dark:shadow-none dark:hover:border-chrono-blue/50 transition-all">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-2">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{step.title}</h3>
        <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-chrono-dark border border-gray-200 dark:border-gray-600 text-xs font-mono text-chrono-blue dark:text-chrono-gold flex items-center gap-1">
          <ClockIcon /> {step.era}
        </span>
      </div>

      <div className="prose prose-slate dark:prose-invert max-w-none mb-6 text-sm leading-relaxed whitespace-pre-line">
        {step.content}
      </div>

      {step.items && step.items.length > 0 && (
        <div className="mb-4 bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg border border-gray-200 dark:border-gray-800">
          <h4 className="text-sm font-semibold text-chrono-blue mb-2 flex items-center gap-2">
            <Package size={16} /> Itens Importantes
          </h4>
          <div className="flex flex-wrap gap-2">
            {step.items.map((item, idx) => (
              <span key={idx} className="text-xs bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1 rounded border border-gray-200 dark:border-gray-700">
                {item}
              </span>
            ))}
          </div>
        </div>
      )}

      {step.boss && (
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-900/50 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Skull className="text-red-500" size={20} />
            <h4 className="font-bold text-red-600 dark:text-red-400">CHEFE: {step.boss.name}</h4>
            <span className="text-xs text-red-500 dark:text-red-300 ml-auto">Dificuldade: {step.boss.difficulty}</span>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 italic">
            {step.boss.strategy}
          </p>
        </div>
      )}
    </div>
  );
};

const ClockIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

export default WalkthroughCard;