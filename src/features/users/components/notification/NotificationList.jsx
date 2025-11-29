// components/NotificationList.jsx

import NotificationCard from "./NotificationCard";

const NotificationList = ({
    notifications,
    activeTab,
    onMarkRead
}) => {
    const filteredNotifications = activeTab === "all"
        ? notifications
        : notifications.filter((n) => !n.read);

    if (filteredNotifications.length === 0) {
        return (
            <div className="text-center py-12">
                <div className="text-gray-400 text-6xl mb-4">📭</div>
                <p className="text-gray-500 text-lg">
                    {activeTab === "all"
                        ? "No notifications yet"
                        : "No unread notifications"}
                </p>
                <p className="text-gray-400 text-sm mt-2">
                    {activeTab === "all"
                        ? "You're all caught up!"
                        : "All notifications have been read"}
                </p>
            </div>
        );
    }

    return (
        <div className="space-y-4 mt-6">
            {filteredNotifications.map((notification) => (
                <NotificationCard
                    key={notification.id}
                    notification={notification}
                    onMarkRead={onMarkRead}
                />
            ))}
        </div>
    );
};

export default NotificationList;