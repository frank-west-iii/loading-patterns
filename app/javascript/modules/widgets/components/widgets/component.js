import React from "react";

import { Loading } from "shared/components/loading";

const LoadableContent = ({ loading, render }) =>
  loading ? <Loading /> : render();

export const Widgets = ({ data: { loading, widgets } }) => (
  <div>
    <h1>Widgets</h1>
    <LoadableContent
      loading={loading}
      render={() =>
        widgets.map(widget => <div key={widget.id}>{widget.name}</div>)
      }
    />
  </div>
);
