import React from "react";

import { Column, Row, Text, Img, Button } from "components";
import Header from "components/Header/Header";
import { useNavigate } from "react-router-dom";

const EditCreateBeehivePage = () => {
  const navigate = useNavigate();

  function handleNavigate16() {
    navigate("/dashboard");
  }

  return (
    <>
      <Column className="bg-black_900 flex flex-col font-inter items-center justify-start mx-[auto] sm:pb-[15px] md:pb-[64px] pb-[93px] w-[100%]">
        <Column className="flex flex-col items-center justify-start w-[100%]">
          <Header className="w-[100%]" />
          <Column className="flex flex-col justify-start max-w-[1260px] mt-[100px] sm:mt-[53px] md:mt-[68px] sm:mx-[0] mx-[auto] sm:px-[15px] w-[100%]">
            <Column className="flex flex-col justify-start md:mr-[569px] mr-[827px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[35%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                <Text
                  className="flex-grow text-white_A700"
                  as="h1"
                  variant="h1"
                >
                  Nome Loja
                </Text>
                <Img
                  src="images/img_cut.svg"
                  className="flex-shrink-0 sm:h-[32px] md:h-[42px] h-[60px] max-w-[100%] sm:w-[31px] md:w-[41px] w-[60px]"
                  alt="cut"
                />
              </Row>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[42px] md:mt-[55px] mt-[80px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[45%]">
                <Text className="text-white_A700 w-[auto]" as="h3" variant="h3">
                  Admins
                </Text>
                <Button
                  className="flex sm:h-[16px] md:h-[21px] h-[30px] items-center justify-center sm:ml-[15px] md:ml-[19px] ml-[29px] sm:my-[3px] md:my-[4px] my-[7px] sm:w-[15px] md:w-[20px] w-[30px]"
                  shape="icbRoundedBorder14"
                  size="smIcn"
                  variant="icbFillYellow600"
                >
                  <Img
                    src="images/img_plus.svg"
                    className="h-[16px] sm:h-[9px] md:h-[12px] flex items-center justify-center"
                    alt="plus"
                  />
                </Button>
              </Row>
              <Text
                className="md:mt-[10px] mt-[15px] sm:mt-[7px] text-gray_501 w-[auto]"
                as="h6"
                variant="h6"
              >
                email@domain.com (Você)
              </Text>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center mt-[12px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[59%]">
                <Text className="text-gray_501 w-[auto]" as="h6" variant="h6">
                  email2@domain.com
                </Text>
                <Button
                  className="flex sm:h-[16px] md:h-[21px] h-[30px] items-center justify-center md:ml-[11px] ml-[17px] sm:ml-[9px] sm:w-[15px] md:w-[20px] w-[30px]"
                  shape="icbRoundedBorder14"
                  size="smIcn"
                  variant="icbFillRed500"
                >
                  <Img
                    src="images/img_trash.svg"
                    className="h-[16px] sm:h-[9px] md:h-[12px] flex items-center justify-center"
                    alt="trash"
                  />
                </Button>
              </Row>
            </Column>
            <Button
              className="common-pointer flex sm:h-[43px] md:h-[56px] h-[80px] items-center justify-center ml-[1180px] sm:ml-[628px] md:ml-[812px] sm:mt-[202px] md:mt-[262px] mt-[381px] rounded-radius50 sm:w-[42px] md:w-[55px] w-[80px]"
              onClick={handleNavigate16}
              size="lgIcn"
              variant="icbFillYellow600"
            >
              <Img
                src="images/img_save.svg"
                className="h-[43px] sm:h-[23px] md:h-[30px] flex items-center justify-center"
                alt="save"
              />
            </Button>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default EditCreateBeehivePage;
