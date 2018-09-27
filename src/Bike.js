class Bike {
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

export default Bike;