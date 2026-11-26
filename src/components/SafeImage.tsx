import React, { useState, useEffect } from 'react';

interface SafeImageProps {
  src?: string;
  alt: string;
  className?: string;
  loading?: 'eager' | 'lazy';
  isAvatar?: boolean;
  fallbackLabel?: string;
}

function getInitials(label: string): string {
  const cleaned = label.replace(/\(.*?\)/g, '').trim();
  const parts = cleaned.split(/\s+/).filter(Boolean);
  if (parts.length === 0) return 'GH';
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  className = 'w-full h-full object-cover',
  loading = 'lazy',
  isAvatar = false,
  fallbackLabel,
}) => {
  const [hasError, setHasError] = useState(!src);

  useEffect(() => {
    setHasError(!src);
  }, [src]);

  if (hasError || !src) {
    if (isAvatar) {
      return (
        <div
          role="img"
          aria-label={alt}
          className={`${className} flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-950 text-amber-400 font-serif font-bold text-sm select-none`}
        >
          {getInitials(fallbackLabel || alt)}
        </div>
      );
    }

    return (
      <div
        role="img"
        aria-label={alt}
        className={`${className} flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-slate-950 to-red-950/60 p-4 text-center select-none`}
      >
        <img
          src="/ghpulse-logo.jpg"
          alt=""
          aria-hidden="true"
          className="w-12 h-12 rounded-full object-cover border border-amber-400/50 shadow-md opacity-90"
        />
        <span className="mt-2 text-[10px] font-bold uppercase tracking-widest text-slate-300">
          GhPulse Media Desk
        </span>
      </div>
    );
  }

  return (
    <img
      key={src}
      src={src}
      alt={alt}
      loading={loading}
      decoding="async"
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
};
