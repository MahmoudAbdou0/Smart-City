import { motion } from "framer-motion";
import SuggestionCard from "./SuggestionCard";
import { useAllSuggestions } from "../../hooks/useAllSuggestions";
import GlobalPreloader from "../../../../components/GlobalPreloader";

function MySuggestions() {
  const { suggestions, isLoading } = useAllSuggestions();
  console.log(suggestions);

  if (isLoading) return <GlobalPreloader />;

  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="flex flex-col gap-4 rounded-xl bg-white p-8 border border-primary-light/50 shadow-md">
        <SuggestionCard />
        <SuggestionCard />
        <SuggestionCard />
      </div>
    </motion.div>
  );
}

export default MySuggestions;
