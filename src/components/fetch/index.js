import {Component} from 'react'

class Fetch extends Component {
  componentDidMount() {
    this.getBlogsData()
  }

  getBlogsData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    console.log(data)
  }

  render() {
    return (
      <div>
        <div>
          <h1>Elephant Seal</h1>
        </div>
      </div>
    )
  }
}

export default Fetch
