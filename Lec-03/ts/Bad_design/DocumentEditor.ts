declare var require: any;
const fs = require("fs");

class DocumentEditor {
  private elements: string[] = [];
  private rederedDocument: string = "";

  addText(text: string): void {
    this.elements.push(text);
  }

  addImage(path: string): void {
    this.elements.push(path);
  }

  renderDoc(): string {
    if (!this.rederedDocument.length) {
      let result: string = "";
      for (const element of this.elements) {
        if (
          element.length > 4 &&
          (element.substring(element.length - 4) == ".jpg" ||
            element.substring(element.length - 4) == ".png")
        ) {
          result += `Image: ${element} \n`;
        } else {
          result += `${element} \n`;
        }
      }
      return result;
    } else {
      return this.rederedDocument;
    }
  }

  saveToFile(): void {
    const filePath = "./document.txt";
    const doc = this.renderDoc();
    fs.writeFileSync(filePath, doc);
  }
}

const editor = new DocumentEditor();
editor.addText("Hello,World!");
editor.addImage("picture.jpg");
editor.addText("This is a document editor.");

console.log(editor.renderDoc());

editor.saveToFile();
