"use client";
import Image from "@/components/widgets/background/image";
import Button from "@/components/widgets/button/button";
import Container from "@/components/widgets/page/container";
import Typography from "@/components/widgets/typography";

export const descriptors = {
  logo: Image,
  fotoPerfil: Image,
  title: Typography,
  containerButton: {
    Component: Container,
    children: {
      myWork: Button,
      portfolio: Button,
      local: Button,
    },
  },
};

// typeof Component  === "function"
// typeof descritors === "object"

console.log(typeof descriptors.logo);

export type Descriptors = keyof typeof descriptors;

export const descriptorsProps: Record<Descriptors, any> = {
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
  fotoPerfil: {
    src: "/img/fotoPerfil.webp",
    alt: "Imagem de Perfil",
    width: "120",
    height: "120",
    className: "rounded-full border-4 border-[#B79E82]",
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
  },
  title: {
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
    tag: "h2",
    text: "Bem-vindos a minha página!",
    className: "bg-transparent text-[#B79E82] text-xl w-full text-center  py-0",
  },
  containerButton: {
    props: {
      className: "gap-3",
    },
    myWork: {
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
        },
      },
      text: "Odontologia Reabilitadora",
      link: "/reabilitadora",
      className:
        "bg-[#B79E82] w-[300px] h-10 text-md text-white shadow-md font-medium rounded-md flex items-center justify-center",
    },
    portfolio: {
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
          delay: 0.2,
        },
      },
      text: "Odontologia Estética",
      link: "/estetica",
      className:
        "bg-[#B79E82] w-[300px] h-10 text-md text-white shadow-md font-medium rounded-md flex items-center justify-center",
    },
    local: {
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
      text: "Localizações",
      link: "/localizacoes",
      className:
        "bg-[#B79E82] w-[300px] h-10 text-md text-white shadow-md font-medium rounded-md flex items-center justify-center",
    },
  },
};
