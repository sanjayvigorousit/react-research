import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from 'moment';
import { confirmAlert } from 'react-confirm-alert';
import { FaCheck, FaRegUserCircle } from "react-icons/fa";
import { VscGraph } from "react-icons/vsc";
import ReactPaginate from 'react-paginate';
import { isMobile } from "react-device-detect";
import { useParams, useNavigate } from "react-router-dom";

import { matchListByDatabase } from "../../redux/actions/sportActions";
import { updateMatch } from "../../redux/actions/sportActions";
import { setFieldsMatch, setFieldsError, setViewMatchModal, setAddMatchModal, setUpdateMatchModal } from '../../redux/reducers/customMatchSlice';
import { setInplayMatchList } from "../../redux/reducers/sportSlice";
import ToggleButton2 from "../../components/ToggleButton2/ToggleButton2";
import CustomSelect from "../../components/CustomSelect/CustomSelect";

const Dashboard = (props) => {

  const [sportId, setSportId] = useState(4);
  const [size, setSize] = useState(10);
  const [pageNo, setPageNo] = useState(1);
  const [keyWord, setKeyword] = useState("");
  const [offset, setOffset] = useState(0);
  const [isMatchOdds, setIsMatchOdds] = useState("");
  const [currentEventId, setCurrentEventId] = useState("");
  const [selectedIds, setSelectedIds] = useState([]);
  const [teamData, setTeamData] = useState([]);

  const [eventId, setEventId] = useState('');
  const [marketName, setMarketName] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { seriesId } = useParams();

  const { customMatchList, totalMatchCount } = useSelector((state) => state.customMatch);
  const { inplayMatchList } = useSelector((state) => state.sport);

  const { fieldsMatch, fieldsError } = useSelector((state) => state.sport);
  console.log("fieldsMatchfieldsMatchfieldsMatch", fieldsMatch);

  console.log("inplayMatchListinplayMatchListinplayMatchList", inplayMatchList);

  useEffect(() => {
    let reqData = {
      "status": "INPLAY"
    }
    dispatch(matchListByDatabase(reqData));
  }, [dispatch]);

  const onClickMenu = (url) => {
    navigate(url)
  }

  const handleToggleIsMatchOdds = () => {
    console.log("testtttttttttttttttt");

    dispatch(setFieldsMatch({ ...fieldsMatch, isMatchOdds: !fieldsMatch.isMatchOdds }));

    console.log("fieldsMatchfieldsMatch", fieldsMatch);

  }

  const selectMatch = (eventId) => {
    setSelectedIds((prevSelectedIds) => {
      const index = prevSelectedIds.indexOf(eventId);
      if (index !== -1) {
        return prevSelectedIds.filter((id) => id !== eventId);
      } else {
        return [...prevSelectedIds, eventId];
      }
    });
  };

  const handleSelectAllChange = () => {
    if (selectedIds.length === customMatchList.length) {
      setSelectedIds([]);
    } else {
      const allIds = customMatchList.map((item) => item.eventId);
      setSelectedIds(allIds);
    }
  };


  const dataSize = [
    { "id": "10", "name": "10" },
    { "id": "25", "name": "25" },
    { "id": "50", "name": "50" },
    { "id": "100", "name": "100" }
  ];

  const rangeData = [
    { "id": "1", "name": "1" },
    { "id": "2", "name": "2" },
    { "id": "3", "name": "3" },
    { "id": "4", "name": "4" },
    { "id": "5", "name": "5" },
  ]

  const toggleIsMatchOdds = (data) => {
    console.log("datadatadatadatadata", data);
    let finalData = inplayMatchList.map(element =>
      element.eventId === data?.eventId
        ? { ...element, isMatchOdds: !element.isMatchOdds }
        : element
    );
    dispatch(setInplayMatchList(finalData));
    let reqData = {
      "eventId": data?.eventId,
      "isMatchOdds": data?.isMatchOdds
    }
    dispatch(updateMatch(reqData));
  };

  const toggleIsBookmaker = (data) => {
    console.log("datadatadatadatadata", data);
    let finalData = inplayMatchList.map(element =>
      element.eventId === data?.eventId
        ? { ...element, isBookmaker: !element.isBookmaker }
        : element
    );
    dispatch(setInplayMatchList(finalData));
    let reqData = {
      "eventId": data?.eventId,
      "isBookmaker": data?.isBookmaker
    }
    dispatch(updateMatch(reqData));
  };
  const toggleIsFancy = (data) => {
    console.log("datadatadatadatadata", data);
    let finalData = inplayMatchList.map(element =>
      element.eventId === data?.eventId
        ? { ...element, isFancy: !element.isFancy }
        : element
    );
    dispatch(setInplayMatchList(finalData));
    let reqData = {
      "eventId": data?.eventId,
      "isFancy": data?.isFancy
    }
    dispatch(updateMatch(reqData));
  };

  const showTeamData = (data, temp) => {
    console.log("Fancy data:", data);
    setEventId(data.eventId);
    setMarketName(temp);
    setTeamData(data.teamData)
    // setFancyMarketId(data.marketId);
    // setFancyMatchId(data.matchId);
    // dispatch(getAllFancy(data.matchId));
  };

  return (

    <div className="mb-6 px-2 mt-4">
      <div className="bg-white border-[2px] border-[#e7eaec] min-h-12 pt-4 pr-20 pb-2 pl-4 text-[#676a6c] flex justify-start items-center space-x-1 ">
        <span class="text-green-500 blinking">
          <svg class="w-3 h-3  fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 0l2.932 8.066 8.132.003-6.564 5.159 2.532 8.047-6.532-4.916-6.532 4.916 2.532-8.047-6.564-5.159 8.132-.003z" />
          </svg>
        </span>
        <h5 className='font-[500] text-[14px] inline-block'>Inplay Match List</h5>
      </div>
      <div className="bg-[#ffffff] border-[1px] border-[#e7eaec] p-5 text-[13px] text-[#676a6c] w-full overflow-x-auto block">
        <table className="w-full max-w-full mb-4 border-collapse">
          <thead>
            <tr className='border-b-[1px] border-[#DDDDDD]'>
              <th className='border-none p-1'>Match Name </th>
              <th className='border-none p-1'>Market id/Event ID </th>
              <th className='border-none p-1'>Only Odds Status</th>
              <th className='border-none p-1'>Bookmaker Status</th>
              <th className='border-none p-1'>Fancy Status</th>
              <th className='border-none p-1'>Range</th>
              <th className='border-none p-1'>Action</th>
            </tr>
          </thead>
          <tbody>
            {inplayMatchList && inplayMatchList.length > 0 ?
              inplayMatchList.map((element, index) => (
                <>
                  <tr className='border-b-[1px] border-[#DDDDDD]'>
                    <td className='border-none p-1'>{element?.matchName}<br /><small>({element?.matchDate})</small></td>
                    <td className='border-none p-1'>{element?.marketId}<br /><small>({element?.marketId})</small></td>
                    <td className='border-none p-1'>
                      <div className="w-16">
                        <ToggleButton2 handleChange={() => toggleIsMatchOdds(element)} isChecked={element?.isMatchOdds} name={"isMatchOdds"} />
                      </div>
                    </td>
                    <td className='border-none p-1'>
                      <div className="w-16">
                        <ToggleButton2 handleChange={() => toggleIsBookmaker(element)} isChecked={element?.isBookmaker} name={"isBookmaker"} />
                      </div>
                    </td>
                    <td className='border-none p-1'>
                      <div className="w-16">
                        <ToggleButton2 handleChange={() => toggleIsFancy(element)} isChecked={element?.isFancy} name={"isFancy"} />
                      </div>
                    </td>
                    <td className='border-none p-1'>
                      <select className="lg:w-1/2 w-full bg-white text-black border-[1px] border-black" id="" onchange="">
                        <option selected value={0}>0</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                        <option value={7}>7</option>
                        <option value={8}>8</option>
                        <option value={9}>9</option>
                        <option value={10}>10</option>
                      </select>
                    </td>
                    <td className='border-none'>
                      <div className="py-1.5 flex justify-start items-center space-x-2">
                        <div onClick={() => onClickMenu(`/app/updateMatch/${element?.marketId}`)} className="border-[1px] border-gray-400 p-1 h-6 cursor-pointer flex justify-center items-center">
                          <FaCheck className='text-[#1FABB5]' />
                        </div>
                      </div>
                    </td>
                  </tr>
                </>
              ))
              : (<tr className="bg-white bg-opacity-5 " >
                <td colSpan={7} className="px-6 py-2 whitespace-nowrap font-medium text-sm text-gray-600">Record Not Found</td>
              </tr>)}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
