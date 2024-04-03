"use client";

import Image from "@/components/widgets/background/image";
import Button from "@/components/widgets/button/button";
import Container from "@/components/widgets/page/container";
import Typography from "@/components/widgets/typography";
import { FaMapPin } from "react-icons/fa6";
import { fadeInAnimation, slideInAnimation } from "./animation";

export const localizacoes = {
  logo: Image,
  titulo: Typography,
  EndUm: {
    Component: Container,
    children: {
      titulo: Typography,
      rua: Typography,
    },
  },
  EndDois: {
    Component: Container,
    children: {
      titulo: Typography,
      rua: Typography,
    },
  },
  EndTres: {
    Component: Container,
    children: {
      titulo: Typography,
      rua: Typography,
    },
  },
  containerButton: {
    Component: Container,
    children: {
      contatoButton: Button,
      voltarButton: Button,
    },
  },
};

export type LocalWidgetsName = keyof typeof localizacoes;

export const LocalizacoesProps: Record<LocalWidgetsName, any> = {
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
    text: "Localizações",
    className: "text-center bg-transparent text-[#B79E82] font-medium text-md",
  },
  // Endereço 01
  EndUm: {
    props: {
      className: "gap-2 ",
    },
    titulo: {
      animation: {
        ...slideInAnimation,
        transition: {
          ...slideInAnimation.transition,
          delay: 0.2,
        },
      },
      tag: "h2",
      text: "Takashi Odontologia - Pinheiros",
      className:
        "bg-transparent mx-auto text-nowrap py-0 font-medium w-full text-md text-[#B79E82]",
    },
    rua: {
      animation: {
        ...slideInAnimation,
        transition: {
          ...slideInAnimation.transition,
          delay: 0.4,
        },
      },
      tag: "p",
      text: "Av. Brg. Faria Lima, 1478 - Cj. 911 - Jardim Paulistano, São Paulo - SP, 01451-001",
      className:
        "flex gap-2 mx-auto md:max-w-[300px] md:px-0  bg-transparent text-sm text-[#B79E82] py-0",
      leftIcon: <FaMapPin />,
    },
  },
  // Endereço 02
  EndDois: {
    props: {
      className: "gap-2 ",
    },
    titulo: {
      animation: {
        ...slideInAnimation,
        transition: {
          ...slideInAnimation.transition,
          delay: 0.2,
        },
      },
      tag: "h2",
      text: "Clínica Odontológica - Itaim",
      className:
        "bg-transparent py-0 font-medium text-md text-[#B79E82] w-full mx-auto text-nowrap",
    },
    rua: {
      animation: {
        ...slideInAnimation,
        transition: {
          ...slideInAnimation.transition,
          delay: 0.4,
        },
      },
      tag: "p",
      text: "Rua Dr. Renato Paes de Barros, 512, Itaim Bibi, São Paulo, SP - 04530-000",
      className:
        "flex gap-2 mx-auto md:max-w-[300px] md:px-0 bg-transparent text-sm text-[#B79E82] py-0",
      leftIcon: <FaMapPin />,
    },
  },
  EndTres: {
    props: {
      className: "gap-2 ",
    },
    titulo: {
      animation: {
        ...slideInAnimation,
        transition: {
          ...slideInAnimation.transition,
          delay: 0.2,
        },
      },
      tag: "h2",
      text: "Odontológica Dental Saúde - Vila Yara",
      className:
        "bg-transparent py-0 font-medium text-md text-[#B79E82] w-full mx-auto text-nowrap",
    },
    rua: {
      animation: {
        ...slideInAnimation,
        transition: {
          ...slideInAnimation.transition,
          delay: 0.4,
        },
      },
      tag: "p",
      text: "R. Anselmo Pedro Medeiros, 67 Osasco, Sao Paulo, 06028-030",
      className:
        "flex gap-2 mx-auto md:max-w-[300px] md:px-0 bg-transparent text-sm text-[#B79E82] py-0",
      leftIcon: <FaMapPin />,
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
