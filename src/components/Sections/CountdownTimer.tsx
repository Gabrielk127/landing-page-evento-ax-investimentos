"use client";

import { useState, useEffect } from "react";

interface TimeLeft {
  dias: number;
  horas: number;
  mins: number;
  segs: number;
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | Record<string, never>>(
    {}
  ); // Inicia vazio
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Indica que o componente foi montado no lado do cliente
    setTimeLeft(calculateTimeLeft());
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, mounted]);

  function calculateTimeLeft(): TimeLeft | Record<string, never> {
    const difference = +new Date("2024-10-09") - +new Date();
    let timeLeft: TimeLeft | Record<string, never> = {};

    if (difference > 0) {
      timeLeft = {
        dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
        horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        mins: Math.floor((difference / 1000 / 60) % 60),
        segs: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  const timerComponents = Object.keys(timeLeft).map((interval) => {
    const value = (timeLeft as TimeLeft)[interval as keyof TimeLeft];
    if (value === undefined) return null;

    return (
      <div key={interval} className="flex flex-col items-center">
        <span className="text-white text-4xl sm:text-6xl font-semibold">
          {value.toString().padStart(2, "0")}
        </span>
        <span className="text-white text-sm sm:text-base">
          {interval.charAt(0).toUpperCase() + interval.slice(1)}
        </span>
      </div>
    );
  });

  if (!mounted) return null; // Não renderiza até que o componente esteja montado

  return (
    <div className="bg-black text-white p-6 text-center">
      <h2 className="text-xl sm:text-2xl mb-4 font-bold lg:text-2xl xl:text-3xl xl:pb-8">
        FALTAM
      </h2>
      <div className="bg-yellow-500 text-black text-2xl sm:text-4xl lg:text-6xl font-bold p-4 rounded-lg inline-flex space-x-4 sm:space-x-6 mb-4 justify-center">
        {timerComponents.length ? (
          timerComponents.reduce((prev, curr, index) => (
            <>
              {prev}
              {index !== 0 && <span className="text-white">:</span>}
              {curr}
            </>
          ))
        ) : (
          <span>Tempo esgotado!</span>
        )}
      </div>
      <p className="text-lg sm:text-xl font-bold leading-tight lg:text-2xl xl:text-3xl xl:pt-8">
        PARA O EVENTO QUE VAI
        <br />
        MUDAR SEUS INVESTIMENTOS
      </p>
    </div>
  );
}
