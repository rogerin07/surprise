import LoveCounter from "./LoveCounter";
import MusicPlayer from "./MusicPlayer";
import FloatingHearts from "./FloatingHearts";
import { Heart } from "lucide-react";
import ImageCarousel from "./ImageCarousel";

// 1. O componente agora recebe 'audioRef' como propriedade
const MainContent = ({ audioRef }) => {
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center gap-8 p-4">
      <FloatingHearts />

      <div className="z-10 flex flex-col items-center gap-8 animate-fade-in">
        <MusicPlayer audioRef={audioRef} />

        <div className="bg-gray-800 bg-opacity-40 p-2 rounded-[3rem] shadow-lg">
          <div className="bg-gray-800 bg-opacity-40 p-2 rounded-[3rem] shadow-lg">
            <ImageCarousel />
          </div>
        </div>

        <LoveCounter />

        <div className="max-w-xl text-center text-gray-300 leading-relaxed">
          <p>
            A cada dia que passa, meu coração se enche mais de carinho e
            admiração por você. Cada sorriso seu ilumina o meu mundo, e cada
            abraço me faz sentir que estou exatamente onde deveria estar. Você é
            a razão dos meus melhores pensamentos, e tudo ao seu lado se torna
            mais bonito e significativo.
          </p>
          <p className="mt-4 font-bold text-red-400 flex items-center justify-center gap-2">
            Eu te amo mil bilhões, Amo te amar muitcho minha Ellen
            <Heart className="h-8 w-8 fill-red-400 animate-pulse drop-shadow-[0_0_6px_rgba(255,0,0,0.6)]" />
          </p>
          <p className="font-bold text-red-400 flex items-center justify-center gap-2">
            MUITCHOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
