import React from "react";

import { Column, Text, Input, Button } from "components";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  function handleNavigate14() {
    navigate("/maintwo");
  }
  function handleNavigate15() {
    navigate("/register");
  }

  return (
    <>
      <Column className="bg-yellow_600 flex flex-col font-inter items-center justify-start mx-[auto] sm:p-[15px] md:p-[178px] p-[260px] w-[100%]">
        <Column className="bg-black_900 flex flex-col items-center justify-start max-w-[558px] mx-[auto] sm:p-[3px] md:p-[4px] p-[6px] sm:px-[15px] rounded-radius33 w-[100%]">
          <Column className="flex flex-col justify-start sm:mt-[37px] md:mt-[48px] mt-[71px] sm:mx-[0] pt-[1px] sm:px-[0] px-[1px] sm:w-[100%] w-[94%]">
            <Text
              className="sm:ml-[3px] md:ml-[4px] ml-[7px] mt-[4px] text-white_A700 w-[auto]"
              as="h6"
              variant="h6"
            >
              Email
            </Text>
            <Input
              className="w-[100%]"
              wrapClassName="flex h-[31px] md:ml-[4px] ml-[7px] mt-[4px] sm:mx-[0] sm:w-[100%] w-[99%]"
              name="Input"
              placeholder=""
            ></Input>
          </Column>
          <Column className="flex flex-col justify-end sm:mt-[33px] md:mt-[43px] mt-[63px] sm:mx-[0] p-[4px] sm:px-[0] sm:w-[100%] w-[97%]">
            <Text
              className="ml-[4px] mt-[1px] text-white_A700 w-[auto]"
              as="h6"
              variant="h6"
            >
              Senha
            </Text>
            <Input
              className="w-[100%]"
              wrapClassName="flex h-[31px] ml-[4px] mt-[4px] sm:mx-[0] sm:w-[100%] w-[97%]"
              name="Input One"
              placeholder=""
            ></Input>
          </Column>
          <Button
            className="common-pointer cursor-pointer font-bold min-w-[21%] sm:mt-[33px] md:mt-[43px] mt-[63px] text-[15px] text-center w-[max-content]"
            onClick={handleNavigate14}
            shape="RoundedBorder19"
            size="sm"
            variant="FillYellow600"
          >
            Logar
          </Button>
          <Button
            className="common-pointer cursor-pointer font-bold sm:mb-[26px] md:mb-[34px] mb-[50px] min-w-[21%] sm:mt-[18px] md:mt-[24px] mt-[35px] text-[15px] text-center w-[max-content]"
            onClick={handleNavigate15}
            shape="RoundedBorder19"
            size="sm"
            variant="FillBlack902"
          >
            Criar conta
          </Button>
        </Column>
      </Column>
    </>
  );
};

export default LoginPage;
