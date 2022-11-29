const { render } = require("@testing-library/react")
const { GiftItem } = require("../../src/components/GiftItem")

describe('Prueba componente', () => { 
    const title = 'sarasa';
    const url = 'https://sarasa.com/sarasa.jpg';
    test('debe hacer match con el sntaptsot', () => { 
        const{container} = render(<GiftItem title={title} url={url}/>);
        expect(container).toMatchInlineSnapshot();

     })
 })