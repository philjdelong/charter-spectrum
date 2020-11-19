import '../Table/Table.css'

const table = props => {
    return(
        <div className="table-heading">
            <th>Name,</th>
            <th>City,</th>
            <th>State,</th>
            <th>Telephone</th>
            {/* <th>Genre</th> */}
        </div>
    );
};

export default table;