import * as React from "react";
import { SVGProps } from "react";

const SvgMods = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 453.857 453.857"
    {...props}
  >
    <defs>
      <linearGradient
        id="mods_svg__a"
        x1={0.5}
        x2={0.5}
        y2={1}
        gradientUnits="objectBoundingBox"
      >
        <stop offset={0} stopColor="#6aa1ff" />
        <stop offset={1} stopColor="#355180" />
      </linearGradient>
    </defs>
    <path
      data-name="Icon material-person-outline"
      d="M232.929 59.9a59.569 59.569 0 1 1-59.569 59.569A59.561 59.561 0 0 1 232.929 59.9m0 255.295c84.247 0 173.033 41.414 173.033 59.569v31.2H59.9v-31.2c0-18.154 88.786-59.569 173.033-59.569m0-309.19a113.464 113.464 0 1 0 113.46 113.459A113.433 113.433 0 0 0 232.929 6Zm0 255.295C157.191 261.295 6 299.305 6 374.759v85.1h453.857v-85.1c0-75.454-151.191-113.464-226.928-113.464Z"
      transform="translate(-6 -6)"
      fill="url(#mods_svg__a)"
    />
  </svg>
);

export default SvgMods;
