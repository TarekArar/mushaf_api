const fs = require("fs");
const csv = require("csvtojson");

const csvFilePath = "./mots_coran.csv";

// const data = fs.readFileSync(file, { encoding: "utf8", flag: "r" });

async function convertCSVTOJSON() {
  const jsonArray = await csv().fromFile(csvFilePath);
  const jsonArrayWithId = jsonArray.map((el,idx) => {
      const newEl = {id: idx+1, ...el}
      return newEl
    })
    console.log(jsonArrayWithId);
  fs.writeFile("arr3.json", JSON.stringify(jsonArrayWithId), (err) => {
    if (err) {
      console.error(err);
      return;
    }
    //file written successfully
  });
}
convertCSVTOJSON();

function jsonObjectToArray(data) {
  var result = [];
  for (const [key, value] of Object.entries(data)) {
    const newItem = {
      id: key,
      ...value,
    };
    //console.logk(newItem);
    result.push(newItem);
  }
  return result;
}

//console.log(jsonObjectToArray(JSON.parse(data)));

// fs.writeFile(
//   "arr2.json",
//   JSON.stringify(jsonObjectToArray(JSON.parse(data))),
//   (err) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     //file written successfully
//   }
// );
