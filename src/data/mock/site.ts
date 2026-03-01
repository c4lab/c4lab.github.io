import type { NavItem, SiteContact } from "../../types/content";

export const primaryNav: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "Research", to: "/research" },
  { label: "Publication", to: "/publication" },
  { label: "Member", to: "/member" },
  { label: "Blog", to: "/blog" }
];

export const utilityNav: NavItem[] = [{ label: "Galaxy", to: "/galaxy", utility: true }];

export const siteContact: SiteContact = {
  phone: "+886-2-3366-7118",
  email: "chienyuchen@ntu.edu.tw",
  contactPerson: "Prof. Chen, Chien-Yu",
  addressLines: [
    "R304 Department of Biomechatronics",
    "(new building), National Taiwan University"
  ]
};

export const siteTagline = "We provide computational solutions for biological problems";
