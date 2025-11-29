// components/NotificationCard.jsx

import { useState } from "react";

const NotificationCard = ({ notification, onMarkRead }) => {
    const [isRead, setIsRead] = useState(notification.read);

    const handleMarkRead = () => {
        if (!isRead) {
            setIsRead(true);
            onMarkRead(notification.id);
        }
    };

    return (
        <div
            className={`p-4 border shadow-sm rounded-lg smooth-transition cursor-pointer ${isRead
                ? "bg-white border-gray-200"
                : "bg-yellow-50 border-yellow-200 shadow-sm"
                } hover:shadow-md`}
            onClick={handleMarkRead}
        >
            <div className="flex items-start gap-3">
                {/* Notification Indicator */}
                <div
                    className="w-3 h-3 rounded-full mt-1.5 flex-shrink-0"
                    style={{ backgroundColor: notification.color }}
                />

                {/* Content */}
                <div className="flex-1">
                    <div className="flex justify-between items-start">
                        <h3 className={`font-medium ${isRead ? "text-gray-700" : "text-gray-900"}`}>
                            {notification.title}
                        </h3>
                        {!isRead && (
                            <span className="inline-block w-2 h-2 bg-red-500 rounded-full flex-shrink-0 mt-1.5" />
                        )}
                    </div>
                    <p className="text-gray-600 mt-1 text-sm">{notification.message}</p>
                    <p className="text-gray-400 text-xs mt-2">{notification.time}</p>
                </div>
            </div>
        </div>
    );
};

export default NotificationCard;