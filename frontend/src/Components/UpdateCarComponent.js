import "./ViewAllCars.css"
const CARS_API = 'http://localhost:3200/cars'
function UpdateCarComponent(props) {
    
    const updateCar = (event) => {
        event.preventDefault();
        const form = event.target;
        const make = form.elements['make'].value;
        const model = form.elements['model'].value;
        const year = form.elements['year'].value;
        const owner = form.elements['owner'].value;
        const objUpdate =  {
            id: props.selectedCar,
            ...(make && { make }),
            ...(model && { model }),
            ...(year && { year }),
            ...(owner && { owner }),
        }

        

        fetch(CARS_API, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
               
              },
            body: JSON.stringify(objUpdate),
            
        }).then(() => props.fetchAllCars()).catch(err => {
            console.log(err)
        })
    }
        return (
            <div className="updateCarContainer">
                <h3>Update Car</h3>
                <p>Car with ID: <b>{props.selectedCar}</b> will be updated</p>
                <form onSubmit={updateCar}>
                    <div className="createField">
                        <label htmlFor="make">make:</label>
                        <input name="make" type="text" />
                    </div>
                    <div className="createField">
                        <label htmlFor="model">Model: </label>
                        <input name="model" type="text" />
                    </div>

                    <div className="createField">
                        <label htmlFor="year">Year: </label>
                        <input name="year" type="number" />
                    </div>
                    <div className="createField">
                        <label htmlFor="owner">Owner: </label>
                        <input name="owner" type="text" />
                    </div>
                    <button className="updateButton" type="submit">Update Car</button>
                </form>
            </div>

        )
    }




export default UpdateCarComponent;