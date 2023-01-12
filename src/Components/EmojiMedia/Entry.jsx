import React from "react";
// import { EmojiData } from "../../EmojiData";

export default function Entry(createEntry) {
  return (
    <div className="entry" key={createEntry.id}>
      <div className="term">
        <dt>
          <span className="emoji" role="img" aria-label={createEntry.name}>
            {createEntry.emoji}
          </span>
          <span className="emoji-name">{createEntry.name}</span>
        </dt>
        <dd>{createEntry.content}</dd>
      </div>
    </div>
  );
}
