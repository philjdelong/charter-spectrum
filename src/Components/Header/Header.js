import '../Header/Header.css';

const header = props => {
    return(
        <div>
            <h1 className="title"><code>Restaurant RoundUp</code></h1>
            <p className="stateFilter">Filter by State (xx):<br></br><input onChange={props.stateFilter}></input><button onClick={props.clearFilter}>Clear</button></p>
        </div>
    );
};

export default header;