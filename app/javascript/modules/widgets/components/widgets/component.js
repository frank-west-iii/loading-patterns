import React from "react";

export const Widgets = ({ data: { widgets } }) =>
  widgets.map(widget => <div key={widget.id}>{widget.name}</div>);
