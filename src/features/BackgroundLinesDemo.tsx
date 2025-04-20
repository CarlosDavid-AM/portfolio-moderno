import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import Image from "next/image";

export function BackgroundLinesDemo() {
  return (
    <BackgroundLines className="relative w-full min-h-screen z-0 flex items-center justify-center px-4 py-20">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 w-full max-w-7xl md:mx-20">
        {/* Texto y título */}
        <div className="flex flex-col gap-6 text-center lg:text-left max-w-2xl">
          <h2 className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-100 dark:to-white text-3xl md:text-5xl lg:text-6xl font-sans font-bold tracking-tight">
            Sobre Mí
          </h2>
          <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300">
            Soy un desarrollador web full-stack con más de 5 años de experiencia
            creando aplicaciones web modernas y escalables. Mi pasión por la
            tecnología comenzó desde temprana edad y me ha llevado a
            especializarme en el desarrollo de soluciones digitales que combinan
            funcionalidad y diseño. Me especializo en tecnologías JavaScript
            modernas como React, Next.js y Node.js, pero siempre estoy
            aprendiendo nuevas herramientas y frameworks para mantenerme
            actualizado en este campo en constante evolución. Cuando no estoy
            programando, disfruto de la fotografía, el senderismo y la lectura
            de libros sobre ciencia y tecnología.
          </p>
        </div>

        {/* Imagen */}
        <div className="flex justify-center lg:justify-end w-full lg:w-1/2">
          <div className="rounded-full overflow-hidden border-4 border-primary/20 shadow-xl max-w-[300px]">
            <Image
              src="/img/me.png"
              alt="Carlos David A. Mendoza"
              width={300}
              height={300}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </BackgroundLines>
  );
}
