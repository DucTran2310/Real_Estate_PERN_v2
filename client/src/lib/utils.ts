import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateDefaultAvatar(name: string) {
  return `https://ui-avatars.com/api/?background=random&color=random&name=${name}&rounded=true&bold=true`
}
