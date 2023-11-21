// 1.) Create a new <a> element containing the text "Buy Now!"
// with an id of "cta" after the last <p>

// 2.) Access (read) the data-color attribute of the <img>,
// log to the console

// 3.) Update the third <li> item ("Turbocharged"),
// set the class name to "highlight"

// 4.) Remove (delete) the last paragraph
// (starts with "Available for purchase now…")

// 5.) Create a listener on the "Buy Now!" link that responds to a click event.
// When clicked, the the "Buy Now!" link should be removed
// and replaced with text that says "Added to cart"

$(document).ready(function(){
    // 1.)
    const $newAnchor = $('<a>'); // creates new <a> element

    $newAnchor.text("Buy Now!"); // sets the text to $newAnchor
    $newAnchor.attr('id', 'cta'); // sets the id to <a> as cta

    const $lastParagraph = $('p:last'); // finds last p
    $lastParagraph.after($newAnchor) // pushes cta to the end of last p
    
    // 2.)
    const $img = $('img') // locates element img
    const $imgColor = $img.attr('data-color') // extracts data color from img
    console.log($imgColor) // outputs img color to console
    
    // 3.)
    const $turbo = $('li:eq(2)').text("Highlight") // finds third li element and updates text

    // 4.) 
    const $lastP = $('p:last').remove() // locates last p element and removes it

    // 5.)
    // establishes cta from Q1 to have function on click and updates text
    const $buyNowLink = $('#cta'); 
    $buyNowLink.click(function(){
        $(this).text("Added to Cart!")
    })
});




