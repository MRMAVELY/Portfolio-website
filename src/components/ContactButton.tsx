import React from 'react';
import FigmaContact from '../../.figma/223_7/index.jsx';

export default function ContactButton() {
  return (
    <a href="#contact-section" aria-label="Contact Me" className="inline-block" role="button">
      <FigmaContact />
    </a>
  );
}