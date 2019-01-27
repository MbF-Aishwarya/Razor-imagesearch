import React from "react";

class TextComponent extends React.Component {
  render() {
    return (
      <div className="inlineText">
        <h1 style={{color: "indigo"}}>{this.props.h1}</h1>
        <h1 style={{color: "violet"}}>{this.props.h2}</h1>
        <h1 style={{color: "red"}}>{this.props.h3}</h1>
        <h1 style={{color: "orange"}}>{this.props.h4}</h1>
        <h1 style={{color: "lightskyblue"}}>{this.props.h5}</h1>
        <h1 style={{color: "green"}}>{this.props.h6}</h1>
      </div>
    );
  }
}
TextComponent.defaultProps = {
    h1: "C",
    h2: "r",
    h3: "a",
    h4: "y",
    h5:"o",
    h6:"n"
}

export default TextComponent;
