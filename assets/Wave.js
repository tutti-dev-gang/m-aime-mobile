import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SVGComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" {...props}>
    <Path
      fill="#FFE6C9"
      fillOpacity={1}
      d="M0,128L80,133.3C160,139,320,149,480,133.3C640,117,800,75,960,69.3C1120,64,1280,96,1360,112L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
    />
  </Svg>
);
export default SVGComponent;
