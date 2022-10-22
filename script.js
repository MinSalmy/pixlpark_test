const navbar = document.querySelector('nav');
const menu = document.querySelector('.menu');
const sectionLocations = document.querySelector('.locations');
const blockLocationDetails = document.querySelector('.location-details');
const details = document.querySelector('.details');
const footerAbout = document.querySelector('footer .about');
const icons = {
    address: '<i style="width: 15px" class="location-card__sub-info-icon fa-solid fa-location-dot"></i>',
    tel: '<i style="width: 15px" class="location-card__sub-info-icon fa-solid fa-phone"></i>',
    site: '<i style="width: 15px" class="location-card__sub-info-icon fa-solid fa-link"></i>',
    mail: '<i style="width: 15px" class="location-card__sub-info-icon fa-regular fa-envelope"></i>',
    hours: '<i style="width: 15px" class="location-card__sub-info-icon fa-regular fa-clock"></i>',
}

const idGenerator = () => {
    return Math.floor(Math.random() * Math.floor(Math.random() * Date.now()));
};

const getMapImage = async (width, height, street) => {
    const KEY_API = 'Rz_YYk8mRmf3euh7DOY9Iauiap1Xfwi1TE_fAF-LFjQ'; 
    const myImage = document.createElement('img');
    const url = `https://image.maps.ls.hereapi.com/mia/1.6/mapview?&z=18&i=0&t=5&f=1&s=${street.replaceAll(',', '%2C')}&n=10&w=${width}&h=${height}&apiKey=${KEY_API}`;
    const response = await fetch(encodeURI(url));
    const mapContainer = document.getElementById('mapContainer');
    if (response.ok) {
        
        return response.blob();
    }
    const error = await response.json();
    const e = new Error('Something went wrong');
    e.data = error;
    throw e;
}

//Элементы навигационного меню с выпадающим списком
const navbarList = [
    {
        id: idGenerator(),
        title: 'mens',
        href: "#",
        classes: ['menu__item'],
        subList: [
            {
                id: idGenerator(),
                title: 'casuals',
                href: "#",
                classes: ['clothes', 'drop__title'],
                subList: [
                    {
                        id: idGenerator(),
                        text: 'Jackets',
                        href: "#",
                    },
                    {
                        id: idGenerator(),
                        text: 'Hoodies & Sweatshirts',
                        href: "#",
                    },
                    {
                        id: idGenerator(),
                        text: 'Polo Shirts',
                        href: "#",
                    },
                    {
                        id: idGenerator(),
                        text: 'Sportswear',
                        href: "#",
                    },
                    {
                        id: idGenerator(),
                        text: 'Trousers & Chinos',
                        href: "#",
                    },
                    {
                        id: idGenerator(),
                        text: 'T-Shirts',
                        href: "#",
                    },                    
                ],
            },
            {
                id: idGenerator(),
                title: 'Formal',
                href: "#",                
                classes: ['clothes', 'drop-title'],
                subList: [
                    {
                        id: idGenerator(),
                        text: 'Jackets',
                        href: "#",
                    },
                    {
                        id: idGenerator(),
                        text: 'Shirts',
                        href: "#",
                    },
                    {
                        id: idGenerator(),
                        text: 'Suits',
                        href: "#",
                    },
                    {
                        id: idGenerator(),
                        text: 'Trousers',
                        href: "#",
                    },                                   
                ],
            },
            {
                id: idGenerator(),
                title: '<b>Autumn sale!</b> <p>up to 50% off</p>',
                href: "#",
                classes: ['banner', 'banner_navbar'],
            },
        ],  
    },
    {     
        id: idGenerator(),
        title: 'womens',
        href: "#",
        classes: ['menu__item'],
        subList: [
            {
                id: idGenerator(),
                title: 'casuals',
                href: "#",                
                classes: ['clothes', 'drop__title'],
                subList: [
                    {
                        id: idGenerator(),
                        text: 'Jackets',
                        href: "#",
                    },
                    {
                        id: idGenerator(),
                        text: 'Hoodies & Sweatshirts',
                        href: "#",
                    },
                    {
                        id: idGenerator(),
                        text: 'Polo Shirts',
                        href: "#",
                    },
                    {
                        id: idGenerator(),
                        text: 'Sportswear',
                        href: "#",
                    },
                    {
                        id: idGenerator(),
                        text: 'Trousers & Chinos',
                        href: "#",
                    },
                    {
                        id: idGenerator(),
                        text: 'T-Shirts',
                        href: "#",
                    },                    
                ],
            },
            {
                id: idGenerator(),
                title: 'Formal',
                href: "#",                
                classes: ['clothes', 'drop__title'],
                subList: [
                    {
                        id: idGenerator(),
                        text: 'Jackets',
                        href: "#",
                    },
                    {
                        id: idGenerator(),
                        text: 'Shirts',
                        href: "#",
                    },
                    {
                        id: idGenerator(),
                        text: 'Suits',
                        href: "#",
                    },
                    {
                        id: idGenerator(),
                        text: 'Trousers',
                        href: "#",
                    },                                   
                ],
            },
            {
                id: idGenerator(),
                title: '<b>Autumn sale!</b> <p>up to 50% off</p>',
                href: "#",
                classes: ['banner', 'banner_navbar'],
            },
        ], 
    },
    {     
        id: idGenerator(),
        title: 'the brand',
        href: "#",
        classes: ['menu__item'],
        subList: [],
    },
    {     
        id: idGenerator(),
        title: 'local stores',
        href: "#",
        classes: ['menu__item', 'menu__item_selected'],
        subList: [],
    },
    {     
        id: idGenerator(),
        title: 'look book',
        href: "#",
        classes: ['menu__item'],
        subList: [],
    },
] 

//section locations
const locationsList = [
    {
        id: idGenerator(),
        city: 'London',
        address: '180-182 Regent Street, London, W1B 5BT',
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing esi elit. Vivamus at arcu sem. Vestibulum ornare eleifendit massa, nec tempor odio. Fusce posuere nunc iaculis ligula viverra iaculis. Aliquam erat volutpat.' ,
        tel: '0123-456-789',
        site: 'www.yourwebsite.com',
        mail: 'support@yourwebsite.com',
        hours: 'Monday-Friday: 9am to 6pm  Saturday: 10am to 6pm  Sunday: 10am to 2pm',
        coordinates: { 
            lat: 51.51246957963596, 
            lng: -0.1398138193997477 
        },
        socials: [
            {
                href: 'https://facebook.com',
                icon: '<svg class="details__social_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>',                
                classes: ['social-icon']
            },
            {
                href: 'https://twitter.com',
                icon: '<svg  class="details__social_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg>',
                classes: ['social-icon']
            },
            {
                href: 'https://instagram.com',
                icon: '<svg  class="details__social_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>',
                classes: ['social-icon']
            },
            {
                href: 'https://pinterest.com',
                icon: '<svg  class="details__social_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.3 6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z"/></svg>',
                classes: ['social-icon']
            },
        ]
    },
    {
        id: idGenerator(),
        city: 'New York',
        address: '109 Columbus Circle, New York, NY 10023',
        info: 'Nunc non posuere nisl. Etiam finibus vel dui nec lobortis. Aliquam egestas, sem quis condimentum venenatis, erat leo fermentum dolor, non sollicitudin massa mi eu nibh. Nullam vitae aliquam dui, non sodales nisl.' ,
        tel: '0123-456-789',
        site: 'www.yourwebsite.com',
        mail: 'support@yourwebsite.com',
        hours: 'Monday-Friday: 9am to 6pm  Saturday: 10am to 6pm  Sunday: 10am to 2pm',
        coordinates: {  
            lat: 40.76817523015557, 
            lng: -73.98188935581811 
        },
        socials: [
            {
                href: 'https://facebook.com',
                icon: '<svg class="details__social_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>',                
                classes: ['social-icon']
            },
            {
                href: 'https://twitter.com',
                icon: '<svg  class="details__social_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg>',
                classes: ['social-icon']
            },
            {
                href: 'https://instagram.com',
                icon: '<svg  class="details__social_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>',
                classes: ['social-icon']
            },
            {
                href: 'https://pinterest.com',
                icon: '<svg  class="details__social_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.3 6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z"/></svg>',
                classes: ['social-icon']
            },
        ]
    },
    {
        id: idGenerator(),
        city: 'Paris',
        address: '2133 Rue Saint-Honoré, 75001 Paris',
        info: 'Ut interdum fermentum blandit. Donec nec lacus egetit mi rhoncus eleifend. Curabitur laoreet nisl eget rutruml auctor. Vestibulum ante ipsum primis in faucibus orcip luctus et ultrices posuere cubilia curae cras ligula.' ,
        tel: '0123-456-789',
        site: 'www.yourwebsite.com',
        mail: 'support@yourwebsite.com',
        hours: 'Monday-Friday: 9am to 6pm  Saturday: 10am to 6pm  Sunday: 10am to 2pm',
        coordinates: {  
            lat: 48.86401400079258,
            lng: 2.3338937939395277
        },
        socials: [
            {
                href: 'https://facebook.com',
                icon: '<svg class="details__social_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>',                
                classes: ['social-icon']
            },
            {
                href: 'https://twitter.com',
                icon: '<svg  class="details__social_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg>',
                classes: ['social-icon']
            },
            {
                href: 'https://instagram.com',
                icon: '<svg  class="details__social_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>',
                classes: ['social-icon']
            },
            {
                href: 'https://pinterest.com',
                icon: '<svg  class="details__social_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.3 6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z"/></svg>',
                classes: ['social-icon']
            },
        ]
    },
];

//элементы футера About
const footerLists = {
    'information' : 
        [ 
            {
                id: idGenerator(),
                classes: ['footer-element'],
                text: 'The brand',
                href: '#',
            },
            {
                id: idGenerator(),
                classes: ['footer-element', 'footer-element_selected'],
                text: 'Local stores',
                href: '#',
            },
            {
                id: idGenerator(),
                classes: ['footer-element'],
                text: 'Customer service', 
                href: '#',
            },
            {
                id: idGenerator(),
                classes: ['footer-element'],
                text: 'Privacy & cookies',
                href: '#',
            },     
            {
                id: idGenerator(),
                classes: ['footer-element'],
                text: 'Site map',
                href: '#',
            },                   
        ],
    'Why buy from us' : 
        [            {
            id: idGenerator(),
            classes: ['footer-element'],
            text: 'Shipping & returns', 
            href: '#',
        },
        {
            id: idGenerator(),
            classes: ['footer-element'],
            text: 'Secure shopping',
            href: '#',
        },
        {
            id: idGenerator(),
            classes: ['footer-element'],
            text: 'Testimonials',
            href: '#',
        },
        {
            id: idGenerator(),
            classes: ['footer-element'],
            text: 'Award winning',
            href: '#',
        }, 
        {
            id: idGenerator(),
            classes: ['footer-element'],
            text: 'Ethical trading', 
            href: '#',
        },          
            
            
            
        ],
    'Your account' : 
        [ 
            {
                id: idGenerator(),
                classes: ['footer-element'],
                text: 'Sign in',
                href: '#',
            },
            {
                id: idGenerator(),
                classes: ['footer-element'],
                text: 'Register',
                href: '#',
            },
            {
                id: idGenerator(),
                classes: ['footer-element'],
                text: 'View cart', 
                href: '#',
            },
            {
                id: idGenerator(),
                classes: ['footer-element'],
                text: 'View your lookbook',
                href: '#',
            },   
            {
                id: idGenerator(),
                classes: ['footer-element'],
                text: 'Track an order',
                href: '#',
            },
            {
                id: idGenerator(),
                classes: ['footer-element'],
                text: 'Update information', 
                href: '#',
            },                     
        ],                
    'Lookbook' : 
        [ 
            {
                id: idGenerator(),
                classes: ['footer-element'],
                text: 'Latest posts',
                href: '#',
            },
            {
                id: idGenerator(),
                classes: ['footer-element'],
                text: 'Men’s lookbook',
                href: '#',
            },
            {
                id: idGenerator(),
                classes: ['footer-element'],
                text: 'Women’s lookbook',
                href: '#',
            },   
            {
                id: idGenerator(),
                classes: ['footer-element'],
                text: 'Lookbooks RSS feed',
                href: '#',
            },
            {
                id: idGenerator(),
                classes: ['footer-element'],
                text: 'show your lookbook',
                href: '#',
            }, 
            {
                id: idGenerator(),
                classes: ['footer-element'],
                text: 'Delete your lookbook',
                href: '#',
            },                     
        ],
    'contact details' : 
        [             
            {
                id: idGenerator(),
                classes: ['footer-element'],
                text: 'Head Office: Avenue Fashion, 180-182 Regent Street, London.',
                href: '#',
            },
            {
                id: idGenerator(),
                classes: ['footer-element'],
                text: 'Telephone: 0123-456-789',
                href: '#',
            }, 
            {
                id: idGenerator(),
                classes: ['footer-element'],
                text: 'Email: support@yourwebsite.com',
                href: '#',
            },    
        ],
}

/**
 * @param  {{id: number; classes: string[]; text: string; href: string;}} element 
 */
const getListItem = (element) => {
 /*   const li = document.createElement('li');
    const a = document.createElement('a');
    
    a.id = element.id;
    'classes' in element && element.classes.forEach(class_text => {
        a.classList.add(class_text);
    });
    'text' in element && (a.textContent = element.text);
    'title' in element && (a.textContent = element.title);
    a.href = element.href;
              
    li.appendChild(a);
    return li;*/
    return `
        <li>
            <a id=${element.id} class='${'classes' in element && element.classes.join(" ")}' href='${element.href}'>
                ${
                    'text' in element && (element.text) || 'title' in element && (element.title)
                }
            </a>
        </li>
    `;
};

/**
 * @param  {{id: number; title: string; href: string; classes: string[];}} element
 */
const getNavbarHeader4 = (element) => {
    /*const h4 = document.createElement('h4');
    const a = document.createElement('a');
    
    a.id = element.id;
    'classes' in element && element.classes.forEach(class_text => {
        a.classList.add(class_text);
    });
    'text' in element && (a.textContent = element.text);
    'title' in element && (a.textContent = element.title);
    a.href = element.href;
              
    h4.appendChild(a);
    return h4;*/
    return `
        <h4>
            <a id=${element.id} class='${'classes' in element && element.classes.join(" ")}' href='${element.href}'>
                ${
                    'text' in element && (element.text) || 'title' in element && (element.title)
                }
            </a>
        </h4>
    `;
}; 

/**
  @param  {{
        id: number;
        city: string;
        address: string;
        info: string;
        tel: string;
        site: string;
        mail: string;
        hours: string;
        coordinates: {
            lat: number;
            lng: number;
        };
        socials: {
            href: string;
            icon: string;
            classes: string[];
        };
    }} location
 */
const createButtonViewDetails = (location) => {
    
    const button = document.createElement('button');
    button.id = idGenerator();
    button.textContent = 'view details';
    button.classList.add('button-details');
    button.addEventListener('click', () => showDetails(location));
    return button;
};

const getLocationCard = (location) => {
    return `
    <div class="location-card">
        <h3 class="location-card__city">${location.city}</h3>
        <h4 class="location-card__address">${location.address}</h4>
        <p class="location-card__info">${location.info}</p>
    </div> `;
}

const getBlockLocation = (location) => {
    /* Creating a div with the id of the location id, and then it is creating a h3 with the city name,
    a h4 with the address, a p with the info, and a button with the class of button-details. */
        return `
        <div id=${location.id} class="location-block">
            ${getLocationCard(location)}
            <button class="location-block__button-details">view details</button>        
        </div>
    `;
}

const getFooterBlock = (title, list) => {
    let ul = '';
    list.forEach(item => { 
        const li = getListItem(item);
        ul += li;
    })
    return `
        <div class="about__block"> 
            <h4 class="footer-header"> ${title}</h4>
            <ul>
                ${ul}
            </ul>
        </div>
    `;
}

/**
  @param  {{id: number;
    city: string;
    address: string;
    info: string;
    tel: string;
    site: string;
    mail: string;
    hours: string;
    coordinates: {
        lat: number;
        lng: number;
    };
    socials: {
        href: string;
        icon: string;
        classes: string[];
    };}} location
* @param {{
        address : src,
        tel : src,
        site : src,
        mail : src,
        hours : src,
    }} icons
*/
const getLocationsDetailsAddressHTML = (location, icons) => {
    return `
        <div class="details__location">
        ${getLocationCard(location)}
        <ul class="location-card">
            <li class="location-card__sub-info">${icons.address} <span>${location.address}</span></li>
            <li class="location-card__sub-info">${icons.tel} <span>${location.tel}</span></li>
            <li class="location-card__sub-info">${icons.site} <span>${location.site}</span></li>
            <li class="location-card__sub-info">${icons.mail} <span>${location.mail}</span></li>
            <li class="location-card__sub-info">${icons.hours} <span>${location.hours}</span></li>
        </ul>
    </div>
    `;
};

/**
  @param  {{
        href: string;
        icon: string;
        classes: string[];
    }} social
 */
const getLocationsDetailsSocialHTML = (social) => {
    return `
        <li>
            <a href="${social.href}">
                ${social.icon}
            </a>
        </li>
    `;
}

/**
* @param  {string} src
* @param  {} func
*/
function loadScript(src, func) {
    return new Promise((resolve, reject) => {
        let script = document.createElement('script');
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.body.append(script);
    });
}

/**
 * @param  {} location
 */
function showDetails(location) {
    const mapContainer = document.getElementById('mapContainer');
    mapContainer.innerHTML = '';
    loadScript('map.js').then(() => createMap('mapContainer', location.coordinates, 'map_gray_style.json'));
    /*
    getMapImage(2000,530, location.address).then((myBlob) => {
        mapContainer.src = URL.createObjectURL(myBlob);
      });*/

    if (!blockLocationDetails.classList.contains('location-details_clicked')) blockLocationDetails.classList.add('location-details_clicked');
    let ul = '';
    location.socials.forEach(social => { 
        ul += getLocationsDetailsSocialHTML(social);
    })
    details.innerHTML = getLocationsDetailsAddressHTML(location, icons); 
    details.innerHTML += 
        `<ul class='details__social'>`
            +ul+
        `</ul>`;
    
}
function hideDetails() {
    blockLocationDetails.classList.toggle('location-details_clicked');
}

const loadMainContent = () => {
    
    let resultMenu = ''
    //загрузка навигационного меню
    navbarList.forEach(element => {
        const menu_element = getListItem(element);
      /*  menu_element.classList.add('sub-nav');
        const div = document.createElement('div');    
        element.subList.forEach(subelement => {
    
            const h4 = getNavbarHeader4(subelement);
            const ul = document.createElement('ul');
            'subList' in subelement && (subelement.subList.forEach(item => {
                const li = getListItem(item);
                ul.appendChild(li);
            }));
            div.appendChild(h4);
            div.appendChild(ul);
                   
        })
        menu_element.appendChild(div);
        menu.appendChild(menu_element);
    
        */
        let div ='';
        element.subList.forEach(subelement => {
            const h4 = getNavbarHeader4(subelement);
            let ul = '';
            'subList' in subelement && (subelement.subList.forEach(item => {
                ul += getListItem(item);
            }));
            div += '<div class="drop">' + h4 + '<ul class="drop__elements">' + ul + '</ul></div>';
        });
        resultMenu += menu_element.replace('</li>', '') + '<div>' + div + '</div></li>';
        
    })
    menu.innerHTML = resultMenu;

    //заполнение locations
    let locationsResult = '';
    locationsList.forEach(location => {
        /*const div = document.createElement('div');
        div.id = location.id;
        div.classList.add('location');
        
        const h3 = document.createElement('h3');
        h3.textContent = location.city;
        const h4 = document.createElement('h4');
        h4.textContent = location.address;
        const p = document.createElement('p');
        p.textContent = location.info;
        const button = createButtonViewDetails(location);

        div.appendChild(h3);
        div.appendChild(h4);
        div.appendChild(p);
        div.appendChild(button);
        sectionLocations.appendChild(div);*/
        locationsResult += getBlockLocation(location);
    });
    sectionLocations.innerHTML = locationsResult;

    const buttonsDetails = document.querySelectorAll('.location-block__button-details');
    for (let index = 0; index < locationsList.length; index++) {
        buttonsDetails[index].addEventListener('click', () => {
            buttonsDetails[index].classList.toggle('location-block__button-details_clicked');
            if (!buttonsDetails[index].classList.contains('location-block__button-details_clicked')) { hideDetails() }
            else {
                buttonsDetails.forEach(button => {
                    if (button.classList.contains('location-block__button-details_clicked') && button !== buttonsDetails[index]) button.classList.remove('location-block__button-details_clicked');
                })                
                showDetails(locationsList[index])
            }
            
        });
    }   

    let footerResult = '';
    //загрузка футера About    
    for (const [title, list] of Object.entries(footerLists)) {
     /*   const block = document.createElement('div');
        block.classList.add('block');
        block.classList.add(title.replaceAll(' ', '').toLowerCase());
    
        const h4 = document.createElement('h4');
        h4.textContent = title;
    
        const ul = document.createElement('ul');
        list.forEach(item => { 
            const li = getListItem(item);
            ul.appendChild(li);
        })
        
        block.appendChild(h4);
        block.appendChild(ul);
        footerAbout.appendChild(block);*/
    
        footerResult += getFooterBlock(title, list);
    }
    footerAbout.innerHTML = footerResult;
}

loadMainContent();

