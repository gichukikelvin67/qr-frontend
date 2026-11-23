
import Image from "next/image";

interface AuthBrandProps {
  light?: boolean;
}

export default function AuthBrand({ light = true }: AuthBrandProps) {
  return (
    <a
      href="/login"
      className={`auth-brand ${light ? "auth-brand--light" : ""}`}
      aria-label="LOBII home"
    >
      <Image
        src="/images/lobii-logo.png"
        alt="LOBII QR System — Restaurant Management System"
        width={420}
        height={140}
        priority
        className="auth-brand__logo"
      />
    </a>
  );
}
