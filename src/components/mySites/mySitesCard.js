import React from "react";
import MySiteList from "./mySitesList";
import PaidMySitesList from "./paidMySitesList";
import NotPaidMySiteList from "./notPaidMySitesList";
import { Tab } from "semantic-ui-react";

const mySitesCard = () => {
  const panes = [
    {
      menuItem: "All my sites",
      render: () => (
        <Tab.Pane>
          <MySiteList />
        </Tab.Pane>
      )
    },
    {
      menuItem: "Completed Payment",
      render: () => (
        <Tab.Pane>
          <PaidMySitesList />
        </Tab.Pane>
      )
    },
    {
      menuItem: "Not Completed Payment",
      render: () => (
        <Tab.Pane>
          <NotPaidMySiteList />
        </Tab.Pane>
      )
    }
  ];
  return (
    // <div className="mt-5 mb-5">
    <Tab panes={panes} style={{ width: "1400px", marginLeft: "-150px" }} />

    // </div>
  );
};

export default mySitesCard;
