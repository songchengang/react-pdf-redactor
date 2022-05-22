import React, { Component } from "react";
import "../style/Tip.css";
export class Tip extends Component {
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
        React.createElement("div", { className: 'Tip' },
            React.createElement("div", { className: "Tip__compact", 
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
export default Tip;
//# sourceMappingURL=Tip.js.map