import { DeviceInfo, DeviceType } from '../types';

export function detectDevice(): DeviceInfo {
  const ua = navigator.userAgent || '';
  const width = window.innerWidth;

  const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  let type: DeviceType = 'desktop';

  // Check for tablet/mobile
  const isMobileUA = /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);
  const isTabletUA = /iPad|Macintosh/i.test(ua) && isTouch; // iPadOS reports as Macintosh with touch

  if (isTabletUA || (width >= 640 && width <= 1024 && isTouch)) {
    type = 'tablet';
  } else if (isMobileUA || (width < 640 && isTouch)) {
    type = 'mobile';
  } else {
    type = 'desktop';
  }

  let os = 'Unknown OS';
  if (/Windows/i.test(ua)) os = 'Windows';
  else if (/Macintosh|Mac OS/i.test(ua)) os = 'macOS';
  else if (/iPhone|iPad|iPod/i.test(ua)) os = 'iOS';
  else if (/Android/i.test(ua)) os = 'Android';
  else if (/Linux/i.test(ua)) os = 'Linux';

  return {
    type,
    isTouch,
    os,
    screenSize: `${window.innerWidth}x${window.innerHeight}`,
  };
}

export function triggerHaptic(durationMs = 40) {
  if ('vibrate' in navigator) {
    try {
      navigator.vibrate(durationMs);
    } catch {
      // Ignore vibration errors
    }
  }
}
