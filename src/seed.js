import shortid from "shortid";

export default function seed(store) {
  console.log("Insert first column");
  const firstColumnId = shortid.generate();

  store.dispatch({
    type: "ADD_COLUMN",
    payload: { columnId: firstColumnId, columnTitle: "First column" }
  });

  store.dispatch({
    type: "ADD_TASK",
    payload: {
      columnId: firstColumnId,
      taskId: shortid.generate(),
      taskText: "First task"
    }
  });

  store.dispatch({
    type: "ADD_TASK",
    payload: {
      columnId: firstColumnId,
      taskId: shortid.generate(),
      taskText: "Second task"
    }
  });
};
