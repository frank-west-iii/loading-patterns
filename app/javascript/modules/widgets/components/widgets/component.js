import React from "react";

import { Loading } from "shared/components/loading";

export const Widgets = ({ data: { loading, widgets } }) => (
  <div>
    <h1>Widgets</h1>
    {loading ? (
      <Loading />
    ) : (
      widgets.map(widget => <div key={widget.id}>{widget.name}</div>)
    )}
  </div>
);
