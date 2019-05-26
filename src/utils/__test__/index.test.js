import {
    isValidEmail,
    ruleIncreasingStraight,
    ruleShouldNotContainLetters,
    ruleContainNonOverlappingPairs,
    validLength,
    onlyLowerCaseChars
} from './../index';

describe('Utils Tests', () => {
    test('method, isValidEmail', () => {
        expect(
            [
                'mock@email.com',
                '@.asd',
                'asdf asdf',
                'a@a.a',
                '..asd@asd.ad'
            ].map(email => isValidEmail(email))
        ).toEqual([
            true,
            false,
            false,
            false,
            true
        ])
            
    })

    test('method, ruleIncreasingStraight', () => {
        expect(
            [
                'sometextabcasd',
                'sgdsfgsacd',
                'sadaiuyer',
                'bcdasdfasfe',
                'zsasasdpqr'
            ].map(password => ruleIncreasingStraight(password))
        ).toEqual([
            true,
            false,
            false,
            true,
            true
        ])
            
    })

    test('method, ruleShouldNotContainLetters', () => {
        expect(
            [
                'sometextabcasd',
                'sgdsfgsacid',
                'sadaiuyOer',
                'bcdasdfalsfe',
                'zsasasdpqr'
            ].map(password => ruleShouldNotContainLetters(password))
        ).toEqual([
            true,
            false,
            false,
            false,
            true
        ])
            
    })

    test('method, ruleContainNonOverlappingPairs', () => {
        expect(
            [
                'asdaabbasd',
                'asdaaasdf',
                'asdbbasdf',
                'asdfasdfsadfbcdasdfalsfe',
                'zsaaasbbasdccpddqr'
            ].map(password => ruleContainNonOverlappingPairs(password))
        ).toEqual([
            true,
            false,
            false,
            false,
            true
        ])   
    })

    test('method, validLength', () => {
        expect(
            [
                'asdaabbasd',
                'asdaaasasdfasdfasdfasdasf asdfasdfasdfasdfasdfasdf',
                'asdbbasdf asdasd                           ',
                'asdfasdfsadfbcdaasadfsfdasdfasdfasdfsdfalsfe',
                'zsaaasbbasdccpddqr'
            ].map(password => validLength(password))
        ).toEqual([
            true,
            false,
            false,
            false,
            true
        ])   
    })
    
    test('method, onlyLowerCaseChars', () => {
        expect(
            [
                'asdaabbasd',
                'asdaaasasAASDFASDdfa',
                'asdbbasdf asdasdASD ASD',
                'asdfasdfsadfbcdaasadWE',
                'zsaaasbbasdccpddqr'
            ].map(password => onlyLowerCaseChars(password))
        ).toEqual([
            true,
            false,
            false,
            false,
            true
        ])   
    })
});