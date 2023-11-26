import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Testing <GifGrid />',
    () => {

        test('should render loading initially',
            () => {

                useFetchGifs.mockReturnValue({
                    images: [],
                    isLoading: true
                });

                const categoryTest = 'Rick and Morty';
                render(<GifGrid category={categoryTest} />);

                expect(screen.getByText('Loading...'));
                expect(screen.getByText(categoryTest));

            });

        test('should render items when useFetchGifs images have been loaded',
            () => {
                const categoryTest = 'Minecraft';
                const gifs = [{
                    id: 'ABC',
                    title: 'Minecraft',
                    url: 'https://localhost/minecraft.jpg'
                },
                {
                    id: 'DEF',
                    title: 'Goku',
                    url: 'https://localhost/goku.jpg'
                }
            ];

                useFetchGifs.mockReturnValue({
                    images: gifs,
                    isLoading: true
                });

                render(<GifGrid category={categoryTest} />);

                expect(screen.getAllByRole('img').length).toBe(2);

            });

    });