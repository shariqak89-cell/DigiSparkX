"use client";

import Image from "next/image";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { Lock, Mail } from "lucide-react";
import { company } from "@/data/content";

export function LoginForm() {
  const [error, setError] = useState("");

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    const form = new FormData(event.currentTarget);
    const result = await signIn("credentials", {
      email: form.get("email"),
      password: form.get("password"),
      redirect: false
    });
    if (result?.ok) window.location.href = "/dashboard";
    else setError("Login failed. Check email and password.");
  }

  return (
    <form onSubmit={submit} className="premium-card mx-auto max-w-md p-8">
      <Image src={company.logo} alt="DigiSparkX logo" width={92} height={92} className="mx-auto rounded-3xl" />
      <h1 className="mt-6 text-center text-3xl font-black">DigiSparkX Admin Login</h1>
      <p className="mt-2 text-center text-slate-600 dark:text-slate-300">Secure dashboard access for admin, editors and instructors.</p>
      <label className="mt-6 block">
        <span className="mb-2 block text-sm font-bold">Email</span>
        <div className="relative">
          <Mail className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input className="field pl-11" name="email" type="email" defaultValue={company.email} required />
        </div>
      </label>
      <label className="mt-4 block">
        <span className="mb-2 block text-sm font-bold">Password</span>
        <div className="relative">
          <Lock className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input className="field pl-11" name="password" type="password" required />
        </div>
      </label>
      <button className="btn btn-primary mt-6 w-full" type="submit">Login</button>
      <p className="mt-4 text-center text-sm text-slate-500">Forgot password and email verification are supported in the Auth.js architecture; connect SMTP to enable email flows.</p>
      {error && <p className="mt-4 rounded-2xl bg-red-500/15 p-4 text-sm font-bold text-red-700 dark:text-red-200">{error}</p>}
    </form>
  );
}
