type EmptyStateProps = {
  title: string;
  body: string;
};

export function EmptyState({ title, body }: EmptyStateProps) {
  return (
    <div className="rounded-3xl border border-dashed border-slate-300 bg-white/70 p-8 text-center">
      <h3 className="text-2xl">{title}</h3>
      <p className="mt-3 text-slate-600">{body}</p>
    </div>
  );
}
