import * as libxml from "libxmljs";
import * as fs from "fs";
import * as xml2js from "xml2js";

export function parseXml(schema: string, data: string): void {
  const dataParsed = libxml.parseXml(data);
  const schemaParsed = libxml.parseXml(schema);
  const parser = new xml2js.Parser();

  if (dataParsed.validate(schemaParsed)) {
    parser.parseString(data, (err, result) => {
      if (err) {
        console.error(err);
      } else {
        console.log(result.content.checkbox[0].checked);
      }
    });
  } else {
    console.error(dataParsed.validationErrors);
  }
}

const data = fs.readFileSync("./schemas/data.xml", "utf8");
const schema = fs.readFileSync("./schemas/root_schema.xsd", "utf8");

parseXml(schema, data);
