const warmGlow: React.CSSProperties = {
  background:
    "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(232,198,138,0.13), rgba(232,198,138,0.04) 45%, transparent 72%)",
};

const coolGlow: React.CSSProperties = {
  background:
    "radial-gradient(ellipse 45% 38% at 82% 22%, rgba(150,178,255,0.06), transparent 70%)",
};

const vignette: React.CSSProperties = {
  background:
    "radial-gradient(ellipse 90% 70% at 50% 45%, transparent 42%, rgba(4,4,6,0.72) 100%)",
};

/**
 * Static, non-interactive page backdrop:
 * warm accent bloom → hairline grid → film grain → vignette.
 */
export function BackgroundFX() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-canvas"
    >
      <div className="absolute -top-[26vh] left-1/2 h-[78vh] w-[160vw] -translate-x-1/2 blur-[70px]" style={warmGlow} />
      <div className="absolute inset-0" style={coolGlow} />
      <div
        className="hairline-grid absolute inset-0 opacity-70"
        style={{
          maskImage:
            "radial-gradient(ellipse 75% 60% at 50% 35%, black 10%, transparent 78%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 75% 60% at 50% 35%, black 10%, transparent 78%)",
        }}
      />
      <div className="grain absolute inset-0 opacity-[0.05] mix-blend-overlay" />
      <div className="absolute inset-0" style={vignette} />
    </div>
  );
}
