import { welcome } from "./welcome"

describe('mostra alert',()=>{    
    const mostraAlert = jest.fn()
    window.alert = mostraAlert

    it('Deve mostrar o alerta',()=>{
        welcome()
        expect(mostraAlert).toBeCalled()
    })

})