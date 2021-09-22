import {Films} from '../Components/Films'
import React from 'react';
import {Preloader} from '../Components/Preloader'
import {Search} from '../Components/Search'

export class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [],
            mask: 'matrix'
        }

    }

    getQueryWithMask = () => {
        return `http://www.omdbapi.com/?s=${this.state.mask}&apikey=5c52e8bf`;
    }

    updaterFunc  = async () =>  {
        const response = await fetch(this.getQueryWithMask());
        const json = await response.json();
        await json.Response === "False" ?
            await this.setState({data: []}) :
            await this.setState({data: json['Search']})
    }

    async componentDidMount() {
        await this.updaterFunc()
    }


    updateQuery = async  (mask) => {
        await this.setState({mask: mask ,data: []})
        await this.updaterFunc()
    }

    render() {
        const {data} = this.state
        return (
            <>
                <Search updateQuery={this.updateQuery}/>
                <main className="container content">
                    {
                        data.length ? <Films data={data}/> : <Preloader/>
                    }
                </main>
            </>
        )
    }
}

