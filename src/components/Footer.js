import React from "react";

export default class Footer extends React.Component {
  render() {
    return (
      <div style={{ position: "relative", width: "100%"}}>
        <footer id="sticky-footer" className="py-4 bg-dark text-white-50">
          <div className="container text-center">
            <small>Copyright &copy; Assignment Website</small>
          </div>
        </footer>
      </div>
    );
  }
}
