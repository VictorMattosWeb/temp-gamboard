"use client";

import { Widgets } from "@/components/widgets";
import Container from "@/components/widgets/page/container";
import { containerProps } from "@/constants/container";
import { ReabilitadoraProps, reabilitadora } from "@/constants/reabilitadora";

export default function Reabilitadora() {
  return (
    <>
      <Container {...containerProps}>
        <Widgets
          descriptors={reabilitadora}
          descriptorsProps={ReabilitadoraProps}
        />
      </Container>
    </>
  );
}
