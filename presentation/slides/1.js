import React from "react";
import {
  Heading,
  Slide,
  Text
} from "spectacle";

export default function () {
  return (
    <Slide transition={["fade"]} bgColor="redTalk">
      <Heading size={6} textColor="whiteTalk" caps>Typography</Heading>
      <Heading size={1} textColor="greyTalk">Heading 1</Heading>
      <Heading size={2} textColor="greyTalk">Heading 2</Heading>
      <Heading size={3} textColor="greyTalk">Heading 3</Heading>
      <Heading size={4} textColor="greyTalk">Heading 4</Heading>
      <Heading size={5} textColor="greyTalk">Heading 5</Heading>
      <Text size={6} textColor="greyTalk">Standard text</Text>
    </Slide>
  );
}
