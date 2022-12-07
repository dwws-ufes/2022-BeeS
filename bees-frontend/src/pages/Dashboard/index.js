import React from "react";

import { Column, Row, Text, Button, Img, Stack } from "components";
import Header from "components/Header/Header";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const navigate = useNavigate();

  function handleNavigate3() {
    navigate("/editcreatebeehive");
  }
  function handleNavigate4() {
    navigate("/loja");
  }
  function handleNavigate5() {
    navigate("/editcreatebeehive");
  }
  function handleNavigate6() {
    navigate("/loja");
  }
  function handleNavigate7() {
    navigate("/editcreatebeehive");
  }
  function handleNavigate9() {
    navigate("/editcreatebeehive");
  }
  function handleNavigate10() {
    navigate("/loja");
  }
  function handleNavigate11() {
    navigate("/editcreatebeehive");
  }
  function handleNavigate12() {
    navigate("/loja");
  }

  return (
    <>
      <Column className="bg-black_900 flex flex-col font-inter items-center justify-start mx-[auto] md:pb-[112px] sm:pb-[15px] pb-[163px] w-[100%]">
        <Column className="flex flex-col items-center justify-start w-[100%]">
          <Header className="w-[100%]" />
          <Column className="flex flex-col items-center justify-start max-w-[1311px] sm:mt-[43px] md:mt-[56px] mt-[82px] sm:mx-[0] mx-[auto] sm:px-[15px] w-[100%]">
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[94%]">
              <Text className="text-white_A700 w-[auto]" as="h3" variant="h3">
                Beehives
              </Text>
              <Column className="flex flex-col md:ml-[35px] ml-[51px] sm:mx-[0] p-[4px] sm:px-[0] sm:w-[100%] w-[44%]">
                <Text
                  className="ml-[4px] mt-[1px] text-white_A700 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Nome
                </Text>
                <Column className="bg-gray_200 border border-black_900 border-solid flex flex-col items-end justify-start ml-[4px] mt-[4px] sm:mx-[0] pl-[1px] py-[1px] rounded-radius14 sm:w-[100%] w-[97%]">
                  <Button
                    className="flex sm:h-[16px] md:h-[20px] h-[29px] items-center justify-center rounded-radius50 sm:w-[15px] md:w-[19px] w-[29px]"
                    size="smIcn"
                    variant="icbFillYellow600"
                  >
                    <Img
                      src="images/img_search.svg"
                      className="h-[17px] sm:h-[10px] md:h-[12px] flex items-center justify-center"
                      alt="search"
                    />
                  </Button>
                </Column>
              </Column>
              <Button
                className="common-pointer flex sm:h-[43px] md:h-[56px] h-[80px] items-center justify-center sm:ml-[212px] md:ml-[274px] ml-[399px] rounded-radius50 sm:w-[42px] md:w-[55px] w-[80px]"
                onClick={handleNavigate9}
                size="lgIcn"
                variant="icbFillYellow600"
              >
                <Img
                  src="images/img_plus.svg"
                  className="h-[43px] sm:h-[23px] md:h-[30px] flex items-center justify-center"
                  alt="plus"
                />
              </Button>
            </Row>
            <Column className="flex flex-col items-center justify-start w-[100%]">
              <Column
                className="common-pointer flex flex-col items-center justify-end sm:p-[2px] md:p-[3px] p-[5px] w-[100%]"
                onClick={handleNavigate10}
              >
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:mt-[11px] mt-[17px] sm:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[94%]">
                  <Stack className="h-[125px] relative w-[125px] sm:w-[66px] md:w-[86px]">
                    <Stack className="absolute h-[125px] left-[0] sm:w-[100%] w-[75%]">
                      <Img
                        src="images/img_arrowleft.svg"
                        className="absolute h-[71px] left-[0] max-w-[100%] top-[0] sm:w-[100%] w-[66%]"
                        alt="arrowleft"
                      />
                      <Img
                        src="images/img_arrowleft.svg"
                        className="absolute bottom-[0] h-[71px] max-w-[100%] right-[0] sm:w-[100%] w-[66%]"
                        alt="arrowleft One"
                      />
                    </Stack>
                    <Img
                      src="images/img_arrowleft.svg"
                      className="absolute h-[71px] max-w-[100%] right-[0] top-[0] sm:w-[100%] w-[49%]"
                      alt="arrowleft Two"
                    />
                  </Stack>
                  <Column className="flex flex-col justify-start md:ml-[24px] ml-[35px] sm:mt-[11px] md:mt-[14px] mt-[21px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[14%]">
                    <Text
                      className="text-white_A700 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Nome Loja
                    </Text>
                    <Text
                      className="font-normal sm:mt-[12px] md:mt-[16px] mt-[24px] not-italic text-gray_500 w-[auto]"
                      variant="body1"
                    >
                      Criado em 00/00/0000
                    </Text>
                  </Column>
                  <Button
                    className="common-pointer flex sm:h-[43px] md:h-[56px] h-[80px] items-center justify-center sm:ml-[379px] md:ml-[490px] ml-[713px] sm:my-[11px] md:my-[15px] my-[22px] rounded-radius50 sm:w-[42px] md:w-[55px] w-[80px]"
                    onClick={handleNavigate11}
                    size="lgIcn"
                    variant="icbFillYellow600"
                  >
                    <Img
                      src="images/img_edit.svg"
                      className="h-[43px] sm:h-[23px] md:h-[30px] flex items-center justify-center"
                      alt="edit"
                    />
                  </Button>
                  <Button
                    className="flex sm:h-[43px] md:h-[56px] h-[80px] items-center justify-center sm:ml-[12px] md:ml-[15px] ml-[23px] sm:my-[11px] md:my-[15px] my-[22px] rounded-radius50 sm:w-[42px] md:w-[55px] w-[80px]"
                    size="lgIcn"
                    variant="icbFillRed500"
                  >
                    <Img
                      src="images/img_trash.svg"
                      className="h-[43px] sm:h-[23px] md:h-[30px] flex items-center justify-center"
                      alt="trash"
                    />
                  </Button>
                </Row>
              </Column>
              <Stack className="h-[299px] relative w-[100%]">
                <Column
                  className="common-pointer absolute flex flex-col items-center justify-end sm:p-[2px] md:p-[3px] p-[5px] top-[0] w-[100%]"
                  onClick={handleNavigate12}
                >
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:mt-[11px] mt-[17px] sm:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[94%]">
                    <Stack className="h-[125px] relative w-[125px] sm:w-[66px] md:w-[86px]">
                      <Stack className="absolute h-[125px] left-[0] sm:w-[100%] w-[75%]">
                        <Img
                          src="images/img_arrowleft.svg"
                          className="absolute h-[71px] left-[0] max-w-[100%] top-[0] sm:w-[100%] w-[66%]"
                          alt="arrowleft Three"
                        />
                        <Img
                          src="images/img_arrowleft.svg"
                          className="absolute bottom-[0] h-[71px] max-w-[100%] right-[0] sm:w-[100%] w-[66%]"
                          alt="arrowleft Four"
                        />
                      </Stack>
                      <Img
                        src="images/img_arrowleft.svg"
                        className="absolute h-[71px] max-w-[100%] right-[0] top-[0] sm:w-[100%] w-[49%]"
                        alt="arrowleft Five"
                      />
                    </Stack>
                    <Column className="flex flex-col justify-start md:ml-[24px] ml-[35px] sm:mt-[11px] md:mt-[14px] mt-[21px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[14%]">
                      <Text
                        className="text-white_A700 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Nome Loja
                      </Text>
                      <Text
                        className="font-normal sm:mt-[12px] md:mt-[16px] mt-[24px] not-italic text-gray_500 w-[auto]"
                        variant="body1"
                      >
                        Criado em 00/00/0000
                      </Text>
                    </Column>
                    <Button
                      className="common-pointer flex sm:h-[43px] md:h-[56px] h-[80px] items-center justify-center sm:ml-[379px] md:ml-[490px] ml-[713px] sm:my-[11px] md:my-[15px] my-[22px] rounded-radius50 sm:w-[42px] md:w-[55px] w-[80px]"
                      onClick={handleNavigate3}
                      size="lgIcn"
                      variant="icbFillYellow600"
                    >
                      <Img
                        src="images/img_edit.svg"
                        className="h-[43px] sm:h-[23px] md:h-[30px] flex items-center justify-center"
                        alt="edit One"
                      />
                    </Button>
                    <Button
                      className="flex sm:h-[43px] md:h-[56px] h-[80px] items-center justify-center sm:ml-[12px] md:ml-[15px] ml-[23px] sm:my-[11px] md:my-[15px] my-[22px] rounded-radius50 sm:w-[42px] md:w-[55px] w-[80px]"
                      size="lgIcn"
                      variant="icbFillRed500"
                    >
                      <Img
                        src="images/img_trash.svg"
                        className="h-[43px] sm:h-[23px] md:h-[30px] flex items-center justify-center"
                        alt="trash One"
                      />
                    </Button>
                  </Row>
                </Column>
                <Column
                  className="common-pointer absolute bottom-[0] flex flex-col items-center justify-end sm:p-[2px] md:p-[3px] p-[5px] w-[100%]"
                  onClick={handleNavigate4}
                >
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:mt-[11px] mt-[17px] sm:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[94%]">
                    <Stack className="h-[125px] relative w-[125px] sm:w-[66px] md:w-[86px]">
                      <Stack className="absolute h-[125px] left-[0] sm:w-[100%] w-[75%]">
                        <Img
                          src="images/img_arrowleft.svg"
                          className="absolute h-[71px] left-[0] max-w-[100%] top-[0] sm:w-[100%] w-[66%]"
                          alt="arrowleft Six"
                        />
                        <Img
                          src="images/img_arrowleft.svg"
                          className="absolute bottom-[0] h-[71px] max-w-[100%] right-[0] sm:w-[100%] w-[66%]"
                          alt="arrowleft Seven"
                        />
                      </Stack>
                      <Img
                        src="images/img_arrowleft.svg"
                        className="absolute h-[71px] max-w-[100%] right-[0] top-[0] sm:w-[100%] w-[49%]"
                        alt="arrowleft Eight"
                      />
                    </Stack>
                    <Column className="flex flex-col justify-start md:ml-[24px] ml-[35px] sm:mt-[11px] md:mt-[14px] mt-[21px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[14%]">
                      <Text
                        className="text-white_A700 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Nome Loja
                      </Text>
                      <Text
                        className="font-normal sm:mt-[12px] md:mt-[16px] mt-[24px] not-italic text-gray_500 w-[auto]"
                        variant="body1"
                      >
                        Criado em 00/00/0000
                      </Text>
                    </Column>
                    <Button
                      className="common-pointer flex sm:h-[43px] md:h-[56px] h-[80px] items-center justify-center sm:ml-[379px] md:ml-[490px] ml-[713px] sm:my-[11px] md:my-[15px] my-[22px] rounded-radius50 sm:w-[42px] md:w-[55px] w-[80px]"
                      onClick={handleNavigate5}
                      size="lgIcn"
                      variant="icbFillYellow600"
                    >
                      <Img
                        src="images/img_edit.svg"
                        className="h-[43px] sm:h-[23px] md:h-[30px] flex items-center justify-center"
                        alt="edit Two"
                      />
                    </Button>
                    <Button
                      className="flex sm:h-[43px] md:h-[56px] h-[80px] items-center justify-center sm:ml-[12px] md:ml-[15px] ml-[23px] sm:my-[11px] md:my-[15px] my-[22px] rounded-radius50 sm:w-[42px] md:w-[55px] w-[80px]"
                      size="lgIcn"
                      variant="icbFillRed500"
                    >
                      <Img
                        src="images/img_trash.svg"
                        className="h-[43px] sm:h-[23px] md:h-[30px] flex items-center justify-center"
                        alt="trash Two"
                      />
                    </Button>
                  </Row>
                </Column>
              </Stack>
              <Column
                className="common-pointer flex flex-col items-center justify-end sm:mt-[4px] md:mt-[5px] mt-[8px] sm:p-[2px] md:p-[3px] p-[5px] w-[100%]"
                onClick={handleNavigate6}
              >
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:mt-[11px] mt-[17px] sm:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[94%]">
                  <Stack className="h-[125px] relative w-[125px] sm:w-[66px] md:w-[86px]">
                    <Stack className="absolute h-[125px] left-[0] sm:w-[100%] w-[75%]">
                      <Img
                        src="images/img_arrowleft.svg"
                        className="absolute h-[71px] left-[0] max-w-[100%] top-[0] sm:w-[100%] w-[66%]"
                        alt="arrowleft Nine"
                      />
                      <Img
                        src="images/img_arrowleft.svg"
                        className="absolute bottom-[0] h-[71px] max-w-[100%] right-[0] sm:w-[100%] w-[66%]"
                        alt="arrowleft Ten"
                      />
                    </Stack>
                    <Img
                      src="images/img_arrowleft.svg"
                      className="absolute h-[71px] max-w-[100%] right-[0] top-[0] sm:w-[100%] w-[49%]"
                      alt="arrowleft Eleven"
                    />
                  </Stack>
                  <Column className="flex flex-col justify-start md:ml-[24px] ml-[35px] sm:mt-[11px] md:mt-[14px] mt-[21px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[14%]">
                    <Text
                      className="text-white_A700 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Nome Loja
                    </Text>
                    <Text
                      className="font-normal sm:mt-[12px] md:mt-[16px] mt-[24px] not-italic text-gray_500 w-[auto]"
                      variant="body1"
                    >
                      Criado em 00/00/0000
                    </Text>
                  </Column>
                  <Button
                    className="common-pointer flex sm:h-[43px] md:h-[56px] h-[80px] items-center justify-center sm:ml-[379px] md:ml-[490px] ml-[713px] sm:my-[11px] md:my-[15px] my-[22px] rounded-radius50 sm:w-[42px] md:w-[55px] w-[80px]"
                    onClick={handleNavigate7}
                    size="lgIcn"
                    variant="icbFillYellow600"
                  >
                    <Img
                      src="images/img_edit.svg"
                      className="h-[43px] sm:h-[23px] md:h-[30px] flex items-center justify-center"
                      alt="edit Three"
                    />
                  </Button>
                  <Button
                    className="flex sm:h-[43px] md:h-[56px] h-[80px] items-center justify-center sm:ml-[12px] md:ml-[15px] ml-[23px] sm:my-[11px] md:my-[15px] my-[22px] rounded-radius50 sm:w-[42px] md:w-[55px] w-[80px]"
                    size="lgIcn"
                    variant="icbFillRed500"
                  >
                    <Img
                      src="images/img_trash.svg"
                      className="h-[43px] sm:h-[23px] md:h-[30px] flex items-center justify-center"
                      alt="trash Three"
                    />
                  </Button>
                </Row>
              </Column>
            </Column>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default DashboardPage;
