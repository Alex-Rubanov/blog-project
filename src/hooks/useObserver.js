import { useEffect, useRef } from "react";

export const useObserver = (ref, canLoad, isLoading, callback) => {
    const observer = useRef();

    useEffect(() => {
        if (isLoading) return;
        if (observer.current) observer.current.disconnect();
    
        const observerHandler = function(entries) {
          if(entries[0].isIntersecting && canLoad) {

            callback();
          }
        }
    
        observer.current = new IntersectionObserver(observerHandler);
        observer.current.observe(ref.current);
      }, [isLoading])
}