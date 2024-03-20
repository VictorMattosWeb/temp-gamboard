"use client";
import Image from "@/components/widgets/background/image";
import Button from "@/components/widgets/button/button";
import List from "@/components/widgets/list/list";
import Container from "@/components/widgets/page/container";
import Typography from "@/components/widgets/typography";
import { fadeInAnimation, slideInAnimation } from "./animation";

export const estetica = {
  logo: Image,
  titulo: Typography,
  reabilitadoraPage: List,
  containerButton: {
    Component: Container,
    children: {
      contatoButton: Button,
      voltarButton: Button,
    },
  },
};

export type EsteticaWidgetsName = keyof typeof estetica;

export const EsteticaProps: Record<EsteticaWidgetsName, any> = {
  // Logotipo ou Logomarca
  logo: {
    animation: fadeInAnimation,
    src: "/vectors/logo.svg",
    alt: "Logomarca",
    width: "300",
    height: "300",
    className: "",
  },
  //Titulo da página
  titulo: {
    animation: fadeInAnimation,
    tag: "h1",
    text: "Odontologia Estética",
    className:
      "text-center text-nowrap w-full bg-transparent text-[#B79E82] font-medium text-lg",
  },
  // Lista com os conteúdos
  reabilitadoraPage: {
    animation: slideInAnimation,
    items: [
      "Toxina Botulínica - Botox",
      "Preenchimento com Ácido Hialurônico",
      "Microagulhamento com Ativos",
      "Peeling Químico",
    ],
    menuProps: {
      className:
        "flex flex-col w-[270px] mx-auto text-nowrap gap-3 text-[#B79E82]",
    },
    itemProps: {
      className: "list-disc w-4/5",
    },
  },
  // Container botões
  containerButton: {
    props: {
      className: "gap-3",
    },
    contatoButton: {
      animation: {
        ...slideInAnimation,
        transition: {
          ...slideInAnimation.transition,
          delay: 0.2,
        },
      },
      text: "Contato",
      link: "https://wa.me/message/MXUJOJZ3VCQJI1",
      className:
        "bg-[#B79E82] w-[300px] h-10 text-md text-white shadow-md font-medium rounded-md flex items-center justify-center",
    },
    voltarButton: {
      animation: {
        ...slideInAnimation,
        transition: {
          ...slideInAnimation.transition,
          delay: 0.4,
        },
      },
      text: "Voltar",
      link: "/",
      className:
        "bg-[#B79E82] w-[300px] h-10 text-md text-white shadow-md font-medium rounded-md flex items-center justify-center",
    },
  },
};
