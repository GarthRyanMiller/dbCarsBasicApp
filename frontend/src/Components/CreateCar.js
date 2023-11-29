import './ViewAllCars.css'

const CARS_API = 'http://localhost:3200/cars'

function CreateCar(props){
    const createNewCar =  async (event) =>{
        event.preventDefault();

        const form = event.target
        const make = form.elements['make'].value
        const year = form.elements['year'].value
        const model = form.elements['model'].value
        
        const owner = form.elements['owner'].value

        const formObj = {
          make: make,
          year: year,
          model: model,
          owner: owner
        }
        console.log(make)
        console.log(JSON.stringify(formObj))
        await fetch(CARS_API ,{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',

            },
            body: JSON.stringify(formObj)
        }).then(() => props.fetchAllCars()).catch(err =>{
          console.log(err);
        })

    
            
        }

    
    return (
        <div className="createCarsView">
          <h3 className="createCarsTitle">Create Car 🔧</h3>
          <form onSubmit={createNewCar}>
            <div className="createCarsField">
              <label htmlFor="make">Make: </label>
              <input name="make" type="text" />
            </div>
    
            <div className="createCarsField">
              <label htmlFor="model">Model: </label>
              <input name="model" type="text" />
            </div>
    
            <div className="createCarsField">
              <label htmlFor="year">Year: </label>
              <input name="year" type="number" />
            </div>
    
    
    
            <div className="createCarsField">
              <label htmlFor="owner">Owner: </label>
              <input name="owner" type="text" />
            </div>
    
            <button className="createCarsButton" type="submit">Create Car</button>
          </form>
        </div>
      );
}
export default CreateCar;
