import { MessageSquareIcon } from "lucide-react";
import FormInput from "./FormInput";
import Button from "../../../../components/Button";
import { useState } from "react";
import { toast } from "react-toastify";
import { useCreateSuggestion } from "../../hooks/useCreateSuggestion";
import { useCreateComplaint } from "../../hooks/useCreateComplaint";
import ImageInput from "./ImageInput";
import { useAuth } from "../../../../context/AuthContext";

function SubmitForm({
  msg,
  color,
  placeholder: { title: titlePL, desc: descPL },
  setContent,
}) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");

  const { user } = useAuth();
  const { mutate: addSuggestion, isLoading } = useCreateSuggestion();
  const { mutate: addComplaint, isLoading: isCreating } = useCreateComplaint();

  const loading = isLoading || isCreating;

  function handleImageChange(e) {
    const file = e.target.files[0];
    if (!file) return;

    setImage(file);
    setPreview(URL.createObjectURL(file));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (msg === "Suggestion") {
      if (!title || !desc) {
        toast.error("All fields must be completed before submitting.");
        return;
      }

      const data = { citizenId: user?.id, title, description: desc };
      addSuggestion(data);
      setContent("suggestions");
    } else {
      if (!title || !desc || !location || !image) {
        toast.error("All Field Required");
        return;
      }

      const data = {
        title,
        description: desc,
        location,
        image,
      };

      addComplaint(data);
      setContent("complaints");
    }
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full bg-white border border-primary-light/50 shadow p-4 md:p-6 rounded-2xl"
    >
      <header className="flex items-center mb-6 gap-2 md:gap-3">
        <MessageSquareIcon className={` text-xl md:text-2xl text-${color}`} />{" "}
        <span className={` text-lg md:text-2xl font-semibold md:font-normal`}>
          New {msg}s
        </span>
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
      {msg === "Complaint" && (
        <FormInput
          label="Location"
          name="location"
          type="text"
          placeholder="Enter location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      )}
      {/* إضافة image */}
      {msg === "Complaint" && (
        <ImageInput
          label="Image"
          name="image"
          onChange={handleImageChange}
          preview={preview}
        />
      )}

      <Button type="submit" style="gradient" disabled={loading}>
        {loading ? "Submitting..." : `Submit ${msg}`}
      </Button>
    </form>
  );
}

export default SubmitForm;
