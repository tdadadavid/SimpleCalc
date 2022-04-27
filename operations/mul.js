const operator = require('./parent')

class Multiplication extends operator{
    // override
    solve() {
        return this.num1 * this.num2;
    }

}

module.exports = Multiplication;