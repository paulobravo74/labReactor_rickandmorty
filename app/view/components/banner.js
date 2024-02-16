const LOADING_BANNER = "Banner - Ricky and Morty";

const loading_banner = () => $("<h1>").addClass("text").text(LOADING_BANNER);

export default function render() {
    $("#app")
        .empty()
        .append(($("<div>").addClass("bg_green")).append($("<h1>").addClass("text").text(LOADING_BANNER)));
        
            
};