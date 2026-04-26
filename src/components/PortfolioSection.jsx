import '../css/PortfolioSection.css'
import Portfolio from './Portfolio';
const PortfolioSection = () =>{
return (
        <section className="PortfolioSection">
            <h2>Portfolio</h2>
            <div className='portfolioBody'>
                <Portfolio title="Website" body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae error quibusdam maxime deleniti quidem excepturi, animi, consequatur molestias ea voluptates dignissimos neque inventore, minus accusantium esse? Dolore nam sint mollitia?" date="10 March, 2025"/>
                <Portfolio title="Mobile App" body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae error quibusdam maxime deleniti quidem excepturi, animi, consequatur molestias ea voluptates dignissimos neque inventore, minus accusantium esse? Dolore nam sint mollitia?" date="14 April, 2025"/>
                <Portfolio title="Ecommerce" body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae error quibusdam maxime deleniti quidem excepturi, animi, consequatur molestias ea voluptates dignissimos neque inventore, minus accusantium esse? Dolore nam sint mollitia?" date="22 Desember, 2024"/>
                <Portfolio title="Trip App" body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae error quibusdam maxime deleniti quidem excepturi, animi, consequatur molestias ea voluptates dignissimos neque inventore, minus accusantium esse? Dolore nam sint mollitia?" date="30 July, 2024"/>
                <Portfolio title="PWA" body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae error quibusdam maxime deleniti quidem excepturi, animi, consequatur molestias ea voluptates dignissimos neque inventore, minus accusantium esse? Dolore nam sint mollitia?" date="1 March, 2024"/>
            </div>
        </section>
    );

}
export default PortfolioSection;