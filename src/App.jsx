import Button from "./components/Button";

export default function App() {
  return (
    <div>
      <div>
        <Button primary outline>primary</Button>
      </div>
      <div>
        <Button secondary outline>secondary</Button>
      </div>
      <div>
        <Button success outline>success</Button>
      </div>
      <div>
        <Button danger outline>danger</Button>
      </div>
      <div>
        <Button outline warning>warning</Button>
      </div>
    </div>
  );
}
