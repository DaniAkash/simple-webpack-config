class Car {
    
    constructor() {
        this._brands = [];
    }

    get brands() {
        debugger;
        return this._brands;
    }

    addNewBrand(brand) {
        this._brands.push(brand);
    }
}

export default Car;