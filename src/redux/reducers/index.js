import { combineReducers } from "redux";
import authSlice from "./authSlice";
import userSlice from "./userSlice";
import domainSlice from "./domainSlice";
import matchSlice from "./matchSlice";
import customMatchSlice from "./customMatchSlice";
import customSeriesSlice from "./customSeriesSlice";
import editUserSlice from "./editUserSlice";
import modalSlice from "./modalSlice";
import componentSlice from "./componentSlice";
import dashboardSlice from "./dashboardSlice";
import sportsSlice from "./sportsSlice";
import sportSlice from "./sportSlice";


const rootReducer = combineReducers({
    auth: authSlice,
    user: userSlice,
    domain: domainSlice,
    editUser: editUserSlice,
    match: matchSlice,
    customMatch: customMatchSlice,
    customSeries: customSeriesSlice,
    sports: sportsSlice,
    sport: sportSlice,
    modal: modalSlice,
    component: componentSlice,
    dashboard: dashboardSlice
});

export default rootReducer;
