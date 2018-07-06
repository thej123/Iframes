// Firefox does not support document.all
var IE = (document.all && document.getElementById) ? true : false;
    
animals = new Array("mantis", "bear", "fish");
nature = new Array("fall", "mountain", "balloon");

images = {"mantis" : "https://c.pxhere.com/photos/b5/ea/praying_mantis_religiosa_insect_green_bush_sheet_nature-828293.jpg!s", 
"bear" : "https://c.pxhere.com/photos/37/f2/luggage_antique_teddy_soft_toy_stuffed_animal_toys_funny_curious-497852.jpg!s",
"fish" : "https://c.pxhere.com/photos/96/88/discus_fish_symphysodon_aequifasciatus_fish_nature_animal_swim_color_fauna-1204333.jpg!s",
"fall" : "https://c.pxhere.com/photos/7c/03/beautiful_girl_in_the_park_throwing_leaves_autumn_portrait_romantic_park_feeling_in_love-1198258.jpg!s",
"mountain" : "https://c.pxhere.com/images/ce/4f/855218d016e5275513bf6646770a-1427839.jpg!s",
"balloon" : "https://c.pxhere.com/photos/41/89/balloon_heart_love_romance_sky_heart_shaped_red_romantic-841156.jpg!s",
}

function getList(group) {
    // clear out the current option
    for (i=document.myForm.pictures.options.length-1; i>0; i--) {

        if (IE) {
            // in IE use remove() function
            document.myForm.pictures.options.remove(i);
        } else {
            // remove() is not a function in Firefox
            document.myForm.pictures.options[i] = null;
        }
    }

    // Add the options is required to the second box
    dept = group.options[group.selectedIndex].value;
    
    if (dept != '') {
        if (dept == "1") {
            for (i=1; i<=animals.length; i++) {
                document.myForm.pictures.options[i] =
                new Option(animals[i-1]);
            }
        }
        if (dept == "2") {
            for (i=1; i<=nature.length; i++) {
                document.myForm.pictures.options[i] =
                new Option(nature[i-1]);
            }
        }
    }
    // Empty the Iframe if group is selected
    document.getElementById('myFrame').setAttribute('src', "")
}

// Set the picture in IFrame
function getPicture(name){

    dept = name.options[name.selectedIndex].value;
    url = images[dept];
        
    document.getElementById('myFrame').setAttribute('src', url)
}