import { connect } from "react-redux";
import { addCount } from "../../store/countReducer";
import Home from "./home";

const mapStateToProps = ({home}) => {
    // const { home } = state
    const { count } = home;
    console.log( home, 'home...', count)

    return {
        count 
    }
}

const mapDisptchToProps = {
    addCount
}


const connectHomePage = connect(mapStateToProps, mapDisptchToProps)(Home)

export default connectHomePage 
