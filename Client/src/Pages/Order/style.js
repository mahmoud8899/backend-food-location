import COLORS from '../../Assistant/Color'



const Styles = {

    myorder: {
        border: `1px solid ${COLORS.firstRed}`,
        borderBottom: `1px solid ${COLORS.firstRed}`,
        borderRight: `1px solid ${COLORS.firstRed}`,
    },
    text: {
        backgroundColor: COLORS.firstRed,
        color: COLORS.white
    },
    image: {
        width : '20px',
        height : '20px',
         marginRight : '10px'
    },
    time: {
        width : '20px',
        height : '20px',
        marginLeft : '20px'
    },
    homAddres : {
        backgroundColor: COLORS.firstRed,
        color: COLORS.white,
    boxShadow: `0rem 0rem 0.1rem 0.1rem ${COLORS.firstRed}`
    },
    color  : {
        backgroundColor: COLORS.firstRed,
        color: COLORS.white,
    },
    bottom : {
        borderBottom:` 1px solid ${COLORS.firstRed}`,
        marginBottom : 10
    }

}


export default Styles