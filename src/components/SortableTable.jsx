import { useState } from "react";
import Table from "./Table";

export default function SortableTable(props) {
  const [sortOrder, setSortOrder] = useState(null)
  const [sortBy, setSortBy] = useState(null)
  const { config } = props;

  const handleClick = (label) => {
    switch (sortOrder) {
      case null:
        setSortOrder("asc")
        setSortBy(label)
        break;
      case "asc":
        setSortOrder("desc")
        setSortBy(label)
        break;
      case "desc":
        setSortOrder(null)
        setSortBy(null)
        break;
    }
  }

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }

    return {
      ...column,
      header: () => <th className="bg-red-500" onClick={() => handleClick(column.label)}>{column.label}</th>,
    };
  });

  return <div>
    {sortOrder} - {sortBy}
    <Table {...props} config={updatedConfig} />
  </div>;
}
