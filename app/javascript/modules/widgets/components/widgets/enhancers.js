import { branch, compose, renderComponent, setDisplayName } from "recompose";
import { graphql } from "react-apollo";

import { query } from "./utils";
import { Loading } from "shared/components/loading";

const isLoading = ({ data: { loading } }) => loading;

export const enhance = compose(
  setDisplayName("Widgets"),
  graphql(query),
  branch(isLoading, renderComponent(Loading))
);
