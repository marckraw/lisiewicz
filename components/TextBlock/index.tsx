import React from "react";

interface TextBlockProps {
  blok: {
    title: string;
    content: string;
  };
}

const TextBlock: React.FC<TextBlockProps> = (props) => {
  const {
    children,
    blok: { title, content },
  } = props;

  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default TextBlock;
