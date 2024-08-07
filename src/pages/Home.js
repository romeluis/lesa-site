import HomeAbout from "../components/HomeAbout";
import HomeHero from "../components/HomeHero"
import InfoSpread from "../components/InfoSpread";

const Home = () => {
    return (
        <div>
            <HomeHero/>
            <HomeAbout/>
            <InfoSpread/>
        </div>
    );
}
 
export default Home;