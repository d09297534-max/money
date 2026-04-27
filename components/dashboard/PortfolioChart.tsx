'use client';

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { buildCurvePath } from '@/lib/utils';
import { PORTFOLIO_CURVE } from '@/lib/data';
import { cn } from '@/lib/utils';

interface PortfolioChartProps {
  className?: string;
  height?: number;
  showAxis?: boolean;
}

const RANGES = ['1W', '1M', 'YTD', 'ALL'] as const;
type Range = (typeof RANGES)[number];

// Synthetic series per range
const SERIES: Record<Range, number[]> = {
  '1W':  [100, 100.4, 99.8, 100.6, 101.1, 100.9, 101.7],
  '1M':  [100, 100.6, 101.2, 100.4, 102.1, 102.8, 102.2, 103.0, 103.4, 102.9, 104.1, 105.2],
  YTD:   PORTFOLIO_CURVE,
  ALL:   [100, 102, 99, 104, 108, 110, 107, 113, 119, 122, 118, 125, 130, 128, 134, 138, 142, 148, 152],
};

export function PortfolioChart({ className, height = 260, showAxis = true }: PortfolioChartProps) {
  const [range, setRange] = useState<Range>('YTD');
  const points = SERIES[range];

  const W = 800;
  const H = height;
  const PAD = 8;

  const path = useMemo(() => buildCurvePath(points, W, H, PAD), [points, H]);
  const area = useMemo(
    () => `${path} L ${W - PAD},${H - PAD} L ${PAD},${H - PAD} Z`,
    [path, H],
  );

  // Last point
  const lastX = W - PAD;
  const min = Math.min(...points);
  const max = Math.max(...points);
  const range_ = max - min || 1;
  const lastY = PAD + (1 - (points[points.length - 1] - min) / range_) * (H - PAD * 2);

  const pct = (((points[points.length - 1] - points[0]) / points[0]) * 100).toFixed(1);

  return (
    <div className={cn('panel-surface flex flex-col', className)}>
      <div className="flex items-center justify-between p-6 pb-4">
        <div className="flex items-center gap-3">
          <h3 className="display text-lg font-normal text-ivory tracking-tight">
            Portfolio Performance
          </h3>
          <span className="num text-[11px] text-signal-up px-2 py-0.5 rounded bg-signal-up/10">
            +{pct}%
          </span>
        </div>

        <div className="flex items-center gap-1 p-1 rounded-full border border-line">
          {RANGES.map((r) => (
            <button
              key={r}
              onClick={() => setRange(r)}
              className={cn(
                'num px-3 py-1 rounded-full text-[10px] tracking-[0.12em] transition-colors',
                range === r
                  ? 'bg-gold-300/15 text-gold-200'
                  : 'text-muted hover:text-ivory',
              )}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      <div className="relative flex-1 px-6 pb-6">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          preserveAspectRatio="none"
          className="w-full"
          style={{ height }}
        >
          <defs>
            <linearGradient id="aoroGoldArea" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%"  stopColor="#d5b46a" stopOpacity="0.30" />
              <stop offset="60%" stopColor="#d5b46a" stopOpacity="0.04" />
              <stop offset="100%" stopColor="#d5b46a" stopOpacity="0" />
            </linearGradient>
            <filter id="aoroGoldGlow" x="-10%" y="-10%" width="120%" height="120%">
              <feGaussianBlur stdDeviation="2.5" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {showAxis && (
            <>
              {[0.25, 0.5, 0.75].map((p) => (
                <line
                  key={p}
                  x1={0}
                  y1={H * p}
                  x2={W}
                  y2={H * p}
                  stroke="rgba(255,255,255,0.04)"
                  strokeDasharray="2 6"
                />
              ))}
            </>
          )}

          {/* Animated area */}
          <motion.path
            d={area}
            fill="url(#aoroGoldArea)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            key={`area-${range}`}
          />

          {/* Animated stroke */}
          <motion.path
            d={path}
            fill="none"
            stroke="#d5b46a"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#aoroGoldGlow)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            key={`line-${range}`}
          />

          {/* Endpoint dot */}
          <motion.circle
            cx={lastX}
            cy={lastY}
            r={4}
            fill="#fff"
            stroke="#d5b46a"
            strokeWidth={2}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.4, type: 'spring', stiffness: 200 }}
            key={`dot-${range}`}
          />
        </svg>

        {/* Y-axis labels */}
        {showAxis && (
          <div className="absolute right-6 top-2 bottom-6 flex flex-col justify-between text-[9px] text-muted-strong num pointer-events-none">
            <span>{max.toFixed(1)}</span>
            <span>{((max + min) / 2).toFixed(1)}</span>
            <span>{min.toFixed(1)}</span>
          </div>
        )}
      </div>
    </div>
  );
}
