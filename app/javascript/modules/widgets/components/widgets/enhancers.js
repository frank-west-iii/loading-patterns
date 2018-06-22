import { compose, setDisplayName } from "recompose";
import { graphql } from "react-apollo";

import { query } from "./utils";

export const enhance = compose(
  setDisplayName("Widgets"),
  graphql(query)
);
