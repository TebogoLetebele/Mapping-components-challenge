import React from "react";
import EmojiCard from "./EmojiCard";
import emojipedia from "../emojipedia";

function createCard(emoj) {
  return (
    <EmojiCard
      key={emoj.id}
      emoji={emoj.emoji}
      name={emoj.name}
      meaning={emoj.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(createCard)}

        {/* <div className="term">
          <dt>
            <span className="emoji" role="img" aria-label="Hands together">
              🙏
            </span>
            <span>Person With Folded Hands</span>
          </dt>
          <dd>
            Two hands pressed together. Is currently very introverted, saying a
            prayer, or hoping for enlightenment. Is also used as a “high five”
            or to say thank you.
          </dd>
        </div> */}
        {/* <div className="term">
          <dt>
            <span
              className="emoji"
              role="img"
              aria-label="Rolling on the floor laughing"
            >
              🤣
            </span>
            <span>Rolling On The Floor, Laughing</span>
          </dt>
          <dd>
            This is funny! A smiley face, rolling on the floor, laughing. The
            face is laughing boundlessly. The emoji version of “rofl“. Stands
            for „rolling on the floor, laughing“.
          </dd>
        </div> */}
      </dl>
    </div>
  );
}

export default App;
