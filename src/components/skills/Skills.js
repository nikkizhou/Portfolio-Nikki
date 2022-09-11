
import React from 'react'
import { info } from "../../info/info";
import "./Skills.css";

function SkillItem(label, icon) {
  return (
    <div className="skill_item">
      <img src={icon} style={{ width: "50px", height: "50px" }} />
      <p >{label}</p>
    </div>
  )
}

function SkillCard(title) {
  return <div className="skill_card" >
    <h2 className="skill_title" > {title}</h2>
    <ul className="skill_item_container" >
      {info.skills[title].map(l => SkillItem(l.label, l.icon))}
    </ul>
  </div>
}

export const Skills=()=> {
  const firstName = info.firstName.toLowerCase()
  return <section id="skills" className="skill_main">
    <h1>Skills/Tools</h1>
    <div className='skill_container'>
      {Object.keys(info.skills).map(title => SkillCard(title))}
    </div>
  </section>;
}
