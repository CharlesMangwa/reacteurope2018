import React from "react";
import PropTypes from "prop-types";
import { Heading, Slide, Text, Typeface, Layout } from "spectacle";

import Notes from "./notes";

export default function Title({ images }) {
  return (
    <Slide bgImage={images.bgEnd} bgDarken={0.75} transition={["zoom"]} key={0}>
      <Notes
        title="15. Thank you for reading! ✨"
        content={[
          "See y'all on Twitter fon more chit-chatting!",
          "Btw, props to Ahmet Iltas for his great illustrations: https://iltasahmet.com/8mart!!"
        ]}
      />
      <Typeface font="Carter One" weight={400}>
        <Heading size={1} lineHeight={1} textColor="redTalk">
          Thank you! ✨
        </Heading>
      </Typeface>
      <Text
        textFont="Gamja Flower"
        textColor="whiteTalk"
        style={{ marginTop: "1.5625rem" }}
      >
        @Charles_Mangwa on Twitter, come say hi!…<br />I'll be waiting for
        y'all!!!
      </Text>
    </Slide>
  );
}

Title.propTypes = {
  images: PropTypes.shape({
    bgPattern: PropTypes.string
  })
};
