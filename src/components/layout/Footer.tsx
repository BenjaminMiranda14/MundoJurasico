import React from "react";
import { Link } from "wouter";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a241e] border-t border-white/10 pt-12 pb-8 text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center items-center gap-2 mb-4">
          <span className="text-2xl">🦕</span>
          <span className="font-serif text-xl font-bold text-[#eab308]">Salón Jurásico</span>
        </div>
        <p className="text-gray-500 text-xs uppercase tracking-widest">
          © {currentYear} Salón Jurásico — Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
