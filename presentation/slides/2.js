import React from "react";
import { Heading, List, ListItem, Notes, Slide } from "spectacle";

export default function () {
  return (
    <Slide
      bgColor="whiteTalk"
      controlColor="redTalk"
      progressColor="redTalk"
      textColor="redTalk"
      transition={["fade"]}
    >
      <Heading size={6} textColor="greyTalk" caps>
        Standard List
      </Heading>
      <List>
        <ListItem>Item 1</ListItem>
        <ListItem>Item 2</ListItem>
        <ListItem>Item 3</ListItem>
        <ListItem>Item 4</ListItem>
      </List>
    </Slide>
  );
}
