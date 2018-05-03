import React from "react";
import { Notes } from "spectacle";

export default function ({ title, content }) {
  return (
    <Notes>
      <h3>{title || "Slide notes"}</h3>
      <ul
        style={{
          fontFamily: "Avenir Next",
          fontSize: "1.5625rem",
          lineHeight: "2.3438rem"
        }}
      >
        {content.map((note, index) => (
          <li key={index}>
            {note}
            <br />
            <br />
          </li>
        ))}
      </ul>
    </Notes>
  );
}
