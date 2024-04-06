import Button from "../components/Button";
import { GoBell } from "react-icons/go";
import { MdCloudDownload } from "react-icons/md";
import { DiDatabase } from "react-icons/di";

export default function ButtonPage() {
  return (
    <div>
      <div>
        <Button primary rounded outline className="mb-5">
          <GoBell />
          primary
        </Button>
      </div>
      <div>
        <Button secondary outline>
          <MdCloudDownload />
          secondary
        </Button>
      </div>
      <div>
        <Button success outline>
          <DiDatabase />
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
