import React from "react";
import { Notes } from "spectacle";

export default function ({ title, content }) {
  return (
    <Notes>
      <h4>{title || "Slide notes"}</h4>
      <ul>
        {content.map((note, index) => (
          <li key={index}>
            {note}
            <br/>
            <br/>
          </li>
        ))}
      </ul>
    </Notes>
  );
}
