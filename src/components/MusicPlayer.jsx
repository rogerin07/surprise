import { useState, useEffect, useRef } from "react";
import { Pause, Play } from "lucide-react"; // 1. Importe o ícone de Play

const MusicPlayer = () => {
  const audioRef = useRef(null);

  // --- Nossos novos estados ---
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  // Função para formatar o tempo de segundos para MM:SS
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  // Função para tocar ou pausar a música
  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const audio = audioRef.current;

    // Inicia a música (autoplay)
    audio
      .play()
      .then(() => {
        setIsPlaying(true);
      })
      .catch((error) => {
        // O autoplay pode ser bloqueado, o usuário precisaria clicar para iniciar
        console.log("Autoplay foi prevenido pelo navegador:", error);
        setIsPlaying(false);
      });

    audio.volume = 0.5;

    // --- Funções para atualizar nosso estado ---
    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    // --- Adicionando os "ouvintes" de eventos ---
    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);

    // --- Função de limpeza ---
    // Remove os "ouvintes" quando o componente some para evitar erros
    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, []);

  // Calcula a porcentagem do progresso
  const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="w-full max-w-sm bg-gray-800 bg-opacity-50 backdrop-blur-sm p-3 rounded-lg flex items-center gap-4 shadow-lg">
      {/* Lembre-se de corrigir o caminho se necessário */}
      <audio ref={audioRef} src="/audio/planos.mp3" loop />

      <img
        src="/images/capa-album.jpeg"
        alt="Capa do Álbum"
        className="w-12 h-12 rounded"
      />

      <div className="flex-grow">
        <p className="font-bold text-sm">Planos</p>
        <p className="text-xs text-gray-400">BK, Luccas Carlis, Arit</p>

        {/* Barra de Progresso */}
        <div className="w-full bg-gray-600 rounded-full h-1 mt-1">
          <div
            className="bg-white h-1 rounded-full"
            style={{ width: `${progressPercentage}%` }} // A largura agora é dinâmica
          ></div>
        </div>

        {/* Tempo da Música */}
        <div className="flex justify-between text-xs text-gray-400 mt-1">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      {/* Botão de Play/Pause */}
      <button
        onClick={togglePlayPause}
        className="bg-white text-gray-900 p-2 rounded-full"
      >
        {isPlaying ? (
          <Pause className="fill-black w-4 h-4 cursor-pointer" />
        ) : (
          <Play className="fill-black w-4 h-4 cursor-pointer" />
        )}
      </button>
    </div>
  );
};

export default MusicPlayer;
