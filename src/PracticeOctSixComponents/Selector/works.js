// =====================================================================
// const Limits = () => (
//   <div>
//     <h1>Limits</h1>
//   </div>
// )

// const Calculus = () => (
//   <div>
//     <h1>Calculus</h1>
//   </div>
// )

// const Trigonometry = () => (
//   <div>
//     <h1>Trigonometry</h1>
//   </div>
// )

// const Concept = props => {
//   const {selectedConcept} = props
//   const component = selectedConcept
//   return <div>{selectedConcept && <component />}</div>
// }

// export default Concept
// //

// const Concept = props => {
//   const {selectedConcept} = props
//   let selectedComponent

//   switch (selectedConcept) {
//     case 'Limits':
//       selectedComponent = (
//         <div>
//           <h1>Limits</h1>
//         </div>
//       )
//       break
//     case 'Calculus':
//       selectedComponent = (
//         <div>
//           <h1>Calculus</h1>
//         </div>
//       )
//       break
//     case 'Trigonometry':
//       selectedComponent = (
//         <div>
//           <h1>Trigonometry</h1>
//         </div>
//       )
//       break
//     default:
//       selectedComponent = null
//   }

//   return <div>{selectedComponent}</div>
// }

// export default Concept

// =====================================================================

// import React from 'react';

// const Limits = () => (
//   <div>
//     <h1>Limits</h1>
//   </div>
// )

// const Calculus = () => (
//   <div>
//     <h1>Calculus</h1>
//   </div>
// )

// const components = {
//   Limits: <Limits />,
//   Calculus: <Calculus />,
// }

// const Concept = props => {
//   const {selectedConcept} = props
//   const SelectedComponent = components[selectedConcept]

//   return <div>{SelectedComponent}</div>
// }

// export default Concept
