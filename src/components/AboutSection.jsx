import '../css/AboutSection.css'
import me  from '../assets/personImg.png'
const AboutSection = ()=> {
    return (
        <section className="AboutSection">
            <div>
            <h2>About Me</h2>
            <img src={me} />
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi obcaecati, quasi sed quaerat quam voluptate a, dolorem mollitia tenetur culpa consectetur similique facere, in enim. Blanditiis dolore suscipit ea quibusdam.
                Quos est repellat numquam qui modi quibusdam alias, doloremque asperiores fuga tempora quo deserunt sint consequuntur, repellendus harum cupiditate, unde eum nulla atque. Ea nesciunt corporis sit suscipit maiores ratione!
                Molestias facilis et nemo consectetur natus quidem saepe, autem soluta commodi laborum nam beatae voluptates adipisci obcaecati eius molestiae laboriosam ut sequi labore fugit aperiam sint voluptatem. Aliquid, voluptatum molestiae.</p>
                <button>See Portfolio</button>
            </div>
        </section>
    );
}
export default AboutSection;