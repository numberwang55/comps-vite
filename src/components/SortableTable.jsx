import { GoArrowDown, GoArrowUp } from "react-icons/go";
import Table from "./Table";
import useSort from "../hooks/use-sort";

export default function SortableTable(props) {
  const { config, data } = props;

  const { sortOrder, sortBy, sortedData, setSortColumn } = useSort(config, data);

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }

    return {
      ...column,
      header: () => (
        <th
          className="curser-pointer hover:bg-gray-200"
          onClick={() => setSortColumn(column.label)}
        >
          <div className="flex items-center">
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
      ),
    };
  });

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
