import React from "react";

import { Column, Row, Button, Text, Input, Stack, Img } from "components";
import { useNavigate } from "react-router-dom";

const ComponentsPage = () => {
  const navigate = useNavigate();

  function handleNavigate2() {
    navigate("/loja");
  }

  return (
    <>
      <Column className="bg-white_A700 flex flex-col font-inter items-center justify-start mx-[auto] md:pr-[11px] sm:pr-[15px] pr-[16px] md:py-[11px] sm:py-[15px] py-[16px] w-[100%]">
        <Column className="flex flex-col justify-start max-w-[1293px] sm:mb-[111px] md:mb-[143px] mb-[193px] mx-[auto] sm:px-[15px] w-[100%]">
          <div className="bg-yellow_600 sm:h-[51px] md:h-[66px] h-[88px] ml-[121px] sm:ml-[69px] md:ml-[90px] mr-[106px] sm:mr-[61px] md:mr-[78px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] sm:w-[100%] w-[83%]"></div>
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:ml-[30px] ml-[41px] sm:mt-[55px] md:mt-[71px] mt-[96px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[57%]">
            <Column className="border border-deep_purple_A200 border-solid flex flex-col items-center justify-start sm:mt-[5px] md:mt-[6px] mt-[9px] sm:mx-[0] md:p-[14px] p-[20px] sm:px-[15px] sm:py-[11px] rounded-radius5 sm:w-[100%] w-[21%]">
              <Button
                className="cursor-pointer font-bold min-w-[100%] text-[15px] text-center w-[max-content]"
                shape="RoundedBorder19"
                size="sm"
                variant="FillBlack902"
              >
                Button
              </Button>
              <Button
                className="cursor-pointer font-bold min-w-[100%] sm:mt-[11px] md:mt-[14px] mt-[20px] text-[15px] text-center w-[max-content]"
                shape="RoundedBorder19"
                size="sm"
                variant="FillYellow600"
              >
                Button
              </Button>
            </Column>
            <Column className="flex flex-col justify-end md:ml-[40px] ml-[54px] sm:mx-[0] p-[4px] sm:px-[0] sm:w-[100%] w-[72%]">
              <Text
                className="ml-[4px] mt-[1px] text-black_901 w-[auto]"
                as="h6"
                variant="h6"
              >
                Label
              </Text>
              <Input
                className="w-[100%]"
                wrapClassName="flex h-[31px] ml-[4px] mt-[4px] sm:mx-[0] sm:w-[100%] w-[97%]"
                name="Input"
                placeholder=""
              ></Input>
            </Column>
          </Row>
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-end ml-[auto] mt-[131px] sm:mt-[75px] md:mt-[97px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[83%]">
            <Stack className="h-[207px] sm:mb-[10px] md:mb-[13px] mb-[18px] relative w-[20%]">
              <Stack className="absolute h-[207px] left-[0] sm:w-[100%] w-[75%]">
                <Img
                  src="images/img_arrowleft.svg"
                  className="absolute h-[119px] left-[0] max-w-[100%] top-[0] sm:w-[100%] w-[66%]"
                  alt="arrowleft"
                />
                <Img
                  src="images/img_arrowleft.svg"
                  className="absolute bottom-[0] h-[119px] max-w-[100%] right-[0] sm:w-[100%] w-[66%]"
                  alt="arrowleft One"
                />
              </Stack>
              <Img
                src="images/img_arrowleft.svg"
                className="absolute h-[119px] max-w-[100%] right-[0] top-[0] sm:w-[100%] w-[50%]"
                alt="arrowleft Two"
              />
            </Stack>
            <Img
              src="images/img_arrowleft.svg"
              className="max-w-[100%] md:ml-[108px] ml-[146px] sm:ml-[84px] sm:mt-[15px] md:mt-[20px] mt-[27px] w-[10%]"
              alt="arrowleft Three"
            />
            <Button
              className="flex sm:h-[24px] md:h-[30px] h-[40px] items-center justify-center sm:mb-[23px] md:mb-[29px] mb-[40px] sm:ml-[36px] md:ml-[47px] ml-[64px] md:mt-[108px] mt-[146px] sm:mt-[84px] rounded-radius50 sm:w-[23px] md:w-[29px] w-[40px]"
              size="mdIcn"
              variant="icbFillYellow600"
            >
              <Img
                src="images/img_search.svg"
                className="h-[24px] sm:h-[14px] md:h-[18px] flex items-center justify-center"
                alt="search"
              />
            </Button>
            <Button
              className="flex sm:h-[47px] md:h-[60px] h-[80px] items-center justify-center ml-[103px] sm:ml-[59px] md:ml-[76px] md:mt-[108px] mt-[146px] sm:mt-[84px] rounded-radius50 sm:w-[46px] md:w-[59px] w-[80px]"
              size="lgIcn"
              variant="icbFillYellow600"
            >
              <Img
                src="images/img_plus.svg"
                className="h-[43px] sm:h-[25px] md:h-[33px] flex items-center justify-center"
                alt="plus"
              />
            </Button>
            <Button
              className="flex sm:h-[47px] md:h-[60px] h-[80px] items-center justify-center sm:ml-[20px] md:ml-[26px] ml-[35px] md:mt-[108px] mt-[146px] sm:mt-[84px] rounded-radius50 sm:w-[46px] md:w-[59px] w-[80px]"
              size="lgIcn"
              variant="icbFillYellow600"
            >
              <Img
                src="images/img_edit.svg"
                className="h-[43px] sm:h-[25px] md:h-[33px] flex items-center justify-center"
                alt="edit"
              />
            </Button>
            <Button
              className="flex sm:h-[47px] md:h-[60px] h-[80px] items-center justify-center sm:ml-[20px] md:ml-[26px] ml-[35px] md:mt-[108px] mt-[146px] sm:mt-[84px] rounded-radius50 sm:w-[46px] md:w-[59px] w-[80px]"
              size="lgIcn"
              variant="icbFillYellow600"
            >
              <Img
                src="images/img_save.svg"
                className="h-[43px] sm:h-[25px] md:h-[33px] flex items-center justify-center"
                alt="save"
              />
            </Button>
            <Button
              className="flex sm:h-[47px] md:h-[60px] h-[80px] items-center justify-center sm:ml-[13px] md:ml-[17px] ml-[23px] md:mt-[108px] mt-[146px] sm:mt-[84px] rounded-radius50 sm:w-[46px] md:w-[59px] w-[80px]"
              size="lgIcn"
              variant="icbFillRed500"
            >
              <Img
                src="images/img_trash.svg"
                className="h-[43px] sm:h-[25px] md:h-[33px] flex items-center justify-center"
                alt="trash"
              />
            </Button>
          </Row>
          <Column
            className="common-pointer flex flex-col items-center justify-start sm:mt-[39px] md:mt-[51px] mt-[69px] md:p-[16px] p-[22px] sm:px-[15px] sm:py-[12px] w-[100%]"
            onClick={handleNavigate2}
          >
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start mb-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
              <Stack className="h-[125px] relative w-[125px] sm:w-[72px] md:w-[93px]">
                <Stack className="absolute h-[125px] left-[0] sm:w-[100%] w-[75%]">
                  <Img
                    src="images/img_arrowleft.svg"
                    className="absolute h-[71px] left-[0] max-w-[100%] top-[0] sm:w-[100%] w-[66%]"
                    alt="arrowleft Four"
                  />
                  <Img
                    src="images/img_arrowleft.svg"
                    className="absolute bottom-[0] h-[71px] max-w-[100%] right-[0] sm:w-[100%] w-[66%]"
                    alt="arrowleft Five"
                  />
                </Stack>
                <Img
                  src="images/img_arrowleft.svg"
                  className="absolute h-[71px] max-w-[100%] right-[0] top-[0] sm:w-[100%] w-[49%]"
                  alt="arrowleft Six"
                />
              </Stack>
              <Column className="flex flex-col justify-start md:ml-[26px] ml-[35px] sm:mt-[12px] md:mt-[15px] mt-[21px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[14%]">
                <Text className="text-black_901 w-[auto]" as="h5" variant="h5">
                  Nome Loja
                </Text>
                <Text
                  className="font-normal sm:mt-[13px] md:mt-[17px] mt-[24px] not-italic text-black_901 w-[auto]"
                  variant="body1"
                >
                  Criado em 00/00/0000
                </Text>
              </Column>
              <Button
                className="flex sm:h-[47px] md:h-[60px] h-[80px] items-center justify-center sm:ml-[411px] md:ml-[531px] ml-[713px] sm:my-[12px] md:my-[16px] my-[22px] rounded-radius50 sm:w-[46px] md:w-[59px] w-[80px]"
                size="lgIcn"
                variant="icbFillYellow600"
              >
                <Img
                  src="images/img_edit.svg"
                  className="h-[43px] sm:h-[25px] md:h-[33px] flex items-center justify-center"
                  alt="edit One"
                />
              </Button>
              <Button
                className="flex sm:h-[47px] md:h-[60px] h-[80px] items-center justify-center sm:ml-[13px] md:ml-[17px] ml-[23px] sm:my-[12px] md:my-[16px] my-[22px] rounded-radius50 sm:w-[46px] md:w-[59px] w-[80px]"
                size="lgIcn"
                variant="icbFillRed500"
              >
                <Img
                  src="images/img_trash.svg"
                  className="h-[43px] sm:h-[25px] md:h-[33px] flex items-center justify-center"
                  alt="trash One"
                />
              </Button>
            </Row>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default ComponentsPage;
