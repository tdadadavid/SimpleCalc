const Operator = require('./parent')

class Modulo extends  Operator{

    // override
    solve() {
        return this.num1 % this.num2;
    }

}

module.exports = Modulo;