import { useEffect, useState } from "react";
import ProfileHeader from "../components/profile/ProfileHeader";
import InfoCard from "../components/profile/InfoCard";
import ChangePassword from "../components/profile/ChangePassword";
import { getMe, changePassword } from "../../../services/apiUser";

function UserProfile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [pwdLoading, setPwdLoading] = useState(false);
  const [pwdMsg, setPwdMsg] = useState("");
  const [pwdServerError, setPwdServerError] = useState("");

  useEffect(() => {
    const fetchMe = async () => {
      setLoading(true);
      setError("");
      try {
        const res = await getMe();
        // API returns { status, data: { ...user } }
        setUser(res?.data || null);
      } catch (e) {
        setError("Failed to load profile");
      } finally {
        setLoading(false);
      }
    };
    fetchMe();
  }, []);

  const handleChangePassword = async ({ oldPassword, newPassword }) => {
    setPwdLoading(true);
    setPwdMsg("");
    try {
      await changePassword({ oldPassword, newPassword });
      setPwdServerError("");
      setPwdMsg("Password updated successfully");
    } catch (e) {
      // Try to detect incorrect current password from server response
      const msg = e?.response?.data?.message || e?.response?.data || e?.message || "Failed to update password";
      if (typeof msg === "string" && msg.toLowerCase().includes("old password")) {
        setPwdServerError("Current password is incorrect");
        setPwdMsg("");
      } else {
        setPwdServerError("");
        setPwdMsg("Failed to update password");
      }
    } finally {
      setPwdLoading(false);
    }
  };

  return (
    <div className="p-4 space-y-4">
      <ProfileHeader />

      {loading ? (
        <section className="bg-white border border-gray-100 rounded-2xl shadow-sm p-5 text-gray-500">
          Loading profile...
        </section>
      ) : error ? (
        <section className="bg-white border border-gray-100 rounded-2xl shadow-sm p-5 text-rose-600">
          {error}
        </section>
      ) : (
        <InfoCard user={user} />
      )}

      <ChangePassword onSubmit={handleChangePassword} loading={pwdLoading} serverError={pwdServerError} />
      {pwdMsg && <div className="text-sm text-center text-gray-600">{pwdMsg}</div>}
    </div>
  );
}

export default UserProfile;
