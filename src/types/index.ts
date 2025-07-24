export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  applications: string[];
  tonnage?: string;
  capacity?: string;
  energyRating: string;
  availableUpgrades: string[];
  specifications: Record<string, string>;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Industry {
  id: string;
  name: string;
  description: string;
  applications: string[];
}