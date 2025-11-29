import { motion } from "framer-motion";
import ComplaintCard from "./ComplaintCard";
import Filter from "./Filter";
import { useAllComplaints } from "../../hooks/useAllComplaints";
import GlobalPreloader from "../../../../components/GlobalPreloader";

function MyComplaints() {
  const { complaints, isLoading } = useAllComplaints();
  console.log(complaints);

  if (isLoading) return <GlobalPreloader />;

  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="rounded-xl bg-white p-8 border border-primary-light/50 shadow-md">
        <Filter />
        <section className="flex flex-col gap-4">
          <ComplaintCard />
          <ComplaintCard />
          <ComplaintCard />
        </section>
      </div>
    </motion.div>
  );
}

export default MyComplaints;
