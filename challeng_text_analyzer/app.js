// We want to capture all of the text into a variable

// Then we want to seperate that text into multiple variables
// setnece array
// word array

// total word count == word array.length

// function(word array) and returns unique words (objects);
  // iterate through the array and 
    // if object[word] === undefined
      // add word to the object.
  // Object.keys() to get every unique word into an array
  // we want that array's length === unique word count.

// function averageWord(word array) 
//   var total = 0;
//   iterate over the array
//     total += word.length
//   total / word array .length

// function averageSentence(sentence array) 
  // var total = 0;
  // iterate over the array
    // total += sentence.length
  // total / sentence array .length

  // word count: 113; Done

  // unique word count: 83;

  // average word length: 4.91;

  // average sentence length: 113.00 words; Based off periods for sentences

// function appender(textToAnalyze) {
//    
// }

$(function() {

  $('button').click(function(event) {
    var textToAnalyze = $('textarea').val();
    textToAnalyze = textToAnalyze.split('\n');

    var wordCount = textToAnalyze.join(' ').split(' '); // .length

    var WordCountNumber = textToAnalyze.join(' ').split(' ').length;

    var uniqueWordCount = uniqueWords(wordCount);

    var averageWordLengthCount = averageWordLength(wordCount);





  });

function uniqueWords(wordCount) {
  var newWords = [];
  for(var i = 0; i < wordCount.length; i++) {
    if(newWords.includes(wordCount[i])) {

    }
    else {
      newWords.push(wordCount[i]);
    }
  }
  console.log(newWords.length);
  return newWords.length;
}

// function averageWord(word array) 
//   var total = 0;
//   iterate over the array
//     total += word.length
//   total / word array .length

function averageWordLength(words) {
  var total = 0;
  words.forEach(function(word) {
    total += word.length;
  });

  console.log(total / words.length);
  return total / words.length;
}






});


