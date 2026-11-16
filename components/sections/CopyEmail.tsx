"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

type CopyEmailProps = {
  email: string;
};

/** Copies the address to the clipboard and confirms inline. */
export function CopyEmail({ email }: CopyEmailProps) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={copied ? "Email copied" : `Copy ${email} to clipboard`}
      className={cn(
        "group inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-[11px] font-medium uppercase tracking-[0.14em] transition-all duration-300",
        copied
          ? "border-accent/40 bg-accent/10 text-accent-soft"
          : "border-white/10 bg-white/[0.03] text-ink-mute hover:border-white/25 hover:text-ink",
      )}
    >
      {copied ? <Check size={13} /> : <Copy size={13} />}
      {copied ? "Copied" : "Copy email"}
    </button>
  );
}
