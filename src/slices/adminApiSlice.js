import { apiSlice } from "./apiSlice.js";



export const adminApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
          
        updateDietPlanById: builder.mutation({
            query: initialDietData => ({
                url: `/api/clients/diets/`,
                method: 'PATCH',
                body: {
                    ...initialDietData,
                }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Client', id: arg.id }
            ]
        }),
        CreateDietPlan: builder.mutation({
            query: DietData => ({
                url: `/api/clients/diets/`,
                method: 'POST',
                body: {
                    ...DietData,
                }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Client', id: arg.id }
            ]
        }),
          
        updateWorkoutPlanById: builder.mutation({
            query: initialWorkoutData => ({
                url: `/api/clients/workoutplans/`,
                method: 'PATCH',
                body: {
                    ...initialWorkoutData,
                }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Client', id: arg.id }
            ]
        }),
        createWorkoutPlan: builder.mutation({
            query:  WorkoutData => ({
                url: `/api/clients/workoutplans/`,
                method: 'POST',
                body: {
                    ...WorkoutData,
                }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Client', id: arg.id }
            ]
        }),
        createSubscription: 
        builder.mutation({
            query:  SubscriptionData => ({
                url: `/api/clients/subscriptions/`,
                method: 'POST',
                body: {
                    ...SubscriptionData,
                }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Client', id: arg.id }
            ]
        }),
        updateSubscriptionById: builder.mutation({
            query: initialSubscriptionData => ({
                url: `/api/clients/subscriptions/`,
                method: 'PATCH',
                body: {... initialSubscriptionData},
                
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Client', id: arg.id }
            ]
        }),
       

    })
})

    export const {
        useAddNewDietMutation,
        useUpdateDietPlanByIdMutation,
        useCreateDietPlanMutation,
        useGetClientWorkoutPlanQuery,
        useUpdateWorkoutPlanByIdMutation,
        useCreateWorkoutPlanMutation,
        useCreateSubscriptionMutation,
        useUpdateSubscriptionByIdMutation

       
    } = adminApiSlice