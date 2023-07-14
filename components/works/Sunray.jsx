import React from 'react'
import { motion } from 'framer-motion'
import { RxDoubleArrowRight } from 'react-icons/rx';

const Sunray = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="w-full"
        >
            <h3 className='flex gap-1 font-medium text- font-titleFont text-xl'>AI programmer<span className="text-textGreen tracking-wider"> @Sunray</span>
            </h3>
            <p className="text-base flex gap-2 text-textDark">June 2023</p>
            <ul className='gap-3 mt-6 flex flex-col'>
                <li className="text-[18px] flex gap-2 text-textDark text-justify">
                    <span className="text-textGreen mt-1">
                        <RxDoubleArrowRight />{" "}
                    </span>{" "}
                    Conducted exploratory data analysis on Diwali sales data and Vrinda store sales data.
                </li>

                <li className="text-[18px] flex gap-2 text-textDark text-justify">
                    <span className="text-textGreen mt-1">
                        <RxDoubleArrowRight />{" "}
                    </span>{" "}
                    Meaningful insights from datasets were found to help business to adapt their marketing tactics.
                </li>

                <li className="text-[18px] flex gap-2 text-textDark text-justify">
                    <span className="text-textGreen mt-1">
                        <RxDoubleArrowRight />{" "}
                    </span>{" "}
                    Built annual report of online retail store in Microsoft-Excel.
                </li>


                <li className="text-[18px] flex gap-2 text-textDark text-justify">
                    <span className="text-textGreen mt-1">
                        <RxDoubleArrowRight />{" "}
                    </span>{" "}
                    Dynamic dashboard was created in Excel for Vrinda store.
                </li>
            </ul>
        </motion.div>
    )
}

export default Sunray