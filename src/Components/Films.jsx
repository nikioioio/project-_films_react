import {Film} from './Film'

export const Films = (props) => {
    const {data} = props;
    return (
        <>
            {
               !data.length ? <h4 style={{textAlign: 'center'}}>Данных нет</h4> : false
            }

            <div className="wrapper">
                {
                        data.map(film => (
                            <Film key={film.imdbID} {...film}/>
                        ))

                }

            </div>
        </>
    )
}