"use strict";

function partialUpdate(data){

    if(data.applicants) {
        delete data.applicants;
    }

    const setCols = Object.keys(data).map((key, idx) => `${key} = $${idx + 1}`)

    return {
            setCols: setCols.join(", "),
            setVals: Object.values(data)
    };
}

module.exports = { partialUpdate };