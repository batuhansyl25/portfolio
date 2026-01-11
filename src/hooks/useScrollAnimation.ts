import { useEffect, useState, RefObject } from 'react';

export function useScrollAnimation(ref: RefObject<HTMLElement>, threshold = 0.1) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, [ref, threshold]);

    return isVisible;
}
