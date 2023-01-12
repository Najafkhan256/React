import React from "react";
import { EmojiData } from "../../EmojiData";
import Entry from "./Entry";

/* function createEntry(emojiTerm) {
  <Entry
    key={emojiTerm.id}
    emoji={emojiTerm.emoji}
    name={emojiTerm.name}
    content={emojiTerm.content}
  />;
} */

function EmojiMedia() {
  return (
    <>
      <h1>Emoji Media</h1>
      {/* <div className="dictionary">{EmojiData.map(createEntry)}</div> */}
      <div className="dictionary">{EmojiData.map(Entry)}</div>
    </>
  );
}

export default EmojiMedia;
