import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  offset: 0,
  sportId: '',
  seriesId: '',
  eventId: '',
  marketName: '',
  fancyMarketId: '',
  fancyMatchId: '',
  tossMarketId: '',
  tossMatchId: '',
  sportAndSeriesId: {},
  rowDetails: {},
  inplayMatchList: {},
  matchDecisionModal: false,
  teamDataArray: {},
  selectedTeam: '',
  teamData: '',
  sessionList: {},
  fieldsMatch: {},
  errorsMatch: {},
  fieldsMatchType: {
    matchType: 'INPLAY',
  },
  errorsMatchType: {},
  sessionData: {},
  selectedIds: [],
  isFetch: false,
  tossDecisionModal: false,
  updateModal: false,
  matchDetails: {},
  fieldsUser: {},
  errorsUser: {},
  marketDecisionModal: false,
  alertModal: false,
  matchDetailsModal: false,
  decisionModal: false,
  clearMarketId: '',
  matchData: {},
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setOffset: (state, action) => {
      state.offset = action.payload;
    },
    setSportId: (state, action) => {
      state.sportId = action.payload;
    },
    setSeriesId: (state, action) => {
      state.seriesId = action.payload;
    },
    setEventId: (state, action) => {
      state.eventId = action.payload;
    },
    setMarketName: (state, action) => {
      state.marketName = action.payload;
    },
    setFancyMarketId: (state, action) => {
      state.fancyMarketId = action.payload;
    },
    setFancyMatchId: (state, action) => {
      state.fancyMatchId = action.payload;
    },
    setTossMarketId: (state, action) => {
      state.tossMarketId = action.payload;
    },
    setTossMatchId: (state, action) => {
      state.tossMatchId = action.payload;
    },
    setSportAndSeriesId: (state, action) => {
      state.sportAndSeriesId = action.payload;
    },
    setRowDetails: (state, action) => {
      state.rowDetails = action.payload;
    },
    setInplayMatchList: (state, action) => {
      state.inplayMatchList = action.payload;
    },
    setMatchDecisionModal: (state, action) => {
      state.matchDecisionModal = action.payload;
    },
    setTeamDataArray: (state, action) => {
      state.teamDataArray = action.payload;
    },
    setSelectedTeam: (state, action) => {
      state.selectedTeam = action.payload;
    },
    setTeamData: (state, action) => {
      state.teamData = action.payload;
    },
    setSessionList: (state, action) => {
      state.sessionList = action.payload;
    },
    setFieldsMatch: (state, action) => {
      state.fieldsMatch = action.payload;
    },
    setErrorsMatch: (state, action) => {
      state.errorsMatch = action.payload;
    },
    setFieldsMatchType: (state, action) => {
      state.fieldsMatchType = action.payload;
    },
    setErrorsMatchType: (state, action) => {
      state.errorsMatchType = action.payload;
    },
    setSessionData: (state, action) => {
      state.sessionData = action.payload;
    },
    setSelectedIds: (state, action) => {
      state.selectedIds = action.payload;
    },
    setIsFetch: (state, action) => {
      state.isFetch = action.payload;
    },
    setTossDecisionModal: (state, action) => {
      state.tossDecisionModal = action.payload;
    },
    setUpdateModal: (state, action) => {
      state.updateModal = action.payload;
    },
    setMatchDetails: (state, action) => {
      state.matchDetails = action.payload;
    },
    setFieldsUser: (state, action) => {
      state.fieldsUser = action.payload;
    },
    setErrorsUser: (state, action) => {
      state.errorsUser = action.payload;
    },
    setMarketDecisionModal: (state, action) => {
      state.marketDecisionModal = action.payload;
    },
    setAlertModal: (state, action) => {
      state.alertModal = action.payload;
    },
    setMatchDetailsModal: (state, action) => {
      state.matchDetailsModal = action.payload;
    },
    setDecisionModal: (state, action) => {
      state.decisionModal = action.payload;
    },
    setClearMarketId: (state, action) => {
      state.clearMarketId = action.payload;
    },
    setMatchData: (state, action) => {
      state.matchData = action.payload;
    },
    setMatchName: (state, action) => {
      state.matchName = action.payload;
    },
    setMatchType: (state, action) => {
      state.matchType = action.payload;
    },
  },
});

export const {
  setOffset,
  setSportId,
  setSeriesId,
  setEventId,
  setMarketName,
  setFancyMarketId,
  setFancyMatchId,
  setTossMarketId,
  setTossMatchId,
  setSportAndSeriesId,
  setRowDetails,
  setInplayMatchList,
  setMatchDecisionModal,
  setTeamDataArray,
  setSelectedTeam,
  setTeamData,
  setSessionList,
  setFieldsMatch,
  setErrorsMatch,
  setFieldsMatchType,
  setErrorsMatchType,
  setSessionData,
  setSelectedIds,
  setIsFetch,
  setTossDecisionModal,
  setUpdateModal,
  setMatchDetails,
  setFieldsUser,
  setErrorsUser,
  setMarketDecisionModal,
  setAlertModal,
  setMatchDetailsModal,
  setDecisionModal,
  setClearMarketId,
  setMatchData,
  setMatchName,
  setMatchType
} = dashboardSlice.actions;

export default dashboardSlice.reducer;
