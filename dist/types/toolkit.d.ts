import merge from "deepmerge";
import { Dict } from "./utils";
export declare function get<T extends Dict>(object: T, path: string, fallback?: any): any;
export declare function set<T extends any>(object: T, path: string, value: any): any;
export { merge };
export declare function remove(object: object, path: string): boolean;
export declare function has(object: Dict, path: string): boolean;
export declare type MapInterator<T> = (value: any, key: string, object: T) => void;
export declare function map<T extends Dict>(object: T, fn: MapInterator<T>): Record<string, any>;
export declare type ForEachInterator<T> = (value: any, key: string, object: T) => void;
export declare function forEach<T extends Dict>(object: T, fn: ForEachInterator<T>): void;
export declare type FilterInterator<T> = (value: any, key: string, object: T) => boolean;
export declare function filter<T extends Dict>(object: T, fn: FilterInterator<T>): Record<string, any>;
export declare function omit<T extends Dict, K extends keyof T>(object: T, keys: K[]): Pick<T, Exclude<keyof T, K>>;
export declare function pick<T extends Dict, K extends keyof T>(object: T, keys: K[]): { [P in K]: T[P]; };
export declare function split<T extends Dict, K extends keyof T>(object: T, keys: K[]): [{ [P in K]: T[P]; }, Pick<T, Exclude<keyof T, K>>];
export declare function keys<T>(object: T): (keyof T)[];
export declare function entries<T>(object: T): [keyof T, T[keyof T]][];
