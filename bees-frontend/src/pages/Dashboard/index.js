import React, { useEffect, useState } from "react";

import { Column, Row, Text, Button, Img, Line, Input } from "components";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import { getBeehivesOfUser } from "api";
import { BeehiveItem } from "components/BeehiveItem";
import Beehive from "assets/images/Beehive.svg"

const DashboardPage = () => {
  const navigate = useNavigate();

  const [beehives, setBeehives] = useState([])
  const [page, setPage] = useState(0)
  const [name, setName] = useState(undefined)

  useEffect(() => {
    getBeehivesOfUser((page * 3) - page, 3, name).then((res)  => {
      if(res.data.beehives.length !== 0){
        setBeehives(res.data.beehives)
      }else{
        setPage((prev) => prev - 1)
      }
    })
  }, [page])

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
      <Column className="bg-black_900 flex flex-col font-inter items-center justify-start mx-[auto] md:pb-[112px] sm:pb-[150px] pb-[180px] w-[100%]">
        <Column className="flex flex-col items-center justify-start w-[100%]">
          <Header className="w-[100%]" />
          <Column className="flex flex-col items-center justify-start max-w-[1311px] sm:mt-[43px] md:mt-[56px] mt-[82px] sm:mx-[0] mx-[auto] sm:px-[15px] w-[100%]">
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[94%]">
            <div className="pr-[10px]"><img src={Beehive} width="60px"></img></div>
              <Text className="text-white_A700 w-[auto]" as="h3" variant="h3">
                Beehives
              </Text>
              <Column className="flex flex-col md:ml-[35px] ml-[51px] sm:mx-[0] p-[4px] sm:px-[0] sm:w-[100%] w-[44%]">
                <Text
                  className="ml-[4px] mt-[1px] text-white_A700 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Procurar
                </Text>
                <Input placeholder="Nome da colméia" wrapClassName="flex" value={name} onChange={(e) => setName(e.target.value)} className="bg-gray_200 border border-black_900 border-solid flex flex-col items-end justify-start ml-[4px] mt-[4px] sm:mx-[0] pl-[1px] py-[1px] rounded-radius14 sm:w-[100%] w-[97%]">
                  <Button
                    className="flex sm:h-[16px] md:h-[20px] h-[29px] items-center justify-center rounded-radius50 sm:w-[15px] md:w-[19px] w-[29px]"
                    style={{index: 999}}
                    size="smIcn"
                    variant="icbFillYellow600"
                    onClick={() => {
                      getBeehivesOfUser(0, 3, name).then((res)  => {
                        if(res.data.beehives.length !== 0){
                          setBeehives(res.data.beehives)
                        }else{
                          setPage((prev) => prev - 1)
                        }
                      })
                      setPage(0)
                    }}
                  >
                    <Img
                      src="images/img_search.svg"
                      className="h-[17px] sm:h-[10px] md:h-[12px] flex items-center justify-center"
                      alt="search"
                    />
                  </Button>
                </Input>
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
              {
                beehives.map((beehive) => <BeehiveItem name={beehive.name} id={beehive.id}/>)
              }
            </Column>
            <Row className="bg-gray_900 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end sm:mt-[29px] md:mt-[37px] mt-[200px] sm:w-[100%] w-[350px] h-[100px]">
              
              <div onClick={() => setPage((prev) => {
                  if (prev - 1 >= 0) {
                    return prev - 1
                  } else {
                    return 0
                  }
                })}>
                <Img
                  src="images/arrow_forward_ios.svg"
                  className="max-w-[100%] ml-[14px] sm:ml-[7px] md:ml-[9px] w-[15%] rotate-[180deg]"
                  alt="arrowright"
                />
                </div>

                <div onClick={() => setPage((prev) => {
                    if(prev <= 0){
                      return 0
                    }
                    return prev - 1
                  })}>
                </div>

                <Text
                  className="font-bold flex flex-col items-center justify-center sm:ml-[4px] md:ml-[6px] ml-[9px] text-yellow_600 md:tracking-ls10 tracking-ls14549999999999999 sm:tracking-ls7 w-[150%]"
                  variant="body1"
                >
                  {page} {page + 1} { page + 2 }
                </Text>

                <div onClick={() => setPage((prev) => {
                  return prev + 1
                })}>
                <Img
                  src="images/arrow_forward_ios.svg"
                  className="max-w-[100%] ml-[14px] sm:ml-[7px] md:ml-[9px] w-[15%]"
                  alt="arrowright"
                />
                </div>

              </Row>
          </Column>
        </Column>
      </Column>
      <Footer className="bg-yellow_600 w-[100%]" />
    </>
  );
};

export default DashboardPage;
