import { GrokMark } from "@/components/grok-mark";

const bots = [
  { name: "Workshop lead", note: "Prep the Zendesk queue", tone: "bg-[#ffd7bf]" },
  { name: "Course editor", note: "Draft module 3 notes", tone: "bg-[#dfe7ff]" },
  { name: "Inbox manager", note: "Action needed", tone: "bg-[#ffe8c7]", hot: true },
  { name: "Talent scout", note: "12 profiles ready", tone: "bg-[#d8f3e7]" },
];

export function HeroMock() {
  return (
    <div className="relative mx-auto w-full max-w-[58rem] overflow-hidden rounded-[2rem] bg-ivory">
      <div className="flex items-center gap-3 border-b border-dove/70 px-4 py-3 sm:px-5">
        <div className="flex items-center gap-1.5">
          <span className="size-2.5 rounded-full bg-[#ff5f57]" />
          <span className="size-2.5 rounded-full bg-[#febc2e]" />
          <span className="size-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="mx-auto flex h-8 w-full max-w-sm items-center justify-center rounded-full bg-white text-[12px] text-fog">
          bots.how · agency desk
        </div>
      </div>

      <div className="grid min-h-[22rem] grid-cols-1 sm:grid-cols-[13.5rem_1fr]">
        <aside className="hidden border-r border-dove/60 bg-[#f3f1ee] p-4 sm:block">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-fog">
            Bots
          </p>
          <ul className="mt-4 space-y-3">
            {bots.map((bot) => (
              <li key={bot.name} className="flex items-start gap-2.5">
                <span
                  className={`mt-0.5 flex size-7 items-center justify-center rounded-full ${bot.tone}`}
                >
                  <GrokMark className="size-4" />
                </span>
                <span>
                  <span className="block text-[13px] font-medium text-jet">
                    {bot.name}
                  </span>
                  <span
                    className={`block text-[12px] ${bot.hot ? "text-sunset" : "text-fog"}`}
                  >
                    {bot.note}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </aside>

        <div className="relative overflow-hidden bg-[linear-gradient(180deg,#f4d2b8_0%,#c9d7e8_55%,#f9f8f6_100%)] p-4 sm:p-8">
          <div className="absolute inset-x-8 top-8 hidden h-24 rounded-3xl bg-white/30 blur-2xl sm:block" />
          <div className="relative mx-auto max-w-md rounded-[1.5rem] bg-ivory p-5 shadow-[0_20px_60px_rgba(10,10,10,0.08)] sm:p-7">
            <div className="flex items-center justify-between gap-3">
              <p className="font-display text-[17px] text-jet">
                Sign into Salesforce
              </p>
              <span className="rounded-full bg-[#fff1e6] px-2.5 py-1 font-mono text-[11px] text-sunset">
                Working
              </span>
            </div>
            <p className="mt-3 text-sm leading-6 text-fog">
              The Bot needs your login once. It uses the app the way you do,
              then comes back with the queue cleared.
            </p>
            <div className="mt-6 rounded-2xl bg-white px-4 py-3 text-sm text-jet">
              Sign in to Salesforce so I can work the renewal list.
            </div>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
              <span className="inline-flex h-11 items-center justify-center rounded-full bg-jet px-5 text-sm text-white">
                I&apos;m done, continue
              </span>
              <span className="inline-flex items-center gap-2 text-sm text-fog">
                <span className="rounded-full bg-jet px-2 py-0.5 text-[11px] text-white">
                  You
                </span>
                watching
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
