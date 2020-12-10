import Cite from "citation-js";

import references from "./references.bib";

//Cite will read and parse the bibtex file... somehow idk
const all = new Cite(references);

//Just grab the array. actually CSL JSON at this point
const items = all.get({ type: "json" });

export default items;
