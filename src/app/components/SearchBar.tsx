import { FC } from "react";

interface SearchBarProps {
    onSearch: (query: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ onSearch }) => {
    return (
        <div className="relative">
            <input
                type="text"
                placeholder="Find a drink..."
                onChange={(e) => onSearch(e.target.value)}
                className="w-full p-3 pl-10 text-sm text-gray-700 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
            />
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-3 top-3 h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-4.35-4.35M16 10a6 6 0 11-12 0 6 6 0 0112 0z"
                />
            </svg>
        </div>
    );
};

// const SearchBar: FC<SearchBarProps> = ({ onSearch }) => {
//     return (
//         <input
//             type="text"
//             placeholder="Find a drink"
//             onChange={(e) => onSearch(e.target.value)}
//             className="search-bar"
//         />
//     );
// };

export default SearchBar;