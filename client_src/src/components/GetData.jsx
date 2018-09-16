import React from 'react';
import axios from 'axios';
import Card from './Card';

export default class GetData extends React.Component {
    constructor() {
        super();
        this.state = {
            dataRes: []
        }
    }
    componentDidMount() {
        axios.get('https://george-contact-app.herokuapp.com/api/persondetails').then(res => {
            const dataRes = res.data;
            this.setState({ dataRes });
            console.log(this.state.dataRes);
        }).catch(err => console.log(err));
    }
    render() {
        return (
            <div>
                <h1>Get Details</h1>
                <div className="row">
                    {this.state.dataRes.map(dataRes => (
                        <div key={dataRes.id} className="col s12 m4 l3">
                            <Card key={dataRes.id} data={dataRes} />
                        </div>
                    )
                    )}
                </div>
            </div>
        )
    }
}