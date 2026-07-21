import { LoginForm } from "@/components/LoginForm";

export const metadata = { title: "Login" };

export default function LoginPage() {
  return (
    <section className="section">
      <div className="container">
        <LoginForm />
      </div>
    </section>
  );
}
