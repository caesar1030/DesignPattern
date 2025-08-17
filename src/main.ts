import Director from "./builder/Director";
import JSONBuilder from "./builder/JSONBuilder";
import StringBuilder from "./builder/PlainTextBuilder";
import Data from "./builder/Data";

// BUILDER startegy + facade + template method
const data = new Data("John", 20);
const stringBuilder = new StringBuilder(data);
const jsonBuilder = new JSONBuilder(data);

const director = new Director(stringBuilder);
console.log(director.build());

const director2 = new Director(jsonBuilder);
console.log(director2.build());
