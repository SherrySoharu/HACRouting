import "../Styles/About.css";
import img from "../assets/back3.jpg";

const About = () => {
  return (
    <div class="main_content2" id="content2">
<div class="ninenty">
<div class="image1">
<img class="image3" src={img}/>

</div>
<div class="text1">
<p class="kj"> Welcome to Cosmic Discovery</p>
<h1 class="le">Unveiling the Mysteries <br/>of the Universe </h1>
<p class="op">Embark on a journey through the cosmos and uncover the secrets of space.
        From breathtaking galaxies to mesmerizing nebulae, we invite you to
        explore the wonders that the universe has to offer. Our mission is to
        bring the beauty and excitement of space right to your screen.</p>


<i class="fa fa-headphones" aria-hidden="true"></i>
<p class="ha">Get Support</p>
{/* <hr/> */}
<i class="fa fa-check" aria-hidden="true"></i>
<p class="zz">As an organization, we are committed to consistent advancement </p>
<i class="fa fa-check" aria-hidden="true"></i>
<p class="zc">Our website is your gateway to the universe. Discover the latest space
        news, view stunning images captured by telescopes and spacecraft, and
        learn about groundbreaking space missions that push the boundaries of
        human exploration. Join us on this cosmic journey!.</p>
</div>
</div>
</div>
  );
};
export default About;
