import { SVGProps } from "react";
import variables from '../scss/Variables.module.scss';


const SvgDatabase = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 45.937 52.5"
    {...props}
  >
    <path
      d="M45.937 7.5v4.687c0 4.131-10.288 7.5-22.969 7.5S0 16.318 0 12.187V7.5C0 3.369 10.288 0 22.969 0s22.968 3.369 22.968 7.5Zm0 10.547v10.547c0 4.131-10.288 7.5-22.969 7.5S0 32.725 0 28.594V18.047c4.935 3.4 13.967 4.981 22.969 4.981S41 21.445 45.937 18.047Zm0 16.406V45c0 4.131-10.288 7.5-22.969 7.5S0 49.131 0 45V34.453c4.935 3.4 13.967 4.981 22.969 4.981S41 37.852 45.937 34.453Z"
      fill='' // removed so I can change from scss file 
    />
  </svg>
);

export default SvgDatabase;
