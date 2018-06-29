import { compose, setDisplayName } from "recompose";
import { graphql } from "react-apollo";

import { query } from "./utils";
import { withLoading } from "lib/with-loading";

export const enhance = compose(
  setDisplayName("Widgets"),
  graphql(query),
  withLoading
);
