import "@testing-library/jest-dom/vitest";

function createInMemoryStorage(): Storage {
  const values = new Map<string, string>();

  return {
    get length() {
      return values.size;
    },
    clear() {
      values.clear();
    },
    getItem(key: string) {
      return values.get(key) ?? null;
    },
    key(index: number) {
      return Array.from(values.keys())[index] ?? null;
    },
    removeItem(key: string) {
      values.delete(key);
    },
    setItem(key: string, value: string) {
      values.set(String(key), String(value));
    }
  };
}

function hasStorageApi(value: unknown): value is Storage {
  return (
    typeof value === "object" &&
    value !== null &&
    typeof (value as Storage).getItem === "function" &&
    typeof (value as Storage).setItem === "function" &&
    typeof (value as Storage).removeItem === "function" &&
    typeof (value as Storage).clear === "function" &&
    typeof (value as Storage).key === "function"
  );
}

function ensureLocalStorageApi() {
  if (typeof window === "undefined") {
    return;
  }

  if (hasStorageApi(window.localStorage)) {
    return;
  }

  Object.defineProperty(window, "localStorage", {
    configurable: true,
    value: createInMemoryStorage()
  });
}

ensureLocalStorageApi();
