class Car {
    
    constructor() {
        this._brands = [];
    }

    get brands() {
        return this._brands;
    }

    addNewBrand(brand) {
        this._brands.push(brand);
    }
}

const cars = new Car();
cars.addNewBrand('Audi');
console.log(cars.brands);