"use client";

import { profile } from "../portfolio";

export type NavItem = {
  id: string;
  label: string;
  mobileLabel?: string;
};

type NavProps = {
  items: NavItem[];
  activeIndex: number;
  onNavigate: (index: number) => void;
};

export default function Nav({ items, activeIndex, onNavigate }: NavProps) {
  return (
    <nav
      aria-label="Portfolio sections"
      className="fixed inset-x-0 bottom-0 z-50 px-3 pb-[max(env(safe-area-inset-bottom),0.75rem)] sm:inset-x-auto sm:bottom-6 sm:left-1/2 sm:px-0 sm:pb-0 sm:-translate-x-1/2"
    >
      <div className="relative overflow-hidden rounded-2xl border border-white/60 bg-white/70 shadow-[0_8px_32px_0_rgba(14,165,233,0.16),inset_0_1px_1px_0_rgba(255,255,255,0.9)] backdrop-blur-2xl sm:bg-white/40">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/90 to-transparent"></div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-white/10 to-transparent"></div>

        <div aria-hidden="true" className="relative flex items-center justify-between px-4 pt-3 text-[11px] text-slate-500 sm:hidden">
          <span>← Swipe between sections →</span>
          <span className="font-semibold text-sky-700">{activeIndex + 1} / {items.length}</span>
        </div>
        <div className="relative flex items-center gap-2 p-2 sm:gap-3 sm:px-4 sm:py-2.5">
          <div className="hidden items-center gap-2.5 border-r border-white/40 pr-3 lg:flex">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full border border-white bg-emerald-500"></span>
            </span>
            <span className="text-sm font-bold tracking-tight text-slate-800">
              {profile.name}<span className="text-sky-500">.dev</span>
            </span>
          </div>

          <div className="flex flex-1 items-stretch justify-around gap-1 sm:flex-none sm:justify-end sm:gap-1.5">
            {items.map((item, i) => {
              const active = i === activeIndex;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onNavigate(i)}
                  aria-current={active ? "page" : undefined}
                  aria-controls={`slide-${item.id}`}
                  aria-label={item.label}
                  className={`flex min-h-11 min-w-0 flex-1 items-center justify-center rounded-xl px-2 py-2 text-xs font-medium transition-all duration-300 sm:min-h-0 sm:flex-none sm:px-4 sm:py-2 sm:text-sm ${
                    active
                      ? "bg-white/70 text-sky-600 shadow-[0_2px_10px_rgba(14,165,233,0.18),inset_0_1px_1px_rgba(255,255,255,0.9)]"
                      : "text-slate-500 hover:bg-white/50 hover:text-slate-800"
                  }`}
                >
                  <span className="relative">
                    <span className="sm:hidden">{item.mobileLabel ?? item.label}</span>
                    <span className="hidden sm:inline">{item.label}</span>
                    <span
                      className={`absolute -bottom-1.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-sky-500 transition-all duration-300 ${
                        active ? "opacity-100" : "opacity-0"
                      }`}
                    ></span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
