"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

type Fields = {
  email: string;
  name: string;
  company: string;
  stack: string;
  notes: string;
};

export function ScheduleCallForm() {
  const [fields, setFields] = useState<Fields>({
    email: "",
    name: "",
    company: "",
    stack: "",
    notes: "",
  });
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "exists" | "error" | "disconnected"
  >("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");

    const notes = [
      fields.company && `Company: ${fields.company}`,
      fields.stack && `Stack: ${fields.stack}`,
      fields.notes && `Ask: ${fields.notes}`,
    ]
      .filter(Boolean)
      .join("\n");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: fields.email,
          name: fields.name,
          offers: ["agency-call"],
          notes,
        }),
      });
      const data = (await response.json()) as {
        ok?: boolean;
        error?: string;
        already?: boolean;
      };

      if (response.status === 503) {
        setStatus("disconnected");
        setMessage(
          data.error ??
            "The waitlist is not connected yet. Try again later — no row was saved.",
        );
        return;
      }

      if (!response.ok || !data.ok) {
        setStatus("error");
        setMessage(data.error ?? "Could not save the request. Try again.");
        return;
      }

      setStatus(data.already ? "exists" : "success");
      setMessage(
        data.already
          ? "We already have this email for a call. We'll reach out."
          : "Got it. We'll email to schedule a call.",
      );
    } catch {
      setStatus("error");
      setMessage("Network error. Nothing was saved — try again.");
    }
  }

  const done = status === "success" || status === "exists";

  return (
    <form onSubmit={onSubmit} className="space-y-5 text-left">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="call-email">Email</Label>
          <Input
            id="call-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@company.com"
            value={fields.email}
            onChange={(event) =>
              setFields((current) => ({ ...current, email: event.target.value }))
            }
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="call-name">Name</Label>
          <Input
            id="call-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your name"
            value={fields.name}
            onChange={(event) =>
              setFields((current) => ({ ...current, name: event.target.value }))
            }
          />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="call-company">
            Company <span className="font-normal text-fog">(optional)</span>
          </Label>
          <Input
            id="call-company"
            name="company"
            type="text"
            autoComplete="organization"
            placeholder="Team or company"
            value={fields.company}
            onChange={(event) =>
              setFields((current) => ({
                ...current,
                company: event.target.value,
              }))
            }
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="call-stack">
            Stack <span className="font-normal text-fog">(optional)</span>
          </Label>
          <Input
            id="call-stack"
            name="stack"
            type="text"
            placeholder="Zendesk, Salesforce, Linear…"
            value={fields.stack}
            onChange={(event) =>
              setFields((current) => ({ ...current, stack: event.target.value }))
            }
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="call-notes">
          What should the Bot finish?{" "}
          <span className="font-normal text-fog">(optional)</span>
        </Label>
        <textarea
          id="call-notes"
          name="notes"
          rows={4}
          placeholder="The queue, the tool, the Friday outcome."
          value={fields.notes}
          onChange={(event) =>
            setFields((current) => ({ ...current, notes: event.target.value }))
          }
          className="flex w-full rounded-[1.5rem] border border-dove bg-white px-5 py-3 text-[15px] text-jet placeholder:text-fog transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-jet/15"
        />
      </div>
      <Button
        type="submit"
        size="lg"
        disabled={status === "submitting" || done}
        className="w-full sm:w-auto"
      >
        {status === "submitting" ? "Saving…" : done ? "Saved" : "Schedule a call"}
      </Button>
      {message ? (
        <p
          role="status"
          className={cn(
            "text-sm leading-6",
            status === "disconnected" || status === "error"
              ? "text-[#b42318]"
              : "text-fog",
          )}
        >
          {message}
        </p>
      ) : (
        <p className="text-sm leading-6 text-fog">
          No checkout. We email to pick a time.
        </p>
      )}
    </form>
  );
}
