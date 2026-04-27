import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  /** When true, shows the "BLACK" tier suffix beside the wordmark */
  withTier?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

/**
 * Custom AORO wordmark. Geometric, slightly condensed, with a small gold dot
 * acting as the diacritic — like a watch maker's signature.
 */
export function Logo({ className, withTier = false, size = 'md' }: LogoProps) {
  const dims = {
    sm: { h: 14, fs: 14 },
    md: { h: 18, fs: 18 },
    lg: { h: 24, fs: 24 },
  }[size];

  return (
    <div className={cn('flex items-center gap-3', className)}>
      <div
        className="flex items-center font-display font-medium text-ivory"
        style={{ fontSize: dims.fs, letterSpacing: '0.32em', lineHeight: 1 }}
      >
        <span>AOR</span>
        <span className="relative inline-flex items-center justify-center">
          O
          <span
            aria-hidden
            className="absolute -top-1 left-1/2 -translate-x-1/2 w-[3px] h-[3px] rounded-full bg-gold-300"
          />
        </span>
      </div>
      {withTier && (
        <span className="pl-3 border-l border-line text-eyebrow text-muted">Black</span>
      )}
    </div>
  );
}
