import React from "react";
import ReactDOM from "react-dom/client";

const Header = () =>{
    return(
        <div className="header">
            <div className="logo-container">
          <img src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?size=2"/>
               
            </div>
<div className="nav-items">
    <ul>
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
    </ul>
</div>
        </div>
    )
}

// const resObj =   {
//     "id": "12046",
//     "name": "Subway",
//     "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/cad4ef1a-990d-4810-8788-089854646c16_12046.JPG",
//     "locality": "Telangana",
//     "areaName": "Himayath Nagar",
//     "costForTwo": "₹350 for two",
//     "cuisines": [
//     "sandwich",
//     "Salads",
//     "wrap",
//     "Healthy Food"
//     ],
//     "avgRating": 4.2,
//     "parentId": "2",
//     "avgRatingString": "4.2",
//     "totalRatingsString": "39K+",
//     "sla": {
//     "deliveryTime": 22,
//     "lastMileTravel": 1.3,
//     "serviceability": "SERVICEABLE",
//     "slaString": "20-25 mins",
//     "lastMileTravelString": "1.3 km",
//     "iconType": "ICON_TYPE_EMPTY"
//     },
//     "availability": {},
//     "badges": {},
//     "isOpen": true,
//     "type": "F",
//     "badgesV2": {},
//     "aggregatedDiscountInfoV3": {},
//     "orderabilityCommunication": {},
//     "differentiatedUi": {},
//     "reviewsSummary": {},
//     "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//     "restaurantOfferPresentationInfo": {},
//     "externalRatings": {},
//     "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//     }
const resList =  [
    {
    "info": {
    "id": "12046",
    "name": "Subway",
    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/cad4ef1a-990d-4810-8788-089854646c16_12046.JPG",
    "locality": "Telangana",
    "areaName": "Himayath Nagar",
    "costForTwo": "₹350 for two",
    "cuisines": [
    "sandwich",
    "Salads",
    "wrap",
    "Healthy Food"
    ],
    "avgRating": 4.2,
    "parentId": "2",
    "avgRatingString": "4.2",
    "totalRatingsString": "39K+",
    "sla": {
    "deliveryTime": 22,
    "lastMileTravel": 1.3,
    "serviceability": "SERVICEABLE",
    "slaString": "20-25 mins",
    "lastMileTravelString": "1.3 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {},
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {},
    "aggregatedDiscountInfoV3": {},
    "orderabilityCommunication": {},
    "differentiatedUi": {},
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {},
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {},
    "cta": {},
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    "info": {
    "id": "23707",
    "name": "McDonald's",
    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/c3ea7f7c-f8b6-46bb-8259-dd5b794ab2c1_23707.jpg",
    "locality": "Himayath Nagar",
    "areaName": "Himayath Nagar",
    "costForTwo": "₹400 for two",
    "cuisines": [
    "Burgers",
    "Beverages",
    "Cafe",
    "Desserts"
    ],
    "avgRating": 4.4,
    "parentId": "630",
    "avgRatingString": "4.4",
    "totalRatingsString": "70K+",
    "sla": {
    "deliveryTime": 23,
    "lastMileTravel": 1.3,
    "serviceability": "SERVICEABLE",
    "slaString": "20-25 mins",
    "lastMileTravelString": "1.3 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2025-01-11 00:45:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
    "description": "bolt!"
    },
    {
    "imageId": "Rxawards/_CATEGORY-Burger.png",
    "description": "Delivery!"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "description": "bolt!",
    "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
    }
    },
    {
    "attributes": {
    "description": "Delivery!",
    "imageId": "Rxawards/_CATEGORY-Burger.png"
    }
    }
    ]
    },
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹50 OFF",
    "subHeader": "ABOVE ₹249",
    "discountTag": "FLAT DEAL"
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "4.2",
    "ratingCount": "9.4K+"
    },
    "source": "GOOGLE",
    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {},
    "cta": {},
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    "info": {
    "id": "575804",
    "name": "Varalakshmi Tiffins",
    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/c75ff48c-b373-4733-8126-e3180cbb0fa0_575804.jpg",
    "locality": "Paradise Circle",
    "areaName": "Ramgopalpet",
    "costForTwo": "₹300 for two",
    "cuisines": [
    "South Indian"
    ],
    "avgRating": 4.6,
    "veg": true,
    "parentId": "6482",
    "avgRatingString": "4.6",
    "totalRatingsString": "17K+",
    "sla": {
    "deliveryTime": 35,
    "lastMileTravel": 4.6,
    "serviceability": "SERVICEABLE",
    "slaString": "35-40 mins",
    "lastMileTravelString": "4.6 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2025-01-10 11:59:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "Rxawards/_CATEGORY-South%20Indian.png",
    "description": "Delivery!"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "description": "Delivery!",
    "imageId": "Rxawards/_CATEGORY-South%20Indian.png"
    }
    }
    ]
    },
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "ITEMS",
    "subHeader": "AT ₹49"
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "--"
    }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
    "context": "seo-data-2ab79a61-163e-4794-9015-109bc0657e59"
    },
    "cta": {
    "link": "https://www.swiggy.com/city/hyderabad/varalakshmi-tiffins-paradise-circle-ramgopalpet-rest575804",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    "info": {
    "id": "73758",
    "name": "Sai Darshini Tiffins",
    "cloudinaryImageId": "eeymdtpdkgxxru90w27o",
    "locality": "SR Nagar",
    "areaName": "SR Nagar",
    "costForTwo": "₹150 for two",
    "cuisines": [
    "South Indian"
    ],
    "avgRating": 4.5,
    "parentId": "11825",
    "avgRatingString": "4.5",
    "totalRatingsString": "34K+",
    "sla": {
    "deliveryTime": 30,
    "lastMileTravel": 7.1,
    "serviceability": "SERVICEABLE",
    "slaString": "30-35 mins",
    "lastMileTravelString": "7.1 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2025-01-10 22:15:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
    "description": "OnlyOnSwiggy"
    }
    ]
    },
    "isOpen": true,
    "aggregatedDiscountInfoV2": {},
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "description": "OnlyOnSwiggy",
    "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
    }
    }
    ]
    },
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "4.0",
    "ratingCount": "5.2K+"
    },
    "source": "GOOGLE",
    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
    "context": "seo-data-2ab79a61-163e-4794-9015-109bc0657e59"
    },
    "cta": {
    "link": "https://www.swiggy.com/city/hyderabad/sai-darshini-tiffins-sr-nagar-rest73758",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    "info": {
    "id": "497449",
    "name": "Poorna Hotel",
    "cloudinaryImageId": "rwbdfnotthxci0ogd2pf",
    "locality": "Lakdi-Ka-Pul",
    "areaName": "Lakdi-Ka-Pul",
    "costForTwo": "₹150 for two",
    "cuisines": [
    "South Indian"
    ],
    "avgRating": 4.6,
    "parentId": "298230",
    "avgRatingString": "4.6",
    "totalRatingsString": "1.8K+",
    "sla": {
    "deliveryTime": 24,
    "lastMileTravel": 1.5,
    "serviceability": "SERVICEABLE",
    "slaString": "20-25 mins",
    "lastMileTravelString": "1.5 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2025-01-10 16:00:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
    "description": "bolt!"
    },
    {
    "imageId": "v1695133679/badges/Pure_Veg111.png",
    "description": "pureveg"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "description": "bolt!",
    "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
    }
    },
    {
    "attributes": {
    "description": "pureveg",
    "imageId": "v1695133679/badges/Pure_Veg111.png"
    }
    }
    ]
    },
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹150 OFF",
    "subHeader": "ABOVE ₹399",
    "discountTag": "FLAT DEAL"
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "4.3",
    "ratingCount": "998"
    },
    "source": "GOOGLE",
    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
    "context": "seo-data-2ab79a61-163e-4794-9015-109bc0657e59"
    },
    "cta": {
    "link": "https://www.swiggy.com/city/hyderabad/poorna-hotel-lakdi-ka-pul-rest497449",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    "info": {
    "id": "251431",
    "name": "Bhagyalaxmi Tiffin Centre",
    "cloudinaryImageId": "tktqfyloe3sby7ghcmdq",
    "locality": "Isaminia Bazar",
    "areaName": "Kachiguda",
    "costForTwo": "₹100 for two",
    "cuisines": [
    "South Indian"
    ],
    "avgRating": 4.2,
    "veg": true,
    "parentId": "44044",
    "avgRatingString": "4.2",
    "totalRatingsString": "2.3K+",
    "sla": {
    "deliveryTime": 28,
    "lastMileTravel": 3.7,
    "serviceability": "SERVICEABLE",
    "slaString": "25-30 mins",
    "lastMileTravelString": "3.7 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2025-01-10 13:45:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "v1695133679/badges/Pure_Veg111.png",
    "description": "pureveg"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "description": "pureveg",
    "imageId": "v1695133679/badges/Pure_Veg111.png"
    }
    }
    ]
    },
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹125 OFF",
    "subHeader": "ABOVE ₹249",
    "discountTag": "FLAT DEAL"
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "--"
    }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
    "context": "seo-data-2ab79a61-163e-4794-9015-109bc0657e59"
    },
    "cta": {
    "link": "https://www.swiggy.com/city/hyderabad/bhagyalaxmi-tiffin-centre-isaminia-bazar-kachiguda-rest251431",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    "info": {
    "id": "807475",
    "name": "Taaza Alpaharam",
    "cloudinaryImageId": "f1bc9ddf53de574cdc35ab2f717df234",
    "locality": "Musheerabad",
    "areaName": "Nallakunta & Vidyanagar",
    "costForTwo": "₹150 for two",
    "cuisines": [
    "South Indian",
    "Beverages"
    ],
    "avgRating": 4.3,
    "veg": true,
    "parentId": "481835",
    "avgRatingString": "4.3",
    "totalRatingsString": "550",
    "sla": {
    "deliveryTime": 26,
    "lastMileTravel": 4,
    "serviceability": "SERVICEABLE",
    "slaString": "25-30 mins",
    "lastMileTravelString": "4.0 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2025-01-10 22:00:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "v1695133679/badges/Pure_Veg111.png",
    "description": "pureveg"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "description": "pureveg",
    "imageId": "v1695133679/badges/Pure_Veg111.png"
    }
    }
    ]
    },
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "40% OFF",
    "subHeader": "UPTO ₹80"
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "--"
    }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
    "context": "seo-data-2ab79a61-163e-4794-9015-109bc0657e59"
    },
    "cta": {
    "link": "https://www.swiggy.com/city/hyderabad/taaza-alpaharam-musheerabad-nallakunta-and-vidyanagar-rest807475",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    "info": {
    "id": "11547",
    "name": "Rambharose - Bhattad Ki Idli",
    "cloudinaryImageId": "epmpoc9ubtfuk4zwcwgi",
    "locality": "Kachiguda",
    "areaName": "Kachiguda",
    "costForTwo": "₹300 for two",
    "cuisines": [
    "South Indian"
    ],
    "avgRating": 4.4,
    "parentId": "166509",
    "avgRatingString": "4.4",
    "totalRatingsString": "43K+",
    "sla": {
    "deliveryTime": 30,
    "lastMileTravel": 3.5,
    "serviceability": "SERVICEABLE",
    "slaString": "25-30 mins",
    "lastMileTravelString": "3.5 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2025-01-10 14:00:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "v1695133679/badges/Pure_Veg111.png",
    "description": "pureveg"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "description": "pureveg",
    "imageId": "v1695133679/badges/Pure_Veg111.png"
    }
    }
    ]
    },
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "50% OFF",
    "subHeader": "UPTO ₹100"
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "4.0",
    "ratingCount": "2.7K+"
    },
    "source": "GOOGLE",
    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
    "context": "seo-data-2ab79a61-163e-4794-9015-109bc0657e59"
    },
    "cta": {
    "link": "https://www.swiggy.com/city/hyderabad/rambharose-bhattad-ki-idli-kachiguda-rest11547",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    }
    ]

const RestaurantCard = (props) =>{
    const {resData} = props;
    const {cloudinaryImageId,name,cuisines,avgRating} = resData?.info;
    const {deliveryTime} = resData?.info?.sla;

    return(
        <div className="res-card">
            <img alt="res-image" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4 className="cuisines">{cuisines.join(' , ')}</h4>
            <h4 className="rating">{avgRating} stars</h4>
            <h4 className="deliveryTime">{deliveryTime} minutes</h4>
        </div>
    )
}



const Body =()=>{
    return(
        <div className="=body">
             <div className="search">Search</div>
             <div className="res-container">
         {
            
            resList.map(restaurant => <RestaurantCard key={restaurant.info.id} resData={restaurant}/>)
            
         }
             </div>
        </div>
    )
}

const AppLayout =()=>{
    return(
        <div className="app">
       
            <Header/>
            <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);