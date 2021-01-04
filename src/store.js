import { produce }  from 'immer';
export const reducer = (state = {
    counter: 1,
    child: {
        counter: 2,
        child: {
            counter: 3,
            child: {
                counter: 4,
            }
        }
    }
}, { type }) => {
    console.log('trigger action: '+ type);
    console.log('state:', state);
    switch(type) {
        case 'l1':
            // return {
            //     ...state,
            //     counter: state.counter + 1,
            // };
            state.counter += 1;
            return { ...state };
        case 'l2':
            // return {
            //     ...state,
            //     child: {
            //         ...state.child,
            //         counter: state.child.counter + 1,
            //     }
            //  };
            state.child.counter += 1;
            return { ...state };
            // return state;
        case 'l3':
            return {
                ...state,
                child: {
                    ...state.child,
                    child: {
                        ...state.child.child,
                        counter: state.child.child.counter + 1,
                    }
                }
            };
            // state.child.child.counter += 1;
            // return { ...state };
        case 'l4':
            return produce(state, draft => {
                draft.child.child.child.counter += 1;
            })
        default:
            return state;
    } 
}