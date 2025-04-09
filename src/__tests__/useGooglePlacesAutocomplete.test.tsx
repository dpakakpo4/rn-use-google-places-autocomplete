// import { renderHook } from '@testing-library/react-hooks/native';
// import useGooglePlacesAutocomplete from '../lib/useGooglePlacesAutocomplete';

// describe('UseGooglePlacesAutocomplete hook', () => {
//     // it('should exist', () => {
//     //     const result = renderHook(() => useGooglePlacesAutocomplete());
//     //     expect(result).toBeDefined();
//     // });

//     // it('should throw error if no gcpApiKey is given to it', () => {
//     //     expect(() => {
//     //         useGooglePlacesAutocomplete();
//     //     }).toThrow(NO_GCP_API_KEY_ERROR);
//     // });

//     // it('should throw error if language is set to empty string', () => {
//     //     // const
//     //     expect((data: { gcpApiKey: 'SOME_API_KEY', language: '' }) => {
//     //         useGooglePlacesAutocomplete(data);
//     //     }).toThrow(NO_LANG_ERROR);
//     // });

//     it('should return query', () => {
//         const result = renderHook((props) => useGooglePlacesAutocomplete(props), {
//             initialProps: {
//                 gcpApiKey: 'SOME_API_KEY'
//             }
//         });

//         expect(result.result.current.query).toBe("")
//     });
// });
