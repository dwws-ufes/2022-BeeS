import React from "react";

import { Column, Text, Row } from "components";

const Footer = (props) => {
  return (
    <>
      <footer className={props.className}>
        <Column className="flex flex-col items-center justify-start  w-[1848px] h-[230px]">
          <Text
            className="font-inter text-black_901 p-[40px]"
            as="h2"
            variant="h2"
          >
            BeeS
          </Text>
          <Text
            className="font-inter text-black_901 p-[25px]"
            as="h7"
            variant="h7"
          >
            ©Copyright 2023
          </Text>
        </Column>
      </footer>
    </>
  );
};

export default Footer;
