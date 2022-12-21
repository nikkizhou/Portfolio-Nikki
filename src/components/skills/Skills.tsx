
import React from 'react'
import { info } from "../../info/info";
import "./Skills.css";

function SkillItem(label:string, icon:string) {
  return (
    <div className="skill_item">
      <img src={icon} style={{ width: "50px", height: "50px" }} />
      <p >{label}</p>
    </div>
  )
}

interface Skill {
  icon: string;
  label:string
}

interface Skills{
  Language: Skill[],
  Frontend: Skill[],
  Backend: Skill[],
  Other: Skill[]
}


function SkillCard(title: string) {
  const skills = info.skills[title as keyof Skills]
  return <div className="skill_card" >
    <h3> {title}</h3>
    <ul className="skill_item_container" >
      {skills.map((s:Skill)=> SkillItem(s.label, s.icon))}
    </ul>
  </div>
}

export const Skills=()=> {
  const firstName = info.firstName.toLowerCase()
  return <section id="skills" className="skills">
    <h1>Skills/Tools</h1>
    <div className='skill_container'>
      {Object.keys(info.skills).map(title => SkillCard(title))}
    </div>
  </section>;
}
