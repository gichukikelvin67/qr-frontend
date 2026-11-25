
"use client";

import { FormEvent, useState } from "react";
import "./register.css";

import {
  QrCode,
  Monitor,
  ChartNoAxesCombined,
} from "lucide-react";

function FieldIcon({ type }: { type: string }) {
  const common = {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  switch (type) {
    case "user":
      return (
        <svg {...common}>
          <circle cx="12" cy="8" r="4" />
          <path d="M5 21v-2a7 7 0 0 1 14 0v2" />
        </svg>
      );

    case "restaurant":
      return (
        <svg {...common}>
          <path d="M3 10h18" />
          <path d="M5 10V5h14v5" />
          <path d="M4 10v11h16V10" />
          <path d="M8 14h3v3H8z" />
          <path d="M15 14h2" />
        </svg>
      );

    case "email":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      );

    case "phone":
      return (
        <svg {...common}>
          <path d="M7 3H5a2 2 0 0 0-2 2c0 9 7 16 16 16a2 2 0 0 0 2-2v-2l-5-2-2 3a14 14 0 0 1-6-6l3-2-2-5z" />
        </svg>
      );

    case "lock":
      return (
        <svg {...common}>
          <rect x="4" y="10" width="16" height="11" rx="2" />
          <path d="M8 10V7a4 4 0 0 1 8 0v3" />
          <path d="M12 14v3" />
        </svg>
      );

    default:
      return null;
  }
}

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const password = String(formData.get("password"));
    const confirmPassword = String(formData.get("confirmPassword"));

    if (password !== confirmPassword) {
      setMessage("Your passwords do not match.");
      return;
    }

    if (password.length < 8) {
      setMessage("Your password must contain at least 8 characters.");
      return;
    }

    setMessage(
      "Your registration form is ready. Connect your registration API to create your account."
    );
  }

  return (
    <main className="register-page">
      {/* Left photographic panel */}
      <section className="register-visual">
        <div className="register-visual-overlay" />

        <div className="register-brand">
          <a href="/" className="register-logo" aria-label="LOBII home">
           <img
    src="/images/lobii-logo.png"
    alt="LOBII Restaurant Management System"
    className="register-logo-image"
  />
          </a>

          <p className="register-brand-caption">
            Restaurant Management Platform
          </p>
        </div>

        <div className="register-visual-content">
          

          <h1>
            A better way to
            <br />
            run your <span>restaurant.</span>
          </h1>

          <p className="register-intro">
            Bring ordering, tables, kitchen, inventory and payments together
            in one connected platform.
          </p>

          <div className="register-benefits">
            <div className="register-benefit">
              <span className="benefit-sysmbol">
                <QrCode size={23} strokeWidth={1.7}/>
                </span>
                 <span>QR Ordering</span>
            </div>

            <div className="register-benefit">
              <span className="benefit-symbol">
                <Monitor size={23}strokeWidth={1.7}/>
              </span>
              <span>Restaurant POS</span>
            </div>

            <div className="register-benefit">
              <span className="benefit-symbol">
                <ChartNoAxesCombined size={23}strokeWidth={1.7}/>

              </span>
              <span>Sales &amp; Analytics</span>
            </div>
          </div>
        </div>

        <div className="register-visual-footer">
         
        </div>
      </section>

      {/* Right registration panel */}
      <section className="register-form-panel">
        <div className="register-decoration register-decoration-top" />
        <div className="register-decoration register-decoration-bottom" />

        <div className="register-form-wrapper">
          <div className="register-heading">
            <div className="register-eyebrow">
              <span>GET STARTED WITH LOBII</span>
              
            </div>

            <h2>Create your restaurant account</h2>

            <p>
              Set up your restaurant workspace and start managing your
              operations in minutes.
            </p>
          </div>

          <form className="register-form" onSubmit={handleSubmit}>
            <div className="register-field-grid">
              <div className="register-field">
                <label htmlFor="fullName">
                  Full name <span>*</span>
                </label>

                <div className="register-input-wrap">
                  <FieldIcon type="user" />
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="Enter your full name"
                    autoComplete="name"
                    required
                  />
                </div>
              </div>

              <div className="register-field">
                <label htmlFor="restaurantName">
                  Restaurant name <span>*</span>
                </label>

                <div className="register-input-wrap">
                  <FieldIcon type="restaurant" />
                  <input
                    id="restaurantName"
                    name="restaurantName"
                    type="text"
                    placeholder="Enter restaurant name"
                    autoComplete="organization"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="register-field">
              <label htmlFor="email">
                Work email <span>*</span>
              </label>

              <div className="register-input-wrap">
                <FieldIcon type="email" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  autoComplete="email"
                  required
                />
              </div>
            </div>

            <div className="register-field">
              <label htmlFor="phone">
                Phone number <span>*</span>
              </label>

              <div className="register-input-wrap">
                <FieldIcon type="phone" />
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="e.g. 07XXXXXXXX"
                  autoComplete="tel"
                  required
                />
              </div>
            </div>

            <div className="register-field-grid">
              <div className="register-field">
                <label htmlFor="password">
                  Password <span>*</span>
                </label>

                <div className="register-input-wrap">
                  <FieldIcon type="lock" />
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a strong password"
                    autoComplete="new-password"
                    minLength={8}
                    required
                  />

                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              <div className="register-field">
                <label htmlFor="confirmPassword">
                  Confirm password <span>*</span>
                </label>

                <div className="register-input-wrap">
                  <FieldIcon type="lock" />
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Re-enter your password"
                    autoComplete="new-password"
                    required
                  />

                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() =>
                      setShowConfirmPassword(!showConfirmPassword)
                    }
                    aria-label={
                      showConfirmPassword
                        ? "Hide confirm password"
                        : "Show confirm password"
                    }
                  >
                    {showConfirmPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>
            </div>

            <p className="register-password-note">
              Use at least 8 characters for your password.
            </p>

            {message && (
              <p className="register-message" role="status">
                {message}
              </p>
            )}


<label className="terms-agreement">
  <input
    type="checkbox"
    name="acceptedTerms"
    checked={termsAccepted}
    onChange={(event) => setTermsAccepted(event.target.checked)}
    required
  />

  <span>
    I have read and agree to the{" "}
    <a href="/terms" target="_blank" rel="noopener noreferrer">
      Terms &amp; Conditions
    </a>{" "}
    and{" "}
    <a href="/privacy">
      Privacy Policy
    </a>
    .
  </span>
</label>


            <button type="submit" className="register-submit">
              <span>Create restaurant account</span>
              <span className="register-submit-arrow"></span>
            </button>
          </form>

          <div className="register-signin">
            Already have an account? <a href="/login">Sign in</a>
          </div>

          <p className="register-legal">
            By creating an account, you agree to our{" "}
            <a href="/terms">Terms of Service</a> and{" "}
            <a href="/privacy">Privacy Policy</a>.
          </p>
        </div>
      </section>
    </main>
  );
}
