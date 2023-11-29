const express = require("express")

const { createCar, findAllCars, findAllCarsByYearGreaterThan, deleteCar, updateCar, updateMultipleCars} = require("./controllers/car.controller")

const carsRouter = express.Router()

carsRouter.get('/', findAllCars)
carsRouter.get('/:year', findAllCarsByYearGreaterThan)
carsRouter.post('/', createCar)
carsRouter.put('/', updateCar)
carsRouter.put('/updateMultipleCars', updateMultipleCars)
carsRouter.delete('/:id', deleteCar) 

module.exports = carsRouter;