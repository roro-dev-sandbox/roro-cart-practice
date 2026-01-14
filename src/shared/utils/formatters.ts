export const formatPrice = (price: number, decimals = 2): string =>
    `$${price.toFixed(decimals)}`;

export const formatQuantity = (quantity: number): string => `${quantity}x`;
