import { useEffect } from 'react';

const useIntersectionObserver = (elements, callback, options) => {
    useEffect(() => {
        const observer = new IntersectionObserver(callback, options);
        elements.forEach(element => {
            if (element) observer.observe(element);
        });

        return () => {
            elements.forEach(element => {
                if (element) observer.unobserve(element);
            });
        };
    }, [elements, callback, options]);
};

export default useIntersectionObserver;