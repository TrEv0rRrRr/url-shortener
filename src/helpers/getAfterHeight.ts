/**
 * Returns a Tailwind CSS class string for the `after` pseudo-element's height
 * based on the provided count value.
 *
 * @param count - The index used to determine the height class.
 *   - `0` returns `"after:h-24"`
 *   - `1` returns `"after:h-67"`
 *   - `2` returns `"after:h-116"`
 *   - `3` returns `"after:h-164"`
 *   - Any other value returns `"after:h-164"`
 * @returns The corresponding Tailwind CSS class string for the `after` height.
 */
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
