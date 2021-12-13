import React from "react";

interface PlaceholderProps {
  componentName: string;
}

const Placeholder: React.FC<PlaceholderProps> = ({ componentName }) => (
  <div className="layout-page">
    <p>
      The component <strong>{componentName}</strong> has not been created yet.
    </p>
  </div>
);

export default Placeholder;
