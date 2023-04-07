import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";

import {
  clearError,
  GetPayment,
} from "../../../../../redux/actions/PaymentAction";
import { userInfo } from "../../../../../Utils/auth";
import Loading from "../../../../Layout/Loader/Loading";

const Payment = () => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { loading, url, fail, errors } = useSelector((state) => state.Payment);

  useEffect(() => {
    dispatch(GetPayment(userInfo().jwt));
  }, [dispatch]);

  useEffect(() => {
    if (fail) {
      alert.error(fail);
    } else if (errors) {
      alert.error(errors);
    }
    dispatch(clearError());
  }, [alert, dispatch, fail, errors]);

  return (
    <div>
      {loading ? <Loading /> : <>{url ? (window.location = url) : ""}</>}
    </div>
  );
};

export default Payment;
