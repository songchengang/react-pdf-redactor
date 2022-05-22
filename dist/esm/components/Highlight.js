import React, { Component } from "react";
import "../style/Highlight.css";
export class Highlight extends Component {
    // state: State = {
    //   redact: false,
    // };
    render() {
        const { position, onClick, onMouseOver, onMouseOut, 
        // comment,
        isScrolledTo, flag, } = this.props;
        const { rects,
        // boundingRect 
         } = position;
        return (React.createElement("div", { className: `Highlight ${isScrolledTo ? "Highlight--scrolledTo" : ""}` },
            React.createElement("div", { className: "Highlight__parts" }, rects.map((rect, index) => (React.createElement("div", { onMouseOver: onMouseOver, onMouseOut: onMouseOut, onClick: onClick, key: index, style: rect, 
                // style={{
                //   left: rect.left,
                //   top: rect.top,
                //   width: rect.width,
                //   height: rect.height,
                //   background: this.state.redact ? 'black' : 'rgba(255, 226, 143, 1)'
                // }}
                // className={`Highlight__part`}
                className: flag ? "Redact__part" : "Highlight__part" }))))));
    }
}
export default Highlight;
//# sourceMappingURL=Highlight.js.map