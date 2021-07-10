import React from 'react'
import { hot } from 'react-hot-loader/root'

class App extends React.Component {
  render() {
    return (
      <div>
        <nav className="navibar bg-primary mb-4">
          <h1 className="display-4 text-light">Reactron-app</h1>
        </nav>
        <div className="container text-primary">
          <h2>App Component</h2>
          <p>This is App class component.</p>
          <Content />
        </div>
      </div>
    )
  }
}

// class Content extends React.Component {
//   constructor() {
//     super()
//     this.title = 'Hello Component'
//     this.message = 'This is Sample Component'
//     this.classname = 'alert alert-warning'
//   }

//   render() {
//     return (
//       <div className={this.classname}>
//         <h2>{this.title}</h2>
//         <p>{this.message}</p>
//       </div>
//     )
//   }
// }

// class Content extends React.Component {
//   constructor(props) {
//     super(props)
//     this.flg = true
//     this.title = 'Hello Component'
//     this.state = {
//       classname: 'alert alert-warning',
//       message: 'This is Sample Component'
//     }
//     setInterval(() => {
//       if (this.flg) {
//         this.setState(() => ({
//           classname: 'alert alert-light',
//           message: 'This is light alert sample'
//         }))
//       } else {
//         this.setState(() => ({
//           classname: 'alert alert-warning',
//           message: 'This is warning alert'
//         }))
//       }
//       this.flg = !this.flg
//     }, 1000)
//   }

//   render() {
//     return (
//       <div className={this.state.classname}>
//         <h2>{this.title}</h2>
//         <p>{this.state.message}</p>
//       </div>
//     )
//   }
// }

class Content extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
    this.doAction = this.doAction.bind(this)
  }

  doAction(e) {
    this.setState(state => ({
      count: state.count + 1
    }))
  }

  render() {
    return (
      <div className="container">
        <div className="alert alert-primary">
          <h2>App Component {this.state.count}</h2>
          <p>This is App-Class component!</p>
          <button className="btn btn-primary" onClick={this.doAction}>Click</button>
        </div>
      </div>
    )
  }
}

export default hot(App)
