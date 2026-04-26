import "../css/Portfolio.css"
const Portfolio = ({title, body, date}) =>{
return (

            <div className='portfolio-element'>
                <h4>{title}</h4>
                <p>{body}</p>
                <span>{date}</span>
            </div>
    );

}
export default Portfolio;