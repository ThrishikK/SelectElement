import {Component} from 'react'

import Concept from '../Concept'
import './index.css'

const optionsList = [
  {
    name: 'Limits',
    id: 1,
  },
  {
    name: 'Calculus',
    id: 2,
  },
  {
    name: 'Trigonometry',
    id: 3,
  },
  {
    name: 'Functions',
    id: 4,
  },
]

class Selector extends Component {
  state = {
    selectedConcept: optionsList[0].name,
  }

  selectChanger = event => {
    this.setState({selectedConcept: event.target.value})
  }

  render() {
    const {selectedConcept} = this.state
    return (
      <div className="main-container-S">
        <div className="select-container">
          <select className="select-el" onChange={this.selectChanger}>
            {optionsList.map(eachOption => (
              <option
                key={eachOption.id}
                value={eachOption.name}
                className="option-el"
              >
                {eachOption.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <Concept selectedConcept={selectedConcept} />
        </div>
      </div>
    )
  }
}

export default Selector
