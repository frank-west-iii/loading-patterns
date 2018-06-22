import React from "react";

export const Widgets = ({ data: { loading, widgets = [] } }) => (
  <div>
    <h1>Widgets</h1>
    {loading ? (
      <div>Loading</div>
    ) : (
      widgets.map(widget => <div key={widget.id}>{widget.name}</div>)
    )}
  </div>
);
