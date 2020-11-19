import '../Genres/Genres.css'

const genres = props => {
    const list = props.genres.map(genre => {
        return(
            <div onClick={props.genreFilter} className="genre">{genre}</div>
        ) 
    })
    return(
        <div className="container">
                Filter by Genre:
                <br></br>
                {list}
        </div>
    );
};

export default genres;