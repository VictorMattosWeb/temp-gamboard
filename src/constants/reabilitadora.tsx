"use client";

import Image from "@/components/widgets/background/image";
import Button from "@/components/widgets/button/button";
import List from "@/components/widgets/list/list";
import Container from "@/components/widgets/page/container";
import Typography from "@/components/widgets/typography";
import { slideInAnimation } from "./animation";

export const reabilitadora = {
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

export type ReabilitadoraWidgetsName = keyof typeof reabilitadora;

export const ReabilitadoraProps: Record<ReabilitadoraWidgetsName, any> = {
  // Logotipo ou Logomarca
  logo: {
    animation: {
      initial: {
        opacity: 0,
        scale: 0,
      },
      whileInView: {
        opacity: 1,
        scale: 1,
      },
      transition: {
        duration: 0.7,
      },
    },
    src: "/vectors/logo.svg",
    alt: "Logomarca",
    width: "300",
    height: "300",
    className: "",
  },
  titulo: {
    animation: {
      initial: {
        opacity: 0,
        scale: 0,
      },
      whileInView: {
        opacity: 1,
        scale: 1,
      },
      transition: {
        duration: 0.7,
      },
    },
    tag: "h1",
    text: "Odontologia Reabilitadora",
    className:
      "mx-auto bg-transparent text-nowrap text-[#B79E82] font-medium text-lg",
  },
  // Lista com os conteúdos
  reabilitadoraPage: {
    animation: {
      initial: {
        opacity: 0,
        x: -100,
      },
      whileInView: {
        opacity: 100,
        x: 0,
      },
      exit: {
        opacity: 0,
        x: -100,
      },
      transition: {
        duration: 0.7,
        delay: 0.4,
      },
    },
    items: [
      "Raspagem & Profilaxia (Limpeza Profissional)",
      "Restaurações em Resina",
      "Clareamento Dental",
      "Odontopediatria",
    ],
    menuProps: {
      className:
        "flex flex-col items-center justify-center gap-3 text-[#B79E82]",
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
