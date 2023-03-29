import React from 'react';
import { ThemeContextConsumer } from '../ThemeContext';
import Navbar from './Navbar';

export default function Layout(props) {
  return (
    <ThemeContextConsumer>
      {(context) => (
        <div>
          <div className={`header ${context.theme}`}>
            <Navbar />
          </div>
          {props.children}
        </div>
      )}
    </ThemeContextConsumer>
  );
}
