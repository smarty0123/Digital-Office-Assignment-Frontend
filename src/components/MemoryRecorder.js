import React from "react";
import axios from "axios";
import { Card, CardText } from "reactstrap";

export default class MemoryRecorder extends React.Component {
  constructor() {
    super();
    this.state = {
      memoryRecorder: {},
      isLoading: true
    };
  }

  componentDidMount() {
    const date = localStorage.getItem("memoryRecorderDate");
    const memoryRecorderDate = date && new Date(parseInt(date));
    const now = new Date();

    const dataAge = Math.round((now - memoryRecorderDate) / (1000 * 60));
    const tooOldData = dataAge >= 1;

    if (tooOldData) {
      this.fetchData();
    } else {
      this.setState({
        memoryRecorder: JSON.parse(localStorage.getItem("memoryRecorder")),
        isLoading: false
      });
      console.log("Using data from local storage.");
    }
  }

  fetchData() {
    axios.get("http://localhost:8000/api/memoryrecorder").then(response => {
      this.setState({
        memoryRecorder: response.data,
        isLoading: false
      });
      localStorage.setItem("memoryRecorder", JSON.stringify(response.data));
      localStorage.setItem("memoryRecorderDate", Date.now());
    });
  }

  render() {
    return (
      <div className="container" style={{ minHeight: "100vh" }}>
        <h1>MEMORY RECORDER</h1>
        {this.state.isLoading ? (
          <h5>Loading...</h5>
        ) : (
          <div>
            {Object.keys(this.state.memoryRecorder).map(data => (
              <Card style={{ marginBottom: 20 }}>
                  <CardText>{this.state.memoryRecorder[data].date}</CardText>
                  <CardText>{this.state.memoryRecorder[data].message}</CardText>
              </Card>
            ))}
          </div>
        )}
      </div>
    );
  }
}
