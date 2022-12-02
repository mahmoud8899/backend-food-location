import COLORS from '../../Assistant/Color'


const Styles = {

    Show: {
        borderTop: `1px solid ${COLORS.firstRed}`
    },

    last: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        marginTop: '20px',
        marginBottom: '20px'
    },
    image: {
        width: '30px',
        height: '30px',
        cursor: 'pointer'
    },

    lastbox: {
        marginLeft: '10px'
    },

    fontSize: {

        fontSize: '14px',
        marginTop: '20px',
        marginBottom: '30px',
        padding: '0rem',
        cursor: 'pointer'
    },

    row: {

        borderTop: `1px solid #eeeeeec4`,
        padding: '0.5rem'
    },

    color: {
        color: COLORS.firstRed
    },
    icon: {
        backgroundColor: COLORS.firstRed,
        boxShadow: `0rem 0rem 0.1rem ${COLORS.firstRed}`,
        color: COLORS.white,

        width: '30px',
        height: '30px',
        lineHeight: '30px',
        borderRadius: '20%',
        textAlign: 'center',
        fontSize: '12px',
        outline: 'none',
        opacity: 0.9,
        transformStyle: ' preserve-3d',
        transition: '.6s',
        display: 'block',
        padding: '0rem',
    },
    style: {
        width: '100%',
        border: 'none',
        fontSize: 15,
        color: COLORS.white,
        backgroundColor: COLORS.firstRed,
        height: '35px',
        borderRadius: '10px',
        fontFamily: 'monospace',
    },
    input: {
        marginBottom: '20px',
        height: '60px'
    },
    titleStyle: {
        fontSize: 13,
    },
    box: {

        display: 'flex',
        justifyContent: 'space-between',
        textAlign: 'center',

    },
    icons: {
        backgroundColor: COLORS.firstRed,
        color: COLORS.white,
        width: 40,
        height: 40,
        borderRadius: '50%',
        lineHeight: '40px',
        marginRight: '50px',
    },
    container: {

        marginTop: '2px',
        marginBottom: '2px',
        padding: 'rem',
        margin: '0rem',
        display: 'block',
        textAlign: 'center',
       


    },
    test: {
        // backgroundColor: COLORS.finds,
        padding: '0rem',
        margin: '0rem',
        width: '100%',




    },
    mat: {
        width: '25px',
        height: '25px',
    },
    logText: {
        marginLeft: '5px',
        color: COLORS.firstRed,
        fontFamily: `"Mochiy Pop P One", sans-serif`,
        fontSize: '13px'
    },

    First_NavBarList_writ_name_lastName: {
        color: COLORS.firstColor,
        marginLeft: '5px',
        fontFamily: "Otomanopee One"
    },
    downloadText: {
        fontSize: '14px',
        marginTop: '20px',
        marginBottom: '30px',
        padding: '0rem'
    },
    app: {
        backgroundColor: COLORS.light,
        marginTop: '10px',
        marginBottom: '10px',
        color: COLORS.white,
        display: 'flex',
        alignItems: 'center',
        padding: '8px',
        width: '200px',
        boxShadow: `0.1rem 0rem 0.1rem 0.1rem ${COLORS.white}`,
        borderRadius: '1rem',
        margin: '0.5rem auto'
    },

    textflex: {
        fontSize: '12px',
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '10px',
        fontWeight: 'bold'
    },
    iconios: {
        fontSize: '30px',

    }

}


export default Styles