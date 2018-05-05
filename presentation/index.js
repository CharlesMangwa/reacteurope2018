import React, { Component } from "react";
import { Deck } from "spectacle";
import createTheme from "spectacle/lib/themes/default";
import preloader from "spectacle/lib/utils/preloader";

import * as Slides from "./slides";

require("normalize.css");

const images = {
  ad1992: require("../assets/ad1992.jpg"),
  bgStart: require("../assets/bgStart.png"),
  bgEnd: require("../assets/bgEnd.png"),
  jarvisluong: require("../assets/jarvisluong.jpg"),
  Madumo: require("../assets/Madumo.jpg")
};

preloader(images);

const theme = createTheme(
  {
    blueTalk: "#4A90E2",
    greyTalk: "#1F1F1F",
    primary: "#D11149",
    redTalk: "#D11149",
    whiteTalk: "#FEFEFE"
  },
  {
    primary: {
      name: "Josefin Sans",
      googleFont: true,
      styles: ["400", "500", "600", "700"]
    },
    secondary: { name: "Gamja Flower", googleFont: true, styles: ["400"] },
    title: { name: "Carter One", googleFont: true, styles: ["400"] }
  }
);

export default class Presentation extends Component {
  render() {
    return (
      <Deck
        controls={false}
        progress="bar"
        transition={["fade", "slide", "zoom"]}
        transitionDuration={500}
        theme={theme}
      >
        {Object.values(Slides).map((slide) => slide({ images }))}
      </Deck>
    );
  }
}
