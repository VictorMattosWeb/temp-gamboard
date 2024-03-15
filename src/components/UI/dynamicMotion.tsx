"use client";

import { motion } from "framer-motion";
import { FC } from "react";

const DynamicMotion: FC<any> = (props) => {
  return <motion.div {...props}>{props.children}</motion.div>;
};

export default DynamicMotion;
