const {Car} = require("../models/CarModel")
const mongoose = require("mongoose");

// const createCar = (req, res) =>{
//     const carDoc = new Car(req.body);
//     carDoc.save((err,data) =>{
//     if (err) {
//         if(err instanceof mongoose.Error.ValidationError){
//             res.status(400).send({message: "Cannot create car, provided ata is invalid", error: err.errors });
//         } else {
//             console.log(err);
//            res.status(500).send({ message: "Error occured during car creation"});
            
//         }
//      } else
//         {
//             console.log(data)
//             res.status(201).send({ message: "Car created successfully"});
//         }
// });
// }

const createCar = (req, res) =>{
    const carDoc = new Car(req.body);
    carDoc.save().then(result => {
        console.log(result)
        res.status(201).send({ message: "Car created successfully"})
    }).catch(err => {
        console.log(err)
        res.status(500).send({mesage:"Error"})
    })
}

const findAllCars = (req, res) => {
    
    Car.find().then(result => {
        console.log(result)
        res.status(200).send(result)

    }).catch(error => {
        console.log("qweqwe" + error);
        res.status(500).send({ message: "Error"})

    });
    
}
//find all cars with paramater example http://localhost:3200/cars/2000
//find all cars greater than 2000
const findAllCarsByYearGreaterThan = (req, res) => {
    Car.find({ year : { $gte: req.params.year }}).then(result =>{
        console.log(result)
        res.status(200).send(result)
    }).catch(error => {
        console.log("error for findAllCars "  + error)
        res.status(500).send({message: "Error"})
    })
}

// i had to change the _id so it know to update, and include _id in the model
const updateCar  = (req, res) => {

    Car.findByIdAndUpdate({_id:req.body.id}, { ...req.body}).then(result =>{
        console.log(result)
        res.status(200).send(result)
    }).catch(error =>{
        console.log("Error for updateCar, " + error)
        res.status(500).send({message:"Error"})
    })
};

const updateMultipleCars = (req, res) => {
    console.log("hello" )
    console.log(req.body)
   Car.updateMany({[req.body.searchField]: req.body.searchValue} , {[req.body.updateField]: req.body.updateValue}).then(result =>{
    console.log(result + "result ")
    res.status(200).send(result)
    
   }).catch(error =>{
    console.log("Error for updateMultipleCars, " + error)
   })
    
    // Car.updateMany({ [req.body.searchField]: req.body.searchValue }, { [req.body.updateField]: req.body.updateValue}).then(result =>{
    //     console.log(result + "Update multiple cars")
    //     res.status(200).send(result)
    // }).catch(error =>{
    //     res.status(500).send({message:"Error for updateMultipleCars"})
    //     console.log(error)
    // } )
}

// const deleteCar = (req, res) => {
//     Car.findByIdAndDelete(req.params.id, (err, data) => {
//       if(err) {
//         console.log(err);
//         res.status(500).send({message: "Unable to delete car"});
//       }
//       else {
//         res.status(200).send(data);
//       }
//     });
//   }

  const deleteCar = (req, res) => {
    console.log("delete car")
    Car.findByIdAndDelete(req.params.id).then(result =>{
        console.log("delete")
        console.log(result)
        res.status(200).send(result)

    }).catch(error =>{
        console.log("error for deleteCar" + error)
    })
  }
  module.exports = { createCar, findAllCars, findAllCarsByYearGreaterThan, deleteCar, updateCar, updateMultipleCars }