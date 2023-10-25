import { MAX_MEMORY_SIZE as maxMemorySize } from "./constants";

// 메모리 관련 함수 모음

// 결과 값을 배열 마지막에 저장, 사이즈 초과 시 가장 먼저 들어온 값을 제거
function saveMemory(memory, setMemory, value) {
  if (memory.resultArray.length < maxMemorySize) {
    setMemory((prev) => {
      const temp = { ...prev };
      temp.result = value;
      temp.resultArray = [...temp.resultArray, value];

      return temp;
    });
  } else {
    memory.resultArray.shift();
    setMemory((prev) => {
      const temp = { ...prev };
      temp.result = value;
      temp.resultArray = [...temp.resultArray, value];
      return temp;
    });
  }
}

function getMemory(memory, setMemory) {
  const value = memory.result;
  setMemory((prev) => {
    return { ...prev, result: "" };
  });
  return value;
}

function loadMemory(memory, setMemory) {
  if (memory.resultArray.length > 0) {
    const value = memory.resultArray.pop();
    setMemory((prev) => ({
      ...prev,
      result: value,
      resultArray: [...prev.resultArray],
    }));
  } else {
    throw new Error("MR-Is-Empty");
  }
}

function resetMemory(memory, setMemory) {
  if (memory.result !== "") {
    setMemory((prev) => {
      return { ...prev, result: "" };
    });
  }
}

export { saveMemory, getMemory, loadMemory, resetMemory };
