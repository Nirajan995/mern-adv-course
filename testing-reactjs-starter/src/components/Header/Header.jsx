import React from "react";
import "./Header.css";

export default function Header({ title }) {
  return (
    <h1 data-testid="heading-1" className="header">
      {title}
    </h1>
  );
}
