import SortableTable from "../components/SortableTable";

export default function TablePage() {
  const data = [
    { name: "Orange", colour: "bg-orange-500", score: 5 },
    { name: "Apple", colour: "bg-red-500", score: 3 },
    { name: "Banana", colour: "bg-yellow-500", score: 1 },
    { name: "Lime", colour: "bg-green-500", score: 4 },
  ];

  const config = [
    {
      label: "Fruit",
      render: (fruit) => fruit.name,
      sortValue: (fruit) => fruit.name,
    },
    {
      label: "Colour",
      render: (fruit) => <div className={`p-3 m-2 ${fruit.colour}`}></div>,
    },
    {
      label: "Score",
      render: (fruit) => fruit.score,
      sortValue: (fruit) => fruit.score,
    },
  ];

  const keyFn = (fruit) => {
    return fruit.name;
  };

  return (
    <div>
      <SortableTable data={data} config={config} keyFn={keyFn} />
    </div>
  );
}
