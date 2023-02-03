import React, { useState } from "react";

import { Column, Text, Input, Button } from "components";
import { useNavigate } from "react-router-dom";
import { register } from "../../api";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";

const RegisterPage = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function criarConta() {
    /*register(name, email, password)
      .then(() => navigate("/"))
      .catch((e) => console.log("Error: ", e.message))*/
      navigate("/dashboard")
  }

  return (
    <>
    <Header/>
      <Column className="bg-yellow_500 flex flex-col font-inter items-center justify-start mx-[auto] sm:p-[15px] md:p-[170px] p-[45px] w-[100%]">
        <Column className="bg-black_900 flex flex-col items-center justify-start max-w-[558px] mb-[1px] mx-[auto] sm:p-[3px] md:p-[4px] p-[6px] sm:px-[15px] rounded-radius33 w-[100%]">
          <Column className="flex flex-col justify-start sm:mt-[17px] md:mt-[22px] mt-[33px] sm:mx-[0] pt-[1px] sm:px-[0] px-[1px] sm:w-[100%] w-[94%]">
            <Text
              className="sm:ml-[3px] md:ml-[4px] ml-[7px] mt-[4px] text-white_A700 w-[auto]"
              as="h6"
              variant="h6"
            >
              Nome
            </Text>
            <Input
              onChange={(e) => {
                setName(e.target.value)
              }}
              value={name}
              className="w-[100%]"
              wrapClassName="flex h-[31px] md:ml-[4px] ml-[7px] mt-[4px] sm:mx-[0] sm:w-[100%] w-[99%]"
              name="Input"
              placeholder=""
            ></Input>
          </Column>
          <Column className="flex flex-col justify-start sm:mt-[33px] md:mt-[43px] mt-[63px] sm:mx-[0] pt-[1px] sm:px-[0] px-[1px] sm:w-[100%] w-[94%]">
            <Text
              className="sm:ml-[3px] md:ml-[4px] ml-[7px] mt-[4px] text-white_A700 w-[auto]"
              as="h6"
              variant="h6"
            >
              Email
            </Text>
            <Input
              onChange={(e) => {
                setEmail(e.target.value)
              }}
              value={email}
              className="w-[100%]"
              wrapClassName="flex h-[31px] md:ml-[4px] ml-[7px] mt-[4px] sm:mx-[0] sm:w-[100%] w-[99%]"
              name="Input One"
              placeholder="example@email.com"
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
              onChange={(e) => {
                setPassword(e.target.value)
              }}
              value={password}
              className="w-[100%]"
              wrapClassName="flex h-[31px] ml-[4px] mt-[4px] sm:mx-[0] sm:w-[100%] w-[97%]"
              name="Input Two"
              placeholder=""
              type="password"
            ></Input>
          </Column>
          <Button
            className="common-pointer cursor-pointer font-bold sm:mb-[30px] md:mb-[39px] mb-[58px] min-w-[21%] sm:mt-[33px] md:mt-[43px] mt-[63px] text-[15px] text-center w-[max-content]"
            onClick={criarConta}
            shape="RoundedBorder19"
            size="sm"
            variant="FillYellow600"
          >
            Criar conta
          </Button>
        </Column>
      </Column>
      <Footer className="bg-yellow_600 w-[100%]" />
    </>
  );
};

export default RegisterPage;
