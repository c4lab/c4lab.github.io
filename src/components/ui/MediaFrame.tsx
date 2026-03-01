type MediaFrameProps = {
  label: string;
  className?: string;
};

export function MediaFrame({ label, className }: MediaFrameProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-[2rem] border border-white/20 bg-gradient-to-br from-primary via-secondary to-navy p-8 shadow-soft ${className ?? ""}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.28),_transparent_42%)]" />
      <div className="relative flex min-h-64 items-end rounded-[1.5rem] border border-white/15 bg-black/10 p-6">
        <p className="max-w-xs font-display text-2xl text-white">{label}</p>
      </div>
    </div>
  );
}
