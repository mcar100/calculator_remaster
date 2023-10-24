function saveMemory(memory, setMemory, value) {
  if (memory.resultArray.length < 9) {
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

function resetMemory(memory, setMemory) {
  if (memory.result) {
    setMemory((prev) => {
      return { ...prev, result: "" };
    });
  }
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
    throw new Error("Memory-is-empty");
  }
}

export { saveMemory, getMemory, resetMemory, loadMemory };
