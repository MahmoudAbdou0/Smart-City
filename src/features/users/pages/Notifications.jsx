// Notifications.jsx
import { useEffect, useState } from "react";
import NotificationHeader from "../components/notification/NotificationHeader";
import NotificationActions from "../components/notification/NotificationActions";
import NotificationTabs from "../components/notification/NotificationTabs";
import NotificationList from "../components/notification/NotificationList";
import GlobalPreloader from "../../../components/GlobalPreloader";
import { useAuth } from "../../../context/AuthContext";
import api from "../../../services/axiosInterceptors";

const Notifications = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [loading, setLoading] = useState(false);
  // Demo data
  // const [notifications, setNotifications] = useState([
  //   {
  //     id: 1,
  //     title: 'Bill Payment Due Soon',
  //     message: 'Your electricity bill of EGP 450 is due on Oct 30, 2024',
  //     time: '2 hours ago',
  //     read: false,
  //     color: 'rgb(172, 65, 67)',
  //   },
  //   {
  //     id: 2,
  //     title: 'Complaint Status Updated',
  //     message: 'Your complaint CMP-2024-10249 is now in progress',
  //     time: '5 hours ago',
  //     read: false,
  //     color: 'rgb(34, 197, 94)',
  //   },
  //   {
  //     id: 3,
  //     title: 'System Maintenance Scheduled',
  //     message: 'Platform will undergo maintenance on Nov 1, 2024 from 2-4 AM',
  //     time: '1 day ago',
  //     read: true,
  //     color: 'rgb(59, 130, 246)',
  //   },
  //   {
  //     id: 4,
  //     title: 'Profile Incomplete',
  //     message: 'Complete your profile to access all features',
  //     time: '2 days ago',
  //     read: true,
  //     color: 'rgb(209, 169, 99)',
  //   },
  //   {
  //     id: 5,
  //     title: 'Payment Successful',
  //     message: 'Water bill payment of EGP 180 was successful',
  //     time: '3 days ago',
  //     read: true,
  //     color: 'rgb(34, 197, 94)',
  //   },
  //   {
  //     id: 6,
  //     title: 'New Feature Available',
  //     message: 'Check out our new smart meter integration feature',
  //     time: '5 days ago',
  //     read: true,
  //     color: 'rgb(59, 130, 246)',
  //   },
  // ]);
  const [notifications, setNotifications] = useState([]);
  const { user, token } = useAuth();


  const fetchNotifications = async () => {
    console.log('User ID:', user?.id);

    if (!user?.id) {
      console.warn('❌ User ID not available');
      return;
    }

    setLoading(true);
    try {
      const url = `/api/Notification/my/${user.id}`;

      const response = await api.get(url);
      console.log('📦 Response data:', response.data);

      const data = response.data;
      setNotifications(data);

    } catch (error) {
      console.error('❌ Error fetching notifications:', error);
    } finally {
      setLoading(false);
      console.log('🏁 Loading finished');
    }
  };

  useEffect(() => {
    console.log('User in useEffect:', user);
    fetchNotifications();
  }, [user?.id]);

  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    const count = notifications.filter(n => !n.read).length;
    setUnreadCount(count);
  }, [notifications]);

  const markAsRead = (id) => {
    setNotifications(prev =>
      prev.map(n => n.id === id ? { ...n, read: true } : n)
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  const clearAll = () => {
    setNotifications([]);
  };

  const handleMarkAllRead = () => {
    markAllAsRead();
    setActiveTab("all");
  };

  const handleClearAll = () => {
    clearAll();
    setActiveTab("all");
  };
  return (
    <div className="lg:px-40">

      {/* Header */}
      <NotificationHeader />

      {/* Action Buttons */}
      <NotificationActions
        onMarkAllRead={handleMarkAllRead}
        onClearAll={handleClearAll}
        unreadCount={unreadCount}
        totalCount={notifications.length}
      />

      {/* Tabs */}
      <NotificationTabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        unreadCount={unreadCount}
      />

      {/* Notification List */}
      {loading ? (
        <GlobalPreloader />
      ) : (
        <NotificationList
          notifications={notifications}
          activeTab={activeTab}
          onMarkRead={markAsRead}
        />
      )}
    </div>


  )
}

export default Notifications