const fs = require("fs");

const arr = [
  "./dist/cjs/guacamole-common.js",
  "./dist/esm/guacamole-common.js",
];

arr.forEach((t) => {
  replaceFile(t);
});
function replaceFile(p) {
  const res = fs.readFileSync(p, "utf-8");
  const content = res.replaceAll(`var Guacamole = Guacamole || {};`, "");
  fs.writeFileSync(
    p,
    `
  var Guacamole = Guacamole || {};
  ${content}
`
  );
}
