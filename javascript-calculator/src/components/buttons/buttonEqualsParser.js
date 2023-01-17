
/*
    Rules of writing valid math expressions
    1.  A real number is a sequence of digits optionally with a single decimal point in the middle (at the end, it does not do anything) and a minus symbol at the front.
    2.  A real number must be followed by an operator or an opening or closing parenthesis. An opening parenthesis following a number implies multiplication.
    3.  An operator must be followed by a number.
    4.  An opening parenthesis must be followed by a number, or by a minus symbol in the case of a negative number.
    5.  A closing parenthesis must be followed by an operator or by a number. A number following a closing parenthesis implies multiplication.
*/

function removeExcessOperators(expression) {
    let oldExpression = expression.slice();
    let newExpression = expression.slice();
    newExpression = newExpression.replace(/\D+$/g, '');
    newExpression = newExpression.replace(/[^\d\-+/*().]/g, '');
    //  console.log(newExpression);
    do {
        oldExpression = newExpression.slice();
        newExpression = newExpression.replace(/[-+/*]+([-+/*]-\d)/g, '$1');
        newExpression = newExpression.replace(/[-+/*]+([+/*]\d)/g, '$1');
        newExpression = newExpression.replace(/(\()[-+/*]+(-\()/g, '$1$2');
        newExpression = newExpression.replace(/(\()[-+/*]*[+/*]+(\()/g, '$1$2');
        newExpression = newExpression.replace(/(\))[-+/*]+(\))/g, '$1$2');
        newExpression = newExpression.replace(/(?<=\()[-+/*]+(-\d)/g, '$1');
        newExpression = newExpression.replace(/(?<=\()[-+/*]*[+/*](\d)/g, '$1');
        newExpression = newExpression.replace(/[-+/*]+([+/*]-\()/g, '$1');
        newExpression = newExpression.replace(/[-+/*]+([+/*]\()/g, '$1');
        //  console.log(newExpression);
    } while (newExpression !== oldExpression);
    return newExpression;
}

function fillParentheses(expression) {
    let newExpression = expression.slice();
    let leftParenthesisCount = newExpression.match(/\(/g);
    leftParenthesisCount = leftParenthesisCount === null ? 0 : leftParenthesisCount.length;
    let rightParenthesisCount = newExpression.match(/\)/g);
    rightParenthesisCount = rightParenthesisCount === null ? 0 : rightParenthesisCount.length;
    if (leftParenthesisCount > rightParenthesisCount) {
        newExpression = newExpression.padEnd(newExpression.length + (leftParenthesisCount - rightParenthesisCount), ')');
    } else {
        newExpression = newExpression.padStart(newExpression.length + (rightParenthesisCount - leftParenthesisCount), '(');
    }
    return newExpression;
}

function parseSingleExpression(expressionList) {
    //  let expressionList = expression.match(/((?<=[-+/*])-\d+\.\d+|(?<=[-+/*])-\d+|\d+\.\d+|\d+|[-+/*])/g);
    //  expressionList = expressionList.map((part) => (/(-\d+\.\d+|-\d+|\d+\.\d+|\d+)/.test(part)) ? parseFloat(part) : part);
    let newExpressionList = expressionList.slice();
    const binaryOperationAtI = (list, opFunc, i) => [...list.slice(0,i-1), opFunc(list[i-1],list[i+1]), ...list.slice(i+2,)];
    for (let i = 0; i < newExpressionList.length; i++) {
        //  console.log(newExpressionList);
        if (newExpressionList[i] === '*') {
            newExpressionList = binaryOperationAtI(newExpressionList, (a, b) => a * b, i);
            i = -1;
        } else if (newExpressionList[i] === '/') {
            newExpressionList = binaryOperationAtI(newExpressionList, (a, b) => a / b, i);
            i = -1;
        }
    }
    for (let i = 0; i < newExpressionList.length; i++) {
        //  console.log(newExpressionList);
        if (newExpressionList[i] === '+') {
            newExpressionList = binaryOperationAtI(newExpressionList, (a, b) => a + b, i);
            i = -1;
        } else if (newExpressionList[i] === '-') {
            newExpressionList = binaryOperationAtI(newExpressionList, (a, b) => a - b, i);
            i = -1;
        }
    }
    return newExpressionList[0];
};

function parseNestedExpression(expression) {
    let newExpression = expression.slice();
    newExpression = newExpression.replace(/(?<=\d)(\()/g, '*$1');
    newExpression = newExpression.replace(/(\))(?=\d)/g, '$1*');
    newExpression = newExpression.replace(/(\))(?=-\d)/g, '$1*');
    newExpression = newExpression.replace(/(?<=\()(-\d)/g, '0$1');
    newExpression = newExpression.replace(/^(-\d)/g, '0$1');
    //  console.log(newExpression);
    let expressionList = newExpression.match(/((?<=[-+/*])-\d+\.\d+|(?<=[-+/*])-\d+|\d+\.\d+|\d+|[-+/*()])/g);
    expressionList = expressionList.map((part) => (/(-\d+\.\d+|-\d+|\d+\.\d+|\d+)/.test(part)) ? parseFloat(part) : part);
    //  console.log(expressionList);
    let i = 0;
    while (expressionList.indexOf(')') > -1) {
        let innermostRightParenthesisIndex = expressionList.indexOf(')');
        let innermostLeftParenthesisIndex = expressionList.lastIndexOf('(', innermostRightParenthesisIndex);
        if (-1 < innermostLeftParenthesisIndex && innermostLeftParenthesisIndex < innermostRightParenthesisIndex && 0 < innermostRightParenthesisIndex) {
            expressionList = [
                ...expressionList.slice(0,innermostLeftParenthesisIndex),
                parseSingleExpression(expressionList.slice(innermostLeftParenthesisIndex+1,innermostRightParenthesisIndex)),
                ...expressionList.slice(innermostRightParenthesisIndex+1,)
            ]
        } else {
            i++;
        }
        if (i == 5) {
            return 'ERROR';
        }
        //  console.log(expressionList);
    };
    return parseSingleExpression(expressionList).toString();
};

export default function expressionParser(expression) {
    let newExpression = removeExcessOperators(expression);
    newExpression = fillParentheses(newExpression);
    newExpression = parseNestedExpression(newExpression);
    return newExpression;
}
