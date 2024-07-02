// 1
type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K];
};

// 2
type DeepRequireReadonly<T> = {
  readonly [K in keyof T]-?: T[K] extends object ? DeepRequireReadonly<T[K]> : T[K];
};

// 3
type UpperCaseKeys<T> = {
  [K in keyof T as Uppercase<K & string>]: T[K];
};

// 4
type PropertysDescriptor<T> = {
  configurable?: boolean;
  enumerable?: boolean;
  writable?: boolean;
  value?: T;
  get?(): T;
  set?(value: T): void;
};

type ObjectToPropertyDescriptor<T> = {
  [K in keyof T]: PropertysDescriptor<T[K]>;
};
