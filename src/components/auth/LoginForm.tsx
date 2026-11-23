
"use client";

import { useState, type FormEvent } from "react";


interface LoginFormProps {
  onSubmit: (credentials: {
    restaurantSlug: string;
    email: string;
    password: string;
  }) => Promise<void>;
  isSubmitting?: boolean;
  errorMessage?: string;
}

export default function LoginForm({
  onSubmit,
  isSubmitting = false,
  errorMessage,
}: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [restaurantSlug, setRestaurantSlug] = useState("");
  const [validationError, setValidationError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
  setValidationError("");

  const normalizedSlug = restaurantSlug.trim().toLowerCase();
  const normalizedEmail = email.trim().toLowerCase();

  if (!normalizedSlug || !normalizedEmail || !password) {
    setValidationError(
      "Enter your restaurant slug, email address and password."
    );
    return;
  }

  try {
    await onSubmit({
      restaurantSlug: normalizedSlug,
      email: normalizedEmail,
      password,
    });
  } catch {
    // The parent handles authentication errors.
    // Never log credentials or expose technical details here.
  }
}
  
  return (
    <form
      className="auth-form"
      onSubmit={handleSubmit}
      noValidate
    >
        <div className="auth-field">
  <label htmlFor="restaurant-slug">Restaurant ID / Slug</label>
  <input
    id="restaurant-slug"
    name="restaurantSlug"
    type="text"
    value={restaurantSlug}
    onChange={(event) => setRestaurantSlug(event.target.value)}
    placeholder="Enter your restaurant ID"
    autoComplete="organization"
    maxLength={100}
    required
    disabled={isSubmitting}
    aria-invalid={Boolean(validationError)}
  />
</div>

      <div className="auth-field">
        <label htmlFor="login-email">Email address</label>
        <input
          id="login-email"
          name="email"
          type="email"
          value={email}
          onChange={(event) => {
  setEmail(event.target.value);
  setValidationError("");
}}
          placeholder="Enter your work email"
          autoComplete="username"
          maxLength={254}
          required
          disabled={isSubmitting}
          aria-invalid={Boolean(validationError)}
        />
      </div>

      <div className="auth-field">
        <div className="auth-field__header">
          <label htmlFor="login-password">Password</label>
          <a href="/forgot-password" className="auth-forgot-link">
            Forgot password?
          </a>
        </div>

        <div className="auth-password-wrapper">
          <input
            id="login-password"
            name="password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(event) => {
  setPassword(event.target.value);
  setValidationError("");
}}
            placeholder="Enter your password"
            autoComplete="current-password"
            required
            disabled={isSubmitting}
            aria-invalid={Boolean(validationError)}
          />

          <button
            type="button"
            className="auth-password-toggle"
            onClick={() => setShowPassword((current) => !current)}
            aria-label={showPassword ? "Hide password" : "Show password"}
            aria-pressed={showPassword}
            disabled={isSubmitting}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
      </div>

      {validationError && (
        <p className="auth-error" role="alert">
          {validationError}
        </p>
      )}

      {errorMessage && (
        <p className="auth-error" role="alert">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        className="auth-submit-button"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Signing in..." : "Sign in"}
      </button>
    </form>
  );
}
