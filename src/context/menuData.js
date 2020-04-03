export const menuData = [
  {
    header: "My Account",
    list: [
      { name: "Profile", link: "myAccount" },
      { name: "Change Profile", link: "accountSettings" },
      { name: "Change Password", link: "accountSettings" }
    ]
  },
  {
    header: "Payments & Billing",
    list: [
      { name: "Payment Details", link: "myPayments" },
      { name: "Change Payment Details", link: "paymentSettings" },
      { name: "Billing History", link: "billingHistory" },
      { name: "Domains", link: "domainList" }
    ]
  },
  {
    header: "My Sites",
    list: [
      { name: "My Sites", link: "mySites" },
      { name: "Change Domain", link: "domainSettings" }
    ]
  },
  {
    header: "Categories",
    list: [
      { name: "Categories", link: "categories" },
      { name: "All Categories", link: "allThemes" }
    ]
  },
  {
    header: "Cart",
    list: [{ name: "Cart Checkout", link: "cartCheckOut" }]
  }
];
