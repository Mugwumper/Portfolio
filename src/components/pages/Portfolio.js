import React from "react";
import Jumbotron from "../layout/Jumbotron";
import Project_Dream_Journal from "./projects/Project_Dream_Journal";
import Project_Crystal_Game from "./projects/Project_Crystal_Game";
import Project_GifTastic from "./projects/Project_GifTastic";
import Project_RPS from "./projects/Project_RPS";
import Project_WGG from "./projects/Project_WGG";
import Project_FF from "./projects/Project_FF";
import Project_Bam from "./projects/Project_Bam";
import Project_TG from "./projects/Project_TG";
import Project_Liri from "./projects/Project_Liri";
import Project_EDB from "./projects/Project_EDB";
import Project_MS from "./projects/Project_MS";
import Project_Pup from "./projects/Project_Pup";
import Project_CG from "./projects/Project_CG";
import Project_FRH from "./projects/Project_FRH";
import { rContext_ShowMore } from "../../App";

function Portfolio () {
    //console.log(React.useContext(rContext_ShowMore).doShowMore);
    const show = React.useContext(rContext_ShowMore).doShowMore.show;
    const currentProjID = React.useContext(rContext_ShowMore).doShowMore.current;
    const show_dj   = (show && (currentProjID === 0));
    const show_gt   = (show && (currentProjID === 1));
    const show_cg   = (show && (currentProjID === 2));
    const show_rps  = (show && (currentProjID === 3));
    const show_wgg  = (show && (currentProjID === 4));
    const show_ff   = (show && (currentProjID === 5));
    const show_bam  = (show && (currentProjID === 6));
    const show_tg   = (show && (currentProjID === 7));
    const show_liri = (show && (currentProjID === 8));
    const show_edb  = (show && (currentProjID === 9));
    const show_ms   = (show && (currentProjID === 10));
    const show_pup  = (show && (currentProjID === 11));
    const show_clg  = (show && (currentProjID === 12));
    const show_frh  = (show && (currentProjID === 13));
      return (
        <div>
            {/* <h1>Portolio Projects</h1> */}
            <Jumbotron />
            {show_dj   ? Project_Dream_Journal() : null }
            {show_gt   ? Project_GifTastic()     : null }
            {show_cg   ? Project_Crystal_Game()  : null }
            {show_rps  ? Project_RPS()           : null }
            {show_wgg  ? Project_WGG()           : null }
            {show_ff   ? Project_FF()            : null }
            {show_bam  ? Project_Bam()           : null }
            {show_tg   ? Project_TG()            : null }
            {show_liri ? Project_Liri()          : null }
            {show_edb  ? Project_EDB()           : null }
            {show_ms   ? Project_MS()            : null }
            {show_pup  ? Project_Pup()           : null }
            {show_clg  ? Project_CG()            : null }
            {show_frh  ? Project_FRH()           : null }
        </div>
    )
}

export default Portfolio;