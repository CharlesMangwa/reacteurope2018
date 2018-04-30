import React, { Component } from "react";
import { Deck } from "spectacle";
import createTheme from "spectacle/lib/themes/default";
import preloader from "spectacle/lib/utils/preloader";

import * as Slides from "./slides";

require("normalize.css");

const images = {
  bgPattern: require("../assets/background.png")
};

preloader(images);

const theme = createTheme({
  primary: "#D11149",
  secondary: "#D11149",
  //
  blueTalk: "#4A90E2",
  greyTalk: "#1F1F1F",
  redTalk: "#D11149",
  whiteTalk: "#FEFEFE"
}, {
  primary: { name: "Source Sans Pro", googleFont: true, styles: [ "400", "500", "600", "900" ] },
  secondary: { name: "Cabin", googleFont: true, styles: [ "400" ] },
  code: { name: "Fira Code", googleFont: true, styles: [ "400" ] }
});

export default class Presentation extends Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        {Object.values(Slides).map((slide) => slide({ images }))}
      </Deck>
    );
  }
}
