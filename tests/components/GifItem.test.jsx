import { render, screen } from '@testing-library/react'
import { GifItem } from '../../src/components/GifItem';

describe('Testing <GifItem /> Component',
    () => {

        const testTitle = 'One Punch';
        const testUrl = 'https://localhost/OnePunch.com';

        test('Should Match Snapshot',
            () => {
                const { container } = render(<GifItem title={testTitle} url={testUrl} />);
                expect(container).toMatchSnapshot();
            });

        test('Should have title and url props',
            () => {

                render(<GifItem title={testTitle} url={testUrl} />);

                // expect(screen.getByText(testTitle)).toBeTruthy();
                // expect(screen.getByRole('img').src).toBe(testUrl);
                // expect(screen.getByRole('img').alt).toBe(testUrl);

                // Or try this...

                const { src, alt } = screen.getByRole('img');
                expect(src).toBe(testUrl);
                expect(alt).toBe(testTitle);
            })

        test('Should render components title',
            () => {
                render(<GifItem title={testTitle} url={testUrl} />);

                expect(screen.getByText(testTitle)).toBeTruthy();

            })
    });