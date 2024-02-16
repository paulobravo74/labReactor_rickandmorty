const LOADING_TEXT = "Waiting.....";

const loadingText = () => $("<h1>").addClass("wait").text(LOADING_TEXT);

export default function render() {

    $('#app')
        .empty()
        .append($('<div>').addClass("text").append(loadingText()));

        //console.log('wait');
    
}