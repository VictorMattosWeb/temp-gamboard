"use client";
import React, { memo } from "react";
import { motion } from "framer-motion";
import DynamicMotion from "../UI/dynamicMotion";

const Widgets: React.FC<any> = ({ descriptors, descriptorsProps }) => {
  return (
    Object.entries(descriptors) as [
      string,
      React.FC<any> | Record<string, any>
    ][]
  ).map(([id, value]) => {
    let Component: any;
    let children: Record<any, React.FC<any>> | undefined;
    let props: Record<any, any>;

    console.log({ id, value });

    if (typeof value === "object") {
      Component = value.Component;
      children = value.children;
      props = descriptorsProps[id].props;
      if (props?.animation) {
        const CurrentComponent = value.Component;
        Component = (currentProps: any) => (
          <DynamicMotion {...props.animation}>
            <CurrentComponent {...currentProps}></CurrentComponent>
          </DynamicMotion>
        );
      }
    } else {
      Component = value;
      props = descriptorsProps[id];
      if (props?.animation) {
        const CurrentComponent = value;
        Component = (currentProps: any) => (
          <DynamicMotion {...props.animation}>
            <CurrentComponent {...currentProps}></CurrentComponent>
          </DynamicMotion>
        );
      }
    }
    console.log(props);

    if (!Component) {
      return null;
    }

    return (
      <Component {...props}>
        {children &&
          Object.entries(children).map(([childrenId, value]) => {
            let ChildrenComponent: any = value;
            const childrenProps = descriptorsProps[id][childrenId];
            if (childrenProps?.animation) {
              const CurrentComponent = value;
              ChildrenComponent = (currentProps: any) => (
                <DynamicMotion {...childrenProps.animation}>
                  <CurrentComponent {...currentProps}></CurrentComponent>
                </DynamicMotion>
              );
            }

            return <ChildrenComponent {...childrenProps} />;
          })}
      </Component>
    );
  });
};

export default memo(Widgets);
