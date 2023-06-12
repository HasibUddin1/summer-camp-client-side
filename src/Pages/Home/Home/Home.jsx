import useTitle from "../../../hooks/useTitle";
import Banner from "../Banner/Banner";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import QandA from "../QandA/QandA";


const Home = () => {

    useTitle('Home')

    return (
        <div>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
            <QandA></QandA>
        </div>
    );
};

export default Home;