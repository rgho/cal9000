CAL9000
=========

## About CAL
Inspired by 2001 Space Odyssey's HAL9000, CAL9000 is a Color Analysis Bot. Given an image, CAL will analyze its pixel colors and give a humanlike opinion on the image: "Wow, I see some lavender tones and a whole lot of hot pink in this image!".

## Demo
A working demo (tested on firefox) is available here: http://rghosh.com/cal9000/
Drag an image from your desktop onto the CAL's blue label.

## How CAL works
CAL operates with a scraped dataset of 1000s of HEX colors and their humanlike descriptions (eg: Twilight Blue). These values are preproccessed as CieLAB colors and placed into "buckets" based on similarity to each outher. When an image is dropped into CAL, the image is first rescaled to a smaller size. Then, each pixel is converted to the CieLAB color space.  The CIELab value points to a particular bucket. CAL then searches amoung all the colors in the guven bucket and immediately surrounding buckets to find a color that most closely maps to the current pixel.

After performing this action on each pixel CAL has a good idea of which colors occur most commonly in the image. CAL then uses some very naive NLP and a Text to speech API, to tell the user what it sees.

The CAL demo is built on JavaScript/jQuery, HTML5, and the Bootstrap CSS framework. No backend component exists. CAL operates completely on the client side.


## Code Warning
CAL 9000 was hacked together over 2 days at the end of Hacker School (http://www.hackerschool.com) to serve as a presentation demo. While the color matching and search have been optimized, the code has not been refactored to be neat, and follow best practices. As a result the code needs a little love.

## Future Development
* Refactor code to be neat, readable, and avoid code duplication.
* Algorithms should be optimized to exclude double mention of similar colors. Currently, given and image of a forrest, CAL might describe it as both "Evergreen" and "Forrest Green". Ideally CAL should collapse analyze the similarity levels of the most frequent colors and try to respond with the least simliar, but most frequent colors. Currenlty CAL reports on the most frequent colors.
* Needs further testing on Chrome and IE.
* Needs better notification to user while CAL is waiting for Text-to-voice API to return data.
* Present user with a swatch of frequent colors!

## License
CAL is released under the GPL v3 license.
