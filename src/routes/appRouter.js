import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import auth from "../services/authService";
import ProtectedRoute from "./../components/common/protectedRoute";
// React Toastify CSS
import "react-toastify/dist/ReactToastify.css";
import AboutUs from "../components/pages/aboutus";
import AccountSettings from "../components/pages/accountSettings";
import CartCheckOut from "../components/pages/cartCheckOut";
import Categories from "../components/pages/categories";
import ContactUs from "../components/pages/contactus";
import DomainSettings from "../components/pages/domainSettings";
import Index from "../components/pages/home";
import Login from "../components/pages/login";
import MyAccount from "../components/pages/myAccount";
import MyPayments from "../components/pages/myPayments";
import MySites from "../components/pages/mySites";
import PaymentSettings from "../components/pages/paymentSettings";
import Pricing from "../components/pages/pricing";
import Site from "../components/pages/site";
import SiteSettings from "../components/pages/siteSettings";
import Themes from "../components/pages/themes";
import Error404 from "../components/pages/error404";
import Logout from "../components/logout/logout";
import SingleSiteInfo from "./../components/pages/singleSiteInfo";
import MainHeader from "../components/navigationBar/mainHeader";
import ForgotPassword from "../components/pages/forgotPassword";
import LandingPage from "../components/pages/landingPage";
import Payment from "../components/pages/payment";
import ReturnPage from "../components/pages/returnPage";
import SocialLinksFooter from "./../components/navigationBar/socialLinksFooter";
import BreadcrumbPage from "./../components/common/breadcrumbPage";
import AllThemes from "./../components/pages/allThemes";
import ResendEmail from "../components/pages/resendEmail";
import BillingHistory from "../components/pages/billingHistory";
import DomainList from "../components/pages/domainList";
import SiteSettingsCreate from "../components/pages/siteSettingsCreate";
import AddDomain from "./../components/pages/addDomain";
import SinglePaymentHistory from "./../components/pages/singlePaymentHistory";
import UserInquiries from "../components/pages/userInquiries";
import Tickets from "./../components/Inquiries/tickets";
import AddPaymentDetails from "./../components/pages/addPaymentDetails";
import TermsOfService from "./../components/pages/termsOfService";

export default class AppRouter extends Component {
  // To Get Current User Details
  state = {};
  componentDidMount = () => {
    try {
      const currentUser = auth.getCurrentUser();
      const firstName = auth.getCurrentUserFirstName();
      const lastName = auth.getCurrentUserLastName();
      const userId = auth.getUserId();

      this.setState({ currentUser, firstName, lastName, userId });
    } catch (ex) {}
  };

  render() {
    const { currentUser, lastName, firstName, userId } = this.state;

    return (
      <React.Fragment>
        <ToastContainer />
        <MainHeader
          currentUser={currentUser}
          firstName={firstName}
          lastName={lastName}
        />
        <BreadcrumbPage />
        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/contactus" component={ContactUs} />
          <Route path="/termsOfService" component={TermsOfService} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/categories" component={Categories} />
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
          <Route path="/forgotPassword" component={ForgotPassword} />
          <Route path="/resendEmail" component={ResendEmail} />
          <Route path="/allThemes" component={AllThemes} />
          <ProtectedRoute path="/billingHistory" component={BillingHistory} />
          <ProtectedRoute path="/domainList" component={DomainList} />
          <ProtectedRoute
            path="/payment/:id"
            render={(props) => <Payment value={userId} {...props} />}
          />
          <ProtectedRoute path="/returnPage" component={ReturnPage} />
          <ProtectedRoute path="/landingPage" component={LandingPage} />
          <ProtectedRoute path="/accountSettings" component={AccountSettings} />
          <ProtectedRoute exact path="/cartCheckOut" component={CartCheckOut} />
          <ProtectedRoute path="/domainSettings" component={DomainSettings} />
          <ProtectedRoute path="/myAccount" component={MyAccount} />
          <ProtectedRoute path="/myPayments" component={MyPayments} />
          <ProtectedRoute path="/mySites" component={MySites} />
          <ProtectedRoute path="/paymentSettings" component={PaymentSettings} />
          <ProtectedRoute
            path="/addPaymentDetails"
            component={AddPaymentDetails}
          />
          <ProtectedRoute path="/site" component={Site} />
          <ProtectedRoute path="/siteSettings/:id" component={SiteSettings} />
          <ProtectedRoute
            exact
            path="/siteCreateSettings/:id/:subdomain"
            component={SiteSettingsCreate}
          />
          <ProtectedRoute path="/themes/:id" component={Themes} />
          <ProtectedRoute path="/inquiries " component={Tickets} />
          <ProtectedRoute path="/userInquiries/:id" component={UserInquiries} />
          <ProtectedRoute
            path="/singlePaymentHistory/:id"
            component={SinglePaymentHistory}
          />
          <ProtectedRoute path="/themes/:id" component={Themes} />
          <ProtectedRoute path="/siteInfo/:id" component={SingleSiteInfo} />
          <ProtectedRoute exact path="/addDomain/:id" component={AddDomain} />
          <Route component={Error404}></Route>
        </Switch>
        <SocialLinksFooter />
      </React.Fragment>
    );
  }
}
