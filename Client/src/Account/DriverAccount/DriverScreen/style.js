import COLORS from '../../../Assistant/Color'


const Styles = {

    buttomWhite: {
        background: COLORS.firstRed,
        width: '100%',
        border: 'none',
        cursor: 'pointer',
        borderRadius: '2px',
        height: '40px',
        color : COLORS.white
    },

    firstbox: {
        background: COLORS.white,
        boxShadow: `0.1rem 0.1rem 0.1rem 0.1rem ${COLORS.firstRed}`
    },
    image: {

        width: '20px',
        height: '20px'

    },
    colorChat: {
        background: COLORS.firstRed,
        borderBottom: `1px solid red`,
        color: COLORS.white
    },
    chatBOX: {
        border: `1px solid ${COLORS.firstRed}`
    },
    textarea: {

        height: '60px',
        border: `2px solid ${COLORS.firstRed}`,



    },

    ordernumber: {
        boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px',
        borderRadius: '1rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        color: COLORS.light,
        textTransform: 'capitalize',
        margin: '0.4rem',
        padding: '20px'
    },
    ul: {
        background: COLORS.firstRed,
        color: COLORS.white,
       
        display : 'flex',
        alignItems : 'center',
        flexWrap : 'wrap'
 
    },

    Active : {
        background: COLORS.firstRed,
        color: COLORS.white,
        fontSize: '13px',
        height : 'auto',
        
    },
    font: {
        fontSize: '16'
    },
    box: {

        boxShadow: 'rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset',
        // boxShadow: `0rem 0rem 0.4rem 0.1rem ${COLORS.firstRed}`,
        borderRadius: '0.7rem',
        
    },
    boxtop :{
        marginTop : '6rem',
       
     
    },
    buttom: {
        background: COLORS.firstRed,
        boxShadow: `0.1rem 0rem 0rem 0.1rem ${COLORS.white}`,
        color: COLORS.white
    },
    color: {
        color: COLORS.firstColor,
        marginTop: '0.5rem'
    },
    boxButtom: {
        marginBottom: '10px'
    },
    flex: {
        display: 'flex',
        alignItems: 'center',
        marginTop: '0.2rem',
        marginBottom: '0.2rem'
    },
    city: {
        width: '20px',
        height: '20px',

    },
    timeImage: {
        width: '20px',
        height: '20px',
        marginRight: '0.3rem'
    },
    coustom: {
        color: COLORS.firstColor,
        fontSize: '16px',
        marginLeft: '10px'
    },
    coustomimage: {
        width: '20px',
        height: '20px',
    },
    left: {
        marginLeft: '10px'
    },

    orderstatus: {
        background: COLORS.white,
        color: COLORS.light,
        padding: '4px',
        borderRadius: '4px',
        marginLeft: '4px',
        fontSize : '13px'
    },

    cancal: {
        marginTop: '10px'
    }


}


export default Styles