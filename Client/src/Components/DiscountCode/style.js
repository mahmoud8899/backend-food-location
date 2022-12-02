
import COLORS from '../../Assistant/Color'


const Styles = {
    discount :{
    marginTop : '10px'
    },
    color : {
        border: `1px solid ${COLORS.firstRed}`,
        boxShadow: `0.2rem 0rem 1rem 0.1rem ${COLORS.firstRed}`,
    },
    remove : {
        color : COLORS.firstColor
    },
    colorText : {
        color : COLORS.firstRed,
        fontFamily: 'cursive'

    },
    total : {
        backgroundColor:    COLORS.firstRed,
        border: `1px solid ${COLORS.white}`,
        boxShadow: `0rem 0rem 0.4rem rgb(238 238 238 / 81%)`,
        color: 'white',
    },
    input :{
            border: `2px solid #ff3b2f85`,
            paddingLeft: '20px'
    }
}


export default Styles