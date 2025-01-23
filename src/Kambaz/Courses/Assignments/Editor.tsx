export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" value="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea id="wd-description">
        The assignment is available online Submit a link to the landing page of
      </textarea>
      <br />
      <table cellPadding="10">
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>

        {/* Complete on your own */}
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-group">
              <option value="ASSIGNMENTS">ASSIGNMENTS</option>
              {/* <option value="QUIZES">QUIZES</option> */}
            </select>
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
          </td>
          <td>
            <select id="wd-display-grade-as">
              <option value="Percentage">Percentage</option>
              {/* <option value="Points">Points</option> */}
            </select>
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select id="wd-submission-type">
              <option value="Online">Online</option>
              {/* <option value="Presentation">Presentation</option> */}
            </select>
          </td>
        </tr>

        <tr>
          <td></td>
          <td>
            <label htmlFor="wd-points">Online Entry Options</label>
            <div>
              <input type="checkbox" id="wd-text-entry" />
              <label htmlFor="wd-text-entry">Text Entry</label>
            </div>
            <div>
              <input type="checkbox" id="wd-website-url" />
              <label htmlFor="wd-website-url">Website URL</label>
            </div>
            <div>
              <input type="checkbox" id="wd-media-recordings" />
              <label htmlFor="wd-media-recordings">Media Recordings</label>
            </div>
            <div>
              <input type="checkbox" id="wd-student-annotation" />
              <label htmlFor="wd-student-annotation">Student Annotation</label>
            </div>
            <div>
              <input type="checkbox" id="wd-file-upload" />
              <label htmlFor="wd-file-upload">File Uploads</label>
            </div>
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-assign-to">Assign</label>
          </td>
          <td align="left" valign="top">
            <label htmlFor="wd-assign-to">Assign to</label>
            <div>
              <input id="wd-assign-to" value={"Everyone"} />
            </div>
          </td>
        </tr>

        <tr>
          <td></td>
          <td align="left" valign="top">
            <label htmlFor="wd-due-date">Due</label>
            <div>
              <input id="wd-due-date" type="date" defaultValue="2024-05-13" />
            </div>
          </td>
        </tr>

        <tr>
          <td></td>
          <td align="left" valign="top">
            <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
              <div>
                <label htmlFor="wd-available-from" style={{ display: "block" }}>
                  Available from
                </label>
                <input
                  id="wd-available-from"
                  type="date"
                  defaultValue="2024-05-06"
                />
              </div>

              <div>
                <label
                  htmlFor="wd-available-until"
                  style={{ display: "block" }}
                >
                  Until
                </label>
                <input
                  id="wd-available-until"
                  type="date"
                  defaultValue="2024-05-20"
                />
              </div>
            </div>
          </td>
        </tr>
      </table>
      <hr />
      <div style={{ textAlign: "right" }}>
        <button>Cancel</button>
        <button>Save</button>
      </div>
    </div>
  );
}
