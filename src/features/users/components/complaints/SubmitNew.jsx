import { motion } from "framer-motion";
import SubmitForm from "./SubmitForm";

const placeHolder = {
  formOne: {
    title: "Brief description of the issue",
    desc: "Provide detailed information about the complaint",
  },
  formTwo: {
    title: "Your suggestion in brief",
    desc: "Explain your suggestion and how it would benefit the community",
  },
};
function SubmitNew({ setContent }) {
  return (
    <div className="flex gap-6 flex-col lg:flex-row overflow-x-hidden">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full"
      >
        <SubmitForm
          msg="Complaint"
          color="primary"
          placeholder={placeHolder.formOne}
          setContent={setContent}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full"
      >
        <SubmitForm
          msg="Suggestion"
          color="accent"
          placeholder={placeHolder.formTwo}
          setContent={setContent}
        />
      </motion.div>
    </div>
  );
}

export default SubmitNew;
