import { useEffect, useState } from "react";
import ComplaintsTable from "../components/complaints/ComplaintsTable";
import ComplaintModal from "../components/complaints/ComplaintModal";
import { MessageSquareWarning } from "lucide-react";
import GlobalPreloader from "../../../components/GlobalPreloader";

const AdminComplaints = () => {

  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedComplaint, setSelectedComplaint] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // بيانات تجريبية (سيتم استبدالها بالـ API)
  const demoComplaints = [
    {
      id: 1,
      title: "إصلاح إنارة الشارع",
      description: "الإنارة في شارع المدينة معطلة منذ أسبوع مما يسبب مشاكل للمارة ليلاً",
      location: "شارع المدينة - حي النور",
      imageUrl: "https://images.unsplash.com/photo-1517400508447-f8dd5186e3f0?w=400",
      status: "Pending",
      citizenId: "20304020304050"
    },
    {
      id: 2,
      title: "مشكلة في الصرف الصحي",
      description: "انسداد في مجاري الصرف الصحي في المنطقة السكنية مما يسبب روائح كريهة",
      location: "حي الأندلس - شارع السلام",
      imageUrl: "https://images.unsplash.com/photo-1581093458791-8a6b22bb90e7?w=400",
      status: "In Progress",
      date: "2023-10-14",
      citizenId: "20304020304051"
    },
    {
      id: 3,
      title: "حفر في الطريق",
      description: "وجود حفر كبيرة في الطريق الرئيسي تشكل خطراً على المركبات",
      location: "الطريق الدائري - مخرج 5",
      imageUrl: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400",
      status: "Resolved",
      date: "2023-10-10",
      citizenId: "20304020304052"
    },
    {
      id: 4,
      title: "نفايات متراكمة",
      description: "تراكم النفايات في الحاويات المخصصة لأكثر من 3 أيام",
      location: "حي الزهور - مقابل المسجد",
      imageUrl: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=400",
      status: "Pending",
      date: "2023-10-12",
      citizenId: "20304020304053"
    }
  ];
  // محاكاة جلب البيانات من API
  const fetchComplaints = async () => {
    setLoading(true);
    try {
      // TODO: استبدال هذا الجزء بالـ API الحقيقي عند توافره
      // const response = await fetch('http://smartcity.tryasp.net/api/complaints');
      // const data = await response.json();

      // محاكاة تأخير الشبكة
      await new Promise(resolve => setTimeout(resolve, 400));

      // استخدام البيانات التجريبية مؤقتاً
      setComplaints(demoComplaints);
    } catch (error) {
      console.error('Error fetching complaints:', error);
    } finally {
      setLoading(false);
    }
  };

  // دالة لتحديث حالة الشكوى
  const updateComplaintStatus = async (complaintId, newStatus) => {
    try {
      // TODO: Replace with actual API call
      // await fetch(`http://smartcity.tryasp.net/api/complaints/${complaintId}`, {
      //   method: 'PUT',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ status: newStatus })
      // });

      // Update local state temporarily
      setComplaints(prev => prev.map(comp =>
        comp.id === complaintId ? { ...comp, status: newStatus } : comp
      ));

      if (selectedComplaint?.id === complaintId) {
        setSelectedComplaint(prev => ({ ...prev, status: newStatus }));
      }
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const deleteComplaint = async (complaintId) => {
    if (window.confirm('Are you sure you want to delete this complaint?')) {
      try {
        setComplaints(prev => prev.filter(comp => comp.id !== complaintId));
        if (selectedComplaint?.id === complaintId) {
          closeModal();
        }
      } catch (error) {
        console.error('Error deleting complaint:', error);
      }
    }
  };

  const openComplaintDetails = (complaint) => {
    setSelectedComplaint(complaint);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedComplaint(null);
  };

  useEffect(() => {
    fetchComplaints();
  }, []);

  return (
    <div className='py-10'>
      <div className="bg-white/60 border border-accent-light/20 rounded-lg p-6 shadow-md">
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl flex items-center gap-4">
            <MessageSquareWarning className="w-8 h-8 text-yellow-600" />
            Complaints Management
          </h2>
          <div className="text-sm text-gray-500">
            Total Complaints: <span className="font-semibold">{complaints.length}</span>
          </div>
        </div>

        {/* Content */}
        {loading ? (
          <GlobalPreloader />
        ) : (
          <ComplaintsTable
            complaints={complaints}
            onViewDetails={openComplaintDetails}
            onDeleteComplaint={deleteComplaint}
            onUpdateStatus={updateComplaintStatus}
          />
        )}

        {/* Modal */}
        <ComplaintModal
          isOpen={isModalOpen}
          complaint={selectedComplaint}
          onClose={closeModal}
          onUpdateStatus={updateComplaintStatus}
        />
      </div>
    </div>
  );
}

export default AdminComplaints