// components/NotificationActions.jsx
import { Check, Trash2 } from "lucide-react";
import Button from "../../../../components/Button";

const NotificationActions = ({
    onMarkAllRead,
    onClearAll,
    unreadCount,
    totalCount
}) => {
    const isMarkAllDisabled = unreadCount === 0;
    const isClearAllDisabled = totalCount === 0;

    return (
        <div className="flex flex-wrap gap-3 mt-16">
            <Button
                style="light"
                className={`flex items-center text-sm !py-1  
                    ${isMarkAllDisabled
                        ? "opacity-50 !cursor-not-allowed"
                        : "hover:bg-gray-100"
                    }`}
                onClick={onMarkAllRead}
                disabled={isMarkAllDisabled}
            >
                <Check className="w-4 mr-2" />
                Mark All Read
            </Button>

            <Button
                style="light"
                className={`flex items-center text-sm !py-1 !border-red-400 !text-red-600  
                    ${isClearAllDisabled
                        ? "opacity-50 !cursor-not-allowed"
                        : "hover:!bg-red-100"
                    }`}
                onClick={onClearAll}
                disabled={isClearAllDisabled}
            >
                <Trash2 className="w-4 mr-2" />
                Clear All
            </Button>
        </div>
    );
};

export default NotificationActions;