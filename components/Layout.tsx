import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import {
  BookOpen,
  Users,
  Sword,
  Clock,
  Menu,
  X,
  Gamepad2,
  ListEnd,
  Sun,
  Moon,
  Volume2,
  VolumeX,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
} from 'lucide-react';

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

const Layout: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  // Theme State
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined' && localStorage.getItem('theme')) {
      return localStorage.getItem('theme');
    }
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'dark'; // Default to dark
  });

  // Music State
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [volume, setVolume] = useState(30); // Default volume 30%
  const [showVolumePopup, setShowVolumePopup] = useState(false);
  const playerRef = useRef<any>(null);

  useEffect(() => {
    // Load YouTube IFrame API
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    }

    // Initialize player when API is ready
    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player('youtube-player', {
        height: '0',
        width: '0',
        videoId: 'cFK8fhTsViU', // Corridors of Time
        playerVars: {
          'autoplay': 0,
          'controls': 0,
          'loop': 1,
          'playlist': 'cFK8fhTsViU'
        },
        events: {
          'onReady': (event: any) => {
            event.target.setVolume(volume);
          }
        }
      });
    };

    return () => {
      // Cleanup can be tricky with external scripts, keeping it simple
    }
  }, []);

  // Sync volume with player
  useEffect(() => {
    if (playerRef.current && playerRef.current.setVolume) {
      playerRef.current.setVolume(volume);
    }
  }, [volume]);

  // Sync playback state with player
  useEffect(() => {
    if (playerRef.current && playerRef.current.playVideo) {
      if (isMusicPlaying) {
        playerRef.current.playVideo();
      } else {
        playerRef.current.pauseVideo();
      }
    }
  }, [isMusicPlaying]);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme || 'dark');
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const toggleMusic = () => {
    setIsMusicPlaying(!isMusicPlaying);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseInt(e.target.value);
    setVolume(newVolume);
    if (newVolume > 0 && !isMusicPlaying) {
      setIsMusicPlaying(true);
    }
  };

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  const navItems = [
    { path: '/', label: 'Início', icon: <Gamepad2 size={20} /> },
    { path: '/walkthrough', label: 'História & Guia', icon: <BookOpen size={20} /> },
    { path: '/characters', label: 'Personagens', icon: <Users size={20} /> },
    { path: '/techs', label: 'Techs & Combos', icon: <Sword size={20} /> },
    { path: '/endings', label: 'Finais', icon: <ListEnd size={20} /> },
  ];

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50 dark:bg-chrono-dark text-gray-900 dark:text-gray-100 transition-colors duration-200">

      {/* Hidden Music Player Container - Must exist in DOM for API to work */}
      <div id="youtube-player" className="absolute opacity-0 pointer-events-none" />

      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 w-full bg-white/90 dark:bg-chrono-card/90 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700 p-4 flex justify-between items-center transition-colors">
        <div className="font-bold text-xl tracking-wider text-chrono-blue dark:text-chrono-gold flex items-center gap-2">
          <Clock className="animate-pulse" /> CHRONO
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={toggleMusic}
            className={`p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${isMusicPlaying ? 'text-chrono-blue dark:text-chrono-gold' : 'text-gray-400'}`}
            aria-label="Alternar Música"
          >
            {isMusicPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
          </button>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-gray-600 dark:text-gray-300"
            aria-label="Alternar Tema"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={toggleMenu} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors text-gray-600 dark:text-gray-300">
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Sidebar Navigation */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-40 bg-white dark:bg-chrono-card 
        border-r lg:border-none border-gray-200 dark:border-gray-700 
        transform transition-all duration-300 ease-in-out flex flex-col
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        ${isCollapsed ? 'lg:w-20' : 'lg:w-64'}
        lg:m-4 lg:rounded-2xl lg:shadow-2xl lg:h-[calc(100vh-2rem)]
      `}>
        <div className="h-full flex flex-col relative">

          {/* Collapse Toggle Button */}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="hidden lg:flex absolute -right-3 top-9 bg-white dark:bg-chrono-blue text-chrono-blue dark:text-white rounded-full p-1 shadow-md border border-gray-100 dark:border-gray-600 hover:scale-110 transition-transform z-50"
          >
            {isCollapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
          </button>

          <div className={`p-6 hidden lg:flex items-center gap-3 font-bold text-2xl tracking-wider text-gray-800 dark:text-chrono-gold border-b border-gray-200 dark:border-gray-700/50 transition-all duration-300 ${isCollapsed ? 'justify-center px-2' : ''}`}>
            <Clock className={`text-chrono-blue transition-all duration-300 ${isCollapsed ? 'w-8 h-8' : ''}`} />
            <span className={`transition-all duration-300 overflow-hidden whitespace-nowrap ${isCollapsed ? 'w-0 opacity-0 hidden' : 'w-auto opacity-100'}`}>
              TRIGGER
            </span>
          </div>

          <nav className="flex-1 overflow-y-auto overflow-x-hidden py-6 px-3 space-y-2 mt-14 lg:mt-0 scrollbar-thin">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={closeMenu}
                title={isCollapsed ? item.label : ''}
                className={({ isActive }) => `
                  flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 whitespace-nowrap
                  ${isActive
                    ? 'bg-blue-50 dark:bg-gradient-to-r dark:from-chrono-blue/20 dark:to-transparent text-chrono-blue border-l-4 border-chrono-blue font-semibold'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'}
                  ${isCollapsed ? 'justify-center px-0' : ''}
                `}
              >
                <div className="min-w-[20px]">{item.icon}</div>
                <span className={`font-medium transition-all duration-300 ${isCollapsed ? 'w-0 opacity-0 hidden' : 'w-auto opacity-100'}`}>
                  {item.label}
                </span>
              </NavLink>
            ))}
          </nav>

          <div className={`p-4 border-t border-gray-200 dark:border-gray-700/50 flex flex-col gap-4 relative transition-all duration-300 ${isCollapsed ? 'items-center' : ''}`}>
            {!isCollapsed && (
              <div className="text-xs text-center text-gray-500 dark:text-gray-500 whitespace-nowrap overflow-hidden">
                Guia v1.1
              </div>
            )}

            <div className={`flex gap-2 items-center ${isCollapsed ? 'flex-col' : 'justify-center'}`}>
              {/* Volume Control Container */}
              <div className="relative group">
                {/* Volume Popup */}
                <div className={`
                    absolute bottom-full ${isCollapsed ? 'left-full ml-2 mb-0' : 'left-1/2 -translate-x-1/2 mb-4'} p-4 
                    bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700
                    transition-all duration-200 flex flex-col items-center gap-3 z-50
                    ${showVolumePopup ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}
                  `}>
                  <div className="relative h-24 w-6 flex items-center justify-center">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={volume}
                      onChange={handleVolumeChange}
                      className="
                          -rotate-90 w-24 h-1.5 
                          bg-gray-200 dark:bg-gray-700 
                          rounded-lg appearance-none cursor-pointer 
                          accent-chrono-blue
                          absolute
                        "
                    />
                  </div>

                  {/* Play/Pause Button inside Popup */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent closing popup if needed
                      toggleMusic();
                    }}
                    className="p-1.5 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-chrono-blue dark:text-chrono-gold transition-colors"
                  >
                    {isMusicPlaying ? <Pause size={16} fill="currentColor" /> : <Play size={16} fill="currentColor" />}
                  </button>

                  <div className="text-xs font-semibold text-gray-500 dark:text-gray-400">
                    {volume}%
                  </div>
                </div>

                <button
                  onClick={() => setShowVolumePopup(!showVolumePopup)}
                  className={`p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${isMusicPlaying ? 'text-chrono-blue dark:text-chrono-gold' : 'text-gray-400 dark:text-gray-600'}`}
                  title="Ajustar Volume"
                >
                  {isMusicPlaying ? <Volume2 size={isCollapsed ? 20 : 18} /> : <VolumeX size={isCollapsed ? 20 : 18} />}
                </button>
              </div>

              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-400"
                title="Alternar Tema"
              >
                {theme === 'dark' ? <Sun size={isCollapsed ? 20 : 18} /> : <Moon size={isCollapsed ? 20 : 18} />}
              </button>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto relative scroll-smooth w-full p-0 lg:py-4 lg:pr-4">
        <div className={`
          min-h-full transition-all duration-300
          ${isCollapsed ? '' : ''}
          bg-white dark:bg-chrono-card rounded-none lg:rounded-2xl shadow-none lg:shadow-2xl overflow-hidden border-l border-gray-200 dark:border-gray-700/50
        `}>
          <div className="pt-20 lg:pt-0 min-h-full">
            <Outlet />
          </div>
        </div>
      </main>

      {/* Overlay for mobile */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={closeMenu}
        />
      )}
    </div>
  );
};

export default Layout;