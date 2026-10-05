import { useEffect, useState, type FormEvent } from "react";
import { ArrowLeft, ArrowRight, ExternalLink, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

type Publication = {
  title: string;
  type: string;
  url: string;
};

export function PublicationBanner({ publications }: { publications: Publication[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || publications.length < 2) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % publications.length);
    }, 10_000);

    return () => window.clearInterval(timer);
  }, [isPaused, publications.length]);

  const activePublication = publications[activeIndex];
  if (!activePublication) return null;

  const selectPrevious = () => {
    setActiveIndex((current) => (current - 1 + publications.length) % publications.length);
  };

  const selectNext = () => {
    setActiveIndex((current) => (current + 1) % publications.length);
  };

  return (
    <div
      className="prism mb-8 overflow-hidden rounded-2xl"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsPaused(false);
      }}
      aria-roledescription="carrusel"
      aria-label="Publicaciones importantes"
    >
      <div className="grid min-h-72 grid-cols-1 md:grid-cols-12">
        <div className="flex flex-col justify-between border-b border-line p-6 md:col-span-3 md:border-r md:border-b-0 md:p-8">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-terra">
              Publicación seleccionada
            </p>
            <p className="mt-3 font-display text-2xl font-semibold tabular-nums">
              {String(activeIndex + 1).padStart(2, "0")}
              <span className="text-muted-foreground"> / {String(publications.length).padStart(2, "0")}</span>
            </p>
          </div>
          <div className="mt-6 flex gap-2">
            <Button variant="outline" size="icon" onClick={selectPrevious} aria-label="Publicación anterior">
              <ArrowLeft aria-hidden="true" />
            </Button>
            <Button variant="outline" size="icon" onClick={selectNext} aria-label="Publicación siguiente">
              <ArrowRight aria-hidden="true" />
            </Button>
          </div>
        </div>

        <div className="flex flex-col justify-between p-6 md:col-span-9 md:p-8">
          <div key={activePublication.title} className="animate-[rise_0.45s_cubic-bezier(0.32,0.72,0,1)_both]">
            <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-cobalt">
              {activePublication.type}
            </span>
            <p className="mt-4 max-w-[58ch] font-display text-xl leading-snug font-medium text-pretty md:text-2xl">
              {activePublication.title}
            </p>
            <a
              href={activePublication.url}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium underline decoration-line underline-offset-4 transition-colors hover:decoration-terra"
            >
              Consultar publicación
              <ExternalLink className="size-4" aria-hidden="true" />
            </a>
          </div>

          <div className="mt-8 flex gap-2" aria-label="Elegir publicación">
            {publications.map((publication, index) => (
              <button
                key={publication.title}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Mostrar publicación ${index + 1}`}
                aria-current={index === activeIndex ? "true" : undefined}
                className={cn(
                  "h-1.5 flex-1 cursor-pointer rounded-full bg-line transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  index === activeIndex && "bg-terra",
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "unavailable">("idle");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("unavailable");
  };

  return (
    <form onSubmit={handleSubmit} className="prism rounded-2xl p-6 md:p-8">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="contact-name">Nombre</Label>
          <Input id="contact-name" name="name" autoComplete="name" required maxLength={100} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="contact-email">Correo</Label>
          <Input id="contact-email" name="email" type="email" autoComplete="email" required maxLength={160} />
        </div>
      </div>
      <div className="mt-5 space-y-2">
        <Label htmlFor="contact-subject">Asunto</Label>
        <Input id="contact-subject" name="subject" required maxLength={140} />
      </div>
      <div className="mt-5 space-y-2">
        <Label htmlFor="contact-message">Mensaje</Label>
        <Textarea id="contact-message" name="message" required minLength={10} maxLength={3000} rows={6} />
      </div>
      <div className="sr-only" aria-hidden="true">
        <Label htmlFor="contact-website">Sitio web</Label>
        <Input id="contact-website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="mt-6 flex flex-wrap items-center gap-4">
        <Button type="submit" size="lg" className="rounded-full">
          <Send aria-hidden="true" />
          Enviar mensaje
        </Button>
        {status === "unavailable" ? (
          <p className="max-w-sm text-sm leading-relaxed text-terra" role="status">
            El envío está pendiente de activar. Tus datos no se enviaron ni se guardaron.
          </p>
        ) : (
          <p className="text-xs leading-relaxed text-muted-foreground">
            La dirección institucional permanece privada.
          </p>
        )}
      </div>
    </form>
  );
}