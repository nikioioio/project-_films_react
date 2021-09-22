import React from 'react';

export class Filter extends React.Component {

    state = {
        filterFilm: ''
    }

    changeHandler = async (event) => {
        await this.setState({filterFilm: event.target.value})
        const {updateQueryFilter} = this.props
        updateQueryFilter(this.state.filterFilm)
    }

    render() {
        const {filterFilm} = this.state

        return (
            <div style={{width:'70%', margin: '30px 20%', textAlign: 'justify'}} className="wrapper_filter col s12 m6">
                <label>
                    <input onChange={this.changeHandler}  name="group1" type="radio" value="all" checked={filterFilm === 'all'}/>
                    <span>All</span>
                </label>

                <label>
                    <input onChange={this.changeHandler} name="group1" type="radio" value="movies" checked={filterFilm === 'movies'}/>
                    <span>Movies only</span>
                </label>

                <label>
                    <input onChange={this.changeHandler} name="group1" type="radio" value="series" checked={filterFilm === 'series'}/>
                    <span>Series only</span>
                </label>

                <label>
                    <input onChange={this.changeHandler} name="group1" type="radio" value="episode" checked={filterFilm === 'episode'}/>
                    <span>Episode only</span>
                </label>


            </div>

        )
    }

}


