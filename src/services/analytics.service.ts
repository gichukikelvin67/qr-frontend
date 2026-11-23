
import { apiRequest } from "@/lib/api";

export interface AnalyticsOverview {
  period: {
    from: string;
    to: string;
  };
  revenue: {
    grossPayments: number;
    completedRefunds: number;
    netRevenue: number;
  };
  orders: {
    total: number;
    nonCancelled: number;
    served: number;
    averageOrderValue: number;
  };
  outstanding: {
    currentBalance: number;
    periodCreatedBalance: number;
  };
  paymentBreakdown: Array<{
    method: string;
    transactionCount: number;
    amount: number;
  }>;
}

interface AnalyticsApiResponse {
  success: boolean;
  message: string;
  data: AnalyticsOverview;
}

export async function getAnalyticsOverview(filters?: {
  from?: string;
  to?: string;
}): Promise<AnalyticsOverview> {
  const params = new URLSearchParams();

  if (filters?.from) {
    params.set("from", filters.from);
  }

  if (filters?.to) {
    params.set("to", filters.to);
  }

  const query = params.toString();

  const response = await apiRequest<AnalyticsApiResponse>(
    `/analytics/overview${query ? `?${query}` : ""}`,
    {
      method: "GET",
    }
  );

  if (!response.success || !response.data) {
    throw new Error("Unable to load analytics overview.");
  }

  return response.data;
}
