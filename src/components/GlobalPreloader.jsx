import { useLayoutEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function GlobalPreloader({ children }) {
    const location = useLocation();
    const [isLoading, setIsLoading] = useState(false);

    useLayoutEffect(() => {
        setIsLoading(true);

        const timer = setTimeout(() => setIsLoading(false), 500);
        return () => clearTimeout(timer);
    }, [location]);

    return (
        <>
            {isLoading ? (
                // 🔸 Preloader
                <div className="flex justify-center items-center py-16 min-h-[70vh]">
                    <div className="w-10 h-10 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
                </div>
            ) : (
                // 🔹 محتوى الصفحة يظهر بعد انتهاء التحميل
                <div className="opacity-0 animate-fadeIn">
                    {children}
                </div>
            )}
        </>
    );
}

export default GlobalPreloader;
