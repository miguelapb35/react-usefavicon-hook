import React from "react";
import useFavicon from "./useFavicon";
import FAVICON from "./captain.gif";

const App = () => {
  useFavicon(FAVICON, "image/gif");

  return <p>Check browser's favicon.</p>;
};

export default App;
