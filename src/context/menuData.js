/*  N. R Yamasinghe  IT18233704 version - 01 */
export const menuData = [
  {
    header: "Home",
    list: [{ name: "Home", link: "/landingPage" }],
  },
  {
    header: "My Account",
    list: [
      { name: "Profile", link: "/myAccount", icon: "dashboard" },
      {
        name: "Change Profile",
        link: "/accountSettings",
        icon: "building outline",
      },
      {
        name: "Change Password",
        link: "/accountSettings",
        icon: "volume control phone",
      },
    ],
  },
  {
    header: "Payments & Billing",
    list: [
      { name: "Payment Details", link: "/myPayments" },
      { name: "Change Payment Details", link: "/paymentSettings" },
      { name: "Billing History", link: "/billingHistory" },
      { name: "Domains", link: "/domainList" },
    ],
  },
  {
    header: "My Sites",
    list: [
      { name: "My Sites", link: "/mySites" },
      { name: "Change Domain", link: "/domainList" },
    ],
  },
  {
    header: "Categories",
    list: [
      { name: "Categories", link: "/categories" },
      { name: "All Categories", link: "/allThemes" },
    ],
  },

  {
    header: "Cart",
    list: [{ name: "Cart Checkout", link: "/cartCheckOut" }],
  },
  {
    header: "Inquiries",
    list: [
      { name: "Inquiries", link: "/inquiries" },
      { name: "Open Ticket", link: "/openNewTicket" },
      { name: "Terms of Service", link: "/termsOfService" },
      { name: "About", link: "/aboutus" },
    ],
  },
];
