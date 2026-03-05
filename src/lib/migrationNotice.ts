export const PRIMARY_HOSTNAME = "c4lab.github.io";
export const MIGRATION_TARGET_URL = "https://c4lab.github.io/";
export const MIGRATION_NOTICE_DISMISSED_KEY = "migration_notice_dismissed_v1";
export const MIGRATION_NOTICE_TTL_MS = 24 * 60 * 60 * 1000;

export function shouldShowMigrationNotice(hostname: string): boolean {
  const normalizedHostname = hostname.toLowerCase();
  return normalizedHostname.length > 0 && normalizedHostname !== PRIMARY_HOSTNAME;
}

export function getRuntimeHostname(): string {
  if (typeof window === "undefined") {
    return "";
  }
  return window.location.hostname;
}
