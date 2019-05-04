import { grommet } from "grommet/themes";
import { deepMerge } from "grommet/utils";

export const customTheme = deepMerge(grommet, {
  colors: {
    brand: "#228BE6"
  },
  global: {
    font: {
      family: "Roboto",
      size: "14px",
      height: "20px"
    }
  }
});
