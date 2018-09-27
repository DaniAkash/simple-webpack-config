import Car from './Car';
import Bike from './Bike';

const cars = new Car();
cars.addNewBrand('Audi');
console.log(cars.brands);

const bikes = new Bike();
bikes.addNewBrand('Kawasaki');
console.log(bikes.brands);