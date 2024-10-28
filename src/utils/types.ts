export interface PostType {
  id: string;
  image: string;
  location: string;
  description: string;
  likes: number;
}

export interface User {
  name: string;
  location: string;
  current_location: string;
  instagram: string;
  facebook: string;
  tiktok: string;
  image: string;
}

export interface Contact {
  name: string;
  country: string;
  town: string;
  description: string;
  contact: string;
}
