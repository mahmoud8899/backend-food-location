



export const  TabScreen = (props) => {



     const {TitleTh,style,other,className} = props


    return  <th style={style} className={className}  >
    {TitleTh ? TitleTh : other}
    </th>


}



export const TabScrrenDor = (props) =>{

    const {TitleTd, onClick,other,style,className} = props


    return  <td style={style} onClick={onClick} className={className}>
        {TitleTd ? TitleTd : other}</td>
}


