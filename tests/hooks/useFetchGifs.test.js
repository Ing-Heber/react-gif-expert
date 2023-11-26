import { render, renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('useFetchGifs tests', () => {

    test('should return initial state', () => {
        const categoryTest = 'One Punch';

        // Always focus on testing hooks result
        const { result } = renderHook(() => useFetchGifs(categoryTest));
        const { images, isLoading } = result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();

    });

    test('should return an array of images and isLoading should be false', async () => {
        const categoryTest = 'One Punch';
        const { result } = renderHook(() => useFetchGifs(categoryTest));

        // To wait for 6 segs, if no result then could be a backend error.
        await waitFor(() => expect(result.current.images.length).toBeGreaterThan(0), { timeout: 6000 });
        
        const { images, isLoading } = result.current;
        expect(images.length).toBeGreaterThan(0);
        expect( isLoading ).toBeFalsy();


    });

});