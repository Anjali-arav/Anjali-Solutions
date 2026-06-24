export interface Service {
  id: string;
  iconName: string;
  title: string;
  description: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  category: 'Websites' | 'Applications' | 'Digital Solutions';
  technologies: string[];
  imageUrl: string;
  demoUrl?: string;
}

export interface HeroSlide {
  id: number;
  title: string;
  description: string;
  buttonText: string;
  actionType: 'get-started' | 'contact';
  imageUrl: string;
}

export interface AppointmentFormInput {
  fullName: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  message: string;
}

export interface ContactFormInput {
  name: string;
  email: string;
  phone: string;
  message: string;
}
