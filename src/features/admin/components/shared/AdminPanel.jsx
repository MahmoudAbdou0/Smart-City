import GlobalPreloader from "../../../../components/GlobalPreloader";
import SearchFilter from "./SearchFilter";

export default function AdminPanel({
    title,
    icon,
    count,
    loading,
    children,
    modal,
    type,
    onSearchChange,
    onStatusChange,
    searchText,
    statusFilter,
}) {

    return (
        <div className="pb-10">
            <div className="bg-white/60 border border-accent-light/20 rounded-lg py-6 px-3 shadow-md">

                {/* Header */}
                <div className="flex flex-col sm:flex-row gap-6 justify-between items-center mb-10 px-3">
                    <h2 className="text-2xl sm:text-3xl flex items-center gap-4">
                        {icon}
                        {title}
                    </h2>

                    <div className="flex flex-col gap-2 items-end justify-center">
                        {typeof count !== "undefined" && (
                            <div className="text-sm text-gray-500">
                                Total {type === "complaints" ? "Complaints" : "Suggestions"}:
                                <span className="font-semibold"> {count}</span>
                            </div>
                        )}

                        <SearchFilter
                            searchText={searchText}
                            onSearchChange={onSearchChange}
                            statusFilter={statusFilter}
                            onStatusChange={onStatusChange}
                        />
                    </div>
                </div>

                {/* Content */}
                {loading ? <GlobalPreloader /> : children}

                {modal}
            </div>
        </div>
    );
}
