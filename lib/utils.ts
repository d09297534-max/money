import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export function formatCurrency(
  value: number,
  currency: 'USD' | 'EUR' | 'GBP' | 'AED' = 'USD',
  opts: Intl.NumberFormatOptions = {},
): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    ...opts,
  }).format(value);
}

export function formatNumber(value: number, opts: Intl.NumberFormatOptions = {}): string {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    ...opts,
  }).format(value);
}

export function formatCompact(value: number): string {
  return new Intl.NumberFormat('en-US', {
    notation: 'compact',
    maximumFractionDigits: 1,
  }).format(value);
}

/** Generates a deterministic SVG path for a sparkline / curve */
export function buildCurvePath(
  points: number[],
  width: number,
  height: number,
  padding = 4,
): string {
  if (points.length < 2) return '';
  const min = Math.min(...points);
  const max = Math.max(...points);
  const range = max - min || 1;
  const stepX = (width - padding * 2) / (points.length - 1);

  const coords = points.map((p, i) => {
    const x = padding + i * stepX;
    const y = padding + (1 - (p - min) / range) * (height - padding * 2);
    return [x, y] as const;
  });

  // Smooth bezier curve through points
  let d = `M ${coords[0][0]},${coords[0][1]}`;
  for (let i = 1; i < coords.length; i++) {
    const [x0, y0] = coords[i - 1];
    const [x1, y1] = coords[i];
    const cx = (x0 + x1) / 2;
    d += ` C ${cx},${y0} ${cx},${y1} ${x1},${y1}`;
  }
  return d;
}
