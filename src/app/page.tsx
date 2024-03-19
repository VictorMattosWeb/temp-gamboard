"use client";
import ContainerUI from "@/components/UI/container";
import { Widgets } from "@/components/widgets";
import Container from "@/components/widgets/page/container";
import { containerProps } from "@/constants/container";
import Image from "next/image";
import { descriptors, descriptorsProps } from "@/constants/descriptors";

export default function Home() {
  return (
    <>
      <Container {...containerProps}>
        <Widgets
          descriptors={descriptors}
          descriptorsProps={descriptorsProps}
        />
      </Container>
    </>
  );
}
