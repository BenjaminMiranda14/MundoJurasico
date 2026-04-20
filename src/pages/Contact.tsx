import React, { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const WHATSAPP_NUMBER = "5491155554321";
const WHATSAPP_MSG = encodeURIComponent("Hola! Quisiera consultar disponibilidad para una fiesta en Salón Jurásico.");

export default function Contact() {
  const { toast } = useToast();
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast({ title: "Mensaje enviado", description: "Te respondemos a la brevedad." });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <Layout>
      <div className="bg-background min-h-screen pt-24 pb-20">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-xl mx-auto mb-14"
          >
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-3">Contacto</h1>
            <p className="text-muted-foreground text-sm">
              Estamos disponibles para responder tus consultas y ayudarte a organizar la fiesta perfecta.
            </p>
          </motion.div>

          {/* WhatsApp CTA — prominent */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="bg-[#25d366]/10 border border-[#25d366]/30 rounded-xl p-8 mb-12 flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-[#25d366] flex items-center justify-center shrink-0">
                <MessageCircle className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="font-serif text-xl font-bold mb-1">Reservas por WhatsApp</h2>
                <p className="text-muted-foreground text-sm">
                  La forma más rápida de consultar disponibilidad y reservar tu fecha es por WhatsApp. Te respondemos en minutos.
                </p>
              </div>
            </div>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0"
            >
              <Button className="bg-[#25d366] hover:bg-[#1da851] text-white px-7 h-11 font-medium gap-2 whitespace-nowrap">
                <MessageCircle className="w-4 h-4" />
                Escribir por WhatsApp
              </Button>
            </a>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <h2 className="font-serif text-2xl font-bold mb-7">Información de contacto</h2>

              <div className="space-y-6 text-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Dirección</h3>
                    <p className="text-muted-foreground">Av. de los Dinosaurios 1234<br />Ciudad, CP 1000</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Teléfono / WhatsApp</h3>
                    <p className="text-muted-foreground">+54 11 5555-4321</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Correo electrónico</h3>
                    <p className="text-muted-foreground">info@salonjurasico.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Horarios de atención</h3>
                    <p className="text-muted-foreground">Lunes a Viernes: 10:00 – 19:00<br />Sábados: 10:00 – 14:00</p>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="mt-8 rounded-xl overflow-hidden border border-border h-52 relative bg-secondary">
                <div className="absolute inset-0 flex items-center justify-center flex-col text-muted-foreground gap-2">
                  <MapPin className="w-8 h-8 opacity-30" />
                  <p className="text-xs">Av. de los Dinosaurios 1234</p>
                </div>
                <div className="absolute bottom-3 right-3 flex flex-col gap-1">
                  <div className="w-7 h-7 bg-background border border-border rounded flex items-center justify-center text-sm shadow cursor-not-allowed">+</div>
                  <div className="w-7 h-7 bg-background border border-border rounded flex items-center justify-center text-sm shadow cursor-not-allowed">-</div>
                </div>
              </div>
            </motion.div>

            {/* Contact form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="bg-card p-8 rounded-xl border border-border"
            >
              <h2 className="font-serif text-2xl font-bold mb-2">Envianos un mensaje</h2>
              <p className="text-muted-foreground text-sm mb-7">Para consultas generales que no requieran respuesta inmediata.</p>

              <form onSubmit={handleSubmit} className="space-y-5 text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="c_name">Nombre</Label>
                    <Input id="c_name" required placeholder="Tu nombre" className="bg-background" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="c_phone">Teléfono</Label>
                    <Input id="c_phone" type="tel" placeholder="+54 11 ..." className="bg-background" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="c_email">Email</Label>
                  <Input id="c_email" type="email" required placeholder="tu@email.com" className="bg-background" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="c_message">Mensaje</Label>
                  <Textarea
                    id="c_message"
                    required
                    placeholder="¿En qué te podemos ayudar?"
                    className="min-h-[130px] bg-background resize-y"
                  />
                </div>
                <Button type="submit" className="w-full h-11" disabled={sending}>
                  {sending ? "Enviando..." : "Enviar mensaje"}
                </Button>
              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </Layout>
  );
}
