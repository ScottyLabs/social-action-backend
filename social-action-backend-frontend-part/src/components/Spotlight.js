import React, {Component, Fragment} from "react";
import api from '../api'
import Hours from "./Hours";
import Location from "./Location";
import Tags from "./Tags";
import spotlightphoto from "../assets/spotlight-photo.jpg";

import "./Spotlight.css";

class Spotlight extends Component {
  constructor(props) {
      super(props)
      this.state = {
          businesses: [],
          isLoading: false,
      }
  }

  componentDidMount = async () => {
      this.setState({ isLoading: true })

      await api.pipeBis().then(businesses => {
          this.setState({
              businesses: businesses.data.data,
              isLoading: false,
          })
      })
  }

  render() {
      const { businesses } = this.state

      return (
        <div className="spotlight">
        <img src={spotlightphoto} className="spotlight-photo" alt="spotlight"/>
        <div className="spotlight-body">
        {businesses.map((id)=>{
            return (
              <Fragment>
                <h2>{id.firm_name}</h2> 
                <Location />
                <Hours />
                <div>
                  <button><a href="google.com">Visit Website</a></button>
                </div>
                <Tags />
              </Fragment>
            )
        })}
        </div>

        <div className="scroll">
          <span>Dining</span>
        </div>

      </div>
      )
  }
}

export default Spotlight;
