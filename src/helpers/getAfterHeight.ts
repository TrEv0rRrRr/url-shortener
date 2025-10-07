export const getAfterHeight = (count: number): string => {
  switch (count) {
    case 0:
      return "after:h-24";
    case 1:
      return "after:h-67";
    case 2:
      return "after:h-116";
    case 3:
      return "after:h-164";
    default:
      return "after:h-164";
  }
};

export default getAfterHeight;
