const args = process.argv;

const operands = args.slice(2);
const firstOperand = parseInt(operands[0]);
const secondOperand = parseInt(operands[2]);
const operator = operands[1];


module.exports = {
    firstOperand,
    secondOperand,
    operator
}