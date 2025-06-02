import { useState } from 'react';
import { Button } from "/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "/components/ui/card";

export default function Calculator() {
  const [display, setDisplay] = useState('0');
  const [firstOperand, setFirstOperand] = useState<number | null>(null);
  const [operator, setOperator] = useState<string | null>(null);
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);

  const inputDigit = (digit: string) => {
    if (waitingForSecondOperand) {
      setDisplay(digit);
      setWaitingForSecondOperand(false);
    } else {
      setDisplay(display === '0' ? digit : display + digit);
    }
  };

  const inputDecimal = () => {
    if (waitingForSecondOperand) {
      setDisplay('0.');
      setWaitingForSecondOperand(false);
      return;
    }

    if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  const clearAll = () => {
    setDisplay('0');
    setFirstOperand(null);
    setOperator(null);
    setWaitingForSecondOperand(false);
  };

  const handleOperator = (nextOperator: string) => {
    const inputValue = parseFloat(display);

    if (firstOperand === null) {
      setFirstOperand(inputValue);
    } else if (operator) {
      const result = calculate(firstOperand, inputValue, operator);
      setDisplay(String(result));
      setFirstOperand(result);
    }

    setWaitingForSecondOperand(true);
    setOperator(nextOperator);
  };

  const calculate = (firstOperand: number, secondOperand: number, operator: string) => {
    switch (operator) {
      case '+':
        return firstOperand + secondOperand;
      case '-':
        return firstOperand - secondOperand;
      case '×':
        return firstOperand * secondOperand;
      case '÷':
        return firstOperand / secondOperand;
      default:
        return secondOperand;
    }
  };

  const handleEquals = () => {
    if (operator === null || firstOperand === null) return;

    const inputValue = parseFloat(display);
    const result = calculate(firstOperand, inputValue, operator);
    setDisplay(String(result));
    setFirstOperand(null);
    setOperator(null);
    setWaitingForSecondOperand(true);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <Card className="w-full max-w-xs">
        <CardHeader>
          <CardTitle className="text-center">Calculator</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4 p-3 bg-gray-100 rounded">
            <div className="text-right text-3xl font-mono overflow-x-auto">
              {display}
            </div>
          </div>

          <div className="grid grid-cols-4 gap-2">
            <Button 
              variant="destructive" 
              className="col-span-2" 
              onClick={clearAll}
            >
              AC
            </Button>
            <Button variant="secondary" onClick={() => handleOperator('÷')}>
              ÷
            </Button>
            <Button variant="secondary" onClick={() => handleOperator('×')}>
              ×
            </Button>

            <Button onClick={() => inputDigit('7')}>7</Button>
            <Button onClick={() => inputDigit('8')}>8</Button>
            <Button onClick={() => inputDigit('9')}>9</Button>
            <Button variant="secondary" onClick={() => handleOperator('-')}>
              -
            </Button>

            <Button onClick={() => inputDigit('4')}>4</Button>
            <Button onClick={() => inputDigit('5')}>5</Button>
            <Button onClick={() => inputDigit('6')}>6</Button>
            <Button variant="secondary" onClick={() => handleOperator('+')}>
              +
            </Button>

            <Button onClick={() => inputDigit('1')}>1</Button>
            <Button onClick={() => inputDigit('2')}>2</Button>
            <Button onClick={() => inputDigit('3')}>3</Button>
            <Button 
              variant="default" 
              className="row-span-2 bg-blue-500 hover:bg-blue-600" 
              onClick={handleEquals}
            >
              =
            </Button>

            <Button className="col-span-2" onClick={() => inputDigit('0')}>
              0
            </Button>
            <Button onClick={inputDecimal}>.</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}