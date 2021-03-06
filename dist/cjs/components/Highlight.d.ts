import { Component } from "react";
import "../style/Highlight.css";
import type { LTWH } from "../types.js";
interface Props {
    position: {
        boundingRect: LTWH;
        rects: Array<LTWH>;
    };
    onClick?: () => void;
    onMouseOver?: () => void;
    onMouseOut?: () => void;
    comment: {
        text: string;
    };
    isScrolledTo: boolean;
    flag: boolean;
}
export declare class Highlight extends Component<Props> {
    render(): JSX.Element;
}
export default Highlight;
