import React from 'react';
import EmailEditor from 'react-email-editor'
import HTMLtoJSX from 'htmltojsx'
import AwesomeComponent from './demo'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
class Editor extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            designs: [],
            loadJson: '',
            editor: false
        }
    }

    saveDesign = () => {
        this.editor.saveDesign(design => {
          console.log('saveDesign', design)
          alert("Design JSON has been logged in your developer console.")
        })
      }

    // onLoad = () => {
    //     console.log("this.state.loadJson",this.state.loadJson)
      
    //         const json = this.state.loadJson /* DESIGN JSON GOES HERE */
    //         this.editor.loadDesign(json)
       
    //   }

    onLoad = () => {
        // console.log("this.editor this.editor" , this.editor)
        if (this.editor !== null) {
          this.editor.loadDesign (this.state.loadJson);
        } else {
          setTimeout (() => this.editor.loadDesign (this.state.loadJson), 3000);
        }

    }

  exportHtml = () => {
      const {designs} = this.state
    this.editor.exportHtml(data => {
      const { design, html } = data
      console.log('exportHtml', html , "json json  json json", this.editor)
      var converter = new HTMLtoJSX({
        createClass: false,
        outputClassName: 'AwesomeComponent'
      });
      var output = converter.convert(html);
      console.log("output outputoutput output output output output",ReactHtmlParser(output))
    var des = {
        html: html,
        jsx: output,
        json: design
    }
    designs.push(des)
      this.setState({
          designs,
          editor: true
      })
    })
  }

render() {
  return (
    <div className="App" >

      <div>
        <button onClick={this.exportHtml}>Convert to Jsx</button>
      </div>

      <div>
        <button onClick={this.saveDesign}>Save to Jsx</button>
      </div>

     {!this.state.editor && <EmailEditor
        ref={editor => this.editor = editor}
        onLoad={this.onLoad}
      />}



        {this.state.editor && 
        <div>
      {this.state.designs.length >= 1   && 
                this.state.designs.map((value, index) => {
                    return(
                        <div>
                            <button onClick={() => {this.setState({loadJson: value.json, editor: false})}}>Edit</button>
                            <div> 
                            { ReactHtmlParser(value.html) }
                            </div>
                        </div>
                    )
                })
           
        }
        </div>
        }

    </div>
  );
}
}

export default Editor;
