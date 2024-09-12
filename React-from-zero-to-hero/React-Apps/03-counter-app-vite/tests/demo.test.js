describe('Tests on <DemoComponen>', () => {
    test('This test should pass', () => {
        // 1. Initialization
        const message1 = 'Hello';
        /// 2. Execution
        const message2 = message1.trim();
        /// 3. Assertion
        // expect(message2).toBe(message1);
        expect(message1).toBe(message2);
    });
});