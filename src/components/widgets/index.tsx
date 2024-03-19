"use client";
import React, { memo } from "react";
import { motion } from "framer-motion";
import DynamicMotion from "../UI/dynamicMotion";

const WidgetsComponent: React.FC<any> = ({ descriptors, descriptorsProps }) => {
  return (
    Object.entries(descriptors) as [
      string,
      React.FC<any> | Record<string, any>
    ][]
  ).map(([id, value]) => {
    let Component: any;
    let children: Record<any, React.FC<any>> | undefined;
    let props: Record<any, any>;

    if (typeof value === "object") {
      Component = value.Component;
      children = value.children;
      props = descriptorsProps[id].props;
      if (props?.animation) {
        const CurrentComponent = value.Component;
        const MyComponent = (currentProps: any) => (
          <DynamicMotion {...props.animation}>
            <CurrentComponent {...currentProps}></CurrentComponent>
          </DynamicMotion>
        );
        Component = MyComponent;
      }
    } else {
      Component = value;
      props = descriptorsProps[id];
      if (props?.animation) {
        const CurrentComponent = value;
        const MyComponent = (currentProps: any) => (
          <DynamicMotion {...props.animation}>
            <CurrentComponent {...currentProps}></CurrentComponent>
          </DynamicMotion>
        );
        Component = MyComponent;
      }
    }

    if (!Component) {
      return null;
    }

    return (
      <Component key={id} {...props}>
        {children &&
          Object.entries(children).map(([childrenId, value]) => {
            let ChildrenComponent: any = value;
            const childrenProps = descriptorsProps[id][childrenId];
            if (childrenProps?.animation) {
              const CurrentComponent = value;
              const MyChildrenComponent = (currentProps: any) => (
                <DynamicMotion {...childrenProps.animation}>
                  <CurrentComponent {...currentProps}></CurrentComponent>
                </DynamicMotion>
              );
              ChildrenComponent = MyChildrenComponent;
            }

            return (
              <ChildrenComponent
                key={`${id} ${childrenId}`}
                {...childrenProps}
              />
            );
          })}
      </Component>
    );
  });
};

export const Widgets: React.FC<any> = memo(WidgetsComponent);
