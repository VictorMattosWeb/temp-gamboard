import { MotionProps } from "framer-motion";

export const fadeInAnimation: MotionProps =  {
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
  }

export const slideInAnimation: MotionProps = {
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
}
