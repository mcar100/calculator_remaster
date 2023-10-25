// 에러 관련 함수 모음

function errorHandler(error, setError) {
  setError(() => {
    return { state: true, message: `Err: ${error.message}` };
  });
}

function resetError(setError) {
  setError(() => {
    return { state: false, message: "" };
  });
}

export { errorHandler, resetError };
