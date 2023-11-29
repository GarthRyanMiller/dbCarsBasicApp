import React, { useState, useEffect } from 'react';
const CARS_API = 'http://localhost:3200/cars'
function UpdateMultipleCars(props) {
    const updateCars = (e) => {
        e.preventDefault();

        const form = e.target;
        const searchField = form.elements['searchField'].value;
        const searchValue = form.elements['searchValue'].value;
        const updateField = form.elements['updateField'].value;
        const updateValue = form.elements['updateValue'].value;

        const objUpdateMulti = {
            searchField: searchField,
            searchValue: searchValue,
            updateField: updateField,
            updateValue: updateValue
        }

        fetch(`${CARS_API}/updateMultipleCars`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',

            },
            body: JSON.stringify(objUpdateMulti),

        }).then(() => props.fetchAllCars()).catch(err => {
            console.log(err)
        })
    }
    return (
        <div className="container">
            <h3>Update Field for multiple Cars</h3>
            <form onSubmit={updateCars}>
                <field className="createField">
                    <label htmlFor="searchField">Find cars with this field: </label>
                    <select name="searchField">
                        <option value="make">make</option>
                        <option value="model">model</option>
                        <option value="year">year</option>

                        <option value="owner">owner</option>
                    </select>
                </field>

                <field className="createField">
                    <label htmlFor="searchValue">Where the value of this field is: </label>
                    <input name="searchValue" type="text" />
                </field>

                <field className="createField">
                    <label htmlFor="updateField">Update this field on these cars: </label>
                    <select name="updateField">
                        <option value="make">make</option>
                        <option value="model">model</option>
                        <option value="year">year</option>

                        <option value="owner">owner</option>
                    </select>
                </field>

                <field className="createField">
                    <label htmlFor="updateValue">to this value: </label>
                    <input name="updateValue" type="text" />
                </field>

                <button type="submit">Update Cars</button>
            </form>

        </div>
    )
}
export default UpdateMultipleCars;