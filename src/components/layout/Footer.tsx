import React from "react";
import { Link } from "wouter";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary border-t border-border pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          
          {/* LOGO + DESCRIPCIÓN */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🦕</span>
              <span className="font-serif text-xl font-bold text-primary">
                Salón Jurásico
              </span>
            </Link>

            <p className="text-muted-foreground text-sm max-w-xs leading-relaxed mb-5">
              El salón de fiestas temático más divertido para los más pequeños.
              Hacemos que cada cumpleaños sea una aventura prehistórica.
            </p>
          </div>

          {/* PÁGINAS */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Páginas</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/galeria" className="hover:text-primary transition-colors">
                  Galería
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-primary transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTACTO */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>Av. de los Dinosaurios 1234, Ciudad</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span>+54 11 5555-4321</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <span>info@salonjurasico.com</span>
              </li>
            </ul>
          </div>

        </div> {/* FIN GRID */}

        {/* COPYRIGHT */}
        <div className="border-t border-border pt-6 text-center text-xs text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Salón Jurásico. Todos los derechos reservados.
          </p>
        </div>

      </div> {/* FIN CONTAINER */}
    </footer>
  );
}