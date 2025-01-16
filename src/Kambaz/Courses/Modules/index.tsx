export default function Modules() {
  return (
    <div>
      {/* Implement Collapse All button, View Progress button, etc. */}
      <button
        type="button"
        // onClick={() => alert("Collapse All clicked")}
      >
        Collapse All
      </button>
      <button
        type="button"
        // onClick={() => alert("View Progress clicked")}
      >
        View Progress
      </button>
      <select>
        <option value="PublishAll">Publish All</option>
      </select>
      {/* <button
        type="button"
        onClick={() => alert("Publish All")}
        id="wd-all-good"
      >
        Publish All
      </button> */}
      <button
        type="button"
        // onClick={() => alert("Add Module")}
      >
        + Module
      </button>
      <ul id="wd-modules">
        <li className="wd-module">
          <div className="wd-title">Week 1</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to the course</li>
                <li className="wd-content-item">
                  Learn what is Web Development
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="wd-module">
          <div className="wd-title">Week 2</div>
        </li>
        <li className="wd-module">
          <div className="wd-title">Week 3</div>
        </li>
      </ul>
    </div>
  );
}
