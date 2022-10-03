import React from "react";
import Emoji from "./Emoji";
import Definition from "./Definition";
import EmojiName from "./EmojiName";

function EmojiCard(props) {
  return (
    <div className="term">
      <dt>
        <Emoji emoji={props.emoji} />
        <EmojiName name={props.name} />
      </dt>
      <Definition meaning={props.meaning} />
    </div>
  );
}

export default EmojiCard;
