import { useState, useRef } from "react"; // 1. Importe o useRef
import LandingButton from "./components/LandingButton";
import MainContent from "./components/MainContent";

function App() {
  const [isRevealed, setIsRevealed] = useState(false);
  const audioRef = useRef(null); // 2. Crie a referência para o áudio aqui

  const handleReveal = () => {
    setIsRevealed(true);
    // 3. Chame o .play() diretamente na ação do usuário!
    if (audioRef.current) {
      audioRef.current
        .play()
        .catch((e) => console.error("Erro ao tocar áudio:", e));
    }
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-950 text-white font-sans overflow-hidden">
      {!isRevealed ? (
        <LandingButton onClick={handleReveal} />
      ) : (
        <MainContent audioRef={audioRef} />
      )}
    </main>
  );
}

export default App;
