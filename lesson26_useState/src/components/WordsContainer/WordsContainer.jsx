import React, { useState } from "react";
import WordsList from "../WordsList/WordsList";
import Addword from "../AddWord/Addword";


export default function WordsContainer() {
  const [words, setWords] = useState(["word1", "word2", "word3"]);

  return (
    <div>
      <Addword handler = {(word) =>setWords([...words, word])}/>
      <WordsList words={words} />
    </div>
  );
}
