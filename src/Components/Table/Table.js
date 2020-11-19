import '../Table/Table.css'

const table = props => {
    return(
        <table className="div-heading">
            <tbody>
                <tr>
                    <th>Name,</th>
                    <th>City,</th>
                    <th>State,</th>
                    <th>Telephone</th>
                    {/* <th>Genre</th> */}
                </tr>
            </tbody>
        </table>
    );
};

export default table;