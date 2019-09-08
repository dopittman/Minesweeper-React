import React from 'react'
class Tile extends React.Component {

  state = {
    currentStatus: 'blank',
    img: ``
  }
  tile=this.props.tile


  checkStatus = () => {
    if(this.tile.bombed === true){
      this.setState({currentStatus: `bombed`})
      this.setState({img: `💣`})
      } else if(this.tile === true){
        this.setState({currentStatus: 'flagged'})
        this.setState({img: `🚩`})
      } else if(this.tile.explored === true){
        this.setState({currentStatus: 'explored'})
      }
    }

    handleClick = (e) =>{
      let altActive = e.altKey;
      this.props.updateGame(this.props.tile, altActive)
      console.log(this.props.tile.adjacentBombCount())
    }

    componentDidMount(){
    this.checkStatus()
  }

  render(){
    return (
      <div className={`tile ${this.state.currentStatus}`}
      onClick={(e)=>{
        this.handleClick(e);
        this.checkStatus(); }}>
      <h2>{this.state.currentStatus}</h2></div>
  )}
}

export default Tile