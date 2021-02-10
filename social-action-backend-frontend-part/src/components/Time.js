import React from "react";

// function Time(props) {
// 	return (<h1 className="time">12:01</h1>);
// }
class Time extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    let [month, date, year] = this.state.date
      .toLocaleDateString("en-US")
      .split("/");
    return (
      <div className="time">
        <h1>{this.state.date.toLocaleTimeString()}</h1>
        <h2>
          {month}/{date}/{year}
        </h2>
      </div>
    );
  }
}
export default Time;
