const fs2 = require("fs");

abstract class DocumentElements {
  abstract render(): string;
}

class TextElement extends DocumentElements {
  private text: string;
  constructor(text: string) {
    super();
    this.text = text;
  }
  render() {
    return this.text;
  }
}

class ImageElement extends DocumentElements {
  private path: string;
  constructor(path: string) {
    super();
    this.path = path;
  }
  render() {
    return `Image: ${this.path} \n`;
  }
}

class NewLineElement extends DocumentElements {
  render() {
    return `\n`;
  }
}

class TabSpaceElement extends DocumentElements {
  render() {
    return `\t`;
  }
}

class Doc {
  private elements: DocumentElements[] = [];

  addElement(el: DocumentElements): void {
    this.elements.push(el);
  }

  render(): string {
    let result: string = "";
    for (const el of this.elements) {
      result += el.render();
    }
    return result;
  }
}

abstract class Persistence {
  abstract save(data: string): void;
}

class SaveToFile extends Persistence {
  save(data: string): void {
    try {
      const filePath2 = "./document.txt";
      fs2.writeFileSync(filePath2, data);
    } catch (error) {
      console.log("Error:Unable to open file for writing");
    }
  }
}

class saveToDB extends Persistence {
  save(data: string): void {
    console.log(`Writing data to DB`);
  }
}

class DocumentEditor2 {
  private doc: Doc;
  private db: Persistence;
  private renderredDoc: string = "";

  constructor(docs: Doc, dbs: Persistence) {
    this.doc = docs;
    this.db = dbs;
  }

  addText(data: string): void {
    this.doc.addElement(new TextElement(data));
  }

  addImage(path: string): void {
    this.doc.addElement(new ImageElement(path));
  }

  addNewLine(): void {
    this.doc.addElement(new NewLineElement());
  }

  addTabElement(): void {
    this.doc.addElement(new TabSpaceElement());
  }

  renderDocumet(): string {
    if (!this.renderredDoc.length) {
      this.renderredDoc = this.doc.render();
    }
    return this.renderredDoc;
  }

  saveDoc(): void {
    this.db.save(this.renderDocumet());
  }
}

const document2 = new Doc();
const persistence2 = new SaveToFile();

const decEditor = new DocumentEditor2(document2, persistence2);

decEditor.addText("Hello, world!");
decEditor.addNewLine();
decEditor.addText("This is a real-world document decEditor sample.");
decEditor.addNewLine();
decEditor.addTabElement();
decEditor.addText("Indented text after a tab space.");
decEditor.addNewLine();
decEditor.addImage("picture.jpg");

console.log(`editor : ${decEditor.renderDocumet()}`);

decEditor.saveDoc();
