import React from "react";
import {TiHeartFullOutline} from "react-icons/ti";

class Test2 extends React.Component{
  state = {
    count: 0
  };
  handleClick = () => {
    this.setState(({ count }) => ({
      count: count + 1
    }));
  }

  render(){
    return (
      <div>
        <div className={"description"}>
          Ülesanne 2:
          <p>
            Rakendus peab arvet pidama mitu korda on südame ikooni klikitud ning vastava numbri <code>likes:</code> järel kuvama.
          </p>
        </div>

        <div style={{display:"flex", alignItems: "center"}}>
          <div>
            return {this.state.count};
          </div>
          <TiHeartFullOutline onClick={this.handleClick}/>
          <div>Click me</div>
        </div>
      </div>
    );
  }
}


export default Test2;
