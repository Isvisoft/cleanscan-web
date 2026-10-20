"use client";

export default function PrintTemplateButton({ label = "Print Template / Save as PDF" }: { label?: string }) {
  return (
    <button className="hero-cta print-template-button" type="button" onClick={() => window.print()}>
      {label}
    </button>
  );
}
