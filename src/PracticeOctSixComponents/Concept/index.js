import {Limits, Calculus, Trigonometry, Functions} from './concepts'

const components = {
  Limits: <Limits />,
  Calculus: <Calculus />,
  Trigonometry: <Trigonometry />,
  Functions: <Functions />,
}

const Concept = props => {
  const {selectedConcept} = props
  const SelectedComponent = components[selectedConcept]

  return <div>{SelectedComponent}</div>
}

export default Concept
