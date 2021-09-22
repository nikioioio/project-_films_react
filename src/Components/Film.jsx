export const Film = (props) => {
    const {title, uriImage ,year,type} = props;

    return (
        // <div className="row">
        <div className="col s12 m6">
            <div className="card">
                <div className="card-image">
                    {
                        uriImage === 'N/A' ? <img src={`https://via.placeholder.com/300x400?text=${title}`}/>
                        :
                            <img src={uriImage}/>
                    }

                </div>
                <div className="card-content">
                    <span className="card-title">{title}</span>
                    <div className="card-wrapper">
                        Year -  {year} <span className='right'>{type} </span>
                    </div>

                </div>
            </div>
        </div>
        // </div>
    )
}