// ideally the regex is supposed to be complex but I am using 
// a simple regex for the demo
const EMAIL_VALIDATION_REGEX = /(.+)@(.+){2,}\.(.+){2,}/;
const INCREASING_STRAIGHT_REGEX = /abc|bcd|cde|def|efg|fgh|ghi|hij|ijk|jkl|klm|lmn|mno|nop|opq|pqr|qrs|rst|stu|tuv|uvw|vwx|wxy|xyz/;
const FORBIDDEN_CHARACTERS_REGEX = /i|O|l/;
const NON_OVERLAPPING_PAIRS_REGEX = /aa|bb|cc|dd|ee|ff|gg|hh|ii|jj|kk|ll|mm|nn|oo|pp|qq|rr|ss|tt|uu|vv|ww|xx|yy|zz/g;
const LOWER_CASE_CHARS_REXEX = /^[a-z]+$/;
const MAX_PASSWORD_LENGTH = 32;

export const isValidEmail = email => EMAIL_VALIDATION_REGEX.test(email)
export const ruleIncreasingStraight = password => INCREASING_STRAIGHT_REGEX.test(password)
export const ruleShouldNotContainLetters = password => !!password && (!FORBIDDEN_CHARACTERS_REGEX.test(password))
export const ruleContainNonOverlappingPairs = password => 
    (password.match(NON_OVERLAPPING_PAIRS_REGEX) || []).length >= 2;
export const validLength = password => !!password && password.length <= MAX_PASSWORD_LENGTH
export const onlyLowerCaseChars = password => LOWER_CASE_CHARS_REXEX.test(password)