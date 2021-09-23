import React, {useState, useEffect} from 'react';

export const Filter = (props) => {

    const [filterFilm, setFilterFilm] = useState('')

    const changeHandler = (event) => {
        setFilterFilm(event.target.value);
    }

    useEffect(() => {
        const {updateQueryFilter} = props
        updateQueryFilter(filterFilm)
    },[filterFilm]);


        return (
            <div style={{width:'70%', margin: '30px 20%', textAlign: 'justify'}} className="wrapper_filter col s12 m6">
                <label>
                    <input onChange={changeHandler}  name="group1" type="radio" value="all" checked={filterFilm === 'all'}/>
                    <span>All</span>
                </label>

                <label>
                    <input onChange={changeHandler} name="group1" type="radio" value="movies" checked={filterFilm === 'movies'}/>
                    <span>Movies only</span>
                </label>

                <label>
                    <input onChange={changeHandler} name="group1" type="radio" value="series" checked={filterFilm === 'series'}/>
                    <span>Series only</span>
                </label>

                <label>
                    <input onChange={changeHandler} name="group1" type="radio" value="episode" checked={filterFilm === 'episode'}/>
                    <span>Episode only</span>
                </label>


            </div>

        )


}


