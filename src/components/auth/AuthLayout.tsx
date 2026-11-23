
import type { ReactNode } from "react";
import AuthBrand from "./AuthBrand";

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  description: string;
  footer?: ReactNode;
}

export default function AuthLayout({
  children,
  title,
  description,
  footer,
}: AuthLayoutProps) {
  return (
    <main className="auth-page">
      <section className="auth-hero">
        <div className="auth-hero__image" />

        <div className="auth-hero__content">
          <AuthBrand />

          <div className="auth-hero__message">
            <span className="auth-eyebrow">
              BUILT FOR HOSPITALITY
            </span>

            <h1>
              Better service.
              <br />
              Smarter business.
            </h1>

            <p>
              Everything your restaurant needs to manage
              orders, tables, payments and daily operations
              in one place.
            </p>
          </div>

          <div className="auth-hero__bottom">
            <span>Built for better hospitality.</span>
            <span>
              © LOBII QR System
            </span>
          </div>
        </div>
      </section>

      <section className="auth-panel">
        <div className="auth-panel__inner">
          <div className="auth-panel__brand">
            <AuthBrand light={false} />
          </div>

          <header className="auth-heading">
            <span className="auth-heading__eyebrow">
              
            </span>

            <h2>{title}</h2>

            <p>{description}</p>
          </header>

          <div className="auth-form-content">
            {children}
          </div>

          {footer && (
            <div className="auth-footer">
              {footer}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
