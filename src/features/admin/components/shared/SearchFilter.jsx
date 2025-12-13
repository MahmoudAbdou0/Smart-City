
// SearchFilter.jsx
export default function SearchFilter({ searchText, onSearchChange, statusFilter, onStatusChange }) {
    return (
        <div className="flex sm:flex-row md:flex-col lg:flex-row gap-2 items-end">

            {/* Search Input */}
            <input
                type="text"
                value={searchText}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search..."
                className="p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary w-full md:w-48"
            />

            {/* Status Filter */}
            <select
                value={statusFilter}
                onChange={(e) => onStatusChange(e.target.value)}
                className="p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary w-full md:w-48"
            >
                <option value="">All Statuses</option>
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Resolved">Resolved</option>
                <option value="Rejected">Rejected</option>
            </select>
        </div>
    );
}
