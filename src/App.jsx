import Button from "./components/Button";
import { GoBell } from "react-icons/go";
import { MdCloudDownload } from "react-icons/md";
import { DiDatabase } from "react-icons/di";

export default function App() {
  const handleClick = () => {
    console.log("click!!!!")
  }
  return (
    <div>
      <div>
        <Button primary rounded outline onClick={handleClick}>
          <GoBell/>
          primary
        </Button>
      </div>
      <div>
        <Button secondary outline onMouseEnter={handleClick}>
          <MdCloudDownload/>
          secondary
        </Button>
      </div>
      <div>
        <Button success outline onMouseLeave={handleClick}>
          <DiDatabase/>
          success
        </Button>
      </div>
      <div>
        <Button danger outline>
          danger
        </Button>
      </div>
      <div>
        <Button outline warning>
          warning
        </Button>
      </div>
    </div>
  );
}
