import type { Product } from "../types/product.types";

export interface ProductImageProps {
    product: Product;
    isActive?: boolean;
}

export function ProductImage({ product, isActive }: ProductImageProps) {
    return (
        <div
            className={`h-56 sm:h-64 rounded-lg group-hover:border-2 group-hover:border-brand-red  bg-(image:--image-url-mobile) md:bg-(image:--image-url-tablet) lg:bg-(image:--image-url-desktop) ${isActive ? "border-brand-red border-2" : ""
                }`}
            style={
                {
                    "--image-url-desktop": `url(${product.image.desktop})`,
                    "--image-url-tablet": `url(${product.image.tablet})`,
                    "--image-url-mobile": `url(${product.image.mobile})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                } as React.CSSProperties
            }
        ></div>
    );
}
