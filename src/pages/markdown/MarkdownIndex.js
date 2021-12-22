import React, { useState } from "react";
import reactMarkdown from "react-markdown";
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
  const [input, setInput] = useState();
  return (
    <MarkdownStyle>
      <textarea
        autoFocus
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="textarea"
      ></textarea>
      <reactMarkdown source={input} className="markdown" />
    </MarkdownStyle>
  );
};

export default MarkdownIndex;
