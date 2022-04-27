const Operator = require('./parent')

class Addition extends  Operator{
    solve() {
        return this.num1 + this.num2;
    }
}

module.exports = Addition;