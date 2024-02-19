const LOADING_BANNER = "Banner - Ricky and Morty";

const loading_banner = () => $("<h1>").addClass("text").text(LOADING_BANNER);

const image_banner = "https://images.hdqwalls.com/wallpapers/rick-and-morty-smith-adventures-4k-di.jpg";

export default function render() {
    
    
    return $('<div class="bg_green">' + 

            '<div><img class="image_header bg_green" src="' + image_banner + '" alt=""></div>' + 
    
            '<div><h1 class="text">' + LOADING_BANNER + '</h1></div>' +
    
            '</div>');
        
            
};