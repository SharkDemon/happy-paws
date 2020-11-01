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
          src="http://192.168.86.94/images/pets/8-husky-thumb.png"
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
              src="http://192.168.86.94/images/pets/8-husky.png"
              onClick={this.handleShowDialog}
              alt="no"
            />
          </dialog>
        )}
      </div>
    );
  }
}
