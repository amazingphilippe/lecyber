import Cite from "citation-js";

import references from "../public/references.bib";

const items = new Cite(references).get({ type: "json" });

export default items;
