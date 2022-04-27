const Operator = require('../operations/operation');

class Controller {
    static getOperation(operator){
        switch (operator){
            case "+":
                return Operator.add

            case "-":
                return Operator.sub;

            case "/":
                return Operator.div;

            case "*":
                return Operator.mul;

            case "%":
                return Operator.modulo
        }
    }
}

module.exports = Controller;