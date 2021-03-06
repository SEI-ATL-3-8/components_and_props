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

// (E)
// function Box(props) {
//   return (
//     <div className='box'>
//       {props.letter}
//     </div>
//   )
// }

// function Row() {
//   const firstLetter = ['X', 'O'][Math.floor(Math.random() * 2)]
//   const secondLetter = ['X', 'O'][Math.floor(Math.random() * 2)]
//   const thirdLetter = ['X', 'O'][Math.floor(Math.random() * 2)]
  
//   return (
//     <div className='row'>
//       <Box letter={firstLetter} />
//       <Box letter={secondLetter}/>
//       <Box letter={thirdLetter}/>
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

class App extends React.Component {
  render() {
    return (
      <div>
        <Row />
        <Row />
        <Row />
      </div>
    )
  }
}

class Row extends React.Component {
  randomLetter() {
    return ['X', 'O'][Math.floor(Math.random() * 2)]
  }

  render() {
    // const firstLetter = ['X', 'O'][Math.floor(Math.random() * 2)]
    // const secondLetter = ['X', 'O'][Math.floor(Math.random() * 2)]
    // const thirdLetter = ['X', 'O'][Math.floor(Math.random() * 2)]

    
    return (
      <div>
        <Box letter={this.randomLetter()} />
        <Box letter={this.randomLetter()} />
        <Box letter={this.randomLetter()} />
      </div>
    )
  }
}

class Box extends React.Component {
  render() {
    return (
      <div className='box'>
        {this.props.letter}
      </div>
    )
  }
}

export default App;
