import '../css/SkillsSection.css'
import Skill from './Skill'
const SkillsSection = ()=> {
    return (
        <section className="SkillsSection">
            <div className='sec1'>
                <Skill label="JavaScript" width="80%" />
                <Skill label="React" width="10%" />
                <Skill label="CSS" width="80%" />
                <Skill label="Java" width="30%" />
                <Skill label="HTML" width="45%" />
                <Skill label="Node.js" width="90%" />
            </div>
            <div className='sec2'>
                <h2>Skills</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit fuga tempore, distinctio deserunt repellendus rerum! Consequatur ullam enim quod consectetur nulla necessitatibus adipisci commodi, quisquam illo nisi maxime rerum autem!
                Unde in dolorem similique qui libero provident laboriosam distinctio dolore possimus.</p>
            </div>
        </section>
    );
}
export default SkillsSection;