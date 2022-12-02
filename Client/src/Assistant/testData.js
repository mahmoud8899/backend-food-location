import { MyOderImage } from './MyOrderImage'



export const testOrderData = [
    {
        _id : 1,
        city : 'Uppsala',
        resturant : 'mat gott',
        address : 'lagerlag 20l',
        name : 'cheick and rice',
        lasttime : '20/20/2022',
        coustomeraddress : 'Lagerlöfsgatan 18',
        deiver : 30,
    },
    {
        _id : 2,
        city : 'Uppsala',
        resturant : 'mat gott',
        address : 'lagerlag 20l',
        name : 'cheick and rice',
        lasttime : '20/20/2022',
        coustomeraddress : 'Lagerlöfsgatan 50',
        deiver : 30,
    },

    {
        _id : 3,
        city : 'Uppsala',
        resturant : 'mat gott',
        address : 'lagerlag 20l',
        name : 'cheick and rice',
        lasttime : '20/20/2022',
        coustomeraddress : 'Lagerlöfsgatan 2',
        deiver : 30,
    },


    {
        _id : 4,
        city : 'Uppsala',
        resturant : 'mat gott',
        address : 'lagerlag 20l',
        name : 'cheick and rice',
        lasttime : '20/20/2022',
        coustomeraddress : 'Lagerlöfsgatan 23',
        deiver : 30,
    },

    {
        _id : 5,
        city : 'Uppsala',
        resturant : 'mat gott',
        address : 'lagerlag 20l',
        name : 'cheick and rice',
        lasttime : '20/20/2022',
        coustomeraddress : 'Lagerlöfsgatan 19',
        deiver : 30,
    },
]



export const DriverOder = [
    {
        _id : 1,
        timeorder : '20-20-2022',
        resturant : 'food gott',
        coustomeraddress : 'Lagerlöfsgatan 19',
        deiver : 30,
    },
    {
        _id : 2,
        timeorder : '20-20-2022',
        resturant : 'food gott',
        coustomeraddress : 'Lagerlöfsgatan 19',
        deiver : 30,
    },

    {
        _id : 3,
        timeorder : '20-20-2022',
        resturant : 'food gott',
        coustomeraddress : 'Lagerlöfsgatan 19',
        deiver : 30,
    },

    {
        _id : 4,
        timeorder : '20-20-2022',
        resturant : 'food gott',
        coustomeraddress : 'Lagerlöfsgatan 19',
        deiver : 30,
    },

    {
        _id : 5,
        timeorder : '20-20-2022',
        resturant : 'food gott',
        coustomeraddress : 'Lagerlöfsgatan 19',
        deiver : 30,
    }
]


export const TestAbout = [
    {
        _id : 1,
        discription : 'Wolt makes it incredibly easy for you to discover and get what you want. Delivered to you – quickly, reliably and affordably. And by doing so, we make cities better places to live.'
    }
]

export const TestContcat = [
    {
        _id : 1,
        address : 'Sysslomansgatan 60B lgh',
        city : 'Uppsala',
        zipCod : '752 23',
        telefon : 4672020203,
        email : 'Mahmoud@Uppsala.com'
    }
]

export const TestWork  = [
    {
        _id : 1,
        name : 'Jobb Delivery in Uppsala',
        discription : 'Drivs du av försäljning och har ett stort tekniskt intresse? Motiveras du av att skapa långsiktiga relationer med kunder och har lätt att ta eget initiativ? Då är detta rätt möjlighet för dig! SICK AB tillhandahåller sensorlösningar inom produktion, logistik och processindustri. Med hjälp av ava.',
        date : '10/10/2021',
        email : 'Admin@Uppsala.com',
        telefon : 467203103344,

    },
    {
        _id : 2,
        name : 'Jobb Food in Uppsala',
        discription : 'Drivs du av försäljning och har ett stort tekniskt intresse? Motiveras du av att skapa långsiktiga relationer med kunder och har lätt att ta eget initiativ? Då är detta rätt möjlighet för dig! SICK AB tillhandahåller sensorlösningar inom produktion, logistik och processindustri. Med hjälp av ava.',
        date : '10/10/2021',
        email : 'Admin@Uppsala.com',
        telefon : 467203103344,
    },
    {
        _id : 3,
        name : 'Jobb meat in Uppsala',
        discription : 'Drivs du av försäljning och har ett stort tekniskt intresse? Motiveras du av att skapa långsiktiga relationer med kunder och har lätt att ta eget initiativ? Då är detta rätt möjlighet för dig! SICK AB tillhandahåller sensorlösningar inom produktion, logistik och processindustri. Med hjälp av ava.',
        date : '10/10/2021',
        email : 'Admin@Uppsala.com',
        telefon : 467203103344,
    },
    {
        _id : 4,
        name : 'Jobb phone in Uppsala',
        discription : 'Drivs du av försäljning och har ett stort tekniskt intresse? Motiveras du av att skapa långsiktiga relationer med kunder och har lätt att ta eget initiativ? Då är detta rätt möjlighet för dig! SICK AB tillhandahåller sensorlösningar inom produktion, logistik och processindustri. Med hjälp av ava.',
        date : '10/10/2021',
        email : 'Admin@Uppsala.com',
        telefon : 467203103344,
    }
]

export const ListData = [


    {
        _id: 1,
        name: 'kebab',
        image: `${MyOderImage.bank}`,
        price: 40,
        rating: 1,
        addressinfo:{
            city : 'uppsala',
            address : 'lager 20d'
        },
        description: 'On Android, React Navigation hooks in to the hardwar when the user presses it, so it behaves as the user would expect.',
        category: {
            id: '1'
        },
    },


    {
        _id: 2,
        name: 'Meat',
        image: `${MyOderImage.basket2}`,
        price: 50,
        rating: 1,
        addressinfo:{
            city : 'uppsala',
            address : 'lager 20d'
        },
        description: 'On Android, React Navigation hooks in to the hardwar when the user presses it, so it behaves as the user would expect.',
        category: {
            id: '2'
        },
    },

    {
        _id: 3,
        name: 'chicken',
        image: `${MyOderImage.close}`,
        price: 60,
        rating: 2.5,
        addressinfo:{
            city : 'uppsala',
            address : 'lager 20d'
        },
        description: 'On Android, React Navigation hooks in to the hardwar when the user presses it, so it behaves as the user would expect.',
        category: {
            id: '3'
        },
    },

    {
        _id: 4,
        name: 'chicken',
        image: `${MyOderImage.myHome}`,
        price: 60,
        rating: 2.5,
        addressinfo:{
            city : 'uppsala',
            address : 'lager 20d'
        },
        description: 'On Android, React Navigation hooks in to the hardwar when the user presses it, so it behaves as the user would expect.',
        category: {
            id: '3'
        },
    },


    {
        _id: 5,
        name: 'chicken',
        image: `${MyOderImage.paypal}`,
        price: 60,
        rating: 2.5,
        addressinfo:{
            city : 'uppsala',
            address : 'lager 20d'
        },
        description: 'On Android, React Navigation hooks in to the hardwar when the user presses it, so it behaves as the user would expect.',
        category: {
            id: '3'
        },
    },
    {
        _id: 6,
        name: 'kebab',
        image: `${MyOderImage.credit}`,
        price: 40,
        rating: 1,
        addressinfo:{
            city : 'uppsala',
            address : 'lager 20d'
        },
        description: 'On Android, React Navigation hooks in to the hardwar when the user presses it, so it behaves as the user would expect.',
        category: {
            id: '1'
        },
    },


    {
        _id: 7,
        name: 'Meat',
        image: `${MyOderImage.cook2}`,
        price: 50,
        rating: 1,
        addressinfo:{
            city : 'uppsala',
            address : 'lager 20d'
        },
        description: 'On Android, React Navigation hooks in to the hardwar when the user presses it, so it behaves as the user would expect.',
        category: {
            id: '2'
        },
    },

    {
        _id: 8,
        name: 'chicken',
        image: `${MyOderImage.cook}`,
        price: 60,
        rating: 2.5,
        description: 'On Android, React Navigation hooks in to the hardwar when the user presses it, so it behaves as the user would expect.',
        category: {
            id: '3'
        },
    },

    {
        _id: 9,
        name: 'chicken',
        image: `${MyOderImage.cook2}`,
        price: 60,
        rating: 2.5,
        description: 'On Android, React Navigation hooks in to the hardwar when the user presses it, so it behaves as the user would expect.',
        category: {
            id: '3'
        },
    },




]


export const TestingButiker = [


   
    {
        _id: 1,
        name: 'chicken',
        image:  'https://normal.storynews.se/wp-content/uploads/sites/90/2016/05/1J7A3413.jpg',
        price: 60,
        rating: 2.5,
        addressinfo:{
            city : 'uppsala',
            address : 'lager 20d'
        },
        description: 'On Android, React Navigation hooks in to the hardwar when the user presses it, so it behaves as the user would expect.',
        category: {
            id: '3'
        },
    },

   

    {
        _id: 4,
        name: 'chicken',
        image: 'https://www.stadsmissionen.org/app/uploads/kassa-med-skylt-1-860x645.jpg',
        price: 60,
        rating: 2.5,
        addressinfo:{
            city : 'uppsala',
            address : 'lager 20d'
        },
        description: 'On Android, React Navigation hooks in to the hardwar when the user presses it, so it behaves as the user would expect.',
        
    },


    {
        _id: 5,
        name: 'chicken',
        image: 'https://stfturist.imgix.net/app/uploads/2020/02/fjallstuga-butiker-3.jpg?auto=format%2Cenhance',
        price: 60,
        rating: 2.5,
        addressinfo:{
            city : 'uppsala',
            address : 'lager 20d'
        },
        description: 'On Android, React Navigation hooks in to the hardwar when the user presses it, so it behaves as the user would expect.',
        category: {
            id: '3'
        },
    },
    {
        _id: 6,
        name: 'kebab',
        image: 'https://naraffar.se/wp-content/uploads/sites/6/2020/04/Obemannade-butiker-o%CC%88fr-en-levande-landsbygd.jpg',
        price: 40,
        rating: 1,
        addressinfo:{
            city : 'uppsala',
            address : 'lager 20d'
        },
        description: 'On Android, React Navigation hooks in to the hardwar when the user presses it, so it behaves as the user would expect.',
        category: {
            id: '1'
        },
    },


    {
        _id: 7,
        name: 'Meat',
        image: 'https://framnaskopcentrum.nu/wp-content/uploads/2019/06/apoteket_webb.jpg',
        price: 50,
        rating: 1,
        addressinfo:{
            city : 'uppsala',
            address : 'lager 20d'
        },
        description: 'On Android, React Navigation hooks in to the hardwar when the user presses it, so it behaves as the user would expect.',
        category: {
            id: '2'
        },
    },

    {
        _id: 8,
        name: 'chicken',
        image: 'https://f.nordiskemedier.dk/2ypbmicm9z8vebxb.jpg',
        price: 60,
        rating: 2.5,
        addressinfo:{
            city : 'uppsala',
            address : 'lager 20d'
        },
        description: 'On Android, React Navigation hooks in to the hardwar when the user presses it, so it behaves as the user would expect.',
        category: {
            id: '3'
        },
    },

    {
        _id: 9,
        name: 'chicken',
        image: 'https://www.transportarbetaren.se/app/uploads/2021/07/mack-butik-utan-personal-1200x800px.jpg',
        price: 60,
        rating: 2.5,
        addressinfo:{
            city : 'uppsala',
            address : 'lager 20d'
        },
        description: 'On Android, React Navigation hooks in to the hardwar when the user presses it, so it behaves as the user would expect.',
        category: {
            id: '3'
        },
    },




]










