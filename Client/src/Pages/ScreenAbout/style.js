
import COLORS from '../../Assistant/Color'



const Styles = {

    font: {
        fontSize: '14px',
        cursor: 'pointer'
    },
    Image  : {
        minWidth: '100%',
        maxWidth : '100%',
        maxHeight: '400px',
        minHeight: '400px',
    },
    conten: {
        position: 'relative'
    },
    color: {
        color: COLORS.firstColor,

    },
    about: {
        position: 'absolute',
        top: '5rem',
        color: COLORS.firstColor,
        fontSize: '40px',
        left: '5rem',
        fontFamily: 'Otomanopee One',
    },
    row: {
        overflow: 'hidden',
        width: '100%',
        marginTop: '50px',
        // background : 'red',
        // padding : '0rem',
        // margin :'0rem'

    },

    addBOC :{
    background : 'red',
    width : '100%',
    display  : 'flex',
    height : '400px'
    },

    active: {
        background: COLORS.firstRed,
        padding: '30px',
        color: COLORS.white,
        position: 'relative',
    },
    close: {

        fontFamily: 'Otomanopee One',
        color: COLORS.finds,
        top: '10px',
        position: 'absolute',
        right: '10px',
        fontSize: '20px'
    },
    imagBox: {
        width: '100%',
        height: '400px',
        padding : '0rem',
        margin : '0rem'
    },
    xp : {
        background : 'red',
        height : '100vh',
        width   : '100%',
        padding : '0rem',
        margin : '0rem',
        display : 'flex'
    },
    xp2 :{
        width : '100%',
        padding : '0rem',
        margin : '0rem',
        marginLeft : '0rem'

    },
    logText: {

        color: COLORS.firstRed,
        fontFamily: 'Otomanopee One',
        fontSize: '20px'
    },

    First_NavBarList_writ_name_lastName: {
        color: COLORS.firstColor,
        marginLeft: '5px',
        fontFamily: 'Otomanopee One'
    },
    test: {
        marginTop: '20px'
    },
    Tilte: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontFamily: 'Otomanopee One'
    },
    firstbox: {
        marginTop: '20px',
        marginBottom: '40px',
        borderBottom: `1px solid ${COLORS.firstRed}`
    },

    discription: {
        padding: '0rem',
        margin: '0rem',
        textTransform: 'capitalize',
        fontSize: '12px',
        fontFamily: 'Otomanopee One',
    },
    Contcat: {
        display: 'flex',
        flexDirection: 'column'
    },

    contakt: {
        background: COLORS.firstRed,
        color: COLORS.white,
        fontSize: '15px',
        fontFamily: 'Otomanopee One',
        width: '100px',
        marginTop: '20px',
        padding: '0.2rem',
        borderRadius: '1rem',
        textAlign: 'center',

    },
    fontemail: {
        textTransform: 'capitalize',
    }


}


export default Styles