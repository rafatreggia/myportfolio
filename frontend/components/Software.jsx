import React from "react";
import { Terminal, AnimatedSpan, TypingAnimation } from "./magicui/terminal";
import Iphone15Pro from "./magicui/iphone-15-pro";

const Software = () => {
  return (
    <div>
      <div className="w-full flex lg:flex-row items-center justify-around flex-col gap-5">
        <div>
          {" "}
          <h1 className="text-[28px] font-semibold">Desarrollo Software</h1>
          <h2 className="max-w-[550px]">
            Construyo soluciones digitales eficientes y escalables utilizando
            las últimas tecnologías. Mi enfoque está en crear código limpio,
            mantenible y de alto rendimiento.
          </h2>
        </div>

        <Terminal>
          <TypingAnimation>&gt; pnpm dlx shadcn@latest init</TypingAnimation>

          <AnimatedSpan delay={1500} className="text-green-500">
            <span>✔ Preflight checks.</span>
          </AnimatedSpan>

          <AnimatedSpan delay={2000} className="text-green-500">
            <span>✔ Verifying framework. Found Next.js.</span>
          </AnimatedSpan>

          <AnimatedSpan delay={2500} className="text-green-500">
            <span>✔ Validating Tailwind CSS.</span>
          </AnimatedSpan>

          <AnimatedSpan delay={3000} className="text-green-500">
            <span>✔ Validating import alias.</span>
          </AnimatedSpan>

          <AnimatedSpan delay={3500} className="text-green-500">
            <span>✔ Writing components.json.</span>
          </AnimatedSpan>

          <AnimatedSpan delay={4000} className="text-green-500">
            <span>✔ Checking registry.</span>
          </AnimatedSpan>

          <AnimatedSpan delay={4500} className="text-green-500">
            <span>✔ Updating tailwind.config.ts</span>
          </AnimatedSpan>

          <AnimatedSpan delay={5000} className="text-green-500">
            <span>✔ Updating app/globals.css</span>
          </AnimatedSpan>

          <AnimatedSpan delay={5500} className="text-green-500">
            <span>✔ Installing dependencies.</span>
          </AnimatedSpan>

          <AnimatedSpan delay={6000} className="text-blue-500">
            <span>ℹ Updated 1 file:</span>
            <span className="pl-2">- lib/utils.ts</span>
          </AnimatedSpan>

          <TypingAnimation delay={6500} className="text-muted-foreground">
            Success! Project initialization completed.
          </TypingAnimation>

          <TypingAnimation delay={7000} className="text-muted-foreground">
            You may now add components.
          </TypingAnimation>
        </Terminal>
      </div>
      <div className="w-full flex  items-center justify-around lg:flex-row-reverse mt-10 mb-20 flex-col gap-5">
        <div >
          <h1 className="text-[28px] font-semibold">Diseño UI/UX</h1>
          <h2 className="max-w-[550px]">
            Creo interfaces intuitivas y atractivas para todo tipo de
            plataformas. Desde landing pages que convierten, dashboards
            funcionales, hasta aplicaciones móviles centradas en la experiencia
            del usuario.
          </h2>
        </div>
        <div className="relative">
          <Iphone15Pro className=" max-h-[400px] lg:max-h-[500px]" src="/images/imgiphone.webp"/>
        </div>
      </div>
    </div>
  );
};

export default Software;
