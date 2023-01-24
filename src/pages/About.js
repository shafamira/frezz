import React, { Component } from 'react';
import './About.css';

/**
 * Class to handle the rendering of the Home page.
 * @extends React.Component
 */
export default class Home extends Component {
  render() {
    return (
      <div className="About container">
        <h1>About</h1>
        <br></br>
        <p>
          FREZZ is a website application that can be used to help and facilitate supermarkets or fruit farmers in Indonesia in choosing fruit
           with the best quality, for now FREZZ can only be used to classify fruits such as bananas, apples and oranges. This application can
           determine which fruit is fresh or rotten, this is done as a <i>quality control</i> so that the fruit distributed has the best quality.
          <br></br>
          <br></br>
          FREZZ was created and developed by the following people:
          <ul>
            <li><strong>Alyza Rahima Pramudya</strong></li>
            <li><strong>Dierta Pasific</strong></li>
            <li><strong>Jacqueline Abyasa</strong></li>
            <li><strong>Shafa Amira Qonitatin</strong></li>
          </ul>
        </p>
      </div>
    );
  }
}
