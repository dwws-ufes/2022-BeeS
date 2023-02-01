import React from "react";

import { Column, Stack, Text, Row, Button } from "components";
import Footer from "components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import Header from "components/Header/Header";
import Beehive from "assets/images/Beehive.svg"

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Column className="bg-white_A700 flex flex-col font-inter items-center justify-start mx-[auto] w-[100%]">
        <Stack className="h-[740px] relative w-[100%]">
          <Column className="absolute bg-black_900 bottom-[0] flex flex-col justify-end sm:p-[15px] md:p-[52px] p-[77px] w-[100%]">
            <Column className="flex flex-col items-center justify-start md:ml-[13px] ml-[19px] sm:mt-[14px] md:mt-[19px] mt-[28px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[92%]">
              <Column className="flex flex-col justify-start w-[100%]">
                <Text className="text-white_A700 w-[auto]" as="h2" variant="h2">
                  Brazilian Enterprise of Efficient Storage
                </Text>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mt-[23px] md:mt-[30px] mt-[45px] w-[100%]">
                  <Text
                    className="leading-[normal] sm:mx-[0] text-white_A700 sm:w-[100%] w-[62%]"
                    as="h5"
                    variant="h5"
                  >
                    O BeeS é um sistema online para gerenciamento inteligente e controle de estoque para serviços locais e web. Trata-se de uma plataforma especializada em gerir produtos e equipes de maneira eficiente e otimizada, criando um ambiente de alta usabilidade e adaptabilidade. Inspirado na forma de sociedade das abelhas (<i>bees</i> em inglês), que se organizam de modo altamente conciso dividindo as atividades e funções de acordo com suas diferenciações anatômicas, o BeeS apresenta um modelo de organização capaz de promover maior integração entre unidades de trabalho, com sistemas de banco de dados bem formulados capazes de entregar resultados da melhor maneira possível.  
                  </Text>
                  <div className="bg-black_900 sm:h-[134px] md:h-[173px] h-[251px] sm:mb-[44px] md:mb-[57px] mb-[83px] mt-[14px] sm:mt-[7px] md:mt-[9px] w-[26%]"><img src={Beehive}></img></div>
                </Row>
              </Column>
            </Column>
          </Column>
          <Header/>
        </Stack>
        <Footer className="bg-yellow_600 w-[100%]" />
      </Column>
    </>
  );
};

export default MainPage;
