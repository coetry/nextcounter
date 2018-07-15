const { Component } = React

const PINK = '#ff7575'

const BigNumber = ({ children }) => 
  <div className="big-number">
    {children}
    <style jsx>{`
      .big-number {
        font-family: Helvetica;
        font-size: 15rem;
        color: white;
        position: absolute;
        bottom: 0;
        left: 0;
      }
    `}</style>
  </div>

const Button = ({ children }) =>
  <div>
    {children}
    <style jsx>{`
      padding: 1rem;
      font-size: 4rem;
      font-family: Helvetica;
      font-weight: 700;
      color: #fff;
    `}</style>
  </div>

class Page extends Component {
  
  state = { counter: 0 } 

  startCounter = () => {
    console.log('clicked')
    this.counterId = setInterval(() => {
      this.setState(({counter}) => ({counter: counter + 1 }))
    }, 1000)
  }

  stopCounter = () => {
    clearInterval(this.counterId)
  }
 
  render(){
    return ( 
      <div className="root">
        <BigNumber>{this.state.counter}</BigNumber>
        <Button onClick={this.startCounter}>START</Button>
        <Button onClick={this.stopCounter}>STOP</Button>
        <style jsx>{`
          .root {
            background: ${PINK};
            height: 100vh;
            width: 100vw;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
          }
        `}</style>
      </div>
    )
  }
}

export default Page
