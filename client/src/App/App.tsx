import { useState } from "react";
import Homepage from "../Homepage/Homepage";
import "./App.css";

function App() {
  const [dialogBox, setDialogBox] = useState<boolean>(false);
  const [deleteDialogBox, setDeleteDialogBox] = useState<boolean>(false);

  return (
    <div className={dialogBox || deleteDialogBox ? "app-height" : "app"}>
      <Homepage
        dialogBox={dialogBox}
        setDialogBox={setDialogBox}
        deleteDialogBox={deleteDialogBox}
        setDeleteDialogBox={setDeleteDialogBox}
      />
    </div>
  );
}

export default App;
