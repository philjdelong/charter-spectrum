const restaurant = props => {
    return(
        <div>
            <tbody>
                <td className="cell-name">{props.name}</td>
                <td className="cell">{props.city}</td>
                <td className="cell-state">{props.state}</td>
                <td className="cell">{props.telephone}</td>
                {/* <td className="cell">{props.genre}</td> */}
            </tbody>
        </div>
    );
};

export default restaurant;