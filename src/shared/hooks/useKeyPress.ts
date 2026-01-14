import { useEffect } from "react";

interface UseKeyPressOptions {
    key?: string;
    callback: () => void;
}

export const useKeyPress = ({ key = "Escape", callback }: UseKeyPressOptions): void => {
    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === key) {
                callback();
            }
        };

        window.addEventListener("keydown", handleEscape);
        document.body.style.overflow = "hidden";
        return () => {
            window.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = "auto";
        };
    }, [callback]);
};
