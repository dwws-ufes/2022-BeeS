import React from "react";

import { Column, Stack, Text, Row } from "components";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";

const MainTwoPage = () => {
  return (
    <>
      <Column className="bg-white_A700 flex flex-col font-inter items-center justify-start mx-[auto] w-[100%]">
        <Stack className="h-[697px] relative w-[100%]">
          <Column className="absolute bg-black_900 bottom-[0] flex flex-col justify-end sm:p-[15px] md:p-[52px] p-[77px] w-[100%]">
            <Column className="flex flex-col items-center justify-start md:ml-[13px] ml-[19px] sm:mt-[14px] md:mt-[19px] mt-[28px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[92%]">
              <Column className="flex flex-col justify-start w-[100%]">
                <Text className="text-white_A700 w-[auto]" as="h2" variant="h2">
                  Lorem Ipsum
                </Text>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mt-[23px] md:mt-[30px] mt-[45px] w-[100%]">
                  <Text
                    className="leading-[normal] sm:mx-[0] text-white_A700 sm:w-[100%] w-[62%]"
                    as="h5"
                    variant="h5"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    quis elit ac ipsum mattis volutpat vel eu ipsum. Sed tellus
                    odio, tincidunt eu ultrices eget, lobortis sed nisl.
                    Maecenas blandit lorem eu ipsum tempor, sed convallis est
                    tempus. Sed vulputate fermentum sapien a cursus. Morbi
                    cursus scelerisque erat, a cursus orci accumsan in. Aliquam
                    erat volutpat. Cras ut mattis elit. Ut erat ex, placerat eu
                    tortor id, aliquam congue nisi. Pellentesque id egestas dui.
                    Ut consectetur vehicula felis, eu feugiat libero vehicula
                    quis. Morbi ipsum velit, scelerisque vel purus non, molestie
                    pharetra nulla. Phasellus ac semper lacus.
                  </Text>
                  <div className="bg-white_A700 sm:h-[134px] md:h-[173px] h-[251px] sm:mb-[44px] md:mb-[57px] mb-[83px] mt-[14px] sm:mt-[7px] md:mt-[9px] w-[26%]"></div>
                </Row>
              </Column>
            </Column>
          </Column>
          <Header className="absolute top-[0] w-[100%]" />
        </Stack>
        <Footer className="bg-yellow_600 w-[100%]" />
      </Column>
    </>
  );
};

export default MainTwoPage;
