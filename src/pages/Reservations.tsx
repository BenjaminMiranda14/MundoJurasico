import React, { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export default function Reservations() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "¡Solicitud enviada!",
        description: "Te vamos a contactar pronto para confirmar tu fecha.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <Layout>
      <div className="bg-background min-h-screen relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[40vh] bg-secondary z-0 border-b border-border" />

        <div className="container mx-auto px-4 md:px-6 relative z-10 pt-24 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-xl mx-auto mb-10"
          >
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-3">Reservá tu fecha</h1>
            <p className="text-muted-foreground text-sm">
              Completá el formulario y nos ponemos en contacto para confirmar disponibilidad y armar juntos la fiesta perfecta.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="max-w-2xl mx-auto bg-card p-8 md:p-10 rounded-xl shadow-lg border border-border"
          >
            <form onSubmit={handleSubmit} className="space-y-6 text-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre completo</Label>
                  <Input id="name" required placeholder="Tu nombre" className="bg-background border-border" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Correo electrónico</Label>
                  <Input id="email" type="email" required placeholder="tu@email.com" className="bg-background border-border" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Teléfono</Label>
                  <Input id="phone" type="tel" required placeholder="+54 11 1234-5678" className="bg-background border-border" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="date">Fecha del evento</Label>
                  <Input id="date" type="date" required className="bg-background border-border text-foreground" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="type">Tipo de evento</Label>
                  <Select required>
                    <SelectTrigger className="bg-background border-border">
                      <SelectValue placeholder="Seleccioná el tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cumpleanos">Cumpleaños infantil</SelectItem>
                      <SelectItem value="quince">Fiesta de 15</SelectItem>
                      <SelectItem value="boda">Casamiento</SelectItem>
                      <SelectItem value="corporativo">Evento empresarial</SelectItem>
                      <SelectItem value="otro">Otro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="guests">Cantidad de invitados</Label>
                  <Select required>
                    <SelectTrigger className="bg-background border-border">
                      <SelectValue placeholder="Estimado" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="50">Hasta 50</SelectItem>
                      <SelectItem value="100">50 a 100</SelectItem>
                      <SelectItem value="150">100 a 150</SelectItem>
                      <SelectItem value="250">150 a 250</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Contanos más sobre tu evento</Label>
                <Textarea
                  id="message"
                  placeholder="¿Algún detalle especial que quieras contarnos?"
                  className="min-h-[110px] bg-background border-border resize-y"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full h-12"
              >
                {isSubmitting ? "Enviando..." : "Enviar consulta"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
