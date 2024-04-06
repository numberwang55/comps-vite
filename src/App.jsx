import ButtonPage from "./pages/ButtonPage";
import Accordion from "./components/Accordion";

export default function App() {
  const items = [
    { label: "Puedo utilizar CSS en una app de React?", content: "Claro que si, puedes utilizar este lenguaje de programacion si quieres" },
    { label: "Puedo utilizar Javascript en una app de React?", content: "Claro que si, puedes utilizar este lenguaje de programacion si quieres" },
    { label: "Puedo utilizar Typescript en una app de React?", content: "Claro que si, puedes utilizar este lenguaje de programacion si quieres" },
  ];
  return (
    <div>
      {/* <ButtonPage /> */}
      <Accordion items={items}/>
    </div>
  );
}
