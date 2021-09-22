import {Films} from '../Components/Films'
import React from 'react';

export class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            data:[]
        }
    }

    async componentDidMount() {
        const QUERY = "http://www.omdbapi.com/?s=matrix&apikey=5c52e8bf&page=1";
        const response = await fetch(QUERY);
        const json = await response.json();
        this.setState({data: json['Search']})
    }

    render() {
        return (
            <main className="container content">
                <Films data={this.state.data}/>
            </main>
        )
    }
}


