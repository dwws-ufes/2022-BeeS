import React from "react";

import { Column, Text, Row } from "components";

const Footer = (props) => {
  return (
    <>
      <footer className={props.className}>
        <Column className="flex flex-col items-end justify-start sm:mb-[41px] md:mb-[53px] mb-[78px] sm:mt-[51px] md:mt-[66px] mt-[96px] mx-[auto] sm:w-[100%] w-[87%]">
          <Text
            className="font-inter text-black_901 w-[auto]"
            as="h2"
            variant="h2"
          >
            Lorem Ipsum
          </Text>
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[28px] md:mt-[36px] mt-[53px] w-[100%]">
            <div className="bg-white_A700 sm:h-[134px] md:h-[173px] h-[251px] sm:my-[25px] md:my-[33px] my-[48px] w-[25%]"></div>
            <Text
              className="font-inter leading-[normal] md:ml-[148px] ml-[216px] sm:mx-[0] text-black_901 text-right sm:w-[100%] w-[59%]"
              as="h5"
              variant="h5"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis
              elit ac ipsum mattis volutpat vel eu ipsum. Sed tellus odio,
              tincidunt eu ultrices eget, lobortis sed nisl. Maecenas blandit
              lorem eu ipsum tempor, sed convallis est tempus. Sed vulputate
              fermentum sapien a cursus. Morbi cursus scelerisque erat, a cursus
              orci accumsan in. Aliquam erat volutpat. Cras ut mattis elit. Ut
              erat ex, placerat eu tortor id, aliquam congue nisi. Pellentesque
              id egestas dui. Ut consectetur vehicula felis, eu feugiat libero
              vehicula quis. Morbi ipsum velit, scelerisque vel purus non,
              molestie pharetra nulla. Phasellus ac semper lacus.
            </Text>
          </Row>
        </Column>
      </footer>
    </>
  );
};

export default Footer;
