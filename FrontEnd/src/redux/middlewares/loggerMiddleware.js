
export const loggerMiddleware = (store) => {
    return function(next){
        return function(action){
            // log actions
            console.log("[LOG] : " + action.type + " " + new Date().toString());

            // call next middleware
            next(action);

            // log modified state of app
            console.log(store.getState());
        }
    }
}