// components/NotificationTabs.jsx
import Button from "../../../../components/Button";

const NotificationTabs = ({ activeTab, setActiveTab, unreadCount }) => {
    const tabs = [
        { id: "all", label: "All Notifications" },
        { id: "unread", label: `Unread (${unreadCount})` }
    ];

    return (
        <div className="mt-4 flex gap-3 bg-white border border-accent-light/50 rounded-3xl w-fit shadow-md">
            {tabs.map((tab) => (
                <Button
                    key={tab.id}
                    className={`border-none !rounded-3xl transition-all duration-300 ${activeTab === tab.id
                        ? "bg-gradient-red border-gradient-red text-light hover:opacity-80 !m-0.5"
                        : "hover:bg-primary-light hover:text-light !m-0.5"
                        } ${tab.id === "unread" && unreadCount === 0 ? "opacity-50 !cursor-not-allowed" : ""
                        }`}
                    onClick={() => setActiveTab(tab.id)}
                    disabled={tab.id === "unread" && unreadCount === 0}
                >
                    {tab.label}
                </Button>
            ))}
        </div>
    );
};

export default NotificationTabs;