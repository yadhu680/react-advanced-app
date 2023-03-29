import React from 'react';
import { ThemeContextConsumer } from '../ThemeContext';

export default function MainContent() {
  return (
    <ThemeContextConsumer>
      {(context) => (
        <div className={`content ${context.theme}`}>
          <h1>Welcome to my App!</h1>
          <p>Use context API to share data between components.</p>
        </div>
      )}
    </ThemeContextConsumer>
  );
}
