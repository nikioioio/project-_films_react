export const Film = (props) => {
    const {Title, Poster ,Year,Type} = props;

    return (
        // <div className="row">
        <div className="col s12 m6">
            <div className="card">
                <div className="card-image">
                    {
                        Poster === 'N/A' ? <img src={`https://via.placeholder.com/300x400?text=${Title}`}/>
                        :
                            <img src={Poster}/>
                    }

                </div>
                <div className="card-content">
                    <span className="card-title">{Title}</span>
                    <div className="card-wrapper">
                        Year -  {Year} <span className='right'>{Type} </span>
                    </div>

                </div>
            </div>
        </div>
        // </div>
    )
}