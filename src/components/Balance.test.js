const rewire = require("rewire")
const Balance = rewire("./Balance")
const moneyFormatter = Balance.__get__("moneyFormatter")
// @ponicode
describe("moneyFormatter", () => {
    test("0", () => {
        let callFunction = () => {
            moneyFormatter(10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            moneyFormatter(43083)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            moneyFormatter(-10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            moneyFormatter("-")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            moneyFormatter(-1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            moneyFormatter(Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})
