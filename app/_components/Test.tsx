"use client";
import { useEffect } from "react";

export default function MouseMove() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      console.log("Coordonnées de la souris :", e.clientX, e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="h-screen flex items-center justify-center">
      <p>Déplacez votre souris et observez les coordonnées dans la console !</p>
    </div>
  );
}
