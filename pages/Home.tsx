import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Star, Clock, Book } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="relative min-h-full flex flex-col">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden flex items-center justify-center bg-gray-900 dark:bg-gradient-to-b dark:from-chrono-dark dark:to-chrono-card">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/chrono/1920/1080')] bg-cover bg-center opacity-30 dark:opacity-20 blur-sm"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent dark:from-chrono-card"></div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-100 to-yellow-300 dark:from-chrono-gold dark:via-yellow-200 dark:to-chrono-gold mb-6 drop-shadow-lg">
            CHRONO TRIGGER
          </h1>
          <p className="text-lg md:text-2xl text-gray-100 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed font-light">
            O guia definitivo passo a passo. Viaje através das eras, domine as Techs e descubra todos os finais.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/walkthrough" 
              className="px-8 py-4 bg-chrono-blue hover:bg-blue-600 text-white font-bold rounded-lg transition-all transform hover:scale-105 shadow-lg shadow-blue-900/40 flex items-center justify-center gap-2"
            >
              <Book size={20} />
              Começar Detonado
            </Link>
            <Link 
              to="/characters" 
              className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur text-white font-bold rounded-lg transition-all border border-white/20 flex items-center justify-center gap-2"
            >
              Ver Personagens
            </Link>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="flex-1 bg-gray-50 dark:bg-chrono-card px-4 py-16 transition-colors">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<Clock className="text-chrono-gold" size={32} />}
            title="Detonado Completo"
            description="Guia passo a passo cobrindo todas as eras, chefes e itens secretos."
            link="/walkthrough"
          />
          <FeatureCard 
            icon={<Star className="text-chrono-accent" size={32} />}
            title="Techs & Magias"
            description="Lista completa de Double e Triple Techs, incluindo as secretas."
            link="/techs"
          />
          <FeatureCard 
            icon={<ChevronRight className="text-chrono-red" size={32} />}
            title="Todos os Finais"
            description="Guia detalhado de como obter os 13 finais diferentes do jogo."
            link="/endings"
          />
        </div>
      </div>
    </div>
  );
};

const FeatureCard: React.FC<{ icon: React.ReactNode, title: string, description: string, link: string }> = ({ icon, title, description, link }) => (
  <Link to={link} className="block group">
    <div className="bg-white dark:bg-chrono-dark p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-chrono-blue hover:shadow-lg dark:hover:border-chrono-blue transition-all h-full hover:-translate-y-1">
      <div className="mb-4 bg-gray-100 dark:bg-gray-800 w-16 h-16 rounded-xl flex items-center justify-center group-hover:bg-blue-50 dark:group-hover:bg-gray-700 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-chrono-blue transition-colors">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{description}</p>
    </div>
  </Link>
);

export default Home;