import {
    createSelector,
    createEntityAdapter
} from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";

const clientsAdapter = createEntityAdapter({})

const initialState = clientsAdapter.getInitialState()

export const clientsApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getClients: builder.query({
            query: () => ({
                url: '/api/clients',
                validateStatus: (response, result) => {
                    return response.status === 200 && !result.isError
                },
            }),
            transformResponse: responseData => {
                const loadedClients = responseData.map(client => {
                    client.id = client._id
                    return client
                });
                return clientsAdapter.setAll(initialState, loadedClients)
            },
            providesTags: (result, error, arg) => {
                if (result?.ids) {
                    return [
                        { type: 'Client', id: 'LIST' },
                        ...result.ids.map(id => ({ type: 'Client', id }))
                    ]
                } else return [{ type: 'Client', id: 'LIST' }]
            }
        }),
        getCurrentClient: builder.query({
            query: (id) => ({
                url:  `/api/clients/${id}`,
                validateStatus: (response, result) => {
                    return response.status === 200 && !result.isError
                },
            }),
            providesTags: (result, error, arg) => {
                if (result?.ids) {
                    return [
                        { type: 'Client', id: 'LIST' },
                        ...result.ids.map(id => ({ type: 'Client', id }))
                    ]
                } else return [{ type: 'Client', id: 'LIST' }]
            }
        }),
    
    
        addNewClient: builder.mutation({
            query: initialUserData => ({
                url: '/api/clients',
                method: 'POST',
                body: {
                    ...initialUserData,
                }
            }),
            invalidatesTags: [
                { type: 'Client', id: "LIST" }
            ]
        }),
        updateClient: builder.mutation({
            query: initialUserData => ({
                url: '/api/clients',
                method: 'PATCH',
                body: {
                    ...initialUserData,
                }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Client', id: arg.id }
            ]
        }),
        deleteClient: builder.mutation({
            query: (id) => ({
                url: `/api/clients/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Client', id: arg.id }
            ]
        }),
        logNewWeight : builder.mutation({
            query: (newWeight) =>({
                url: `/api/clients/weights`,
                method: 'POST',
                body: newWeight

            }),
            invalidatesTags: ['Client' , 'Weight']

        }),
        resetWeights : builder.mutation({
            query: () =>({
                url: `/api/clients/weights/`,
                method: 'PATCH',
               

            }),
            invalidatesTags: ['Client' , 'Weight']

        }),
        getClientDietPlan: builder.query({
            query: (id) => ({
                url:  `/api/clients/diets/${id}`,
                validateStatus: (response, result) => {
                    return response.status === 200 && !result.isError
                },
            })
        }),
        getClientWorkoutPlan: builder.query({
            query: (id) => ({
                url:  `/api/clients/workoutplans/${id}`,
                validateStatus: (response, result) => {
                    return response.status === 200 && !result.isError
                },
            })
        }),
        getClientSubscription: builder.query({
            query: (id) => ({
                url:  `/api/clients/subscriptions/${id}`,
                validateStatus: (response, result) => {
                    return response.status === 200 && !result.isError
                },
            })
        })
        

    }),
})

export const {
    useGetClientsQuery,
    useGetCurrentClientQuery,
    useAddNewClientMutation,
    useUpdateClientMutation,
    useDeleteClientMutation,
    useLogNewWeightMutation,
    useGetClientDietPlanQuery,
    useGetClientWorkoutPlanQuery,
    useResetWeightsMutation,
    useGetClientSubscriptionQuery
    
} = clientsApiSlice

// returns the query result object
export const selectClientsResult = clientsApiSlice.endpoints.getClients.select()

// creates memoized selector
const selectClientsData = createSelector(
    selectClientsResult,
    clientsResult => clientsResult.data // normalized state object with ids & entities
)

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
    selectAll: selectAllClients,
    selectById: selectClientById,
    selectIds: selectClientIds
    // Pass in a selector that returns the users slice of state
} = clientsAdapter.getSelectors(state => selectClientsData(state) ?? initialState)