const generateSlug = (title) => {
  // Removing the special chars from the string
  let slug = title.replace(/[^a-zA-Z ]/g, "");
  // Replacing tabs or double spaces with a single space
  slug = slug.replace(/\s\s+/g, " ");
  slug = slug.split(" ").join("-").toLowerCase();

  return slug;
};

export { generateSlug };
