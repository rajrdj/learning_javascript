/*let userName= "raj";
 
let  age ="25";
let repoCount = 98;
 
let  gender ="male";

console.log(`my name is ${userName} and my age is ${age} and my gender is ${gender}`);
console.log(`Hello my name is ${userName} and my repo count is ${repoCount}`);
this is called interpolation used by backticks `  to insert variables into the string`

*/


// new methods to declere the string and shoudl be pracise when declering javascirpt 

let string1 = new  String("raj");
//console.log("string created using object constructor" + string1 );

// console.log(string1.charAt(0)); // returns r
// console.log(string1.concat(" is a good boy")); //returns raj is a good boy
// console.log(string1.indexOf('a')); // returns index of 'a' in the string if not found it will return 1 
console.log(string1);



const a = "a";
const  b = "b";

// if (a>b) {
//     console.log (`${a} is greater than $ {b}`);
//     } else{
//         console.log ("$ {a} is less than or equal to $ {b}")
    
// }


function areEqualCaseInsensitive(str1, str2) {
    return str1.toUpperCase() === str2.toUpperCase();
  }
  

let user = areEqualCaseInsensitive("g","I");

console.log(user);


//anchor(): Creates an HTML anchor element.


const str = "Visit OpenAI";
const anchor = str.anchor("https://www.openai.com");
console.log(anchor); // <a href="https://www.openai.com">Visit OpenAI</a>


///at(): //Returns the character at a specified index.

//
const str2 = "SMASHIN SCOPE";
console.log(str2.at(3)); // 'S'


//big():// Wraps the string in a <big> HTML tag.
const str3 = "SMASHIN SCOPE";
console.log(str3.big()); // <big>SMASHIN SCOPE</big>
//blink(): Wraps the string in a <blink> HTML tag.

//
const str4 = "SMASHIN SCOPE";
console.log(str4.blink()); // <blink>SMASHIN SCOPE</blink>
//bold(): Wraps the string in a <b> HTML tag.

//
const str5 = "SMASHIN SCOPE";
console.log(str5.bold()); // <b>SMASHIN SCOPE</b>
//charAt(): Returns the character at a specified index.

//
const str6 = "SMASHIN SCOPE";
console.log(str6.charAt(0)); // 'S'


//charCodeAt(): Returns the Unicode of the character at a specified index.

const str7 = "SMASHIN SCOPE";
console.log(str7.charCodeAt(0)); // 83
// codePointAt(): Returns the Unicode code point value of the character at a given index.

//
const str8 = "SMASHIN SCOPE";
console.log(str8.codePointAt(0)); // 83
// concat(): Concatenates two or more strings.

//
const str10 = "SMASHIN";
const str11 = "SCOPE";
console.log(str10.concat(" ", str11)); // 'SMASHIN SCOPE'
//constructor: Returns the constructor function that created the string prototype.
// 
//
const str12 = "SMASHIN SCOPE";
console.log(str12.constructor); // ƒ String() { [native code] }
// And the list continues with more methods! Would you like to explore further?



//
const str13 = "SMASHIN SCOPE";
console.log(str13.endsWith("SCOPE")); // true


//fixed(): Wraps the string in a <tt> HTML tag.

//
const str14 = "SMASHIN SCOPE";
console.log(str14.fixed()); // <tt>SMASHIN SCOPE</tt>
// fontcolor(): Wraps the string in a <font> HTML tag with a specified color.

//
const str15 = "SMASHIN SCOPE";
console.log(str15.fontcolor("blue")); // <font color="blue">SMASHIN SCOPE</font>
// fontsize(): Wraps the string in a <font> HTML tag with a specified size.

//
const str16 = "SMASHIN SCOPE";
console.log(str16.fontsize("6")); // <font size="6">SMASHIN SCOPE</font>
// includes(): Checks if a string contains a specified substring.

//
const str17 = "SMASHIN SCOPE";
console.log(str17.includes("SCOPE")); // true
//indexOf(): Returns the index within the calling string of the first occurrence of the specified value, or -1 if not found.

//
const str18 = "SMASHIN SCOPE";
console.log(str18.indexOf("S")); // 0


/*
the SMASHIN SCOPE method and its emphasis on visualization and creative thinking, here's a fun and effective trick to learn string methods:

Synthesize: Begin by familiarizing yourself with each string method. Read through their descriptions and understand what each method does.

Movement: Imagine each string method as a unique tool in your mental toolbox, ready to move and manipulate text in different ways.

Association: Associate each string method with a visual representation or action. For example, visualize concat() as two strings coming together like puzzle pieces.

Sexuality/Self: Relate each string method to your own experiences or preferences. Think about which methods resonate with you the most and why.

Humour: Inject humor into your learning process by creating funny or quirky associations for each method. The sillier, the better!

Imagination: Let your imagination run wild! Visualize scenarios where you would use each string method and how it would transform the text.

Numbers: Create a mental list or sequence of the string methods, associating each method with a number that holds personal significance to you.

Symbolism: Assign symbolic meanings to each string method. For example, toUpperCase() could symbolize "raising" the text to a higher level.

Colour: Assign a color to each string method and visualize the text being painted or highlighted with that color as you apply the method.

Order: Arrange the string methods in a logical order that makes sense to you, perhaps based on their functionalities or similarities.

Positive Images: Focus on the positive aspects of learning and mastering string methods. Visualize yourself confidently using each method to accomplish tasks.

Exaggeration: Exaggerate the effects of each string method in your mind to make them more memorable and impactful.

By incorporating the SMASHIN SCOPE principles into your learning process, you can make learning string methods not only effective but also fun and engaging. Would you like to dive into any specific string method to see how this trick can be applied?


 applying the SMASHIN SCOPE trick to each one:

anchor(): Visualize a string being anchored to a specific point, like tying a rope to an anchor to secure it in place.

at(): Imagine pointing to a specific character in a string, as if pointing to a star in the night sky.

big(): Envision the string becoming larger in size, like a balloon inflating to display the text.

blink(): Picture the string blinking on and off, like a flashing neon sign.

bold(): See the text becoming bold and prominent, standing out from the rest of the content.

charAt(): Imagine plucking out a specific character from the string, like picking a cherry from a tree.

charCodeAt(): Visualize each character being assigned a unique code, like characters in a secret code.

codePointAt(): Imagine pointing to a specific code point within the string, like navigating through a map with coordinates.

concat(): Picture two strings merging together, like two streams converging into one river.

constructor: Associate the constructor with the architect of a building, as if the string is being constructed from the ground up.

endsWith(): Envision the string reaching its end point, like a road leading to a destination.

fixed(): See the string being fixed in place, like a sign nailed to a wall.

fontcolor(): Visualize the text changing color, like painting a white canvas with vibrant hues.

fontsize(): Imagine the text changing size, like adjusting the font size on a document.

includes(): Picture the string encompassing another string within it, like a larger circle containing a smaller one.

indexOf(): Visualize searching for a specific character within the string, like looking for a hidden treasure in a map.

isWellFormed(): Associate this with a quality check, ensuring that the string is properly formed and structured.

italics(): Envision the text leaning slightly to one side, like italicized handwriting.

lastIndexOf(): Imagine searching for a character starting from the end of the string, like retracing your steps in reverse.

length: Picture the length of the string as a measuring tape, quantifying the amount of text.

These are just a few examples of how you can apply the SMASHIN SCOPE trick to learn string methods creatively. Would you like to continue with more methods?

User
yes
ChatGPT
Let's continue exploring the remaining string methods with the SMASHIN SCOPE trick:

link(): Visualize the string transforming into a hyperlink, like turning text into clickable web content.

localeCompare(): Imagine comparing two strings in different languages, like comparing translations side by side.

match(): Picture the string being matched against a pattern, like fitting puzzle pieces together.

matchAll(): Visualize finding all occurrences of a pattern within the string, like discovering hidden treasures scattered throughout a map.

normalize(): Imagine standardizing the string's format, like organizing scattered documents into a neat stack.

padEnd(): See the string being padded with characters at the end, like adding cushions to the end of a bench.

padStart(): Visualize padding characters added to the beginning of the string, like adding a welcome mat to the entrance of a house.

repeat(): Picture the string being repeated multiple times, like echoes reverberating through a canyon.

replace(): Imagine replacing specific parts of the string with something else, like swapping puzzle pieces to create a new picture.

replaceAll(): Visualize replacing all occurrences of a substring within the string, like replacing all the blue tiles in a mosaic with red ones.

search(): Picture searching for a specific pattern within the string, like hunting for hidden clues in a detective mystery.

slice(): Imagine slicing a portion of the string, like cutting a slice of cake from a whole.

small(): Visualize shrinking the text size, like viewing text through a magnifying glass.

split(): Picture splitting the string into an array of substrings, like breaking a large cookie into smaller pieces.

startsWith(): Imagine checking if the string starts with a specific substring, like examining the beginning of a story for a familiar phrase.

strike(): Visualize striking through the text, like drawing a line through an item on a checklist.

sub(): Picture the text being subscripted, like writing chemical formulas with smaller text below the line.

substr(): Imagine extracting a substring from the string, like cutting out a section from a newspaper article.

substring(): Visualize extracting a portion of the string between two specified indices, like highlighting a section of text with a marker.

sup(): Picture the text being superscripted, like writing mathematical exponents with smaller text above the line.

toLocaleLowerCase(): Imagine converting the string to lowercase according to the specified locale, like translating text into a regional dialect.

toLocaleUpperCase(): Visualize converting the string to uppercase according to the specified locale, like translating text into formal language.

toLowerCase(): Picture converting all characters in the string to lowercase, like whispering a secret message.

toString(): Imagine representing the string as a string data type, like packaging an item for shipping.

toUpperCase(): Visualize converting all characters in the string to uppercase, like shouting a message to be heard.

toWellFormed(): Picture transforming the string into a well-formed format, like untangling a knotted rope.

trim(): Imagine removing whitespace from both ends of the string, like trimming the edges of a piece of fabric.

trimEnd(): Visualize removing whitespace from the end of the string, like cutting off the frayed end of a rope.

trimStart(): Picture removing whitespace from the beginning of the string, like cleaning the dust off the top of a bookshelf.

valueOf(): Imagine extracting the primitive value of the string, like revealing the essence of a hidden treasure.

By associating each string method with vivid mental images or actions, you can make learning 
*/
