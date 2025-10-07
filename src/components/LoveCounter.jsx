import { useEffect, useState } from "react";

const startDate = new Date("2025-04-05T18:05:00");

const LoveCounter = () => {
  const [duration, setDuration] = useState({
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      let diff = now - startDate;

      const months = Math.floor(diff / (1000 * 60 * 60 * 24 * (365.25 / 12)));
      diff -= months * (1000 * 60 * 60 * 24 * (365.25 / 12));
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      diff -= days * (1000 * 60 * 60 * 24);
      const hours = Math.floor(diff / (1000 * 60 * 60));
      diff -= hours * (1000 * 60 * 60);
      const minutes = Math.floor(diff / (1000 * 60));
      diff -= minutes * (1000 * 60);
      const seconds = Math.floor(diff / 1000);

      setDuration({ months, days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-center text-gray-300 border-solid border-2 border-pink-400 p-4 rounded-lg bg-gray-900 bg-opacity-50 backdrop-blur-sm shadow-lg max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-2">Eu te amo há:</h2>
      <p className="text-lg">
        {duration.months} meses, {duration.days} dias, {duration.hours} horas, {duration.minutes} minutos e {duration.seconds}{" "}
        segundos
      </p>
    </div>
  );
};

export default LoveCounter;
