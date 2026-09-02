const features = [
  {
    title: "Grok Bot works where you work",
    body: "We log Bots into the tools you already run — Zendesk, Salesforce, Linear, the awkward internal admin. No new stack for the sake of a demo.",
    mock: "computer",
  },
  {
    title: "Show a Bot how it's done",
    body: "Walk a workflow once. We save it as a routine. The next pass, the Bot runs it and pings you only when a decision is actually yours.",
    mock: "teach",
  },
  {
    title: "Bots get sharper after the handoff",
    body: "Context stays with the Bot. Corrections from week one show up in week two. You are not re-explaining the same account thread.",
    mock: "memory",
  },
  {
    title: "Connect the Bots",
    body: "Research hands off to outbound. Outbound hands off to ops. You watch the thread instead of approving every click.",
    mock: "connect",
  },
] as const;

export function FeatureGrid() {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {features.map((feature) => (
        <article
          key={feature.title}
          className="overflow-hidden rounded-[2rem] bg-ivory p-7 sm:p-8"
        >
          <h3 className="font-display text-[1.35rem] leading-tight tracking-tight text-jet">
            {feature.title}
          </h3>
          <p className="mt-3 max-w-md text-[15px] leading-7 text-fog">
            {feature.body}
          </p>
          <FeatureMock kind={feature.mock} />
        </article>
      ))}
    </div>
  );
}

function FeatureMock({ kind }: { kind: (typeof features)[number]["mock"] }) {
  if (kind === "computer") {
    return (
      <div className="mt-8 rounded-[1.25rem] bg-white p-4">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-jet">Computer</p>
          <span className="rounded-full bg-[#fff1e6] px-2.5 py-1 font-mono text-[11px] text-sunset">
            ★ Working
          </span>
        </div>
        <p className="mt-3 text-sm text-fog">
          Sign in to Zendesk so I can work the support queue.
        </p>
        <div className="mt-4 h-24 rounded-xl bg-[linear-gradient(135deg,#f3f1ee,#e4e9f2)]" />
      </div>
    );
  }

  if (kind === "teach") {
    return (
      <div className="mt-8 overflow-hidden rounded-[1.25rem] bg-[linear-gradient(160deg,#f6d3b4,#d5e4f6)] p-4">
        <div className="rounded-xl bg-white/90 p-4">
          <p className="text-sm font-medium text-jet">
            Weekly Reporting is watching and learning
          </p>
          <div className="mt-4 flex h-16 items-end gap-1.5">
            {[40, 70, 45, 90, 60, 80, 50].map((height, index) => (
              <span
                key={index}
                className="flex-1 rounded-t-md bg-jet/80"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
          <span className="mt-3 inline-flex rounded-full bg-jet px-2 py-0.5 text-[11px] text-white">
            You
          </span>
        </div>
      </div>
    );
  }

  if (kind === "memory") {
    return (
      <div className="mt-8 space-y-2 rounded-[1.25rem] bg-white p-4">
        <p className="rounded-2xl bg-ivory px-3 py-2 text-sm leading-6 text-jet">
          Acme replied on pricing, same thread as last quarter. I already had
          the context.
        </p>
        <p className="rounded-2xl bg-ivory px-3 py-2 text-sm leading-6 text-fog">
          Noted: they only sign annual. Dana approves.
        </p>
        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-fog">
          Updated memory · Account Manager
        </p>
      </div>
    );
  }

  return (
    <div className="mt-8 rounded-[1.25rem] bg-white p-4">
      <ul className="space-y-2 text-sm text-jet">
        <li className="flex items-center justify-between rounded-full bg-ivory px-3 py-2">
          Asking Research…
          <span className="font-mono text-[11px] text-sunset">live</span>
        </li>
        <li className="rounded-full bg-ivory px-3 py-2 text-fog">
          Outbound drafting in your voice
        </li>
        <li className="rounded-full bg-ivory px-3 py-2 text-fog">
          Ops waiting on the review list
        </li>
      </ul>
    </div>
  );
}
