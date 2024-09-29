export interface Menu {
  home: string;
  services: string;
  plans: string;
  contact: string;
}

export interface WebItem {
  title?: string;
  copy?: string;
}

export interface WebDevelopment {
  subtitle: string;
  items: WebItem[];
}

export interface ServicesPage {
  title: string;
  web: WebDevelopment;
  design: WebDevelopment;
}

export interface HomePage {
  title: string;
  copy_1: string;
}

export interface PlansPage {
  title: string;
  copy_1: string;
}

export interface ContactPage {
  title: string;
  copy_1: string;
}

export interface Company {
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
}
