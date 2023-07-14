import React from 'react'
import { motion } from 'framer-motion';
import { RxDoubleArrowRight } from 'react-icons/rx';

const Cognizant = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="w-full"
        >
            <h3 className='flex gap-1 font-medium text- font-titleFont text-xl'>AI programmer<span className="text-textGreen tracking-wider"> @Cognizant</span>
            </h3>
            <p className="text-base flex gap-2 text-textDark">June 2023</p>
            <ul className='gap-3 mt-6 flex flex-col'>
                <li className="text-[18px] flex gap-2 text-textDark text-justify">
                    <span className="text-textGreen mt-1">
                        <RxDoubleArrowRight />{" "}
                    </span>{" "}
                    Conducted Exploratory data analysis, uncovering insights and patterns in the dataset of Gala Groceries sample dataset
                </li>

                <li className="text-[18px] flex gap-2 text-textDark text-justify">
                    <span className="text-textGreen mt-1">
                        <RxDoubleArrowRight />{" "}
                    </span>{" "}
                    Built data models to address specific business requirements, leveraging appropriate techniques and algorithms.
                </li>

                <li className="text-[18px] flex gap-2 text-textDark text-justify">
                    <span className="text-textGreen mt-1">
                        <RxDoubleArrowRight />{" "}
                    </span>{" "}
                    Developed machine learning models, trained and validated them, and interpreted the results for actionable insights.
                </li>


                <li className="text-[18px] flex gap-2 text-textDark text-justify">
                    <span className="text-textGreen mt-1">
                        <RxDoubleArrowRight />{" "}
                    </span>{" "}
                    Developed machine learning models, trained and validated them, and interpreted the results for actionable insights.
                </li>
            </ul>
        </motion.div>
    )
}

export default Cognizant;