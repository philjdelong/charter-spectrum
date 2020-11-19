import '../Restaurant/Restaurant.css'

const restaurant = props => {
    return(
        <div>
            <tbody>
                <td className="name">{props.name}</td>
                <td className="cell">{props.city}</td>
                <td className="state">{props.state}</td>
                <td className="cell">{props.telephone}</td>
                {/* <td className="cell-genre">{props.genre}</td> */}
            </tbody>
        </div>
    );
};

export default restaurant;