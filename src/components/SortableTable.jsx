import { useState } from "react";
import { GoArrowDown, GoArrowUp } from "react-icons/go";
import Table from "./Table";

export default function SortableTable(props) {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);
  const { config, data } = props;

  const handleClick = (label) => {
    if (sortBy && label !== sortBy) {
      setSortOrder("asc");
      setSortBy(label);
      return;
    }
    switch (sortOrder) {
      case null:
        setSortOrder("asc");
        setSortBy(label);
        break;
      case "asc":
        setSortOrder("desc");
        setSortBy(label);
        break;
      case "desc":
        setSortOrder(null);
        setSortBy(null);
        break;
    }
  };

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }

    return {
      ...column,
      header: () => (
        <th
          className="curser-pointer hover:bg-gray-200"
          onClick={() => handleClick(column.label)}
        >
          <div className="flex items-center">
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
      ),
    };
  });

  let sortedData = data;
  if (sortOrder && sortBy) {
    const { sortValue } = config.find((column) => column.label === sortBy);
    sortedData = [...data].sort((a, b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);

      const reverseOrder = sortOrder === "asc" ? 1 : -1;

      if (typeof valueA === "string") {
        return valueA.localeCompare(valueB) * reverseOrder;
      } else {
        return (valueA - valueB) * reverseOrder;
      }
    });
  }

  return <Table {...props} config={updatedConfig} data={sortedData} />;
}

function getIcons(label, sortBy, sortOrder) {
  if (label !== sortBy) {
    return (
      <div>
        <GoArrowUp />
        <GoArrowDown />
      </div>
    );
  }

  if (sortOrder === "asc") {
    return <GoArrowUp />;
  } else if (sortOrder === "desc") {
    return <GoArrowDown />;
  }
}
