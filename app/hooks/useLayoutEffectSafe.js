import { useEffect, useLayoutEffect } from 'react';

// useLayoutEffect runs before paint — prevents off-center flash on navigation.
// Falls back to useEffect during SSR where window is unavailable.
const useLayoutEffectSafe =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export default useLayoutEffectSafe;
