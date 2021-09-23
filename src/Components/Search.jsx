import React, {useState, useEffect} from 'react';

export const Search  = (props) => {
    const [search, setSearch] = useState('')

        const {updateQuery} = props;
        return (
            <div style={{margin: '30px 15%'}}  className="row">

                <div className="col s11">
                    <div className="input-field">
                        <input
                            placeholder='search'
                            type="search"
                            className="validate"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    search.length ? updateQuery(search) : updateQuery('error')
                                }
                            }}
                        />
                    </div>


                </div>
                <div className="col s1">
                    <a onClick={()=> search.length ? updateQuery(search) : updateQuery('error') }
                       className="waves-effect waves-light btn right astyle">search</a>
                </div>

            </div>
        )

}