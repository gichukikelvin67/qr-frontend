import { apiRequest } from "@/lib/api";
import { setAccessToken } from "@/lib/auth-session";
import type {
  LoginCredentials,
  LoginResponse,
} from "@/types/auth";

export async function login(
  credentials: LoginCredentials
): Promise<LoginResponse["data"]> {
  const response = await apiRequest<LoginResponse>(
    "/api/auth/login",
    {
      method: "POST",
      body: JSON.stringify(credentials),
    }
  );

  if (!response.success || !response.data?.accessToken) {
    throw new Error("Login failed. Please check your details and try again.");
  }

  setAccessToken(response.data.accessToken);

  return response.data;
}