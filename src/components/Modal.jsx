import axios from "axios";
import { useEffect, useState } from "react";
import { headers } from "../utils/constants";
import formatDate from "../utils/formatData";
import Loader from "./Loader";
import c from "../utils/checkValid";
import { setPath } from "../redux/slices/flightSlice";
import { useDispatch } from "react-redux";

const Modal = ({ detailId, close }) => {
  const [d, setDetail] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    setDetail(null);
    const params = {
      flight: detailId,
    };
    axios
      .get("https://flight-radar1.p.rapidapi.com/flights/detail", {
        params,
        headers,
      })
      .then((res) => {
        dispatch(setPath(res.data.trail));
        setDetail(res.data);
      });
  }, [detailId]);
  return (
    <div className="modal-outer">
      <div className="modal-inner">
        <div className="close-wrapper">
          <button onClick={close}>X</button>
        </div>
        {!d ? (
          <Loader />
        ) : (
          <>
            <h2>{c(d.aircraft.model?.text)}</h2>
            <h2>{c(d.aircraft.model?.code)}</h2>
            <p>
              <span>Tail Code</span>
              <span>{c(d.aircraft?.registration)}</span>
            </p>
            {d.aircraft?.images?.large ? (
              <img src={d.aircraft.images?.large[0].src} />
            ) : (
              <p>No Photo Found</p>
            )}
            <p>
              <span>Comopany</span>
              <span>{c(d.airline?.short)}</span>
            </p>

            <p>
              <span>Take Off</span>
              <a href={d.airport?.origin?.website} target="_blank">
                {c(d.airport?.origin?.name)}
              </a>
            </p>
            <p>
              <span>Landing</span>
              <a href={d.airport?.destination?.website} target="_blank">
                {c(d.airport?.destination?.name)}
              </a>
            </p>
            <p>
              <span>Departure Time</span>
              <span>
                {d.time.scheduled.departure > 0
                  ? formatDate(d.time.scheduled.departure)
                  : "Unknown"}
              </span>
            </p>
            <p>
              <span>Landing Time</span>
              <span>
                {d.time.scheduled.arrival > 0
                  ? formatDate(d.time.scheduled.arrival)
                  : "Unknown"}
              </span>
            </p>
            <p className={d.status?.icon}>
              <span>{c(d.status?.text)}</span>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;
