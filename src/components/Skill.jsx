import '../css/Skill.css'

const Skill = ({ label, width }) => {
    return (
        <div className="Skill">
            <div className="label"><h3>{label}</h3></div>
            <div className="bar" style={{ width: width }}></div>
        </div>
    )
}

export default Skill;