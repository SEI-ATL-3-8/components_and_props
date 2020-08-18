import React from 'react';
import './App.css';

// (A)
// function App() {
//   return (
//     <div>
//       <h1>hellooo welcome to my app</h1>
//       <p>this text is inside a paragraph</p>
//       <div>
//         Here is why react is awesome:
//         <ol>
//           <li>1. It can help you get a job</li>
//           <li>2. Ummm I've been learning it for like 5 minutes</li>
//         </ol>
//       </div>
//     </div>
//   );
// }

// (B)
// function Box() {
//   return (
//     <div className='box'>
//       X
//     </div>
//   )
// }

// function Row() {
//   return (
//     <div className='row'>
//       <Box />
//       <Box />
//       <Box />
//     </div>
//   )
// }

// function App() {
//   return (
//     <div>
//       <Row />
//       <Row />
//       <Row />
//     </div>
//   )
// }


// (C)
// class Box extends React.Component {
//   render() {
//     return (
//       <div className='box'>X</div>
//     )
//   }
// }

// class Row extends React.Component {
//   render() {
//     return (
//       <div className='row'>
//         <Box />
//         <Box />
//         <Box />
//       </div>
//     )
//   }
// }

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <Row />
//         <Row />
//         <Row />
//       </div>
//     )
//   }
// }

// (D)
// function Box() {
//   const number = Math.floor(Math.random() * 2)
//   const letter = ['X', 'O'][number]
  
//   return (
//     <div className='box'>
//       {console.log(letter)}
//       {['X', 'O'][Math.floor(Math.random() * 2)]}
//     </div>
//   )
// }

// function Row() {
//   return (
//     <div className='row'>
//       <Box />
//       <Box />
//       <Box />
//     </div>
//   )
// }

// function App() {
//   return (
//     <div>
//       <Row />
//       <Row />
//       <Row />
//     </div>
//   )
// }

// class Box extends React.Component {
//   randomLetter() {
//     const number = Math.floor(Math.random() * 2)
//     const lettersArray = ['X', 'O']
//     const letter = lettersArray[number]

//     return letter
//   }
  
//   render() {
//     // const number = Math.floor(Math.random() * 2)
//     // const letter = ['X', 'O'][number]

//     return (
//       <div className='box'>
//         { this.randomLetter() }
//       </div>
//     )
//   }
// }

// class Row extends React.Component {
//   render() {
//     return (
//       <div>
//         <Box />
//         <Box />
//         <Box />
//       </div>
//     )
//   }
// }

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <Row />
//         <Row />
//         <Row />
//       </div>
//     )
//   }
// }

export default App;
