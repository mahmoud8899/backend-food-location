import COLORS from '../../Assistant/Color'



const Rating = (props) => {

    const { value, text, color } = props

    return (
        <div className="cart_Iconas_Start">

            <i
                style={{ color }}
                className={
                    value >= 5
                        ? 'fas fa-star'
                        : value >= 4.5
                            ? 'fas fa-star-half-alt'
                            : 'far fa-star'
                }

            ></i>

            <i
                style={{ color }}
                className={
                    value >= 1
                        ? 'fas fa-star'
                        : value >= 0.5
                            ? 'fas fa-star-half-alt'
                            : 'far fa-star'
                }></i>
            <i
                style={{ color }}
                className={
                    value >= 2
                        ? 'fas fa-star'
                        : value >= 1.5
                            ? 'fas fa-star-half-alt'
                            : 'far fa-star'
                }

            ></i>
            <i
                style={{ color }}
                className={
                    value >= 3
                        ? 'fas fa-star'
                        : value >= 2.5
                            ? 'fas fa-star-half-alt'
                            : 'far fa-star'
                }

            ></i>

            <i
                style={{ color }}
                className={
                    value >= 4
                        ? 'fas fa-star'
                        : value >= 3.5
                            ? 'fas fa-star-half-alt'
                            : 'far fa-star'
                }

            ></i>

            <span style={{
                marginLeft: '2px',
                color: COLORS.firstRed,
                textTransform: 'capitalize'
            }}>{text && text}</span>
        </div>
    )
}


Rating.defaultProps = {
    color: COLORS.firstRed
}

export default Rating

