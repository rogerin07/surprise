import { Heart } from "lucide-react";

const LandingButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center gap-2 px-8 py-4 bg-purple-600 rounded-full text-white font-semibold transition-all duration-300 ease-in-out hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-rose-400 animate-pulse"
      style={{
        boxShadow: "0 0 25px 8px rgba(147, 112, 219, 0.5)",
      }}
    >
      <Heart size={20} fill="white" />
      <span>CLIQUE AQUI</span>
    </button>
  );
};

export default LandingButton;
