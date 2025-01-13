const resList =  [
    // {
    // "info": {
    // "id": "12046",
    // "name": "Subway",
    // "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/cad4ef1a-990d-4810-8788-089854646c16_12046.JPG",
    // "locality": "Telangana",
    // "areaName": "Himayath Nagar",
    // "costForTwo": "₹350 for two",
    // "cuisines": [
    // "sandwich",
    // "Salads",
    // "wrap",
    // "Healthy Food"
    // ],
    // "avgRating": 4.2,
    // "parentId": "2",
    // "avgRatingString": "4.2",
    // "totalRatingsString": "39K+",
    // "sla": {
    // "deliveryTime": 22,
    // "lastMileTravel": 1.3,
    // "serviceability": "SERVICEABLE",
    // "slaString": "20-25 mins",
    // "lastMileTravelString": "1.3 km",
    // "iconType": "ICON_TYPE_EMPTY"
    // },
    // "availability": {},
    // "badges": {},
    // "isOpen": true,
    // "type": "F",
    // "badgesV2": {},
    // "aggregatedDiscountInfoV3": {},
    // "orderabilityCommunication": {},
    // "differentiatedUi": {},
    // "reviewsSummary": {},
    // "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    // "restaurantOfferPresentationInfo": {},
    // "externalRatings": {},
    // "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    // },
    // "analytics": {},
    // "cta": {},
    // "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    // },
    // {
    // "info": {
    // "id": "23707",
    // "name": "McDonald's",
    // "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/c3ea7f7c-f8b6-46bb-8259-dd5b794ab2c1_23707.jpg",
    // "locality": "Himayath Nagar",
    // "areaName": "Himayath Nagar",
    // "costForTwo": "₹400 for two",
    // "cuisines": [
    // "Burgers",
    // "Beverages",
    // "Cafe",
    // "Desserts"
    // ],
    // "avgRating": 4.4,
    // "parentId": "630",
    // "avgRatingString": "4.4",
    // "totalRatingsString": "70K+",
    // "sla": {
    // "deliveryTime": 23,
    // "lastMileTravel": 1.3,
    // "serviceability": "SERVICEABLE",
    // "slaString": "20-25 mins",
    // "lastMileTravelString": "1.3 km",
    // "iconType": "ICON_TYPE_EMPTY"
    // },
    // "availability": {
    // "nextCloseTime": "2025-01-11 00:45:00",
    // "opened": true
    // },
    // "badges": {
    // "imageBadges": [
    // {
    // "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
    // "description": "bolt!"
    // },
    // {
    // "imageId": "Rxawards/_CATEGORY-Burger.png",
    // "description": "Delivery!"
    // }
    // ]
    // },
    // "isOpen": true,
    // "type": "F",
    // "badgesV2": {
    // "entityBadges": {
    // "imageBased": {
    // "badgeObject": [
    // {
    // "attributes": {
    // "description": "bolt!",
    // "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
    // }
    // },
    // {
    // "attributes": {
    // "description": "Delivery!",
    // "imageId": "Rxawards/_CATEGORY-Burger.png"
    // }
    // }
    // ]
    // },
    // "textBased": {},
    // "textExtendedBadges": {}
    // }
    // },
    // "aggregatedDiscountInfoV3": {
    // "header": "₹50 OFF",
    // "subHeader": "ABOVE ₹249",
    // "discountTag": "FLAT DEAL"
    // },
    // "orderabilityCommunication": {
    // "title": {},
    // "subTitle": {},
    // "message": {},
    // "customIcon": {}
    // },
    // "differentiatedUi": {
    // "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    // "differentiatedUiMediaDetails": {
    // "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    // "lottie": {},
    // "video": {}
    // }
    // },
    // "reviewsSummary": {},
    // "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    // "restaurantOfferPresentationInfo": {},
    // "externalRatings": {
    // "aggregatedRating": {
    // "rating": "4.2",
    // "ratingCount": "9.4K+"
    // },
    // "source": "GOOGLE",
    // "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
    // },
    // "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    // },
    // "analytics": {},
    // "cta": {},
    // "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    // },
    // {
    // "info": {
    // "id": "575804",
    // "name": "Varalakshmi Tiffins",
    // "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/c75ff48c-b373-4733-8126-e3180cbb0fa0_575804.jpg",
    // "locality": "Paradise Circle",
    // "areaName": "Ramgopalpet",
    // "costForTwo": "₹300 for two",
    // "cuisines": [
    // "South Indian"
    // ],
    // "avgRating": 4.6,
    // "veg": true,
    // "parentId": "6482",
    // "avgRatingString": "4.6",
    // "totalRatingsString": "17K+",
    // "sla": {
    // "deliveryTime": 35,
    // "lastMileTravel": 4.6,
    // "serviceability": "SERVICEABLE",
    // "slaString": "35-40 mins",
    // "lastMileTravelString": "4.6 km",
    // "iconType": "ICON_TYPE_EMPTY"
    // },
    // "availability": {
    // "nextCloseTime": "2025-01-10 11:59:00",
    // "opened": true
    // },
    // "badges": {
    // "imageBadges": [
    // {
    // "imageId": "Rxawards/_CATEGORY-South%20Indian.png",
    // "description": "Delivery!"
    // }
    // ]
    // },
    // "isOpen": true,
    // "type": "F",
    // "badgesV2": {
    // "entityBadges": {
    // "imageBased": {
    // "badgeObject": [
    // {
    // "attributes": {
    // "description": "Delivery!",
    // "imageId": "Rxawards/_CATEGORY-South%20Indian.png"
    // }
    // }
    // ]
    // },
    // "textBased": {},
    // "textExtendedBadges": {}
    // }
    // },
    // "aggregatedDiscountInfoV3": {
    // "header": "ITEMS",
    // "subHeader": "AT ₹49"
    // },
    // "orderabilityCommunication": {
    // "title": {},
    // "subTitle": {},
    // "message": {},
    // "customIcon": {}
    // },
    // "differentiatedUi": {
    // "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    // "differentiatedUiMediaDetails": {
    // "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    // "lottie": {},
    // "video": {}
    // }
    // },
    // "reviewsSummary": {},
    // "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    // "restaurantOfferPresentationInfo": {},
    // "externalRatings": {
    // "aggregatedRating": {
    // "rating": "--"
    // }
    // },
    // "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    // },
    // "analytics": {
    // "context": "seo-data-2ab79a61-163e-4794-9015-109bc0657e59"
    // },
    // "cta": {
    // "link": "https://www.swiggy.com/city/hyderabad/varalakshmi-tiffins-paradise-circle-ramgopalpet-rest575804",
    // "text": "RESTAURANT_MENU",
    // "type": "WEBLINK"
    // },
    // "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    // },
    // {
    // "info": {
    // "id": "73758",
    // "name": "Sai Darshini Tiffins",
    // "cloudinaryImageId": "eeymdtpdkgxxru90w27o",
    // "locality": "SR Nagar",
    // "areaName": "SR Nagar",
    // "costForTwo": "₹150 for two",
    // "cuisines": [
    // "South Indian"
    // ],
    // "avgRating": 4.5,
    // "parentId": "11825",
    // "avgRatingString": "4.5",
    // "totalRatingsString": "34K+",
    // "sla": {
    // "deliveryTime": 30,
    // "lastMileTravel": 7.1,
    // "serviceability": "SERVICEABLE",
    // "slaString": "30-35 mins",
    // "lastMileTravelString": "7.1 km",
    // "iconType": "ICON_TYPE_EMPTY"
    // },
    // "availability": {
    // "nextCloseTime": "2025-01-10 22:15:00",
    // "opened": true
    // },
    // "badges": {
    // "imageBadges": [
    // {
    // "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
    // "description": "OnlyOnSwiggy"
    // }
    // ]
    // },
    // "isOpen": true,
    // "aggregatedDiscountInfoV2": {},
    // "type": "F",
    // "badgesV2": {
    // "entityBadges": {
    // "imageBased": {
    // "badgeObject": [
    // {
    // "attributes": {
    // "description": "OnlyOnSwiggy",
    // "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
    // }
    // }
    // ]
    // },
    // "textBased": {},
    // "textExtendedBadges": {}
    // }
    // },
    // "orderabilityCommunication": {
    // "title": {},
    // "subTitle": {},
    // "message": {},
    // "customIcon": {}
    // },
    // "differentiatedUi": {
    // "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    // "differentiatedUiMediaDetails": {
    // "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    // "lottie": {},
    // "video": {}
    // }
    // },
    // "reviewsSummary": {},
    // "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    // "restaurantOfferPresentationInfo": {},
    // "externalRatings": {
    // "aggregatedRating": {
    // "rating": "4.0",
    // "ratingCount": "5.2K+"
    // },
    // "source": "GOOGLE",
    // "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
    // },
    // "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    // },
    // "analytics": {
    // "context": "seo-data-2ab79a61-163e-4794-9015-109bc0657e59"
    // },
    // "cta": {
    // "link": "https://www.swiggy.com/city/hyderabad/sai-darshini-tiffins-sr-nagar-rest73758",
    // "text": "RESTAURANT_MENU",
    // "type": "WEBLINK"
    // },
    // "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    // },
    // {
    // "info": {
    // "id": "497449",
    // "name": "Poorna Hotel",
    // "cloudinaryImageId": "rwbdfnotthxci0ogd2pf",
    // "locality": "Lakdi-Ka-Pul",
    // "areaName": "Lakdi-Ka-Pul",
    // "costForTwo": "₹150 for two",
    // "cuisines": [
    // "South Indian"
    // ],
    // "avgRating": 4.6,
    // "parentId": "298230",
    // "avgRatingString": "4.6",
    // "totalRatingsString": "1.8K+",
    // "sla": {
    // "deliveryTime": 24,
    // "lastMileTravel": 1.5,
    // "serviceability": "SERVICEABLE",
    // "slaString": "20-25 mins",
    // "lastMileTravelString": "1.5 km",
    // "iconType": "ICON_TYPE_EMPTY"
    // },
    // "availability": {
    // "nextCloseTime": "2025-01-10 16:00:00",
    // "opened": true
    // },
    // "badges": {
    // "imageBadges": [
    // {
    // "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
    // "description": "bolt!"
    // },
    // {
    // "imageId": "v1695133679/badges/Pure_Veg111.png",
    // "description": "pureveg"
    // }
    // ]
    // },
    // "isOpen": true,
    // "type": "F",
    // "badgesV2": {
    // "entityBadges": {
    // "imageBased": {
    // "badgeObject": [
    // {
    // "attributes": {
    // "description": "bolt!",
    // "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
    // }
    // },
    // {
    // "attributes": {
    // "description": "pureveg",
    // "imageId": "v1695133679/badges/Pure_Veg111.png"
    // }
    // }
    // ]
    // },
    // "textBased": {},
    // "textExtendedBadges": {}
    // }
    // },
    // "aggregatedDiscountInfoV3": {
    // "header": "₹150 OFF",
    // "subHeader": "ABOVE ₹399",
    // "discountTag": "FLAT DEAL"
    // },
    // "orderabilityCommunication": {
    // "title": {},
    // "subTitle": {},
    // "message": {},
    // "customIcon": {}
    // },
    // "differentiatedUi": {
    // "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    // "differentiatedUiMediaDetails": {
    // "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    // "lottie": {},
    // "video": {}
    // }
    // },
    // "reviewsSummary": {},
    // "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    // "restaurantOfferPresentationInfo": {},
    // "externalRatings": {
    // "aggregatedRating": {
    // "rating": "4.3",
    // "ratingCount": "998"
    // },
    // "source": "GOOGLE",
    // "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
    // },
    // "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    // },
    // "analytics": {
    // "context": "seo-data-2ab79a61-163e-4794-9015-109bc0657e59"
    // },
    // "cta": {
    // "link": "https://www.swiggy.com/city/hyderabad/poorna-hotel-lakdi-ka-pul-rest497449",
    // "text": "RESTAURANT_MENU",
    // "type": "WEBLINK"
    // },
    // "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    // },
    // {
    // "info": {
    // "id": "251431",
    // "name": "Bhagyalaxmi Tiffin Centre",
    // "cloudinaryImageId": "tktqfyloe3sby7ghcmdq",
    // "locality": "Isaminia Bazar",
    // "areaName": "Kachiguda",
    // "costForTwo": "₹100 for two",
    // "cuisines": [
    // "South Indian"
    // ],
    // "avgRating": 4.2,
    // "veg": true,
    // "parentId": "44044",
    // "avgRatingString": "4.2",
    // "totalRatingsString": "2.3K+",
    // "sla": {
    // "deliveryTime": 28,
    // "lastMileTravel": 3.7,
    // "serviceability": "SERVICEABLE",
    // "slaString": "25-30 mins",
    // "lastMileTravelString": "3.7 km",
    // "iconType": "ICON_TYPE_EMPTY"
    // },
    // "availability": {
    // "nextCloseTime": "2025-01-10 13:45:00",
    // "opened": true
    // },
    // "badges": {
    // "imageBadges": [
    // {
    // "imageId": "v1695133679/badges/Pure_Veg111.png",
    // "description": "pureveg"
    // }
    // ]
    // },
    // "isOpen": true,
    // "type": "F",
    // "badgesV2": {
    // "entityBadges": {
    // "imageBased": {
    // "badgeObject": [
    // {
    // "attributes": {
    // "description": "pureveg",
    // "imageId": "v1695133679/badges/Pure_Veg111.png"
    // }
    // }
    // ]
    // },
    // "textBased": {},
    // "textExtendedBadges": {}
    // }
    // },
    // "aggregatedDiscountInfoV3": {
    // "header": "₹125 OFF",
    // "subHeader": "ABOVE ₹249",
    // "discountTag": "FLAT DEAL"
    // },
    // "orderabilityCommunication": {
    // "title": {},
    // "subTitle": {},
    // "message": {},
    // "customIcon": {}
    // },
    // "differentiatedUi": {
    // "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    // "differentiatedUiMediaDetails": {
    // "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    // "lottie": {},
    // "video": {}
    // }
    // },
    // "reviewsSummary": {},
    // "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    // "restaurantOfferPresentationInfo": {},
    // "externalRatings": {
    // "aggregatedRating": {
    // "rating": "--"
    // }
    // },
    // "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    // },
    // "analytics": {
    // "context": "seo-data-2ab79a61-163e-4794-9015-109bc0657e59"
    // },
    // "cta": {
    // "link": "https://www.swiggy.com/city/hyderabad/bhagyalaxmi-tiffin-centre-isaminia-bazar-kachiguda-rest251431",
    // "text": "RESTAURANT_MENU",
    // "type": "WEBLINK"
    // },
    // "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    // },
    // {
    // "info": {
    // "id": "807475",
    // "name": "Taaza Alpaharam",
    // "cloudinaryImageId": "f1bc9ddf53de574cdc35ab2f717df234",
    // "locality": "Musheerabad",
    // "areaName": "Nallakunta & Vidyanagar",
    // "costForTwo": "₹150 for two",
    // "cuisines": [
    // "South Indian",
    // "Beverages"
    // ],
    // "avgRating": 4.3,
    // "veg": true,
    // "parentId": "481835",
    // "avgRatingString": "4.3",
    // "totalRatingsString": "550",
    // "sla": {
    // "deliveryTime": 26,
    // "lastMileTravel": 4,
    // "serviceability": "SERVICEABLE",
    // "slaString": "25-30 mins",
    // "lastMileTravelString": "4.0 km",
    // "iconType": "ICON_TYPE_EMPTY"
    // },
    // "availability": {
    // "nextCloseTime": "2025-01-10 22:00:00",
    // "opened": true
    // },
    // "badges": {
    // "imageBadges": [
    // {
    // "imageId": "v1695133679/badges/Pure_Veg111.png",
    // "description": "pureveg"
    // }
    // ]
    // },
    // "isOpen": true,
    // "type": "F",
    // "badgesV2": {
    // "entityBadges": {
    // "imageBased": {
    // "badgeObject": [
    // {
    // "attributes": {
    // "description": "pureveg",
    // "imageId": "v1695133679/badges/Pure_Veg111.png"
    // }
    // }
    // ]
    // },
    // "textBased": {},
    // "textExtendedBadges": {}
    // }
    // },
    // "aggregatedDiscountInfoV3": {
    // "header": "40% OFF",
    // "subHeader": "UPTO ₹80"
    // },
    // "orderabilityCommunication": {
    // "title": {},
    // "subTitle": {},
    // "message": {},
    // "customIcon": {}
    // },
    // "differentiatedUi": {
    // "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    // "differentiatedUiMediaDetails": {
    // "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    // "lottie": {},
    // "video": {}
    // }
    // },
    // "reviewsSummary": {},
    // "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    // "restaurantOfferPresentationInfo": {},
    // "externalRatings": {
    // "aggregatedRating": {
    // "rating": "--"
    // }
    // },
    // "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    // },
    // "analytics": {
    // "context": "seo-data-2ab79a61-163e-4794-9015-109bc0657e59"
    // },
    // "cta": {
    // "link": "https://www.swiggy.com/city/hyderabad/taaza-alpaharam-musheerabad-nallakunta-and-vidyanagar-rest807475",
    // "text": "RESTAURANT_MENU",
    // "type": "WEBLINK"
    // },
    // "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    // },
    // {
    // "info": {
    // "id": "11547",
    // "name": "Rambharose - Bhattad Ki Idli",
    // "cloudinaryImageId": "epmpoc9ubtfuk4zwcwgi",
    // "locality": "Kachiguda",
    // "areaName": "Kachiguda",
    // "costForTwo": "₹300 for two",
    // "cuisines": [
    // "South Indian"
    // ],
    // "avgRating": 4.4,
    // "parentId": "166509",
    // "avgRatingString": "4.4",
    // "totalRatingsString": "43K+",
    // "sla": {
    // "deliveryTime": 30,
    // "lastMileTravel": 3.5,
    // "serviceability": "SERVICEABLE",
    // "slaString": "25-30 mins",
    // "lastMileTravelString": "3.5 km",
    // "iconType": "ICON_TYPE_EMPTY"
    // },
    // "availability": {
    // "nextCloseTime": "2025-01-10 14:00:00",
    // "opened": true
    // },
    // "badges": {
    // "imageBadges": [
    // {
    // "imageId": "v1695133679/badges/Pure_Veg111.png",
    // "description": "pureveg"
    // }
    // ]
    // },
    // "isOpen": true,
    // "type": "F",
    // "badgesV2": {
    // "entityBadges": {
    // "imageBased": {
    // "badgeObject": [
    // {
    // "attributes": {
    // "description": "pureveg",
    // "imageId": "v1695133679/badges/Pure_Veg111.png"
    // }
    // }
    // ]
    // },
    // "textBased": {},
    // "textExtendedBadges": {}
    // }
    // },
    // "aggregatedDiscountInfoV3": {
    // "header": "50% OFF",
    // "subHeader": "UPTO ₹100"
    // },
    // "orderabilityCommunication": {
    // "title": {},
    // "subTitle": {},
    // "message": {},
    // "customIcon": {}
    // },
    // "differentiatedUi": {
    // "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    // "differentiatedUiMediaDetails": {
    // "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    // "lottie": {},
    // "video": {}
    // }
    // },
    // "reviewsSummary": {},
    // "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    // "restaurantOfferPresentationInfo": {},
    // "externalRatings": {
    // "aggregatedRating": {
    // "rating": "4.0",
    // "ratingCount": "2.7K+"
    // },
    // "source": "GOOGLE",
    // "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
    // },
    // "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    // },
    // "analytics": {
    // "context": "seo-data-2ab79a61-163e-4794-9015-109bc0657e59"
    // },
    // "cta": {
    // "link": "https://www.swiggy.com/city/hyderabad/rambharose-bhattad-ki-idli-kachiguda-rest11547",
    // "text": "RESTAURANT_MENU",
    // "type": "WEBLINK"
    // },
    // "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    // }
    {
        "info": {
                      "id": "437301",
                      "name": "Pizza Hut",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/2adbbebb-def3-4cf5-9c91-6a60bb499695_437301.jpg",
                      "locality": "OLD MLA Quarters roa",
                      "areaName": "Himayat Nagar",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "Pizzas"
                      ],
                      "avgRating": 4.3,
                      "parentId": "721",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "3.1K+",
                      "sla": {
                        "deliveryTime": 23,
                        "lastMileTravel": 1.3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "1.3 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-01-14 01:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png",
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
                                  "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹300 OFF",
                        "subHeader": "ABOVE ₹1699",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-9fd22889-bc4d-49af-b6ad-d59b481122a1"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/hyderabad/pizza-hut-old-mla-quarters-roa-himayat-nagar-rest437301",
                      "type": "WEBLINK"
                    }
                  },
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
                      "availability": {
                        "nextCloseTime": "2025-01-14 01:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Salad.png",
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
                                  "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Salad.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "40% OFF",
                        "subHeader": "UPTO ₹80"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-9fd22889-bc4d-49af-b6ad-d59b481122a1"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/hyderabad/subway-telangana-himayath-nagar-rest12046",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "32129",
                      "name": "Burger King",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/7f76a072-c1bc-4d74-ac56-33e0eea20c1e_32129.JPG",
                      "locality": "Himayath Nagar",
                      "areaName": "Himayath Nagar",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "Burgers",
                        "American"
                      ],
                      "avgRating": 4.3,
                      "parentId": "166",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "84K+",
                      "sla": {
                        "deliveryTime": 19,
                        "lastMileTravel": 1.4,
                        "serviceability": "SERVICEABLE",
                        "slaString": "15-20 mins",
                        "lastMileTravelString": "1.4 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-01-14 01:00:00",
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
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "60% OFF",
                        "subHeader": "UPTO ₹120"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.2",
                          "ratingCount": "8.9K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-9fd22889-bc4d-49af-b6ad-d59b481122a1"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/hyderabad/burger-king-himayath-nagar-rest32129",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "24613",
                      "name": "Domino's Pizza",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/29/024e7f68-ac87-413c-a453-fbb6328820d2_24613.jpg",
                      "locality": "Stock Exchange Road",
                      "areaName": "Himayath Nagar",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Pizzas",
                        "Italian",
                        "Pastas",
                        "Desserts"
                      ],
                      "avgRating": 4.4,
                      "parentId": "2456",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "19K+",
                      "sla": {
                        "deliveryTime": 25,
                        "lastMileTravel": 1.3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "1.3 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-01-14 02:59:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
                            "description": "bolt!"
                          },
                          {
                            "imageId": "Rxawards/_CATEGORY-Pizza.png",
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
                                  "imageId": "Rxawards/_CATEGORY-Pizza.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹89"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "3.9",
                          "ratingCount": "2.5K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-9fd22889-bc4d-49af-b6ad-d59b481122a1"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/hyderabad/dominos-pizza-stock-exchange-road-himayath-nagar-rest24613",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "356688",
                      "name": "Baskin Robbins - Ice Cream Desserts",
                      "cloudinaryImageId": "85ccae4e3576f9330af102c46ca85395",
                      "locality": "wajihuddin",
                      "areaName": "Himayatnagar",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "Desserts",
                        "Ice Cream"
                      ],
                      "avgRating": 4.6,
                      "veg": true,
                      "parentId": "5588",
                      "avgRatingString": "4.6",
                      "totalRatingsString": "1.6K+",
                      "sla": {
                        "deliveryTime": 13,
                        "lastMileTravel": 1.4,
                        "serviceability": "SERVICEABLE",
                        "slaString": "10-15 mins",
                        "lastMileTravelString": "1.4 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-01-13 23:59:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
                            "description": "bolt!"
                          },
                          {
                            "imageId": "Rxawards/_CATEGORY-Ice-creams.png",
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
                                  "imageId": "Rxawards/_CATEGORY-Ice-creams.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "subHeader": "UPTO ₹100"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-9fd22889-bc4d-49af-b6ad-d59b481122a1"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/hyderabad/baskin-robbins-ice-cream-desserts-wajihuddin-himayatnagar-rest356688",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "433773",
                      "name": "Home Plate by EatFit",
                      "cloudinaryImageId": "1d578bb732e03c6f591790eb7d2d88e2",
                      "locality": "SARDAR PATEL ROAD",
                      "areaName": "Begumpet",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "North Indian",
                        "Home Food",
                        "Healthy Food",
                        "Indian",
                        "Punjabi",
                        "South Indian",
                        "Rajasthani",
                        "Maharashtrian",
                        "Snacks",
                        "Desserts"
                      ],
                      "avgRating": 4.1,
                      "parentId": "301197",
                      "avgRatingString": "4.1",
                      "totalRatingsString": "1.7K+",
                      "sla": {
                        "deliveryTime": 31,
                        "lastMileTravel": 5.8,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "5.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-01-14 00:00:00",
                        "opened": true
                      },
                      "badges": {
                        "textExtendedBadges": [
                          {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "options available",
                            "fontColor": "#7E808C"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "",
                                  "fontColor": "#7E808C",
                                  "iconId": "guiltfree/GF_Logo_android_3x",
                                  "shortDescription": "options available"
                                }
                              }
                            ]
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹89"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-9fd22889-bc4d-49af-b6ad-d59b481122a1"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/hyderabad/home-plate-by-eatfit-sardar-patel-road-begumpet-rest433773",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "3324",
                      "name": "Srikanya",
                      "cloudinaryImageId": "tw4ytwle8yommmgdy4b0",
                      "locality": "Somajiguda",
                      "areaName": "Punjagutta",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Biryani",
                        "Andhra",
                        "South Indian"
                      ],
                      "avgRating": 4.3,
                      "parentId": "7317",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "85K+",
                      "sla": {
                        "deliveryTime": 27,
                        "lastMileTravel": 4.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "4.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-01-13 15:30:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {

                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.1",
                          "ratingCount": "3.0K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-9fd22889-bc4d-49af-b6ad-d59b481122a1"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/hyderabad/srikanya-somajiguda-punjagutta-rest3324",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "25251",
                      "name": "Meridian Restaurant",
                      "cloudinaryImageId": "cxvuxxwpkicbqo3nkqiy",
                      "locality": "Panjagutta",
                      "areaName": "Panjagutta",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Biryani",
                        "Chinese",
                        "Kebabs"
                      ],
                      "avgRating": 4.4,
                      "parentId": "19276",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "245K+",
                      "sla": {
                        "deliveryTime": 24,
                        "lastMileTravel": 4.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "4.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-01-13 23:45:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {

                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "3.9",
                          "ratingCount": "23K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-9fd22889-bc4d-49af-b6ad-d59b481122a1"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/hyderabad/meridian-restaurant-panjagutta-rest25251",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "643780",
                      "name": "WeFit - Protein Bowls, Salads & Sandwiches",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/30/087803bb-6bd7-420d-b806-018a1c25fcab_643780.JPG",
                      "locality": "Abids",
                      "areaName": "Golkonda X Road",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Healthy Food",
                        "Salads",
                        "Keto",
                        "Snacks"
                      ],
                      "avgRating": 4.5,
                      "parentId": "355285",
                      "avgRatingString": "4.5",
                      "totalRatingsString": "1.2K+",
                      "sla": {
                        "deliveryTime": 25,
                        "lastMileTravel": 3.7,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-30 mins",
                        "lastMileTravelString": "3.7 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-01-14 01:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Salad.png",
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
                                  "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Salad.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "subHeader": "UPTO ₹100"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-9fd22889-bc4d-49af-b6ad-d59b481122a1"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/hyderabad/wefit-protein-bowls-salads-and-sandwiches-abids-golkonda-x-road-rest643780",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "750342",
                      "name": "Daily Kitchen - Homely Meals",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/19/741d7d41-1341-4358-b6e0-cc22b8e82f9a_750342.JPG",
                      "locality": "Golkonda X Road",
                      "areaName": "Ashok Nagar",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Home Food",
                        "Indian",
                        "North Indian",
                        "Thalis"
                      ],
                      "avgRating": 4.4,
                      "parentId": "444382",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "683",
                      "sla": {
                        "deliveryTime": 25,
                        "lastMileTravel": 3.7,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-30 mins",
                        "lastMileTravelString": "3.7 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-01-14 01:00:00",
                        "opened": true
                      },
                      "badges": {
                        "textExtendedBadges": [
                          {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "options available",
                            "fontColor": "#7E808C"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "",
                                  "fontColor": "#7E808C",
                                  "iconId": "guiltfree/GF_Logo_android_3x",
                                  "shortDescription": "options available"
                                }
                              }
                            ]
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "subHeader": "UPTO ₹100"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-9fd22889-bc4d-49af-b6ad-d59b481122a1"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/hyderabad/daily-kitchen-homely-meals-golkonda-x-road-ashok-nagar-rest750342",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "639526",
                      "name": "Dum Safar Biryani",
                      "cloudinaryImageId": "1154cffac2453eb0bf7fdda7e5ea1659",
                      "locality": "City Plaza",
                      "areaName": "ABIDS",
                      "costForTwo": "₹500 for two",
                      "cuisines": [
                        "Biryani",
                        "Kebabs",
                        "Tandoor",
                        "Indian",
                        "Desserts"
                      ],
                      "avgRating": 3.8,
                      "parentId": "351013",
                      "avgRatingString": "3.8",
                      "totalRatingsString": "208",
                      "sla": {
                        "deliveryTime": 24,
                        "lastMileTravel": 2.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "2.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-01-13 16:30:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "20% OFF",
                        "subHeader": "ABOVE ₹3000",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-9fd22889-bc4d-49af-b6ad-d59b481122a1"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/hyderabad/dum-safar-biryani-city-plaza-abids-rest639526",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "433772",
                      "name": "Great Indian Khichdi by EatFit",
                      "cloudinaryImageId": "6e44fd7f1e5cd9967edfe47c10247671",
                      "locality": "SARDAR PATEL ROAD",
                      "areaName": "Begumpet",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Home Food",
                        "Indian",
                        "North Indian",
                        "Healthy Food",
                        "Snacks",
                        "Desserts",
                        "Rajasthani",
                        "South Indian",
                        "Maharashtrian",
                        "Sweets"
                      ],
                      "avgRating": 4.3,
                      "veg": true,
                      "parentId": "319582",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "2.1K+",
                      "sla": {
                        "deliveryTime": 30,
                        "lastMileTravel": 5.8,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "5.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-01-14 00:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                          }
                        ],
                        "textExtendedBadges": [
                          {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "brand",
                            "fontColor": "#7E808C"
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
                          "textBased": {

                          },
                          "textExtendedBadges": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "",
                                  "fontColor": "#7E808C",
                                  "iconId": "guiltfree/GF_Logo_android_3x",
                                  "shortDescription": "brand"
                                }
                              }
                            ]
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹64"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-9fd22889-bc4d-49af-b6ad-d59b481122a1"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/hyderabad/great-indian-khichdi-by-eatfit-sardar-patel-road-begumpet-rest433772",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "547809",
                      "name": "Theobroma",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/2/6969cb34-e66b-4f20-a7e9-88ac61f08c03_547809.jpg",
                      "locality": "Himayath Nagar",
                      "areaName": "Himayath Nagar",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Desserts"
                      ],
                      "avgRating": 4.6,
                      "parentId": "1040",
                      "avgRatingString": "4.6",
                      "totalRatingsString": "3.4K+",
                      "sla": {
                        "deliveryTime": 11,
                        "lastMileTravel": 0.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "10-15 mins",
                        "lastMileTravelString": "0.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-01-14 00:30:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
                            "description": "bolt!"
                          },
                          {
                            "imageId": "Green%20Dot%20Awards/Best%20In%20Desserts.png",
                            "description": "Delivery!"
                          },
                          {
                            "imageId": "Rxawards/_CATEGORY-Desserts.png",
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
                                  "imageId": "Green%20Dot%20Awards/Best%20In%20Desserts.png"
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Desserts.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹99"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "3.8",
                          "ratingCount": "137"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-9fd22889-bc4d-49af-b6ad-d59b481122a1"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/hyderabad/theobroma-himayath-nagar-rest547809",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "262087",
                      "name": "Imperial Multicuisine Restaurant",
                      "cloudinaryImageId": "rqlwvsmzcfxbg9u6ajgm",
                      "locality": "Banjara Hills",
                      "areaName": "Redhills",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Biryani",
                        "Chinese",
                        "Indian",
                        "Kebabs",
                        "Tandoor"
                      ],
                      "avgRating": 4.3,
                      "parentId": "543714",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "21K+",
                      "sla": {
                        "deliveryTime": 22,
                        "lastMileTravel": 3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "3.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-01-13 23:59:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹100 OFF",
                        "subHeader": "ABOVE ₹499",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-9fd22889-bc4d-49af-b6ad-d59b481122a1"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/hyderabad/imperial-multicuisine-restaurant-banjara-hills-redhills-rest262087",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "404999",
                      "name": "BOX8 - Desi Meals",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/22/605f62e7-6355-4413-a55a-8d8d0fcab81f_404999.jpg",
                      "locality": "Ashok Nagar",
                      "areaName": "Vidyanagar",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "North Indian",
                        "Biryani",
                        "Thalis",
                        "Home Food"
                      ],
                      "avgRating": 4.4,
                      "parentId": "10655",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "3.1K+",
                      "sla": {
                        "deliveryTime": 25,
                        "lastMileTravel": 3.7,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-30 mins",
                        "lastMileTravelString": "3.7 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-01-14 01:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Green%20Dot%20Awards/Best%20In%20Dal%20Makhani.png",
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
                                  "imageId": "Green%20Dot%20Awards/Best%20In%20Dal%20Makhani.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹198"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-9fd22889-bc4d-49af-b6ad-d59b481122a1"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/hyderabad/box8-desi-meals-ashok-nagar-vidyanagar-rest404999",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "405004",
                      "name": "NH1 Bowls - Highway To North",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/8/70c2e64e-0b56-420b-8986-febfe84eae17_405004.jpg",
                      "locality": "Vidyanagar",
                      "areaName": "Ashok Nagar",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "North Indian",
                        "Punjabi",
                        "Home Food"
                      ],
                      "avgRating": 4.6,
                      "parentId": "22452",
                      "avgRatingString": "4.6",
                      "totalRatingsString": "1.4K+",
                      "sla": {
                        "deliveryTime": 25,
                        "lastMileTravel": 3.7,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-30 mins",
                        "lastMileTravelString": "3.7 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-01-14 01:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Green%20Dot%20Awards/Best%20In%20Dal%20Makhani.png",
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
                                  "imageId": "Green%20Dot%20Awards/Best%20In%20Dal%20Makhani.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹198"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-9fd22889-bc4d-49af-b6ad-d59b481122a1"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/hyderabad/nh1-bowls-highway-to-north-vidyanagar-ashok-nagar-rest405004",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "6498",
                      "name": "Hotel Sandarshini",
                      "cloudinaryImageId": "9f5783b9975a73ec001560327065a01c",
                      "locality": "Masab Tank",
                      "areaName": "Masab Tank",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Chinese",
                        "South Indian",
                        "Juices"
                      ],
                      "avgRating": 4.6,
                      "parentId": "476",
                      "avgRatingString": "4.6",
                      "totalRatingsString": "103K+",
                      "sla": {
                        "deliveryTime": 23,
                        "lastMileTravel": 3.9,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "3.9 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-01-13 22:30:00",
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
                      "aggregatedDiscountInfoV2": {

                      },
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
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.0",
                          "ratingCount": "2.2K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-9fd22889-bc4d-49af-b6ad-d59b481122a1"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/hyderabad/hotel-sandarshini-masab-tank-rest6498",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "53796",
                      "name": "Jaggu Mithai",
                      "cloudinaryImageId": "n7fhclyf7wngqusam2he",
                      "locality": "Secunderabad",
                      "areaName": "Kalasiguda",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Desserts",
                        "Biryani",
                        "Chaat"
                      ],
                      "avgRating": 4.5,
                      "veg": true,
                      "parentId": "9629",
                      "avgRatingString": "4.5",
                      "totalRatingsString": "52K+",
                      "sla": {
                        "deliveryTime": 26,
                        "lastMileTravel": 3.9,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "3.9 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-01-13 22:00:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "select": true,
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹25"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-9fd22889-bc4d-49af-b6ad-d59b481122a1"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/hyderabad/jaggu-mithai-secunderabad-kalasiguda-rest53796",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "838833",
                      "name": "Wow! China",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/10/f123c0c6-2306-4eee-9b66-ada58a033622_838833.JPG",
                      "locality": "Buddha Poornima Project Area",
                      "areaName": "Prasad Imax",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Tibetan",
                        "Chinese",
                        "Asian",
                        "Snacks",
                        "Continental",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 3.9,
                      "parentId": "226836",
                      "avgRatingString": "3.9",
                      "totalRatingsString": "229",
                      "sla": {
                        "deliveryTime": 27,
                        "lastMileTravel": 1.9,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "1.9 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-01-13 23:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Noodles.png",
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
                                  "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Noodles.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹129"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-9fd22889-bc4d-49af-b6ad-d59b481122a1"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/hyderabad/wow-china-buddha-poornima-project-area-prasad-imax-rest838833",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "624526",
                      "name": "La Pino'z Pizza",
                      "cloudinaryImageId": "eydflhsjdfaqktybte8n",
                      "locality": "Banjara Hills",
                      "areaName": "Himayath Nagar",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Pizzas",
                        "Pastas",
                        "Italian",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 4.3,
                      "parentId": "4961",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "4.0K+",
                      "sla": {
                        "deliveryTime": 20,
                        "lastMileTravel": 0.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "15-20 mins",
                        "lastMileTravelString": "0.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-01-14 01:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Rxawards/_CATEGORY-Pizza.png",
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
                                  "imageId": "Rxawards/_CATEGORY-Pizza.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "40% OFF",
                        "subHeader": "UPTO ₹80"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.1",
                          "ratingCount": "406"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-9fd22889-bc4d-49af-b6ad-d59b481122a1"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/hyderabad/la-pinoz-pizza-banjara-hills-himayath-nagar-rest624526",
                      "type": "WEBLINK"
                    }
                  }
    
    ]


    export default resList;