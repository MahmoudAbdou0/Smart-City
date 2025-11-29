// components/NotificationHeader.jsx
import { Bell } from "lucide-react";

const NotificationHeader = () => {
    return (
        <div className="mt-10">
            <div className="flex items-center justify-between mb-2">
                <h1 className="text-3xl  flex items-center gap-3">
                    <Bell className="h-8 w-8 sm:h-10 sm:w-10 text-yellow-600" />
                    Notifications
                </h1>
            </div>
            <p className="text-gray-600">Stay updated with your account activity</p>
        </div>
    );
};

export default NotificationHeader;