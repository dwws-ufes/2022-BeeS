import React from "react";

import { Row, Button } from "components";
import { useNavigate } from "react-router-dom";
import { isLoggedIn, loggout } from "api";

const Header = (props) => {
  const navigate = useNavigate();

  function loggoutTrigg() {
    loggout()
    navigate("/");
  }
  function pagDash() {
    navigate("/dashboard");
  }

  function pagLog() {
    navigate("/login");
  }

  return (
    <>
      <header className={props.className}>
        <Row className="bg-yellow_600 flex flex-row md:flex-wrap sm:flex-wrap items-center sm:p-[15px] md:p-[16px] p-[24px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap md:ml-[15px] ml-[22px] mt-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%] common-row-list common-row-list common-row-list common-row-list">
            <ul className="flex flex-row">
              <li className="w-[4%] sm:w-[100%] sm:my-[10px]">
                <div className="bg-white_A700 sm:h-[20px] md:h-[26px] h-[37px]"></div>
              </li>
              <li className="w-[auto] sm:w-[100%] sm:my-[10px]">
                <a
                  href={"javascript:"}
                  className="cursor-pointer font-bold font-inter sm:text-[28px] md:text-[30px] text-[32px] text-black_901"
                  rel="noreferrer"
                >
                  BeeS
                </a>
              </li>
              {
                isLoggedIn() ? (<>
                  <li className="w-[max-content] sm:w-[100%] sm:my-[10px] min-w-[9%] text-center">
                    <Button
                      className="common-pointer cursor-pointer font-bold font-inter text-[15px] text-center"
                      onClick={pagDash}
                      shape="RoundedBorder19"
                      size="sm"
                      variant="FillBlack902"
                    >
                      Dashboard
                    </Button>
                  </li>
                  <li className="w-[max-content] sm:w-[100%] sm:my-[10px] min-w-[9%] text-center">
                    <Button
                      className="common-pointer cursor-pointer font-bold font-inter text-[15px] text-center"
                      onClick={loggoutTrigg}
                      shape="RoundedBorder19"
                      size="sm"
                      variant="FillBlack902"
                    >
                      Deslogar
                    </Button>
                  </li></>
                ) : (<>
                  <Button
                    className="common-pointer cursor-pointer font-bold min-w-[9%] ml-[1091px] sm:ml-[581px] md:ml-[750px] text-[15px] text-center w-[max-content]"
                    onClick={pagLog}
                    shape="RoundedBorder19"
                    size="sm"
                    variant="FillBlack902"
                  >
                    Login
                  </Button>
                </>)
              }
            </ul>
          </Row>
        </Row>
      </header>
    </>
  );
};

export default Header;
