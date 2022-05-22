import { Component } from "react";
import "../style/Tip.css";
interface State {
    compact: boolean;
    text: string;
}
interface Props {
    onConfirm: (comment: {
        text: string;
    }) => void;
    onOpen: () => void;
    onUpdate?: () => void;
}
export declare class Tip extends Component<Props, State> {
    state: State;
    componentDidUpdate(nextProps: Props, nextState: State): void;
    render(): JSX.Element;
}
export default Tip;
