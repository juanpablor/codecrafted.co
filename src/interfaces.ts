export interface Menu {
  home: string;
  services: string;
  plans: string;
  contact: string;
}

export interface WebItem {
  title: string;
  copy?: string;
  link?: string;
  image?: string; 
}

export interface WebDevelopment {
  subtitle: string;
  items: WebItem[];
}

export interface itemPlan {
  title: string;
  subtitle: string;
  items: { title: string }[];
  price: string; 
}

export interface ServicesPage {
  title: string;
  web: WebDevelopment;
  design: WebDevelopment;
}

export interface HomePage {
  title: string;
  copy_1: string;
  items: WebItem[];
  portfolio: WebItem[];
}

export interface PlansPage {
  title?: string;
  short: itemPlan;
  medium: itemPlan;
  large: itemPlan;
}

export interface ContactPage {
  title: string;
  copy_1: string;
}

export interface Company {
  whatsapp: string;
  companyName: string;
  address: string;
  city: string;
  province: string;
  country: string;
  phone: string;
  email: string;
  instagram: string;
  facebook: string;
  menu: string[];
  homePage: HomePage;
  servicesPage: ServicesPage;
  plansPage: PlansPage;
  contactPage: ContactPage;
}

export interface LayoutProps {
  children: React.ReactNode;
  data?: Company;
  bgImage?: string;
}
