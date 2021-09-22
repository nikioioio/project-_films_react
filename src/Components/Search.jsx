import React from 'react';

export class Search extends React.Component {
    state = {
        search: '',
    }


    render() {
        const {updateQuery} = this.props;
        const {search} = this.state
        return (
            <div style={{margin: '30px 15%'}}  className="row">

                <div className="col s11">
                    <div className="input-field">
                        <input
                            placeholder='search'
                            type="search"
                            className="validate"
                            value={search}
                            onChange={(e) => this.setState({search: e.target.value})}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    updateQuery(search)
                                }
                            }}
                        />
                    </div>


                </div>
                <div className="col s1">
                    <a onClick={()=> updateQuery(search)} className="waves-effect waves-light btn right astyle">search</a>
                </div>

            </div>
        )
    }
}