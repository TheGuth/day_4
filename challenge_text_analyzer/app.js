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

  // word count: 113; Done actual answer 130;

  // unique word count: 83; Done actual answer 88;

  // average word length: 4.91; Done actual answer 4.346

  // average sentence length: 113.00 words; Based off periods for sentences
    // Done actual answer 130;

// function appender(textToAnalyze) {
//    
// }

$(function() {

  $('button').click(function(event) {
    event.preventDefault();
    $("dl").removeClass('hidden');

    // capturing text from textarea and then turning it into
    // an array breaking it up by new line character.

    var textToAnalyze = $('textarea').val();
    textToAnalyze = textToAnalyze.split('\n');

    // variables holding word array, and sentence array

    var wordCount = textToAnalyze.join(' ').split(' '); 
    var sentencesCount = textToAnalyze.join(' ').split(/[!?.]/);

    // Variables being set to the function calls to answer each
    // analyzing question.

    var WordCountNumber = textToAnalyze.join(' ').split(' ').length;
    var uniqueWordCount = uniqueWords(wordCount);
    var averageWordLengthCount = averageWordLength(wordCount);
    var averageSentenceCount = averageSentenceLength(sentencesCount);

    // Appending to the DOM through classes set on Definition 
    // description elements

    $(".js-wordCount").text(WordCountNumber);
    $(".js-uniqueWordCount").text(uniqueWordCount);
    $(".js-averageWordLength").text(averageWordLengthCount);
    $(".js-averageSentenceLength").text(averageSentenceCount);

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
    
    return newWords.length;
  }

  function averageWordLength(words) {
    var total = 0;
    words.forEach(function(word) {
      total += word.length;
    });

    return (total / words.length).toFixed(2);
  }

  function averageSentenceLength(sentences) {
    var sentenceLength = 0;
    sentences.forEach(function(sentence) {
      sentenceLength += sentence.split(' ').length;
    });

    return (sentenceLength / sentences.length).toFixed(2);
  }

  // function averageSentence(sentences) {
  //   var total = 0;

  //   // console.log(sentences.length);
  //   sentences.forEach(function(sentence) {
  //     total += sentence.length;
  //   // console.log(sentences.length);
  //   });

  //   console.log(total);
  //   console.log(sentences.length);
  //   console.log(total / sentences.length);
  //   return total / sentences.length;
  // }
});


