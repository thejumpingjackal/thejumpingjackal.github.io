// Note: r before a variable denotes that it is using Meapanian Romanization.
const defaultRows = [
    new rowProp(`C0CFE4`, `present`, `pres.<br>tseno`, `tseno`, 0),
    new rowProp(`C0CFE4`, `imperfect`, `imperf.<br>goso-halpo`, `goso-halpo`, 1),
    new rowProp(`C0CFE4`, `continuous`, `cont.<br>yosoisu`, `yosoisu`, 2),
    new rowProp(`C0CFE4`, `perfect`, `perf.<br>goso-tsogi`, `goso-tsogi`, 3),
    new rowProp(`C0CFE4`, `pluperfect`, `pluperf.<br>goso-gigi`, `goso-gigi`, 4),
    new rowProp(`C0CFE4`, `future perfect`, `fut. perf.<br>goso-goro`, `goso-goro`, 5),
    new rowProp(`C0CFE4`, `future`, `fut.<br>emri-paro`, `emri-paro`, 6),
    new rowProp(`C0CFE4`, `future in the past`, `fut. in past<br>emri-goso`, `emri-goso`, 7),
    new rowProp(`C0CFE4`, `plufuture`, `plufut.<br>emri-roro`, `emri-roro`, 8),
    new rowProp(`C0E4C0`, `present`, `pres.<br>tseno`, `tseno`, 9),
    new rowProp(`C0E4C0`, `imperfect`, `imperf.<br>goso-halpo`, `goso-halpo`, 10),
    new rowProp(`C0E4C0`, `continuous`, `cont.<br>yosoisu`, `yosoisu`, 11),
    new rowProp(`C0E4C0`, `perfect`, `perf.<br>goso-tsogi`, `goso-tsogi`, 12),
    new rowProp(`C0E4C0`, `pluperfect`, `pluperf.<br>goso-gigi`, `goso-gigi`, 13),
    new rowProp(`C0E4C0`, `future perfect`, `fut. perf.<br>goso-goro`, `goso-goro`, 14),
    new rowProp(`C0E4C0`, `future`, `fut.<br>emri-paro`, `emri-paro`, 15),
    new rowProp(`C0E4C0`, `future in the past`, `fut. in past<br>emri-goso`, `emri-goso`, 16),
    new rowProp(`C0E4C0`, `plufuture`, `plufut.<br>emri-roro`, `emri-roro`, 17),
    new rowProp(`E4D4C0`, `positive`, `pos.<br>wep-paro`, `wep-paro`, 18),
    new rowProp(`E4D4C0`, `negative yuva`, `neg. (inv.)<br>yuva-paro`, `yuva-paro`, 19),
    new rowProp(`E4D4C0`, `negative ban`, `neg. (ban)<br>bam-paro`, `bam-paro`, 20),
    new rowProp(`E2E4C0`, `infinitives and participles`, ``, ``, 21)
];

const defaultPrefixes = [
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["ku ", "kupsur ", "kupnus ", "kupkon ", "kupthu ", "kupzhak "],
    ["kuba ", "kuspa ", "kumba ", "kuguba ", "kutuba ", "kujba "],
    ["kutitu ", "kustitu ", "kuntitu ", "kuktitu ", "kututu ", "kujitu "],
    ["yo ", "yosur ", "yonus ", "yokon ", "yothu ", "yozhak "],
    ["yogi ", "", "yonogi ", "yokki ", "yotugi ", "yojogi "],
    ["yoro ", "", "yonoro ", "yokoro ", "yoturo ", "yojoro "],
    ["vru ", "", "vrunus ", "vrukon ", "vruthu ", "vruzhak "],
    ["oi o ", "", "vrunggi ", "vrukki ", "vrutugi ", "vruzhgi "],
    ["o vro ", "", "o vnoro ", "o vworo ", "o vzuro ", "o vrozh "],
    ["", "cha", "", "nuo", "", "pia"],
    ["yo", "chayo", "tsa", "nuotsa", "o", "piano"],
    ["ban ", "chaban ", "ban ", "nuoban ", "ban ", "piaban "],
    ["", "", "", "", "", ""]
];

const defaultSuffixes = [
    ["", "sur", "nus", "kon", "thu", "zhal"],
    ["ba", "sba", "mba", "kba", "tuba", "jba"],
    ["titu", "stitu", "ntitu", "ktitu", "tutu", "jitu"],
    ["gi", "sgi", "nggi", "kki", "tugi", "zhgi"],
    ["kup", "", "ngkup", "kkup", "tukup", "shkup"],
    ["gor", "", "nggor", "kkor", "tugor", "zhgor"],
    ["ro", "", "nro", "kro", "turo", "zhro"],
    ["yud", "", "'nyud", "kyud", "tuyud", "zhyud"],
    ["piv", "", "mpiv", "kpiv", "tupiv", "shpiv"],
    ["loi", "loi", "loi", "loi", "loi", "loi"],
    ["loi", "loi", "loi", "loi", "loi", "loi"],
    ["loi", "loi", "loi", "loi", "loi", "loi"],
    ["rit", "rit", "rit", "rit", "rit", "rit"],
    ["rit", "rit", "rit", "rit", "rit", "rit"],
    ["rit", "rit", "rit", "rit", "rit", "rit"],
    ["duro", "—", "duro", "duro", "duro", "duro"],
    ["duro", "—", "duro", "duro", "duro", "duro"],
    ["duro", "—", "duro", "duro", "duro", "duro"],
    ["yo", "yo", "ts", "ts", "o", "o"],
    ["", "", "", "", "", ""],
    ["yo", "yo", "ts", "ts", "o", "o"],
    ["te", "gite", "rote", "loi", "rit", "duro"]
];

const alwaysExceptions = [
    new exception(1, 4),
    new exception(1, 5),
    new exception(1, 6),
    new exception(1, 7),
    new exception(1, 8),
    new exception(1, 13),
    new exception(1, 14),
    new exception(1, 15),
    new exception(1, 16),
    new exception(1, 17)
];

function changeLetter(word) {
    let chars = word.split('');

    chars.push(' ');
    chars.push(' ');

    for (let i = 0; i < chars.length - 2; i++) {
        let c = chars[i];
        let follow = chars[i + 1];
        let followFollow = chars[i + 2];

        switch (c) {
            case 'a':
                if (follow == 'a') {
                    chars[i] = 'ā';
                    chars.splice(i + 1, 1);
                }
                break;
            case 'e':
                if (follow == 'e') {
                    chars[i] = 'ē';
                    chars.splice(i + 1, 1);
                }
                break;
            case 'i':
                if (follow == 'i') {
                    chars[i] = 'ī';
                    chars.splice(i + 1, 1);
                }
                break;
            case 'o':
                if (follow == 'o') {
                    if (followFollow == 'e') {
                        chars[i] = 'ő';
                        chars.splice(i + 1, 2);
                    } else {
                        chars[i] = 'ō';
                        chars.splice(i + 1, 1);
                    }
                } else if (follow == 'e') {
                    chars[i] = 'ö';
                    chars.splice(i + 1, 1);
                }
                break;
            case 'u':
                if (follow == 'u') {
                    if (followFollow == 'e') {
                        chars[i] = 'ű';
                        chars.splice(i + 1, 2);
                    } else {
                        chars[i] = 'ū';
                        chars.splice(i + 1, 1);
                    }
                } else if (follow == 'e') {
                    chars[i] = 'ü';
                    chars.splice(i + 1, 1);
                }
                break;
            case 'y':
                if (follow == 'u') {
                    if (followFollow == 'a' || followFollow == 'e' || followFollow == 'i' || followFollow == 'o') {
                        chars[i] = 'ɥ';
                        chars.splice(i + 1, 1);
                    }
                }
                break;
        }

        if (c == 't') {
            if (follow == 'h') {
                chars[i] = 'θ';
                chars.splice(i + 1, 1);
            } else if (follow == 'y') {
                chars[i] = 'c';
                chars.splice(i + 1, 1);
            } else if (follow == 's') {
                if (followFollow == 'y') {
                    chars[i] = 'ĉ';
                    chars.splice(i + 1, 2);
                } else {
                    chars[i] = 'ć';
                    chars.splice(i + 1, 1);
                }
            } else if (follow == 't') {
                if (followFollow == 'h') {
                    chars[i] = 'θ';
                } else if (followFollow == 'y') {
                    chars[i] = 'c';
                }
            }
        } else if (c == 'd') {
            if (follow == 'h') {
                chars[i] = 'ð';
                chars.splice(i + 1, 1);
            } else if (follow == 'y') {
                chars[i] = 'ɟ';
                chars.splice(i + 1, 1);
            } else if (follow == 'z') {
                if (followFollow == 'y') {
                    chars[i] = 'ẑ';
                    chars.splice(i + 1, 2);
                } else {
                    chars[i] = 'ź';
                    chars.splice(i + 1, 1);
                }
            } else if (follow == 'd') {
                if (followFollow == 'h') {
                    chars[i] = 'ð';
                } else if (followFollow == 'y') {
                    chars[i] = 'ɟ';
                }
            }
        } else if (c == 's') {
            if (follow == 'h') {
                chars[i] = 'ʃ';
                chars.splice(i + 1, 1);
            } else if (follow == 'y') {
                chars[i] = 'ɕ';
                chars.splice(i + 1, 1);
            } else if (follow == 's') {
                if (followFollow == 'h') {
                    chars[i] = 'ʃ';
                } else if (followFollow == 'y') {
                    chars[i] = 'ɕ';
                }
            }
        } else if (c == 'z') {
            if (follow == 'h') {
                chars[i] = 'ʒ';
                chars.splice(i + 1, 1);
            } else if (follow == 'y') {
                chars[i] = 'ʑ';
                chars.splice(i + 1, 1);
            } else if (follow == 'z') {
                if (followFollow == 'h') {
                    chars[i] = 'ʒ';
                } else if (followFollow == 'y') {
                    chars[i] = 'ʑ';
                }
            }
        } else if (c == 'c') {
            if (follow == 'h') {
                chars[i] = 'č';
                chars.splice(i + 1, 1);
            }
        } else if (c == 'j') {
            chars[i] = 'ž';
        } else if (c == 'n') {
            if (follow == 'y') {
                chars[i] = 'ɲ';
                chars.splice(i + 1, 1);
            } else if (follow == 'g') {
                chars[i] = 'ŋ';
                chars.splice(i + 1, 1);
            } else if (follow == 'n') {
                if (followFollow == 'g') {
                    chars[i] = 'ŋ';
                } else if (followFollow == 'y') {
                    chars[i] = 'ɲ';
                }
            }
        } else if (c == 'h') {
            if (follow == 'y') {
                chars[i] = 'ç';
                chars.splice(i + 1, 1);
            } else if (follow == 'h' && followFollow == 'y') {
                chars[i] = 'ç';
            }
        } else if (c == 'l') {
            if (follow == 'y') {
                chars[i] = 'ʎ';
                chars.splice(i + 1, 1);
            } else if (follow == 'l' && followFollow == 'y') {
                chars[i] = 'ʎ';
            }
        } else if (c == 'y') {
            chars[i] = 'j';
        } else if (c == 'k') {
            if (follow == 'h') {
                chars[i] = 'x';
                chars.splice(i + 1, 1);
            }
        } else if (c == 'g') {
            if (follow == 'h') {
                chars[i] = 'ɣ';
                chars.splice(i + 1, 1);
            }
        } else if (c == '\'' || c == '-' || c == '’') {
            chars.splice(i + 1 - 1, 1);
            i--;
        }
    }

    chars.pop();
    chars.pop();

    return chars.join('');
}

function rowProp(color, title, name, mName, num) {
    this.color = color;
    this.title = title;
    this.name = name;
    this.mName = mName;
    this.num = num;
}

rowProp.prototype.getColor = function() {   return this.color;  };
rowProp.prototype.getTitle = function() {   return this.title;  };
rowProp.prototype.getName  = function() {   return this.name;   };
rowProp.prototype.getMName = function() {   return this.mName;  };
rowProp.prototype.getNum   = function() {   return this.num;    };

function exception(c, r, word = "") {
    this.c = c;
    this.r = r;
    this.word = word;
}

exception.prototype.getColumn = function() {    return this.c;      };
exception.prototype.getRow    = function() {    return this.r;      };
exception.prototype.getWord   = function() {    return this.word;   };

function addMoodRow (row, moods) {
    var html = `
        <tr>
            <th style="height:3em; background:#${row.getColor()}">${row.getTitle()}<br><span class="meap">${changeLetter(row.getName())}</span><br>${row.getName()}</th>`;
    if (moods[0]) {html += `<th style="background:#${row.getColor()}">indicative<br><span class="meap">sotwa</span><br>sotwa</th>`;}
    if (moods[1]) {html += `<th style="background:#${row.getColor()}">subjunctive<br><span class="meap">petbaimi</span><br>petbaimi</th>`;}
    if (moods[2]) {html += `<th style="background:#${row.getColor()}">dubitative<br><span class="meap">iðnoti</span><br>idhnoti</th>`;}
    if (moods[3]) {html += `<th style="background:#${row.getColor()}">potential<br><span class="meap">kenene</span><br>kenene</th>`;}
    if (moods[4]) {html += `<th style="background:#${row.getColor()}">presumptative<br><span class="meap">siso'il</span><br>siso'il</th>`;}
    if (moods[5]) {html += `<th style="background:#${row.getColor()}">optative<br><span class="meap">hohsiju</span><br>hohsiyu</th>`;}
    html += `</tr>`;

    return html;
}

function addRow(row, moods, stems, setPrefixes = defaultPrefixes[row.getNum()], setSuffixes = defaultSuffixes[row.getNum()], exceptions = alwaysExceptions, otherForms = false) {
    var html = `<tr>`;

    if (!otherForms) {
        html += `<th style="height:3em; background:#${row.getColor()}"><span title="${row.getTitle()}">${row.getName()}</span><br><span class="meap">${changeLetter(row.getMName())}</span></th>`;
    }

    fillRow:
    for (let i = 0; i < 6; i++) {
        var conj = setPrefixes[i] + stems[i] + setSuffixes[i];

        for (let j = 0; j < exceptions.length; j++) {
            if (row.getNum() == exceptions[j].getRow() && i == exceptions[j].getColumn()) {
                if (exceptions[j].getWord() == "") {
                    html += `<td>—</td>`;
                    continue fillRow;
                } else {
                    conj = exceptions[j].getWord();
                }
            }
        }

        if (moods[i]) {
            html += `<td><span class="meap">${changeLetter(conj)}</span><br>${conj}</td>`;
        }
    }

    html += `</tr>`;

    return html;
}

function addGerundRow(stem, exceptions = alwaysExceptions) {
    var conj = `${stem}buo`;

    var html = `
        <tr>
            <th colspan="5" style="background:#E2E4C0"><span title="gerund">gerund - alapadin - <span class="meap">alapadin</span></span></th>`;

    for (let j = 0; j < exceptions.length; j++) {
        if (exceptions[j].getRow() == 22) {
            conj = exceptions[j].getWord();
        }
    }

    html += `<td><span class="meap">${conj}</span><br>${conj}</td>
        </tr>`;

    return html;
}

/*
Specify:
- stem
- which moods?
*/

/*
main function will specify what tenses are not included
mini functions will specify what tenses are included
*/

function initializeStemArray(presStem, perfStem = presStem, futStem = presStem) {
    const stemArr = new Array(23).fill("");

    for (let i = 0; i <= 2; i++) { stemArr[i] = presStem; }
    for (let i = 3; i <= 5; i++) { stemArr[i] = perfStem; }
    for (let i = 6; i <= 8; i++) { stemArr[i] = futStem; }
    for (let i = 9; i <= 11; i++) { stemArr[i] = presStem; }
    for (let i = 12; i <= 14; i++) { stemArr[i] = perfStem; }
    for (let i = 15; i <= 17; i++) { stemArr[i] = futStem; }
    for (let i = 18; i <= 20; i++) { stemArr[i] = presStem; }

    stemArr[21] = "";
    stemArr[22] = presStem;

    return stemArr;
}

function generateConjugationTable(stemArray) {
    const uStem = stemArray[0];
    stemArray[0] = ['a', 'e', 'i', 'o', 'u'].includes(stemArray[0].charAt(stemArray[0].length - 1)) ? stemArray[0] : stemArray[0] + stemArray[0].charAt(stemArray[0].length - 2);

    // Function to generate the conjugation table HTML
    var stems = new Array(23);
    if (stemArray.length == 1) {
        stems = initializeStemArray(stemArray[0]);
        stemArray = new Array(3).fill(stemArray[0]);
    } else if (stemArray.length == 3) {
        stems = initializeStemArray(stemArray[0], stemArray[1], stemArray[2]);
    }

    const includeMood = [true, true, true, true, true, true];
    let stemArr = new Array(6);

    var verbTable = `
    <table style="background:#F0F0F0; border-collapse:separate; border-spacing:2px; width:100%">
        <tbody>
            <tr>
                <th style="height:2em" title="${uStem}"><span class="meap">${changeLetter(uStem)}</span><br>${uStem}</th>
                <th colspan="3" title="verb forms">verb forms</th>
                <th colspan="3" title="avne-zotalak"><span class="meap">avnezotalak</span><br>avne-zotalak</th>
            </tr>`;

    verbTable += addMoodRow(new rowProp(`C0CFE4`, `simple verb forms`, `avne-zotalak anzek`, ``, -1), includeMood); // REPLACE boolean array

    // REPLACE boolean array, stem array, suffix array, and exceptions
    for (let i = 0; i <= 8; i++) {
        if (i == 0) {
            stemArr = [uStem, stems[0], stems[0], stems[0], stems[0], stems[0]];
        } else {
            stemArr = new Array(6).fill(stems[i]);
        }
        verbTable += addRow(defaultRows[i], includeMood, stemArr);
    }

    verbTable += addMoodRow(new rowProp(`C0E4C0`, `compound verb forms`, `avne-zotalak itsomaka`, ``, -1), includeMood); // REPLACE boolean array

    // REPLACE boolean array, stem array, suffix array, and exceptions
    for (let i = 9; i <= 17; i++) {
        stemArr = new Array(6).fill(stems[i]);
        verbTable += addRow(defaultRows[i], includeMood, stemArr);
    }

    verbTable += `
        <tr>
            <th style="height:3em; background:#E4D4C0"><span title="imperative">imperative<br><span class="meap">doitan</span><br>doitan</span></th>
            <th style="background:#E4D4C0"><s><span class="meap">het</span><br>het<br><span class="meap">ajusu</span><br>ayusu</s></th>
            <th style="background:#E4D4C0">tashkoto<br><span class="meap">taʃkoto</span></th>
            <th style="background:#E4D4C0"><s><span class="meap">imit</span><br>imit<br><span class="meap">kit</span><br>kit</s></th>
            <th style="background:#E4D4C0"><span class="meap">tasejoko</span><br>taseyoko</th>
            <th style="background:#E4D4C0"><s><span class="meap">hetek</span><br>hetek</s></th>
            <th style="background:#E4D4C0"><span class="meap">hin</span><br>hin<br><span class="meap">taʃkotoko</span><br>tashkotoko</th>
        </tr>`;

    for (let i = 18; i <= 20; i++) {
        stemArr = new Array(6).fill(stems[i]);
        verbTable += addRow(defaultRows[i], includeMood, stemArr);
    }

    verbTable += `
        <tr>
            <th rowspan="4" style="height:6em; background:#E2E4C0">other forms<br><span class="meap">zotalak liwaka</span><br>zotalak liwaka</th>
            <th colspan="3" style="background:#E2E4C0"><span title="infinitive">infinitive - te onoi - <span class="meap">te onoi</span></span></th>
            <th colspan="3" style="background:#E2E4C0"><span title="participle">participle - yurajai - <span class="meap">juražai</span></span></th>
        </tr>
        <tr>
            <th style="background:#E2E4C0"><span title="present">pres. - tseno<br><span class="meap">tseno</span></span></th>
            <th style="background:#E2E4C0"><span title="perfect">perf. - goso<br><span class="meap">goso</span></span></th>
            <th style="background:#E2E4C0"><span title="future">fut. - emri<br><span class="meap">emri</span></span></th>
            <th style="background:#E2E4C0"><span title="present">pres. - tseno<br><span class="meap">tseno</span></span></th>
            <th style="background:#E2E4C0"><span title="perfect">perf. - goso<br><span class="meap">goso</span></span></th>
            <th style="background:#E2E4C0"><span title="future">fut. - emri<br><span class="meap">emri</span></span></th>
        </tr>
    `;

    verbTable += addRow(defaultRows[21], includeMood, [stemArray[0], stemArray[1], stemArray[2], stemArray[0], stemArray[1], stemArray[2]], undefined, undefined, undefined, true);

    verbTable += addGerundRow(stemArray[0]);
    
    var tableHtml = verbTable;
    return tableHtml;
}

function displayConjugationTables() {
    // Function to display conjugation tables for all verbs
    var verbElements = document.getElementsByClassName("conjugation-verb");
    for (var i = 0; i < verbElements.length; i++) {
        var stem = verbElements[i].getAttribute("data-stem");
        const stemArray = stem.split(',');
        const commaMatches = stem.match(new RegExp(",", "gi"));
        const commaNumber = commaMatches ? commaMatches.length : 0;

        var tableHtml = generateConjugationTable(stemArray);
        var tableContainer = verbElements[i].nextElementSibling;
        tableContainer.innerHTML = tableHtml;
    }
}

// Call the displayConjugationTables() function when the page loads
window.onload = function() {
    displayConjugationTables();
};