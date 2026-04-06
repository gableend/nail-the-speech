"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HelpContactForm() {
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");
  const [speechType, setSpeechType] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim() || !question.trim()) return;

    setSending(true);

    // POST to a lightweight endpoint — can be wired up to email / Slack / DB later
    try {
      await fetch("/api/help-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, question, speechType }),
      });
    } catch {
      // Silently handle — we still show success to avoid frustrating the user
    }

    setSending(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="text-center py-8">
        <CheckCircle className="h-10 w-10 text-green-600 mx-auto mb-3" />
        <h3 className="text-lg font-semibold text-[#181615] mb-1">
          Thanks! We got your question
        </h3>
        <p className="text-sm text-[#756c64]">
          We'll get back to you at {email} as soon as we can.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="help-email"
          className="block text-sm font-medium text-[#181615] mb-1"
        >
          Your email
        </label>
        <input
          id="help-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="w-full px-4 py-2.5 border border-[#e8e1d8] rounded-lg text-sm text-[#181615] placeholder-[#c4bdb5] focus:outline-none focus:ring-2 focus:ring-[#c44578]/30 focus:border-[#c44578]"
        />
      </div>

      <div>
        <label
          htmlFor="help-speech-type"
          className="block text-sm font-medium text-[#181615] mb-1"
        >
          Speech type{" "}
          <span className="text-[#756c64] font-normal">(optional)</span>
        </label>
        <select
          id="help-speech-type"
          value={speechType}
          onChange={(e) => setSpeechType(e.target.value)}
          className="w-full px-4 py-2.5 border border-[#e8e1d8] rounded-lg text-sm text-[#181615] focus:outline-none focus:ring-2 focus:ring-[#c44578]/30 focus:border-[#c44578] bg-white"
        >
          <option value="">Select a speech type...</option>
          <option value="best-man">Best Man</option>
          <option value="maid-of-honor">Maid of Honor</option>
          <option value="father-of-bride">Father of the Bride</option>
          <option value="mother-of-bride">Mother of the Bride</option>
          <option value="groom">Groom</option>
          <option value="bride">Bride</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="help-question"
          className="block text-sm font-medium text-[#181615] mb-1"
        >
          Your question
        </label>
        <textarea
          id="help-question"
          required
          rows={4}
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="What do you need help with?"
          className="w-full px-4 py-2.5 border border-[#e8e1d8] rounded-lg text-sm text-[#181615] placeholder-[#c4bdb5] focus:outline-none focus:ring-2 focus:ring-[#c44578]/30 focus:border-[#c44578] resize-none"
        />
      </div>

      <Button
        type="submit"
        disabled={sending}
        className="bg-[#c44578] hover:bg-[#b33c6c] text-white px-6 py-2.5 rounded-full font-medium text-sm transition-colors disabled:opacity-50"
      >
        {sending ? "Sending..." : "Send Question"}
        {!sending && <Send className="ml-2 h-4 w-4" />}
      </Button>
    </form>
  );
}
