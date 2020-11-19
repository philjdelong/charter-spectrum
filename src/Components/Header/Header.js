const header = props => {
    return(
        <div>
            <h1>Restaurant RoundUp</h1>
            <p>Filter by State (abbreviation):<br></br><input onChange={props.stateFilter}></input><button onClick={props.clearFilter}>Clear</button></p>
        </div>
    );
};

export default header;