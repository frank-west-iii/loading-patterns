import { compose, setDisplayName, withProps } from "recompose";
import { graphql } from "react-apollo";

import { query } from "./utils";

export const enhance = compose(
  setDisplayName("Widgets"),
  graphql(query),
  withProps(({ data }) => {
    if (data.widgets) return {};
    return { data: { ...data, widgets: [] } };
  })
);
