const board = (state = { columns: [] }, action) => {
  switch (action.type) {
    case "ADD_COLUMN": {
      const { columnId } = action.payload;
      return { columns: [...state.columns, columnId] };
    }
    case "MOVE_COLUMN": {
      const { oldColumnIndex, newColumnIndex } = action.payload;
      const newColumns = Array.from(state.columns);
      const [removedColumn] = newColumns.splice(oldColumnIndex, 1);
      newColumns.splice(newColumnIndex, 0, removedColumn);
      return { columns: newColumns };
    }
    case "DELETE_COLUMN": {
      const { columnId } = action.payload;
      const filterDeleted = tmpColumnId => tmpColumnId !== columnId;
      const newColumns = state.columns.filter(filterDeleted);
      return { columns: newColumns };
    }
    default:
      return state;
  }
};

export default board;