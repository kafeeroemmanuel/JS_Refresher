const wordList = [
  {
    lx: "laadiyo",
    ps: "noun",
    ge: "radio",
  },

  {
    lx: "langa",
    ps: "verb",
    ge: "advertise/announce",
  },

  {
    lx: "langi",
    ps: "noun",
    ge: "paint",
  },

  {
    lx: "linnyo",
    ps: "noun",
    ge: "tooth",
  },

  {
    lx: "litonnya",
    ps: "verb",
    ge: "it leaks",
  },

  {
    lx: "loole",
    ps: "noun",
    ge: "lorry",
  },

  {
    lx: "lubyamila",
    ps: "noun",
    ge: "pneumonia",
  },

  {
    lx: "ludda",
    ps: "noun",
    ge: "direction/side",
  },

  {
    lx: "lufula",
    ps: "noun",
    ge: "slaughter house",
  },

  {
    lx: "luggi",
    ps: "noun",
    ge: "door",
  },

  {
    lx: "luggya",
    ps: "noun",
    ge: "courtyard/compound",
  },

  {
    lx: "luga",
    ps: "noun",
    ge: "cane",
  },

  { lx: "lujjuliro", ps: "noun", ge: "serving place" },

  { lx: "lukujukujju", ps: "adjective", ge: "trickery to take advantage of" },
  { lx: "lukuŋŋaana", ps: "noun", ge: "meeting/gathering/assembly" },

  { lx: "lumonde", ps: "noun", ge: "sweet potato" },

  { lx: "lumu", ps: "noun", ge: "one/once" },

  { lx: "lunaku", ps: "noun", ge: "day/date" },

  { lx: "Lunkupe", ps: "adjective", ge: "very poor" },

  { lx: "Lusaniya", ps: ",noun", ge: "flat pan/food tray" },

  { lx: "lusuku", ps: "noun", ge: "garden of banana plantation" },

  { lx: "lwaggulo", ps: "noun", ge: "afternoon/evening" },

  { lx: "lwaki", ps: "noun", ge: "why/what for" },

  { lx: "Lyaffe", ps: "pronoun", ge: "it is ours" },

  { lx: "lyange", ps: "pronoun", ge: "it is mine" },
];

wordList.sort(function (a, b) {
  if (a.lx.toLocaleUpperCase < b.lx.toLocaleUpperCase) {
    return -1;
  }
  if (a.lx.toLocaleUpperCase > b.lx.toLocaleUpperCase) {
    return 1;
  }
  return 0;
});

console.log(wordList);
