"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Highlight = void 0;
const react_1 = __importStar(require("react"));
require("../style/Highlight.css");
class Highlight extends react_1.Component {
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
        return (react_1.default.createElement("div", { className: `Highlight ${isScrolledTo ? "Highlight--scrolledTo" : ""}` },
            react_1.default.createElement("div", { className: "Highlight__parts" }, rects.map((rect, index) => (react_1.default.createElement("div", { onMouseOver: onMouseOver, onMouseOut: onMouseOut, onClick: onClick, key: index, style: rect, 
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
exports.Highlight = Highlight;
exports.default = Highlight;
//# sourceMappingURL=Highlight.js.map