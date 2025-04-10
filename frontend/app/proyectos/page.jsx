"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Code,
  Rocket,
  Palette,
  Layers,
  FileCode,
  Database,
  Globe,
} from "lucide-react";

const Page = () => {
  const proyectos = [
    {
      nombre: "App de Dragones",
      descripcion:
        "Explorá un mundo fantástico con tu app de dragones, donde podés criar, entrenar y coleccionar criaturas legendarias. Cada dragón tiene habilidades únicas y evoluciona mientras jugás.",
      link: "https://appdragones.vercel.app/",
      tecnologias: ["next.js", "shadcn", "tailwind", "typeScript"],
    },
    {
      nombre: "Mi Portfolio",
      descripcion:
        "Espacio digital donde presento mi trayectoria profesional y proyectos destacados. Diseñado con un enfoque minimalista y moderno, este portfolio refleja mi estilo de desarrollo y habilidades técnicas. Cada sección está cuidadosamente estructurada para mostrar mis capacidades y experiencia en el desarrollo web.",
      link: "https://rafatreggia.vercel.app/",
      tecnologias: ["next.js", "shadcn", "tailwind", "typeScript"],
    },
    // Puedes agregar más proyectos aquí
  ];

  return (
    <div className="w-full min-h-[100vh] px-10 xl:px-20 py-12 relative bg-gradient-to-b from-background to-slate-50 dark:from-background dark:to-slate-900/20">
      <h1 className="text-center text-4xl font-bold mb-12 bg-[#58AF9B] text-transparent bg-clip-text">
        <Rocket className="inline-block mr-2 h-8 w-8 text-[#58AF9B]" />
        Mis Proyectos
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {proyectos.map((proyecto, index) => (
          <Card
            key={index}
            className="overflow-hidden transition-all hover:shadow-lg border-t-4 border-t-[#58AF9B] hover:scale-[1.02] duration-300"
          >
            <CardHeader className="pb-2 bg-slate-50 dark:bg-slate-900/50">
              <CardTitle className="text-xl font-bold flex items-center gap-2">
                <Layers className="h-5 w-5 text-[#58AF9B] " />
                {proyecto.nombre}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="flex items-start mb-4">
                <Palette className="h-4 w-4 text-slate-500 mr-2 mt-1 flex-shrink-0" />
                <CardDescription className="text-sm min-h-[200px]">
                  {proyecto.descripcion}
                </CardDescription>
              </div>
              <div className="flex items-center gap-2 mt-6 mb-2">
                <Code className="h-4 w-4 text-slate-500" />
                <span className="text-sm font-medium">Tecnologías:</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {proyecto.tecnologias.map((tech, techIndex) => {
                  // Assign different colors based on technology
                  let color = "";
                  let icon = null;

                  if (tech.toLowerCase().includes("next")) {
                    color = "bg-black text-white dark:bg-white dark:text-black";
                    icon = <Globe className="h-3 w-3" />;
                  } else if (tech.toLowerCase().includes("shadcn")) {
                    color = "bg-slate-800 text-white";
                    icon = <Palette className="h-3 w-3" />;
                  } else if (tech.toLowerCase().includes("tailwind")) {
                    color = "bg-sky-500 text-white";
                    icon = <Layers className="h-3 w-3" />;
                  } else if (tech.toLowerCase().includes("typescript")) {
                    color = "bg-blue-600 text-white";
                    icon = <FileCode className="h-3 w-3" />;
                  } else {
                    color =
                      "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100";
                    icon = <Database className="h-3 w-3" />;
                  }

                  return (
                    <Badge
                      key={techIndex}
                      className={`px-2 py-1 ${color} flex items-center gap-1`}
                    >
                      {icon}
                      {tech}
                    </Badge>
                  );
                })}
              </div>
            </CardContent>
            <CardFooter className="pt-2">
              <Button
                size="sm"
                className="w-full bg-[#58AF9B] hover:bg-[#58AF9B]/70  text-white"
                asChild
              >
                <a
                  href={proyecto.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  Ver Proyecto <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Page;
