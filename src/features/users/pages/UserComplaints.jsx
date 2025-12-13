import { useState } from "react";
import Toggler from "../components/complaints/Toggler";
import SubmitNew from "../components/complaints/SubmitNew";
import MyComplaints from "../components/complaints/MyComplaints";
import MySuggestions from "../components/complaints/MySuggestions";
import Tabs from "../../../components/Tabs";
import { MessageCircleWarning } from "lucide-react";

function UserComplaints() {
  const [content, setContent] = useState("new");

  const myToggler = [
    { id: "new", label: "Submit New" },
    { id: "complaints", label: "My Complaints" },
    { id: "suggestions", label: "My Suggestions" }
  ];

  return (
    <div>
      <header>
        <h1 className="md:text-4xl text-2xl flex items-center gap-3">
          <MessageCircleWarning className="w-8 h-8 text-amber-600" />
          Complaints & Suggestions
        </h1>
        <p className="mt-2 text-gray-700">
          Submit feedback and track your requests
        </p>
      </header>
      <main className="mb-4">
        {/* <Toggler content={content} setContent={setContent} /> */}
        <Tabs
          padding="px-2"
          fontSize="text-sm"
          tabs={myToggler}
          activeTab={content}
          onChange={setContent}
        />
        {content === "new" && <SubmitNew setContent={setContent} />}
        {content === "complaints" && <MyComplaints />}
        {content === "suggestions" && <MySuggestions />}
      </main>
    </div>
  );
}

export default UserComplaints;
