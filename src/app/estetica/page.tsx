"use client";

import { Widgets } from "@/components/widgets";
import Container from "@/components/widgets/page/container";
import { containerProps } from "@/constants/container";
import { EsteticaProps, estetica } from "@/constants/estetica";

export default function Reabilitadora() {
  return (
    <>
      <Container {...containerProps}>
        <Widgets descriptors={estetica} descriptorsProps={EsteticaProps} />
      </Container>
    </>
  );
}
