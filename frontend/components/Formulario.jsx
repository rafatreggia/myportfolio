"use client";
import React from "react";
import { Magnetic } from "@/components/ui/magnetic";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { POST } from "@/app/api/send/route";
import { useToast } from "@/hooks/use-toast";

const Formulario = () => {
  const { toast } = useToast();
  const SOCIAL_LINKS = [
    {
      label: "Github",
      link: "https://github.com/rafatreggia",
    },
    {
      label: "Twitter",
      link: "https://twitter.com",
    },
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/rafael-treggia-189a631b4/",
    },
    {
      label: "Instagram",
      link: "https://instagram.com/rafatreggia",
    },
  ];
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    subject: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
    try {
      setLoading(true);
      let response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: formData.name,
          asunto: formData.subject,
          email: formData.email,
        }),
      });
      if (response.ok === false) {
        throw new Error("Los datos no se han enviado");
      }
      toast({
        title: "Felicitaciones",
        description: "Sus datos han sido enviados",
      });
      setLoading(false);
    } catch (error) {
      toast({
        title: "Cuidado",
        description: "Algo salio mal, no se han enviado los datos",
      });
      setLoading(false);
    }
  };
  return (
    <div
      id="formulario"
      className="w-full flex flex-col items-center justify-center mt-20"
    >
      <h1 className="title mb-5">Mis Redes</h1>
      <div className="flex items-center justify-center space-x-3 w-full mt-3S">
        {SOCIAL_LINKS.map((link) => (
          <MagneticSocialLink key={link.label} link={link.link}>
            {link.label}
          </MagneticSocialLink>
        ))}
      </div>
      
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg mt-10"
      >
        <h1 className="mb-5 font-semibold">Contactate conmigo</h1>
        <div className="mb-4">
          <Label htmlFor="email">Email:</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <Label htmlFor="name">Nombre:</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <Label htmlFor="subject">Asunto:</Label>
          <Input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>

        <Button type="submit" className="w-full " disabled={loading}>
          {loading === false ? "Enviar" : " Enviando..."}
        </Button>
      </form>
    </div>
  );
};

export default Formulario;

function MagneticSocialLink({ children, link }) {
  return (
    <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
      <a
        href={link}
        target="_blank"
        className="group relative inline-flex shrink-0 items-center gap-[1px] rounded-full bg-zinc-100 px-2.5 py-1 text-sm text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
      >
        {children}
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
        >
          <path
            d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </a>
    </Magnetic>
  );
}
