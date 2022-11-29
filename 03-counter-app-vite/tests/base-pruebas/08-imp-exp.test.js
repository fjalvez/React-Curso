import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('Pruebas en 08-imp-exp', () => { 

    test('getHeroesById debe retornar un heroe por ID', () => { 
        const id = 1;

        const heroe = getHeroeById( id );

        expect(heroe).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
     })

     test('getHeroesById debe retornar un undefined', () => { 
        const id = 35;

        const heroe = getHeroeById( id );

        expect(heroe).toBeFalsy();
     })

     test('getHeroesByOwner debe retornar heroes de DC', () => { 
        const owner = 'DC';

        const heroes = getHeroesByOwner( owner );

        expect(heroes.length).toBe(3);

        expect(heroes).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
          ]);
     })

     test('getHeroesByOwner debe retornar heroes de Marvel', () => { 
        const owner = 'Marvel';

        const heroes = getHeroesByOwner( owner );
       
        expect(heroes.length).toBe(2);
     })

 })