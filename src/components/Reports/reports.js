import React from "react";

import "./reports.css";

import S24Evertz from "./S24Evertz/s24Evertz";

import { motion as m } from 'framer-motion';

const Reports = () => {
    return (
        <m.div  initial={{ transform: 'translateY(-100%)' }} animate={{ transform: 'translateY(0%)' }} transition={{ duration: .5, ease: "easeOut" }} className="reportsScreen">
            <S24Evertz />
        </m.div>
    );
};

export default Reports;
