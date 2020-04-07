import React, { Component } from "react";
import { FaDolly, FaRedo, FaDollarSign } from "react-icons/fa";
import styled from "styled-components";

export default class servicesBanner extends Component {
  state = {
    services: [
      {
        id: 1,
        icon: <FaDolly />,
        title: "free website",
        text:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, voluptate!"
      },
      {
        id: 2,
        icon: <FaRedo />,
        title: "7 days to check quality",
        text:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, voluptate!"
      },
      {
        id: 3,
        icon: <FaDollarSign />,
        title: "secured payment",
        text:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, voluptate!"
      }
    ]
  };

  render() {
    return (
      <ServicesWrapper className="py-5">
        <div className="container">
          <div className="row">
            {this.state.services.map(item => {
              return (
                <div
                  className="col-10 mx-auto col-sm-6 col-md-4 text-center my-3"
                  key={item.id}
                >
                  <div className="service-icon">{item.icon}</div>
                  <h5 className="mt-3 text-capitalize">{item.title}</h5>
                  <p className="mt-3 ">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </ServicesWrapper>
    );
  }
}

const ServicesWrapper = styled.section`
  background: rgba(95, 183, 234, 0.5);
  width: 1600px;
  .service-icon {
    font-size: 2.5rem;
    color: var(--primaryColor);
  }
  p {
    color: var(--darkGrey);
  }
`;
