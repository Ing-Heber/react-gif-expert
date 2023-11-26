import { getGifs } from "../../src/helpers/getGifs";

describe('Testing getGifs function',
    () => {

        test('should return an array of gifs',
            async () => {
                const gifs = await getGifs('One Punch');
                const title = 'One Punch';

                // To test a return of an Array
                expect(gifs.length).toBeGreaterThan(0);

                // To test correct object structure
                expect(gifs[0]).toEqual({
                    id: expect.any(String),
                    title: expect.any(String),
                    url: expect.any(String),
                });

                // To test title to contain 'One Punch'
                expect(gifs[0].title).toContain('One Punch') ;
            });
    });