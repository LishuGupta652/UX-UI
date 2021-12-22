import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";

const MarkdownStyle = styled.div`
  display: flex;
  .textarea {
    width: 50%;
    height: 100vh;
    padding: 20px;
    font-size: 2rem;
    outline: none;
  }
  .markdown {
    width: 50%;
    height: 100vh;
    padding: 20px;
    outline: none;
  }
`;

const MarkdownIndex = () => {
  const markdown = localStorage.getItem("markdown");
  const [input, setInput] = useState(markdown || "# Try while typing...");

  const handleInput = (e) => {
    setInput(e.target.value);
    localStorage.setItem("markdown", e.target.value);
  };
  return (
    <MarkdownStyle>
      <textarea
        autoFocus
        value={input}
        onChange={(e) => handleInput(e)}
        className="textarea"
      ></textarea>
      <ReactMarkdown source={input} className="markdown" />
    </MarkdownStyle>
  );
};

export default MarkdownIndex;
