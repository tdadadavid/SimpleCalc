const Operator = require('./parent')

class Subtraction extends  Operator{

    // override
    solve() {
        return this.num1 - this.num2;
    }

}

function sub(firstInput, secondInput){
    return firstInput - secondInput;
}

module.exports = Subtraction;