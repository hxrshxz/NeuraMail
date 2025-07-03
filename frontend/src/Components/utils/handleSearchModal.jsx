export const handleSearchModal = (e) => {
  if (e.key === "Escape") {
    setSearchWindow(false);
  }
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
    e.preventDefault();

    setSearchWindow((prev) => !prev);
  }
};
