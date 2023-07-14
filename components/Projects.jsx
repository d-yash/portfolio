import { useState } from "react";
import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const Projects = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section
      id="projects"
      className="max-w-containerSmall mx-auto py-10 lgl:py-24"
    >
      <SectionTitle title="Projects" titleNo="03" />
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.5}} className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <ProjectCard
              title="Cine Sathi"
              desc="A Machine Learning based Movie Recommendation System. It recommends movies based on the user&apos;s input and the movies will be recommended based on pre generated tokens containing genres, cast, director, etc. TMDB-5000 movies dataset (which contains mostly hollywood) is used in the project."
              listItem={["ML", "Pandas", "Numpy", "Streamlit"]}
              gitlink="https://github.com/d-yash/Movie-Recommendation"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <ProjectCard
              title="Portfolio"
              desc="A personal portfolio website for showcasing my skills and projects. Details about my work experience and contact details are also included. Web development project."
              listItem={["NextJS 13", "Tailwind CSS", "Framer"]}
              gitlink="https://github.com/d-yash/portfolio_website"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <ProjectCard
              title="Sales Analysis"
              desc="Goal of this project was to find meaningful insights by identifying trends and patterns from demo dataset of Diwali Sales of Online retail store. This information can be used by retailers to adapt their marketing tactics and target their customers better."
              listItem={["Python ", "Matplotlib ", "Seaborn"]}
              gitlink="https://github.com/d-yash/Diwali_sales-analysis"
            />
          </motion.div>


          {isExpanded && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <ProjectCard
                  title="Sales Analysis"
                  desc="Created MS-Excel dashboard for Vrinda store Sales data. Created Annual report and tried to find some insights which can be used to target relevant customers."
                  listItem={["Microsoft-Excel"]}
                  gitlink="https://github.com/d-yash/Vrinda_Store_sale_analysis"
                />
              </motion.div>
            </>
          )}
        </motion.div>
      <div className="mt-12 flex items-center justify-center">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
        >
          {isExpanded && "Show Less"}
          {!isExpanded && "Show More"}
        </button>
      </div>
    </section>
  );
};

export default Projects;