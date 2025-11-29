import { useState } from "react";
import Toggler from "../components/complaints/Toggler";
import SubmitNew from "../components/complaints/SubmitNew";
import MyComplaints from "../components/complaints/MyComplaints";
import MySuggestions from "../components/complaints/MySuggestions";

function UserComplaints() {
  const [content, setContent] = useState("new");
  return (
    <div>
      <header>
        <h1 className="text-4xl ">Complaints & Suggestions</h1>
        <p className="mt-2 text-gray-700">
          Submit feedback and track your requests
        </p>
      </header>
      <main className="mb-4">
        <Toggler content={content} setContent={setContent} />
        {content === "new" && <SubmitNew setContent={setContent} />}
        {content === "complaints" && <MyComplaints />}
        {content === "suggestions" && <MySuggestions />}
      </main>
    </div>
  );
}

export default UserComplaints;
