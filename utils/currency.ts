export const formatCurrency = (number: number, noDecimal?: "noDecimal") =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: !!noDecimal ? 0 : undefined,
    roundingMode: "floor",
  }).format(number);
