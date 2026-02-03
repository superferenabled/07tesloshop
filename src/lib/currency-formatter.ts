export const currencyFormatter = (value: number, locale: string = 'es-MX', currency: string = 'MXN'): string => {
    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency,
        minimumFractionDigits: 2,
    }).format(value);
}