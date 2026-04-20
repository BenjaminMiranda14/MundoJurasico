import React from "react";
import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import trexJungle from "@assets/trex_jungle.png";

export default function About() {
  return (
    <Layout>
      <div className="bg-background min-h-screen">
        {/* Story Content */}
        <section className="pt-28 py-16 px-4 md:px-6">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <img
                  src={trexJungle}
                  alt="El Rey del Jurásico"
                  className="rounded-xl shadow-xl border border-border w-full object-cover"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <p className="text-primary text-sm font-medium mb-3">Nuestra historia</p>
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-5 leading-tight">
                  Un lugar creado con amor para los chicos
                </h2>
                <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                  <p>
                    Salón Jurásico nació de una idea simple: crear un espacio donde los chicos pudieran festejar su día especial de una forma completamente diferente. Queríamos que cada visita fuera una aventura.
                  </p>
                  <p>
                    Nuestro equipo trabajó durante años en cada detalle, desde la ambientación con dinosaurios hasta los espacios pensados para que toda la familia se sienta cómoda y disfrute.
                  </p>
                  <p>
                    Hoy somos el salón de fiestas infantiles temático favorito de la zona, y seguimos creciendo con cada cumpleaños que celebramos.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-secondary mt-8 border-t border-border">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-12"
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-3">Nuestro equipo</h2>
              <p className="text-muted-foreground text-sm max-w-xl mx-auto">
                Las personas detrás de cada fiesta. Comprometidas con hacer que cada evento sea especial.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Alan Ríos", role: "Coordinador de eventos", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
                { name: "Elena Satti", role: "Chef y catering", img: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
                { name: "Marcos Grant", role: "Diseñador de ambientación", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
                { name: "Laura Hammond", role: "Atención al cliente", img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" }
              ].map((member, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group"
                >
                  <div className="overflow-hidden rounded-xl mb-3 border border-border">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-serif text-lg font-bold">{member.name}</h3>
                  <p className="text-primary text-xs mt-1">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
