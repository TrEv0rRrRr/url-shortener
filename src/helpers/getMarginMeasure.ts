/**
 * Returns a Tailwind CSS margin-top utility class based on the provided ID.
 * @param id - The identifier determining which margin class to return (1 or 2)
 * @returns A Tailwind CSS margin-top class string, or an empty string if the ID doesn't match any case
 * @example
 * getMarginMeasure(1) // returns "xl:mt-16"
 * getMarginMeasure(2) // returns "xl:mt-30"
 * getMarginMeasure(3) // returns ""
 */
export const getMarginMeasure = (id: number): string => {
  switch (id) {
    case 1:
      return "xl:mt-16";
    case 2:
      return "xl:mt-30";
    default:
      return "";
  }
};
