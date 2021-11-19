import React from "react";

function PortFolioList({ id, active, setSelected, title }) {
  return (
    <li onClick={() => setSelected(id)} className={active ? "active" : ""}>
      {title}
    </li>
  );
}

export default PortFolioList;
