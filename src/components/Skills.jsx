import { motion } from 'framer-motion'
import {  FaReact, FaGithubSquare } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript, SiMongodb, SiPostman, SiI18Next } from "react-icons/si";
import { GrNode, GrGraphQl } from "react-icons/gr";
import { VscVscode } from "react-icons/vsc";

const Skill=({name,x,y})=>{
return (
    <motion.div className="flex items-center justify-center rounded-full py-3 px-6 cursor-pointer absolute" whileHover={{scale:2.5
    }} initial={{x:0,y:0}} whileInView={{x:x,y:y}} transition={{duration:1.5}}>
{name}
    </motion.div>
)
}
const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl w-full text-center pt-10">Skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center rouned-full bg-circularLight dark:bg-circularDark">
<motion.div className="flex items-center justify-center rounded-full p-8 cursor-pointer" whileHover={{
    scale:2.5
}}>

</motion.div>
           <Skill name={<RiNextjsFill fontSize={"55"} />} x={"-5vw"} y={"-10vw"} />
            <Skill name={<RiTailwindCssFill fontSize={"55"} color='#2390de'/>} x={"-20vw"} y={"2vw"} />
            <Skill name={<SiTypescript fontSize={"55"} color='#161de0'/>} x={"20vw"} y={"6vw"} />
            <Skill name={<SiMongodb fontSize={"55"} color='#20782f'/>} x={"0vw"} y={"12vw"} />
            <Skill name={<GrNode fontSize={"55"} color='#2c5e35'/>} x={"-20vw"} y={"-15vw"} />
            <Skill name={<GrGraphQl fontSize={"55"} color='#e01678'/>} x={"15vw"} y={"-12vw"} />
            <Skill name={<SiPostman fontSize={"55"} color='#e65817'/>} x={"12vw"} y={"-5vw"} />
            <Skill name={<FaReact fontSize={"55"} color='#0c4af5'/>} x={"0vw"} y={"-20vw"} />
            <Skill name={<FaGithubSquare fontSize={"55"} />} x={"20vw"} y={"20vw"} />
            <Skill name={<SiI18Next fontSize={"55"} color='#27d9e6'/>} x={"5vw"} y={"20vw"} />
            <Skill name={<VscVscode  fontSize={"55"} color='#2390de'/>} x={"-10vw"} y={"20vw"} />

          


      </div>
    </>
  )
}

export default Skills
