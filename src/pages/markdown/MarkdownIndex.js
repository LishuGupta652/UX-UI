import React, { useState } from "react";
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
`;

const MarkdownIndex = () => {
  const [input, setInput] = useState();
  return (
    <MarkdownStyle>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="textarea"
      ></textarea>
    </MarkdownStyle>
  );
};

export default MarkdownIndex;
