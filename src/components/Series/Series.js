import React, { Component } from 'react';
import { connect } from 'react-redux';
import { seriesActions, matchActions } from '../../_actions';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import UpdateCustomSeriesModal from "./components/UpdateCustomSeriesModal/UpdateCustomSeriesModal";
import AddCustomSeriesModal from "./components/AddCustomSeriesModal/AddCustomSeriesModal";
import ViewSeriesDetailsModal from "./components/ViewSeriesDetailsModal/ViewSeriesDetailsModal";
import SkyButton from '../../components/SkyButton/SkyButton';
import ActionButton from '../../components/ActionButton/ActionButton';
import PageTitle from "../../components/PageTitle/PageTitle";
import Marquee from "../../components/Marquee/Marquee";
import Searchbox from '../../components/SearchBox/SearchBox';
import ShowOption from '../../components/ShowOption/ShowOption';
import ReactPaginate from 'react-paginate';
import { isMobile } from "react-device-detect";
import moment from 'moment'
import UpdateMatchModal from "../Match/components/UpdateMatchModal/UpdateMatchModal";
import { CONST, } from '../../_config';
import { authHeader, history } from '../../_helpers';


class Series extends Component {

  constructor(props) {
    super(props);
    this.state = {
      scoreIdWithApi: false,
      scoreIdDetails: {},
      fieldsMatchUpdate: {},
      errorsMatchUpdate: {},
      isManual: null,
      updateMatchModal: false,
      sportId: "",
      offset: 0,
      sportAndSeriesId: {},
      rowDetails: {},
      viewSeriesModal: false,
      matchListModal: false,

      keyWord: '',
      pageNo: 1,
      size: 10,
      viewData: {},
      seriesId: "",
      addCustomSeriesModal: false,
      fieldsSeriesAdd: {},
      errorsSeriesAdd: {},

      updateSeriesModal: false,
      fieldSeriesUpdate: {},
      errorsSeriesUpdate: {},
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {

    if (nextProps.series.addseriessuccess) {

      return {
        ...nextProps,

        addCustomSeriesModal: false,
        // updateMatchModal: false,
        fieldsSeriesAdd: {},
        errorsSeriesAdd: {},

        updateSeriesModal: false,
        fieldSeriesUpdate: {},
        errorsSeriesUpdate: {},
      }
    }
    if (nextProps.match.addCustomMatchSuccess) {
      return {
        ...nextProps,
        updateMatchModal: false,
        fieldsMatchUpdate: {}
      }
    }
    // if (nextProps.series.isScoreId) {
    //   return {
    //     ...nextProps,
    //     scoreIdDetails: {
    //       ["scoreId"]: nextProps.series && nextProps.series.saveScoreId && nextProps.series.saveScoreId.scoreId ? nextProps.series.saveScoreId.scoreId : ""
    //     }
    //   }
    // }
    else {
      return {
        ...nextProps
      }
    }
  }

  componentDidMount() {
    let data = {
      "keyWord": this.state.keyWord,
      "pageNo": this.state.pageNo,
      "size": this.state.size,
      "sportId": ""
    }
    this.props.dispatch(seriesActions.getCustomSeriesList(data));
    this.props.dispatch(matchActions.getAllProviderTypeOption());

  }

  handleSearch = (e) => {
    e.preventDefault();
    let { value } = e.target;
    let keyWord = this.state.keyWord;
    keyWord = value;
    this.setState({ keyWord });

    let data = {
      "keyWord": this.state.keyWord,
      "pageNo": this.state.pageNo,
      "size": this.state.size
    }
    this.props.dispatch(seriesActions.getCustomSeriesList(data));
  }

  handleAddCustomSeriesModal = () => {
    this.setState({ addCustomSeriesModal: !this.state.addCustomSeriesModal });
  }

  inputChangeSeriesAdd = (e) => {
    e.preventDefault();
    let { name, value } = e.target;
    console.log("sportiddddddddddddddddddd", e.target);
    let fieldsSeriesAdd = this.state.fieldsSeriesAdd;
    let errorsSeriesAdd = this.state.errorsSeriesAdd;
    fieldsSeriesAdd[name] = value;
    errorsSeriesAdd[name] = "";
    this.setState({ fieldsSeriesAdd, errorsSeriesAdd });
  }

  navigate = (url) => {
    this.props.history.push(url);
  }

  customSeriesAddSubmit = (e) => {
    e.preventDefault();
    if (this.handleValidationSeriesAdd()) {

      let resData = {
        "name": this.state.fieldsSeriesAdd.name,
        "sportId": this.state.fieldsSeriesAdd.sportId,
        "seriesId": this.state.fieldsSeriesAdd.seriesId,
        "isManual": true
      }

      console.log('resDataresDataresData', resData);

      let data = {
        "keyWord": this.state.keyWord,
        "pageNo": this.state.pageNo,
        "size": this.state.size,
        "sportId": this.state.sportId ? this.state.sportId : ""
      }

      this.props.dispatch(seriesActions.createCustomSeries(resData, data));
    }
  }

  handleValidationSeriesAdd = () => {
    let fieldsSeriesAdd = this.state.fieldsSeriesAdd;
    let errorsSeriesAdd = {};
    let formIsValid = true;
    if (!fieldsSeriesAdd["sportId"] || fieldsSeriesAdd["sportId"] === "") {
      formIsValid = false;
      errorsSeriesAdd["sportId"] = "Cannot be empty";
    }
    if (!fieldsSeriesAdd["seriesId"] || fieldsSeriesAdd["seriesId"] === "") {
      formIsValid = false;
      errorsSeriesAdd["seriesId"] = "Cannot be empty";
    }
    this.setState({ errorsSeriesAdd: errorsSeriesAdd });
    return formIsValid;
  }

  handleUpdateSeriesModal = (data) => {
    this.setState({ updateSeriesModal: true, fieldSeriesUpdate: data, sportId: data.sportId });
  }

  handleUpdateSeriesModalHide = () => {
    this.setState({ updateSeriesModal: false });
  }

  handleMatchListModal = (data) => {
    console.log('data`````````````````', data);
    this.props.dispatch(seriesActions.getAllMatchesBySeriesId(data));

    this.setState({ matchListModal: !this.state.matchListModal });
    this.setState({ seriesId: data.seriesId, sportId: data.sportId });
  }

  manageSeriesStatus = () => {
    let fieldSeriesUpdate = this.state.fieldSeriesUpdate;
    fieldSeriesUpdate['isActive'] = !fieldSeriesUpdate['isActive']
    this.setState({ fieldSeriesUpdate })
  }

  inputChangeSeriesUpdate = (e) => {
    e.preventDefault();
    let { name, value } = e.target;
    let fieldSeriesUpdate = this.state.fieldSeriesUpdate;
    let errorsSeriesUpdate = this.state.errorsSeriesUpdate;
    fieldSeriesUpdate[name] = value;
    errorsSeriesUpdate[name] = "";
    this.setState({ fieldSeriesUpdate, errorsSeriesUpdate });
  }

  seriesUpdateSubmit = (e) => {
    e.preventDefault();
    if (this.handleValidationSeriesUpdate()) {
      let resData = {

        "id": this.state.fieldSeriesUpdate.id,
        "name": this.state.fieldSeriesUpdate.name,
        "sportId": this.state.fieldSeriesUpdate.sportId,
        "seriesId": this.state.fieldSeriesUpdate.seriesId,
        "isActive": this.state.fieldSeriesUpdate.isActive,
      }
      console.log('resDataresDataresData', resData);

      let data = {
        "keyWord": this.state.keyWord,
        "pageNo": this.state.pageNo,
        "size": this.state.size,
        "sportId": this.state.sportId ? this.state.sportId : ""
      }

      this.props.dispatch(seriesActions.updateCustomSeries(resData, data));
    }
  }
  handleValidationSeriesUpdate = () => {
    let fieldSeriesUpdate = this.state.fieldSeriesUpdate;
    let errorsSeriesUpdate = {};
    let formIsValid = true;
    // sportId
    if (!fieldSeriesUpdate["sportId"] || fieldSeriesUpdate["sportId"] === "") {
      formIsValid = false;
      errorsSeriesUpdate["sportId"] = "Cannot be empty";
    }
    // seriesId
    if (!fieldSeriesUpdate["seriesId"] || fieldSeriesUpdate["seriesId"] === "") {
      formIsValid = false;
      errorsSeriesUpdate["seriesId"] = "Cannot be empty";
    }
    // name
    if (!fieldSeriesUpdate["name"] || fieldSeriesUpdate["name"] === "") {
      formIsValid = false;
      errorsSeriesUpdate["name"] = "Cannot be empty";
    }

    this.setState({ errorsSeriesUpdate: errorsSeriesUpdate });
    return formIsValid;
  }

  handleViewSeriesModal = (data) => {
    this.setState({ viewSeriesModal: !this.state.viewSeriesModal, viewData: data });
  }
  updateCustomSeriesStatus = (data) => {
    let datatemp = {
      "id": data.id,
    }
    let pdata = {
      "keyWord": this.state.keyWord,
      "pageNo": this.state.pageNo,
      "size": this.state.size,
      "sportId": this.state.sportId ? this.state.sportId : "",
    }

    confirmAlert({
      title: 'Confirm to Delete?',
      message: `Are you sure to delete ${data.image} Series ?`,
      buttons: [
        {
          label: 'Yes',
          onClick: () => this.props.dispatch(seriesActions.disableCustomSeries(datatemp, pdata, null))
        },
        {
          label: 'No'
        }
      ]
    });
  }

  showOptionChange = (e) => {
    e.preventDefault();
    let { value } = e.target;
    let size = this.state.size;
    size = value;
    this.setState({ size });
  }


  handlePageClick = (data) => {
    // console.log("data  ", data);
    let offset = Math.ceil(data.selected * this.state.size);
    this.setState({ offset: offset, pageNo: data.selected });
    let datatemp = {
      "keyWord": this.state.keyWord,
      "pageNo": data.selected + 1,
      "size": this.state.size,
      "sportId": this.state.sportId ? this.state.sportId : ""
    }
    this.props.dispatch(seriesActions.getCustomSeriesList(datatemp));
  }


  handleSportWiseSeries = (data) => {
    // console.log("dataoooooooo", data);
    this.setState({ sportId: data });
    let datatemp = {
      "keyWord": this.state.keyWord,
      "pageNo": this.state.pageNo,
      "size": this.state.size,
      "sportId": data

    }

    // console.log('datatemp', datatemp);

    this.props.dispatch(seriesActions.getCustomSeriesList(datatemp));
  }

  handleUpdateMatchModal = (data) => {
    // let reqData = data && data.event && data.event.id ? data.event.id : null;


    // let header = new Headers({
    //   'Content-Type': 'application/json',
    //   "Authorization": authHeader().Authorization
    // });
    // const requestOptions = {
    //   method: "POST",
    //   headers: header,
    //   // body: JSON.stringify({
    //   //   "id": id
    //   // })
    // }

    // fetch(CONST.BACKEND_URL_PANEL + `/saveScoreId?matchId=${reqData}`, requestOptions)
    //   .then(response => {

    //     console.log('response@@@@@@@@@@@@@@@..........', response);

    //     if (!response.ok) {
    //       throw new Error('Network response was not ok');
    //     }
    //     return response.json(); // Assuming the response is in JSON format

    //   })
    //   .then(data => {
    //     console.log('datadatadata..........', data);
    //     let scoreIdDetails = this.state.scoreIdDetails;
    //     scoreIdDetails["scoreId"] = data.scoreId

    //     this.setState({ scoreIdDetails })
    //     // return data.data;
    //   })
    //   .catch(error => {
    //     console.error('Error:', error);
    //   });



    // // this.props.dispatch(seriesActions.saveScoreId(reqData));


    // console.log('data_________????', data);

    let matchObj = {
      marketId: data && data.marketId ? data.marketId : "-",
      matchId: data && data.event && data.event.id ? data.event.id : "-",
      name: data && data.event && data.event.name ? data.event.name : "-",
      openDate: data && data.event && data.event.openDate ? moment(data.event.openDate).format("YYYY-MM-DD HH:mm")
        : null,
      scoreId: "",
      seriesId: data && data.competition && data.competition.id ? data.competition.id : "-",
      sportId: data && data.eventType && data.eventType.id ? data.eventType.id : "-"
    }

    this.setState({
      updateMatchModal: true, fieldsMatchUpdate: matchObj
      // , isManual: data.isManual 
    });
  }

  handleCallApiSportId = (data) => {

    // console.log('data000000000000000000000', data);


    let header = new Headers({
      'Content-Type': 'application/json',
      "Authorization": authHeader().Authorization
    });
    const requestOptions = {
      method: "POST",
      headers: header,
    }

    fetch(CONST.BACKEND_URL_PANEL + `/saveScoreId?matchId=${data}`, requestOptions)
      .then(response => {

        // console.log('response@@@@@@@@@@@@@@@..........', response);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Assuming the response is in JSON format

      })
      .then(data => {
        console.log('datadatadata..........', data);
        let scoreIdDetails = this.state.scoreIdDetails;
        scoreIdDetails["scoreId"] = data.scoreId ? data.scoreId : null

        this.setState({ scoreIdDetails, scoreIdWithApi: true })
        // return data.data;
      })
      .catch(error => {
        console.error('Error:', error);
      });

  }

  handleBackWithCustomScoreId = () => {
    this.setState({ scoreIdWithApi: false, scoreIdDetails: {} })
  }



  handleUpdateMatchModalHide = () => {
    // this.props.dispatch(seriesActions.getAllCustomSeries());
    this.setState({ updateMatchModal: false, fieldsMatchUpdate: {}, isManual: null });
  }

  inputChangeMatchUpdate = (e) => {
    e.preventDefault();
    let { name, value } = e.target;
    let fieldsMatchUpdate = this.state.fieldsMatchUpdate;
    let errorsMatchUpdate = this.state.errorsMatchUpdate;
    fieldsMatchUpdate[name] = value;
    errorsMatchUpdate[name] = "";

    // console.log('update_____????', name, value);

    this.setState({ fieldsMatchUpdate, errorsMatchUpdate });
  }

  inputChangeSeriesId = (e) => {

    e.preventDefault();
    let { name, value } = e.target;

    console.log(name, value);

    let scoreIdDetails = this.state.scoreIdDetails;
    let errorsMatchUpdate = this.state.errorsMatchUpdate;
    scoreIdDetails[name] = value;
    errorsMatchUpdate[name] = "";

    // console.log('update_____????', name, value);
    this.setState({ scoreIdDetails, errorsMatchUpdate });

  }


  matchUpdateSubmit = (e) => {
    // console.log('wwwwwwwwwwwwwwwwwwwwwwwww');
    e.preventDefault();
    if (this.handleValidationMatchUpdate()) {
      let resData = {
        "sportId": this.state.fieldsMatchUpdate.sportId,
        "seriesId": this.state.fieldsMatchUpdate.seriesId,
        "matchId": this.state.fieldsMatchUpdate.matchId,
        "marketId": this.state.fieldsMatchUpdate.marketId,
        "name": this.state.fieldsMatchUpdate.name,
        "openDate": this.state.fieldsMatchUpdate.openDate,
        "scoreData": this.state.fieldsMatchUpdate.scoreData,
        "bookmakerApi": this.state.fieldsMatchUpdate.bookmakerApi,
        "bookmakerFancy": this.state.fieldsMatchUpdate.bookmakerFancy,
        "sportBook": this.state.fieldsMatchUpdate.sportBook,
        "betFair": this.state.fieldsMatchUpdate.betFair,
        "fancy": this.state.fieldsMatchUpdate.fancy,
        "tvUrl": this.state.fieldsMatchUpdate.tvUrl,
        "tvId": this.state.fieldsMatchUpdate.tvId,
        "scoreId": this.state.scoreIdDetails.scoreId ? this.state.scoreIdDetails.scoreId : this.state.fieldsMatchUpdate.scoreId,
        "scoreUrl": this.state.fieldsMatchUpdate.scoreUrl,
        "isActive": this.state.fieldsMatchUpdate.isActive ? this.state.fieldsMatchUpdate.isActive : false,
      }

      // let data = {
      //   "keyWord": this.state.keyWord,
      //   "pageNo": this.state.pageNo,
      //   "size": this.state.size
      // }

      console.log('resData__________series__to___match_____________???', resData);

      let reqDataMatchesBySeriesId = {
        "seriesId": this.state.seriesId,
        "sportId": this.state.sportId
      }

      this.props.dispatch(matchActions.createCustomMatchForSeriesPage(resData,
        //  data, 
        reqDataMatchesBySeriesId));

    }
  }


  handleValidationMatchUpdate = () => {
    let fieldsMatchUpdate = this.state.fieldsMatchUpdate;
    let errorsMatchUpdate = {};
    let formIsValid = true;
    // sportId
    if (!fieldsMatchUpdate["sportId"] || fieldsMatchUpdate["sportId"] === "") {
      formIsValid = false;
      errorsMatchUpdate["sportId"] = "Cannot be empty";
    }
    // seriesId
    if (!fieldsMatchUpdate["seriesId"] || fieldsMatchUpdate["seriesId"] === "") {
      formIsValid = false;
      errorsMatchUpdate["seriesId"] = "Cannot be empty";
    }
    // matchId
    if (!fieldsMatchUpdate["matchId"] || fieldsMatchUpdate["matchId"] === "") {
      formIsValid = false;
      errorsMatchUpdate["matchId"] = "Cannot be empty";
    }
    // marketId
    if (!fieldsMatchUpdate["marketId"] || fieldsMatchUpdate["marketId"] === "") {
      formIsValid = false;
      errorsMatchUpdate["marketId"] = "Cannot be empty";
    }
    // name
    if (!fieldsMatchUpdate["name"] || fieldsMatchUpdate["name"] === "") {
      formIsValid = false;
      errorsMatchUpdate["name"] = "Cannot be empty";
    }
    // openDate
    if (!fieldsMatchUpdate["openDate"] || fieldsMatchUpdate["openDate"] === "") {
      formIsValid = false;
      errorsMatchUpdate["openDate"] = "Cannot be empty";
    }
    // scoreData
    if (!fieldsMatchUpdate["scoreData"] || fieldsMatchUpdate["scoreData"] === "") {
      formIsValid = false;
      errorsMatchUpdate["scoreData"] = "Cannot be empty";
    }
    // bookmakerApi
    if (!fieldsMatchUpdate["bookmakerApi"] || fieldsMatchUpdate["bookmakerApi"] === "") {
      formIsValid = false;
      errorsMatchUpdate["bookmakerApi"] = "Cannot be empty";
    }
    // betFair
    if (!fieldsMatchUpdate["betFair"] || fieldsMatchUpdate["betFair"] === "") {
      formIsValid = false;
      errorsMatchUpdate["betFair"] = "Cannot be empty";
    }
    // fancy
    if (!fieldsMatchUpdate["fancy"] || fieldsMatchUpdate["fancy"] === "") {
      formIsValid = false;
      errorsMatchUpdate["fancy"] = "Cannot be empty";
    }
    // tvUrl
    if (!fieldsMatchUpdate["tvUrl"] || fieldsMatchUpdate["tvUrl"] === "") {
      formIsValid = false;
      errorsMatchUpdate["tvUrl"] = "Cannot be empty";
    }
    // tvId
    if (!fieldsMatchUpdate["tvId"] || fieldsMatchUpdate["tvId"] === "") {
      formIsValid = false;
      errorsMatchUpdate["tvId"] = "Cannot be empty";
    }
    // scoreUrl
    if (!fieldsMatchUpdate["scoreUrl"] || fieldsMatchUpdate["scoreUrl"] === "") {
      formIsValid = false;
      errorsMatchUpdate["scoreUrl"] = "Cannot be empty";
    }

    this.setState({ errorsMatchUpdate: errorsMatchUpdate });
    console.log('errorsMatchUpdateerrorsMatchUpdateerrorsMatchUpdateerrorsMatchUpdate::::::::::::', errorsMatchUpdate);
    return formIsValid;
  }


  manageMatchStatus = () => {
    let fieldsMatchUpdate = this.state.fieldsMatchUpdate;
    fieldsMatchUpdate['isActive'] = !fieldsMatchUpdate['isActive']
    this.setState({ fieldsMatchUpdate })
  }


  // inputChangeSportIdUpdate = (e) => {
  //   e.preventDefault();
  //   let { name, value } = e.target;
  //   let fieldsMatchUpdate = this.state.fieldsMatchUpdate;
  //   let errorsMatchUpdate = this.state.errorsMatchUpdate;
  //   fieldsMatchUpdate[name] = value;
  //   errorsMatchUpdate[name] = "";
  //   this.setState({ fieldsMatchUpdate, errorsMatchUpdate });
  //   let data = {
  //     "sportId": this.state.fieldsMatchUpdate.sportId,
  //   }
  //   this.props.dispatch(seriesActions.getSeriesBySportId(data));
  // }


  renderSwitch(param) {
    switch (param) {
      case 1:
        return 'BookMaker Odds';
      case 2:
        return 'BetFair Odds';
      case 3:
        return 'BookMaker Fancy';
      case 4:
        return 'ScoreType';
      case 5:
        return 'Score from Url';
      case 6:
        return 'Sportbook';
      case 7:
        return 'Fancy';
      case 8:
        return 'Tv Url';
      default:
        return '';
    }
  }


  renderSwitchByFieldsName(param) {
    switch (param) {
      case 1:
        return 'bookmakerApi';
      case 2:
        return 'betFair';
      case 3:
        return 'bookmakerFancy';
      case 4:
        return 'scoreData';
      case 5:
        return 'scoreUrl';
      case 6:
        return 'sportBook';
      case 7:
        return 'fancy';
      case 8:
        return 'tvUrl';
      default:
        return '';
    }
  }


  render() {

    let { series, match } = this.props;
    let { seriesList, total, loading, matchListBySeriesId, saveScoreId } = series;
    let { allProvider } = match;

    const dataSize = [
      { "id": "10", "name": "10" },
      { "id": "25", "name": "25" },
      { "id": "50", "name": "50" },
      { "id": "100", "name": "100" }
    ]

    let sportData = [
      { "id": "1", "name": "Soccer" },
      { "id": "2", "name": "Tennis" },
      { "id": "4", "name": "Cricket" }
    ]

    // console.log('this.propsthis.propsthis.propsthis.props', this.props.series);
    // console.log("RENDER____seriesListseriesTotalseriesListseriesTotal::::", total);
    // console.log("RENDER____matchListBySeriesIdl::::", matchListBySeriesId);

    // console.log("RENDER____fieldsMatchUpdate::::", this.state.fieldsMatchUpdate);
    // console.log("RENDER____scoreIdDetails::::", this.state.scoreIdDetails);

    // console.log('RENDER_____this.state.scoreIdDetails?////', this.state.scoreIdDetails);
    // console.log('RENDER_____this.state.scoreIdWithApi?////', this.state.scoreIdWithApi);
    // console.log('RENDER_____this.state.scoreIdDetails?________', this.state.scoreIdDetails);
    console.log('RENDER_____this.state.sportId?________', this.state.sportId);

    return (

      <>
        <div className="flex flex-col flex-1 overflow-y-auto">
          <main className="relative flex-1 ">
            <Marquee marqueData={"Welcome To Center Panel"} />
            <PageTitle title={"Series"} />

            <div className='p-6'>
              <div className='w-full flex justify-between bg-white border-b border-t border-gray-200 p-3'>
                <h2 className='text-base font-semibold text_color'>Series List</h2>
              </div>
              <div className='bg-white pb-10 w-full'>
                <div className='w-full md:flex justify-between items-center px-4 pt-2'>
                  <ShowOption optionData={dataSize} size={this.state.size} inputChange={this.showOptionChange} />
                  <div className='flex justify-between items-center whitespace-nowrap space-x-4'>
                    <Searchbox handleSearch={this.handleSearch} />
                    <SkyButton onSubmit={this.handleAddCustomSeriesModal} title={"ADD"} />
                  </div>
                </div>

                <div className='md:flex justify-start items-center space-x-2 px-4 pt-2 w-1/3'>
                  {
                    sportData && sportData.length > 0 ?
                      sportData.map((element, index) => (
                        <>
                          {/* <div className='flex justify-between items-center whitespace-nowrap space-x-4'>
                            <span className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => this.handleSportWiseSeries(element && element.id ? element.id : "")} >
                              {element && element.name ? element.name : "-"}
                            </span>
                          </div> */}
                          <div className="text-md flex items-center w-full text-white">
                            <button className={`w-full hover:bg-[rgb(53,179,149)] ${this.state.sportId === element.id ? "bg-[rgb(53,179,149)]" : "bg-[#2A3258]"} py-2 px-4 text-center focus:outline-none rounded`} onClick={() => this.handleSportWiseSeries(element && element.id ? element.id : "")}>{element && element.name ? element.name : "-"}</button>
                          </div>
                        </>
                      )) : null
                  }

                </div>
                <div className="rounded-lg overflow-hidden pb-2 p-6">
                  <div className="overflow-auto max-w-full ">
                    <div className="inline-block min-w-full  ">
                      <div className="overflow-hidden  ">
                        <table className="min-w-full divide-y divide-gray-800 border-0">
                          <thead className="rounded-t">
                            <tr className="uppercase text-left text-sm font-semibold text-white">
                              <th className="whitespace-nowrap p-2 bg-[#2A3258]">#</th>
                              <th className="whitespace-nowrap p-2 bg-[#2A3258]">Sport Id</th>
                              <th className="whitespace-nowrap p-2 bg-[#2A3258]">Name</th>
                              <th className="whitespace-nowrap p-2 bg-[#2A3258]">Series Id</th>
                              <th className="whitespace-nowrap p-2 bg-[#2A3258]">Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {
                              seriesList && seriesList.length > 0 ?
                                seriesList.map((element, index) => (<React.Fragment key={element.id}>
                                  <tr key={element.id} className=" border-b border-black border-opacity-10 text-sm text-gray-600">
                                    <td className="p-2 whitespace-nowrap"> {this.state.offset + index + 1}</td>
                                    <td className="p-2 whitespace-nowrap text-sm tabletext cursor-pointer">{element && element.sportId ? element.sportId : "-"}</td>
                                    <td className="p-2 whitespace-nowrap text-sm tabletext cursor-pointer">{element && element.name ? element.name : "-"}</td>
                                    <td className="p-2 whitespace-nowrap">{element && element.seriesId ? element.seriesId : "-"}</td>
                                    <td className="p-2 whitespace-nowrap flex text-white space-x-2">
                                      <ActionButton onSubmit={this.handleViewSeriesModal} data={element} title={"More"} />
                                      <ActionButton onSubmit={this.handleUpdateSeriesModal} data={element} title={"Edit"} />
                                      <ActionButton onSubmit={this.updateCustomSeriesStatus} data={element} title={element.isRemove ? "Enable" : "Disable"} />

                                      {element && element.isActive ?
                                        <>
                                          <ActionButton onSubmit={this.handleMatchListModal} data={element} title={element.seriesId === this.state.seriesId &&
                                            this.state.matchListModal ? " - " : " + "} />
                                        </> : null
                                      }




                                      <div className='flex justify-center items-center'>
                                        <div className={`${element && element.isActive ? "bg-green-500 p-2 rounded-full" : "bg-red-500 text-sm p-2 rounded-full"}`}></div>
                                      </div>
                                    </td>
                                  </tr>
                                  {element.seriesId === this.state.seriesId ?
                                    <>
                                      {this.state.matchListModal ?
                                        <tr className="bg-gray-200 border-4 border-[#2A3258] w-full">
                                          <td colSpan={5} className="p-0.5">
                                            <table className="bg-white text-gray-900 table-auto w-full shadow-none">
                                              <thead className="bg-gray-200 rounded-t">
                                                <tr className='text-sm font-semibold tracking-wider text-left text-white uppercase'>
                                                  <th className="px-2 py-2.5 whitespace-nowrap bg-[#2A3258]">#</th>
                                                  <th className="px-2 py-2.5 whitespace-nowrap bg-[#2A3258]">NAME</th>
                                                  <th className="px-2 py-2.5 whitespace-nowrap bg-[#2A3258]">SPORT ID</th>
                                                  <th className="px-2 py-2.5 whitespace-nowrap bg-[#2A3258]">SERIES ID</th>
                                                  <th className="px-2 py-2.5 whitespace-nowrap bg-[#2A3258]">MATCH ID</th>
                                                  <th className="px-2 py-2.5 whitespace-nowrap bg-[#2A3258]">MARKET ID</th>
                                                  <th className="px-2 py-2.5 whitespace-nowrap bg-[#2A3258]">OPEN DATE</th>
                                                  <th className="px-2 py-2.5 whitespace-nowrap bg-[#2A3258]">Actions</th>
                                                </tr>
                                              </thead>
                                              {
                                                matchListBySeriesId && matchListBySeriesId.length > 0 ?
                                                  matchListBySeriesId.map((element1, index) => (<React.Fragment key={index}>
                                                    <>
                                                      <tbody className="">
                                                        <tr className="bg-white border-b border-black border-opacity-10 text-sm text-gray-600">
                                                          <td className="px-2 whitespace-nowrap">
                                                            {this.state.offset + index + 1}


                                                          </td>

                                                          <td className="px-2 whitespace-nowrap">
                                                            {element1 && element1.event && element1.event.name ? element1.event.name : "NA"}

                                                          </td>
                                                          <td className="px-2 whitespace-nowrap">
                                                            {element1 && element1.eventType && element1.eventType.id ? element1.eventType.id : "NA"}
                                                          </td>
                                                          <td className="px-2 whitespace-nowrap">
                                                            {element1 && element1.competition && element1.competition.id ? element1.competition.id : "NA"}
                                                          </td>
                                                          <td className="px-2 whitespace-nowrap">
                                                            {element1 && element1.event && element1.event.id ? element1.event.id : "NA"}
                                                          </td>
                                                          <td className="px-2 whitespace-nowrap">
                                                            {element1 && element1.marketId ? element1.marketId : "NA"}
                                                          </td>
                                                          <td className="p-2 whitespace-nowrap">
                                                            {element1 && element1.event && element1.event.openDate ? moment(element1.event.openDate).format("YYYY-MM-DD HH:mm") : 0}
                                                          </td>
                                                          {/* <td className="p-2 whitespace-nowrap">
                                                            {element1 && element1.openDate ? moment(element1.openDate).format("YYYY-MM-DD HH:mm") : 0}
                                                          </td> */}
                                                          <td className="px-2 whitespace-nowrap">
                                                            <div className="inline-flex items-center space-x-2 text-white">

                                                              {
                                                                element1 && element1.status && element1.status === "Inserted" ?
                                                                  <span className="text-green-500">
                                                                    Match Is Inserted                                                               </span>
                                                                  :
                                                                  <>
                                                                    <ActionButton onSubmit={this.handleUpdateMatchModal} data={element1} title={"Add"} />

                                                                  </>
                                                              }

                                                            </div>
                                                          </td>

                                                        </tr>
                                                      </tbody>
                                                    </>
                                                  </React.Fragment>))
                                                  : (<tr className="bg-white bg-opacity-5 " >
                                                    <td className="col-span-3 px-2 py-3 text-sm font-medium text-gray-500 whitespace-nowrap">Not found</td>
                                                  </tr>)
                                              }
                                            </table>
                                          </td>
                                        </tr> : null}
                                    </>
                                    : null}
                                </React.Fragment>))
                                : (<tr className="bg-white bg-opacity-5 " >
                                  <td colSpan={5} className="px-6 py-2 whitespace-nowrap font-medium text-sm text-gray-600">Record Not Found</td>
                                </tr>)
                            }
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>


                  {
                    isMobile ?
                      <nav className="relative z-0 flex justify-end mt-5 w-76">
                        {
                          total && total > 10 ?
                            <ReactPaginate
                              previousLabel={'Prev'}
                              nextLabel={'Next'}
                              breakLabel={'...'}
                              breakClassName={'break-me'}
                              pageCount={total / this.state.size}
                              marginPagesDisplayed={1}
                              pageRangeDisplayed={1}
                              onPageChange={this.handlePageClick}
                              containerClassName={'pagination'}
                              pageClassName={'page-cls'}
                              activeClassName={'active'}
                            />
                            : null}
                      </nav> : <nav className="relative z-0 flex justify-end mt-5 w-76">
                        {
                          total && total > 10 ?
                            <ReactPaginate
                              previousLabel={'Previous'}
                              nextLabel={'Next'}
                              breakLabel={'...'}
                              breakClassName={'break-me'}
                              pageCount={total / this.state.size}
                              marginPagesDisplayed={3}
                              pageRangeDisplayed={3}
                              onPageChange={this.handlePageClick}
                              containerClassName={'pagination'}
                              pageClassName={'page-cls'}
                              activeClassName={'active'}
                            />
                            : null}
                      </nav>
                  }

                  <AddCustomSeriesModal
                    addCustomSeriesModal={this.state.addCustomSeriesModal}
                    handleAddCustomSeriesModal={this.handleAddCustomSeriesModal}
                    inputChangeSeriesAdd={this.inputChangeSeriesAdd}
                    fieldsSeriesAdd={this.state.fieldsSeriesAdd}
                    errorsSeriesAdd={this.state.errorsSeriesAdd}
                    customSeriesAddSubmit={this.customSeriesAddSubmit}
                    sportData={sportData}
                    loading={loading}
                  />
                  <UpdateCustomSeriesModal
                    updateSeriesModal={this.state.updateSeriesModal}
                    // handleUpdateSeriesModal={this.handleUpdateSeriesModal}
                    handleUpdateSeriesModalHide={this.handleUpdateSeriesModalHide}
                    inputChangeSeriesUpdate={this.inputChangeSeriesUpdate}
                    fieldSeriesUpdate={this.state.fieldSeriesUpdate}
                    errorsSeriesUpdate={this.state.errorsSeriesUpdate}
                    seriesUpdateSubmit={this.seriesUpdateSubmit}
                    manageSeriesStatus={this.manageSeriesStatus}
                    sportData={sportData}
                    loading={loading}
                  />
                  <ViewSeriesDetailsModal
                    viewSeriesModal={this.state.viewSeriesModal}
                    handleViewSeriesModal={this.handleViewSeriesModal}
                    viewData={this.state.viewData}
                  />


                  <UpdateMatchModal
                    updateMatchModal={this.state.updateMatchModal}
                    handleUpdateMatchModal={this.handleUpdateMatchModal}
                    handleUpdateMatchModalHide={this.handleUpdateMatchModalHide}
                    inputChangeMatchUpdate={this.inputChangeMatchUpdate}
                    fieldsMatchUpdate={this.state.fieldsMatchUpdate}
                    matchUpdateSubmit={this.matchUpdateSubmit}
                    manageMatchStatus={this.manageMatchStatus}
                    optionData={allProvider}
                    sportData={sportData}
                    // allSeries={allSeries}
                    // seriesListBySportId={seriesListBySportId}
                    // inputChangeSportIdUpdate={this.inputChangeSportIdUpdate}
                    renderSwitch={this.renderSwitch}
                    renderSwitchByFieldsName={this.renderSwitchByFieldsName}
                    inputChangeSeriesId={this.inputChangeSeriesId}
                    handleCallApiSportId={this.handleCallApiSportId}
                    handleBackWithCustomScoreId={this.handleBackWithCustomScoreId}
                    // loading={loading}
                    isManual={this.state.isManual}
                    scoreIdDetails={this.state.scoreIdDetails}
                    scoreIdWithApi={this.state.scoreIdWithApi}
                    onSeriesPage={1}
                  />




                </div>
              </div>
            </div>
          </main>
        </div>
      </>
    );
  }
}
function mapStateToProps(state) {
  const { series, users, match } = state;

  console.log('series:::::mapStateToProps:', series);

  return {
    series,
    users,
    match
  };
}
export default connect(mapStateToProps)(Series);