
import { getAccessToken } from "./auth-session";

function getApiBaseUrl(): string {
  const url = process.env.NEXT_PUBLIC_API_URL;

  if (!url) {
    throw new Error("NEXT_PUBLIC_API_URL is not configured.");
  }

  return url.replace(/\/+$/, "");
}

const API_BASE_URL = getApiBaseUrl();

interface ApiErrorResponse {
  success?: boolean;
  message?: string;
}

export class ApiError extends Error {
  constructor(
    message: string,
    public readonly status: number
  ) {
    super(message);
    this.name = "ApiError";
  }
}

export async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const token = getAccessToken();

  const headers = new Headers(options.headers);

  if (options.body && !headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json");
  }

  if (token) {
    headers.set("Authorization", `Bearer ${token}`);
  }

  let response: Response;

  try {
    response = await fetch(
      `${API_BASE_URL}${endpoint}`,
      {
        ...options,
        headers,
        credentials: "include",
        cache: "no-store",
      }
    );
  } catch {
    throw new ApiError(
      "Unable to connect to the server. Please try again.",
      0
    );
  }

  const result: unknown = await response.json().catch(() => null);

  if (!response.ok) {
    const errorData = result as ApiErrorResponse | null;

    throw new ApiError(
      errorData?.message || "The request could not be completed.",
      response.status
    );
  }

  return result as T;
}
