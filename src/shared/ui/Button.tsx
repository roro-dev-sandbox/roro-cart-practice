const BUTTONS_STYLES = {
    primary:
        "w-full bg-brand-red text-white font-semibold py-2 rounded-3xl hover:bg-brand-red/90 transition cursor-pointer",
};

type ButtonStyle = keyof typeof BUTTONS_STYLES;

export interface ButtonProps {
    children: React.ReactNode;
    variant?: ButtonStyle;
    className?: string;
    onClick?: () => void;
}

export function Button({
    children,
    variant = "primary",
    className,
    onClick,
}: ButtonProps) {
    return (
        <button
            className={`${BUTTONS_STYLES[variant]} ${className ?? ""}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}
