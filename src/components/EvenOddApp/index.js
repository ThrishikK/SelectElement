// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {
    number: 0,
  }

  getFactors = () => {
    const {number} = this.state
    console.log(number)
    const factors = [1]
    for (let i = 2; i < number; i += 1) {
      if (number % i === 0) {
        factors.push(i)
      }
    }
    return factors
  }

  checkNum = () => {
    const {number} = this.state
    let check
    if (number % 2 === 0) {
      check = 'Even'
    } else {
      check = 'Odd'
    }
    return check
  }

  increment = () => {
    this.setState(prevState => {
      console.log(`Previous Number is ${prevState.number}`)
      return {
        number: prevState.number + Math.ceil(Math.random() * 100),
      }
    })
  }

  render() {
    const {number} = this.state
    const check = this.checkNum()
    const factors = this.getFactors()
    console.log(factors)

    return (
      <div className="main-container">
        <div className="sub-container">
          <h1>Count {number}</h1>
          <p>Count is {check}</p>
          <button type="button" className="btn-styles" onClick={this.increment}>
            Increment
          </button>
          <p>Increase By Random Number Between 0 to 100</p>
          <h3>{factors}</h3>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
