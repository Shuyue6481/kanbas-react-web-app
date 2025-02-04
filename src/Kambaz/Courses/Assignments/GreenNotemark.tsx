import { LuNotebookPen } from "react-icons/lu";
export default function GreenNotemark() {
  return (
    <span className="me-3 position-relative">
      <LuNotebookPen
        style={{ top: "2px" }}
        className="text-success me-1 position-absolute fs-5"
      />
    </span>
  );
}
