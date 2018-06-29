import React, { Component } from "react";

import { Loading } from "shared/components/loading";

export const withLoading = WrappedComponent =>
  class WithLoading extends Component {
    static getDerivedStateFromProps = ({ data: { loading } }, state) =>
      loading ? state : { hasLoaded: true };

    constructor(props) {
      super(props);
      this.state = { hasLoaded: false };
    }

    render() {
      const { hasLoaded } = this.state;

      return hasLoaded ? <WrappedComponent {...this.props} /> : <Loading />;
    }
  };
