import React, { Component } from "react";

import {
  PdfLoader,
  PdfHighlighter,
  Tip,
  Highlight,
  Popup,
  AreaHighlight,
} from "./react-pdf-highlighter";

import type { IHighlight, NewHighlight } from "./react-pdf-highlighter";
import { testHighlightsBC as _testHighlights } from "./test-highlights";
import { Spinner } from "./Spinner";
import { Sidebar } from "./Sidebar";

import "./style/App.css";

const testHighlights: Record<string, Array<IHighlight>> = _testHighlights;

interface State {
  url: string;
  urlList: Array<any>;
  urlIdx: number;
  highlights: Array<IHighlight>;
  redactFlag: boolean;
  pdfNo: number;
  nextFlag: boolean;
  lastTime: any;
}

const getNextId = () => String(Math.random()).slice(2);

const parseIdFromHash = () =>
  document.location.hash.slice("#highlight-".length);

const resetHash = () => {
  document.location.hash = "";
};

const HighlightPopup = ({
  comment,
}: {
  comment: {
    text: string
    // ; emoji: string 
  };
}) =>
  comment.text ? (
    <div className="Highlight__popup">
      {/* {comment.emoji}  */}
      {comment.text}
    </div>
  ) : null;

const PRIMARY_PDF_URL = "http://47.103.125.114:8082/pdf/11.pdf";
// const SECONDARY_PDF_URL = "https://arxiv.org/pdf/1604.02480.pdf";
// const SECONDARY_PDF_URL = "https://parliament.act.gov.au/__data/assets/pdf_file/0006/434346/Guide-to-writing-an-explanatory-statement.pdf";
// const SECONDARY_PDF_URL = "../../tests/test1.pdf"

const urlLen = 20

const searchParams = new URLSearchParams(document.location.search);

const initialUrl = searchParams.get("url") || PRIMARY_PDF_URL;

const answerList = new Array

const timeList = new Array

class App extends Component<{}, State> {
  state = {
    urlList: [
      "http://47.103.125.114:8082/pdf/11.pdf",
      "http://47.103.125.114:8082/pdf/12.pdf",
      "http://47.103.125.114:8082/pdf/13.pdf",
      "http://47.103.125.114:8082/pdf/14.pdf",
      "http://47.103.125.114:8082/pdf/15.pdf",
      "http://47.103.125.114:8082/pdf/16.pdf",
      "http://47.103.125.114:8082/pdf/17.pdf",
      "http://47.103.125.114:8082/pdf/18.pdf",
      "http://47.103.125.114:8082/pdf/19.pdf",
      "http://47.103.125.114:8082/pdf/20.pdf",
      "http://47.103.125.114:8082/pdf/1.pdf",
      "http://47.103.125.114:8082/pdf/2.pdf",
      "http://47.103.125.114:8082/pdf/3.pdf",
      "http://47.103.125.114:8082/pdf/4.pdf",
      "http://47.103.125.114:8082/pdf/5.pdf",
      "http://47.103.125.114:8082/pdf/6.pdf",
      "http://47.103.125.114:8082/pdf/7.pdf",
      "http://47.103.125.114:8082/pdf/8.pdf",
      "http://47.103.125.114:8082/pdf/9.pdf",
      "http://47.103.125.114:8082/pdf/10.pdf",
    ],
    url: 'http://47.103.125.114:8082/pdf/11.pdf',
    urlIdx: 0,
    highlights: testHighlights[initialUrl]
      ? [...testHighlights[initialUrl]]
      : [],
    redactFlag: false,
    pdfNo: 1,
    nextFlag: false,
    lastTime: 0,
  };

  resetHighlights = () => {
    this.setState({
      highlights: [],
    });
  };

  // roleA = () => {
  //   this.setState({
  //     urlList: [
  //       "http://47.103.125.114:8082/pdf/1.pdf",
  //       "http://47.103.125.114:8082/pdf/2.pdf",
  //       "http://47.103.125.114:8082/pdf/3.pdf",
  //       "http://47.103.125.114:8082/pdf/4.pdf",
  //       "http://47.103.125.114:8082/pdf/5.pdf",
  //       "http://47.103.125.114:8082/pdf/6.pdf",
  //       "http://47.103.125.114:8082/pdf/7.pdf",
  //       "http://47.103.125.114:8082/pdf/8.pdf",
  //       "http://47.103.125.114:8082/pdf/9.pdf",
  //       "http://47.103.125.114:8082/pdf/10.pdf",
  //       "http://47.103.125.114:8082/pdf/11.pdf",
  //       "http://47.103.125.114:8082/pdf/12.pdf",
  //       "http://47.103.125.114:8082/pdf/13.pdf",
  //       "http://47.103.125.114:8082/pdf/14.pdf",
  //       "http://47.103.125.114:8082/pdf/15.pdf",
  //       "http://47.103.125.114:8082/pdf/16.pdf",
  //       "http://47.103.125.114:8082/pdf/17.pdf",
  //       "http://47.103.125.114:8082/pdf/18.pdf",
  //       "http://47.103.125.114:8082/pdf/19.pdf",
  //       "http://47.103.125.114:8082/pdf/20.pdf",
  //       "https://arxiv.org/pdf/1708.08021.pdf"
  //     ],
  //     url: this.state.urlList[0],
  //   })
  // }

  // roleB = () => {
  //   this.setState({
  //     urlList: [
  //       "http://47.103.125.114:8082/pdf/11.pdf",
  //       "http://47.103.125.114:8082/pdf/12.pdf",
  //       "http://47.103.125.114:8082/pdf/13.pdf",
  //       "http://47.103.125.114:8082/pdf/14.pdf",
  //       "http://47.103.125.114:8082/pdf/15.pdf",
  //       "http://47.103.125.114:8082/pdf/16.pdf",
  //       "http://47.103.125.114:8082/pdf/17.pdf",
  //       "http://47.103.125.114:8082/pdf/18.pdf",
  //       "http://47.103.125.114:8082/pdf/19.pdf",
  //       "http://47.103.125.114:8082/pdf/20.pdf",
  //       "http://47.103.125.114:8082/pdf/1.pdf",
  //       "http://47.103.125.114:8082/pdf/2.pdf",
  //       "http://47.103.125.114:8082/pdf/3.pdf",
  //       "http://47.103.125.114:8082/pdf/4.pdf",
  //       "http://47.103.125.114:8082/pdf/5.pdf",
  //       "http://47.103.125.114:8082/pdf/6.pdf",
  //       "http://47.103.125.114:8082/pdf/7.pdf",
  //       "http://47.103.125.114:8082/pdf/8.pdf",
  //       "http://47.103.125.114:8082/pdf/9.pdf",
  //       "http://47.103.125.114:8082/pdf/10.pdf",
  //     ],
  //     url: this.state.urlList[0],
  //   })
  // }

  // roleC = () => {
  //   this.setState({
  //     urlList: [
  //       "http://47.103.125.114:8082/pdf/1.pdf",
  //       "http://47.103.125.114:8082/pdf/2.pdf",
  //       "http://47.103.125.114:8082/pdf/3.pdf",
  //       "http://47.103.125.114:8082/pdf/4.pdf",
  //       "http://47.103.125.114:8082/pdf/5.pdf",
  //       "http://47.103.125.114:8082/pdf/6.pdf",
  //       "http://47.103.125.114:8082/pdf/7.pdf",
  //       "http://47.103.125.114:8082/pdf/8.pdf",
  //       "http://47.103.125.114:8082/pdf/9.pdf",
  //       "http://47.103.125.114:8082/pdf/10.pdf",
  //       "http://47.103.125.114:8082/pdf/11.pdf",
  //       "http://47.103.125.114:8082/pdf/12.pdf",
  //       "http://47.103.125.114:8082/pdf/13.pdf",
  //       "http://47.103.125.114:8082/pdf/14.pdf",
  //       "http://47.103.125.114:8082/pdf/15.pdf",
  //       "http://47.103.125.114:8082/pdf/16.pdf",
  //       "http://47.103.125.114:8082/pdf/17.pdf",
  //       "http://47.103.125.114:8082/pdf/18.pdf",
  //       "http://47.103.125.114:8082/pdf/19.pdf",
  //       "http://47.103.125.114:8082/pdf/20.pdf",
  //     ]
  //   })
  // }

  // roleD = () => {
  //   this.setState({
  //     urlList: [
  //       "http://47.103.125.114:8082/pdf/11.pdf",
  //       "http://47.103.125.114:8082/pdf/12.pdf",
  //       "http://47.103.125.114:8082/pdf/13.pdf",
  //       "http://47.103.125.114:8082/pdf/14.pdf",
  //       "http://47.103.125.114:8082/pdf/15.pdf",
  //       "http://47.103.125.114:8082/pdf/16.pdf",
  //       "http://47.103.125.114:8082/pdf/17.pdf",
  //       "http://47.103.125.114:8082/pdf/18.pdf",
  //       "http://47.103.125.114:8082/pdf/19.pdf",
  //       "http://47.103.125.114:8082/pdf/20.pdf",
  //       "http://47.103.125.114:8082/pdf/1.pdf",
  //       "http://47.103.125.114:8082/pdf/2.pdf",
  //       "http://47.103.125.114:8082/pdf/3.pdf",
  //       "http://47.103.125.114:8082/pdf/4.pdf",
  //       "http://47.103.125.114:8082/pdf/5.pdf",
  //       "http://47.103.125.114:8082/pdf/6.pdf",
  //       "http://47.103.125.114:8082/pdf/7.pdf",
  //       "http://47.103.125.114:8082/pdf/8.pdf",
  //       "http://47.103.125.114:8082/pdf/9.pdf",
  //       "http://47.103.125.114:8082/pdf/10.pdf",
  //     ]
  //   })
  // }

  loadDoc = (newUrl) => {
    this.setState({
      url: newUrl,
      highlights: [],
    })
  }

  deleteSingleHighlight = (id) => {
    // console.log(id)
    let newHighlight = this.state.highlights
    for (let i = 0; i < newHighlight.length; i++) {
      if (newHighlight[i].id == id) newHighlight.splice(i, 1)
    }
    // console.log(newHighlight)
    this.setState({
      highlights: newHighlight
    })
  }

  toggleDocument = () => {
    if (this.state.urlIdx + 1 < urlLen) {
      this.setState({ urlIdx: this.state.urlIdx + 1 })
      const newUrl = this.state.urlList[this.state.urlIdx + 1]
      this.setState({
        url: newUrl,
        highlights: testHighlights[newUrl] ? [...testHighlights[newUrl]] : [],
        pdfNo: this.state.pdfNo + 1,
      });
      console.log(this.state.urlIdx + 1)
      console.log(this.state.highlights)
      answerList[this.state.urlIdx] = this.state.highlights
      this.setState({ nextFlag: true })
      var pdfTime: any = (Date.parse(new Date() as any)) / 1000
      // console.log(this.state.lastTime)
      // console.log(pdfTime)
      // console.log((pdfTime - (this.state.lastTime ? this.state.lastTime : 0)))
      var min = Math.floor(((pdfTime - (this.state.lastTime ? this.state.lastTime : 0)) * 1000) % (24 * 3600 * 1000) % (3600 * 1000) / (60 * 1000))
      var sec = Math.round(((pdfTime - (this.state.lastTime ? this.state.lastTime : 0)) * 1000) % (24 * 3600 * 1000) % (3600 * 1000) % (60 * 1000) / 1000)
      console.log(min + ':' + sec)
      timeList[this.state.urlIdx] = min + ':' + sec
      this.setState({ lastTime: (Date.parse(new Date() as any)) / 1000 })
    }
    else if (this.state.urlIdx + 1 == urlLen) {
      console.log(this.state.highlights)
      answerList[this.state.urlIdx] = this.state.highlights
      this.setState({ nextFlag: true })
      var pdfTime: any = (Date.parse(new Date() as any)) / 1000
      // console.log(this.state.lastTime)
      // console.log(pdfTime)
      // console.log((pdfTime - (this.state.lastTime ? this.state.lastTime : 0)))
      var min = Math.floor(((pdfTime - (this.state.lastTime ? this.state.lastTime : 0)) * 1000) % (24 * 3600 * 1000) % (3600 * 1000) / (60 * 1000))
      var sec = Math.round(((pdfTime - (this.state.lastTime ? this.state.lastTime : 0)) * 1000) % (24 * 3600 * 1000) % (3600 * 1000) % (60 * 1000) / 1000)
      console.log(min + ':' + sec)
      timeList[this.state.urlIdx] = min + ':' + sec
      console.log(answerList)
      console.log(timeList)
      this.setState({ urlIdx: this.state.urlIdx + 1 })
    }
    else if (this.state.urlIdx + 1 == urlLen + 1) {
      window.alert('The experiment is end, thanks for taking part, we appreciate your contribution! :)')
    }
    else {
      this.setState({ urlIdx: this.state.urlIdx })
      const newUrl = this.state.urlList[this.state.urlIdx]
      this.setState({
        url: newUrl,
        highlights: testHighlights[newUrl] ? [...testHighlights[newUrl]] : [],
        pdfNo: this.state.pdfNo
      });
    }
  };

  backDoc = () => {
    if (this.state.urlIdx - 1 >= 0) {
      this.setState({ urlIdx: this.state.urlIdx - 1 })
      const newUrl = this.state.urlList[this.state.urlIdx - 1]
      // this.state.url === PRIMARY_PDF_URL ? SECONDARY_PDF_URL : PRIMARY_PDF_URL;

      this.setState({
        url: newUrl,
        highlights: testHighlights[newUrl] ? [...testHighlights[newUrl]] : [],
        pdfNo: this.state.pdfNo - 1,
      });
      this.setState({ nextFlag: true })
      console.log(this.state.highlights)
      var pdfTime: any = (Date.parse(new Date() as any)) / 1000
      // console.log(this.state.lastTime)
      // console.log(pdfTime)
      // console.log((pdfTime - (this.state.lastTime ? this.state.lastTime : 0)))
      var min = Math.floor(((pdfTime - (this.state.lastTime ? this.state.lastTime : 0)) * 1000) % (24 * 3600 * 1000) % (3600 * 1000) / (60 * 1000))
      var sec = Math.round(((pdfTime - (this.state.lastTime ? this.state.lastTime : 0)) * 1000) % (24 * 3600 * 1000) % (3600 * 1000) % (60 * 1000) / 1000)
      console.log(min + ':' + sec)
    }
    else {
      this.setState({ urlIdx: this.state.urlIdx })
      const newUrl = this.state.urlList[this.state.urlIdx]
      // this.state.url === PRIMARY_PDF_URL ? SECONDARY_PDF_URL : PRIMARY_PDF_URL;

      this.setState({
        url: newUrl,
        highlights: testHighlights[newUrl] ? [...testHighlights[newUrl]] : [],
        pdfNo: this.state.pdfNo,
      });
    }
  }

  timing = () => {
    // this.setState({nextFlag: false})
    // if (this.state.nextFlag == false){
    //   let n: any = 0
    //   let timer = setInterval(function () {
    //     n++;
    //     var min: any = n / 60
    //     var sec: any = n % 60
    //     return(parseInt(min) + ':' + sec)
    //   }, 1000 / 60);
    // }
    window.alert('Experiment start!  Good Luck :)')
    this.setState({ lastTime: (Date.parse(new Date() as any)) / 1000 })
  }

  handleRedact = () => {
    this.setState({ redactFlag: true });
  }

  revokeRedact = () => {
    this.setState({ redactFlag: false })
  }

  // handleSingleHighlight = (singleList) => {
  //   this.setState({ highlights: singleList })
  // }

  scrollViewerTo = (highlight: any) => { };

  scrollToHighlightFromHash = () => {
    const highlight = this.getHighlightById(parseIdFromHash());

    if (highlight) {
      this.scrollViewerTo(highlight);
    }
  };

  componentDidMount() {
    window.addEventListener(
      "hashchange",
      this.scrollToHighlightFromHash,
      false
    );
  }

  getHighlightById(id: string) {
    const { highlights } = this.state;

    return highlights.find((highlight) => highlight.id === id);
  }

  addHighlight(highlight: NewHighlight) {
    const { highlights } = this.state;

    // console.log("Saving highlight", highlight);

    this.setState({
      highlights: [{ ...highlight, id: getNextId() }, ...highlights],
    });
  }

  updateHighlight(highlightId: string, position: Object, content: Object) {
    // console.log("Updating highlight", highlightId, position, content);

    this.setState({
      highlights: this.state.highlights.map((h) => {
        const {
          id,
          position: originalPosition,
          content: originalContent,
          ...rest
        } = h;
        return id === highlightId
          ? {
            id,
            position: { ...originalPosition, ...position },
            content: { ...originalContent, ...content },
            ...rest,
          }
          : h;
      }),
    });
  }

  render() {
    const { url, highlights, redactFlag, pdfNo } = this.state;

    return (
      <div className="App" style={{ display: "flex", height: "100vh" }}>
        <Sidebar
          highlights={highlights}
          redactFlag={redactFlag}
          pdfNo={pdfNo}
          resetHighlights={this.resetHighlights}
          // roleA={this.roleA}
          // roleB={this.roleB}
          // roleC={this.roleC}
          // roleD={this.roleD}
          toggleDocument={this.toggleDocument}
          backDoc={this.backDoc}
          timing={this.timing}
          handleRedact={this.handleRedact}
          revokeRedact={this.revokeRedact}
          deleteSingleHighlight={this.deleteSingleHighlight}
          loadDoc={this.loadDoc}
        />
        <div
          style={{
            height: "100vh",
            width: "75vw",
            position: "relative",
          }}
        >
          <PdfLoader url={url} beforeLoad={<Spinner />}>
            {(pdfDocument) => (
              <PdfHighlighter
                pdfDocument={pdfDocument}
                enableAreaSelection={(event) => event.altKey}
                onScrollChange={resetHash}
                // pdfScaleValue="page-width"
                scrollRef={(scrollTo) => {
                  this.scrollViewerTo = scrollTo;

                  this.scrollToHighlightFromHash();
                }}
                handleSingleHighlight={(singleList) => {
                  let newHighlightList = new Array;
                  newHighlightList = highlights
                  // console.log('new')
                  // console.log(singleList)
                  // console.log(newHighlightList)
                  // console.log(newHighlightList[0].position.boundingRect.x2)
                  // console.log(singleList.position.boundingRect.x1)
                  for (let j = 0; j < newHighlightList.length - 1; j++) {
                    // console.log(newHighlightList[j].position.boundingRect.x1)
                    // console.log(singleList.position.boundingRect.x1 == newHighlightList[j].position.boundingRect.x1)
                    if (singleList.position.boundingRect.x1 == newHighlightList[j].position.boundingRect.x1) {
                      if (singleList.position.boundingRect.x2 == newHighlightList[j].position.boundingRect.x2) {
                        if (singleList.position.boundingRect.y1 == newHighlightList[j].position.boundingRect.y1) {
                          if (singleList.position.boundingRect.y2 == newHighlightList[j].position.boundingRect.y2) {
                            return
                          }
                        }
                      }
                    }
                  }
                  newHighlightList.unshift(singleList)
                  // if (flag == 0) {
                  //   newHighlightList.unshift(singleList)
                  // }
                  this.setState({
                    highlights: newHighlightList,
                  })
                  this.setState({ highlights: [...highlights] })
                }}
                // get the position here !!!important
                onSelectionFinished={(
                  position,
                  content,
                  hideTipAndSelection,
                  transformSelection
                ) => (
                  <Tip
                    onOpen={transformSelection}
                    onConfirm={(comment) => {
                      this.addHighlight({ content, position, comment });

                      hideTipAndSelection();
                    }}
                  />
                )}
                highlightTransform={(
                  highlight,
                  index,
                  setTip,
                  hideTip,
                  viewportToScaled,
                  screenshot,
                  isScrolledTo
                ) => {
                  const isTextHighlight = !Boolean(
                    highlight.content && highlight.content.image
                  );

                  const component = isTextHighlight ? (
                    <Highlight
                      isScrolledTo={isScrolledTo}
                      position={highlight.position}
                      comment={highlight.comment}
                      flag={redactFlag}
                    />
                  ) : (
                    <AreaHighlight
                      isScrolledTo={isScrolledTo}
                      highlight={highlight}
                      onChange={(boundingRect) => {
                        this.updateHighlight(
                          highlight.id,
                          { boundingRect: viewportToScaled(boundingRect) },
                          { image: screenshot(boundingRect) }
                        );
                      }}
                      flag={redactFlag}
                    />
                  );

                  return (
                    <Popup
                      popupContent={<HighlightPopup {...highlight} />}
                      onMouseOver={(popupContent) =>
                        setTip(highlight, (highlight) => popupContent)
                      }
                      onMouseOut={hideTip}
                      key={index}
                      children={component}
                    />
                  );
                }}
                highlights={highlights}
              />
            )}
          </PdfLoader>
        </div>
      </div>
    );
  }
}

export default App;
