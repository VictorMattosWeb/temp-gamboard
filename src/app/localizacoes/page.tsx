"use client";

import Widgets from "@/components/widgets";
import Container from "@/components/widgets/page/container";
import { containerProps } from "@/constants/container";
import { LocalizacoesProps, localizacoes } from "@/constants/localizacoes";
import { twMerge } from "tailwind-merge";

export default function Localizacoes() {
  return (
    <>
      <Container
        {...containerProps}
        className={twMerge(containerProps.className, "")}
      >
        <Widgets
          descriptors={localizacoes}
          descriptorsProps={LocalizacoesProps}
        />
      </Container>
    </>
  );
}
