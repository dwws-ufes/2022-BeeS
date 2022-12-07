import React from "react";
import PropTypes from "prop-types";
import { Column, Row, Stack, Img, Text, Button } from "components"
import { useNavigate } from "react-router-dom";
import { deleteBeehive } from "../../api";

const BeehiveItem = ({
    name = "",
    id = -1
}) => {
    const navigate = useNavigate();

    return (
    <>
        <Column
            className="common-pointer flex flex-col items-center justify-end sm:p-[2px] md:p-[3px] p-[5px] w-[100%]"
            onClick={() => navigate("/loja", {
                state: {
                    id
                }
            })}
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
                        {name}
                    </Text>
                </Column>
                <Button
                    className="common-pointer flex sm:h-[43px] md:h-[56px] h-[80px] items-center justify-center sm:ml-[379px] md:ml-[490px] ml-[713px] sm:my-[11px] md:my-[15px] my-[22px] rounded-radius50 sm:w-[42px] md:w-[55px] w-[80px]"
                    onClick={() => navigate("/editcreatebeehive", {
                        state: {
                            id
                        }
                    })}
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
                    onClick={() => {
                        deleteBeehive(id).then(() => navigate("/dashboard"))
                    }}
                >
                    <Img
                        src="images/img_trash.svg"
                        className="h-[43px] sm:h-[23px] md:h-[30px] flex items-center justify-center"
                        alt="trash"
                    />
                </Button>
            </Row>
        </Column>
    </>)
}

BeehiveItem.propTypes = {
    name: PropTypes.string,
    id: PropTypes.number
}

BeehiveItem.defaultProps = {
    name: "",
    id: -1
}

export { BeehiveItem }