import { SearchIcon } from "lucide-react";

export function SearchInput() {
  // TODO: Add search functionality.
  return (
    <form className="flex w-full max-w-[600px]">
      <input
        type="text"
        name="search"
        id="search"
        className="w-full pl-4 py-2 pr-12 rounded-l-full border focus:outline-none focus:border-blue-500"
        placeholder="Search"
      />
      {/* TODO: Add remove search button. */}
      <button
        type="submit"
        className="px-5 py-2.5 bg-gray-100 border border-l-0 rounded-r-full hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        <SearchIcon className="size-5" />
      </button>
    </form>
  );
}
