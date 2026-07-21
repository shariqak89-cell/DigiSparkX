"use client";

import { useState } from "react";
import { Star } from "lucide-react";

export function ReviewForm() {
  const [rating, setRating] = useState(5);
  const [sent, setSent] = useState(false);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget));
    const response = await fetch("/api/ratings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, rating })
    });
    if (response.ok) {
      setSent(true);
      event.currentTarget.reset();
    }
  }

  return (
    <form onSubmit={submit} className="premium-card p-6">
      <h2 className="text-2xl font-black">Rate DigiSparkX</h2>
      <p className="mt-2 text-slate-600 dark:text-slate-300">Reviews are moderated by admin before publishing.</p>
      <div className="my-5 flex gap-2">
        {Array.from({ length: 5 }).map((_, index) => (
          <button key={index} type="button" onClick={() => setRating(index + 1)} className="text-orange-500" aria-label={`Rate ${index + 1} stars`}>
            <Star size={28} fill={index < rating ? "currentColor" : "none"} />
          </button>
        ))}
      </div>
      <div className="grid gap-3">
        <input className="field" name="name" required placeholder="Your name" />
        <textarea className="field min-h-32" name="review" required placeholder="Write your review" />
        <button className="btn btn-primary" type="submit">Submit Review</button>
        {sent && <p className="rounded-2xl bg-emerald-500/15 p-4 font-bold text-emerald-700 dark:text-emerald-200">Review submitted for approval.</p>}
      </div>
    </form>
  );
}
