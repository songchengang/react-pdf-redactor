import React, { Component } from "react";

import "../style/Highlight.css";

import type { LTWH } from "../types.js";


// interface State {
//   redact: boolean;
// }

interface Props {
  position: {
    boundingRect: LTWH;
    rects: Array<LTWH>;
  };
  onClick?: () => void;
  onMouseOver?: () => void;
  onMouseOut?: () => void;
  comment: {
    // emoji: string;
    text: string;
  };
  isScrolledTo: boolean;
  flag: boolean;
}

export class Highlight extends Component<Props> {
  // state: State = {
  //   redact: false,
  // };
  render() {
    const {
      position,
      onClick,
      onMouseOver,
      onMouseOut,
      // comment,
      isScrolledTo,
      flag,
    } = this.props;

    const {
      rects,
      // boundingRect 
    } = position;

    return (

      <div
        className={`Highlight ${isScrolledTo ? "Highlight--scrolledTo" : ""}`}
      >
        {/* <button onClick={() => { this.setState({ redact: true }) }}>Redact all</button> */}

        {/* {comment ? (
          <div
            className="Highlight__emoji"
            style={{
              left: 20,
              top: boundingRect.top,
            }}
          >
            {comment.emoji}
          </div>
        ) : null} */}
        <div className="Highlight__parts">
          {rects.map((rect, index) => (
            <div
              onMouseOver={onMouseOver}
              onMouseOut={onMouseOut}
              onClick={onClick}
              key={index}
              style={rect}
              // style={{
              //   left: rect.left,
              //   top: rect.top,
              //   width: rect.width,
              //   height: rect.height,
              //   background: this.state.redact ? 'black' : 'rgba(255, 226, 143, 1)'
              // }}
              // className={`Highlight__part`}
              className={flag ? "Redact__part" : "Highlight__part"}
            // className={`Highlight__part`}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Highlight;
