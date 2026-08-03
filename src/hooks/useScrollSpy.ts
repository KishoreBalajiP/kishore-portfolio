import { useEffect, useRef, useState } from 'react';

export function useScrollSpy(ids: string[], offset = 200) {
  const [activeId, setActiveId] = useState<string>(ids[0] ?? '');
  const idsRef = useRef(ids);
  idsRef.current = ids;
  const key = ids.join(',');

  useEffect(() => {
    let frame = 0;

    const updateActiveId = () => {
      const position = window.scrollY + offset;
      const isAtPageEnd =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      let current = idsRef.current[0] ?? '';

      if (isAtPageEnd) {
        current = idsRef.current[idsRef.current.length - 1] ?? current;
      } else {
        for (const id of idsRef.current) {
          const el = document.getElementById(id);
          if (el && el.offsetTop <= position) {
            current = id;
          }
        }
      }

      setActiveId((previous) => (previous === current ? previous : current));
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateActiveId);
    };

    updateActiveId();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [key, offset]);

  return activeId;
}
