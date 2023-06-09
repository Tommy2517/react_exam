import React, {FC} from 'react';
import {ICar} from "../../interfaces/car.interface";

interface IProps{
    car:ICar;
}
const Car:FC<IProps>  = ({car}) => {
    const {id,year,price,brand} = car;

    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
        </div>
    );
};

export {Car};