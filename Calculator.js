const controller = require('./core/controller')
const {firstOperand: input1, secondOperand: input2, operator: userOperation}  =  require('./core/input')


const Operation = controller.getOperation(userOperation)
let operation = new Operation(input1, input2)
let answer = operation.solve(input1, input2);
console.log(answer);
