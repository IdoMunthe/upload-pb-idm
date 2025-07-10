import { useEffect } from "react";


// Locks or unlocks body scroll when `lock` is true or false

export function useScrollLock(lock: boolean = true) {
  useEffect(() => {
    if (lock) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [lock]);
}
