import { useEffect, useMemo, useState } from "react";
import StatCard from "../components/utilities/StatCard";
import BillsSection from "../components/utilities/BillsSection";
import AnalysisSection from "../components/utilities/AnalysisSection";
import IssueCTA from "../components/utilities/IssueCTA";
import { useAuth } from "../../../context/AuthContext";
import { getMyBills, payBill } from "../../../services/apiBills";
import GlobalPreloader from "../../../components/GlobalPreloader";
import { Droplets } from "lucide-react";

const STAT_CARDS = [
  { title: "Total This Month", value: 850, delta: "-12%", trend: "down" },
  { title: "Average Daily", value: 28, delta: "+5%", trend: "up" },
  { title: "Pending Bills", value: 1, delta: "-2", trend: "down" },
];

// Dummy data if API returns empty array
const DUMMY_BILLS = [
  {
    id: "ELEC-2024-10",
    name: "Electricity",
    amount: 450,
    due: "Oct 30, 2024",
    status: "Pending",
    icon: "⚡",
  },
  {
    id: "WATER-2024-10",
    name: "Water",
    amount: 180,
    due: "Nov 5, 2024",
    status: "Paid",
    icon: "💧",
  },
  {
    id: "GAS-2024-10",
    name: "Gas",
    amount: 220,
    due: "Nov 10, 2024",
    status: "Paid",
    icon: "🔥",
  },
];

const CHART_TABS = [
  { key: "electricity", label: "Electricity", icon: "⚡" },
  { key: "water", label: "Water", icon: "💧" },
  { key: "gas", label: "Gas", icon: "🔥" },
];

const DEMO_SERIES = {
  electricity: {
    months: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
    usage: [420, 350, 500, 600, 520, 460, 440],
    cost: [380, 330, 470, 520, 550, 430, 400],
  },
  water: {
    months: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
    usage: [22, 21, 25, 24, 26, 23, 22],
    cost: [120, 110, 135, 140, 150, 125, 118],
  },
  gas: {
    months: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
    usage: [30, 28, 34, 33, 35, 30, 29],
    cost: [210, 190, 230, 240, 250, 220, 205],
  },
};

function Utilities() {
  const { user, token } = useAuth();

  const [activeTab, setActiveTab] = useState("electricity");
  const [isPaying, setIsPaying] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [bills, setBills] = useState([]);

  const chart = DEMO_SERIES[activeTab];

  useEffect(() => {
    const fetchBills = async () => {
      if (!user?.id || !token) return; // wait for auth
      setLoading(true);
      setError("");
      try {
        const data = await getMyBills(user.id);
        // API returns array; if empty, use dummy fallback
        if (Array.isArray(data) && data.length > 0) {
          setBills(
            data.map((b) => ({
              id: b.id,
              name: b.type,
              amount: b.amount,
              // Map date
              due: new Date(b.issueDate).toLocaleDateString(undefined, {
                month: "short",
                day: "numeric",
                year: "numeric",
              }),
              status: b.isPaid ? "Paid" : "Pending",
              icon: b.type?.toLowerCase().includes("water")
                ? "💧"
                : b.type?.toLowerCase().includes("gas")
                  ? "🔥"
                  : "⚡",
            }))
          );
        } else {
          setBills(DUMMY_BILLS);
        }
      } catch (e) {
        setError("Failed to fetch bills");
        setBills(DUMMY_BILLS); // graceful fallback
      } finally {
        setLoading(false);
      }
    };

    fetchBills();
  }, [user?.id, token]);

  const handlePay = async (bill) => {
    if (!bill?.id) return;
    setIsPaying(true);
    try {
      await payBill(bill.id);
      // Refresh list after successful payment
      if (user?.id) {
        const data = await getMyBills(user.id);
        if (Array.isArray(data) && data.length > 0) {
          setBills(
            data.map((b) => ({
              id: b.id,
              name: b.type,
              amount: b.amount,
              due: new Date(b.issueDate).toLocaleDateString(undefined, {
                month: "short",
                day: "numeric",
                year: "numeric",
              }),
              status: b.isPaid ? "Paid" : "Pending",
              icon: b.type?.toLowerCase().includes("water")
                ? "💧"
                : b.type?.toLowerCase().includes("gas")
                  ? "🔥"
                  : "⚡",
            }))
          );
        } else {
          setBills(DUMMY_BILLS);
        }
      }
    } catch (e) {
      setError("Payment failed");
    } finally {
      setIsPaying(false);
    }
  };

  return (
    <>
      <div className="p-4 space-y-4">
        <div>
          <h1 className="md:text-4xl text-2xl flex items-center gap-3">
            <Droplets className="w-8 h-8 text-amber-600" />
            Smart Utilities
          </h1>

          <p className="text-gray-500 mt-1">Monitor consumption and manage your utility bills</p>
        </div>

        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
          {STAT_CARDS.map((c) => (
            <StatCard key={c.title} {...c} />
          ))}
        </div>

        {/* Bills */}
        {loading ? (
          <GlobalPreloader />
        ) : (
          <BillsSection bills={bills} onPay={handlePay} />
        )}
        {error && (
          <div className="text-sm text-rose-600">{error}</div>
        )}

        <AnalysisSection
          chartTabs={CHART_TABS}
          activeTab={activeTab}
          onChangeTab={setActiveTab}
          chart={chart}
        />

        <IssueCTA
          loading={isPaying}
          onClick={() => (window.location.href = "/dashboard/complaints")}
        />
      </div>
    </>
  );
}

export default Utilities;
