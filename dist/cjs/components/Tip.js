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
exports.Tip = void 0;
const react_1 = __importStar(require("react"));
require("../style/Tip.css");
class Tip extends react_1.Component {
    constructor() {
        super(...arguments);
        this.state = {
            compact: true,
            text: "",
            // emoji: "",
        };
    }
    // for TipContainer
    componentDidUpdate(nextProps, nextState) {
        const { onUpdate } = this.props;
        if (onUpdate && this.state.compact !== nextState.compact) {
            onUpdate();
        }
    }
    render() {
        const { onConfirm } = this.props;
        const { text
        // , emoji 
         } = this.state;
        return (
        // comment function
        //   <div className="Tip">
        //     {compact ? (
        //       <div
        //         className="Tip__compact"
        //         // onClick={() => {
        //         //   onOpen();
        //         //   this.setState({ compact: false });
        //         // }}
        //         onClick={(event) => {
        //           event.preventDefault();
        //           this.setState({ text: '' })
        //           onConfirm({
        //             text
        //           });
        //         }}
        //       >
        //         Add highlight
        //       </div>
        //     ) : 
        //     (
        //       <form
        //         className="Tip__card"
        //         onSubmit={(event) => {
        //           event.preventDefault();
        //           onConfirm({
        //             text
        //             // , emoji 
        //           });
        //         }}
        //       >
        //         <div>
        //           <textarea
        //             placeholder="Your comment"
        //             autoFocus
        //             value={text}
        //             onChange={(event) =>
        //               this.setState({ text: event.target.value })
        //             }
        //             ref={(node) => {
        //               if (node) {
        //                 node.focus();
        //               }
        //             }}
        //           />
        //           {/* <div>
        //             {["💩", "😱", "😍", "🔥", "😳", "⚠️"].map((_emoji) => (
        //               <label key={_emoji}>
        //                 <input
        //                   checked={emoji === _emoji}
        //                   type="radio"
        //                   name="emoji"
        //                   value={_emoji}
        //                   onChange={(event) =>
        //                     this.setState({ emoji: event.target.value })
        //                   }
        //                 />
        //                 {_emoji}
        //               </label>
        //             ))}
        //           </div> */}
        //         </div>
        //         <div>
        //           <input type="submit" value="Save" />
        //         </div>
        //       </form>
        //     )
        //     }
        //   </div>
        react_1.default.createElement("div", { className: 'Tip' },
            react_1.default.createElement("div", { className: "Tip__compact", 
                // onClick={() => {
                //   onOpen();
                //   this.setState({ compact: false });
                // }}
                onClick: (event) => {
                    event.preventDefault();
                    this.setState({ text: '' });
                    onConfirm({
                        text
                    });
                } }, "Add highlight")));
    }
}
exports.Tip = Tip;
exports.default = Tip;
//# sourceMappingURL=Tip.js.map