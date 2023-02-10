import React, { useEffect, useState } from "react";

import { Column, Text, Grid, Img, Row, Line, Button, Input } from "components";
import Header from "components/Header/Header";
import { useLocation, useNavigate } from "react-router-dom";
import { createHoneycomb, deleteHoneycomb, getBeehive, getHoneycombsOfBeehive, querySparql, updateHoneycomb } from "api";
import "./style.css"



const LojaPage = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [name, setName] = useState("")
  const [newHoneycomb, setNewHoneycomb] = useState({
    sku: "",
    name: "",
    quantity: 0
  })
  const [beehiveName, setBeehiveName] = useState("")
  const [honeycombs, setHoneycombs] = useState([])
  const [pageNo, setPageNo] = useState(0)
  const [editMode, setEditMode] = useState({
    index: -1,
    edit: false
  })
  const pageSize = 12
  const [addMode, setAddMode] = useState(false)

  useEffect(() => {
    getBeehive(location.state.id).then((beehive) => {
      setBeehiveName(beehive.data.beehive.name)
      getHoneycombsOfBeehive(beehive.data.beehive.id, (pageNo * pageSize) - pageNo, pageSize, name).then((honeycombs) => {
        setHoneycombs(honeycombs.data.honeycombs.map((honeycomb) => {
          return {
            ...honeycomb,
            oldSku: honeycomb.sku
          }
        }))
        
      })
    })
  }, [pageNo])

  return (
    <>
      <Column className="bg-black_900 flex flex-col font-inter items-center justify-start mx-[auto] sm:pb-[15px] md:pb-[41px] pb-[61px] w-[100%]">
        <Column className="flex flex-col items-center justify-start w-[100%]">
          <Header className="w-[100%]" />
          {
            addMode ? <div style={{marginTop: "100px"}}>
              <Text
                  className="ml-[4px] mt-[1px] text-white_A700 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  SKU
                </Text>
            <Input value={newHoneycomb.sku} onChange={(e) => setNewHoneycomb((prev) => ({
              ...prev,
              sku: e.target.value
            }))}/>
            <Text
                  className="ml-[4px] mt-[1px] text-white_A700 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Nome
                </Text>
            <Input value={newHoneycomb.name} onChange={(e) => setNewHoneycomb((prev) => ({
              ...prev,
              name: e.target.value
            }))}/>
            <Text
                  className="ml-[4px] mt-[1px] text-white_A700 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Quantidade
                </Text>
            <Input value={newHoneycomb.quantity} onChange={(e) => setNewHoneycomb((prev) => ({
              ...prev,
              quantity: Number(e.target.value)
            }))}/>
          </div> :  <></>
          }
          <Column className="flex flex-col justify-start max-w-[1273px] mt-[100px] sm:mt-[53px] md:mt-[68px] sm:mx-[0] mx-[auto] sm:px-[15px] w-[100%]">
            <Row style={{display: "flex", flexDirection: "row"}}><Text
              className="sm:ml-[10px] md:ml-[13px] ml-[20px] text-white_A700 w-[auto]"
              as="h1"
              variant="h1"
            >
              {beehiveName}
            </Text>
            <Button
                className="common-pointer flex sm:h-[43px] md:h-[56px] h-[80px] items-center justify-center sm:ml-[212px] md:ml-[400px] ml-[800px] rounded-radius50 sm:w-[42px] md:w-[55px] w-[80px]"
                onClick={addMode ? () => createHoneycomb(newHoneycomb.sku, newHoneycomb.name, "TESTE", newHoneycomb.quantity, new Date(), location.state.id).then(() => {
                  setAddMode(false)
                  getHoneycombsOfBeehive(location.state.id, (pageNo * pageSize) - pageNo, pageSize, name).then((honeycombs) => {
                    setHoneycombs(honeycombs.data.honeycombs.map((honeycomb) => {
                      return {
                        ...honeycomb,
                        oldSku: honeycomb.sku
                      }
                    }))
                    
                  })
                }) : () => setAddMode(true)}
                size="lgIcn"
                variant="icbFillYellow600"
              >
                <Img
                  src={addMode ? "images/img_save.svg" : "images/img_plus.svg"}
                  className="h-[43px] sm:h-[23px] md:h-[30px] flex items-center justify-center"
                  alt="plus"
                />
              </Button></Row>
            <Column className="flex flex-col items-center justify-start mt-[108px] sm:mt-[57px] md:mt-[74px] w-[100%]">
              <Grid className="sm:gap-[20px] md:gap-[26px] gap-[38px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-6 min-h-[auto] w-[100%]">
                {
                  honeycombs.map((honeycomb, index) => (
                    <Column className="honeyhover flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                        <Img
                          src="images/img_arrowleft.svg"
                          className="max-w-[100%] sm:w-[100%] w-[60%]"
                          alt="arrowleft One"
                        />
                        <Row style={{display: "flex", flexDirection: "row"}}>
                          {
                            editMode.index === index && editMode.edit ? <Input value={honeycomb.sku} onChange={(e) => setHoneycombs((prev) => {
                              let newVec = [...prev]
                              newVec[index].sku = e.target.value
                              return newVec
                            })}/> : <Text
                            className="hidden mt-[3px] text-white_A700 w-[auto]"
                            as="h7"
                            variant="h7"
                          >SKU: {honeycomb.sku}</Text>
                          }
                          <Button
                              className="hidden flex sm:h-[16px] md:h-[21px] h-[30px] items-center justify-center sm:my-[3px] md:my-[4px] my-[7px] sm:w-[15px] md:w-[20px] w-[30px]"
                              shape="icbRoundedBorder14"
                              size="smIcn"
                              variant="icbFillYellow600"
                              style={{marginRight: "5px"}}
                              onClick={() => {
                                setEditMode((prev) => {
                                  if(prev.index === index){
                                    return {
                                      index,
                                      edit: !(prev.edit)
                                    }
                                  }
                                  return {
                                    index,
                                    edit: true
                                  }
                                })
                              }}
                            >
                              <Img
                                src="images/img_edit.svg"
                                className="h-[26px] sm:h-[12px] md:h-[25px] flex items-center justify-center"
                                alt="minus"
                              />
                          </Button>
                          </Row>
                        
                        {
                          editMode.index === index && editMode.edit ? <Input value={honeycomb.name} onChange={(e) => setHoneycombs((prev) => {
                            let newVec = [...prev]
                            newVec[index].name = e.target.value
                            return newVec
                          })}/> : <><Text
                          className="mt-[3px] text-white_A700 w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          {honeycomb.name}
                        </Text><Text>{querySparql(honeycomb.name).then((data) => {
                          console.log(data)
                          return "teste"
                        })}</Text></>
                        }
                        <Text
                          className="hidden mt-[3px] text-white_A700 w-[auto]"
                          as="h7"
                          variant="h7"
                        >QTD:</Text>
                        <Row style={{flexDirection: "row", display: "flex"}}>
                          <Column>
                            <Button
                              className="hidden flex sm:h-[16px] md:h-[21px] h-[30px] items-center justify-center sm:my-[3px] md:my-[4px] my-[7px] sm:w-[15px] md:w-[20px] w-[30px]"
                              shape="icbRoundedBorder14"
                              size="smIcn"
                              variant="icbFillYellow600"
                              style={{marginRight: "5px"}}
                              onClick={() => {
                                setHoneycombs((prev) => {
                                  if(prev[index].quantity <= 0){
                                    return prev
                                  }
                                  const newVec = prev.map((v) => Object.assign({}, v))
                                  newVec[index].quantity = newVec[index].quantity - 1
                                  return newVec
                                })
                              }}
                            >
                              <Img
                                src="images/img_minus.svg"
                                className="h-[26px] sm:h-[12px] md:h-[25px] flex items-center justify-center"
                                alt="minus"
                              />
                            </Button>
                          </Column>
                          <Column>
                            <Text
                              className="hidden mt-[3px] text-white_A700 w-[auto]"
                              as="h4"
                              variant="h4"
                            >{honeycomb.quantity}</Text>
                          </Column>
                          <Column>
                            <Button
                              className="hidden flex sm:h-[16px] md:h-[21px] h-[30px] items-center justify-center sm:my-[3px] md:my-[4px] my-[7px] sm:w-[15px] md:w-[20px] w-[30px]"
                              shape="icbRoundedBorder14"
                              size="smIcn"
                              variant="icbFillYellow600"
                              style={{marginLeft: "5px"}}
                              onClick={(e) => setHoneycombs((prev) => {
                                  const newVec = prev.map((v) => Object.assign({}, v))
                                  newVec[index].quantity += 1
                                  return newVec
                                })
                              }
                            >
                              <Img
                                src="images/img_plus.svg"
                                className="h-[16px] sm:h-[9px] md:h-[12px] flex items-center justify-center"
                                alt="plus"
                              />
                            </Button>
                          </Column>
                        </Row>
                        <Row style={{display: "flex", flexDirection: "row", justifyContent: "space-betweem"}}>
                        <Button
                              className="hidden flex sm:h-[16px] md:h-[21px] h-[30px] items-center justify-center sm:my-[3px] md:my-[4px] my-[7px] sm:w-[15px] md:w-[20px] w-[30px]"
                              shape="icbRoundedBorder14"
                              size="smIcn"
                              variant="icbFillYellow600"
                              style={{marginLeft: "5px"}}
                              onClick={() => {
                                setEditMode({
                                  index: -1,
                                  edit: false
                                })
                                updateHoneycomb(honeycomb.oldSku, location.state.id, honeycomb.sku, honeycomb.name, honeycomb.description, honeycomb.quantity, honeycomb.expiry)
                                .then(() => getHoneycombsOfBeehive(location.state.id, (pageNo * pageSize) - pageNo, pageSize, name).then((honeycombs) => {
                                  setHoneycombs(honeycombs.data.honeycombs.map((honeycomb) => {
                                    return {
                                      ...honeycomb,
                                      oldSku: honeycomb.sku
                                    }
                                  }))
                                  
                                }))
                              }}
                            >
                              <Img
                                src="images/img_save.svg"
                                className="h-[16px] sm:h-[9px] md:h-[12px] flex items-center justify-center"
                                alt="save"
                              />
                            </Button>
                            <Button
                              className="hidden flex sm:h-[16px] md:h-[21px] h-[30px] items-center justify-center sm:my-[3px] md:my-[4px] my-[7px] sm:w-[15px] md:w-[20px] w-[30px]"
                              shape="icbRoundedBorder14"
                              size="smIcn"
                              variant="icbFillRed500"
                              style={{marginLeft: "5px"}}
                              onClick={() => deleteHoneycomb(honeycomb.oldSku, location.state.id).then(() => {
                                getHoneycombsOfBeehive(location.state.id, (pageNo * pageSize) - pageNo, pageSize, name).then((honeycombs) => {
                                  setHoneycombs(honeycombs.data.honeycombs.map((honeycomb) => {
                                    return {
                                      ...honeycomb,
                                      oldSku: honeycomb.sku
                                    }
                                  }))
                                  
                                })
                              })}
                            >
                              <Img
                                src="images/img_trash.svg"
                                className="h-[16px] sm:h-[9px] md:h-[12px] flex items-center justify-center"
                                alt="trash"
                              />
                            </Button>
                        </Row>
                      </Column>
                  ))
                }
                
                
              </Grid>
              <Row className="bg-gray_900 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end sm:mt-[29px] md:mt-[37px] mt-[55px] sm:mx-[0] px-[12px] sm:px-[6px] md:px-[8px] sm:w-[100%] w-[15%]">
                <Line className="bg-black_900 sm:h-[18px] md:h-[23px] h-[33px] rotate-[180deg] w-[1px]" />
                <Text
                  className="font-bold sm:ml-[4px] md:ml-[6px] ml-[9px] text-yellow_600 md:tracking-ls10 tracking-ls14549999999999999 sm:tracking-ls7 w-[auto]"
                  variant="body1"
                >
                  1 2 3
                </Text>
                <Line className="bg-black_900 sm:h-[18px] md:h-[23px] h-[33px] ml-[10px] sm:ml-[5px] md:ml-[6px] rotate-[180deg] w-[1px]" />
                <Img
                  src="images/img_arrowleft.svg"
                  className="max-w-[100%] ml-[14px] sm:ml-[7px] md:ml-[9px] w-[7%]"
                  alt="arrowright"
                />
              </Row>
            </Column>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default LojaPage;
