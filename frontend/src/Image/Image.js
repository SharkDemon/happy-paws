import React from "react";
import './Image.css';

export default class Image extends React.Component {
  state = { isOpen: false };

  handleShowDialog = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <div>
        <img
          className="small"
          src={this.props.imageT}
          onClick={this.handleShowDialog}
          alt="one"
        />
        {this.state.isOpen && (
          <dialog
            className="dialog"
            style={{ position: "absolute" }}
            open
            onClick={this.handleShowDialog}
          >
            <img
              className="image"
              src={this.props.image}
              onClick={this.handleShowDialog}
              alt="no"
            />
          </dialog>
        )}
      </div>
    );
  }
}
