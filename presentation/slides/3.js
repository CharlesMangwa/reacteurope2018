import React from "react";
import { BlockQuote, Cite, Slide, Quote } from "spectacle";

export default function () {
  return (
    <Slide transition={["fade"]} bgColor="greyTalk" textColor="whiteTalk">
      <BlockQuote>
        <Quote textColor="redTalk">Example Quote</Quote>
        <Cite textColor="blueTalk">Author</Cite>
      </BlockQuote>
    </Slide>
  );
}

