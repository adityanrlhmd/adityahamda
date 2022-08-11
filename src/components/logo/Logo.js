import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  svgHover: {
    fill: theme.palette.foreground.default,
    "&:hover": {
        fill: theme.palette.primary.main,
    },
    transition: "all 0.5s ease",
  },
}));

export const Logo = () => {
    const classes = useStyles();

    return (
      <svg 
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-35 -10 220 220"
        className={classes.svgHover}
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_5" data-name="Layer 5">
            <path d="M736 1397 c-20 -35 -36 -68 -36 -73 0 -5 70 -139 155 -299 117 -222 151 -293 142 -301 -12 -12 -205 -134 -211 -134 -2 0 -57 101 -122 225 -65 123 -121 221 -125 217 -3 -4 -118 -226 -253 -494 l-247 -488 70 0 71 0 218 137 c549 345 663 414 673 411 5 -2 75 -125 153 -273 l143 -270 77 -3 77 -3 -17 33 c-9 18 -135 256 -279 528 -144 272 -299 567 -345 655 -116 222 -101 209 -144 132z m-116 -788 l48 -95 -41 -26 c-23 -14 -100 -62 -171 -107 -71 -45 -131 -79 -134 -77 -2 3 47 102 108 222 129 249 110 241 190 83z"/>
            <path d="M822 375 c-28 -20 -52 -38 -52 -42 0 -3 33 -68 73 -144 l72 -139 73
            0 c39 0 72 3 72 6 0 7 -180 354 -183 354 -1 0 -26 -16 -55 -35z"/>
          </g>
        </g>
        {/* <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_5" data-name="Layer 5">
            <rect className="cls-1" x="0.47" y="31.33" width="9.9" height="133.85" rx="3.75"/>
            <rect className="cls-1" x="133.62" y="57.1" width="9.9" height="108.08" rx="3.75"/>
            <rect className="cls-1" x="30.39" y="21.71" width="9.9" height="112.54" rx="3.75" transform="translate(-38.83 35.21) rotate(-35.65)"/>
            <rect className="cls-1" x="90.6" y="-17.08" width="9.9" height="201.44" rx="3.75" transform="translate(65.78 -39.81) rotate(35.24)"/>
            <rect className="cls-1" x="78.17" y="39.68" width="9.9" height="201.55" rx="3.75" transform="translate(96.28 -22.22) rotate(35.24)"/>
          </g>
        </g> */}
      </svg>
    );
};
