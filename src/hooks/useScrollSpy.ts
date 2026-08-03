import { useEffect, useRef, useState } from 'react';

export function useScrollSpy(ids: string[], offset = 200) {
  const [activeId, setActiveId] = useState<string>(ids[0] ?? '');
  const idsRef = useRef(ids);
  idsRef.current = ids;
  const key = ids.join(',');

  useEffect(() => {
    const onScroll = () => {
      const position = window.scrollY + offset;
      let current = idsRef.current[0] ?? '';

      for (const id of idsRef.current) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= position) {
          current = id;
        }
      }

      setActiveId(current);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [key, offset]);

  return activeId;
}
