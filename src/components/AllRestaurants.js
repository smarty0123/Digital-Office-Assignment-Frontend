import React from "react";
import axios from "axios";
import { Card, CardTitle, CardText } from "reactstrap";

class AllRestaurants extends React.Component {
  constructor() {
    super();
    this.state = {
      restaurants: [],
      isLoading: true
    };
  }

  componentDidMount() {
    const date = localStorage.getItem("restaurantsDate");
    const restaurantsDate = date && new Date(parseInt(date));
    const now = new Date();

    const dataAge = Math.round((now - restaurantsDate) / (1000 * 60));
    const tooOldData = dataAge >= 15;

    if (tooOldData) {
      this.fetchData();
    } else {
      this.setState({
        restaurants: JSON.parse(localStorage.getItem("restaurants")),
        isLoading: false
      });
      console.log("Using data from local storage.");
    }
  }

  fetchData() {
    axios
      .get("http://localhost:8000/api/restaurants")
      .then(response => response.data)
      .then(data => {
        this.setState({
          restaurants: data,
          isLoading: false
        });
        localStorage.setItem("restaurants", JSON.stringify(data));
        localStorage.setItem("restaurantsDate", Date.now());
      });
  }

  render() {
    return (
      <div classname="container" style={{ padding: 20, minHeight: "100vh" }}>
        <h3>20 Restaurants in Bangsue area</h3>
        {this.state.isLoading ? (
          <h5>Loading...</h5>
        ) : (
          <div
            className="container"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)"
            }}
          >
            {this.state.restaurants.map(data => (
              <div className="row">
                <div className="col">
                  <Card
                    body
                    style={{
                      margin: 20,
                      borderRadius: "5%",
                      border: "2px black solid"
                    }}
                  >
                    <CardTitle className="font-weight-bold">
                      {data.name}
                    </CardTitle>
                    <div style={{ bottom: 10 }}>
                      <CardText>{data.vicinity}</CardText>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default AllRestaurants;
