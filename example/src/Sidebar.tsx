import React from "react";
import type { IHighlight } from "./react-pdf-highlighter";

import '../../src/style/Sidebar.css'

interface Props {
  highlights: Array<IHighlight>;
  redactFlag: boolean;
  pdfNo: number;
  resetHighlights: () => void;
  // roleA: () => void;
  // roleB: () => void;
  // roleC: () => void;
  // roleD: () => void;
  toggleDocument: () => void;
  backDoc: () => void;
  timing: () => void;
  handleRedact: () => void;
  revokeRedact: () => void;
  deleteSingleHighlight: (id: any) => void;
  loadDoc: (url: any) => void;
}

const updateHash = (highlight: IHighlight) => {
  document.location.hash = `highlight-${highlight.id}`;
};

export function Sidebar({
  highlights,
  redactFlag,
  pdfNo,
  toggleDocument,
  backDoc,
  timing,
  resetHighlights,
  // roleA,
  // roleB,
  // roleC,
  // roleD,
  handleRedact,
  revokeRedact,
  deleteSingleHighlight,
  loadDoc,
}: Props) {
  // const [url, setUrl] = useState('');
  return (
    <div className="sidebar" style={{ width: "25vw" }}>
      <div className="description" style={{ padding: "1rem" }}>
        <h2 style={{ marginBottom: "1rem" }}>Redacting Systems</h2>
        {/* <p style={{ fontSize: "0.7rem" }}>
          <a href="https://github.com/agentcooper/react-pdf-highlighter">
            Open in GitHub
          </a>
        </p> */}

        <p>
          <small>
            To create area highlight hold ⌥ Option key (Alt), then click and
            drag.
          </small>
        </p>
      </div>


      {/* URL functon here */}

      {/* <div className="url">
        <div>Please enter the Url of PDF:</div>
        <input type="text" onChange={(e) => { setUrl(e.target.value) }}></input>
        <button onClick={() => { loadDoc(url) }}>Load</button>
      </div> */}



      {/* <div className="serach__bar">
        <div className="findbar hidden doorHanger" id="findbar">
          <div id="findbarInputContainer">
            <input id="findInput" className="toolbarField" title="Find" placeholder="Find in document…" data-l10n-id="find_input" />
            <div className="splitToolbarButton">
              <button id="findPrevious" className="toolbarButton findPrevious" title="Find the previous occurrence of the phrase" data-l10n-id="find_previous">
                <span data-l10n-id="find_previous_label">Previous</span>
              </button>
              <div className="splitToolbarButtonSeparator"></div>
              <button id="findNext" className="toolbarButton findNext" title="Find the next occurrence of the phrase" data-l10n-id="find_next">
                <span data-l10n-id="find_next_label">Next</span>
              </button>
            </div>
          </div>

          <div id="findbarOptionsOneContainer">
            <input type="checkbox" id="findHighlightAll" className="toolbarField" />
            <label className="toolbarLabel" data-l10n-id="find_highlight">Highlight all</label>
            <input type="checkbox" id="findMatchCase" className="toolbarField" />
            <label className="toolbarLabel" data-l10n-id="find_match_case_label">Match case</label>
          </div>
          <div id="findbarOptionsTwoContainer">
            <input type="checkbox" id="findEntireWord" className="toolbarField" />
            <label className="toolbarLabel" data-l10n-id="find_entire_word_label">Whole words</label>
            <span id="findResultsCount" className="toolbarLabel hidden"></span>
          </div>

          <div id="findbarMessageContainer">
            <span id="findMsg" className="toolbarLabel"></span>
          </div>
        </div>
      </div> */}

      <div className="redact__button">
        {/* <p style={{ fontSize: "1rem" }}>Choose your roles:</p>
        <div style={{ padding: "1rem" }}>
          <button onClick={roleA}>A</button>
          <button onClick={roleB}>B</button>
          <button onClick={roleC}>C</button>
          <button onClick={roleD}>D</button>
        </div> */}

        <p style={{ fontSize: "1rem" }}>Tool Area</p>
        <div style={{ padding: "1rem" }}>
          <button onClick={timing}>Start</button>
        </div>
        <div style={{ padding: "1rem" }}>
          {/* <button onClick={backDoc}>Back</button> */}
          <button onClick={toggleDocument}>Next</button>
        </div>
        <div style={{ padding: "1rem" }}>
          No of pdf: {pdfNo}/20
        </div>
        <div style={{ padding: "1rem" }}>

          <button onClick={handleRedact}>Redact all</button>
          {redactFlag === true ?
            <button onClick={revokeRedact}>Revoke redactions</button> : null
          }
        </div>
        {/* {highlights.length > 0 ? (
          <div style={{ padding: "1rem" }}>
            <button onClick={resetHighlights}>Reset highlights</button>
          </div>
        ) : null} */}
      </div>

      <ul className="sidebar__highlights">
        {highlights.map((highlight, index) => (
          <li
            key={index}
            className="sidebar__highlight"
            onClick={() => {
              updateHash(highlight);
            }}
          >
            <div>
              <strong>
                {highlight.content.text ? (
                  <blockquote style={{ marginTop: "0.5rem" }}>
                    {`${highlight.content.text.slice(0, 90).trim()}…`}
                  </blockquote>
                ) : null}
              </strong>
              {highlight.comment.text}
              {highlight.content.image ? (
                <div
                  className="highlight__image"
                  style={{ marginTop: "0.5rem" }}
                >
                  <img src={highlight.content.image} alt={"Screenshot"} />
                </div>
              ) : null}
            </div>
            <button className="delete__location" onClick={() => { deleteSingleHighlight(highlight.id) }}>delete</button>
            <div className="highlight__location">
              Page {highlight.position.pageNumber}
            </div>
          </li>
        ))}
      </ul>

    </div>
  );
}
