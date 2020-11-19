import '../Restaurant/Restaurant.css'

const restaurant = props => {
    return(
        <table>
            <tbody>
                <tr>
                    <td className="name">{props.name}</td>
                    <td className="cell">{props.city}</td>
                    <td className="state">{props.state}</td>
                    <td className="cell">{props.telephone}</td>
                    {/* <td className="cell-genre">{props.genre}</td> */}
                </tr>
            </tbody>
        </table>
    );
};

export default restaurant;