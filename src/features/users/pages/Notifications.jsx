// Notifications.jsx
import NotificationHeader from "../components/notification/NotificationHeader";
import NotificationTabs from "../components/notification/NotificationTabs";
import NotificationActions from "../components/notification/NotificationActions";
import NotificationList from "../components/notification/NotificationList";
import GlobalPreloader from "../../../components/GlobalPreloader";
import useNotifications from "../hooks/useNotifications";

const Notifications = () => {
  const {
    notifications,
    unreadCount,
    loading,
    activeTab,
    setActiveTab,
    markAllRead,
    handleClearAll,
  } = useNotifications();

  return (
    <>
      <NotificationHeader />

      <div className="flex justify-between flex-col md:flex-row  items-center my-4">
        <NotificationTabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          unreadCount={unreadCount}
        />

        <NotificationActions
          unreadCount={unreadCount}
          totalCount={notifications.length}
          onMarkAllRead={markAllRead}
          onClearAll={handleClearAll}
        />
      </div>

      {loading ? (
        <GlobalPreloader />
      ) : (
        <NotificationList
          notifications={notifications}
          activeTab={activeTab}
        />
      )}
    </>
  );
};

export default Notifications;
