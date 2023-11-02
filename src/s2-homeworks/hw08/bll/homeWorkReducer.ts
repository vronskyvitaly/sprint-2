import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            const sortedState = [...state];
            if (action.payload === "up") {
                sortedState.sort((a,b)=> a.name.localeCompare(b.name) )
            }
            else if (action.payload === "down") {
                sortedState.sort((a, b) => b.name.localeCompare(a.name));
            }
            return sortedState

        }
        case 'check': {
            return state.filter(el=> el.age >= action.payload)
        }
        default:
            return state
    }
}
