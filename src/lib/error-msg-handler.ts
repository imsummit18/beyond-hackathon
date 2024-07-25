const errorMsgHandler = (err: any) => {
  return err.response?.data?.error;
  // return  (
  //   (Array.isArray(err?.response?.data?.message)
  //     ? err?.response?.data?.message[0]
  //     : err?.response?.data?.message) ?? err?.message
  // );
};

export default errorMsgHandler;
