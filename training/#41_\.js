/**
 * Task
You might have guessed the task. Yes, This time your task is to write a regular expressions matching all palindrome substring of a string.

The rules:
 * The string contains letters, numbers, underscores and spaces.
 *
 * space is the separator. the substring means the whole of a
 * substring that separated by spaces.
 *
 * For example: "aaa bcccd" should match a substring "aaa" ,
 * should not match "ccc", "ccc" is a part of substring "bcccd"
 *
 * Palindrome substring length range is 2-7. It means don't
 * match the substring which length=1 or length>7.
 *
 * A string may contain multiple palindrome substring.
 *
 * You should not ignore case.
 *
 * Your regular expression name should be regex and
 * your result should be a string array.
 */

// let regex = /\b(\w)\1{1,7}\b|\b(\w+)(\w)?(\w)?\3\2\1{1,7}\b/g
// let regex = /\b(\w)(\w)?(\w)?\w?\3\2\1\b|\b(\w)(\w)(\w)(\w)\4\3\2\1\b/g
let regex = /\b(\w)(\w)?(\w)?\w?\3\2\1\b/g

console.log('aa bbb cccc ddddd eeeeee fffffff'.match(regex))
// [ 'aa', 'bbb', 'cccc', 'ddddd', 'eeeeee', 'fffffff' ]
console.log('aaa bcccd'.match(regex)) // [ 'aaa' ]
console.log('_x_x_ --- ~~|~~'.match(regex)) // [ '_x_x_' ]
console.log('ABCDCBA ABABABA'.match(regex))
// [ 'ABCDCBA', 'ABABABA' ]
console.log('121 1221 13577531 11211'.match(regex))
// ['121', '1221', '11211']
console.log('aabbbcccc d'.match(regex)) // null
console.log('abbA CdDc'.match(regex)) // null
console.log('1    1'.match(regex)) // null
console.log('1231 12341 123451 1234561'.match(regex)) // null

/**
 * escape characters
 * \\   matches \
 * \^   matches ^
 * \f   matches Form-feed character.
 * \n   matches Newline character.
 * \r   matches Carriage-return character.
 * \t   matches Tab character.
 * \v   matches Vertical tab character.
 *
 * to form a multi character meracharacter
 * \d   Matches a digit character.                    Equivalent to [0-9].
 * \D   Matches a nondigit character.                 Equivalent to [^0-9].
 * \w   Matches any letters, numbers and underscore.  Equivalent to [A-Za-z0-9_].
 * \W   Matches any character except lettes, numbers and underscore.
 *      Equivalent to [^A-Za-z0-9_].
 * \s   Matches any whitespace character.             Equivalent to [\f\n\r\t\v].
 * \S   Matches any non-whitespace character.         Equivalent to [^\f\n\r\t\v].
 * \b   Matches a word boundary; that is, the position between a word and a whitespace.
 * \B   Matches a word non-boundary.
 */

{
  {
    ;('⏎')
  }
}
