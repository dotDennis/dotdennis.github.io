export function slugify(str) {
  // need a if statement here to allow for try/catch block to function
  if (str) {
    str = str.replace(/^\s+|\s+$/g, ""); // trim white space
    str = str.toLowerCase();
    str = str
      .replace(/[^a-z0-9 -]/g, "") // remove non-alphanumeric
      .replace(/\s+/g, "-") // spaces to hyphens
      .replace(/-+/g, "-"); // remove double hyphens}
  }
  return str;
}
