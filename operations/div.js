const Operator = require('./parent')

class Division extends  Operator{
    solve() {
        return this.num1 / this.num2;
    }
}

module.exports = Division;