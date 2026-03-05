import { useState } from "react";
import {
  getRuntimeHostname,
  MIGRATION_NOTICE_DISMISSED_KEY,
  MIGRATION_NOTICE_TTL_MS,
  MIGRATION_TARGET_URL,
  shouldShowMigrationNotice
} from "../../lib/migrationNotice";

type NoticeStorage = Pick<Storage, "getItem" | "setItem">;

type MigrationNoticeProps = {
  hostname?: string;
  storage?: NoticeStorage;
  nowProvider?: () => number;
};

function readDismissed(storage: NoticeStorage, now: number): boolean {
  try {
    const rawDismissedAt = storage.getItem(MIGRATION_NOTICE_DISMISSED_KEY);
    if (!rawDismissedAt) {
      return false;
    }

    const dismissedAt = Number(rawDismissedAt);
    if (!Number.isFinite(dismissedAt)) {
      return false;
    }

    return now - dismissedAt < MIGRATION_NOTICE_TTL_MS;
  } catch {
    return false;
  }
}

export function MigrationNotice({
  hostname = getRuntimeHostname(),
  storage = window.localStorage,
  nowProvider = () => Date.now()
}: MigrationNoticeProps) {
  const [dismissed, setDismissed] = useState(() => readDismissed(storage, nowProvider()));

  if (!shouldShowMigrationNotice(hostname) || dismissed) {
    return null;
  }

  const handleDismiss = () => {
    setDismissed(true);
    try {
      storage.setItem(MIGRATION_NOTICE_DISMISSED_KEY, String(nowProvider()));
    } catch {
      // Ignore storage failures and still hide the notice for this render cycle.
    }
  };

  return (
    <div className="pointer-events-none fixed inset-x-0 top-20 z-50 px-4 sm:top-24">
      <section
        aria-label="Site migration notice"
        className="glass-panel pointer-events-auto mx-auto w-full max-w-3xl rounded-2xl border-l-4 border-l-primary px-4 py-2.5 text-sm text-slate-700 shadow-lg"
      >
        <div className="flex items-center justify-between gap-3">
          <p className="min-w-0 leading-6">
            本站即將遷移至 / This site is migrating to{" "}
            <a
              href={MIGRATION_TARGET_URL}
              className="font-semibold text-primary-strong underline underline-offset-2"
            >
              c4lab.github.io
            </a>
            .
          </p>
          <button
            type="button"
            onClick={handleDismiss}
            className="shrink-0 cursor-pointer rounded-full border border-slate-300 bg-white px-2.5 py-1 text-xs font-semibold text-navy transition-colors duration-200 hover:bg-slate-50"
            aria-label="Dismiss migration notice"
          >
            Hide
          </button>
        </div>
      </section>
    </div>
  );
}
