
"use client";

import AuthLayout from "@/components/auth/AuthLayout";
import LoginForm from "@/components/auth/LoginForm";

export default function Home() {
  async function handleLogin(credentials: {
    restaurantSlug: string;
    email: string;
    password: string;
  }) {
    // Backend authentication will be connected in the next step.
    // Do not log or expose credentials.
    void credentials;
  }

  return (
    <AuthLayout
      title="Welcome back"
      description="Sign in to manage your restaurant operations."
    >
      <LoginForm onSubmit={handleLogin} />
    </AuthLayout>
  );
}
