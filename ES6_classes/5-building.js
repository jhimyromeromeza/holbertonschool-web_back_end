export default class Building {
    constructor(sqft) {
        if (this.constructor === Building) {
            throw new Error('No puedes instanciar la clase abstracta!');
        }
        if (this.evacuationWarningMessage === undefined) {
            throw new TypeError('Class extending Building must override evacuationWarningMessage');
        }
        this._sqft = sqft;
    }
    get sqft() {
        return this._sqft;
    }
}
