import {Film} from './Film'

export const Films = (props) => {
    const { data } = props;
    return (
        <div className="wrapper">
            {
                data.map( film => (
                    <Film key={film.imdbID} title={film.Title} uriImage={film.Poster} year={film.Year} type={film.Type}/>
                ))
            }

        </div>
    )
}