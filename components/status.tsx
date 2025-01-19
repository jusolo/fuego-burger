"use client";

import React, { useState, useEffect } from "react";

const Status: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkIfOpen = () => {
      const now = new Date();
      const day = now.getDay();
      const hour = now.getHours();

      // Asumimos que el restaurante está abierto de lunes a domingo de 11:00 a 23:00
      setIsOpen(day >= 0 && day <= 6 && hour >= 11 && hour < 23);
    };

    checkIfOpen();
    const interval = setInterval(checkIfOpen, 60000); // Comprueba cada minuto

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`flex items-center ${
        isOpen ? "text-green-500" : "text-red-500"
      }`}
    >
      <div
        className={`w-3 h-3 rounded-full mr-2 ${
          isOpen ? "bg-green-500" : "bg-red-500"
        }`}
      ></div>
      <span>{isOpen ? "Abierto" : "Cerrado"}</span>
    </div>
  );
};

export default Status;
