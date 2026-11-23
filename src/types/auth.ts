export interface LoginCredentials {
  restaurantSlug: string;
  email: string;
  password: string;
}

export interface AuthUser {
  id: string;
  name: string;
  email: string;
}

export interface AuthRestaurant {
  id: string;
  name: string;
  slug: string;
}

export interface LoginResponse {
  success: boolean;
  message: string;
  data: {
    user: AuthUser;
    restaurant: AuthRestaurant;
    role: string;
    accessToken: string;
  };
}