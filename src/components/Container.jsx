import { useState } from "react";
import Stats from "./Stats";
import TextArea from "./TextArea";
import {
  FACEBOOK_MAX_CHARACTERS,
  INSTAGRAM_MAX_CHARACTERS,
} from "../lib/constants";

const Container = () => {
  const [text, setText] = useState("");

  // console.log(numberOfCharacters);

  const stats = {
    numberOfWords: text.split(/\s/).filter((word) => word != "").length,
    numberOfCharacters: text.length,
    instagramCharactersleft: INSTAGRAM_MAX_CHARACTERS - text.length,
    facebookCharctersLeft: FACEBOOK_MAX_CHARACTERS - text.length,
  };

  return (
    <main className='container'>
      <TextArea text={text} setText={setText} />
      <Stats stats={stats} />
    </main>
  );
};

export default Container;
