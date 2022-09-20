import "./styles.css";
import Folder from "./components/Folder.js";
import explorer from "./data/folderData";

export default function App() {
  return (
    <div className="App">
      <Folder explorer={explorer} />
    </div>
  );
}
