import React from "react";
import axios from "axios";



export default class CardDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            details: ''
        }
    }

    componentDidMount() {
        let cardID = this.props.match.params.id;
        axios.get(`http://localhost:3000/api/persondetails/${cardID}`).then(res => {
            const details = res.data;
            this.setState({ details });
            console.log(this.state.details);
        }).catch(err => console.log(err));
    }

    onDelete() {
        let detailsID = this.state.details.id;
        axios.delete(`http://localhost:3000/api/persondetails/${detailsID}`).then(res => {
            window.location = '/getdata';
        }).catch(err => console.log(err));
    }


    render() {

        const styles = {
            borderColor: '#26A69A'
        }

        return (
            <div className="container">
                <h1>Personal Details</h1>
                <hr />
                <ul style={styles} className="collection z-depth-4 left-align white-text with-header">
                    <li style={styles} className="blue-grey collection-header"><h4>{this.state.details.name}</h4></li>
                    <li style={styles} className="blue-grey collection-item">Email: {this.state.details.email}</li>
                    <li style={styles} className="blue-grey collection-item">Phone: {this.state.details.phone}</li>
                    <li style={styles} className="blue-grey collection-item">Message: {this.state.details.message}</li>
                </ul>
                <br />
                <button onClick={this.onDelete.bind(this)} className="btn red darken-2">Delete</button>
            </div>
        )
    }
}