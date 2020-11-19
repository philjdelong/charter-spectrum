import '../Restaurant/Restaurant.css'

const restaurant = props => {
    return(
        <div>

        <table>
            <tbody className="all-cells">
                <tr>
                    <td className="cell-name">{props.name}</td>
                    <td className="cell-default">{props.city}</td>
                    <td className="cell-state">{props.state}</td>
                    <td className="cell-default">{props.telephone}</td>
                    {/* <td className="cell-genre">{props.genre}</td> */}
                </tr>
            </tbody>
        </table>
        </div>
    );
};

export default restaurant;