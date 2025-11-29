import { MessageSquareIcon } from "lucide-react";
import FormInput from "./FormInput";
import Button from "../../../../components/Button";
import { useState } from "react";
import { toast } from "react-toastify";
import { useCreateSuggestion } from "../../hooks/useCreateSuggestion";
import { useCreateComplaint } from "../../hooks/useCreateComplaint";

function SubmitForm({
  msg,
  color,
  placeholder: { title: titlePL, desc: descPL },
  setContent,
}) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const { mutate: addSuggestion, isLoading } = useCreateSuggestion();
  const { mutate: addComplaint, isLoading: isCreating } = useCreateComplaint();

  const loading = isLoading || isCreating;

  async function handleSubmit(e) {
    e.preventDefault();
    if (msg === "Suggestion") {
      if (!title || !desc) {
        toast.error("All fields must be completed before submitting.");
        return;
      }
      try {
        const data = { title, description: desc };
        console.log(data);
        addSuggestion(data);
        // setContent("suggestions");
      } catch (err) {
        toast.error(err.message);
      }
    } else {
      if (!title || !desc) {
        toast.error("All Field Required");
        return;
      }
    }
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full bg-white border border-primary-light/50 shadow p-6 rounded-2xl"
    >
      <header className="flex items-center mb-6 gap-3">
        <MessageSquareIcon className={` text-2xl text-${color}`} />{" "}
        <span className={` text-2xl `}>New {msg}s</span>
      </header>
      <FormInput
        label="Title"
        name="title"
        type="text"
        placeholder={titlePL}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <FormInput
        label="Description"
        name="description"
        type="textarea"
        placeholder={descPL}
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      {/* إضافة location */}
      {/* <FormInput
        label="Location"
        name="location"
        type="text"
        placeholder="Enter location"
      /> */}

      {/* إضافة image */}
      {/* <FormInput label="Image" name="image" type="file" accept="image/*" /> */}
      <Button type="submit" style="gradient" disabled={loading}>
        {loading ? "Submitting..." : `Submit ${msg}`}
      </Button>
    </form>
  );
}

export default SubmitForm;
