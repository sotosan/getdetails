import React from "react";
import { Link } from "react-router-dom";

export default class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.data
        }
    }

    render() {
        return (
            <Link className="white-text" to={`/getdata/${this.state.data.id}`}>
                <div className="card-panel blue-grey">
                    {this.state.data.name}
                </div>
            </Link>
        )
    }
}