import React from "react";

export const Widgets = ({ data: { widgets } }) => (
  <div>
    <h1>Widgets</h1>
    {widgets.map(widget => <div key={widget.id}>{widget.name}</div>)}
  </div>
);
