declare type WithOptional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
declare type Nullable<T> = { [K in keyof T]: T[K] | null };
type DeepNullable<T> = {
  [K in keyof T]: DeepNullable<T[K]> | null;
};

interface Window {
  dataLayer: Record<string, unknown>[];
}
