import React from "react";
import getStringLength from "../functions/getStringLength";
import { useCodeInput } from "../context/CodeInputContext";
import getCKeywords from "../functions/getCKeywords";
import getIdentifiers from "../functions/getIndentifiers";
import { getComments } from "../functions/getComments";
import { TbCircleLetterC } from "react-icons/tb";
import { SiZenn } from "react-icons/si";
import { LiaComments } from "react-icons/lia";
import { GrWaypoint } from "react-icons/gr";
const SummaryBox = () => {
  const { code } = useCodeInput();
  return (
    <div className="flex justify-evenly">

        <h1 className="font-semibold flex items-center gap-2"><SiZenn className="inline"/>Lenght: <span className="text-orange-400">{getStringLength(code)}</span></h1>
        <h1 className="font-semibold flex items-center gap-2"><TbCircleLetterC className="inline"/>Keywords: <span className="text-orange-400">{getCKeywords(code).length}</span></h1>
        <h1 className="font-semibold flex items-center gap-2"><GrWaypoint className="inline"/>Identifiers: <span className="text-orange-400">{getIdentifiers(code).length}</span></h1>
        <h1 className="font-semibold flex items-center gap-2"><LiaComments className="inline"/>Comments: <span className="text-orange-400">{getComments(code).length}</span></h1>
   


    </div>
  );
};

export default SummaryBox;
