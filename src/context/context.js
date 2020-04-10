/*  N. R Yamasinghe  IT18233704 version - 01 */
import React, { Component } from "react";
import { socialData } from "./socialData";
import { pricingData } from "./pricingData";
import { menuData } from "./menuData";
import {
  getCategories,
  getSitesByUser,
  getSites,
  createWebsite,
} from "./../services/siteCategoryService";
import { getTickets, viewInquiries } from "./../services/inquiryService";
import auth from "./../services/authService";
import _ from "lodash";

const ProductContext = React.createContext();
class ProductProvider extends Component {
  state = {
    socialLinks: socialData,
    pricingData: pricingData,
    siteData: [],
    filteredSites: [],
    singleSite: {},
    cart: [],
    cartItems: 0,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
    loading: true,
    mySiteData: [],
    sortedMySites: [],
    paidMySites: [],
    sortedPaidMySites: [],
    sortedCart: [],
    singleMySiteSettings: {},
    singleMySiteSettingsCreate: {},
    categories: [],
    sortedCategories: [],
    menuData: menuData,
    sortedSites: [],
    search: "",
    min: 0,
    max: 0,
    open: false,
    size: "",
    singleSiteDeveloper: {},
    siteCreatedTime: "",
    serverTime: "",
    singleMySiteSettingsScript: {},
    cusMsg: [],
    tickets: [],
    openTicket: "",
    inquiry: [],
    sortCusMsg: [],
    sortAdminMsg: [],
    sortAllMsg: [],
  };

  async populateCategories() {
    try {
      if (auth.getCurrentUser()) {
        const { data: categories } = await getCategories();
        this.setState({
          categories,
          sortedCategories: categories,
        });

        console.log(categories);
      }
    } catch (ex) {}
  }

  async populateSitesByUser() {
    try {
      if (auth.getCurrentUser()) {
        const { data } = await getSitesByUser();
        const cart = data.filter((item) => item.paid === false);
        const paidMySites = data.filter((item) => item.paid === true);
        console.log(cart.length);
        this.setState({
          paidMySites,
          cart,
          cartItems: cart.length,
          mySiteData: data,
          sortedMySites: data,
          sortedPaidMySites: paidMySites,
          sortedCart: cart,
        });
        console.log(data);
        console.log(this.state.cart);
      }
    } catch (ex) {}
  }

  async populateSites() {
    try {
      if (auth.getCurrentUser()) {
        const { data: siteData } = await getSites();
        console.log(siteData);
        this.setState({ siteData, sortedSites: siteData });
      }
    } catch (ex) {}
  }

  handleCreateWebsite = async (domain, id) => {
    try {
      const { data } = await createWebsite(domain, id);
      this.setState({
        siteCreatedTime: data.createdDate,
        serverTime: data.serverTimestamp,
      });
      localStorage.setItem("siteCreatedTime", this.state.siteCreatedTime);
      localStorage.setItem("serverTime", this.state.serverTime);
    } catch (ex) {}
  };

  componentDidMount = async () => {
    await this.populateCategories();
    await this.populateSites();
    await this.populateSitesByUser();
    await this.ticketsList();

    this.setState(
      {
        singleSite: this.getStorageSite(),
        filteredSites: this.getStorageFilteredSites(),
        singleMySiteSettingsScript: this.getsingleMySiteSettingsScript(),
        singleSiteDeveloper: this.getStorageSiteDeveloper(),
        singleMySiteSettings: this.getsingleMySiteSettings(),
        singleMySiteSettingsCreate: this.getsingleMySiteSettingsCreate(),
        loading: false,
      },
      () => this.addTotals()
    );
  };

  getsingleMySiteSettings = () => {
    return localStorage.getItem("singleMySiteSettings")
      ? JSON.parse(localStorage.getItem("singleMySiteSettings"))
      : {};
  };

  getsingleMySiteSettingsScript = () => {
    return localStorage.getItem("singleMySiteSettingsScript")
      ? JSON.parse(localStorage.getItem("singleMySiteSettingsScript"))
      : {};
  };

  getsingleMySiteSettingsCreate = () => {
    return localStorage.getItem("singleMySiteSettingsCreate")
      ? JSON.parse(localStorage.getItem("singleMySiteSettingsCreate"))
      : {};
  };
  getStorageSite = () => {
    return localStorage.getItem("singleSite")
      ? JSON.parse(localStorage.getItem("singleSite"))
      : {};
  };

  getStorageSiteDeveloper = () => {
    return localStorage.getItem("singleSiteDeveloper")
      ? JSON.parse(localStorage.getItem("singleSiteDeveloper"))
      : {};
  };
  getStorageFilteredSites = () => {
    return localStorage.getItem("filteredSites")
      ? JSON.parse(localStorage.getItem("filteredSites"))
      : {};
  };
  filterSites = (category) => {
    const { siteData } = this.state;
    let tempSites = [...siteData];

    const sites = tempSites.filter((item) =>
      item.categories.some((c) => c === category)
    );

    localStorage.setItem("filteredSites", JSON.stringify(sites));

    this.setState({ filteredSites: sites }, () =>
      console.log(this.state.filteredSites)
    );
  };

  filterSitesAll = (category) => {
    const { siteData } = this.state;

    if (category === "1") {
      let tempSites = [...siteData];
      localStorage.setItem("filteredSites", JSON.stringify(tempSites));

      this.setState({ filteredSites: tempSites }, () =>
        console.log(this.state.filteredSites)
      );
    }
  };

  setSingleSite = (id) => {
    const { siteData } = this.state;
    let site = siteData.find((item) => item._id === id);
    localStorage.setItem("singleSite", JSON.stringify(site));

    const developer = {
      username: "Anonymous",
      firstName: "Anonymous",
    };
    if (!site.developer === null) {
      localStorage.setItem(
        "singleSiteDeveloper",
        JSON.stringify(site.developer)
      );
    } else {
      localStorage.setItem("singleSiteDeveloper", JSON.stringify(developer));
    }

    this.setState(
      {
        singleSite: { ...site },
        // singleSiteDeveloper: site.developer,
        singleSiteDeveloper: localStorage.getItem("singleSiteDeveloper"),
      },
      () => console.log(this.state.singleSite)
    );
  };

  setSingleSiteSettings = (id) => {
    const { mySiteData } = this.state;
    let site = mySiteData.find((item) => item._id === id);
    localStorage.setItem("singleMySiteSettings", JSON.stringify(site));

    localStorage.setItem(
      "singleMySiteSettingsScript",
      JSON.stringify(site.script)
    );

    this.setState(
      {
        singleMySiteSettings: { ...site },
        singleMySiteSettingsScript: site.script,
      },
      () => console.log(this.state.singleMySiteSettings)
    );
  };

  setSingleSiteSettingsCreate = (id) => {
    const { siteData } = this.state;
    let site = siteData.find((item) => item._id === id);
    localStorage.setItem("singleMySiteSettingsCreate", JSON.stringify(site));
    this.setState(
      {
        singleMySiteSettingsCreate: { ...site },
      },
      () => console.log(this.state.singleMySiteSettingsCreate)
    );
  };

  getStorageCart = () => {
    let cart;
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
    } else {
      cart = [];
    }
    return cart;
  };

  syncStorage = () => {
    localStorage.setItem("cart", JSON.stringify(this.state.cart));
  };

  getTotals = () => {
    let subTotal = 0;
    let cartItems = this.state.cart.length;
    this.state.cart.forEach((item) => {
      subTotal += parseFloat(item.price);
    });
    subTotal = parseFloat(subTotal.toFixed(2));
    let tax = subTotal * 0.1;
    tax = parseFloat(tax.toFixed(2));

    let total = subTotal;
    total = parseFloat(total.toFixed(2));
    return {
      cartItems,
      subTotal,
      tax,
      total,
    };
  };

  addTotals = () => {
    const totals = this.getTotals();
    this.setState(
      () => {
        return {
          cartItems: totals.cartItems,
          cartSubTotal: totals.subTotal,
          cartTax: totals.tax,
          cartTotal: totals.total,
        };
      },
      () => {}
    );
  };

  addToCart = (id) => {
    let tempCart = [...this.state.cart];
    let tempSites = [...this.state.siteData];
    let tempItem = tempCart.find((item) => item._id === id);
    if (!tempItem) {
      tempItem = tempSites.find((item) => item._id === id);

      let total = parseFloat(tempItem.price);
      let cartItem = { ...tempItem, count: 1, total };
      tempCart = [...tempCart, cartItem];
    } else {
      tempItem.count++;
      tempItem.total = tempItem.price * tempItem.count;
      tempItem.total = parseFloat(tempItem.total.toFixed(2));
    }

    this.setState(
      () => {
        return {
          cart: tempCart,
        };
      },
      () => {
        this.addTotals();
        this.syncStorage();
      }
    );
  };

  removeItem = (id) => {
    let tempCart = [...this.state.cart];
    tempCart = tempCart.filter((item) => {
      return item._id !== id;
    });

    this.setState(
      () => {
        return {
          cart: [...tempCart],
        };
      },
      () => {
        this.addTotals();
        this.syncStorage();
      }
    );
  };

  clearCart = () => {
    this.setState(
      {
        cart: [],
      },
      () => {
        this.addTotals();
        this.syncStorage();
      }
    );
  };

  // handle change
  handleChange = (event) => {
    const name = event.target.name;

    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    this.setState(
      {
        [name]: value,
      },
      this.sortData
    );
  };
  sortData = () => {
    const { categories, search } = this.state;
    let tempCategories = [...categories];

    if (search.length > 0) {
      tempCategories = tempCategories.filter((item) => {
        let tempSearch = search.toLowerCase();
        let tempTitle = item.name.toLowerCase().slice(0, search.length);

        if (tempSearch === tempTitle) {
          return item;
        }
        return null;
      });
    } else {
      tempCategories = [...categories];
    }
    this.setState({
      sortedCategories: tempCategories,
    });
  };

  // handle site change
  handleSiteChange = (event) => {
    const name = event.target.name;

    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    this.setState(
      {
        [name]: value,
      },

      this.sortSiteData
    );
  };

  sortSiteData = () => {
    const { siteData, search } = this.state;
    let tempSites = [...siteData];

    if (search.length > 0) {
      tempSites = tempSites.filter((item) => {
        let tempSearch = search.toLowerCase();
        let tempTitle = item.name.toLowerCase().slice(0, search.length);
        if (tempSearch === tempTitle) {
          return item;
        }
        return null;
      });
    }
    this.setState({
      sortedSites: tempSites,
    });
  };

  // handle mysites change
  handleMySiteChange = (event) => {
    const name = event.target.name;

    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    this.setState(
      {
        [name]: value,
      },

      this.sortMySiteData
    );
  };

  sortMySiteData = () => {
    const { mySiteData, search } = this.state;
    let tempMySites = [...mySiteData];

    if (search.length > 0) {
      tempMySites = tempMySites.filter((item) => {
        let tempSearch = search.toLowerCase();
        let tempTitle = item.url.toLowerCase().slice(0, search.length);
        if (tempSearch === tempTitle) {
          return item;
        }
        return null;
      });
    }
    this.setState({
      sortedMySites: tempMySites,
    });
  };

  handlePaidMySiteChange = (event) => {
    const name = event.target.name;

    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    this.setState(
      {
        [name]: value,
      },

      this.sortPaidMySiteData
    );
  };

  sortPaidMySiteData = () => {
    const { paidMySites, search } = this.state;
    let tempMySites = [...paidMySites];

    if (search.length > 0) {
      tempMySites = tempMySites.filter((item) => {
        let tempSearch = search.toLowerCase();
        let tempTitle = item.url.toLowerCase().slice(0, search.length);
        if (tempSearch === tempTitle) {
          return item;
        }
        return null;
      });
    }
    this.setState({
      sortedPaidMySites: tempMySites,
    });
  };

  handleNotPaidMySiteChange = (event) => {
    const name = event.target.name;

    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    this.setState(
      {
        [name]: value,
      },

      this.sortNotPaidMySiteData
    );
  };

  sortNotPaidMySiteData = () => {
    const { cart, search } = this.state;
    let tempMySites = [...cart];

    if (search.length > 0) {
      tempMySites = tempMySites.filter((item) => {
        let tempSearch = search.toLowerCase();
        let tempTitle = item.url.toLowerCase().slice(0, search.length);
        if (tempSearch === tempTitle) {
          return item;
        }
        return null;
      });
    }
    this.setState({
      sortedCart: tempMySites,
    });
  };

  async ticketsList() {
    if (auth.getCurrentUser()) {
      const { data: ticketsList } = await getTickets();
      this.setState({ tickets: ticketsList.tickets, loading: false });
      const tempTickets = _.orderBy(this.state.tickets, ["time"], ["desc"]);
      this.setState({ tickets: tempTickets });
    }
  }

  handleInquiries = async (ticket) => {
    try {
      const { data: inquiries } = await viewInquiries(ticket);
      this.setState({ singleTicket: ticket });
      this.setState({ inquiry: inquiries.ticket, loading: false });
      var userReplies = this.state.inquiry.userReplies.map((reply) => {
        return {
          userReply: reply.replyId.userReply,
          time: reply.replyId.time,
        };
      });

      this.setState({ cusMsg: userReplies });
      var CustMsg = _.orderBy(this.state.cusMsg, ["time"], ["asc"]);
      var AdminMsg = _.orderBy(
        this.state.inquiry.adminReplies,
        ["time"],
        ["asc"]
      );
      this.setState({ sortCusMsg: CustMsg });
      this.setState({ sortAdminMsg: AdminMsg });
      const cus = this.state.sortCusMsg;
      const admin = this.state.sortAdminMsg;

      const concatArr = [...cus, ...admin];
      console.log("concatArr", concatArr);
      var sortaMsg = _.orderBy(concatArr, ["replyId.time", "time"], ["asc"]);
      this.setState({ sortAllMsg: sortaMsg });
      this.setOpen(this.state.openTicket);
      // var UserMsg = _.orderBy(
      //   this.state.inquiry.userReplies,
      //   ["time"],
      //   ["asc"]
      // );
      // var AdminMsg = _.orderBy(
      //   this.state.inquiry.adminReplies,
      //   ["time"],
      //   ["asc"]
      // );
      // this.setState({ sortUserMsg: UserMsg });
      // this.setState({ sortAdminMsg: AdminMsg });
      // const user = this.state.sortUserMsg;
      // const admin = this.state.sortAdminMsg;

      // const concatArr = [...user, ...admin];
      // console.log("concatArr", concatArr);
      // var sortaMsg = _.orderBy(concatArr, ["replyId.time", "time"], ["asc"]);
      // this.setState({ sortAllMsg: sortaMsg });
    } catch (ex) {}
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          filterSites: this.filterSites,
          setSingleSite: this.setSingleSite,
          addToCart: this.addToCart,
          removeItem: this.removeItem,
          clearCart: this.clearCart,
          setSingleSiteSettings: this.setSingleSiteSettings,
          setSingleSiteSettingsCreate: this.setSingleSiteSettingsCreate,
          handleChange: this.handleChange,
          filterSitesAll: this.filterSitesAll,
          handleSiteChange: this.handleSiteChange,
          handleMySiteChange: this.handleMySiteChange,
          handlePaidMySiteChange: this.handlePaidMySiteChange,
          handleNotPaidMySiteChange: this.handleNotPaidMySiteChange,
          handleCreateWebsite: this.handleCreateWebsite,
          handleInquiries: this.handleInquiries,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer, ProductContext };
