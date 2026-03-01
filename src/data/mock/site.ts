import type { NavItem, SiteContact } from "../../types/content";

export const primaryNav: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "Blog", to: "/blog" },
  { label: "Research", to: "/research" },
  { label: "Publication", to: "/publication" },
  { label: "Member", to: "/member" }
];

export const utilityNav: NavItem[] = [{ label: "Galaxy", to: "/galaxy", utility: true }];

export const siteContact: SiteContact = {
  phone: "+886-2-3366-5334",
  email: "chienyuchen@ntu.edu.tw",
  contactPerson: "陳倩瑜 Prof. Chen, Chien-Yu",
  addressLines: [
    "R304 Department of Biomechatronics",
    "(new building), National Taiwan University"
  ]
};

export const siteTagline = "We provide computational solutions for biological problems";
