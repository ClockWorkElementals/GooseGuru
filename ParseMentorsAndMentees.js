import fs from 'fs';
import parse from 'csv-parse/lib/sync';

function pairObjects(objects) {
    let pairs = [];
    for (let i = 0; i < objects.length; i++) {
        for (let j = i + 1; j < objects.length; j++) {
            let commonValuesCount = Object.keys(objects[i]).filter(key => objects[i][key] === objects[j][key]).length;
            pairs.push({ pair: [i, j], commonValuesCount: commonValuesCount });
        }
    }
    pairs.sort((a, b) => a.commonValuesCount - b.commonValuesCount);
    let finalPairs = [];
    let pairedIndices = new Set();
    while (pairs.length > 0) {
        let currentPair = pairs.find(pair => !pairedIndices.has(pair.pair[0]) && !pairedIndices.has(pair.pair[1]));
        if (!currentPair) {
            break;
        }
        finalPairs.push({ pair: [objects[currentPair.pair[0]], objects[currentPair.pair[1]]], commonValuesCount: currentPair.commonValuesCount });
        pairedIndices.add(currentPair.pair[0]);
        pairedIndices.add(currentPair.pair[1]);
        pairs = pairs.filter(pair => !pairedIndices.has(pair.pair[0]) && !pairedIndices.has(pair.pair[1]));
    }
    return finalPairs;
}


/*
    Given a csv file with the first row acting as a column, parse the csv into a collection of objects.
*/
function parseMentors(path) {
    const data = fs.readFileSync(path);
    const records = parse(data, {
        columns: true,
        skip_empty_lines: true
    });
    return records;
}


const mentors = parseMentors("./data/mentors.csv")

for (let i = 0; i < mentors.length; i++) {
    console.log(mentors[i]);
}
