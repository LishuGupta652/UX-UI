import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";

import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

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
  const [input, setInput] = useState(
    markdown ||
      "# H1\n## H2\n### H3\n#### H4\n##### H5\n###### H6\nAlternatively, for H1 and H2, an underline-ish style:\nAlt-H1\n======\nAlt-H2\n------"
  );

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
      <ReactMarkdown
        children={input}
        className="markdown"
        renderers={{
          code: Component,
        }}
      />
    </MarkdownStyle>
  );
};

const Component = ({ value, language }) => {
  const codeString = "(num) => num + 1";
  return (
    <SyntaxHighlighter language="javascript" style={docco}>
      {codeString}
    </SyntaxHighlighter>
  );
};

export default MarkdownIndex;
