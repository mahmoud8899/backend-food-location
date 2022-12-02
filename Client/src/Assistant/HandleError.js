



// handel error
export const HandleError = (name) =>{

    switch(name){

        case 'jwt expired' : return 'Förfallit Re-Request Glömt lösenord'
       
        case 'jwt malformed' : return 'Förfallit Re-Request Glömt lösenord'

        default : return name

    }


    

}