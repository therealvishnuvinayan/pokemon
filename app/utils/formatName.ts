export const formatItem = (item: string): string => {
  return item
    .split("-")
    .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export default formatItem;
