import { render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('Testing <GifExpertApp />', () => {
    // Test 

    test('should match with snapshot', () => {
        const { container } = render(<GifExpertApp />);
        expect(container).toMatchSnapshot();
    });

    test('should render <AddCategory /> component', () => {
        const placeholderTest = 'Search Gif';

        render(<GifExpertApp />);
        expect(screen.getByRole('textbox')).toBeTruthy();
        expect(screen.getByPlaceholderText(placeholderTest)).toBeTruthy();
        
    });
});