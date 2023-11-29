import './ViewAllCars.css'
const CARS_API = 'https://db-cars-basic-app.vercel.app/cars'

function ViewAllCars(props){

    const handleDelete = id =>{
        fetch(`${CARS_API}/${id}`,{
            method: 'DELETE'
        }).then(()=> props.fetchAllCars()).catch(err => console.log(err));

    };

    return(
    <div className="container">
        <h4 className = "title">
            All cars 
        </h4>
        {props.searchResults.map(results => (
            <div className="carDetails" key={results._id}>
                <b>ID: </b>{results._id}
                <button className="deleteButton" onClick={()=> handleDelete(results._id)}>Delete </button>
                <button className="updateButton" onClick={()=> props.setSelectedCar(results._id)}>Update</button>
                <ul className="NoBullet">
                    <li><u>Make:</u> {results.make}</li>
                    <li><u>Model:</u> {results.model}</li>
                    <li><u>Year:</u> {results.year}</li>
                    
                    <li><u>Owner:</u> {results.owner}</li>
                </ul>
            </div>
        ))}

    </div>
    )
};

export default ViewAllCars
