import React from 'react';

export const SPA_NAVIGATE_EVENT = 'ghpulse:navigate';

export function isModifiedClick(event: React.MouseEvent): boolean {
  return (
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey ||
    event.button !== 0
  );
}

export function navigateTo(path: string, replace = false): void {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  if (typeof window === 'undefined') return;

  if (window.location.pathname === normalized && !window.location.hash) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  if (replace) {
    window.history.replaceState({}, '', normalized);
  } else {
    window.history.pushState({}, '', normalized);
  }
  window.dispatchEvent(new CustomEvent(SPA_NAVIGATE_EVENT, { detail: { path: normalized } }));
}

export function handleSpaLinkClick(event: React.MouseEvent, path: string): void {
  if (isModifiedClick(event)) return;
  event.preventDefault();
  navigateTo(path);
}
