import LoveCounter from "./LoveCounter";
import MusicPlayer from "./MusicPlayer";
import FloatingHearts from "./FloatingHearts";
import { Heart } from "lucide-react";
import ImageCarousel from "./ImageCarousel";

// 1. O componente agora recebe 'audioRef' como propriedade
const MainContent = ({ audioRef }) => {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center gap-6 md:gap-8 p-4 overflow-y-auto">
      <FloatingHearts />

      <div className="z-10 flex flex-col items-center gap-6 md:gap-8 animate-fade-in w-full">
        <MusicPlayer audioRef={audioRef} />

        <div className="bg-gray-800 bg-opacity-40 p-3 rounded-[3.25rem] shadow-lg">
          <div className="bg-gray-800 bg-opacity-40 rounded-[3.25rem] shadow-lg">
            <ImageCarousel />
          </div>
        </div>

        <LoveCounter />

        <div className="w-full max-w-lg md:max-w-xl text-center text-gray-300 leading-relaxed text-sm sm:text-base">
          <p>
            Mais um dia de comemoração, mas não qualquer comemoração. Hoje se completa mais um mês que me apaixonei e passei a te amar
            loucamente. Desde o primeiro dia que te vi e te conheci pessoalmente, tomei a decisão na mente que te queria ter como minha, meu amor,
            minha vida, minha companheira, minha melhor amiga, minha amante, minha futura esposa, minha pretinha, meu tudo.
            Você é a pessoa mais extramaravilhosamenteperfeitaamaismaisgostosadouniverso, te admiro muito amor, pela sua inteligência, pela sua beleza,
            pela sua elegância, e principalmente pela mulher forte e resiliente que você é, por aguentar muitas dificuldades sozinha, e por não desistir mesmo 
            tendo muitos motivos para desitir, você ainda continua caminhando. Agradeço por ter alguém tão incrivél como você na minha vida, e por me fazer a pessoa mais feliz do mundo.
            Quero te fazer feliz assim como você me faz feliz, quero te amar e cuidar de você todos os dias da minha vida, quero ser o motivo do seu sorriso, e como amo esse sorriso. Quero ser seu tudo
            assim como você é o meu tudo. Eu te amo muitcho minha futura Ellen de Oliveira Bezerra, meu amor.
          </p>
          <p className="mt-4 font-bold text-red-400 flex items-center justify-center gap-2 flex-wrap text-base sm:text-lg">
            Eu te amo mil bilhões, amo te amar 
            <Heart className="h-8 w-8 fill-red-400 animate-pulse drop-shadow-[0_0_6px_rgba(255,0,0,0.6)]" />
          </p>
          <p className="font-bold text-red-400 flex items-center justify-center gap-2 break-words">
            MUITCHOOOOOOOOOOOOOOOOOOOOOOO
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
