describe('app', function ()
{
    'use strict';

    var answers = window.app;

    describe('returnOnlyLetter', function () {
        it('should return only letter', function () {
            expect(answers.returnOnlyLetter('a4l1f5a')).toBe('alfa');
            expect(answers.returnOnlyLetter('burnir234')).toBe('burnir');
        });
        it('should return empty string', function () {
            expect(answers.returnOnlyLetter('45345')).toBe('');
            expect(answers.returnOnlyLetter('5243534534')).toBe('');
        });
        it('number should return false', function () {
            expect(answers.returnOnlyLetter(45345)).toEqual(false);
            expect(answers.returnOnlyLetter(987655443)).toEqual(false);
        });
    });

    describe('alphabetOrder', function () {
        it('should return letters in alphabetical order', function () {
            expect(answers.alphabetOrder('alfa')).toBe('aafl');
            expect(answers.alphabetOrder('burnir')).toBe('binrru');
        });
        it('should return lower case letters in alphabetical order', function () {
            expect(answers.alphabetOrder('AlfA')).toBe('aafl');
            expect(answers.alphabetOrder('bUrNiR')).toBe('binrru');
        });
        it('should return only letters in alphabetical order', function () {
            expect(answers.alphabetOrder('A1l2f3a')).toBe('aafl');
            expect(answers.alphabetOrder('b1u2rn3i4r5')).toBe('binrru');
        });
     });
});
