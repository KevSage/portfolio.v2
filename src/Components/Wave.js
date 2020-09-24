import React from "react";
import styled from "styled-components";

const Wave = () => {
  const Design = styled.div`
    // position: absolute;
    // height: 70px;
    // width: 100%;
    // background: #e0efe3;
  `;
  return (
    <Design>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="indigo"
          fill-opacity="1"
          d="M0,192L18.5,181.3C36.9,171,74,149,111,149.3C147.7,149,185,171,222,154.7C258.5,139,295,85,332,64C369.2,43,406,53,443,64C480,75,517,85,554,80C590.8,75,628,53,665,69.3C701.5,85,738,139,775,149.3C812.3,160,849,128,886,144C923.1,160,960,224,997,245.3C1033.8,267,1071,245,1108,250.7C1144.6,256,1182,288,1218,277.3C1255.4,267,1292,213,1329,202.7C1366.2,192,1403,224,1422,240L1440,256L1440,0L1421.5,0C1403.1,0,1366,0,1329,0C1292.3,0,1255,0,1218,0C1181.5,0,1145,0,1108,0C1070.8,0,1034,0,997,0C960,0,923,0,886,0C849.2,0,812,0,775,0C738.5,0,702,0,665,0C627.7,0,591,0,554,0C516.9,0,480,0,443,0C406.2,0,369,0,332,0C295.4,0,258,0,222,0C184.6,0,148,0,111,0C73.8,0,37,0,18,0L0,0Z"
        ></path>
      </svg>
    </Design>
  );
};
export default Wave;