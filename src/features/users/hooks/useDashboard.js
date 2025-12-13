// useDashboardStats.js
import { useState, useEffect } from "react";
import api from "../../../services/axiosInterceptors";

export default function useDashboardStats(citizenId) {
    const [stats, setStats] = useState({
        complaints: { count: 0 },
        bills: { count: 0 },
        notifications: { count: 0 },
        suggestions: { count: 0 },
    });

    const [loading, setLoading] = useState(true);

    const fetchStats = async () => {
        try {
            setLoading(true);

            // 1) Complaints
            const complaintsRes = await api.get(`/api/complaints/my`);

            // 2) Bills
            const unpaidBills = 0; // أو احسبه لو فعلت استدعاء البيلز

            // 3) Notifications
            const notiRes = await api.get(`/api/Notification/my/${citizenId}`);

            // 4) 
            const suggestionsRes = await api.get(`/api/suggestions/my`);

            setStats({
                complaints: { count: complaintsRes.data.length },
                bills: { count: unpaidBills },
                notifications: { count: notiRes.data.length },
                suggestions: { count: suggestionsRes.data.length },
            });
        } catch (err) {
            console.error("Dashboard stats error:", err);
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        fetchStats();
    }, [citizenId]);

    return { stats, loading };
}
