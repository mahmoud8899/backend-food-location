import COLORS from '../../Assistant/Color'



const Styles = {

    color : {
        boxShadow: `0rem 0rem 0.1rem 0.1rem ${COLORS.firstRed}`,
      
    },
    font: {
        fontSize : 15,
        color : COLORS.firstColor,
        fontWeight: 'bold',
        textTransform: 'capitalize'
    },
    fontText: {
        fontSize : 13,
        color : COLORS.firstRed,
        fontWeight: 'bold',
        textTransform: 'capitalize'
    },
    remove : {
        background : COLORS.firstColor,
        color : COLORS.white,
        fontWeight : '300'
    },
    edit : {
        background : COLORS.firstRed,
        color : COLORS.white,
        fontWeight : '300'
    },
    listusers: {
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        marginBottom: '10px'
    },
    colorfont: {
        color : COLORS.firstColor,
        fontFamily: 'Otomanopee One'
    },
    co:{
        
        overflow: 'none',
        // background : 'red'
    }
}


export default Styles