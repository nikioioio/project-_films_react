import {Films} from '../Components/Films';
import React from 'react';
import {Preloader} from '../Components/Preloader';
import {Search} from '../Components/Search';
import { Filter } from '../Components/Filter'


export class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [],
            mask: 'matrix',
            filter: ''
        }

    }

    getQueryWithMask = () => {
        return `http://www.omdbapi.com/?s=${this.state.mask}&apikey=5c52e8bf&type=${this.state.filter}`;
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


    updateQueryMask = async  (mask) => {
        await this.setState({mask: mask ,data: []})
        await this.updaterFunc()
    }

    updateQueryFilter = async  (filter) => {
        await this.setState({filter: filter ==='all' ? '': filter ,data: []})
        await this.updaterFunc()
    }

    render() {
        const {data} = this.state
        return (
            <>
                <Search updateQuery={this.updateQueryMask}/>
                <Filter updateQueryFilter={this.updateQueryFilter}/>
                <main className="container content">
                    {
                        data.length ? <Films data={data}/> : <Preloader/>
                    }
                </main>
            </>
        )
    }
}

