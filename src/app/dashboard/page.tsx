
"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import {
  getAnalyticsOverview,
  type AnalyticsOverview,
} from "@/services/analytics.service";
import { ApiError } from "@/lib/api";
import {
  LayoutDashboard,
  ShoppingCart,
  ClipboardList,
  Table2,
  ChefHat,
  Wine,
  Utensils,
  Boxes,
  CreditCard,
  Users,
  UserRoundCog,
  ChartNoAxesCombined,
  Star,
  Settings,
  Headset,
} from "lucide-react";

const navigation = [
  {
    heading: "WORKSPACE",
    items: [
      { label: "Overview", href: "/dashboard", icon: LayoutDashboard, active: true },
      { label: "Point of sale", href: "/pos", icon: ShoppingCart },
      { label: "Orders", href: "/orders", icon: ClipboardList },
      { label: "Tables", href: "/tables", icon: Table2 },
    ],
  },
  {
    heading: "OPERATIONS",
    items: [
      { label: "Kitchen display", href: "/kitchen", icon: ChefHat },
      { label: "Bar orders", href: "/bar", icon: Wine },
      { label: "Menu management", href: "/menu", icon: Utensils },
      { label: "Inventory", href: "/inventory", icon: Boxes },
      { label: "Payments", href: "/payments", icon: CreditCard },
    ],
  },
  {
    heading: "MANAGEMENT",
    items: [
      { label: "Customers", href: "/customers", icon: Users },
      { label: "Employees", href: "/employees", icon: UserRoundCog },
      { label: "Analytics", href: "/analytics", icon: ChartNoAxesCombined },
      { label: "Ratings", href: "/ratings", icon: Star },
      { label: "Settings", href: "/settings", icon: Settings },
    ],
  },
];

function formatKES(value: number): string {
  return new Intl.NumberFormat("en-KE", {
    style: "currency",
    currency: "KES",
    maximumFractionDigits: 2,
  }).format(value);
}

function formatNumber(value: number): string {
  return new Intl.NumberFormat("en-KE").format(value);
}

function formatPeriod(period: AnalyticsOverview["period"]): string {
  if (!period.from || !period.to) {
    return "Reporting period unavailable";
  }

  return `${period.from} — ${period.to}`;
}

function MetricCard({
  label,
  value,
  description,
}: {
  label: string;
  value: string;
  description: string;
}) {
  return (
    <article className="metricCard">
      <span className="metricLabel">{label}</span>
      <strong className="metricValue">{value}</strong>
      <span className="metricDescription">{description}</span>
    </article>
  );
}

function DashboardSkeleton() {
  return (
    <>
      {[1, 2, 3, 4].map((item) => (
        <div className="metricCard" key={item} aria-hidden="true">
          <div className="skeletonLabel" />
          <div className="skeletonValue" />
          <div className="skeletonDescription" />
        </div>
      ))}
    </>
  );
}

export default function DashboardPage() {
  const [overview, setOverview] = useState<AnalyticsOverview | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadOverview = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await getAnalyticsOverview();
      setOverview(data);
    } catch (err) {
      setOverview(null);

      if (err instanceof ApiError && err.status === 401) {
        setError("Your session has expired. Please sign in again.");
      } else if (err instanceof ApiError && err.status === 403) {
        setError("You do not have permission to view this dashboard.");
      } else {
        setError(
          err instanceof Error
            ? err.message
            : "Unable to load dashboard information."
        );
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadOverview();
  }, [loadOverview]);

  return (
    <main className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <Link href="/dashboard" className="brand" aria-label="LOBII dashboard">
          <img
            src="/images/lobii-logo.png"
            alt="LOBII"
            className="brandLogo"
          />
          <span className="brandName">LOBII</span>
        </Link>

        <div className="workspaceLabel">RESTAURANT WORKSPACE</div>

       <nav className="navigation" aria-label="Main navigation">
  {navigation.map((group) => (
    <div className="navGroup" key={group.heading}>
      <span className="navHeading">{group.heading}</span>

      {group.items.map((item) => {
        const Icon = item.icon;

        return (
          <Link
            key={item.label}
            href={item.href}
            className={`navLink ${
              item.active ? "navLinkActive" : ""
            }`}
            aria-current={item.active ? "page" : undefined}
          >
            <Icon size={18} strokeWidth={1.8} aria-hidden="true" />
            <span>{item.label}</span>
          </Link>
        );
      })}
    </div>
  ))}
</nav>

<Link href="/support" className="supportLink">
  <Headset size={19} strokeWidth={1.8} />
  <span>Support</span>
</Link>

        <div className="sidebarFooter">
          <span className="footerBrand">LOBII</span>
          <span className="footerCaption">
            Restaurant operations platform
          </span>
        </div>
      </aside>

      {/* Main content */}
      <section className="mainContent">
        <header className="topbar">
          <div>
            <span className="breadcrumb">Workspace / Overview</span>
            <h1>Business overview</h1>
          </div>

          <div className="topbarActions">
            <span className="connectionLabel">
              Analytics overview
            </span>

            <button
              type="button"
              className="refreshButton"
              onClick={() => void loadOverview()}
              disabled={loading}
            >
              {loading ? "Refreshing..." : "Refresh"}
            </button>
          </div>
        </header>

        <div className="pageContent">
          {/* Welcome */}
          <section className="welcomeSection">
            <div>
              <span className="eyebrow">RESTAURANT OPERATIONS</span>
              <h2>Your business at a glance</h2>
              <p>
                Monitor your restaurant performance using information from
                your connected business records.
              </p>
            </div>
          </section>

          {/* Error */}
          {error && (
            <section className="errorPanel" role="alert">
              <div>
                <strong>Dashboard information unavailable</strong>
                <p>{error}</p>
              </div>

              <button
                type="button"
                onClick={() => void loadOverview()}
                disabled={loading}
              >
                Try again
              </button>
            </section>
          )}

          {/* Main metrics */}
          <section
            className="metricsGrid"
            aria-label="Business metrics"
            aria-busy={loading}
          >
            {loading ? (
              <DashboardSkeleton />
            ) : overview ? (
              <>
                <MetricCard
                  label="Net revenue"
                  value={formatKES(overview.revenue.netRevenue)}
                  description="Verified payments less completed refunds"
                />

                <MetricCard
                  label="Orders received"
                  value={formatNumber(overview.orders.total)}
                  description="Orders recorded in the reporting period"
                />

                <MetricCard
                  label="Average order value"
                  value={formatKES(overview.orders.averageOrderValue)}
                  description="Based on served orders"
                />

                <MetricCard
                  label="Outstanding balance"
                  value={formatKES(overview.outstanding.currentBalance)}
                  description="Current open and partially paid bills"
                />
              </>
            ) : !error ? (
              <div className="emptyPanel">
                <strong>No overview information available</strong>
                <p>
                  The analytics service did not return dashboard information.
                </p>
              </div>
            ) : null}
          </section>

          {/* Analytics sections */}
          {overview && !loading && (
            <>
              <section className="panel">
                <div className="panelHeader">
                  <div>
                    <span className="eyebrow">REPORTING PERIOD</span>
                    <h2>Revenue and order summary</h2>
                  </div>

                  <span className="periodLabel">
                    {formatPeriod(overview.period)}
                  </span>
                </div>

                <div className="summaryGrid">
                  <div className="summaryItem">
                    <span>Gross payments</span>
                    <strong>
                      {formatKES(overview.revenue.grossPayments)}
                    </strong>
                  </div>

                  <div className="summaryItem">
                    <span>Completed refunds</span>
                    <strong>
                      {formatKES(overview.revenue.completedRefunds)}
                    </strong>
                  </div>

                  <div className="summaryItem">
                    <span>Served orders</span>
                    <strong>{formatNumber(overview.orders.served)}</strong>
                  </div>

                  <div className="summaryItem">
                    <span>Non-cancelled orders</span>
                    <strong>
                      {formatNumber(overview.orders.nonCancelled)}
                    </strong>
                  </div>
                </div>
              </section>

              <section className="contentGrid">
                {/* Payment breakdown */}
                <article className="panel">
                  <div className="panelHeader">
                    <div>
                      <span className="eyebrow">TRANSACTIONS</span>
                      <h2>Payment breakdown</h2>
                    </div>
                  </div>

                  {overview.paymentBreakdown.length > 0 ? (
                    <div className="paymentList">
                      {overview.paymentBreakdown.map((payment) => (
                        <div
                          className="paymentRow"
                          key={payment.method}
                        >
                          <div>
                            <strong>{payment.method}</strong>
                            <span>
                              {formatNumber(payment.transactionCount)}{" "}
                              transactions
                            </span>
                          </div>

                          <strong>{formatKES(payment.amount)}</strong>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="emptyState">
                      No completed payment records for this period.
                    </div>
                  )}
                </article>

                {/* Outstanding balances */}
                <article className="panel">
                  <div className="panelHeader">
                    <div>
                      <span className="eyebrow">BILLING</span>
                      <h2>Outstanding balances</h2>
                    </div>
                  </div>

                  <div className="balanceBlock">
                    <span>Current outstanding balance</span>

                    <strong>
                      {formatKES(overview.outstanding.currentBalance)}
                    </strong>

                    <p>
                      Newly created outstanding balance in this reporting
                      period:{" "}
                      <b>
                        {formatKES(
                          overview.outstanding.periodCreatedBalance
                        )}
                      </b>
                    </p>
                  </div>
                </article>
              </section>
            </>
          )}

          {/* Operational workspace */}
          <section className="panel">
            <div className="panelHeader">
              <div>
                <span className="eyebrow">RESTAURANT OPERATIONS</span>
                <h2>Operational workspace</h2>
              </div>
            </div>

            <div className="unavailableGrid">
              <div className="unavailableItem">
                <strong>Recent orders</strong>
                <span>
                  Order information is not yet connected to this overview.
                </span>
              </div>

              <div className="unavailableItem">
                <strong>Table activity</strong>
                <span>
                  Table occupancy information is not yet connected to this
                  overview.
                </span>
              </div>

              <div className="unavailableItem">
                <strong>Kitchen and bar</strong>
                <span>
                  Preparation queue information is not yet connected to this
                  overview.
                </span>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="pageFooter">
            <span>LOBII</span>
            <span>Restaurant operations management</span>
          </footer>
        </div>
      </section>
    </main>
  );
}
