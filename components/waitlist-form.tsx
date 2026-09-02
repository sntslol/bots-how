"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { offers, type OfferId } from "@/lib/site";
import { cn } from "@/lib/utils";

type WaitlistFormProps = {
  defaultOffers?: OfferId[];
  compact?: boolean;
};

type FieldState = {
  email: string;
  name: string;
  selected: OfferId[];
};

export function WaitlistForm({
  defaultOffers = ["workshop", "course", "agency"],
  compact = false,
}: WaitlistFormProps) {
  const initial = useMemo<FieldState>(
    () => ({
      email: "",
      name: "",
      selected: defaultOffers,
    }),
    [defaultOffers],
  );
  const [fields, setFields] = useState<FieldState>(initial);
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "exists" | "error" | "disconnected"
  >("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: fields.email,
          name: fields.name,
          offers: fields.selected,
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
        setMessage(data.error ?? "Could not save your spot. Try again.");
        return;
      }

      setStatus(data.already ? "exists" : "success");
      setMessage(
        data.already
          ? "You're already on the list for those offers. We'll email when a seat opens."
          : "You're on the list. We'll email when a seat or kickoff date opens.",
      );
    } catch {
      setStatus("error");
      setMessage("Network error. Nothing was saved — try again.");
    }
  }

  function toggleOffer(id: OfferId) {
    setFields((current) => {
      const has = current.selected.includes(id);
      const selected = has
        ? current.selected.filter((item) => item !== id)
        : [...current.selected, id];
      return { ...current, selected };
    });
  }

  const done = status === "success" || status === "exists";

  return (
    <form
      onSubmit={onSubmit}
      className={cn("text-left", compact ? "space-y-4" : "space-y-5")}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="waitlist-email">Email</Label>
          <Input
            id="waitlist-email"
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
          <Label htmlFor="waitlist-name">
            Name <span className="font-normal text-fog">(optional)</span>
          </Label>
          <Input
            id="waitlist-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="What should we call you?"
            value={fields.name}
            onChange={(event) =>
              setFields((current) => ({ ...current, name: event.target.value }))
            }
          />
        </div>
      </div>

      <fieldset className="space-y-3">
        <legend className="text-sm font-medium text-jet">
          Which offers?
        </legend>
        <div className="flex flex-wrap gap-2">
          {offers.map((offer) => {
            const checked = fields.selected.includes(offer.id);
            return (
              <button
                key={offer.id}
                type="button"
                aria-pressed={checked}
                onClick={() => toggleOffer(offer.id)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm transition-colors",
                  checked
                    ? "border-jet bg-jet text-white"
                    : "border-dove bg-white text-jet hover:bg-ivory",
                )}
              >
                {offer.label}
              </button>
            );
          })}
        </div>
      </fieldset>

      <Button
        type="submit"
        size="lg"
        disabled={
          status === "submitting" || fields.selected.length === 0 || done
        }
        className="w-full sm:w-auto"
      >
        {status === "submitting"
          ? "Saving…"
          : done
            ? "Saved"
            : "Join the waitlist"}
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
          We store email, optional name, and the offers you mark. No checkout.
          Read the{" "}
          <a href="/privacy" className="text-jet underline-offset-2 hover:underline">
            privacy note
          </a>
          .
        </p>
      )}
    </form>
  );
}
