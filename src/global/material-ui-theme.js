import {
  blue600,
  blue900,
  blueGrey600,
  white,
  blueA200,
  blueA100,
  grey400,
  blue200,
  darkBlack,
  fullBlack,
} from 'material-ui/styles/colors';

import { fade } from 'material-ui/utils/colorManipulator';
import { spacing, getMuiTheme } from 'material-ui/styles';

// blueA200 is the pink accent
const rawBaseTheme = {
  ...spacing,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: blue900,
    primary2Color: blue600,
    primary3Color: blueGrey600,
    accent1Color: blueA200,
    accent2Color: blueA100,
    accent3Color: blue200,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey400,
    disabledColor: fade(darkBlack, 0.3),
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack,
  },
};

export default getMuiTheme(rawBaseTheme);
