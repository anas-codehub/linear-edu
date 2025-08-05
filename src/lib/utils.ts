import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function getLastPathSegment(url: string): string {
  const pathname = new URL(url, window.location.origin).pathname;
  const segments = pathname.replace(/\/+$/, '').split('/');
  return decodeURIComponent(segments[segments.length - 1]);
}