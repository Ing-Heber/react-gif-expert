import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Testing <AddCategory/>',
    () => {

        test('should change inputText value', () => {

            const inputValue = 'Rick';

            render(<AddCategory onNewCategory={() => { }} />);
            const input = screen.getByRole('textbox');

            // Use this when only one element available!
            fireEvent.input(input, { target: { value: inputValue } });
            expect(input.value).toBe(inputValue);
            // screen.debug()

        });

        test('should call onNewCategory if input has value',
            () => {

                const inputValue = 'Goku';
                const onNewCategory = jest.fn();

                render(<AddCategory onNewCategory={onNewCategory} />);
                const input = screen.getByRole('textbox');
                const form = screen.getByRole('form');

                fireEvent.input(input, { target: { value: inputValue } });
                fireEvent.submit(form);

                // screen.debug()
                expect(input.value).toBe('');

                expect( onNewCategory ).toHaveBeenCalled();

                // When calling function one or more times
                expect( onNewCategory ).toHaveBeenCalledTimes(1);
                // When needed to verify if a prop has been sent
                expect( onNewCategory ).toHaveBeenCalledWith(inputValue);
            });

            test('should not call onNewCategory when empty input', () => { 
                const onNewCategoryTest = jest.fn();

                render(<AddCategory onNewCategory={onNewCategoryTest} />);
                const form = screen.getByRole('form');
                fireEvent.submit(form);

                // Whe can use negations with .not.
                expect( onNewCategoryTest ).not.toHaveBeenCalled();
                expect( onNewCategoryTest ).toHaveBeenCalledTimes(0);

             });

    });