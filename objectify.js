// const array = ["lx abe", "ps verb", "ge let him/her be"];

// result = array.reduce(
//   (h, obj) => Object.assign(h, { [obj.key]:'(h[obj.key] || []).concat(obj) },),
//   {},
// );
// console.log(result);

const letterD = [
  { "/lx": "ddaaki", ps: "adverb", ge: "after a while" },

  { "/lx": "ddamu", ps: "verb", ge: "repeat/reply" },

  {
    "/lx": "ddaala",
    ps: "noun",
    ge: "step/ladder/a rise in rank or position",
  },

  {
    "/lx": "ddala",
    ps: "adjective",
    ge: "a word modifying a noun/very/truly/completely/exactly",
  },

  { "/lx": "ddaame", ps: "noun", ge: "will" },

  { "/lx": "ddagala", ps: "noun", ge: "medicine/herb" },

  { "/lx": "ddakiika", ps: "noun", ge: "minute" },

  { "/lx": "ddalu", ps: "noun", ge: "madness/ being crazy" },

  { "/lx": "ddebe", ps: "noun", ge: "gallon/ tin" },

  { "/lx": "ddembe", ps: "noun", ge: "freedom" },

  { "/lx": "ddi", ps: "conjunction", ge: "when" },

  { "/lx": "ddiba", ps: "noun", ge: "skin/hide" },

  { "/lx": "ddibu", ps: "noun", ge: "gap between the teeth" },

  { "/lx": "ddiini", ps: "noun", ge: "religion" },

  { "/lx": "ddya", ps: "noun" },
];

letterD.sort(function (a, b) {
  if (a["/lx"] < b["/lx"]) {
    return -1;
  }
  if (a["/lx"] > b["/lx"]) {
    return 1;
  }
  return 0;
});

console.log(letterD);
