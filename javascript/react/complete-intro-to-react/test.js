// !! IMPORTANT README:

// You may add additional external JS and CSS as needed to complete the project, however the current external resource MUST remain in place for the tests to work. BABEL must also be left in place. 

/***********
INSTRUCTIONS:
  - Select the project you would 
    like to complete from the dropdown 
    menu.
  - Click the "RUN TESTS" button to
    run the tests against the blank 
    pen.
  - Click the "TESTS" button to see 
    the individual test cases. 
    (should all be failing at first)
  - Start coding! As you fulfill each
    test case, you will see them go   
    from red to green.
  - As you start to build out your 
    project, when tests are failing, 
    you should get helpful errors 
    along the way!
    ************/

// PLEASE NOTE: Adding global style rules using the * selector, or by adding rules to body {..} or html {..}, or to all elements within body or html, i.e. h1 {..}, has the potential to pollute the test suite's CSS. Try adding: * { color: red }, for a quick example!

// Once you have read the above messages, you can delete all comments. 

const initialStore = {
  'calcString': [],
  'final': ''
}

const reducer = function reducer(state = initialStore, action) {
  let result = {
    'calcString': [],
    'final': ''
  };

  // console.log(state);

  switch (action.type) {
    case 'add':
    case 'subtract':
    case 'multiply':
    case 'divide':
    case 'decimal':
      result.calcString = checkLastElement(state.calcString, action.text);
      break;
    case 'clear':
      return result;
    case 'zero':
    case 'one':
    case 'two':
    case 'three':
    case 'four':
    case 'five':
    case 'six':
    case 'seven':
    case 'eight':
    case 'nine':
      result.calcString = checkLastElement(state.calcString, action.text); //state.calcString.concat(action.text);
      result.final = calc(result.calcString);
      break;
    case 'equals':
      result.final = calc(state.calcString);
    // console.log(state.join(''));
    // result = calc(state.join('')); break;
    default: return state; break;
  }
  // console.log(result);
  // console.log(result.join(''));
  // console.log(Number(result.join('')));
  // console.log((result.join('')));
  // console.log(calculate);
  return result;
}

const store = Redux.createStore(reducer);

function checkLastElement(stringSequence, func) {
  const max = stringSequence.length,
    last = stringSequence[max - 1],
    isLastNumber = !isNaN(Number(last)),
    isFuncNumber = !isNaN(Number(func));
  let result = stringSequence;

  if (max > 0) {
    if (isFuncNumber) {
      if (isLastNumber) {
        result[max - 1] = last + func;
      } else {
        result = stringSequence.concat(func);
      }
    } else {
      if (last === func) {
        result[max - 1] = func;
      } else {
        result = stringSequence.concat(func);
      }
    }
  } else {
    result = stringSequence.concat(func);
  }


  // if(max > 0) {
  //   if(last !== func) {
  //     if(isLastNumber) {
  //       if(!isNaN(Number(func))) {
  //         result[max - 1] = last + func;
  //       } else {
  //        result = stringSequence.concat(func);
  //       }
  //     } else {
  //       result[max - 1] = func;
  //     }
  //   }
  // } else {
  //   result = stringSequence.concat(func);
  // }

  return result;
}

function calc(string) {
  // let result = 0;
  // for (let i = 0; i < string.length; i += 1) {
  // let num = Number(string[i]);
  // if(!isNaN(num)) {
  // result 
  // }
  // }
  // console.log(string);
  // let result = new Function('return ' + string) {};
  // let res = eval(string.join(''));
  // console.log(result());
  // return result();
  // return res;
  // return string.reduce() => { a + b; }
  // return string.join('');
  let res = string.join('');
  console.log(string);
  console.log(res);
  console.log(eval(res));
  // return eval(res);
}

class CalculatorButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      text: props.text
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const target = e.target;

    store.dispatch({
      type: target.id,
      text: target.innerHTML
    })
  }

  render() {
    return (
      <div id={this.state.id} class="calc-button" onClick={this.handleClick}>{this.state.text}</div>
    )
  }
}

class Display extends React.Component {
  render() {
    return (
      <div id="display" class="display"></div>
    )
  }
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="calculator">
        <Display />
        <CalculatorButton id="equals" text="=" />
        <CalculatorButton id="clear" text="Clear" />
        <CalculatorButton id="add" text="+" />
        <CalculatorButton id="subtract" text="-" />
        <CalculatorButton id="zero" text="0" />
        <CalculatorButton id="one" text="1" />
      </div>
    )
  }
}

ReactDOM.render(<Calculator />, document.getElementById('root'));



// !! IMPORTANT README:

// You may add additional external JS and CSS as needed to complete the project, however the current external resource MUST remain in place for the tests to work. BABEL must also be left in place. 

/***********
INSTRUCTIONS:
  - Select the project you would 
    like to complete from the dropdown 
    menu.
  - Click the "RUN TESTS" button to
    run the tests against the blank 
    pen.
  - Click the "TESTS" button to see 
    the individual test cases. 
    (should all be failing at first)
  - Start coding! As you fulfill each
    test case, you will see them go   
    from red to green.
  - As you start to build out your 
    project, when tests are failing, 
    you should get helpful errors 
    along the way!
    ************/

// PLEASE NOTE: Adding global style rules using the * selector, or by adding rules to body {..} or html {..}, or to all elements within body or html, i.e. h1 {..}, has the potential to pollute the test suite's CSS. Try adding: * { color: red }, for a quick example!

// Once you have read the above messages, you can delete all comments. 

const initialStore = {
  'calcString': [],
  'final': null,
  'display': 0
}

const reducer = function reducer(state = initialStore, action) {
  let result = {
    'calcString': [],
    'final': null,
    'display': 0
  },
    calculation = null;

  switch (action.type) {
    case 'add':
    case 'subtract':
    case 'multiply':
    case 'divide':
    case 'decimal':
      result.calcString = checkLastElement(state.calcString, action.text);
      break;
    case 'decimal':
      result.calcString = checkLastElement(state.calcString, action.text);
      break;
    case 'clear':
      return result;
    case 'zero':
    case 'one':
    case 'two':
    case 'three':
    case 'four':
    case 'five':
    case 'six':
    case 'seven':
    case 'eight':
    case 'nine':
      result.calcString = checkLastElement(state.calcString, action.text);
      calculation = calc(result.calcString);
      break;
    case 'equals':
      calculation = calc(state.calcString);
    default: return state; break;
  }
  result.final = !isNaN(Number(calculation)) ? result.display = calculation : result.display = 0;
  console.log(result);
  return result;
}

const store = Redux.createStore(reducer);

function checkLastElement(stringSequence, func) {
  const max = stringSequence.length,
    last = stringSequence[max - 1],
    isLastNumber = !isNaN(Number(last)),
    isFuncNumber = !isNaN(Number(func));
  let result = stringSequence;

  if (max > 0) {
    if (isFuncNumber) {
      if (isLastNumber) {
        result[max - 1] = last + func;
      } else {
        result = stringSequence.concat(func);
      }
    } else {
      if (last === func) {
        result[max - 1] = func;
      } else {
        if (func === '.') {
          console.log('decimal');
          result[max - 1] += func;
          console.log(result);
        } else {
          result = stringSequence.concat(func);
        }
      }
    }
  } else {
    result = stringSequence.concat(func);
  }

  return result;
}

function calc(string) {
  return eval(string.join(''));
}

class CalculatorButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      text: props.text
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const target = e.target;

    store.dispatch({
      type: target.id,
      text: target.innerHTML
    })
  }

  render() {
    return (
      <div id={this.state.id} class="calc-button" onClick={this.handleClick}>{this.state.text}</div>
    )
  }
}

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: props.display
    }
  }
  render() {
    return (
      <div id="display" class="display">{this.state.display}</div>
    )
  }
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="calculator">
        <Display display={store.display} />
        <CalculatorButton id="equals" text="=" />
        <CalculatorButton id="clear" text="Clear" />
        <CalculatorButton id="add" text="+" />
        <CalculatorButton id="subtract" text="-" />
        <CalculatorButton id="multiply" text="*" />
        <CalculatorButton id="divide" text="/" />
        <CalculatorButton id="decimal" text="." />
        <CalculatorButton id="zero" text="0" />
        <CalculatorButton id="one" text="1" />
        <CalculatorButton id="two" text="2" />
        <CalculatorButton id="three" text="3" />
        <CalculatorButton id="four" text="4" />
        <CalculatorButton id="five" text="5" />
        <CalculatorButton id="six" text="6" />
        <CalculatorButton id="seven" text="7" />
        <CalculatorButton id="eight" text="8" />
        <CalculatorButton id="nine" text="9" />
      </div>
    )
  }
}

ReactDOM.render(<Calculator />, document.getElementById('root'));