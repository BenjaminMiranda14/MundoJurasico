import React from "react";
import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Calendar, Star, Heart } from "lucide-react";
import dinoHall from "@assets/dino_hall.png";
import brachiosaurus from "@assets/brachiosaurus.png";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background z-10" />
          <img
            src={dinoHall}
            alt="Salón Jurásico decorado"
            className="w-full h-full object-cover opacity-60"
          />
        </div>

        <div className="container relative z-20 px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <p className="text-primary font-medium text-sm mb-4 tracking-wide">
              Salón de fiestas infantiles temático
            </p>
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-5 leading-tight">
              Fiestas que hacen <br />
              <span className="text-primary italic">rugir de alegría</span>
            </h1>
            <p className="font-sans text-base md:text-lg text-foreground/70 max-w-xl mx-auto mb-8">
              El lugar perfecto para que los chicos vivan una aventura prehistórica en su día especial.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/galeria">
                <Button variant="outline" size="lg" className="w-full sm:w-auto px-8 h-12 border-primary text-primary hover:bg-primary hover:text-background">
                  Ver galería
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-background border-t border-border/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart className="w-8 h-8 text-primary mb-4" />,
                title: "Una fiesta que nunca van a olvidar",
                desc: "Dinosaurios, selva y aventura en cada rincón. Decoración inmersiva pensada para que los chicos vivan algo único."
              },
              {
                icon: <Star className="w-8 h-8 text-primary mb-4" />,
                title: "Todo incluido, sin complicaciones",
                desc: "Nos ocupamos de la ambientación, el sonido y los detalles. Vos solo disfrutás de la fiesta."
              },
              {
                icon: <Calendar className="w-8 h-8 text-primary mb-4" />,
                title: "Eventos a tu medida",
                desc: "Desde cumpleaños de 15 hasta eventos familiares. Adaptamos el salón a lo que necesitás."
              }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="bg-card p-8 border border-border/50 rounded-xl hover:border-primary/40 transition-colors"
              >
                {feature.icon}
                <h3 className="font-serif text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About the salon */}
      <section className="py-20 bg-background border-t border-border/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-14">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:w-1/2"
            >
              <div className="relative max-w-md mx-auto lg:mx-0">
                <div className="absolute inset-0 bg-primary/15 translate-x-3 translate-y-3 rounded-xl" />
                <img
                  src={brachiosaurus}
                  alt="Braquiosaurio al atardecer"
                  className="relative z-10 w-full h-80 object-cover rounded-xl border border-border"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:w-1/2"
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 leading-tight">
                Un salón pensado para los chicos
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                Nuestras instalaciones combinan ambientación prehistórica con espacios cómodos y seguros para los más pequeños. Iluminación cálida, decoraciones de dinosaurios y todo lo que necesitás para una fiesta genial.
              </p>
              <ul className="space-y-3 mb-8 text-sm">
                {[
                  "Capacidad para hasta 250 invitados",
                  "Pista de baile con ambientación selvática",
                  "Zona infantil de juegos",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary block shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <Link href="/nosotros" className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:gap-3 transition-all">
                Conocer más sobre nosotros <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden bg-secondary border-t border-border/50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(164,120,44,0.12)_0%,transparent_70%)]" />
        <div className="container relative px-4 md:px-6 text-center max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-5">¿Listo para la fiesta?</h2>
            <p className="text-muted-foreground mb-8 text-sm leading-relaxed">
              Las fechas se llenan rápido. Consultá disponibilidad y armemos juntos la fiesta perfecta.
            </p>
            <Link href="/Contacto">
              <Button size="lg" className="px-10 h-12">
                Consultar disponibilidad
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
    </Layout>
  );
}
